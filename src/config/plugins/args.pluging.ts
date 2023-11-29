import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
                        .option('b',{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Multiplication Table base'
                        })
                        .option('l',{
                            alias: 'limit',
                            type: 'number',
                            default: 10,
                            describe:'Multiplication limit'
                        })
                        .option('s',{
                            alias: 'show',
                            type: 'boolean',
                            default: true,
                            describe:'Show Multiplication table'
                        })
                        .option('n',{
                            alias: 'name',
                            type: 'string',
                            default: 'multiplication-table',
                            describe:'file name'
                        })
                        .option('d',{
                            alias: 'destination',
                            type: 'string',
                            default: 'outputs',
                            describe:'File destinations'
                        })
                        .check((argv,options)=>{
                            //console.log({argv, options})
                            if(argv.b<0) throw 'Error: base mayor 1';
                            
                            return true;
                        })
                        .parseSync()
