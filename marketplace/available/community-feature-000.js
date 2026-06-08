// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fuDTkxYkCIuJIPbYUlFlHz8IWM3Tg1JFPeEixYzrREq2nkksQ5uR/ztdWZ13/70FrcVArSYBrR31oTIHrLcfLIgVTwIvtXvx2JYHPEfrJPch1vOaVfovFyE4ajoyqTMS/hRJyawB4eut1KLbGHcmPg64uepU7pc0KQ4NCZFLpkzBoG717Rvun66cCXjWKd3touSy+Eb5ORpGsOcMRcoNh2fG2aYVtBWMKiHTNG2n4apdDrYb9jr8rVb9ceKyx5eV98g/st9Om2mENL7705JwbY9+w+UOQtvraIdtKDtmznpiU6jf6lbZoHP6P+YOjq1M6nxd61qDmeQ4AeJ1OqmC+FAX4priSFeWwApHel3SzeX/fAhWGFSWuKeeEuAo46E+pGXg/dzVvIEaXexMVC9qLt5uGta6RU62yCz4fB6cbDEWHieW6nTkKp5vAMFW07B5ByT8eWENrsiCXXPpdMzUhUahIMDsPT42psVqTdZ5Xz1cErTkT99HpmTSRioXaaScMHey+rOD3BS5iBSRZPE/zQ0dVzxYtEErT9NhmSSFvSThEQc+MuZphlIfVZLxn1AucRVo+8pBzoQGReGo0pR2Q0NtebxS5OStkdNcjB4OFwMYyqtnBhQVfuuFi+UYYTj3o4GbuBOONkGK10vosbr0L4Ro9RdwXj6hUewFEycjrWmbR3hBnOfxdyM9wPB0IPE+wOUrk/LFntjt12M2ms/w8SAZCR+kxVBg+RLE0y5AvqGw4A==';const _IH='ce42c6f7b39454e711800a307704dd31cea8dff337b9bb450c76e8337277db77';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
