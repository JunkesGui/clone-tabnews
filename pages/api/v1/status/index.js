function status(request, response) {
  response.status(200).json({ mensagem: "funcionando saudável" });
}

export default status;
