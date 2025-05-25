npx sequelize-cli db:create  
npx sequelize-cli migration:generate --name create-product-brands   
npx sequelize-cli migration:generate --name create-product-catalogs   
npx sequelize-cli db:migrate  


jalankan menggunakan node app.js

PENGUJIAN PRODUCT BRAND  
[GET]  
http://localhost:3000/brands  
[POST]  
http://localhost:3000/brands  
[PUT]  
http://localhost:3000/brands/:id  
[DELETE]  
http://localhost:3000/brands/:id  
  
PENGUJIAN PRODUCT CATALOG  
[GET]  
http://localhost:3000/products   
[POST]  
http://localhost:3000/products   
[PUT]  
http://localhost:3000/products/:id  
[DELETE]  
http://localhost:3000/products/:id  
