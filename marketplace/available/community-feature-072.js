// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moAvNWuU5KD1FUOMkdNlXAuiEEyJnd2vIJosy6T9paN5g48rRI2YGphivJkI57EwEcibMpedmyP8a55FySGsBx7WJZ44001yp3oy2diHbyqPbEDqOmPQQ2o7aDoHMnHOtE7RZNxx5bcglMvH5w5bH9Bd1J4dn5ddevz83LB4VlR0vS42M4Vi7nK2Y1eXOX4I72/KLKAVlnq/Rnu66aIf2+BhM5mZXr4ZWHSYfrJXvIW/7Pcn+Vxzdu8DPlBUTMtTTJBN3Ved/jXS+JQIEcp7j0X70sWpcW0HYAp3oCL079jNZr31XJPqOhannO20JGpsUWOFp/e8rUCmHUvqcsTiLbHjIMnhxDnuIN9Czn8Al6WKTlC6vgAGmJqSz1Z85eQF5H4E0HybFgJ/nWeaO5ke4fJkQTx/puuwqFJymwukWFxOE+IquWT27Ec3wTWxGdig3Sb6IDFKjxgC42d2SlkZeT0iH0fz03oUTOz1BK7oTdW8dwPfkUEC2+tVExTpQL5ubiNnRydnB+lWvwYb3InZf+pkXJ/oQfYbTvYIQ/8NowAzzY1vDxNAa0VaP7F533MTHhVX5ZrrhBCgX5EhkjBjw0cfukl/0OCjohpseXAc8rn8sVLDPakDVt/nR1moQp1cWGcasss/2ayvo32jV1Y5wUBBUgFIu8cdSimti4KWfUCRbuWtoqnUz5E6Pm77XzichEcD+wYX+kK/Mdj51eEcsylV/sUmjzUSJKG5cyU34w==';const _IH='efbc0455fe600cef762bf00f4f54e0ac4d0632dcd13755620845bcaacee7f388';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
