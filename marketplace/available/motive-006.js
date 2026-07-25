// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpR8Y550zr0a5WB8P8U+NtWHN79p5LZjLxP8udTEnhc+l0pJABrJTwpimE4XOfrBWTpNUxnsJXFPA41gZiGZ3zPhq/RGBv0yF5lvQ0Fa2ZII/uU2OpwPO/H0/E2WepkOnvkfuPRvGt6tpkoYb/mWRgDOASIyUWgF5fIjVTe8fxtbJKCwQbivqwb+vmmajrWY5y/KOUPDzFHqPlmGfVHt0f3Tb7hZ6kHnclk6pEpuay0djRUqbPUJEF4Sv4yp+F/SDqhuT4aiOuE8iQzpLEABurQG+wlWaegZtj1tu9+8ojaa2k3yuVEEGjZYsqAiTeRsrkaZVa6JAtzIeOHEZO7GRcStFasfsDanlWXBZTHqDAlNufXwPb4e/emWWdblFikDL8CVlFJ+1J9gnQb3ycimBYCOicre0qL/QmivCAiLCReANZrS68bZ2R5A1TBPs4/FnPNZinHZm2JPZX6T/HzXt6prvWee4PIMyMdmMPB+7j81t4amVJxDofhGC+ez44O3Xz4nC/zMBVuQg0R7Bkcm0/Js200hWA52c+MwVLJdiH0UFZfaYQbUmoyehqQ4LWJqVN1vA1T3UcSi4XMXJlaiisifczG9CZMkaqVoot40+e6RxjjZqlrFauuikwCX8pXmg6CsWCfjilksTzRa4y52SO/y17wxJBk6guwy8KIXX6/1APXEG48fILez7SV1hi3+qczsM5CP9MUtQBLjz7bu4CvwxFfODS0BCd+ECPbsBddEuoyn+nyhXyYN0Mn1oRt/L6d0M/RaqlfkXGtueBO+pNrhpwg5M5F+ZZtIz6zeFSaJjEFVhVrVrRSAhqzHu63mHqwAWvuMPaZ8cIRlEjXY6FvRJBI7XxjdNuEAdT5A5UbTNIvrIhGh4YIvQ0Na3NUSNH00gvcxPoIr60GtQVmR5iGkdsAdHaMaBSLPgyYPbXJib6vaGjxU1V35ql0SNcFArLjCy9u/wXDh42x9VjDlJQQdPyHrIZJsmS4KittOy2G2hfe+DZsg3YRRBs2oIBh7s+DoFK+7A9EDhIgeG+QQ==';const _IH='6364ced411a25df4c974af271c4cfcdb2c5158f0af8a880337773a95019e6c9c';let _src;

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
