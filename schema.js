// const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');
// const axios = require('axios');
// //Data
// const messages = [{
//   name: 'Dima',
//   text: 'Hi!',
//   likes: 2,
//   dislikes: 1,
//   id: 'q1w2e3',
// },
// {
//   name: 'Misha',
//   text: 'Ku!',
//   likes: 3,
//   dislikes: 0,
//   id: 'r4t5y6',
// }
// ]

// const MessageType = new GraphQLObjectType({
//   name: 'Message',
//   fields: () => ({
//     name: {type: GraphQLString},
//     text: {type: GraphQLString},
//     likes: {type: GraphQLInt},
//     dislikes: {type: GraphQLInt},
//     id: {type: GraphQLString},
//   })
// })


// // Root Query
// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     message: {
//       type: MessageType,
//       args: {
//         id: {type: GraphQLString}
//       },
//       resolve(parentValue, args){
//         for(let i = 0; i< messages.length; i++){
//           if(messages[i].id == args.id){
//             return messages[i];
//           }
//         }
//       }
//     }
//   }
// })

// module.exports = new GraphQLSchema({
//   query: RootQuery
// })