FROM node as node

ADD package.json /fe/package.json
WORKDIR /fe
RUN npm install
ADD . /fe
RUN npm run build

FROM nginx as nginx
COPY --from=node /fe/dist/ /usr/share/nginx/html/

