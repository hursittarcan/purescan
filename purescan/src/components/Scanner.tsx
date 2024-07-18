import { useState, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const Scanner: React.FC = () => {
    const [result, setResult] = useState<string>('');

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();
        codeReader.decodeFromInputVideoDevice(undefined, 'video').then(result => {
            setResult(result.getText());
        }).catch(err => console.error(err));
    }, []);

    return (
        <div>
            <video id="video" width="300" height="200"></video>
            <p>{result}</p>
        </div>
    );
};

export default Scanner;

