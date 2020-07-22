FROM node:12.18.2 AS compile-image
WORKDIR /opt/ng
COPY package* ./
RUN npm install
COPY . ./
ENV PATH="./node_modules/.bin:$PATH" 

RUN ng build --prod


FROM nginx:1.19.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=compile-image /opt/ng/dist/product-app /usr/share/nginx/html

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]


