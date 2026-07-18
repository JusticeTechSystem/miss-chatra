// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvYoJOA3+xnhgwLqzfJ0PmZdSXnlPCM+dcanxZIR2xMVjnP1P2pKIs0NYJEw/JaY5chjpVqoeyzZQGMsB2+vfEE4fEamjTeDFu8hh+tE9IAQR9a329MgQ8UK1OSv1oB10J6kIOyLcCeXTgtTVCa72pPxII6Tj0s8iC1FY/wB1gObyKOFtKP5m+Aw0Ia8mGa75dqChCuEGyCiQplFJmyPVEUWycr3lTQbhFmtdmOr3qz6qC8vUoKFxsv9SYwiRDCiy5gPbqiw0H3GNNF5RfxMi9tYAlBZe8Bcc6EtiyRA+uC5nRSEE7NjhM2T3GqqwyUEYTnJV1+Yg00Fr9egguS0FElwIgnQbmZwUNpyGwTKmm7c24kqLBYmUpISu/UwZku7+EGeb0/kLp0yTngxyowTiQu7lxfC6Da1GrWIobRtSOVwluO4PtNfOzd9wtUhxO8OHRFb5RQlTyIvdj+899Mx5/XHv4ktGXD1W+h05og0BH7azDppKKnZHRHfG40i190M6tTTOVrDQHmjoYVYcHQjN1tqszg/WIMsC38RLf3+N7u6FP+fbmeJtX5GrLHu6KVThMOBbCRC2YtbGPlQf3khXEpr5cOpPsctKV1WBhsrHRFoSJ2AUViAVS2yF75ar3FZRL+icm/Fy1CWRmNxUG//3ZFdESLMIcKoEyWHzLQHB0jY99F4gt78M//BexUe82ivPfDDHlR37ebNnPLcUxjCnK8PRpGlviSlT0LJ3sPZrLhlyYbf7WTBapU6NGYfeFbt3YTfHF7ah+9RyvWjD7+Pj1fJ7v1m6BlJVSFRGvkupV9YdXUZCMG+Mi3fEtSt2Kx6K4rP2z2kTD9xmO/veQsE0vtb3lKxvD7R7DbgZH/WJAwr6a9W1xlTbfJ8Qtb5i02wA0TbZMErjcjP8ciduyc0RNc0kC5oXlbkPHfOQKi3ibbkgtA407xkR9c6SbqVt7jUR5vo3m86xpKYR4je4ZucC5Oof1sD5E47jeMgcwie8TJ14BlksjmClcUpHgaS5PqFrzCqIb+Aw6hAVLJO1FyHo3V1NurFQgg90VDs7xv5NxVcVdt6YEzmEaq24XfbwQVKrWLki+++/cjuPKfJs9bNTeOdlIX5iwNPstJs80IkBthBZbJyoqLtKAe0a+bCr84e65KnrugIp4oqwjY9QdPlr18pjx+Rv0cH8UA0czW0bn9XJlDkuIuctcAKaMHxrS3r6c9V1jKZvFlurxsuSEMLDx5Sj5DQF+dthr49LhntxOCEKmVp8wajPzj33yAXL6NpPnoiOO3oAvUg9c5eragJjlXHq8BGCWc90tfp47zVLiXsBmrkoRMhprJyMGmUuD8W1Hkq2rzQpwA5l2y1URU8TfEArFy8G6cmNdTK6tfa0YOkiY/N7TlHaXzIhPjrKaw1auHQ==';const _IH='4f84a18e2b0f0cbf25ec163996312f6d1a79a2c58dd4631930b58cbe46c2c1a6';let _src;

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
