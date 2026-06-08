// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cTeVjEs1Jh0ISORps8ckPMg22ga+e3pHsmB7qFvwQo2Z1t779dwf4K17pXgpgh5UpH6RISaWj4JiJGEuIet4NqWx8cehVyGgRg0gn81x2cL09xnKgER+mLAZzAYKJvN8iEQ0j9nOGbSofy/z2N0JWS6+fOn5sSl0v0X9qpXsQMg7kgTqwGcN9HNxI1UrB0RwRklcyvkqfUs6yKp5gK3dT4kzBTNZrQ0f8n5ZtzaQ0Y7+bM1qEyRlzskygi0QC6PV5q+itbSLSa7ot+LWxXd/VAAKbNRouxJOgvRPWk4zScFHc4l61vsVtG5w1AqP/qQLkC5oNVxP4Sm5tVDdsT8vyTZqyazQTcePHFNX958rkXMlRnqt7k3uYv7cTHIJMXVPKe0DZipSFWMH7dowZA9BREtRnsiJgXlCERYxLLnjEPpeNdT8Qg33493Z5AFNSpteio1tfzYvHI8oSfTX970hVwpoQJtxLZj4Zn5CQNaA48MfN9Zcq9E7J26J/Yvhtj2XulKl5eOf0hPrpmWb6ghdTd80eFNDRbUsaVjEJJTNdAPPxRU1o+aVWdOV5pQoxbP7UZB+X9oNMqfUZ2ihiGxMIaSibD4UoXtV1TE4DTVKbNrlQipwgrg4c9MDBDv9bHfKx9QJkIxgR+gNlyI1ZnMHD8LdCG9jUmlus6pSs6t/zMXv5JVuFdZOfXDZdaXn9UV0h/8lZcjQsygosEZBcBZrYdaBzqmGk/DPXQgeG06t1n4eKQlpMZ9fa5YN3rKdz+onhtpnfmEStc3rPQW228gosDSj/hLo1+A+UCTNcNoYmlDaTCfU3xjXmIk8U+5dHCKOOk900H62ZqNupRvMwh45qZZqGrBzwGe1uKgY22RSjTbamoiyEd6UX+4jZp48rHCGt/Bh/pcCn9lWVfPNA/yiKyPu5mNm0tPdUl5NdJGnR0ZhQwnCCPUteVxGYSEdan2V32c73sYMKq/FIAukBR5zrOJmfOYOHvXKpESSYXfMokqSMZODvnVBxFMaADylfMnYhuyxX7mWpWdOWo6bF8yxtcf1/pfOO0N6ZI6zeGBEWIEbwivMzZL/5hua1iPKTjHglh54xVK5Xb6vpHqkCUVfveMF3yDHhrGfHlsr4ZLwJYlJ8j//v1RVNkhk7KOvMuDmzl41Bd+E1yMMZ7WLdOtFE8kqImRFuVc+3jLmeND12s2tN7I5uRaWI4k5Ud/IFBPXshUDcIMfZ+P5/ZiXz/Lrz6ME7mg5NRkD7Rxalo+1AB8S/XLItxm40nT7l/apRdQbKWKGL1Ty02DX6MJL3obO2HhnjsvzDUKTuIuXuvrCWntLQZUZe0fIjn4EPWede6iFMCRu/BICwpS7TQbFFNEyvPHiEEhBUKIPa5U7ZNgSh+zhFY8bHISiBN8gD8vwDLNR1ShJkjodXVIBIKZv';const _IH='8067f5383455a8ed9577d941b84eba94617d9be881b19e32a2133d6e7bfe96c1';let _src;

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
