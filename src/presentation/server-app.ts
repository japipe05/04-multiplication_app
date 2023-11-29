import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
    fileName:string;
    filedestination:string;
}

export class ServerApp{
    static run({base, limit, showTable,fileName,filedestination}: RunOptions){
        console.log('Server runing..');
        //console.log({options})

        const table = new CreateTable().execute({base, limit});
        const wacreated = new SaveFile()
                    .execute({fileContent:table,
                        filedestination:filedestination,
                        fileName:fileName
                    });
        if(showTable) console.log(table);
        (wacreated)
        ? console.log('File Created Success')
        : console.error('File Not Created');
    }
}