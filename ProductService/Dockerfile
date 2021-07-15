FROM node:latest

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV production

ADD dist /home/node/app/dist
ADD package.json /home/node/app/package.json

RUN chown -R node:node /home/node/app

USER node
WORKDIR /home/node/app
RUN npm install --save

EXPOSE 43001

CMD npm run watch