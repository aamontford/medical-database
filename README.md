# Electronic Medical Record System API

This is the API documentation for the Electronic Medical Record System.

## Endpoints

### 1. Register a Patient

- **Endpoint:**

- **Description:**
Register a new patient with the system.

- **Request Body:**
```json
{
  "name": "string",
  "gender": "string",
  "phoneNumber": "string",
  "residentialAddress": "string"
}
