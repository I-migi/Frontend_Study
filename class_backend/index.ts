// import { ApolloServer } from "apollo-server-express";
// import { gql } from "@apollo/client";
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer } from "apollo-server-express/dist/ApolloServer";
import { gql } from "apollo-server/dist/exports";

//docs
const typeDefs = gql`

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: {MyBoard}
  }

  type Mutation {
    createBoard: String
  }
`;

//api
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //모두 꺼내기
      const result = await Board.find();

      //한개만 골라서 꺼내기
      // Board.findOne({where:{number: 3}});
      return result;
    },
  },
  Mutation: {
    createBoard: () => {
      Board.insert({
        writer: "철수",
        title: "안녕하세요",
        contents: "반갑습니다.",
      });
      return "게시글 등록에 성공";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cors:true,

  // cors: {
  //   orgin:[
  //     "http://naver.com",
  //     "http://qqq.com"
  //   ],
  // }
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.199.68",
  port: 5050,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    //성공하면 실행
    console.log("DB접속에 성공했습니다.");

    //db연결까지 모두 끄타고, 가장 마지막에 실행
    server.listen().then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  })
  .catch(() => {
    //실패하면 실행
    console.log("DB접속에 실패했습니다.");
    console.log("원인:");
    console.log(Error);
  });
