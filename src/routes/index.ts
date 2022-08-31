import { Router } from "express";
import { atendimentoRoutes } from "./atendimento.routes";
import { clienteRoutes } from "./cliente.routes";
// import { palavrasRoutes } from "./palavra.routes";
// import { relacaoRoutes } from "./relacao.routes";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/atendimento", atendimentoRoutes)
routes.use("/cliente", clienteRoutes)
routes.use("/usuarios", usuarioRoutes)
// routes.use("/relacao", relacaoRoutes)


export { routes };