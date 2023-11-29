import { describe, expect, test, jest ,beforeEach} from '@jest/globals';
import { ServerApp } from '../../src/presentation/server-app';
import { CreateTable } from '../../src/domain/use-cases/create-table.use-case';
import { SaveFile } from '../../src/domain/use-cases/save-file.use-case';
describe('server-app App',()=>{
    const options={
        base: 2,
        limit: 10,
        showTable: false,
        fileName: 'test-destination',
        filedestination: 'test-filename',
    }
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    test('should crete Server app intance',()=>{
        const serverapp = new ServerApp();
        expect(serverapp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test('should run server with options',()=>{
        // const logSpy = jest.spyOn(console,'log');
        // const creteTAbleSpy = jest.spyOn(CreateTable.prototype,'execute');
        // const SaveFileSpy = jest.spyOn(SaveFile.prototype,'execute');
        // ServerApp.run(options);
        // expect(logSpy).toHaveBeenCalledTimes(3);
        // expect(logSpy).toHaveBeenCalledWith('Server runing..');
        // expect(logSpy).toHaveBeenLastCalledWith('File Created Success');

        // expect(creteTAbleSpy).toHaveBeenCalledTimes(1);
        // expect(creteTAbleSpy).toHaveBeenCalledWith({base:options.base, limit:options.limit});

        // expect(SaveFileSpy).toHaveBeenCalledTimes(1);
        // expect(SaveFileSpy).toHaveBeenCalledWith({
        //     fileContent:expect.any(String),
        //     filedestination:options.filedestination,
        //     fileName:options.fileName,
        // });
    });
    test('should run with custon values mocked',()=>{



        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);
        console.log=logMock;
        console.log = logErrorMock;
        
        CreateTable.prototype.execute  = createMock;
        SaveFile.prototype.execute      = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server runing..');
        expect(createMock).toHaveBeenCalledWith({"base":options.base,"limit":options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent:'1 x 2 = 2',
        });
        expect(logMock).toHaveBeenCalledWith('File Created Success')
    });

});



