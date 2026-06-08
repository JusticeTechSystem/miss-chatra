// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdXgutYrnk3lt8b7lpOQl/MVv0ZcW6vIaRQCgy7jeUvsHLEw8EQVTVxdado1fghFUSczsEnWuYLPblky6763VEBHcjzjkzowx9aa2KbRXCD9/aO/YSsGELwECd7k7DtASfhD7FaXfvp5aq/xjbJsKqmLsKI1xIYZ6LQ3L0pwstOgySsimmZ97WnndRkJLfJtsSf/zfCmnNCfp17MS8/7iT9L4xZUpkrDmRdEOaW4t5GePDYCzYELREhuHP2sew6b3rxCpH0cuK0amd6BEAWwivj585dOh6rwkRE0btdbXlVoaoLYQIpnycY+4W4yU8IfTxTCove2UbdhJGdVuKbrto0xbZEGs7lhdG3gt3v1xGv2TsAm53Uhq/sIM6TwfXS72yyYU9Xdyc5SmjE/Fs8hdt6UBIorYDUImZUkyKUjjb1fldFdIJITcUlMF+hSNGZO7qzupKd8qGDxo2KgnXFdIQRn69OZQQ3oGTFdWD5dfk8dizVP0LdUs2IDnaehwdVMvnbiGJ9GhVvIdffCbAx44q7sMWQfVJEMugGwzPZcn3nMm2+AKPqwZe8+ahNpK8tckCG1oBhR7EINmkFKtV9bUqlb8l5Bb0gWOFgMvKtBTtEtRh+6Mak+UHB1RfSHkIKkNxAVlEk1qRb0Skq9/QKMhj/hbWjKhKhUFyOZa7c6PEiVn6HcF+54deun79oHmdcLKOI1aKJ9of6q9AUYxiaWUSwPthOJ0W95i6DdVD7f3GItSdo=';const _IH='eea69ddad831964df8aae21848ac180324595a22b9f962b654c236a98b9b2baa';let _src;

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
