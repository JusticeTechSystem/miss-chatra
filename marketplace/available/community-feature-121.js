// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VcxRWpro9rdOMN7O2Nu2iKdCSo63eIFw9WMZ8U7t6889VVfrlKjIPSnglVEJduyaGE+BelLaVk3TgIIzTuO1kIjxOw0/ypCzKTRmHsTrcQLM5axppFiLj6FsueNJIzCbtVB+nV8rT4b4BGb4kP4IX0RGjvfn1femTGRdORblE9EhbFV4CwngTPsUQq1o3Wv5I6ky/8B5+ys9NU32qsGidEAdP2yj6xfAsM3FfKiR2Mxu2CFrmtfIH56rSldVAmTFvuUKKDQV0zZo+QibszN3g5BNCsDwXJPi62njz5Sl/eR3oZ+jDe/2daHc38sOY2yfmrvnbNhXbYaVLvyMN++wIerIzfUVwdlGd2mxU7msZZkrpZGyU8Jk7qfW4sYuH9XKhe/BmUcakRuwd/BfPaPJSYJC0Bg43Z4bO0Ed4QmlPdpsZNDr1agNldJJQdwvoZ/ixSc03Lz7yqiUGu31/zB3mONixxQw5gam3FCxe5RGCN3x1bU+glErtA33dcxsx23oVnRIzWv5EuvCvtymJEIgAfdDTWvTNVlgPcajk7+CLB+Ha0u3CoJUc2ucY0b94lNHuRYl+ZzVIHTq+Q1HgIODS+3WyHYLEZ3sayyjebpnJwxMeD+kC9ZMON2pxJn+FqwY1zb3sTZqeB6gnmjIPjZTIP96NZij8/OB9QExvzO0gfAgDd1RgqGYlF1pCrgc2hjL/zcChZiiz+kX0fjeiu3O5OVSoyr+sxhK';const _IH='6e0c165348d29bd308fc41b95c2b183f66a4b20efe06c1ce667985ea95711814';let _src;

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
