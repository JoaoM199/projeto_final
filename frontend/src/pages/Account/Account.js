import React, { useState } from 'react';
import NewAccount from './NewAccount';
import Login from './Login';
import style from "../Form.module.css"

const Account = () => {
  const [opcoesLogin, setOpcoesLogin] = useState(true);

  const [textoBotao, setTextoBotao] = useState("Eu não tenho uma conta");

  const alternarOpcoesLogin = () => {
    setOpcoesLogin(!opcoesLogin);
    setTextoBotao(opcoesLogin ? "Já tenho uma conta" : "Eu não tenho uma conta");
  };
  
  return (
    <div className={style.formbox}>
      <button onClick={alternarOpcoesLogin}>{textoBotao}</button>
      {opcoesLogin ? <Login /> : <NewAccount />}
    </div>
  );
};

export default Account;