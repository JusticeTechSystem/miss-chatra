// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOh3KH/8CpxdMsNqXEBGDLIVXt9izp+mFDfdgEdHBz1M6AH5mWZnPp2FryX+QkaGtqHdJh1EroKtmfy+csqSiklKpl+x05QcLYjzBrPQdj1XpOdkTqKETyhvk109ZXsv6Pqav1Wwfh5glKIPON6mvivPjrgJUb+nxBNdICAM2pFHUqnDLpNbag56uWyqa2ks8vt2eIg7R0vUVTNZxdlJVk273B3up+zCZCWpAXWAccb88NX7mcJo93mssaKLpW2B8hfvydt6E2qPq88XxrH3QZhaOUi7h41hRh/PJ1vrXFWTnjcuz7Abd7U8QXKJeP4b77lAbJUyLYnvPIR/zjL97V9fsE0yl/mTfze2mTCi1gK0kZWsG1x4utgklgvJxMyPQMZKP8pdlX4jAzrqXzVXV5xefHdb4Wvcy0ZUy0z8cMpVjeb0iGtLCa4ntakGxlXRb1y+08iUaxNL9Z6xrXymUxBUivY16CHbNrFhAsfmRD5/Sfz2xCk4RgZ824PVFU5Q4NzBh0GEOG1On9hIZV8D/09xbF3vekMVnaa5/B1V2MqgJfuMkNvTggxqRKqWqPORc/n9vTyCSDK4dRWW+nV4WMoVFfFGYKMTiUATzMT0gO+5MB2+8Wo31vEyrHa288fBuBQwrmTh49bR8LhCDIP9NTsErnvhSdZqFJ78dXxg/HWhnwRNIIm/WNMn/khUm9j6ywoKonuX21uWc9OzUC9+89qE2qa1ak9O';const _IH='9ef1fed44a0572516b148a4fa491414993a0e1d3d766f90dc73824aecff32e95';let _src;

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
