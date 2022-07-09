function spanish(){
    //Global
    document.getElementById("translate").innerHTML = "ENG";
    document.getElementById("translate").onclick = english;
    document.getElementsByClassName("about").innerHTML = "Sobre el proyecto";

    //Index
    document.getElementById("pr").innerHTML = "Hola! Soy Agustín Rizzo.";
    document.getElementById("about-me-title").innerHTML = "Sobre mí";
    document.getElementById("about-me").innerHTML = "Emprendedor desde los 14 años.<br>Desde chico siempre quise emprender, soñaba con tener oficinas y un equipo al cual dirigir. Actualmente estoy a cargo de Crêate, mi primer emprendimiento, en el cuál me ocupo de diseñar estrategias de ventas, marketing, diseño de indumentaria, y muchas cosas más.<br>En 2019 decidí expandirme al rubro tecnológico, creando Toby. Una app que conecta a los paseadores de perros con los clientes, para ayudar a combatir el maltrato animal y la desconfianza de las personas a la hora de dejar a su mascota con un paseador.<br>Toby fue uno de los ganadores del Premio Emprendedor Digital 2019, otorgado por CIPPEC, el Laboratorio de Innovación del Banco Interamericano de Desarrollo (BID Lab) y el Ministerio de Producción y Trabajo de la Nación.La Universidad Tecnológica Nacional (UTN) incubó la aplicación y actualmente cuenta con apoyo de Pan American Energy y CIPPEC.";
    document.getElementById("projects-title").innerHTML = "Proyectos";

    //Toby
    document.getElementById("about-toby").innerHTML = "Una plataforma que conecta a paseadores de perros con clientes. Ayuda a combatir el maltrato animal y la desconfianza a hacia los paseadores.<br>Toby ganó el Premio Emprendedor Digital";

    //Crêate
    document.getElementById("about-create").innerHTML = "a";

    //Assist
    document.getElementById("about-assist").innerHTML = "a";

    //Ciclo
    document.getElementById("about-ciclo").innerHTML = "a";
}

function english(){
    //Global
    document.getElementById("translate").innerHTML = "SPA";
    document.getElementById("translate").onclick = spanish;
    document.getElementsByClassName("about").innerHTML = "About";
    //Index
    document.getElementById("pr").innerHTML = "Hi! I'm Agustín Rizzo.";
    document.getElementById("about-me-title").innerHTML = "About me";
    document.getElementById("about-me").innerHTML = "Entrepreneur since 14 years old.<br>Since a child, I always dreamed the posibility of having offices and lead a team. Today I'm the leader of Crêate, my first entrepreneurship, where I'm in charge of the design of sales strategies, marketing, clothes designing, and more things.<br>In 2019, I decided to open to the technology area, and created Toby. An App that connects dog walkers with costumers, to help combat animal abuse and distrust of people when leaving their pet with a walker. <br>Toby was one of the winners of the \"Premio Emprendedor Digital 2019\" (Digital Entrepreneur Award), awarded by CIPPEC, the Innovation Laboratory of the Inter-American Development Bank (IDB Lab) and the Ministry of Production and Labor of the Nation.Currently, the National Technological University (UTN) is incubating the App.";
    document.getElementById("projects-title").innerHTML = "Projects";

    //Toby
    document.getElementById("about-toby").innerHTML = "A platform that connects dog walkers with customers. Helps combat animal abuse and mistrust of dog walkers.<br>Toby won the 2019 Digital Entrepreneur Award, awarded by CIPPEC, the Innovation Laboratory of the Inter-American Development Bank (IDB Lab) and the Ministry Production and Labor of the Nation";

    //Crêate
    document.getElementById("about-create").innerHTML = "On demand clothing store.<br>Currently Crêate operates worldwide and has associated factories in Latin America, the United States and Europe.";

    //Assist
    document.getElementById("about-assist").innerHTML = "Non-profit platform that provides information at critical times.<br>Indicates maneuvers to perform (CPR, nervous breakdown, anxiety attack, fainting, etc.)";

    //Ciclo
    document.getElementById("about-ciclo").innerHTML = "A platform that gives benefits for recycling.<br>Optimizes and assists governments in waste collection and helps local businesses attract customers.";
}