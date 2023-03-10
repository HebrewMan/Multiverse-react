import Arena from "../views/arena";
import Vault from "../views/vault";
import Master from "../views/master";
import Mint from "../views/mint";
import Train from "../views/train";

import { Route, Routes } from 'react-router-dom';
const Routers: any = () =>
(
    <Routes replace >
        <Route replace path="/" exact={true} element={<Master />} ></Route>
        <Route replace path="/index" exact={true} element={<Master />} ></Route>
        <Route replace path="/mint" exact={true} element={<Mint />}> </Route>
        <Route replace path="/train" exact={true} element={<Train />}> </Route>
        <Route replace path='/arena/:id' exact={true} element={<Arena />}></Route>
        <Route replace path='/vault' exact={true} element={<Vault />}></Route>

    </Routes>
);

export default Routers;