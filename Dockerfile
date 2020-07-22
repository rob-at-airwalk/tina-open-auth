FROM ubuntu

RUN apt-get update && apt-get install -y curl git

# Install NodeJS
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash && apt-get install -y nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y --no-install-recommends yarn

