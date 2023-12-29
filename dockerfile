# 指定使用最新的nginx源
FROM nginx:latest
# 将dist目录拷贝到nginx目录下
COPY ./dist /usr/share/nginx/html/
# 使用default.conf覆盖默认的配置
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 80
