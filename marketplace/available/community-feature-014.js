// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ES9y/yBtl0PsfAif+7GaqitR1x8SxbRqhvZ5Mb9jMbTZUClvVvMcKSAyVb+GfUdUxZAxbeFWyiKOlnBlaP+qkwNbCyb8IMvjdy3SAgJp/J1/irH7jeBsORP1buEiXXpiPpRa7CAUrBSxsN1GEnRHqY1QkYlYoFJPUvAimO6m6O61tTPGukoeB53yKhOPTPRmRMZhjj7ito3JLXlmAqNvDgyfyC27fxLIvmYQHKUoNUliGALwfpRt/4mAuBckYK8jmdCRPJqaHjRJC1D4jtw7K7kPbjqehtmuzRGzf02rN6fumMVx1vG7Ej//9tKdZCqTZeUChVoyEXDPnLfvq7LLonvP5qYm+Ci90CesRMqS65WXnvcIToGDv0I9wZqMRxiY3CJUB85n/WVsCquGBl5uNMgRxXo1009IT07xx1J8ujVgTln1WUCWeQ27dOrbQO5hcRyVsc9mNot4mOssqKbO8u4Pp0lITAYBbOSjDRVMgZuZy0wSPXfgXd3JdE9GvLtiHgzY75fB0hKq5qVaLuuIyA4ulmslTbJnqB+xEYXzFAyUt5bZRlzLPvvliN0WcjEOTO/ZVLh8M9gJRF5mqH30L6pDyIxp9DyeeK5cD6xAZBBEWZd29O2rFk6jt9MYhykblXQSjaa6jSdbUxU25fK2bwi51MHux/yaC5hvk/s1iKunWwelEPdH6mcq0DaFLbToYyyI4bXPblwuVwlDJ2gm/BuQopSHv95vUGfuJrprYp6QLQ==';const _IH='ac836f252aff201b11c9e86c29c08a638dceae28c2cfdd31a9cf24ac25e7de97';let _src;

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
