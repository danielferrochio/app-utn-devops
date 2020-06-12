FROM node

EXPOSE 3000

COPY . /home/app-utn-devops
WORKDIR /home/app-utn-devops
RUN chown -R node:node .

USER node
RUN npm install --build-from-source

USER node
ENTRYPOINT ["node", "index.js"]
