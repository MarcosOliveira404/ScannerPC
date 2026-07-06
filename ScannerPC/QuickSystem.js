const si = require('systeminformation');

// força todo console.log a ficar verde
const logOriginal = console.log;
console.log = (...args) => {
  logOriginal("\x1b[32m%s\x1b[0m", args.join(" "));
};

async function iniciarDiagnostico(){

console.clear();

console.log("=================================");
console.log("   DIAGNOSTICO RAPIDO DO SISTEMA");
console.log("=================================\n");

const os = await si.osInfo();
const cpu = await si.cpu();
const cpuLoad = await si.currentLoad();
const mem = await si.mem();
const disk = await si.fsSize();
const temp = await si.cpuTemperature();
const graphics = await si.graphics();
const network = await si.networkInterfaces();
const time = await si.time();


// SISTEMA
console.log("🖥 SISTEMA");
console.log("Hostname:", os.hostname);
console.log("Sistema:", os.distro);
console.log("Versão:", os.release);
console.log("Arquitetura:", os.arch,"\n");


// CPU
console.log("🧠 CPU");
console.log("Modelo:", cpu.brand);
console.log("Núcleos:", cpu.cores);
console.log("Velocidade:", cpu.speed,"GHz");
console.log("Uso CPU:", cpuLoad.currentLoad.toFixed(2),"%\n");


// RAM
console.log("💾 MEMORIA RAM");

let totalRAM = (mem.total/1024/1024/1024).toFixed(2);
let usadaRAM = (mem.used/1024/1024/1024).toFixed(2);
let livreRAM = (mem.free/1024/1024/1024).toFixed(2);

console.log("Total:", totalRAM,"GB");
console.log("Usada:", usadaRAM,"GB");
console.log("Livre:", livreRAM,"GB\n");


// DISCO
console.log("🗂 DISCOS");

disk.forEach(d=>{
console.log("Disco:", d.mount);
console.log("Total:", (d.size/1024/1024/1024).toFixed(2),"GB");
console.log("Uso:", d.use,"%\n");
});


// TEMPERATURA
console.log("🌡 TEMPERATURA CPU");

if(temp.main){
console.log(temp.main,"°C\n");
}else{
console.log("Sensor indisponível\n");
}


// GPU
console.log("🎮 GPU");

graphics.controllers.forEach(g=>{
console.log("Modelo:", g.model);
console.log("VRAM:", g.vram,"MB\n");
});


// REDE
console.log("🌐 REDE");

network.forEach(n=>{
if(n.ip4){
console.log("Interface:", n.iface);
console.log("IP:", n.ip4);
console.log("MAC:", n.mac,"\n");
}
});


// TEMPO LIGADO
let horas = Math.floor(time.uptime/3600);
let minutos = Math.floor((time.uptime%3600)/60);

console.log("⏱ TEMPO LIGADO:",horas,"h",minutos,"m");

console.log("\n=================================");
console.log("Diagnostico finalizado");
console.log("=================================");

}

iniciarDiagnostico();