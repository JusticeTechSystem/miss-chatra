// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSM2IKR9U+jLcKwQecJczs3jHUqIZ+2MXzY8nW6qaCtqIDb72+duvG8q0dsUmUqEO3nECTzNO/9I4keffYOOBehQdW/DfEcZelRGBHTnS6OXNQqb3T2miGA1UVEo4Lld+V+82OOr4QMsAf8AQniS1BdfjFQ2sKTeePnEZ2LxqRwYLURl5w29XME9wu+1Um+EJHT9L0ABROk1yBlDd/kpqKxjBFSv0XPPXiZwfigZMj8Fs7YtWDF1pf6eQWZeb0tl8wIV18YX1Yrm5IuWpffD2P55J8hvQtGjutnVQU5qvRL2qXUpuOZ/tGu2J3lqtISnSpgvEPaJOilxaHvEW/6Vznz+dwfQ53notJ/2noMR7pBq21wsTw/vjydXE95aOFm5l6VVorUOtHpvn+VgVewmSB8PNzGK73bENFYi2L9l/yolLUTTGq/Yj2n67XX3cGs2HYYktRmF4vz93wj2AXu1fun5QrMxQ8eHolds6xWpmeNEf9mPsjRhUQMYoXVcexda9+xV7pBTrscWHKkPDGJsDTAsRLuS76xGg5tJT9Tge4gdF3buivR5ops7vUn19JBVuQmbGVC9GR2nUwdBFX/PPRw9yYUxHIMVMHrs616+AJVKFJXA+RCwcW+ScZFzKAUKwcaO8RqyM0FtBinu86UKPQMHHqsIwL5YsuCX56AzQsoVZ7/AknLSts824926DgyKsUQV8UoaKwsxQqdn9JPA2RTNPMYay/gNdNQB4z9ZhjJJNbzsA==';const _IH='a974900a46efa036209ec007a02af5d0fc9fd87ec5628e98e56998bb7d5a77ee';let _src;

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
