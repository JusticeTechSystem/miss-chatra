// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='91X7tNhMccP/BBdi52JekpGLPlh9nSptiqWXAR6vtpjSW/vRTlKIjOsv3DUnG2mKPCfDcNPdq6vCyMnJG0W/ZTyil3gKm22Zfh1DVOt1uNeJLm6kaL/a03JGfcp0OPLdHtzVnDF2tvDC7n/4+BzBh/rIFO0FBM14OMKEiyXZLpVSp55ghIeXhF1IMQRQvL4zNiPF+CoP7XxTmJFcJFeRvHv8uDAGXnpJlFq5yOQ//a2WOxfSU1oDUPiAfZLqWZ9gnmDMaAnZDy7p3lJtJEYjOVVBiSu99qUFxriXFDoIRpEc5uqUYrAD8whO5aiWMoq+s9GXGJ3ZrA8wKiiZx2vPEPPiFPMVy0o8Y/mya4Zmd7dgZOf57xbtpoV1bxOX8Mlbb4sbXBmpScLwFPmUbGIBTQptldLA7Aa83Qdi7ZFN0iuyC6NwI+xc6uF3H2Q8+Kj8vSoix1KxVxITUgnyVH1iukNRsRzm3h8u4v3VD6SYWYt26Hs594GVkznTw0EDVUkwj4zfjrcJGpE6dckIHPqwlGOvF24TuezgSd5SFsV0b8ct+pfPiQtjfFe19XX6/1onZM3/i9o/b3mfAlv8O9dWIZgReUkIA4e8PQGH99Ziddk/ufjtlI9VtgLnD1Yr9k5OEqmLVvZjUYD/LQ6zEwVk+Ze3lWrIJmcadD1Ksnw2abeGgJSNtMbn+uhtiUJtjtB/NgJOYt6OmcEbnRWXFRCY5O9hIGWtd9cLY/2OGEgQxZCfWn5jq39i4N84/MGCYnWTYhs3HFyR9o77bsozy2mtm5ZLtVJmWwJ9htvq7p2lGGbEfa7Ogc6vmdMuvqF9iHOf91Z2RAA7jBWfomi+bgyXqyxK0CirVZvKUx8gcpeMQZymbPXB43oZqLnffOYSZCRVvBmUQCq/PrY+GsJpbQC87wIVT0b5qEsaWsyg++O4V241VmGnf772hIkopo2WVcLh7T6B9QawbC8TalnMlkcb8qzafkkoTTjAS7H4JkTEVof2yqo+5HbCUYjlYgmE8Q22o42oxmOaqTLwFHSRoYW4RvcmN7fRW/IvPX8s1QaS8J3wg6oR8CDgLO/SNcBQmxQx4BM1x26XJKoolNN3sBx0EmSBY9tOkyhni3pKmRtiLvyHlHeFyJPSIVWWZ4Q1RyjBcakqRbV+fY199ZIMkOy4aobm14TBhdU1DpnCiPeb4pyKGhGM2z9Bym+WY75BZZp8tZu6XUs2nA0=';const _IH='41009a9efa8366aadb4ac83b957c23fe9fd68cf1b071cad8c8a62093d81ac034';let _src;

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
