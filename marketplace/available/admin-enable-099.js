// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4tn7Cz8dp6e6ddq06llh40dbrk3ntDMsLLS/WAdOmTbzoKIrFjNjBU33bhup1uQ3EaCqiaBlSmjt5Y9jH+lW2+yjVwRhh9RcrTa7p4EOBK7W0VNVveF57Yp25M7OrK0NWzWoNd9AtbWxMYp1V6NezcFeS16s/YFWk2DOvmbhJU549CPz+jvdHfkEygRvLmkJCksueRfz0ZjQt8a5XpZjlqDzCf4wgvsSQWxkudQ4UBsNi8FgRMlCIYsK+JayNP2zKQ5JKWlfu71EoG/4IQJ8X6fmvx0EM9FFEaiWO63l2/ocF9R0QDk5fWCFpJY3V5TCchZ0tqTChLbJoxADhmJjowD/F2ZuatF4/GGyHXZSN+ElgOVOVuCWZGpPQGwvXOA3Y7WO+QcHc3zJoj5KEUfQtJI7QrbfqlrqgroOvsBYDxn1Zra/ZjIA7b6X3AgfB/VmXnCKmiwOuBYShxQKtXi11fnA0DCnZ5fM3Or1E2KI2AZsQwY+FwgW3aaopDoeEQTBCWTSO4gIMy2x9eb7E1kijHpZjIDQH9lQbyjxJAOVQABvyZruDniZNKf4usveyl+OFbhpiF5OhE2dHzyhKgogkt0ilYtIVBHJQmmtINAFn1JWGx1GiqgrRvj7LNz5MphwySzY8ikd978Jg3jZITD30NxpftAVNHn5kyOxk47Z9oOry0vzLnjND2RA915CMg/aesV4sTYdHS4yTb1h9vAk/SimNy58qv0Ppc3CzH73ixN7P/xa2bxBXm33kcjxMHGXta6B9Ibb8dXBrfXX59g6QGO0s2xNuKwMN5ErGDNMsLQ1VCSLChygVSWE6sOoHmEp7b5COugEP6yZIVxW0MT/W3lZxHvBRP9W4bcLGfZDJPl8mdZNT6uNyNXq4Pv3zH3vJKH4O9P+0OQMe4QcKRP3f1fXADGtL349tDv1twM43T0ey51Ges1nngapEV02lNNEUZmtNWZXNPOIuiawPLpM3QnTouiVZSWjiQOuVv2TtShFPIjyYT/VSd10UJ7gw==';const _IH='c13fcd78f44bade5fe4bc37265925a2df91ecace5e328c65c85f73fd8d674faa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
