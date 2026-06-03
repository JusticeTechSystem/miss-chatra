// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KpXLFCD2L9g+Pp6qY1gqEkaUhKVCwh6IN+JwCIhRlrBntbJ2KdmtzzPvSZm/dJghuNQ5xSaZ26NZvCC1qdXhBWAcrKAr9F1kpCnnkO4vXW1vmMRQWipkFPeudF9byuo+v7hRHzcWWqO6Qvr1P8MJRaIRQguBN1admwnuUqmUX5cBTFZYREmjlRBTfP0qanUM7ME8vVTwVNrIz1ssSdSdhrzB/VyrjO7kzixlsiqyvTpZKgFPfNkDsCWWQbRe7IfbuZi66qeF0JAMmGk1ezS+0h2pN3B16rUEZPAHu6LnbGIiBjmd6Wo1d0ckjFtElaXqwFKgh6mb4p7+ivV23lq01kLp9hGzFr4dWMex1uZD4vYsWHVWfE+L0g0CPuCZ9bY8molGRuvlxOJlKoaUPPLuNtMi4B88pxLipk5RGVVJx8Ij+tG5BWO7Eqg6mdj3ff+AkpLV2rdMjtuXCkvfzRTUgHWccjbDxJovtfYNeHYlgt+wwYgIJUWO6AQOSLWSA36+6/r9BugGfCdihd2qF6kL67vvd9lBKge3obp8ClAemLzjMVv2lCyDGwaHb1qAEvYyMJvBZ7n/T4zBQH5R4zxGyiVSEILE9PGpR8MrA+5IRxbKtbeveZ2I3/UVpvNOev4q3ZOVhecDTD56unBLS9FBt4VoOIhWMIR/x+YANmYkM77rFLoAJtLN01BXQaE6tlCQIfVelCKiHjIONRK7tnbYXLUmljegl3Ldh0d85rbQf6dOzXak5iIKpQEGjSYsLI5Ia7v/KLSZXjBEo6WdAbFvT1oghQTteN39i2joLDIsTq51AYmZI4GUiCtECZzzbNk05kCoR7k7bWh9IrZlHMNvHGG0zMOXnNZa6CQ+DXgfB8S7iHlMa5bXx3IRqyDe570JKgF2NwQZw/pdrPwq27rEbapFE4KbQVs9oxhTjs309/VH4wjcTnm4RRkf3ZTea9vo4aCOC3B7GqucWTozXEn5FCESHkwDhvmovfwynI4vRonyuVJofEMIL+zko/9+CbqJbIUvyxPMFnY=';const _IH='87b7c03fb8cc3884c8a68e13e9cc86927aeb6193f5786b0467343045583de3dd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
