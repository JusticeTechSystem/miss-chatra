// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3VIpV8S1bU81OVxp7yPCEMBtsrlLtWB/Q7yDa/OCgMTlNz6tnHw6+y+f4OeAe/k+Ma0JJ3Qesw9A/oZxGW5/kilL+KjlMczwaQmXQM1GtecKRgv9r8kxgOfgwRaDEoewNnfYbNu/fxNOb0eVA2Lz2t0dKGBkICXOdrOwOYJTMDUjy6wia31x7LtMojLzkD74pxufjE3P2jNqPoJ92PgdpthEpy4v20dVc7LIbLpxGVVAVkCwvIrDMNqNt/ZpLYOLgJblrO+vKyNIitL+uQNRJqEplfLnkbgYEGTZ5pq3Mb0HlNC/gYrFQa40Fsup8ASq/smXjsWTKtlm6XZUozVaG13axAjeMINMsd28pSwQMEY/QVnqYVvrRF1Csh97PCeLpL137fDL/zOSjQWb5TmLPx4hHP/HF2sLrKoqc7vPlOlhNMEDUEzd76nwHONakcmhJUCWmggrgCY5USbJdTcYwceLztSCbMxmqvY8ktu3opnUCB6g2seaToOG6y5nz7E+RdreSbl0loQILlYVAPb3iQn2Rf5h6YhB4gOveHGfB/Wx3T/GMYmRxHpPz+yl+++xJxg3CNJeG91ifHpDOpaWppnA67ZM8rKsJzsk/1R0h4q1UPMfzzb+7DcyAdlW+ojR1EB7gegcAiqKs1TJb2aQvrtUjJC0hhA7bOb0lHHUQEyd9N3FvcuAvT1EGM7mHaVT9xdxn5/OjJOfXaGXM0dTI0ooBeWjDcjQ09yCAhg8XUze7XdNX0Xg/IT4hV4cpJ1a5nubstuIQDZ6fARJHvC69fLBn4FTNABTxjp6cqAX8w7V+dcK2GCaR6Vpkyh9yefrv8fXMdt1PCqTGo+nz4Awxvx3QKIXlCYh2C3CsxJJ3J8/XSXXnEIDQY0SGhHuv4HaE+3MP7WVEY5k2hN9jOYWuWiqH7wYdRyC91ZH5WqjwZ1Do3DvRcYKpeNuzmg6q0k8Bgmt9X75VVxbbnVZ3WJ/H4mXV1vsCzDAbbWaCIRYTbBtyqhrmRrEgLDfvha/oraV6Elzae0Rdkie+hNB3Bju8CssBotNGHgreMDFQyWzJWVGElL+cSF+LBeMcr8YIl5YIv9J/gOhk8SzrUk4WsQ80zsr0mu+rgLHJONkcdWjewTcr0hseuDJo5JSxzwnOob6qgu5ux+Mt43Qu6hHtvDbHa/Em7adZHgxsZAK5NHeCGI/m7IQcjXVnkDsPcsRxTuSv028HXDSVcjodpYKaSghqrMsq8mR0HAMCUnoIb9fsIZJS8JPnsuW4IIJBo7q/+UGIDg+k96N0o89YerhJki1xeJSxHCYxw/ntmd59bgYG3jZnPQi+5JqpqpTjcxCUqa1HE4LiBtGYYthBnT2Q9CiAfhLHnUNODUWr7EcCT5yGjpGzNFID4PJBR3Q8ILkTy9n7K71w0Nca3onjbu8=';const _IH='91b74af5fa725ccde2f745530ded54a9674697893bbef42e0c816bb2af2cf96c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
