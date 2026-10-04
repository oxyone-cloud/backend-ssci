from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "OxyONE Backend Online", "service": "cold-service"}
