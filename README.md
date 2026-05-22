# Digix Web UI

## Сборка
```
docker buildx build \
  --platform linux/amd64 \
  --build-arg VITE_API_BASE_URL=http://37.1.215.81:18080 \
  -t yuriydubinin100/digix-web-ui:1.0.0 \
  --load \
  .
```

## Запуск
```
docker run -d \
  --name digix-web-ui \
  -p 3000:80 \
  yuriydubinin100/digix-web-ui:1.0.0
```

## Деплой
```
docker push yuriydubinin100/digix-web-ui:1.0.0
```

```
docker pull yuriydubinin100/digix-web-ui:1.0.0
```