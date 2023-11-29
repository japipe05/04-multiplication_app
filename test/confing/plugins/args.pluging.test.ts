import { describe, test, expect,beforeEach,jest  } from '@jest/globals';

const runCommand = async(args:string[]) =>{
    process.argv = [...process.argv, ...args];
    const {yarg} = await import('../../../src/config/plugins/args.pluging');
    return yarg;
}
describe('test args.plugins.ts', () => {
    const originalArgv = process.argv;
    beforeEach(()=>{
        process.argv = originalArgv;
        jest.resetModules();
    });

    test('should return default values',async() => {

        const argv = await runCommand(['-b','5']);
        console.log('argv',argv);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: true,
            n: 'multiplication-table',
            d: 'outputs'
          }));
        //console.log(yarg);
    });

    test('should return configuration with custonvalues', async() => {
        const argv = await runCommand(['-b','8',
                                        '-l','20',
                                        '-s',
                                        '-n','custon-name'
                                    ,'-d','custon-dir']);
        
        expect(argv).toEqual(expect.objectContaining({
            b: 8,
            l: 20,
            s: true,
            n: 'custon-name',
            d: 'custon-dir'
          }));
    });
});