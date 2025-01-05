
# pick image with git and bash
ARG BASE=node:22-bullseye

#---------------------

FROM ${BASE} AS dependencies
WORKDIR /app
ENV NODE_ENV development

COPY package*.json ./
RUN npm install

# don't copy source, mount it via volume

# volumes folders must be created and chowned before docker-compose creates them as root
# create them during docker build
RUN mkdir -p .next
RUN chown node:node . node_modules .next

USER node

EXPOSE 3001
ENV PORT 3001

CMD ["npm", "run", "dev"]
