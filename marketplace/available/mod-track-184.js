// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTNc0UVNbxDdhLXi3SE2Aoi1WpcTPyc5ZgfR/3YXQCTkbkGFiJpv2bj3kl+X0Srm+O543rZ28WdzgYTkVoj21VWutYM4PHsDhmk1Cajsy0BGzfpvGSJTh3jPrcPoNODPCW/0sUAlFBF4pnAsyDjtCsd/YsjZn/PbV78teG2jND7tyjGixWdUwxsL1159ten82Pg+uG1Sar+16HUqqCThnygWXnzjQwo1vrPHjZHl/Nuw4g+V31or7RFdLA4BrrsbpqXgZMtsTjfE+o5LyDFok/s5j3TqfWB7i8CgYKgymvVQ7vMkPVdCU1nH1SCi85UbHWxMfGwqgUPN4DyCOHmm6b24WK5nqOwO16HOg6IFCSeyxZB4l5fB1eUvdF+oGlFIZNrmro6GCKk1BDDmjDDknk8V/eCsHa6BiMVJzh+kanMQCZc983v8NFU2f0u1cnaKHR9GfuoTq4cFYVNz4vDo679k7F89vjhOY9i9uKa9iIZUhMsNYKG6xdN71rfxLQA7qq3uWOCaukFoO0Z484j7okWb6SO7r4QrA6ormyeeEkaL8NPB+dodLX7F0HYedb2pHUwVOb0rh4RdGoGj/DYhIgiE05kGarG2ZBk5uQDirth7dRE2CodZhPlko7tfBBmBAyrNxbzLZnM8IxTAf5O7igwjBokwDmgb2tbUhtq7tUysdVUQAOc0qYcztN0OUYKa+iX0hHIGN+JytXLjcZd00uhy+TeOkFcJd1mTQn694bX9dapUOw6F5gDrKWVaFm6VXIakzPBSHM3gEOetskdKMGe2OBLLs2rjrhiQoIOy3112arV3r8x2BZmHC0AclH2SS1GOsASex2fz/fmI+H21nKKJBOPLvRe086AH2gr+6iwNah5VOv9vWP8/qJixpYs/rHuYu8wkQocEhu0rgWcbwj9xL33sTXNUMM9QEFiYsiewsWZmYpwE9N7WT3dLSEp4zz2lxLgYDMfRiYX882DJeZUYT9nRxbouBUDIYyXfWIpmLrMJMXUfO8+8bRFX/0ftabnNoFrmpvU0FRlAYS8AvrJb/bmc+TjYPEEFxsnpujpQX2RjjtSeqvRQealJyDDMgHP1mbqwtYlPNWGeUX8hv7V/iVUcdovrjF+PvOc/ySut/+GMGtw3NtDK3oRbOLmbfdJnkTacgRbnbKYvdl6LKhAmDPphrcRHFA2+vC231Dh4r5AmMM1PfkVU0VndrrSqPDY2jqWscTk7t6bshtnAa95DFmQRp6DACxVQF6dTDdtpVAEfZfKqnGAq24n6Cp7tXTQg4f8hnCPu8P1i0qcvaTfKn344PHZsiJUKeY4/iNpMz51yqgKmFobmqftH/29A5bizP5ede84yO29t7JNhsu+ZCDnDNsARIsIDOxPWU=';const _IH='b54696fb39bd9f6399a47e9bbce9884c38e62dc400672170f558ad3b5c61e262';let _src;

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
