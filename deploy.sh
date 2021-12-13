#/bin/bash

echo 'Deploy started...'
rsync -av --exclude='node_modules' --exclude='.git' ../nodejs-news/ ubuntu@152.70.74.152:~/projects/news
ssh ubuntu@152.70.74.152 "cd ~/projects/news && docker-compose up -d --build"
echo 'Deployed!'
