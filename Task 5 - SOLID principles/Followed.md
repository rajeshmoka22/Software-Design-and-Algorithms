1. Single Responsibility Principle:
  - https://github.com/maheshramaiah/angular2-sample/blob/master/src/app/reducers/expense.reducer.ts - Expense Reducer follows this principle.
  - https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/core/JWT.ts - In this file JWT class follows single responsibility principle.
  - https://github.com/edwardcdev/apollobank/blob/main/server/src/resolvers/TransactionResolver.ts -  it only handles tasks related to transactions.
  - https://github.com/w3tecch/express-typescript-boilerplate/blob/develop/src/auth/AuthService.ts - AuthService only changes for reason, which is any change in auth logic.
  - https://github.com/gothinkster/angular-realworld-example-app/blob/master/src/app/core/services/user.service.ts - UserService handles only functionalities related to user.
  - https://github.com/gothinkster/angular-realworld-example-app/blob/master/src/app/core/services/profiles.service.ts - Profile service follows single resposibility.
  - https://github.com/gothinkster/angular-realworld-example-app/blob/master/src/app/core/services/jwt.service.ts -  JWT Service follows this principle.

2. Open/Closed Principle:
  - https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/core/ApiResponse.ts - In this file Api Response is open for extension and closed for modification.
  - https://github.com/json-iterator/java/blob/master/src/main/java/com/jsoniter/ReflectionDecoderFactory.java - In this file, ReflectionDecodeFactory is closed for modification and will work fine even if we add new decoder type as we are dealing the unknown types at line 26.
  - https://github.com/iluwatar/java-design-patterns/blob/master/factory/src/main/java/com/iluwatar/factory/CoinFactory.java - The CoinFactory class is closed for modification but we can create any new coin which in terms supports extension.

3. Liskov:
  - https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/core/ApiResponse.ts - In this file, APIResponse and other child classes follows liskov principle.
  - https://github.com/json-iterator/java/blob/master/src/main/java/com/jsoniter/MapKeyDecoders.java - In this file (lines 35, 43, 57), Individual decoder classes will be sustituded in place of parent class.
  - https://github.com/pubnub/java/blob/master/src/main/java/com/pubnub/api/builder/PresenceBuilder.java, In this file, the PresenceBuilder can be substituted whereever we use the parent class which is PubSubBuilder.

4. Interface Segregation Principle:
  - https://github.com/csob/paymentgateway/blob/master/Integration%20Examples/eAPI%20v1.7/java/eAPI-v17-connector/src/main/java/cz/monetplus/mips/eapi/v17/RunModeProviderImpl.java - this RunModeProviderImpl class implements all the methods from the RunMode Interface, so it follows this principle.
  - https://github.com/csob/paymentgateway/blob/master/Integration%20Examples/eAPI%20v1.7/java/eAPI-v17-connector/src/main/java/cz/monetplus/mips/eapi/v17/StaticExitCodeGenerator.java - In this File, the StaticExitCodeGenerator class implements the ExitCodeGenerator interface.
  - https://github.com/csob/paymentgateway/blob/master/Integration%20Examples/eAPI%20v1.7/java/eAPI-v17-connector/src/main/java/cz/monetplus/mips/eapi/v17/connector/entity/PayRes.java - In this file, PayRes class implements all the methods( toSign() is the only method that the interface is having).
  - https://github.com/csob/paymentgateway/blob/master/Integration%20Examples/eAPI%20v1.7/java/eAPI-v17-connector/src/main/java/cz/monetplus/mips/eapi/v17/connector/entity/CartItem.java - In this file, the CartItem class implements the all methods from it's interface.

5. Dependency Inversion Principle:
  - https://github.com/json-iterator/java/blob/master/src/main/java/com/jsoniter/ReflectionDecoderFactory.java - In this File, the ReflectionDecoderFactory class follows this principle by inverting the dependency from individual decoders like array,map etc to a factory class.
  - https://github.com/iluwatar/java-design-patterns/blob/master/factory/src/main/java/com/iluwatar/factory/CoinFactory.java - The CoinFactory class follows this principle.
  - https://github.com/mrniko/netty-socketio/blob/master/src/main/java/com/corundumstudio/socketio/store - In this directory all the store factory files implements this principle.
  - https://github.com/csob/paymentgateway/blob/master/Integration%20Examples/eAPI%20v1.0/java/eAPI-v1-connector/src/main/java/cz/monetplus/mips/eapi/v1/service/NativeApiV1ServiceImpl.java, Line 44, we are getting an object and we're invoking methods on it, in similar way we can send other object of same properties to make payments. 