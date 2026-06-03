// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oYQOkqWsK40xyIsvdf2sBOqZeG7YVzA0glZ8fq4LboBPx2M31inFLuUAA3Gp/nGtpfAnq4+wYO1pfQPXi8eQMOFd76p+EyMegQIg7KvCDBCCil6KFDjvEHyZW8DFLZKjGZx/wvxTqR1wZ2X7C0sDcok69OVwOflUcjjl5pedeJA1PSoubq9jsSnUeHgiF78gImQV05TbZkJwSOaHfDzTnmTwv0qplXaxQ35gj8nQ1rZojyQ99xu4/z2BDQ/CPyhgFKqvJ4E1UPETW7+7InFcT4YVaoBMoW10IQECwnYKAWdGKl05/+kafdDyGJVxRFnBPoS2j2pvklLPefQq4KW0mpGqGT3/agpMkoZtj0llQ56w/cdWXXVjULtl7rzpc/hG5iHt69c3i4hHK/Ftflyj28ONHPseK+TUiGn1N/dHJV6G0oihzV96BslbLnFGWiDZXNmh85S8QE61wgIZSW3EUUfKF+xXymC6bmnafMP4cdS/MQj8GhrA0UXp6OmyXdKNY5Do8v8MRjHgfI4e8ZwFX2vR0XDvmLPO143Rg6lAO5/MRzPtQvUGfBvaZGBrA+fApjQIFWmzhoOrMxWXAsVFD7Aw8+wcLuoO2xVcVAIxg2BDA8mxFmkvWd+Vow3ZCh8Bwt2RKmmh+auz+MD6XJmOF7nobrIV4z3XtnYX+1tyCiQKaO2QhP0jTB8qDji8VKjckiRSWS/GZJFjElCj827JHz7cD/aNXHfOaPTY/E6JPaKqBUzZuL1Tt3XrwiddAE0CYKBQj7EUfsWmivSXO9fqSs0y+GKiU7OdpvIisW9qqRz4vmnknJeCGJJrWXNRPaqzcUnYfYw/3c/77w1AtryzcqspjX+7vEMxDwQoNVt3ox0tVZ7uBjobsXNpqAoGTfmQLQklWnUy9ZW8lSGuLsY3fvzVlX7i+ZCAEbULUI/UVbpVOVo+0xD9MX1Yp/SNUABZpo0AQ4m3rwhO9XuYMp/w1mlzf8fNL+axB0JkgDfDo8s1U4urxw1btiSKt4qSyhDd4ZmY1sSdlXREympIA0IeO6QkyHXOcsH/BHPs/rulHNwgwcGqd4dON3S6cmsnTHk3BTy5IEogLz57slj5vMVBdqacsPlSbPmH40DS14RDt0pRWdJoOphle5ZU/q5C0/XD6eqSrBW3Agzp/UWxjy7cR+s15TgfG50hXVJtHAysAfciaJL5E1uTBXeOrg9+hOb+FTPEEx/CM7K9ZuRjIWsyE4zyK9B5a62fObuDL/nREafAHb8oTbA6ONbdLN+f1h9YkobW9lZk4U05uQZ+nrKEMKo/4w/FH4KxhAppaGl3gQjkuoV8Tzf90DT8yT7fc6WI5Qgk8uec0Dy51nKWL/Cabl3UOpe/HZV3y9ela3B8T0mEZl4cdASBEkzq+XEmuu3SX7s3mo3H6crPOQ4PbC6IYGP+Sp5SVswtArCRPAiqal4JULf9azoGaqbpTwfQ74dnI5DUBZvK1rzpNHItIFbUj6lVc+4Jqj4l1oFVrcbrycQHIfEd9WDKIq09mo0pIIBvt3OzCvNaKmj2aQ+frWKLI3i2NJdNoTBW4V8Ccuu8DQN50gLYN9RCTAGFFJcme32/5eotQ+OWtlkCsY1P9d6VrcDS3sAVO94pbX3Ltv8j4SFrDiW+IBoCUGgsK95s8f58Xz+qMAPCbD5cGegBCKdpXjVkcgLVS8mI8JXfB4pAT4I58IJQdg==';const _IH='d13b95d56b9d8721bedc507d6f9791d231ba7897360c73c28e8c6a8e8acff074';let _src;

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
