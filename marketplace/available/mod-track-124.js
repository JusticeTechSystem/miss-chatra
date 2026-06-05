// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yzgOndwX645QSrlRtGLetZPgfrThLXpquapi1/yU6NWQSrlMvGuwOvz0OUWJWEs7+NYRwH7E8yNbxqlBIRUnE0oDVueFJub9/0rzFtcnFF8pmpNaQx4/w7Osrc9ZghDn2HyOcankGQFniibkPuSkOp2c2+aOV2CWeqe/vi0i9yvbWtED/ND1LT20yowtkmrbwkBfN7Zo+RocELCb0c/ojm9H5Zfu7k/4AZOJYVDTE0O1dpmgibHceZmvG7XTyqUZd6caRPKQ8cB2A2fNarLUYefxD4fdmNp5p2qs9No582kQLa0Cq2Hs3gi6w+7i/W+K9sQYo0CwcIR3+Nip0kwOr50kmiGHXrPsKJJ7UZdkxeH6yf8dj2tNEzTDv5WmswRSRviE1gmXDG+GwbvRSADgl2fabI1zZa7pnDs31ets8G/coL6CN4kxZjVa2+80miQkG/AlSkkir8gXqxTZzYE4IJn9gIXxxXGx01xKdbSeJGSiQitNdFWHtoR0t4PmhjbgjEugMkJPhdKTC34IzDzpGKLlXuhvJ/0XiurYWKUXN9oy+ty1rcmu8Ef9LxwkQheIklgw+M6Lf+BKxlWD5Hsgiv0+6mN5d0XgVfuCDhf4d0ajt4ufcGxdKZn2p/izidUzK754BKz71e3HaygMGXEbjz1CoS/S0IsRjeZ8aEElR23f+n72CTdFT9U9zsTGD80liH1opT/ts9baXWwWcbJx9d1ACeWy5RQPGjLFQiSlsbs7vWlNC5AMgzbslJ/OlKqreuzp8aNmtQ1oDfXMIE/c8zL11OqIRY8q6fcB3LCH2nI71j6+EDsYtkpyfMUqfRpMlFpBO8AwaQNquO+oj+4vGVb/0eE9nQ3tzuizl9aQ12vAMKbcYbyBAXbSSvSr5S0G4VKAkchA924yI2dwr98lcIk03RxsAcdmrUXP6ZcTNPWANI0cRBvviM9CSi1pGfVibD+PpocFWro85zSrNAhxRgeTjzq2qHFxomsFdrpbOMnnW9UwxWQl5nZWyMCCko3taCPRbtCmBvXI0pD3dGJdfUqmoW1+qh8PhcF9CBWrPqpP3njcUjboaOOlCL2+cOaHtqH/3LrXz1xyfJopL272kSCy4z3Qd6+GcK8UIEi0k+rElpFy/5W59LIZnwJVuvaN2wwxopbbh4PP/yQZd++lNV78bOyDAzf/EDfkvozVpsEf3rDB202B8iyJgrvHazFcvfRS70j1JgtfVFXNnp5AbPSb23uzk63Kkf7p1bC/Rhf7CHHNYWFV//q0ZN3K2UEawOF9ZOCRBuUSzKotcUxUcZMI4jbauXmh5YTarCo7P4Gw7dl+qacL4JGCHijdI29+RDgr5og8RrKYKrNaPtNwA0CJaEkRWfMMUddt6yL4';const _IH='66638c8076ad887aa62d26991c1e0a6e7a2666f99bf4d1f4f1d6340233ec6885';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
