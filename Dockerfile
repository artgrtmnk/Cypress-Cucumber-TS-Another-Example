FROM cypress/included:12.3.0

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install --global yarn
RUN $(npm bin)/cypress verify
