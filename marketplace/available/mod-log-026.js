// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YT54Lr9o9GmgF9L+L7W4Nn7sJkB4klR/HMibxIeWDVFclLjSh3lSFbXFm8DszgBaFg/b98HYY3B4p5s0ch6CZB8UALJe6bU3bmutSF2J3N8wY+S74H3K8dhggqYQmw1trHKlpvr/pdSu7yzAiDJZePC4Cr4cKefeYfdVisJhhQXkYfuuUk1NDaHdZcR9suPLqLUDf2qsDM/8lLwEoxJNoQRhn9r9EaGUD2LM6WJKP6CkdbbOrGWxu5A9esZRpF2EQlcfTP1H5r84jqTMy4gSHQhmYJsyMVVqoK1hxzx69+dL/yuahVGeeZfjqekkQNBS+ZLfAGd+0e/cJd2eJJink5XlsTZXoa5QHPsSTV1Npw1DmF6NNJk3FFXqfsqcuAieRbXNodWOTL2m2Tgx+ZQCJcjTvfSztjYAaqI+9TkMOdltIjqrxTjTAodwYhyM9YPE9RXO/Dm+KbXyODvQDh4FI2RNWuMwgA1e/XqI6WVnySWPSbvdgyEEbmYs+kC2yHqx6mvRQd+9dJtUNWTHi84VAe5B79zDD7oZ9QcpzmZx8G4bPj8GzQ2Nmyb6renf8gboLgk1EqPEjycEfKluuWRw3Nq38qZRzu0ARxpzja3++qKqAGT6DoODfQadK6J3Bc2d+otUSeXyDos3Gtya5+/oBqy2PDShdUnyBwp3htEXZpx5OBqATrbn71sSxq0ujKy5P7p0Oa2auXHJZGQjbBeDuuI39344QvIGndrB1HrQVohVHgFbYNepkIM+NORQLisZe9hkN/NNs+lTDhM0hMJndXO0JRhWQDGf3T1kDRz40HX3TF9yeAikvWamnPbQsQDfyTpl6UmtcG7aNsshqHtgAOyyzGCEPzJF2Z1JmeHglOw0Tcfo6mLg/tB2yrrEftk/PZ8ogfqXOF13Gy/ABfm8hGOc/ZarbG3K1zwHsJWx7/EMzy5pMWAbJsvRxke653jfIlkQ9fUgXrSD4Xj5loNIO95sxTQ6VPfgTf6We6QlclVZ7Zdu6tfKDNkyhGpajo0JsW7wiEZYEME85lnfRyid8ArjFR1ebcKX4fhOrhrpW5q9HXjHhi40BhpRm9Dcjk+ag93SrLU5daFQ0n5G4y2kRSVMSTqEuMEyKGO3F0WvN3KEAMKnaCowfTi4d00vZKKNPG4iYO6MHKteHrBkxyvZjmIEF3beBwuE6UyfHrLBntDC/d9dhNl3PoLEwc9AFfoKdFAVZNCI+v2tr43IvH7lAeksrppqsvfZWNk7fv12nvGrkhDQhNQo12TWZvRbUUxmvLVI3mSrGMESVwSSebisoHYGJZIK7gCTR088L9WhiPmA7s4hmBlxI1QKbRPKb/KT/UUMLqw=';const _IH='c5aef5cb38343b5c7a31ee9c9b7d2349d45105a2710a9c6a5751491eff742185';let _src;

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
