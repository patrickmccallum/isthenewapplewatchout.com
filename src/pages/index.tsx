import React from "react";
import { RootLayout } from "@components/RootLayout";
import { Header } from "@components/Header";
import { Paragraph } from "@components/Paragraph";
import { Trans } from "@lingui/react";

const IndexPage = () => (
    <RootLayout>
        <Trans render={Header}>Apple Watch Series 5 Status</Trans>
        <Trans render={Paragraph}>Pre Order</Trans>
    </RootLayout>
);

export default IndexPage;
