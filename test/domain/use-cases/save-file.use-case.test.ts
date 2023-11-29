import { describe, test, expect } from '@jest/globals';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';
import { afterEach, beforeEach } from 'node:test';

describe('SaveFileUsecase', () => {


afterEach(()=> {
    fs.rmSync('outputs',{recursive:true});
});

    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/tabla-table.txt';
        const options = {
            fileContent:'test content'
        }
        const result = saveFile.execute(options);
        expect(result).toBe(true);
        const checkFile = fs.existsSync(filePath);
        const filecontent = fs.readFileSync(filePath,{encoding: 'utf8'});
        expect(checkFile).toBe(true);
        expect(filecontent).toBe(options.fileContent);
    });
});