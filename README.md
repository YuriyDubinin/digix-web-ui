# Digix Web UI

## Запуск
```
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:18080 \
  -t digix-web .
```

```
docker run -d --name digix-web -p 3000:80 digix-web
# → http://localhost:3000
```