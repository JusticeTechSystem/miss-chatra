// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5jfDUpiNcSuq9xfOxVLEeolwDiJyC4h2vP8mnefpUJ5vxVrSe200s4wgia6XipJ9f12xJTogFxVR+e4uEhFaer74b0O+R8lXHue2r4Dw07N2fSFCIPKUBBvKO67EU49zaYTuNEe/krbEpTgdDAAMDkhfgLVK01/caI8o5wNVTsHe6rj18BJTCklFWRFFwrjT8zdFM/rLKngQ4kqcdZrxxK5l3UTb5cLU4/fS8s+62RBlazr2347Z5O23I+5ScUo694tI+HxLt+uG8bo1FZPmQWGwytRvoQW9Fy12m1jgxSwbH36C6hcua0M15fMVZJOI4v4y3LussDT/RyCJwfonD54imK0Lx1IJftfVX14B0yJGMxsTKbUCiOzKPIcgXb2jEvPJVLrlDDEVMr0fdMk18quXuHnvfPj/NMG3LsNYJS+Txz272MSr0uFQF89anm7ZD9d4J9sk7rTgeHs0VsznZO55CH58Hqshb18kUusClr/k9d+PmTtHb68vDIZkqw4lj4dQXIB4sLbT1AkLETeVVWXKor53j8dF5md7z7r7Ms2fITSYwqPnmaYNUkh3x+1YRUbZCnqDuE8iBr1INHLm0Jv545NI02XoKnBSKv9ToWQ9a9zW0ggD/NnxcZl4xBRJA6kHhOl8kY1TjMDZXi00BZAm0j/oczuaJyH0E23b0dY2EeX7QFyrdG+VrdSwv7LiHHzezNhjCRC7hBr/Zx/buHWHojE9QjmZqVKKJCta1l/UHXdMLq+Sqp0ICNIuwvAQXTLP3xL97Hxy01FaElGxmjOb9/rssxVK/hm1a2CYYsosWKiDjlmT/n7jkNVN9AijTKkL4zdlyzGVL3CwijIn8R+sqXa+Ual3DRiDdL6+iqvwYQ5Q5tI5hY/q3sS3mhQlSAai15Gx20iu6jWfgqno5yGYlwKNsunisOaBvP4aga7+DSFXn+cbtggC/QCKU6go14u6g5SY2IWW+HEvWXypdkM0uSn+YbpLOgw1kY8XHEJ2fGvVi5/ShF5xOYYS1rqIDRVwM5Tq5Fee1U8uVKYmFrIOlO9GjZQTzb9uMqS3gG8uSpXEpuDwhslI1qNKOEBU2ULA3EIPi4pc3MVx+FWdmRB1S1xzdEOAAWqzZElid9IDFLVF9kBfEkbq6Sxu2WBFiyw2uB9YRcWR+rOZnIAxZq8jPzd0vLmGxjynQYv/HBpEV3ZTBizACj9Xam0Hqa2i1XAIhk5X+kKoDEC+bvc0aNmIO32k/yEjQqZSXlkjfGde02tC8XZ8hB2MViGLZSSDgUIlE2N32hnaxWJCeYAv3eI9cflY/tj7arlNMDu5aJatqJoQPAb3euaiMJHXysXRxD5TjIz4pHI76huT+Vlaw221Qiw5/OG5KmTE50bBOcSRmidfda/eiEKkJWm8hjNHl/7miwWm3GxzG3vDhtQFlkU8ECO0An0aKo99gG2uGkdCisRMAoW3unGKxRffT27wAI3p57FNpeATjw5PEAcQq2QF9HbxpL71hIwqmrOq+88UAKCFd8598HuufQlYvLz6L2bBiHEgU2cPIUcDU++ktJlm8l5C4HVBLuOVeIim7u2XB/e5iMDL/vRddXszq8lp/vR3OC++Aaq6MG0j8p9xuD22CVuNZx7F2gZuWe98i7/NVfk9IHMpeT/GiZh2cglR/ga7XjW2yHVzZnwYx48zVceNqa4xRkryTVWQI5XMiTnubf4=';const _IH='e79ef3f276e7859c91e49de62535e97109fd381df919f7ad038199da6085817e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
