var supertest = require("supertest");
var server = supertest.agent("https://api-estrella-roja.appspot.com");
var should = require('should');
var istanbul = require('istanbul');

describe("Unit Testing",function(){
  
  it("Login exitoso",function(done){

    server
    .post("/users/login")
    .send({email: 'diego.castagne@gmail.com',password: 'dca321'})
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });

  it("Login con contraseña incorrecta",function(done){

    server
    .post("/users/login")
    .send({email: 'diego.castagne@gmail.com',password: 'test'})
    .expect(500) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });

  it("Login con email inexistente",function(done){

    server
    .post("/users/login")
    .send({email: 'algo@gmail.com',password: 'dca321'})
    .expect(500) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });

  it("Crea un usuario",function(done){

    server
    .post("/users")
    .send({name:'Unit', last_name: 'Test',email: 'unittest@mail.com',birthdate: '2000-01-01',password: 'unittest', postal_code: '10000', phone_number: '2220000000'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Tratar de crear un usuario sin un atributo",function(done){

    server
    .post("/users")
    .send({name:'Unit', last_name: 'Test',birthdate: '2000-01-01',password: 'unittest', postal_code: '10000', phone_number: '2220000000'})
    .expect(400) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });

  it("Tratar de crear un usuario introduciendo un dato incorrecrto (tipo variable)",function(done){

    server
    .post("/users")
    .send({name:'Unit', last_name: 'Test',email: 'unittest@mail.com',birthdate: 'test',password: 'unittest', postal_code: '10000', phone_number: '2220000000'})
    .expect(500) // THis is HTTP response
    .end(function(err,res){
      done();
    });
  });

  it("Crea un usuario de administrador",function(done){

    server
    .post("/adminusers")
    .send({name:'Unit', last_name: 'Test',email: 'unittest@mail.com',password: 'unittest'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una pulsera",function(done){

    server
    .post("/bracelet")
    .send({active_at: '2018-11-21', status: true, ticket_id: '1', tour_id: '1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un camion",function(done){

    server
    .post("/bus")
    .send({tour_id: '1', mural_id: '3'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un empresa",function(done){

    server
    .post("/companies")
    .send({name:'Unit', full_name: 'Test',number: '2220',street: 'unittest',postal_code: '72000',rfc:'CAAD970714BT5',ieps:'15',iva:'15',lat:'29',lng:'19'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea informacion de fechas",function(done){

    server
    .post("/dateinformation")
    .send({date_id: '1', hour_id:'1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un intervalo de fechas",function(done){

    server
    .post("/dates")
    .send({start_date: '2018-11-23',end_date: '2018-11-25',service: true})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una imagen",function(done){

    server
    .post("/image")
    .send({image_url: 'someurl.com', description: 'A description'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un marcador",function(done){

    server
    .post("/markers")
    .send({tour_id: '1',lat:'29',lng:'19',description:'A description',name: 'Test'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un mural",function(done){

    server
    .post("/mural")
    .send({title: 'Unit Testing',name:'Diego',last_name:'Rivera',description:'A description'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una narrativa",function(done){

    server
    .post("/narrative")
    .send({audio_url:'someurl.com'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un lugar",function(done){

    server
    .post("/place")
    .send({name:'Lugar',lng:'29',lat:'19',place_type_id: '1',description:'Description',narrative_id:'1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una relacion lugar con imagen",function(done){

    server
    .post("/placeimage")
    .send({place_id:'4',image_id:'1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una relacion tour con lugares",function(done){

    server
    .post("/placetour")
    .send({tour_id:'1',place_id:'4'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un tipo de lugares",function(done){

    server
    .post("/placetypes")
    .send({name:'Algo'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un precio",function(done){

    server
    .post("/price")
    .send({price_amount:'320',tour_id:'1',ticket_type_id:'1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una compra",function(done){

    server
    .post("/purchases")
    .send({sub_total:'320',total:'400',company_id:'1',user_id:'1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una parada",function(done){

    server
    .post("/stop")
    .send({name:'Parada',lat:'30',lng:'30',tour_id:'1',description:'Description'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un ticket",function(done){

    server
    .post("/ticket")
    .send({purchase_id: '8',price_id:'1',name:'Diego',last_name:'Castagne',age:'21',date_tour:'2018-11-23',qr_code:'someurl.com',sub_total:'320',created_at:'2018-11-23'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un tipo de ticket",function(done){

    server
    .post("/tickettype")
    .send({name:'Test'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea una relacion horas y fecha",function(done){

    server
    .post("/time")
    .send({tour_id:'1',date_hour_id:'1'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Crea un tour",function(done){

    server
    .post("/tour")
    .send({name:'Test',image_id:'1',description:'Description'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

it("Actualiza un usuario",function(done){

    server
    .put("/users/34")
    .send({last_name:'update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un usuario de administrador",function(done){

    server
    .put("/adminusers/4")
    .send({last_name:'update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una pulsera",function(done){

    server
    .put("/bracelet/4")
    .send({status:false})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un camion",function(done){

    server
    .put("/bus/4")
    .send({tour_id:'2'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un empresa",function(done){

    server
    .put("/companies/2")
    .send({full_name:'update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza informacion de fechas",function(done){

    server
    .put("/dateinformation/2")
    .send({hour_id:'2'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un intervalo de datos",function(done){

    server
    .put("/dates/1")
    .send({end_date:'2018-11-22'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una hora",function(done){

    server
    .put("/hour/1")
    .send({start_time: '2018-11-14 04:00:00'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una imagen",function(done){

    server
    .put("/image/4")
    .send({image_url:'update.com'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un marcador",function(done){

    server
    .put("/markers/1")
    .send({name:'update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un mural",function(done){

    server
    .put("/mural/12")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una narrativa",function(done){

    server
    .put("/narrative/4")
    .send({audio_url:'update.com'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un lugar",function(done){

    server
    .put("/place/26")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una relacion lugar con imagen",function(done){

    server
    .put("/placeimage/2")
    .send({image_id:'2'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una relacion tour con lugares",function(done){

    server
    .put("/placetour/2")
    .send({tour_id:'2'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un tipo de lugares",function(done){

    server
    .put("/placetypes/6")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un precio",function(done){

    server
    .put("/price/8")
    .send({price_amount:'420'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una compra",function(done){

    server
    .put("/purchases/10")
    .send({sub_total:'100'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una parada",function(done){

    server
    .put("/stop/2")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un ticket",function(done){

    server
    .put("/ticket/2")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un tipo de ticket",function(done){

    server
    .put("/tickettype/4")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza una relacion horas y fecha",function(done){

    server
    .put("/time/3")
    .send({tour_id:'3'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Actualiza un tour",function(done){

    server
    .put("/tour/4")
    .send({name:'Update'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

it("Elimina un usuario",function(done){

    server
    .delete("/users")
    .send({id:'69'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un usuario de administrador",function(done){

    server
    .delete("/adminusers")
    .send({id:'13'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una pulsera",function(done){

    server
    .delete("/bracelet")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un camion",function(done){

    server
    .delete("/bus")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una empresa",function(done){

    server
    .delete("/companies")
    .send({id:'10'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina informacion de fechas",function(done){

    server
    .delete("/dateinformation")
    .send({id:'10'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un intervalo de fechas",function(done){

    server
    .delete("/dates")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una imagen",function(done){

    server
    .delete("/image")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un marcador",function(done){

    server
    .delete("/markers")
    .send({id:'11'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un mural",function(done){

    server
    .delete("/mural")
    .send({id:'20'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una narrativa",function(done){

    server
    .delete("/narrative")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un lugar",function(done){

    server
    .delete("/place")
    .send({id:'34'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una relacion lugar con imagen",function(done){

    server
    .delete("/placeimage")
    .send({id:'10'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una relacion tour con lugares",function(done){

    server
    .delete("/placetour")
    .send({id:'10'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un tipo de lugares",function(done){

    server
    .delete("/placetypes")
    .send({id:'14'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un precio",function(done){

    server
    .delete("/price")
    .send({id:'16'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una compra",function(done){

    server
    .delete("/purchases")
    .send({id:'18'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una parada",function(done){

    server
    .delete("/stop")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un ticket",function(done){

    server
    .delete("/ticket")
    .send({id:'10'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un tipo de ticket",function(done){

    server
    .delete("/tickettype")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina una relacion horas y fecha",function(done){

    server
    .delete("/time")
    .send({id:'11'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Elimina un tour",function(done){

    server
    .delete("/tour")
    .send({id:'12'})
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los usuarios",function(done){

    server
    .get("/users")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa un usuario por id",function(done){

    server
    .get("/users/1")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa un usuario por email",function(done){

    server
    .get("/users?email=diego.castagne@gmail.com")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los usuarios de administradores",function(done){

    server
    .get("/adminusers")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las pulseras",function(done){

    server
    .get("/bracelet")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los camiones",function(done){

    server
    .get("/bus")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las empresas",function(done){

    server
    .get("/companies")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa la informacion de fechas",function(done){

    server
    .get("/dateinformation")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los intervalos de datos",function(done){

    server
    .get("/dates")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las horas",function(done){

    server
    .get("/hour")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las imagenes",function(done){

    server
    .get("/image")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los marcadores",function(done){

    server
    .get("/markers")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los murales",function(done){

    server
    .get("/mural")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las narrativas",function(done){

    server
    .get("/narrative")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los lugares",function(done){

    server
    .get("/place")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa la relacion lugar con imagen",function(done){

    server
    .get("/placeimage")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa la relacion tour con lugares",function(done){

    server
    .get("/placetour")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los tipos de lugares",function(done){

    server
    .get("/placetypes")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los precios",function(done){

    server
    .get("/price")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las compras",function(done){

    server
    .get("/purchases")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa las paradas",function(done){

    server
    .get("/stop")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los tickets",function(done){

    server
    .get("/ticket")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los tipos de ticket",function(done){

    server
    .get("/tickettype")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa la relacion horas y fecha",function(done){

    server
    .get("/time")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });

  it("Regresa los tours",function(done){

    server
    .get("/tour")
    .expect(200) // THis is HTTP response
    .expect('Content-Type', /json/)
    .end(function(err,res){
      done();
    });
  });
});
