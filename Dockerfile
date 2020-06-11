FROM node

COPY . /home/app-utn-devops

WORKDIR /home/app-utn-devops

RUN npm i

ENTRYPOINT ["node", "index.js"]
