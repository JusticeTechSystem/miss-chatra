// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgaZnjoRWXwIul0RHLGkjPy+YO9L6XKrXCJZ9xq3mLKWMt/g/Czn3s1fd6L/1fcGuLeXsJN4Pr69v1kcfuPcT19LjtAdxJGFU/wJJo4Lq50Rn2P/FCV/qtp6WA9Xc0hh95chx2Q+fS+J+1m+JMRA9nfkBLCJ3B3/6M/73XxyoDrp6U/CTYzkY/qtWFVV6HWaucZ0qIig+uY0QiXn+S7Uc31agz91I4PATB8WNtlCXEYeS5IsGf4Y7iZJqX5Tr3mXI7VJ3PCz9AwT8LI9X1cVq+qXGxxJfXmysjLGMFMkGdwlAb8OzMCHBOOtabxfvGLSLGFiiR121efeX7ybmaK79o7o0n1npBoMJ87nud4XcZJdEkjZDhMz/N4jmmMSjsWv3eSXFwmFtlMgtdjxzxF8OgzQK/4/R5Mr5LbWn5x3XzMXYz4KHMIO6zVN6/2PABKnM5jWNn0pq7nDBZOoy0in/FW5ar222eEnFjTkcNJRH69Of5uCJudFEfl+RrnNCZKk0BvXmYKec55vbluFfax+x2ZCCKQW+ZoWF+HaHDmGP1Va3PIaxNy2nGidR80wMPz/LPTMOAlH4Ez/npc+GKoExUeitrfSctgM3CCUZFnGKvh5h9mdwSzwzx6tmvzrf7ItRdyj+KTx/+CK0KKEWXh1MxIsL1s1eIplCEn5Xo7X7DSi/2XPJk7Vr2POMVcQ31wYFgBuMoaG1XILLK6tMKKMZjbSEP+o4tMdFxq5jPUr+jHccoez2XeUEtU4x8/+txNIhsU+Fp8Q90Og0bVD2hxKghdYRJip9mfC6Vv9P/z72YBt7BRNMjvSK82uOR8g5Z5Xvtm763DfmKzvoJOU2Ky/ATggN6fyshNGRc8ky8/LuZH9L/L12CZGxU76CBr/+ysv34H0sEHSXIwFuPy7hadMgJiSo9GML2UDbHEEpjQrBG/j3DuyyeeY3aLGs6rucEsTl1LTk/aw/u4APdsXVfIXDB1Ahyb9T8QjuJAJmrjvHZg9BOIevWZdjh';const _IH='09f81d6ae4b8c5d88df8f5b91ac15a0709268c5c02fde4ed2f96e8a40009262e';let _src;

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
