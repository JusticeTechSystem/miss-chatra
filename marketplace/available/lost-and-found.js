// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MRfB8kOpM/XUJbAQvim+QCEPwPe1pwADniWtNhERYPzz1tJdxDSxE4lyHY2Uu+UnPWyE81tz3pRGGsJWZsZS/k3VS+P96YlqmBE/T5zLuk+VD6XFJjqmVKu/W3Mckyi5P+kHsixPpwKbkmBvPr2XM8EDeHl6k1bMnlHSiSgzfB+wTo0MUl1n8AfaHwvmTGHl2xd7fwZHDrht01JbtyCWwsRRvquXszETsOygHGW+f4cPGq3SEqr1UzG4xQ8IlCn5PGOFgGpB4cvWVjWCaSrYQUeM4gqqL8j2yB5cW2v3cGsV7bnMTvc16+ueABJ0IKh9rrhk1E0gMF2G1/IGeUbwR0soLdR9wnb/hFa13tuvA3nRt/ZTWgIJrbbGLNfkNITcqu0b3d6SVoA8zYpgoRQ/OdTg03O6hbC2Y56PbElVCd+bcgAbqKv9iqMa4hH+eIFHZuJk5vzPMuCypQIIkLMn8nmlwWjRku5YnFbG1P3lI/hglAeJz4csoM1YsH0j6+2K2x2+sKOBY2YOwLvjGJjg61h01MbNata8GYQpsUUSKODELDo5eowv7OVt3kWw0ks/F8FoegIkkFLJ';const _IH='8ec2d03c6aea59f9f3928829068f7444bea76fbcb53df0304fb6cf0bf0b77048';let _src;

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
