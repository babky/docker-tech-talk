FROM node

ADD package.json /fe/package.json
WORKDIR /fe
RUN npm install
ADD . /fe
EXPOSE 4200
CMD npm run start

