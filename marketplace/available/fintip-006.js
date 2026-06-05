// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BcGHNxRGg+J3/64szeTmaAE0R/5PzHsFs69nwbgr3Ci3nbv7eW9ysWgSJbsSgAi72uXGsR8w/mSj0/T/hBa4l71gt176ueLdDLzF6Yx21ui841SlDyUg9+xdRzOnbnfcGvxlJh3ykWAAqXS1pDBGedf2RF/rxUPPVLOupoZaqLgQcJS+MPugh4ZhFGC94enp6M2yVND0gwiSi9MtJchZ4Sxlb/TXaHxtKDQx3HGTx1i6SY/TtApOHemio+zr0maBsMh0E73cGjzMK2JAqDk9BsfjY/Yq4iESpiTsEZIt/X2mJowZA2gN4w6M/Bu4cYlJ3etrA/9W/U878oHju8QBCx0tag1DncbUGF7QrItSuyoTc9lZ1+m3ZHnJWO7V71y5Jgs5g1wC5L+NHzhG0uoQl3MLk0UdnRBxhnWzRA1uvY1nMdEQdKbBmFaWaCppOkruuNZSduXWafvLQjP3hk1KgJYtY+CxDQ130qoG1TdFtwLr3rn6drzyoWG4gVAkmxCceiK4STmpKAYZ1cB5vYuRnoSSLCBb56RReLtUvC0i60yqTd5EVeNG0o+5Cpgm7J30YMQN7ZQU94rfR23QLZDscwGUxHCPN5tEiYD8xrcltB5WvCwsMJY3boBSQqIIZlxtRnh+b87r1MLCZxm0yym26q4RLA3vYxBpyHGuPzIEcH9kER04EbnlvyiO1A3KPs49p0aUydiYqsrZvJMLSZk09bLgNE+7y6LGwqzAkSrIfF1QLbfBIVlTYEOsxeSf1pEr3D87pOn57kpQnxHpjsMC20ZO9cRsuIWVi9xDH/bgMhPCpafDbi7H6yqcYckX2AOwXNhKTCtVJ7Uws5yWrfdbSHkcDX5pQe5R+6wN4y15DBKhea27ShfM1R24mQMAmRO9Yin4P704iFEv/bKxs1t5bUvEudoUD3IECbV7BCd3ir5mFLWGmVdO9tHgzDEve3CfN51Wk0PbeVIhHNX3Bo8PPu9VaeMecW4FQkC1TPm3cIMcirETdkROFoWiDGKgBFt+rCaJPx4jKMzgyg3VPoIvNrJelLs05ZBsD1xXsCFO';const _IH='7faed361e69e136921d431e08697720fcb6d7f492326169c723cef93c60b804b';let _src;

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
