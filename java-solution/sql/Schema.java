package sql;

import java.util.HashMap;

public class Schema {
    public final HashMap<String, Type> schemaMap; // <attribute, type>

    public Schema(HashMap<String, Type> schemaMap) {
        this.schemaMap = schemaMap;
    }

    public Type getType(String key) {
        if (schemaMap.containsKey(key)) return schemaMap.get(key);
        return null;
    }

    public String[] getAttributes() {
        String[] out = new String[this.schemaMap.keySet().size()];
        int idx = 0;
        for (String s : this.schemaMap.keySet()) {
            out[idx++] = s;
        }
        return out;
    }
}
