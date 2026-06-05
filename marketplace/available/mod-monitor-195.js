// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GudLq+dK9/4aIeyh51pqH/WVsRSQ4uHvC6J/cft9fsweFHYGFJUmuGHG6AA6Xs1dYscOV5o0kgAfp4W5l2uZ/i73oDH6lbf+Ly+p6F1Vmh8xWhvd5YaUsqaIgYHz7jMlyepGp2fy5/dNwhYg8xrWeJER8Qt7xoPs5R72X9m2GCvMxhEdWdRFQGBEqIsfmvyAQ8h7bsPH7hiIx7sOgfyGgE3ktua4+ZsZkk3dZVaG66tnNnPLsfN9NmAQdAjTKzhfY0+oW+ed/Fvm/hYI2nXqcHw8RGxCWMd6CtaoR0IrTROHsq+rogyeAizroEWnebwGNiBhXKk7MevEhE8H8jXDdLtl/EtKwZUfoFohIayMjV1KYnlGRAiFJdS5wjR2RQShQ+n4ntQOp899pe5nqT9GFBq8pGsM+/eOudyvnufGJrh5K3Hx7JbYrFpoiM7KYVUqF4Hekx3/d1FWsrFZaVZRcv6MmotBaevRBPq1c6sKaBuIIxsw3Pzor4dCzct1g5uNxgupEVn9LV9LXTqf8UnyJ2tkBA1cgwdrZH3gX+XyFhr3y9TZJF7Z+Z66qpMXxHBCe3NtRIYBq4QOz8mFpDdPBy5EDLODE96aiCCeDsk6slsj5/BiHTkn/m6advdPQzAIxfPZgdNUk/ysADK13xmi0Gi24fISNoCpjp/vs8zP5Kxmb/A2vi9G5z+7s64DC9F4nGRvuFvSB23q5bvb5L9lyAx+GB2cF/R4jQ5P8yYeN5a8StNTKzLy+wXQH9b9TKKcwlTTUhViilGXSHf+BhwV+sRKbT/FhQPWWKYsFG182DDUSfjtXuxbTF5zPzl8Zd9pQ9pEofWF/Z7pNAy7BEsRIRvLlVDaoAk1A4x7NIl0FDBmSfiSD5+lb5FRY6QPbDFuxu3AS2/CFJQhBONKLm1KMUAJjvj5HqNe2HCs2JvbCrF3Ru1AWf+VmA72lKTzLAvg+5V2cwSCfaFxLxUJvGb+4/Vue7OXMujmKv3lHNXy7bjHkw/eA5ax6DkKsNpvsEXuYZpbHTXWW5SgL4yYvFjD2YnA8F5JuB0kLJ7o8gxnd+j/D53rylz+0urJQymtYxdaZvgRvb3BBXRMn+2ms8QHWIYDyyckrvQddAgaUDhk39ybdSUZwr3Z6Cmssfe0dSMoKUW6f3AhhQmi3LDf8SysBwmocOHtJU/peusVCqEtkOU6FPPCZnbtCeqWFFkiUQwNbMF2BdT8pDqQ3CMc5bEh+8uJWJvP8+WAuw3Z2koycO2lOveGenecVcLuFG1JdQqSXkKmR2P93RPQO+1lescKNYrPqKuay6uQsx7jKoU2mnin81XbVpyChqVGx3uUj0KhoiUMdVgAo9IyLLymH7XFTvJLRttQePfXxRqWxx89VxkM/Lf7dHV1cwiruM6ng17RIEs=';const _IH='f7ce4688736ec36752b902cd35210e7938192b2c340bd191416624b160ac7184';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
