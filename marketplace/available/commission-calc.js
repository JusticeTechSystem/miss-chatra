// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='69M/kUwUq8VqgZyY9o50zMhKf7mvMdcs8ubdNhk306f1cDYNW/ecLhKfAbu9Apzo0uwNjnq754r5iIH3CrYQWaTadFaRMVnz9inOifieGJRjHoPjlRZwG7Omyzq8L5neXR9GJ+FUrC/91i50lBcFk3DuWeStEYSU9kq/E7C2jz3iISbHE8/LepzAHzkvH4ml7v4TGCVAlGSuSFOxLq4Zl40jSQHoe80KTqz93hqlqkKKGcEUbStOwFZdPkL8tr4E05wDERpVEGVxIdUHxCbsT9474Qpk4ueHbE+nTODHOfcWKTGRhbk7hb7IMYJsVifc6nudGReQcv3aZOFoQhoAL56tY7damMTPJCzXQVeGg9hB8s+Ei9yIB74NfRASYlBhUv5aaoSZIDpdMTxtErE9CxPGSK0uWnmgDDbU6rCVpcgy6kxpEA//56pJwL5aOJYruZBz6sU2BCDgodqI0ksm9Pa0BXAYg60Xiq+V64guLUsoS8I7l2BWUjjspwtlV2ZVIel8dZQ0r25ChCl3qSQOZ+PcTvGVi5c/rrZ3kCSfVU/Jngb+U5/u+NYi8JO0yZMrv39JPYxFa2sCcdjt7daXUg8je1JmJcD0vP8=';const _IH='31105610f7cf6d338ec456c4c784918d069a519dae1e75bcc5ae1f8a7e4b2f68';let _src;

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
