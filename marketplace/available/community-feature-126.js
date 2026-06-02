// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SVnWmyFSO8VIpfTOH/jnC4rZik0PRAvimjOg/tH0ctjbF/M3v7S5E7O8v+Xd734ZC9ZaJpwvD3DkcQ5wC7ON06/2tYD5vwm/vaYRDX22bAbJ708mjaHL2elatmDzsMNfjfAtYg76aSrfUAXxr3TtCO+7uFIfq6Fd3diBGWfjqxnY6YwJvvIku2uTjgaut/HGfbDkdgi2778onYZGg3A8VPrWBxNge8F0VhnvmQRhi8BHwKPeFL8x4F94qQTzAmMA42CKQmebnpKauzXMdetVQRwyIFwLn+eiW/+meD/o1P4JJVCSmatDf5ydA6ybwyq59GG3BnlVrkDfjlEFjnDO03AOZwjFRKT1N3s2ahJ01YWYjaT+GkhkNvqtdkYU/N2csMFi1a7t+hr63MmWNJ2jZB9R5QX9yc2a444LkIVyyR6WLB/NUnnvaIj0jXrrwN0/GNC8RL2Y9KioX4ItmVzbr4grtF0N+RfvwsiKtglakxKtfUxPcqcttiOl6/kE0niJOeNb/F560Gk4YiRms1Er9dUMR9bOTKnp6GItmMuYK5rT4+t+bi57It2ZDSAdpapSfEjwrZz59ximS4BRL9oTU7bTpM1BmdA8yL5b58elQz30J+MlGFfiK7ClDav3mY1PK3BiHJ1TTYA1Mwc75dJpNwjVpVceGt7Sm85XLeKVRb/oh9eHa3HIxhqhtvCJ8E6e9fPsNw1NGtQvyWVM/JH6Xaq4bkKSJyoZ';const _IH='5ecba87a115b38e3d722a88c738542466be88009d4327f6349d8e8a5845baf5a';let _src;

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
