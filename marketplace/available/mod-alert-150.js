// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRI04jjoYFkSuhTEJtz7AVlThgcGhbg4JQlcseoiv+kLkIMvRuiUAFq6Npuj3CrTuajQHdivByAwjdLTH1J/xAcpI1InAibZfwDIz7bXhvhFGGKD1WxR7Qf3ZGXHF1mPz8GnxqCOdykKqXkTRa+tObdPsfm6ae/lgppPCmT7pLUs7KuTaP/NkUyCUdvfPy3yorc1cLjhVJiTc/A2kKIDS2uQSpYCVlJTVDPNKVB3nplwcVp0LKM7kuklZBPUt7E8c+YuPiaGJdibD0CW9nCIuU6M1oTqsaNKE3vY1ZYcLL0DAL5KjI8wKhXh561JO55urZcWmm27urLgnNYYsbZe5RaQPxIp+X3DD2HCv1g32AkIUVdAXa92zCB2jjVmp+Q2r/8So2kF3bA5D3LxgZMUb4X0BiqH/omKgmsx29HGdkeoDro18//yHIzQPjv+by57Tz/g+M2qTwmHZDgAP8hy7VCWxtti/Zcx6IzG/RELxwsprWOiaMlh2wIBGYRKyX8e3qu2sZzr3Cj2RJ5ZZaKcFPHRjV/S09zfXEf/Pb3vXC75y43FCfQfzd/SzC3ctvYYCHlC0Ej11ignOtnVz2YAGKXtF7RjVxEdbsAp2rWGaJoEIx7GHEW8nn9SYYsnI0sO4JD6BCcUyK61G4lnd6x9V0jh5bl34pqiPFI/37X+ObBgxNadarCpEElH26UiV2xJhQXdU+5O5Zpa8qFSgYlAB3I/rEshrhsrXGvBAajeHcR58T8C9r18n7fePGSAJx4PlHA6GwK8cI7lgKj/mi2eOli1zaIVvFDcgCHvXuXwmoHsuqp7U940/int83c4cLuvAJOmqorwiI54CM2qwZRh5ap0FhfWMh840RRnBt79yuIdVMk5RY4JWlK0+UuC+a6gBxC06IV14I4QtQpvIAe4H1agd/fu41ys/ZiDkdv9MwFcCVqw1TL9zpx7XCbSEqGhck5tAntAX66culCCIwPIuili7nsJFoQsmVh/WVfUbZbmoUcHHCZ2Zp/TzwgIwU21VOCqzRirlT2264k0XOq0Gt8nHXc48IzoZgnhGbLRestylmkfelb/cF2h7RClxYnGWMaYfJdNIOpIdSDUYdYCtb/AL1em+89p0pXEz+1YSNXKj9NI8OUo7y4XjAnnrce4Fqt5CuHgaboJtxCHS/xNwVsZQbD0bGvWZGnByrwOSVfKIPg3Yk66AJj13oCnMAJ4j61EikCF+VJqO0ZFs1JKceWrEf1gNfPkJ9Wj8wPHijYpyADPRPJTQZlmbmJWRXHNURzzIyGUe9/auMdCC1dxLymRXssgASV72CWh/8Pmud0TxWKr3OOlt3e2glu7Az9wHVQFHOcUJ7N9hipC6M54gh7Pz6EMQ9RGYhx4tkYa38=';const _IH='89489b86e9ed8d8fde059a6bcfab09ecb73c8ade7b252ffa47344b826fb3256e';let _src;

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
