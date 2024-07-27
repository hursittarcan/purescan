declare module 'react-qr-scanner' {
    interface QrScannerProps {
        delay?: number;
        style?: React.CSSProperties;
        onError?: (error: any) => void;
        onScan?: (data: any) => void;
    }

    const QrScanner: React.FC<QrScannerProps>;
    export default QrScanner;
}
