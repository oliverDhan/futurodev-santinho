//Crie um await (codigo retirado da minha API de testes)
const deleteOneTask = async (req, res) => {
    try {
      await Task.deleteOne({ _id: req.params.id });
      message = "tarefa apagada com sucesso";
      type = "sucess";
      res.redirect("/api");
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };