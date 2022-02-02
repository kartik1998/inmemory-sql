package sql;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Table {
    private Schema schema;
    private List<HashMap<String, Object>> rowList;

    public Table(Schema schema) {
        this.schema = schema;
        this.rowList = new ArrayList<>();
    }

    private boolean validateRow(HashMap<String, Object> row) {
        for (String key : schema.getAttributes()) {
            Type rowType = schema.getType(key);
            if (rowType.isRequired()) {
                if (!row.containsKey(key) || row.get(key) == null)
                    throw new Error("invalid row schema, row must contain " + key);
            } else {
                if (!row.containsKey(key)) row.put(key, null);
            }
            if (!rowType.compareType(row.get(key)))
                throw new Error("invalid row schema, row attribute type is different");
        }
        for (String key : row.keySet()) {
            if (!schema.schemaMap.containsKey(key)) throw new Error("invalid row schema, extra key present " + key);
        }
        return true;
    }

    public void insertRow(HashMap<String, Object> row) {
        this.validateRow(row);
        this.rowList.add(row);
    }

    public List<HashMap<String, Object>> find() {
        return this.rowList;
    }

    public List<HashMap<String, Object>> find(HashMap<String, Object> query) {
        List<HashMap<String, Object>> output = new ArrayList<>();
        for (HashMap<String, Object> row : this.rowList) {
            if (compareFindQuery(query, row)) output.add(row);
        }
        return output;
    }

    private boolean compareFindQuery(HashMap<String, Object> query, HashMap<String, Object> row) {
        for (String key : query.keySet()) {
            if (!this.schema.schemaMap.containsKey(key)) return false;
            if (!row.get(key).equals(query.get(key))) return false;
        }
        return true;
    }
}
