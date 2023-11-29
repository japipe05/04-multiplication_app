export interface CreateTableUseCase{
    execute:(options: CreateTableOptions)=> string;
}

export interface CreateTableOptions{
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase{
    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}

    execute({base, limit=10}: CreateTableOptions){
        let outputMEsagge='';
        for (let i = 1; i <= limit ; i++) {
            outputMEsagge += `${base} x ${i} = ${base * i }`;
        //    console.log(tabla,'x',i,'=',i*tabla);    
        if(i<limit) outputMEsagge += '\n';
        }
        return outputMEsagge;
    }
}