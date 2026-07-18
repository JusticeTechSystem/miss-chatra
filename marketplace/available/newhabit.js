// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRt3oQ7EC/R64yEp1Cv1S65FAAubASw8SBxtUoUYassGL/cyXk7iWxirtFlvBqdIo6VVdqW0taGrzUSUiOSTlkX++4xXeXi3MWz5aY2K7SuP2d4JhWP3x8e/uQ/wELlfocFe/fBO1Xdu+FO16FSmpff6WnL8xrAPu8lrrGeb5XSNh07y0UJ6sIjBaMtJoYzSMU0/8tsMsvHgdDrtZ81pus3596HxNYCugS2f30bOVQTjNqdFAMIigJXdWJoYvBFBoIfhFMi44lMOPGPHPyTdxDyce2tIdrZJBUv7jkZT0seM0+npTw5YwD83WESnBg6q36aIAj9VLcKR1yu19WMcN0jZzDCmn9cS60FK4IMA9qgtAtqUYgszHksjLwJjgq331Fu3TrhSfQREAANuM4IRW/Ot1g7iJLcIu8x6AXKY3ytTsJW5N5FIoqB0MvRAkAso/rmwiI8NKLuYzZ2h35D5SW2h9+i83lplsLd3++vhTOZpEu0ZjaVVFqaLf+sE2wJwtUz8BuMbeYb/xqlJVVrWzmXoOU513F8I3Z5dGxj7gNQfGi72kd6NgDLMlKjBk2aXhp83Gt0KXbPlE1MZXpaS9+RC0nz2xqO4cEE6DYO54RIS2M2Di9Mgb4M6548Cn4cjcCqWs4s2Urim5siR1hlJJHH4Iym5mqYwdYh2bW5wuZjQgDyI2tgbgUaU2K1EVgmNKX3Tpu8H0rLgQ5c7tfLhESRvIkUxRSusse3SpfXPZdqP6ZjiEpMagkoYqdilWG2Qfi6k+ToV+bVZxnGL0sO3W8lKjn9kL3+XOUW95qX/uMe5iFIViK1uFbGg5jyLAD/94XfERh+ZBdaKSBZnf7Bx7FdrgV0TH96GA0AhYvJ5fwvyXnLqVRaRRalCCXZJdgOyHXdHDBPrfRtehgE2XfIUxolwOhdinPWJbjW6ENO24dYUA84U65+0OMZP4optbLJjLD8ez2ZvhLsapS9vQZvDOKaBoi20gLo5yBgy0nq++Sisvo2a2mn0eiGAufU+5utHmqD6mB2O4YYrw2dz4mrpn0YMsWI78jGFUHmlVSVFcctC99w5Uz4sqC7JLKq7tyD26dOjS8pjcrTpvz5cHLKWdZV9zOXiu/Ox1BtAGOEdjlE/oMljzjuaUNC6/vSTGKcIuzYQNnEiZcohvNZEHBgCZ/YvSRbX1Fsf3OImr+mZEBM0E+wqmOr82o0LhIY4ZtgZKQ=';const _IH='353f374c69abd3c8992815477a219570aa19645740ec62084b48180fc373a730';let _src;

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
