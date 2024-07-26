import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import QrScanner from 'react-qr-scanner';
import {red} from "next/dist/lib/picocolors";

export const MobileStatementLandingText = () => {
    const { t } = useTranslation();

    const handleScan = (data: any) => {
        if (data) {
            console.log(data);
        }
    };

    const handleError = (err: any) => {
        console.error(err);
    };

    return (
        <Box p={4}>
            <Heading as='h1' size='lg' noOfLines={1} style={{ color: "#a83c2c" }}>
                {t('statement-landing-main-title-label')}
            </Heading>
            <Text>
                {t('mobile-landing-text-part-one')}
            </Text>
            <Box mt={8} display="flex" justifyContent="center" style={{ background: "#a83c2c", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <QrScanner style={{ width: "250px", height: "250px" }}
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                />
            </Box>
        </Box>
    );
}
