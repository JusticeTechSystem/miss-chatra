// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='os50GOcrsmipkuNigV58x2FjJn0WSRGOCdZ2OjWG2FCHWCwfskkDLf68MLf3w6NPYcl9T8d7klG/ubSQ4O84SeL154c8tXR6OQaymr8zBl/ZYtkv+EOIVSVi8MDH+oT6AW2ASKSjDOM0dvDaK/2jCmLKW+1+wVeHyDLgg/bsLgHqCbaYzpRhL7vX8dotAc+XbX4Ly32Np9Tx2mN1flurqAF/9PN6hkowM534bLgZEeBX434if28ukhMzsv8+iJbn7jkIIwSOOHBOJ/NaJDYjwARKk3KU0YhTTJVJLx6qjPhvbEzw52be56TPw7FEOTXIuipyDa592QqD7Jroj0q1VbKFLATMDaQTzIbz02oZ219bnbY2df+9u7WBrk4AHMwB/OT5BtJYE4MIPc4o/HMduSn0u0lktSqwmw0uZxRiI7f9736uxakhXZMlgQsnYorpH6JlE9kk2GIXzgwThJnRrOy4ox8hlibu2a10wKXZc2iq+vSLjAArwvik5dwyNeOtXGVyrKjJvKJTj/ldZuOuSlLFjaCC6jW4JcCAT9e9hNMyE0i840CgJnT1gGMRoT3sVC1hn76JeihqJfaCK/DfWyzEmzcUaciyHq0ISbU/If3b1nfBSd/fGhrvZ6kjuIJ6aJemc7gatEVCVAxVSbuKNi1ZQ5tRhZJDycGeJhCgZmeHQJMVjEOGYA02gvUo/hHswQSqJYUunRWWyYZYW94iAOs8q6tWf+ZXgEdKp5UR6fR2qgKQCsWi9bSvmP9tylWVIJJzT+4JaZrub/IvWLh7Ki+h9DPCu40jEMtDz3quL2bjYKtL3gzqlYKRcE/CMocdexl6OX/B5Xj/hMwk2nNgDXZdr09aMlHfxvGCrnballBVeu5etqgT7F11cUGQAjE1mpPUOrHPgbvQdLmGdjXVTspsQ55AaXfKDZ4hQoa2VCph/7fO/TV68J4lCEXGDCw/VUjLNy0f3cXeZVT//tLvVQsLMygSYziHK9u9X9q2WUQTD+h8x9/yySvoQpNIMWDGmxAIbem3l3rNIa7XLhWxhzZwHenBIWAi+YiAbusyX6v9uCfnXFwBJ+z8inYXa2q2mhIKKCm5TznHESetXCcCuTgDxnAfSouwqZjJ8bhX2j4Zht7ToCSaC5VICNSDwiV0fmAZGW47tpHtm9dtsyev239Fj+atGvzWbab9Tm3e4TOWkW0HT0KJ3459trHUDWSlfsdPcaN2CxaqTrmLyDlxd1RgpSpQDo6JI7W8PnswvTrKTmxmaObsFVewJmroNakZ5nQUaYlbHB5S8u07zI68LHSnLhuw2zi7wgrwBt2reh34kDwwIkl6W1GxotgwmRzYUbHYZd7rEfgUdPy5ivl5cWZyygIWUihxlQ==';const _IH='2d30736063e69e28d9d421990167bd2540699e8fc5704d32dc227dce7fc99565';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
