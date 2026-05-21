# Digix Web UI

## Запуск
```
docker build --build-arg VITE_API_BASE_URL=$(grep VITE_API_BASE_URL .env | cut -d= -f2-) -t digix-web-ui .
```

```
docker run -d --name digix-web-ui -p 3000:80 digix-web-ui
```