// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlTQO3K8pgxcqTxFqJKVPHceqFxCyoN4RYz0tnZg6VHyDdSAXRS8dcQ/mHBSzAWABdbPfJfIZ9+Q17WJuBzXCIHAfCc0qDbPxVyObEa6gR7fIwYJEPOGl2Nc0J62dQoCAuWUifowryawrkWHDhuI+N64jrpevTxwMF7uJn09XwH94nnr2DJFLJUMhVw4UymFN3CtQKX2oNKY/tg+fQx8AvEQZdYjt8l6uTpPL3hcJk9FI1FGi3ZcijwEvr6lEVHup8VwrnMC1CpmE/t6P9xwxYs7kbZzYvZxvMrRpBVxYYR0WhEBY2ZXVAjzxM2ewUultcsr1lP8exDndbAJuHEKtmLdwRmOw+ggNPGWJgX9N1zpCFafWLvNdzuENlbGwh7c5TKF0Jbn2+UY0DG5SyVhsxHGBMsBE65PnTM8BzynM9iRWyfyCoGp7zCUbIU1Y6uEuwAexE9uE6OTClifSDh84GmiPIXNb0e7FK8jiB5B1au+MR4ly4smI3DmOzn2QC+TpMjKAqATeATmg3wQjRJs8sEb0DYd9r8TXJ6uMTfL0HEqrt/Qc7t4fMb4s0QTI4uN+VGuYwJ6AqLhboOEvNDjbMFq+3MfI7sbBmCk3szDfsI0DA4dNz3pxRO01LM6GKgxjVr71Kf/jGLOJImhjQRrU5l3gd34dVra76qCtW1/JXlapDN2ZmLKwUy+5Hto3PabUrLg5N8GH7FV5Bv8aUc5cNKZNt9P0=';const _IH='7ed051375a2cea838a43545ab31d16b98a998dbb68a2c4eb9ec7ae378804017f';let _src;

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
