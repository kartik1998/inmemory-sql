package sql;

public enum Type {
    STRING, BOOLEAN, INTEGER, STRING_REQUIRED, BOOLEAN_REQUIRED, INTEGER_REQUIRED;

    public boolean isRequired() {
        return this.equals(STRING_REQUIRED) || this.equals(BOOLEAN_REQUIRED) || this.equals(INTEGER_REQUIRED);
    }

    public boolean compareType(Object object) {
        if (object instanceof Integer) {
            return this.equals(INTEGER_REQUIRED) || this.equals(INTEGER);
        }
        if (object instanceof Boolean) {
            return this.equals(BOOLEAN_REQUIRED) || this.equals(BOOLEAN);
        }
        if (object instanceof String) {
            return this.equals(STRING) || this.equals(STRING_REQUIRED);
        }
        return false;
    }
}

