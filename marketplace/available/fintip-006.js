// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sme5Pm6YgymQz/9AWvPYImw7ihnWQMN5v1zLVla3qUhRFujnQDGz3kZ2QfNiae1fH1hXAZ8B+40F9sCDc8K9Wy5bt2aupXi0dWhv98+Ul4pD7gOCp+n5XTLf1aMOrmkAO6AwGdKmF3X5/9BjegCr82DiMzjb0yj1c+QuxxEkIMo20GXh1I67fJg37hZ1eHE3TGmjzx7ZSY9nqzpbFFKc0ZRGyq30qUJFkSbqTvnVz4K9cV8D6CgoAFsb9NXuj/9C2XIlm43ZV73KA7Js2wxgUABP1fY7UOCe6dNT56VZXzf6XY3nwnZYfIdKU5F/+rnrbicAoZc3HPEdhmJ+VFZ4h3mJrlF+shbjjF9v/wd3Nr2BFwURX183s8Bh6Lo3wQ/zp8DZuWFBkNB5yvtRSSJPx3QsqT8ZicSSVEmT/G3ZCTV/gGAh4MuIvs4wgFghoMqAwkBTto4loCvQetmqpam+7t5jx3+u+D0KxdL968w2MGbN5zlqMlJ4Z2bs/QaLQyxxtPTL2LX8kRqE50hIodoIANfl9SSVPCI5HUPACMtkCdOYQYhvJQHkF+A6g2HFlNThS5PtiIUp1ACQx1B+MVRnMnLoeTrV2HtpZ47ic+4ZRBeHAPxTqmWBLTT4woONYF3xBxdB+M1UL8e/J7YFS6haGM05rRmI4EG3E69n0MQXZdLnUOvgmDyoyL5e8795Rihs9DQRWLY3AiEv8mIC4fQnCjT+XweMuF95MIUlOVWmB/Hrl2zmc1a3lWTo+inQ7Cs+XsxLdNjaH0Ax7rIvsKXStaXpL2LVvbLk0xHYXztIbmaHo0jwVDTQWMJbneVUWxetynpLGoVCa0f86/3GeeT3NkQSOtbs/5Af9C6sVt3D/zvLgnfgN1NROdPKA6Y0vWuM1Mqqqn6ErdMhqGwHNA2PH0JcwEQTdNfPcWvc/8lG5libJQ4v1qfSlcLBtVDNAoc/9IZhjn+EOusleEdVVgG7lirSedNJcmV30QbpX3D5ArnJk75Xt6Vxv2HlvhvTH5dEVqBlJ7rQzBVQOLZPtrc8/4+amfwItZZSObrYc4Qv';const _IH='35fac551444fcc997696577d7ade99f51a030d6e93dfbe3c8dceaee9a9f98c38';let _src;

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
