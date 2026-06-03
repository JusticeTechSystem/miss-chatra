// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oc6X5MHENWbH+sxaahiugvXubPyovqoBMFjOcn1pHU2SI6mROLMG6JDb9/qrekRzzUsuxg4TTcZZ65uItjWgG8VeJt9JQsW/TPFrpAWpxEx9iMSQkNyJ+ETRvCBj6ysu2pTGPysOnOKMTJ9WG7Jh/ZG+m/yjE4o82U/xhUCc3bY/kfcx6hT2DR3QfAN8ZFD4aWMwllDn+ZpzD6tYwuD16HMCw7FupFtLYVVgyL0fp5Ssu2QeZx69Jn3JDeRU3+rXrI6upqcsjzUj2w+0iNJtRxZLULoqjtwSWcF9YaTo0l+aNDtwGVqdGjQSDDs6gxxn3mAibfK5WXLaf2TH9MjMDLM8TSdZKk4EekMwgwp9P7n9fGPwnVtKaB7qBDX8I/PkW/TcxnU7/rkSPElqACxwiUgyKwbBTn44xQnLAmsXxI0tGti0MVActlK6xDmJrL1PmtPBLcIzjx+UXT8E29K1xpX8Qoepapvqu2B/Ykw3yyM4U5tHa6ERbO7gc4R7ouSjvJ6fyvOKE515+Y0m6b3n1PaviFkmxYTPVUTCuaUJoiPO62wK7ROc28D/v9HjNRON8nqzOeQtrgDg4oe2tDtG8cUFxixmKrnzIT13tpy1lFSqBTxtf3nsFDp5KhljJFLEyzPla5oxEBoCy1vhNNp7ggrGXb457yTHS5bJkoACRkozw5MSikXLxGMlbJKrPPmTMVlJvk7stSNjl5LZQkI8fwW4gSNcXz8tCT3Mo02Ik70KPe01DNagyeDL2XRhEKadE42rRh4VCZxSER+R+iTbZ3dG2V1Q+pXDCrcYLqjYRVvwCPYO7poadHKjgg6+++SFgsUNKzh3MOlvn16+N2Z8BBMuvZYoRBnptAlE4//qcp7btTZZaG+AcA7x/ozugCWRDV+1D0RKEqYIgnvuNLr8f/5qsuLwsqQdXq0boLCHexyAL3Tc0Oa07tx+axnrFdoxYKFeeIhE7KFgSp5v4Yd734mjeHJn6msGRApFOXMbBn1hBiIAsdkZMU8cPEC9KOUY1gRyW7EMPEoIfDkM2id7vfXb7zuXPGjUjCvxKzi2cPIO8RkVhY4x/Rq/aQP3MS5Y1l6ezb/6u7iDXeXiwV/qxVclfw5UVE4glj3WyfhbVkfb7NrOwi2UJtr7jVsOUWv/fIUmxo5drE8Nf2po9styT595le9As5XWGjEo3+skz8Au7x77Int1Ksw6DXVVhuwb/xcwUIbQH1uss7aXvqkhXVw2zlVbTSMhL3bjaOTSUlbLG6BRVN+zYAmieo9zF5fYV89/JpIpIbEQwIBn69HExvs/BwBZE9GvH5aQKTVDnSYLuymN7NHRG7KmzIqkrfxP+VojqgMjH0fZJGHPpISGcg/ItF7m+nBwX4PL6zLSt2ZjKuI=';const _IH='037425f20dea0e1e1891f4bb1393e35341105afa57b6197cc54ead1c1e882d81';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
