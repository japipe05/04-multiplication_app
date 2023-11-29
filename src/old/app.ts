import fs from 'fs';
import { yarg } from '../config/plugins/args.pluging';

const {b:base, l:limit,s:showtable} = yarg;
console.log(yarg)
let tabla = base;
let outputMEsagge='';
const headerMEssage=`
========================
    Tabla: ${tabla}
========================
`;
for (let i = 1; i <= limit ; i++) {
    outputMEsagge += `${tabla} x ${i} = ${tabla * i }\n`;
//    console.log(tabla,'x',i,'=',i*tabla);    
}

outputMEsagge = headerMEssage + outputMEsagge;

if (showtable) {
    console.log(outputMEsagge);
}
const outputpath=`outputs`;

fs.mkdirSync(outputpath,{recursive: true});
fs.writeFileSync(`${outputpath}/tabla-${tabla}.txt`,outputMEsagge);
console.log('file Create');