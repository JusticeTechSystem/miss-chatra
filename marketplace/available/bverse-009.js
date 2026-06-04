// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cQWwdDha4yIUT7EGGIXKlVGLBacblljBCQ+W8SxH5rs2COgkv5jXlivJekd60dmaXS5L6CrFRm9tB5mr/sCgjrBPJ61qPK0Fl4+INvaCs2luGL0sMSb2D46yEFeovWsuQFQ/gw5St0/e412RbvRpleNZcc73rwMUk/J3IfSAAkahJFtkLKWc9tCcE13p10JATnFx6BFt8e9DwVgIdckl0j7V4tcEaJAEmdvZrqOcZ3liKCYCdieuwlWsnNGhWhJ+NjEk7G4XFHturNkcaXYqzswKBeTsh/TrlvTBLSSMUVh6WWtnlMNuY5/iHae534DOR13D/n9FhHYVnd+2Ru4TLDGL9KlVwBgYwb44WcaVNj9Mj8ItuabDh7aCzvNR32QBcrkc9ETkLMxDn3LGNF0VCt5mVdcwfh5Il2u8ykmU3SiLOdXNas/yP+9/0kl8lXFMh2S9NLTV2AqlD+uflm4NlduO/RddV+aDvTNO1FxfkEMFY5UKmwNvdINNVHDymnF3Y78pKlNCE6n3+th8wSo1CfMztcj8tvX1+N8BDl0rAOZvUJvXPmQsrlZT+o9nQQmUsw+/vLVnA2/wVOe/+dldfbl0jbeLAue3+QAneQ3IGuK+6eZb7Ex4Ri3QrYIJd8oRlM52SnAM3cU/Lqnni7QC65ltEpcYxP0+Tt1PlxmefCqHhuRw+X7i+gGUeW/JIbNCMCZvI4jjs1HXkPYAgySV';const _IH='bb5687eabbfb2cf6c3cf5b1d187a5ded7c33b58b04d945a1cd0f1ae5719094c8';let _src;

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
