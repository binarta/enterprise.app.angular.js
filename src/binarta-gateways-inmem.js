(function () {
    angular.module('binarta-applicationjs-gateways-angular1', ['binarta-applicationjs-inmem-angular1'])
        .provider('binartaApplicationGateway', ['inmemBinartaApplicationGatewayProvider', proxy]);

    angular.module('binarta-checkpointjs-gateways-angular1', ['binarta-checkpointjs-inmem-angular1'])
        .provider('binartaCheckpointGateway', ['inmemBinartaCheckpointGatewayProvider', proxy]);

    angular.module('binarta-publisherjs-gateways-angular1', ['binarta-publisherjs-inmem-angular1'])
        .provider('binartaPublisherGateway', ['inmemBinartaPublisherGatewayProvider', proxy]);

    angular.module('binarta-shopjs-gateways-angular1', ['binarta-shopjs-inmem-angular1'])
        .provider('binartaShopGateway', ['inmemBinartaShopGatewayProvider', proxy]);

    angular.module('binarta-gateways-angular1', [
        'binartajs-angular1',
        'binarta-applicationjs-gateways-angular1',
        'binarta-checkpointjs-gateways-angular1',
        'binarta-shopjs-gateways-angular1',
        'binarta-publisherjs-gateways-angular1'
    ])
        .run(['binartaGatewaysAreInitialised', 'binartaApplicationGateway', IsInitialised]);

    function proxy(gateway) {
        return gateway;
    }

    function IsInitialised(gatewaysAreInitialised, applicationGateway) {
        applicationGateway.addPublicConfig({
            id: 'application.pages.contact.active',
            value: 'true'
        });

        gatewaysAreInitialised.resolve();
    }
})();
