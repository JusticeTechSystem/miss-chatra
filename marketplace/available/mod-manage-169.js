// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTl0QVbA1TNr65A5oqjb4NZc2P0hd9Kvs14xozxNkOnq/h+A4StOLe7LAAmBkiw9/GGo25bmYzE6wQcclEa1w66LAoYoJ01tajULFID913RLSpR0Z/SpDPNPFNHd5eTSM45mdRQzU9HYUglf5WCHVd/n/BG3apN8AfXJxNkmW9qbzcu2zpxgLG7w8nF0OFi4WoMtXgfelVgK8FcN4F9N+ONhTCr+3HNFRHWqeKSs2VKJ0EHHVgr28gTqGMs6FaQwDh6iH023cKT1BsdLlG5OJDvsDgw2aJwDturlkViNAaZj//pZ/7SiHzEAMHr1pjlm4D57e38p6VjOmR6O3WooS79MSc6D1fF2/hGEI7yUc+QB8HiFREIwHT79qUHiagoDUNvYXlAjKFcOA+dNBSNZlOWONnRpNsRRElRRzWTPMsMl0jwvekCoAhf1WAaybja/LcB43KRiAZ+D7egL1dT3ev6DHet1ywFiRQfr8HZxS0XrdK0NwBBLN0fbf9LC8Su0FQlriA99zKNY5OS2FgWwU7vPUfAVWeFiK9cuQRO6L/wAEisu5lqDHyn6SLJGoiTYE6m4q2RSrdgg+xk1eVR+K+5i08RLerK4KSDy2dNT/Dx7Cl60Lb980h2iq73Sn4XzwZTEVMgyyU98KQXoCS7tKJvVSGrDg48PJGL4lGhLf7UOU4I9cG8K8miVUmjiyUSKOrF1sJ2AXN0r/Ll/m4mzkIpz309lnRZA9jzTOcS+i5tF44ho91iy6ZUJmfPoT/1TxRQHVfzDuBhsrbXu5lPgtnqM4KVpylBycbjtZb8PajUAKQFAu6wB/+ajH0USQP7hoP9/M1SYYsE5AyWdRiwROilQADJcZ22X7BGAyCeP1ym/IduS2o5TSsoGn/wRURR/R8mxc4PfwcPRnEv1MVTV/sBxHTHSPK35etketCD3qDOEtwgJqD5aI/uBnhA5ZIB3EPOHBvE2NLEJBjnklkjYMBfajTUpUDOYG2nHysI7VEU/ajptI7kprNi7povibWjkLa4PtP8I3UPJEZ2A12yTIQN4cqeH/wEGx2Q1YVbGqLWn5CKhRICXHkqj4jHfIB5Kj8l2Ax0FH1wXwD0wrcWxelJYPnylifcSlOmVnuigGqmLEEjLTQq2B7/7UiSKuFlAIfifzioxc/G4qKXDICtMmn1kRT8rfOTf/4xQfCUvDoCNq2r1PHASxAlZGVdgDV3lDlFC/CCiIwJ0d3lRIOeoVEaYViGvXMbTCQa8VGbPIdkLUigRJXK3RIl6l5FTdHiUg/GYn3mW2syVe2opARNWO+V983cDzjJNuuDnniseBF/m4nVUyPdw4C46JdVj+14WalijfhwcAD1Sp88lGN9RgPiLNzlyBu0lr/ruDVOjaZ/ECf7FLkEoWV4';const _IH='0c00889e047ec1513f7644246e2f1a6503e456bb1337cb838c54d119ab1bc079';let _src;

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
