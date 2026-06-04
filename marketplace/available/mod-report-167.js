// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+ZiqhK4WbZn4LaxEypkrgMMcG+BJSuQRyGZRWiqO1yH1fwwm1H0eiDOJ9xxZw9BjzYdThVUJgL1xDQYhTw3egGrrYAaud/fXFDmqsr3GBRvtNQ+gfbucjRyGULveGlIrAblbkPabddBZ0bZUHHk3zH49RH7sq7czz+9sppEJE9PC3KqYM9bAywbSpA9AGJzr5OpZ6O9nGJbHGEj2zTRPfjNrdEOc5IrgwjfQX2gOps7D0iBvdIEArKozN8AmRJ/2fTa+Z+e+Ez1kVCNKQtGYJ44uy/p8aPmSS+J373BwrXPyJs/NGsZVlnUP7xLMvdmCZBz8TNm9eSAvkp+wr9yJ7AdXrDhmQ7IY9VFDnb5iTrqCuxPgeYjjWcXmWN6xmbVWdrHbPze6aPnPmefJRpolMwGUEeu1oCfU+ABpO8gb2cQvi4cbFJX96alU0X3Z8YppwyvjLZkhQ0KuXUV9yR27PUpMrKwM7S1y/inVKEtoVMJHe177FSwjA83H3F/DKV3QnMnvLqSoEFmmWitCAg7eg3EPxmC0Ja0zeztaK2BBGmpWfhGSUob78EGozM3oLjya6LfFxd/sE27qkwgRS1s3ldLTKiCedsG7I/OnHLByJYOPs6/de8EhouoSUZJt/YyR7G5HVeUHF9fjXR8hmrMcpNkZEQ4T/thjbgt4iuGDQKEP7yJUzJ7a9r76IvzxEDN2j4R/hj7CAN/vjSJN7LwUJhbTlsKosgIxAmFVDCC1rQP3FDLU/pbwLALM0wwLzRzZ/JELSPolqSfip26Cdf/MQC3fIkxnaRvv5qzTtv2rbo9rtC30kGiSPN8VeYDT5goaMfPNVG3aoZBYXNEWu9JtMgpcBukXgp8vr6y176C1g5lI+/WqcMe6JDK03JeHiuP36PCouLG4RnRHIcr0QkycdXC9ZhL3kpYn1FBImKB4fROYyUbjuf3gxiCojYzYWfwWQAbdHt7/L06WTdwhlXXmNeBoZrpQWyc600b67EglP2ZnwvpxHlh+4PZkuQnJXeZiYa/NiB7gVQZWwdJ0q15ki3m+clWlmMcju4E/hyTJJD6NEat8z/diTpHVJoS48yDfgqGIA7cZhAqaeIGcrOxYc9dt3gvkF27mbujbOITmY5i9y4A2vAkhMNtBL/hqFqa5pxoSasAfVg0IFaSAkKSHImrXHGTPHC96wn+HpPFmeeMr+tZyUDzJKeHy6tqOvpRXuW6NV9+YYOipAmXQzMudDneJdGSEBfQJz/zqUgYGdfIqJXdlAOLTAg7WAwKcsdbnirnTSoMRP5EELu8C8fv595XN3tq+Qgn50kQu2BWx7Y2inRYvD3LFATnWcn5kw/dzgL/Y/ZMohsa66Idzfd1R4i8jyi9TKuSbFcdeymmImhP8wMZy5NtAw==';const _IH='33e142e45b580339f6f2bf9f43dd842a822951f9b59c68abe9df782225105f00';let _src;

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
