(function () {
    angular.module('binarta-applicationjs-gateways-angular1', ['binarta-applicationjs-rest-angular1'])
        .provider('binartaApplicationGateway', ['restBinartaApplicationGatewayProvider', proxy]);

    angular.module('binarta-checkpointjs-gateways-angular1', ['binarta-checkpointjs-rest-angular1'])
        .provider('binartaCheckpointGateway', ['restBinartaCheckpointGatewayProvider', proxy]);

    angular.module('binarta-publisherjs-gateways-angular1', ['binarta-publisherjs-rest-angular1'])
        .provider('binartaPublisherGateway', ['restBinartaPublisherGatewayProvider', proxy]);

    angular.module('binarta-shopjs-gateways-angular1', ['binarta-shopjs-rest-angular1'])
        .provider('binartaShopGateway', ['restBinartaShopGatewayProvider', proxy]);

    angular.module('binarta-gateways-angular1', [
        'binartajs-angular1',
        'binarta-applicationjs-gateways-angular1',
        'binarta-checkpointjs-gateways-angular1',
        'binarta-shopjs-gateways-angular1',
        'binarta-publisherjs-gateways-angular1'
    ])
        .run([
            '$q',
            'binartaGatewaysAreInitialised',
            'binartaApplicationGatewayIsInitialised',
            'binartaCheckpointGatewayIsInitialised',
            'binartaShopGatewayIsInitialised',
            'binartaPublisherGatewayIsInitialised',
            IsInitialised
        ]);

    function proxy(gateway) {
        return gateway;
    }

    function IsInitialised($q, gatewaysAreInitialised, applicationGateway, checkpointGateway, shopGateway, publisherGateway) {
        $q.all(applicationGateway.promise, checkpointGateway.promise, shopGateway.promise, publisherGateway.promise).then(function() {
            gatewaysAreInitialised.resolve();
        });
    }
})();
