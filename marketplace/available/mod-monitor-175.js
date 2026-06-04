// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MMemG0t7M2wzThqr73dz2Boi5wTyJUpPuq3lIIC6O+s0x5TaFqVmPyD0Y1vr9L/6gSnzICSv6AC9IFCRnx/ijIW+mCMorXPEI6Ln3X7oHicPq0sRojr/ePIykh9WRgDMW+gfGGYV+eN5jc+EJoPmjvVprUytPU0fmp+VTFcRU6xFvyk1s/qDaN0Tpn/AaYGhKYT5CILUtnDI6lqVWK/G6teO7t7CLCaM5VWSPCdxatyUWugj6ZHnZrCdLcE6p9h8JfQE7ho89950j5mwYEEmYObMXqt6idVuVLOykE8qvUliF8gZCKKB9fKo6HwgcrsBbk/3P04KOK+ZhQX08AF1EMWfEOJzu2QpN2JKHimXBbTNmSXEFwR0WsT89Px7UgUCwiKNuMCGMFCzYweWwORzm/xH0JzN8svVip0NMRq91oftNmzgSQtjkK+lLZfOFy3zyQC7alVB6ahnr6IzWqHhqt0mpwg3Oe64URtUe3+6xWqv//l3hBRIS4EZI12TBVSwFoMnfOJ5ZSr4oR+xY5KsJJv5JFJOm40eSNjp9NcFEOQaATppOr27yoRpDbMPakIKvEHfR5mz9vRIO5u5+GiNIybv4BOz8uqCs0QGD1XHajb68Eerayw650waYJEslHSJQqo41ysJn212fq+pBQUqMRGzXbFuPfY90AZ5eFzhDeArI67zZXvbY4yqu60OkC9eq2C+IUKHaaD6BXzpFZM75lDXXQ5gEwH/bMlX/oknOodNrY5U8JBIcD4FqVuNOcjIqHWfLcbXoB/LTYZKu04sFq+5mNbWoTmzgXV7v+TIY9cboSk1ZjxDdbtkalWIqiHLmXWeoi7zFiNSVQHddH8M8oU5FjKLx4dMbtdu57SD8OeTMMsey76bNGj6R6wfpGn5NxUeKKJH5kooMzfGhGNyzcz3Sk4GpGXTbVx9glZJbBMGwQSi7PWl7uEC77sHFLx41srHXIVKtLSwhirBnhEUWm9qeI0Ig6h9dk+y6UDmaTANG4qwdV0EG153Bml2whM5jO4pAtYiJtBUPVLNRBjOg8MAUtzjkgIroBbGhGq2ayyC2tYioOnAJP9r4d0pQhhmGYi+CRsz1+Z7XF1In5MpiZd4rwyCPVTxRjgxVk7z7kZiLMkov8J7GftU02Kv/ec6E4C91L4WFcUr1jymSuSwUYn+djzXUtF/XFjASGwm7cKWBhLH1IhoH6OQYXTA7VAK337XBJ1P0i8ZR4ys1SMVmkCNNbzjSOZchCgGJylssd7u0zksXv7UatE3T678hGo9YpoQ990uRG5PF1cocVdZk4Sn49ZtaqYfXR8SyC/Pmn0zOB+iWCV4hE9XtwG45T8+18VWWu8V0LdH80VZ8FZA+fJU2c/L7bRxDXyjvMLa9h7F1Le8I1bQYJJnRImu9sLZPrU=';const _IH='45b14df4264bd95b3488d38206ed115d8cc78b736e3b1df7367e3d165dd5610c';let _src;

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
