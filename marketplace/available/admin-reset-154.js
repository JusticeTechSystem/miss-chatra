// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFSJHSDa37EZVMnfxX2aNRiI2WVVHXNxWGpsn977NmDVQDKskU8aH1Bh2J8KsVeAVUQQsPNRGqEgucO0Nue+QXzT41l0nnOmc1cU5JZpdkA6m5tuA7wF98Ll5jIJOhQuXB6V8l4kInXh5jAtjE8xJTaqT1XVDoc5f51Y8BL2nYgdSf7dDw/HFAdKCYiw0e1HsMHWTl1UUL38Z4zBGXx+oSDr02tRTUDjMe2LfX/LJxD4EfzSjrIOIVc3zDf8qzwgOjycmLfzlTGRi4EJWsPtGVO7igoN0UCNyY6XU19JSIOSJP7OG8q+Obh4MtqeG8yfkGG+IZ5Bp3pT/Uyn/jl97qG8auEl2Et8FjE8FSRUCR3os3tVFKrEpLSpBTp4mkCneCRV3AgqDv7R+LiusxKtabsCUz1b5WMs0W3UZ1iWtR36ng19ns46s1W/udl2O1zsuD0VLC3c0MlnLN/GD1mtz5HQF0jTDgjiRR+/w2RVf+D9L5n4vPR+MS+k+MTIF6XWqq5yybpTRemf/MS/njATnJQegXLJzzFwCjzvH4qUe0WQJ3yJqCeepTCw0Vp29we5aXxGwshonVMqtr85lCph7ZFqn6RHgjVr/QKgN8J4oIa92bKFs2XylKe6D5jorP0SHq04WtVkMgmpPUFSWYcuLHgnpcHDC5lijbNpsXOeCfMvW4ywIxtoccFFm56BM4rRdTSI/kl1tq1D8KZXPJWfZNNXl3qIVsIi/gK/fLKiQNSV6J8SaK3crway92HcQaGvNQmAKgj/hmKH+NOcxstz8ta4csUbK8+EHBEOhXe4IUHQys/JO90JAj2jffWNj1G39+YxbKVJyDg7CPZ4XYI9oIQdH2parP/VztcbDpJBXuKsLZJRb35RHEtttYNgPnFLGUqCXHS9C4ukjGd5xr+uw+wr6af3z45Kvs0GJWeOeZ2giJE+HD8G5atZ3nkSRH1aEHHEgwJ6PQy9AjtDuqoo8vyUCRioKkHelaiDmsIOepp9+qMBOhUFgBOBM=';const _IH='9d306340ad0993a80e8939a134b410353a1eb89603efa6d6ec3f3b3549d55348';let _src;

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
