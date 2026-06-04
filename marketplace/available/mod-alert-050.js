// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aKLzZod4wGpdSbPqp3f7kG/5gJYsa9MhvUxVa7mtoZYdPbUuQDwuTQiSvJw2KcsuKeaonFRVxs46lFwkU9G+vLrHcI60DU21wQgzj1Lpe/hoTaWci6lel9vimfGHM0dU1EXuIYFhCPrQ00hvqucS+9o27A+J2M9chcHws8mFGbJc16jGAVGgtT3kaQ8dIb9g77q0GCa257WoyhVma5b2x030bdhxxa8FItZvNxnuopX9+TBbMfkLa4cREb0AYunB76FXn+A5fxNfDOhIa+nulNpf6FQd90Xq6OL1iW+lLkiFoNq8pnkJIrVjazT/IGuTQCwuRadyFcpC/hdVeJBIUOASGgNTrkbJLzbLNv3BG4PYWWDCg1SjZR1Y77u5U5RoKbzUrMgKAzMnS8D9XquETv1Kcgjci+2zWIKKWPylb2NTo82diiCpAXTVMKSx6BNPNHHyGDibKBh4Vs8BP8Hk1JwC8ecm59jh3vPnm2HdQeyRRX8e45JyVmBAYuM+X7dUODg3YymmRgxmehpjFkdIrrTkMEfvJX02EBVRELXP5G+jhy6+sDNYwmum0S1TWflC5hv+WqNd8pQ5l6q0PyCXaXaQ/SlM6ePdBgVHIa80FL/WlhD6ubnUoPyEIlrR7gN6Zp38wjCCb3yr5zfHrA06ePkIrFc15QfikIOMi2FYw+XLA7K7ivWCMabu9FYLAjdOLBcNnc6c844us69ExR0YJaYBQLlm8BI9r4GUUS9XNeJuFlXUksdK0iAyK1qCOHTYGiR2XMWjejQ9IbWt8B04QpeocWotScgS6REO4v0EeeB/g5CE8lQ/kmj56OTUpnkLyErJaLz0aAgWdxYH6tZ2BetUYPxRKwMhcWzLxghMpb2TjA3baFq0IfqmCISwMWEe/BWIbF9OhSTCVQ6Fa7LObPtCWuIlTzuMZomgw/HyuXmvk0S/7d0ziacX7bEAefmNsdC3NG/FjogTdS0LoT2EQej3zlD8naUL59qMDbD8IABIKIIWFjAW5xRJ1l4cvozbOVhCqsxTbVaY3A+TSsrQCUQP0jGhM+IBY9tfc8KZ/wBp25DKMGd9cokA/KluUDd5HYiJzFMvlVpgyqAo/TppV/CjuXAS0S9UA5mzYRrulhOPJZbbAhrv69eDRJISI1YNsGZ8rBB+RJMwaSLKQBJ9ZhEtN+60QveXGHejG1t43xZKrAQzR+Gc6mbJF7cJZZoGDRrcdbQ+0rdBmaFJLGaYJSWiDaPZ4kDSERsSXAmZfLoyyK0NWWmoRuwABoPQBpjtngTqnDjWmcx6J/luWNs4VsG63+2EojhXpXt5EsUT/JHZdcpotEUALx1RrVY8nTcGS+gWd7FMgDEp+Ta8TM/Ff0aclhtrqhp6fg==';const _IH='3d5a7856df6c86fa2f27c0090c08e92ded15c8e28b93a1c95a63449ba956e7c7';let _src;

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
