// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTu3LK7TDxdbKjQr6g6PsJNuzFYmtywiFoTCVXfsRbjQ7DiITEwHmecgr3gaiwwQjGFshPfIMOKDmiBgBxN04z+icJwdYozeRG8hGOE/GluiTNqs1clT7l9zVbvxXnJRXxNTkajsWKdusMvqGYoFkqwyBY9WbzXSau381rkko3Sm+1qr8qc2Zv57eDMzP4YrWIfOksrQ7qThYzncHiN8dw9jxkWiH/mD4R+p3OATIkz5e9ExxvNFhNGdS19/HT7Ij3gmNLg+TbXSwi/C9OjTv5XZjFXzqjolQOnxqxj4ZKzGIhXTQnbguIHJqcujHE3glK0MblFR9O2F7yXQYAvMUp1JKUgQNAAg/1bESEY4vthlcmRqX0KCk9b2HfJea3uZvbhZX9SYoEpyltWFC8qcQZ1YnzlgGbkh98S/0+UPN0TWpnELRdGTi71DwLK9OB0+gEyDnYpcibvEXvYdaN8hoLwOVmj6rEQPfk+baQyBteY1DIodhib4qIdLfirV5t7r9CpQURUG37GdOT/LQQQG7GsIM20DEKmzF9ns00YA64uwQ0T5qMwTfvoCR2UtS56sbx66ed+R3eVuMNd3kTF5uzQbpKTVyZFW5fRy/3g1WdNfK0D0rVIqXKL8hdbYwyzOpU3cqT2/pK+zAB2lSWXT1/xlCa0b+ErrH+L1+c6PJJKpc+GXc1a4d4+ppgG/4M9DXp2ZD4/7cMOl7gD0I/8XoyrJ+urCq+02MdJWjgyOHxJXRlzizELWjCsWq8b5Zas9zorpBaDHx25omYckoqtji2Xu5aO3pinO3duU1V0tcmqFNj031aZlwkZpz3++7xExWfkn4VpnEkMKqE+Z3Y9SvxjQDBmPJSROEsD320/yo8jXWu+ix8hB6rtvUSOG/9FHveDyT84goTrGb4LXQQon4Vla/l0zVjAYS9ebfeIF5d7TXZ+u2o6WeURmX4/pxP9wC67JjO1/trVsDmWuJ7w/rDM3U8Mjyu7hmt84WjyE/oTI0NvcPbcX7uKICBZ1So=';const _IH='147f53af18881ed934f15cee83d85053d6a7a7dccb04b902ac16659768337180';let _src;

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
