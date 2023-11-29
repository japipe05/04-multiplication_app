import { yarg } from "./config/plugins/args.pluging";
import { ServerApp } from "./presentation/server-app";

//console.log(process.argv)
//console.log(yarg.b);


(async()=>{
    await main();
})();

async function main(){
    //console.log(yarg)
    const {b:base, l:limit, s:showTable,n:fileName,d:filedestination}=yarg;
    ServerApp.run({base, limit,showTable,fileName,filedestination});
    
}
// console.log(process.argv);

// const[tsnode,app,...args] = process.argv;

// console.log(args);