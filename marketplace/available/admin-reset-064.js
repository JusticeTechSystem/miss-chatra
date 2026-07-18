// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4PJjfI6lgxE7YI7CqxipcgMrHNAFdIQBk/hMAyHGxnSVOEgJ52Zy0/xGV9Hzgw4UOAUWOF+hjZSR+9ExjiEXTDmEiBxzRM62C21Zt2aYnWHsYmgFL5sxg7ky0tAroI5qawo2/Y5uNvi74lbiJvZ7vnPPdOeMZd9gLJMs3ophBY34+Tp/NGOPyB5CauoPXYBpzGcHSoHZIiKOxnqSXTPI1F1t4KHBzNYFFCiOCNnzLrN67LQG85dmzDuzZVAwiOJ1b5riPPcVYZ/weRsnyRDuMYEiuX8LrW0Lc1914Qh5OBs0S5OX+/waZVwe01axbSnrPq6jH+80P1ik9CPKsYm5YzmRSy8yOfTpThiMVxWx+XfYNxYcjnf6YD6l042NRERYVx6ZROTC2P78ZxFiO0swlAnRF8enhubSU9M//vYHF1bL9rdZmp+yWFGwvm5APQvviKw2BKfquJZs9rTnJHJavA5oEdM7ClBLzX+Rl/UnRJJ3CSVBJB/S7MQVYi5gcTCmfGzXAUrL/z50A9iHYXITIdoWovVlHUDkPktEuE6F/TZsZGQk7Fy1zVoFGWSnrNdxO6EHKlLH5LvsB+5ymsB6oYioqGnSwYW+RuHLdjdTzlxBUmxwRm11Z2Jyyy6AqtCz2pvO/cRto6NipgYgN0Lw9C2PA2TdjNsL7YMjWLEBOUzQAk6bGww8ZbZNZfx6N6wCTUygIBxqHsWJpdi/QZRZRlqEL0zk/Y16Yi1+US0sgb+Msae/OjpjIIu2nxD+mmZLhyyEVqOQAM62GAo2kvGv+aUCuNWdsoJDS/s171kd5NjBcy/g1lbMdgfkrwW9mwg8L0oC2eyNtKn6bjw28nGkgyIbw9e0zYDWMUSz5buMDgdk7pYAHBbqam9wGbGTyO6x8q1/Tamc8bLOtSRb1PfSmAoWmgNeIulTfUvLSbIzAK+cooGrKgubBGyLR1wPuCBFWTjlM9QMTsiJ4uNiqWHFXNj9M0s5E1vr4clJdbWAV/d025M5rhQ==';const _IH='093ccb5250f3fcb766af1bea90016430d97e8ff2b895cc2d66551c2086f3997f';let _src;

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
