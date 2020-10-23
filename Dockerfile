FROM node:current-slim

WORKDIR /app
ADD package.json /app/
RUN npm cache verify
RUN npm cache clean -f
RUN npm install
ADD . /app

RUN apt-get update && \
    apt-get -y install fontconfig libfreetype6 libx11-6 libxext6 libxrender1 && \
    apt-get clean

EXPOSE 9000
CMD []
ENTRYPOINT ["npm", "start"]