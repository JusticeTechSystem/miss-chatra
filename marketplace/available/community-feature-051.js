// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSI7ZkLABLaAtEglLk1KZa+YGpNVDkoxMcvaQ/KQqJYt++/St5jj2BAkP/upgtsGt7r/PYXWN/8pAfQtjtBnFHkOvPaSZTzIsAr6zT2NPbqpuv675WjSwLzGVEYreo00dIekS+N2vHfR/XDOyqtVvS4cd5d0FjFg7jb/ITxbk6Te9DUR/pTMK+WS4MPkRVhNfJciv5dDu20TmpggXfr9tuIMD9s52xTfwQQCpXggE2dinkKrBD7cDzNRmpwZl4WwHJQ/4/8MWcN/BCYY/ZDarzPtXR/8STe8YyZic5gOLXuMaMvOc1NDMSlhoAWPhUok4JdbCMFw7idXKda5ANPfmM+Y50Fa14W0i49sMpwU5CseTRi87vV0M0OB/Yvz2tGnLHbXQYNrtJpw55jkdGsG4PG3OIMmPQdlskj6M6zJlmiyn30JNwn1UbbNKjCX34k0iEV8hJcuHk7w1bXjQt0fo+qXvgyHD+AJ8Rf/HWKY2EVZAFPMAMX8fe+I8yRsxh5G49/3TsdtMULdw3tlBalogbuEAIW7cXvgkSKfXw7jHE08urOcrK29uABVNMAoITNBWKuxTwNQIHBKSEqOpYUlfi83OT7wQ5Hke7uoapXvGO+yzEKLPiy7Qsp7PxIx+woxZinDnoYXNXjfMVlP+YUzXfqLva2/NxazqgWJmjP3/WkuVpqltgAEOUixSY4hPxQL13VqEw/q30ALtde2Pe70j8N+qJEog==';const _IH='b88df2f6e98152574e3d521b5544f0c8b850d4809392579a14eabc18c26d06d4';let _src;

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
