

const si = require('systeminformation');

// força todo console.log a ficar verde
const logOriginal = console.log;
console.log = (...args) => {
  logOriginal("\x1b[32m%s\x1b[0m", args.join(" "));
};
async function iniciarDiagnostico(){

console.clear();

console.log("=================================");
console.log("   SISTEMA AVANÇADO DE DIAGNOSTICO");
console.log("=================================\n");

const os = await si.osInfo();
const system = await si.system();
const cpu = await si.cpu();
const cpuLoad = await si.currentLoad();
const mem = await si.mem();
const memLayout = await si.memLayout();
const disk = await si.fsSize();
const diskIO = await si.disksIO();
const temp = await si.cpuTemperature();
const graphics = await si.graphics();
const network = await si.networkInterfaces();
const networkStats = await si.networkStats();
const battery = await si.battery();
const board = await si.baseboard();
const bios = await si.bios();
const usb = await si.usb();
const processes = await si.processes();
const time = await si.time();


// SISTEMA
console.log("🖥 SISTEMA");
console.log("Fabricante:", system.manufacturer);
console.log("Modelo:", system.model);
console.log("Hostname:", os.hostname);
console.log("Sistema:", os.distro);
console.log("Versão:", os.release);
console.log("Kernel:", os.kernel);
console.log("Arquitetura:", os.arch,"\n");


// CPU
console.log("🧠 CPU");
console.log("Fabricante:", cpu.manufacturer);
console.log("Modelo:", cpu.brand);
console.log("Núcleos:", cpu.cores);
console.log("Threads:", cpu.physicalCores);
console.log("Velocidade:", cpu.speed,"GHz");
console.log("Uso CPU:", cpuLoad.currentLoad.toFixed(2),"%\n");


// USO POR NÚCLEO
console.log("⚡ USO POR NÚCLEO");

cpuLoad.cpus.forEach((core,i)=>{
console.log("Core",i+1,":",core.load.toFixed(2),"%");
});

console.log("");


// RAM
console.log("💾 MEMORIA RAM");
console.log("Total:",(mem.total/1024/1024/1024).toFixed(2),"GB");
console.log("Usada:",(mem.used/1024/1024/1024).toFixed(2),"GB");
console.log("Livre:",(mem.free/1024/1024/1024).toFixed(2),"GB\n");


// PENTES DE RAM
console.log("📦 PENTES DE RAM");

memLayout.forEach(r=>{
console.log("Tamanho:",(r.size/1024/1024/1024).toFixed(2),"GB");
console.log("Tipo:",r.type);
console.log("Velocidade:",r.clockSpeed,"MHz");
console.log("Fabricante:",r.manufacturer,"\n");
});


// DISCO
console.log("🗂 DISCOS");

disk.forEach(d=>{
console.log("Disco:",d.mount);
console.log("Tipo:",d.type);
console.log("Total:",(d.size/1024/1024/1024).toFixed(2),"GB");
console.log("Uso:",d.use,"%\n");
});


// IO DISCO
console.log("📊 DISCO IO");

if (diskIO && diskIO.rIO !== undefined) {
    console.log("Leitura:", diskIO.rIO);
    console.log("Escrita:", diskIO.wIO);
} else {
    console.log("Monitoramento de IO do disco indisponível");
}

console.log("");


// TEMPERATURA
console.log("🌡 TEMPERATURA CPU");
console.log(temp.main,"°C\n");


// GPU
console.log("🎮 GPU");

graphics.controllers.forEach(g=>{
console.log("Modelo:",g.model);
console.log("VRAM:",g.vram,"MB\n");
});


// REDE
console.log("🌐 REDE");

network.forEach(n=>{
console.log("Interface:",n.iface);
console.log("IP:",n.ip4);
console.log("MAC:",n.mac,"\n");
});


// TRAFEGO DE REDE
console.log("📡 TRAFEGO REDE");

networkStats.forEach(n=>{
console.log("Interface:",n.iface);
console.log("Download:",n.rx_bytes);
console.log("Upload:",n.tx_bytes,"\n");
});


// BATERIA
console.log("🔋 BATERIA");

if (battery && battery.hasbattery) {

console.log("Carga:", battery.percent + "%");
console.log("Carregando:", battery.isCharging);
console.log("Tempo restante:", battery.timeremaining, "min");
console.log("Ciclos:", battery.cyclecount);
console.log("Capacidade:", battery.maxcapacity);

} else {

console.log("Nenhuma bateria detectada neste sistema");

}

console.log("");


// PLACA MAE
console.log("🧩 PLACA MAE");
console.log("Fabricante:",board.manufacturer);
console.log("Modelo:",board.model,"\n");


// BIOS
console.log("⚙ BIOS");
console.log("Fabricante:",bios.vendor);
console.log("Versão:",bios.version,"\n");


// USB
console.log("🔌 DISPOSITIVOS USB");

usb.forEach(u=>{
console.log("Dispositivo:",u.name);
console.log("Fabricante:",u.manufacturer,"\n");
});


// PROCESSOS
console.log("⚙ PROCESSOS");
console.log("Total:",processes.all);
console.log("Rodando:",processes.running,"\n");


// TEMPO LIGADO
let horas = Math.floor(time.uptime/3600);
let minutos = Math.floor((time.uptime%3600)/60);

console.log("⏱ TEMPO LIGADO:",horas,"h",minutos,"m");

console.log("\n=================================");
console.log("Diagnostico completo finalizado");
console.log("=================================");

}

iniciarDiagnostico();