// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fE7ETxseZtXUMoAbQLUd0kegYJ4htM4QCyN8mQlQlx9fqKXhrrh8XDxCg3WPgvp+37ybuuEJ+FYIgJ5tL35J/cbV27Ahxxgsc4VY/slSF1R1kfoBs+z4yAa8Ug+NJRewvoIlKDr+7o1Gw1/JYirod2GY68K59cSSvWjBouGpIH4+qsUuOh69YD5mnlSfWTVinqdrh47lIRWe0qDnGwihTf+q99gP3MF7eaarBuZV7mZGPlmyyF7H9ngrFlR34ojVkANyZOZIOzYasW/WoRW3JqtjSGxXnFJ38pkIb2Ou1cRlbNR7lUjcmeDWQ4NsM/EGhtL6qInEV655sUBdAASvNvxWvcSgmpod8Ido21bgUlZRCS2J77nezPhEraZoymMWFV7L9eI09NVBDNOHNCJIyv4Ra0+zj7nOw7Lg2izEQtI15a/lKQ9ztdHKI2J75KK/kLKIRG1mWjBUuid3zLeYQlqcHPeVZCfwAXIvCl2S9LfZZFEsyyQu6EehSZFECzd2UbGqFbl86ixvvD0gOniJBZeDBXUO/Wp5JYgIGX1gZ0v7B1B9XnHZOdfyCOb8f00Lp8KdLwm7dGC9iVco8EKfsZByL4JF9069mfS8r0wAezkhdJjjJz0dGzdGgRqPuc9SwBM=';const _IH='f824456796df018e9a683d3bac87e0596bfb70699fe92dd64f31b24df81f9e9b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
