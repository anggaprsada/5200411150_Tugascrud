MEMBUAT DATABASE & MIGRATIONS  
npx sequelize-cli db:create  
npx sequelize-cli db:migrate  

JALANKAN MENGUGNAKAN  
node app.js  

PENGUJIAN PRODUCT BRAND  
[GET]  
http://localhost:3000/brands  
[POST]  
http://localhost:3000/brands  
{  
  "brand_name": "Asus"   
}  
  
[PUT]  
http://localhost:3000/brands/:id  
{  
  "brand_name": "Asus"   
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
  "product_name": "isi nama",  
  "type": "isi tipe",  
  "brand_id": masukan sesuai brand yang terdaftar  
}    
    
[PUT]  
http://localhost:3000/products/:id  
{  
  "product_name": "isi nama",  
  "type": "isi tipe",  
  "brand_id": masukan sesuai brand yang terdaftar  
}    
   
[DELETE]  
http://localhost:3000/products/:id  
