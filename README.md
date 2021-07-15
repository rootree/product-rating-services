# Products and Ratings

## Introduction

You can find in this repository two services
1. Product service
2. Product Review service

Also, there is a ready-to-go development environment.

With `docker-compose up` you can run it on you local machine.

### Database

The services connect to mongodb.

In order to seed initial data in the DB, please, run the following command:

```shell
docker-compose exec adidas_db sh -c "chmod u+x /DB/seed.sh && /DB/seed.sh"
```

The command will run the `/DB/seed.sh` script with initial data:
1. product
2. product review
3. user

### How to test

You can find sample service requests in the `./rest-samples` folder. Please use any of REST clients available on your machine.

Easy way to check if everything works is to open the link below in the browser:

http://127.0.0.1:43001/product/FW1079



## Improvements
What I would add to make the services better:

1. Mapping and DB entities and models exposed via API (to not show the database schema)
2. DB migration library
3. Exchange models between services (as there is duplication in the code, and solution might be Google Protobuf)
4. Logging
5. Integration and unit tests
6. Authorization/authentication server
7. Add more checks (for example, to add the `existence of a product` check while creating a new review)
8. Made all write operations via messaging system (where will be eventual consistency, but better performance)

## Challenges

1. As it's an e-commerce product, it might also have other services (order and delivery services, for example), it means there will be dependencies between services which can be solved with the `SAGA` pattern
2. With several microservices, it makes sence to apply the BFF pattern 
3. We can apply CQRS approach, to improve performance on each of the service
4. Good question is about the code organization, as there are shared models to exchange (as a solution, can be used a `monorepo`)

    
