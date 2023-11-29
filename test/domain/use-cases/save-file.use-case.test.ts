import { describe, test, expect ,jest,beforeEach} from '@jest/globals';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';
//import { afterEach } from 'node:test';


describe('SaveFileUsecase', () => {
    
    const options = {
        fileContent:'test content',
        filedestination:'test-outputs',
        fileName:'multiplicacion'
    }
    const filePath = `${options.filedestination}/tabla-${options.fileName}.txt`;
    beforeEach(()=> {
        const outputFolderExists = fs.existsSync('test-outputs');
        if (outputFolderExists) fs.rmSync('test-outputs',{recursive:true});

        const custonOutputsFolderExists = fs.existsSync(options.filedestination);
        if(custonOutputsFolderExists) fs.rmSync(options.filedestination,{recursive:true});
    });
    
    

    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'test-outputs/tabla-multiplicacion.txt';
        const options = {
            fileContent:'test content',
            filedestination:'test-outputs',
            fileName:'multiplicacion'
        }
        const result = saveFile.execute(options);
        
        const checkFile = fs.existsSync(filePath);
        const filecontent = fs.readFileSync(filePath,{encoding: 'utf8'});
        
        expect(result).toBe(true);
        expect(checkFile).toBe(true);
        expect(filecontent).toBe(options.fileContent);
    });


    test('should save file with custon values', () => {
        const saveFile = new SaveFile();
        
        const result = saveFile.execute(options);
        const fileExits = fs.existsSync(filePath);
        console.log(filePath)
        const filecontent = fs.readFileSync(filePath,{encoding: 'utf8'});

        expect(result).toBe(true);
        expect(fileExits).toBe(true);
        expect(filecontent).toBe(options.fileContent);
    });

    test('should save file with false if directory could not be created', () => {
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs,'mkdirSync').mockImplementation(
            ()=>{
                throw new Error('This is a custon message testing');
            }
        );


        const result = saveFile.execute(options);
        expect(result).toBe(false);
        mkdirSpy.mockRestore();
    });

    test('should save file with false could not be created', () => {
        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs,'writeFileSync').mockImplementation(
            ()=> {throw new Error('This a custorn writing Error message')}
        );
        const result = saveFile.execute({fileContent:'Hola'});
        expect(result).toBe(false);
        writeFileSpy.mockRestore();
    });
    
});