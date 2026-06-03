// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wm1CkgdO1sjs/3y31ur3NBXiBMYkENfpQSHmkwXaE1mbaoMWTfLcPGuz3Z6SKZiEwmlmpZT4vMQrnukA1M1wJn0Ixhue9gl3bV/PqYzGXhfE609LyF8xkUmyZegCNI/9bIs6TVu1Z7GmkWy2nngDvvYPs1yVwTqtV3U+T7pRBIVpPq7FDCw8zZGBCRlCDJo1kg2jaNxR8f6T3eB6KEMoaqsrzTXgAyVoiA0vJRBRr1WZwMFJn5LgR4vg1Pts6yBrGsPjhRo5BuD0m582UM55VNOItNyqz/1cXsiaXs9GdgJv5Fl+i/rBjv4MPV9SAAqLnbBwGDnfQDo11rRxBiXpTBP2ztVuXtXfdMYsWZgpEkld+6Re1gI2pv2VD9faQA+sXx5q3cxXvfSQVNwldJqt4iiV7BEWh8eLdsWFQMjgeEw7nGuD13nvt656F53B+6sS5hAfFqZcNyY6fmJNXln7ukTWniJkZglU+Lm6WkS3oNSaSlPwteDjNq5psmQ863MJTGYpj65BuniUxHlZMapJwU3SWXD9ipMZtXHrsnMgktMMCoXiOaR25jhFjDIGKhDn2GBXRZkItDjCiUw8QkBhcy61iGexOaNFOpkWqo/FKXQyvdkVQUR0rx2FsRplA3HZ+izg34QQXM/60f2iNyG6GwpGJfXsm6QLMzOJZRZ9fbHeoErA8iSKddpBF036KE4OXBQhpGMeHx3MsT7Ge7+DD7PJltry1AYK/pGt+II=';const _IH='83a16fdd82574519cc98b8252230248c4a67b454349636cab08a3a1062bbd4da';let _src;

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
