# 📡 Oxyone IoT API Documentation

This API handles data ingestion from IoT sensors (Temperature, GPS, Humidity) to the Oxyone Cloud ecosystem.

## 🔓 Authentication
All requests must include a valid **Device Token** in the header:
`Authorization: Bearer <YOUR_DEVICE_TOKEN>`

---

## 🌡️ Endpoint: Post Sensor Data
`POST /v1/telemetry`

### Request Body (JSON)
| Field | Type | Description |
| :--- | :--- | :--- |
| `device_id` | String | Unique hardware ID of the sensor |
| `temp` | Float | Temperature in Celsius |
| `humidity` | Float | Percentage (0-100) |
| `lat` / `lng` | Float | GPS Coordinates (Optional) |
| `timestamp` | Long | Unix timestamp |

### Example Request
```json
{
  "device_id": "SN-COLD-2024-001",
  "temp": -18.5,
  "humidity": 45.2,
  "timestamp": 1704067200
}
