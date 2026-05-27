// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vuTKUaHM/KDv/Z5CHa/yzqDeqN/xsX2zagXo5thNDD05XGypNv6uL7tXKwr5ToWiHnF7XPgIL+bhSFCRUoBf1REksltgkB6fmFxukuJpWgBp49tlKej9w/ToXkZw8FXMcZ7D+5UzvFM5V6iYDb9+5LAUa4mp3YrTVY013WFWL+5kkxg5ChCoV4h5pnbkXcUlHrVFLkkheV4crkZHbEY5aYiLOk/ldt1YFvZ1lp3i4N0KE/nW2ZS6B0wYZCHpFh3wqgFD1ISQeVnUe/Q0qz0eIdcFESkFH2YiYafgBhf/Jxf0UKzt28HyolYxDsmZ/L/oig17GtrPE0VXzCgidXbPXuskK6bREwZNnLQOE/gd0/PhpoNuO4jcqTZYIJ8soLmukxoGZPYWiM8oR5C8bEdrN5mLKJCS9ubgYAuZEELKXH2Ri5cdjoeWCXxsnASZRloPflaLuoz083A6JN7jtBp0hy9sEZMyYdCqm567UgrInSDk1xpx+LD/gdYFO9RJAgIx7trSPM2nQo17UXvpptAwq8AAOVyJzNrzDAsY14wuJc/oE/+NWhSdzoIuTyN2Z7HY11nvmiStSfJmQ6uD9Z1o7NPsU9gylOHdM6sKbXgsDIV5OM7uQx2WwVdVC74VffT92b55Q+yFLUOy+ScXKC7DnesLwfPD48OwtAerk1WXW4xqaU9m8/ShiHe64pc6Ty49FaVQxLG5p/3f3pcOOwF1irEu6W3itNY4pKklht/QmxiJyNjPezq5uWRllLk4JhFQF9+YH0T2E+rI4HpBigrZwiNxBQSbygG5APCIuhHs/pL1LAhMY2wCg1aUSKNQeEQg6ITAZ+IoR6vnydy6jI7hV/iGuAGm/2ev7CjL6QhJJ6ome3uFbv+LienmSVqnZlUcsLZJYpEEywAdvMKgtVWg+SVimHSAp3LofqLsdUr9dmStL0/8+/bFpiENPoXM/1pfesSoF3BW7mQDvN/U3cZulZrBe78Q3aly0vbOwXb2WrIee7Zy9i92pBf1MviYl4xSMcufZtIufcEhc6KGNBqV2qn04p/xyxgls7I8LL+EJdQpEfvF4mVD0z+uPY50alMk78qDD0qC1hua7UeUJWhMlhAVBzKfDLkKmrGpg9Y+Fc5B3u5e1kSv+QCOKMdoq+1q0FovZAu+X/7yhwzaG2Nf9QG+LYpf06ur6QMqWoYIXP9rFNqYTGIm6L2MpNTH+QSWOUqhe5KUAKDYpHFlKLvjr5pOzWhpZgi61OBitiiYoq/w5xpQSvnBh6hUWyG6u16KWTdLLYwEjljQ9fc7nG7NaSH2+pb5938X/KdLm5YfqLCEd/9ROqtyzj6yclqSANbGgOAZNxoh+ptR++nEZgvANVY0S5nBAYyic4zVDCbc';const _IH='a7ac5b0bc001c9ce7008138084c615fa29781792d8090e7f9f6535e1b6dfd16c';let _src;

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
