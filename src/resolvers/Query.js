async function messages (parent, args, context){
  // const messages = await context.prisma.messages();
  // return messages;
  const where = args.filter ? {
    name: args.filter
  }:{}

  const messageList = await context.prisma.messages({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });

  const count = await context.prisma
    .messagesConnection({
      where
    })
    .aggregate()
    .count();
    
  return {
    messageList,
    count
  };
}

module.exports = {
  messages
}