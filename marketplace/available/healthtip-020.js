// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6TCEHYy4Rk5Sf25vdbNa9hF2mPUHM/3eF5uS6YjemAOQ38C+Pq30BlKpvmf8iwKXUBjd87hQSlOA8HCN8ARDSc6jag1WFSqvNKVwhy7hsGRJc9tBAVyqaLOQzOBWmlsHmum3UwbuWCuzxHT1zN8puKZL61FZ3ymGddpUPz9P3P/06g1SwAbqNXgyn4SK6aKLll/l7cQNksdmNu7GgUfHBYOStjmlv2ez/6+dAzYS0L+I/qlFYVvgWJot6lf1kw3OJxXMc2UHqYk7ZzY8J5YrFp0bKH9ul99s+l7OdQaq0t5TL5Mow6AzYlDs+rAzcFLrP9RKBsPcRX0PSrsHxQyMgaUU44mrL8JCNNI7rDL0YOoFNJ0uguDUCFPhgmXkkylXM/VzNl4GIXyE5ohSNNrfwIJ7TRGJfccL1NDTSsqhLH0eqNMkwzb8y8gPCrk55ceavQ/TENwRuStgs5UkOaQOQL2NkWP0fpy5MRMbcsnnDz++MmtBR2QYLHhH7znQ8GM6KyeH096APhGXm3qh/WkUHKIzyP5oNPNkcqBla6PMp6fEZMZ1aHrmdUS9x3CESXyPExjVWF0BjZE+JOQBXuB1akq0fLbIYPTPjf1uzCI844Lmmd1YLpN6G532Gzh/O7ob7UJznYe8xDna8ulqZxnOe8DSToVX1OVmlEjqpfS3d0/OxAQkPibOTr1F0v3vfC0wWu6Pp1R54+U/Gq3zREcad8U/Yi+KCj3YJHyyrOtjRUTugnA351BP0/qccZm1mRiNPmIT4UjzOXC/uVKOTHliYeCR+0+AOli2aUdrblK9fqFnOPzRxaGa8ilzbR5hDmPrLQ9UWnSC0TPZB/1YGDenu93iFRaowyvEKb88mVyTHdBSsTGfiIYJi/0phi03a8onXl6IbBIMIOcsfjkmUyLaKqvM/K0tQp0GitPrf6HwXVapJ9KkecPs+PZA=';const _IH='c605d823282c23b403a4cad05d5362c3d4d38b42ecf1b25d8e946308c70d63b0';let _src;

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
