FROM ubuntu

RUN apt-get update && apt-get install -y curl git
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash && apt-get install -y nodejs

