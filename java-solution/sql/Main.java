package sql;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Type> schemaMap = new HashMap<>();
        schemaMap.put("userId", Type.INTEGER_REQUIRED);
        schemaMap.put("title", Type.STRING_REQUIRED);
        schemaMap.put("completed", Type.BOOLEAN);
        Schema schema = new Schema(schemaMap);
        Table table = new Table(schema);
        HashMap<String, Object> row1 = new HashMap<>();
        row1.put("userId", 1);
        row1.put("title", "mu title");
        row1.put("completed", true);

        HashMap<String, Object> row2 = new HashMap<>();
        row2.put("userId", 2);
        row2.put("title", "my new title");
        row2.put("completed", false);

        HashMap<String, Object> row3 = new HashMap<>();
        row3.put("userId", 2);
        row3.put("title", "my new  3rd title");
        row3.put("completed", true);

        table.insertRow(row1);
        table.insertRow(row2);
        table.insertRow(row3);
        HashMap<String, Object> findQuery = new HashMap<>();
        findQuery.put("completed", true);
        System.out.println(table.find(findQuery));
    }
}

