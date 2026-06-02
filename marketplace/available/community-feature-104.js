// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EpoPTsCW7ec+bmGCStYe0uqOX9ZPrrW2y/0viMZauBAvu35UsvmQUZbAiu7A38Y/FUS+vyVk7kC+KBg4H2C0et+DpCIUz8j6HqXB/CFF4Fvw1reFzNAQoVvxKyQTTbK5cVYnEnPspPY80fDTdPfSmlrRG9qIBtpj8qYIsXfs0Zmxhp5weFtLRYoKpQOSUpDxr5CaBamOiUx7UxeUo9sWf+pfvhdLb85jLjedUbnfJ3ihrG7KLql8Rerl4mpzG/+IovlFdrFx7ZbaxVkrGgVjKzudbB3uMeuLlMGeTF6W5y/zdBV1FnuK+kf6JY1bD7ElJvFYH/YxAVyMdYs5j09Pl0irsP7As3742CdYs6A7uAzbUljE9QjO5lqURCkdg71jJ/Tckkk3SRvR8Pl2qWiLgqA10J6caNIpE7QPpAxvq5KMo2gLEL49RChAEwUbJLE02mwvtqIYkUX75l1S+Uf8sFej654Vs63UzNkZwMqGZ+p9CTi1eie7PrG0rLNHb4+71YvQEZBe0IUDV29FG/LbWop1DIBitbJBAe8CipPRk6owZCi+k+LDcwtmkFk6bdTiSdkK65n4IJPZCkOHq8uFrv5khSiriqBDG6qgrmLoQMvL0eQYwExkf2vjVBeHKK+WMLE7pWtfuQRkX2UWQNnuYL11fHlhp53+I1iEkyhCZiU20lAoD398+SYTe4NZPnY/8BHY+BKqqeQxHLePfC6BXWzU0QSSJ5tptsdnoqDRAQ8kpzTF0tU=';const _IH='a7a3abb18c154b75fb4fb44de6b1cac76c86a86ea727e2d01a18ee58b989fd53';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
