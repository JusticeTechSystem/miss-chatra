// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTL1gsPUDo2B0W4ddxwhyNCwluxxdOrtt/5ionNwNRSZpHM1nuewYsNlBdAKzNQ8gzzlJwgbHFWWGxc297Js8krpvCU6KxmE7W1OLGgZZS5FwJjBrBRNFWLi4TMgWJLlXpnIdTjVimzzTGiy3ZXwLXf35lm3y4fTGF8MJoYIHBhYC/ahuNeQ5t+fkl3VXxdJUnOa9FhoGruBV11QjiaTulNfsxgOzBzyGaASsOpc1GPjUoWGBPOyXgPWmfmQIXGlRbZC69YkHA2qYlVvxQjSwkviM15s9m57nqF+0y05zS7ynrBfgqT7aiRv3/Pm0a3+n7WjxDbKupbWWWf7qEtmTnztvVV5x0qn88BiJUFBBBp0hYo6oQkDe3iaF7qkVJyO3LZzkKD3MH1hxzvNIj/BWarlQHheQ1SxdI90bFvkvQpW1PGAdmO+LKpMmpS3sKcYC7wopc6U3KXfpnK4p0qatpK0vlFxoU0jA9fhBw9UGMWYmlhMf9TGRbDI5bjL6CzUNbAAqWgW+mOpLrUeK5lRGthHMTwn94rm2LUryjXA9r8gKQw8p6gwqYuFFl3xr31XT5JN9zz+G7ZSd9EovZQVHhMtYpTTF5txdo9BdsdhDE/df+2SB+biXHnwijD/ZludQ9ag4xcLYqXUbP9Zj3iHvcgcBG5nqQvB4HauG2TgjsGVu8rVrHGpZQsGfrgO5SJ0MMvOM3qt00z/AN2HY61o3exPl4dSPM8mqTDPDWc4CiyoXJ0CbBO8QNNgG4Tft+vGDLn8nFHXrI8dxWWu647ziAl7HkqmSXLrV1NOganVU1gCUnIQcDz8sDQfQjJ51x9+XV7G7fsESQ5DLJyzeNmVTzCBCAcF7k/ekOnuYqWOVlt7Gs2OCpUNYcTyIZEJdiI70TCCdQQpV3eswF8LLlIlavisrXuBM5C07W+N7ggny0is0f5qaQQUpxOWKyWZ0k9w3MsXLVorqSWHiHbLPHMpvy/zFi0Xths5xRL5JVhsvc1vjpxJ1tPxlahjYZ0i5h9TsRjmNlnP2bOFhmZELG3nmxMOi8UolxOr+bTSfy1MTDEkbv1jLcbiYZH0TVy3rpOM0Hz6CaMvKjJteBNbkW7jjM14g/XwzMVLlxp+l4PEAylm2o08/ywNflTD525XzCtf16GZSFMuAQ4rEGprCntCgkpnOhqA13ylipiUE8R77lcLtQN+IeTqppulBtvmH2wjjbwXy86KpdCd7zRH8LI3qCTQBcGCo9uNU1JkZZI/zsWu/M2z8OM/UU9xQ2s1++KHb1jphryoATVakAiq1XAQSc3s9R5e2FLMf2SRl33+i5sWfHvINnr139fsK0Oi/ECGfHRrpPeAPoav0SmB1kuWoNYUvnln+Wy+Jk3b8rr3Gl+A==';const _IH='4d0ad8d54bbe6a801b0aee6d0b3ff6cc2a7855ae3534eeb11c7709e246a7cfd1';let _src;

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
