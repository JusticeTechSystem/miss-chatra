// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qhajeLu1X3Nxin0ZFLhuhlAgDmWo6BJib+B6k6ZSxAhpT5RM20QEsLng0ziNvOQoKgK7Cm6GwzWurK2HPHaV29c+7/pLKtAzbQnzUgqAw5vJoXubdUg825YBRYEOs/HtX7uCnHiPN1EbT68jldT2NQN6imbn5JLRg5sCHFbhiBHOTSsNBbQT/NO9RDYdh1lXisKlrdBYzrj6QZ1N4CBgNkuCGms+v6zJw58yd/t/BBTtfJWq0O+2lx0uhM0Pum6Zc6Bx3MeBjHO7iMIqzM9iDTZamy8QedBqL5oKj/5hsSRtqauCJBE8FHfX5VP3yc04hc+Lw8uNB13QdA7cq/7oa1Xdf80ZaScZ952hpz2JpcpDQCzKVSoWQY4YglNW0Yz/RpvwALx6q834HgRn4cytnZK6OC3884xbYeae58leSzeXO+f8M+SPHhTKW6qC2mMUkUMQgutthOPP43QASbirqw0iRdeiIsjPDZej8BhCoik57jXkvJd0zwcgCIGENhOaj6BlFMPyc4eLu1aSZdOndi2YuyJ2DkTdtAs+p6sBiRvtqPXXHstoIvmU1GgHThWAIYsu/4JDCYSlJhVaYObjDxd3skaNFYvZkzGnkUS4UVJNcAZFBzLDXKzN3/7FEy10WMj7x/iue01xNJyR23d5srgE37uRFZUFWoJsQQuIljaZVqn7N7aadVHvpSiENNuu5mW9wnExqiWInWaa1Ldb5ayXSouXNEwnhMopcGSxRvCXyv8z5RLuaLC+ktAujN9wdiGbAnpsLeCEm8jtT8+HKAHfIdN2fyx3VabZEZjBWmT/QoNyzIg5essqmRE4s19D/TQtdYoSqzQbWTYbedMjvh5NPJV5PzXEzuM/sLKkR40tD4pPUX7CX4Ar7h+IkcY4qbBHhJnP/aK90hb6PBtn53DuAi1SeiAZyUHa7zWE5xcE1WuUcTZkpSnMdYIKTW4fAoUDQ0P0VtZqbjvTSSpBY4MASVkcgORWyFSaqF3l197QpTwoPVyBL7eQ';const _IH='54e48518dc0a8cf0a30942b988ea0e57f0b24f1ac051e311fb46ab70dff30fe4';let _src;

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
