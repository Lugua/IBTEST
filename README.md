# IBTEST
Project test IBM

This project is reference to the cabys catalogs of the Ministerio de Hacienda Costa Rica.

Installation

1) Clone git repository https://github.com/Lugua/IBTEST.git

2) Execute command #npm install

3) Execute command #node server.js

4) Create images and container
  # docker run -i -t -p 9000:9000 lugua/cabysapp:v2.1
  
  # kubectl create -f deploy.yml
  
  # kubectl get pods
  
  # kubectl run myapp-node --image=lugua/cabysapp:v2.1 --port=9000
