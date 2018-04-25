FROM node

ADD . /fe
WORKDIR /fe
RUN npm install
EXPOSE 4200
CMD npm run start

