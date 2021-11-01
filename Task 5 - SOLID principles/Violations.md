1. Single Responsibility Principle:
  - https://github.com/edwardcdev/apollobank/blob/main/server/src/resolvers/UserResolver.ts - line 243, destroy account should be handled in AccountResolver class.
  - https://github.com/w3tecch/express-typescript-boilerplate/blob/develop/src/api/services/PetService.ts -> lines 21-39, find logic can be separated.
  - https://github.com/w3tecch/express-typescript-boilerplate/blob/develop/src/api/models/User.ts - hashPassword and comparePassword Methods can be seaparated
  - https://github.com/edwardcdev/apollobank/blob/main/server/src/resolvers/AccountResolver.ts - In this class, at line 40, exchange logic should be separated from account resolver.

2. Open/Closed Principle:
  - https://github.com/afteracademy/nodejs-backend-architecture-typescript/blob/master/src/core/ApiError.ts -> From Line 31,  The API Error class is open for modification as if we want to add another error type we should modify switch case, which violates this principle.
  - https://github.com/edwardcdev/apollobank/blob/main/server/src/resolvers/AccountResolver.ts -  lines 172-184, If we need to add another type of currency, we need to modify logic.
  - https://github.com/edwardcdev/apollobank/blob/main/server/src/resolvers/TransactionResolver.ts - lines 69-81, if we want to add another type of transaction, need to add another case.
  - https://github.com/LaunchCodeEducation/techjobs-oo/blob/master/src/main/java/org/launchcode/models/data/JobData.java - lines 88-97, this violates open closed principle.
  - https://github.com/DainWs/2DAM_Survive_all_you_can/blob/master/app/src/main/java/com/joseduarte/dwssurviveallyoucan/entities/EntitySpawner.java, lines 40-64, if we want add new time index we need to modify the logic of the switch case which violates this principle.

3. Liskov Substitution principle:
  - https://github.com/rajeshmoka22/clean-code-principles-and-patterns/blob/master/src/main/java/com/javamultiplex/principle/solid/lsp/bad/Square.java - In this file, square extends rectangle, which cannot be satisfied and will return wrong area value if we change the width(or height) at later point and that will result in updation of height and width, as we have same height and width for square.
  - https://github.com/mikeknep/SOLID/tree/main/liskov_substitution/bad/src, In this file, the studio and penthhouse inherits apartment, so when we add bedroom using unitypgrader class, we can't add any bedroom to studio, as it'll not have any bedrooms. so extending apartment for studio is violation of this principle.
  - https://github.com/bsferreira/solid/blob/master/src/com/github/bsferreira/solid/lsp/violation/Car.java, Here the car uses changeGear, but we can't change gear to reverse while moving forward, which violates this principle.

4. Interface Segregation principle:
  - https://github.com/rajeshmoka22/clean-code-principles-and-patterns/blob/master/src/main/java/com/javamultiplex/principle/solid/isp/bad/OldGenerationPrinter.java, In this file, the Old generation printer does not support all the methods which are from the parent interface Machine.
  - https://github.com/mikeknep/SOLID/blob/main/interface_segregation/bad/src/Penguin.java, In this file, the Penguin implements bird, but penguin cannot fly, so it cannot implement bird, this violation of this principle.
  - https://github.com/bsferreira/solid/blob/master/src/com/github/bsferreira/solid/isp/violation/Drone.java, The drone has methods like turn radio on and off, which it does not need but needs to implemented as it implements vehicle.

5. Dependency Inversion Principle:
  - https://github.com/rajeshmoka22/clean-code-principles-and-patterns/blob/master/src/main/java/com/javamultiplex/principle/solid/dip/bad/Project.java, In this file, the Project class directly interacts with front end and backend without having abstraction layer in the middle, which violates this principle.
  - https://github.com/mrniko/netty-socketio/blob/master/src/main/java/com/corundumstudio/socketio/SocketIOChannelInitializer.java, lines 122-131, Instead of directly interacting and initializing the classes like packetencoder, decoder and other classes we can invert the dependency.
  - https://github.com/mikeknep/SOLID/blob/main/dependency_inversion/bad/src/WeatherTracker.java, The Weather tracker class directly interacts with emailer and phone without inverting dependency to any middle layer.