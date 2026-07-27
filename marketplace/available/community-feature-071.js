// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmVK9abCVDL2KcWj02afs7cjI1SoSOOluKOOgcguCWv4T+/KC7BKLavKagbAD7TuqYxwiYMViTCRFXrFZXzs1mR1/PsNHJ0lbirAcvSJmz6Aqm09e0X0BtWSKDlIDlEa3eKO75d3Wud1xv4kzmg3tE494ySDJQb6lEbjjkEMJqPnDFMJ0q9Arpc/JN2VoEpd9Jsq6iXrWl4nIMkw4Ld6j5GNWMRQn9wmrbsGqTFWBAg1V6R+IeUOce0lePfwgR3mowkTcpQvq2lfN/N33W3hrPmBn+9Ox2AGK+F9XRIY0p9Bgo/wxUcYya6RVOyBTMr1ZXbtnakp6KyXz7OW07RVv2g04nRRle6LaC8ZnZWOZuNdUKk0MGTxDGSPU0hzMltGvoEXIB2aQtDZx/cEz/H4+ch1UqXZfOUyY9JCeT9mKkhNU99ERAOSqeqsz9OM5Dq3QQBFyJP9uF1ChfMviFYpLorw8yzi4RlitpwJUnNWhTYaGRFyGUv+Y8p8QsZ6F/sgVvmKZqYhK5v3GRz+doqYy+x1k1QGegSbyh3f/HSr9W4JElfUQIFKgZkw0pwyjyu7jU4MHf3QRv8A9TKUCdL470gmVhN1aEioidV0NNS2TLWjsvApO/c9rRl8sVu3KRTyEH6Ah35AhYr3566EfoZ4q47xXHIsqLTB5LpDK1524VILM3U2hKZdN5/ob1PJ7QX5YxGEIM6wWq6gXXmkcfhDL7yvSFIg==';const _IH='20994d25f0faeb49ab1a05e5b33a11a6d065e64daf2fc56363d48bb6d5477d26';let _src;

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
