// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fmCZ+785vXuRVQIBHWR2mmKchJbfLatX5axz8hvCJ+bSC2e8CBqxIm2+LfobegarTMKRVivzOaI3UbpcRVlZx3mdF66yoU86UyCDVKqRb3JoAXJc1XmvelyftwEyZ5DQFWYQ6qFhQgwpiDER2oo/rBOeyVHnoTXiYWZmwd+ozsg7WysKGliwjRZ0yJRlTfua7qHRfTmXvBGLtSC0ieln3zVpzP6ueXJcCbdEOCfHrk7eved81m2bb1sr8ZysfujGjKX0Vs8o2YMYzwCDVMpczQpRDegDQG7GydGtIOcll8FBxYkdG+Hp/sy5gCz2SUHKOdX+i11l1MIr/tc+yAozxUaXzQbsKIhoCaxyokhnUOedIUvxCnkAbdpHkst25ji793cgArBlceaLaB92I5Olrat+PD6vVibcQx5R3dMQ6s32kjMPp+eW0K8stSYeBnwr7snWIvEntBI7Gk6fRTTkLYtbofqem/b3xJJcp5BlkvZGKNmv1SyjajNMKL6FcOAVQ1AxPQMI43DPxzNYHyd/054ePPXPlyEQ7SRMnPJX2q0V0Wqlicg9DmBQadUq78AfDJL4H7C4Zg+uzsq0+p/64EFUu1/niQtf0hvARU5Q/k48a/TXjZRJeMQcLdwyy8gkxnu1PEPGCrdDnOT4O055CViX1Y031PUCPFM0JmDXip3DMd5jpNx83aGUOUFXJJUQaoCdykfUcvBJoXAH69W75xGzXc6Oz362N3pR2LjPTcRobEVLAb3SkvUY3lZWlJ6w0yBIgi88X3hIr5+xkIEu1IiBjiO5Y6DcWvR2wrsF+qfYubSJ4ByTWZGEt9vQ9+q2Fddm7lJ77E+hlSVBv9nKJktC4dVEM7bBN0sRTZiOshm0ZCP+kT4b7+UAPm/If0sAPEI92W8X3uvnEruQcnnRMi7HcszDXDOpWmlxqn1/qxsIdrjEscLqhrUcIOQfHV9HUk+vrQo8Jueio62nYrYKm7JIIS/0nRT7xcBk9K2+CTCuETnz8dOElOiZT9Vto2ERkwshuiIfRbESzdCcsxomPl/fbxym0oL1gWmQkvh0Cadru4aeZ6tpnEJFPs8iN10vM1hOc1AdXdCDB0qQoW14KFVqEfbYOtwt6j9d72UhUjh663XHtxfDXHehV6yeZ2sSkljkEBGgGUku/6Ke+xHXXf9O0fpKGRHDmDYUkpp+sFA2yxoybl+rhiisgqcCuCfnJQzeuIs=';const _IH='8d9575bb7832a4ba41133044941b50e4eebfdf85a91b69cf7e81401e89c6827d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
