MEMBUAT DATABASE & MIGRATIONS  
npx sequelize-cli db:create  
npx sequelize-cli db:migrate  

JALANKAN MENGGUNAKAN  
node app.js  

PENGUJIAN PRODUCT BRAND  
[GET]  
http://localhost:3000/brands  
[POST]  
http://localhost:3000/brands   
Body > Raw > JSON  
{  
  "brand_name": "..."   
}  
  
[PUT]  
http://localhost:3000/brands/:id   
Body > Raw > JSON  
{  
  "brand_name": "..."   
}  
  
[DELETE]  
http://localhost:3000/brands/:id  
  
PENGUJIAN PRODUCT CATALOG  
[GET]  
http://localhost:3000/products   
[POST]  
http://localhost:3000/products   
Body > Raw > JSON  
{  
  "product_name": "...",  
  "type": "...",  
  "brand_id": Integer    
}    
    
[PUT]  
http://localhost:3000/products/:id   
Body > Raw > JSON  
{  
  "product_name": "...",  
  "type": "...",  
  "brand_id": Integer     
}    
   
[DELETE]  
http://localhost:3000/products/:id  
