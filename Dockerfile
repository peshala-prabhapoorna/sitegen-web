FROM alpine:latest AS builder

RUN apk add --no-cache curl

WORKDIR /app

COPY . .

RUN mkdir -p assets/packages && \
    curl -k -L "https://github.com/peshala-prabhapoorna/sitegen-app/releases/download/v1.0.1/sitegen-1.0.1-py3-none-any.whl" \
    -o "assets/packages/sitegen-1.0.1-py3-none-any.whl"

FROM nginx:alpine

COPY --from=builder /app/assets /usr/share/nginx/html/assets
COPY --from=builder /app/css /usr/share/nginx/html/css
COPY --from=builder /app/scripts /usr/share/nginx/html/scripts
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
