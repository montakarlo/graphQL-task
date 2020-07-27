function postMessage (parent, args, context){
  return context.prisma.createMessage({
    name: args.name,
    text: args.text,
    likes: args.likes,
    dislikes: args.dislikes
  })
}

module.exports = {
  postMessage
}