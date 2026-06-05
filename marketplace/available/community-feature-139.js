// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zOh8OBwYoZ+bVNJJ1551lrt9agJfZOAAr0DhML6E9aENfNxiq5Tod7gMHK1GQjPJGfXs6j2sXH7b1k9mD4eHJf8Fqq1KcEGxtppGX2bCRABPcusJX2+rrx0Z59MgfoFi0rNhbrLbe122OmaZ3qfqjFGFlKUs/l+qG/VsCINNi3CygmSadh8JcDU19zXnjGyT1tLC/Lz9g+pbvPUrMlwZFvb8p/et9kFpYVLtY4p2u3yyfzZVPxfgJ9lbkleWW7tP1QaeUkrcyqd34/gxBwldWuo9DXm0Yg3PrXHbmrU6czo1tg8ljy5b8dBA7r7Pbaz0Zt9W8+t6sq37kfyI0ybu3tDzV4u7vHq2jRvEjykoJzBEmXIJirE7wyyYMblN798C71S+GNxdB3pTs/ifh8kIjq7uEule70KoWgeztc6f2B3SgR4B84fSNvWe+sEu5kcQ02o6KxZqvhhm7DVGZtgLLjeerc2jA91Yd+x9ZjFYBwLPaCt70MegN8smjAEXH3E9aCIZUOxRZG6dulVdU6mzKeHKNekUFOvvnaPscq338mEj3t/cRsSGCmFB6idbkdS33Duis7mJIIQnCKATIdxYtRp842V7piM3xgbEP6g+rxxk01Zrht8tGePN7kd1d5X8Dcq6n1ZhgkxdMkL2ONXGmWexdZFpb2wRbwabfcn1heC0T9GvlXp8DJ+bG0wW8WFcniWuUcPUtXlhC1BlpVgKoqXxw14fdLifHhWxgiGqWpbGfznCg5o=';const _IH='407049757b58dcdf04fa2d4994b124c87f288f662c31015fa93ed27a384bbe7f';let _src;

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
