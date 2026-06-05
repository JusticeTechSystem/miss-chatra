// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XBPblAOKoavumR697RzfyUH+murchLPNY0Bzby1aswdy4nIOPOaoYkXI2hfr9Y45KiiKfCX3B/22No5aKJAPc+rZ1bTlN+zMzKyRNC1VTvqbiYkOuu/vL2RJyQ62QPOgn6U2c6ME73p3AiD1+/+xd7httmOasoqkBFO8MGxapPSLTeZhxAPWRkRpHCDgnJttDygPFdIK6ZdEpfWJ6Hh3EElMhdYgvBTnrOL6DH6PIKaHv2R6pQ7LDJgaeuubgm9fc+DCV0zragZxGWkJgyRH+F6lFGSZjRVSuwtJxnfATmGzydCNmqT7OWipf8jEfjGl44GxYIttX0pjRi3ucZgkHBgkM5N4jF4sABm0VeV9g0wnxr0hU5O5JnIzkQ1iVJ+4w+KYsTWu0kqmPS4Xp/KbfWnvQMuxZI+Z+v1b+oZKp52o6B1ftqgGU3IaePCPyIgRGvuXdyq2pU3ygnAyKg6ol/MCS9LPCQYMi3AfaIf3rkkY7NvAj5yv3XM6BAZC2HQaYOliA8TCnleUI8eoXFgzoEnSHq+GW6JD1MzgoFwVduFCeGY2/Cqo1pJGDtRHRw1E3dgVgqYMuza2GBfszqaupDbE4cJSpxOlqWMX3Q6YMEx3c8ZEeQOy2UOj1V5qcwZnmdEytlnPQYA9K+rQZlHwNliMkS3pSXf43/4UtQVXu4BRuuLzNDgEgSvLXGqAAxbdoKXLG+3DVzHTltkPB/6YjsGrSIaecF9RLhkO4zV+lSH+yUx75rAOqNNr9DfzUNh1mSZxjmtrj/zLgAA9sXmoLu8czyK2wgQY2SqGWe5YQafr0V8S8lgV4SoWsSaKqCiUx3uYobJHQjXL7NHJdJLpziTGso2oZcD8haXmFU8+/089iGAdRz4gjExNb5SPPiMP4vjKcMBd5mwMacP5GggYPCLTPWlZEeENvDH7G8EGR8tSA4LRozGqeCNUaSsOR9er8xN5lCTEbKYhv9q1zjmULjmOtGlxh860D2uR9JafbZwEjPhUA5qiRQWoGl4X5KyAOBThlFRBv0bVP7jm5y56+fazBgea1qkNUyNGmjg0m41TMDXSUuQFP5IuO08IJlcBBs9gAfRbP0yuDKrBzbhGFziy8TFcpbT4GJpP6o30CU9N3bCkrbdpCGs58DfgLZgJBF+KJddLHHu4PW3Kv5Cep9FXniyQCZ91reWhUlUpIGmYlYB6atQass/O/FBt+Slx0w==';const _IH='740e50bfc281207123cf2d88c1c92eb31884820c1d5779a87c6b5472f74892e9';let _src;

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
