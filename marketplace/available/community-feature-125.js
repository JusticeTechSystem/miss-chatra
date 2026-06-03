// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='97Ukz/VxhNSMdhMs3y96UPqjqcCtziwbV5sao4zSWyn/z+57cwpjsgqh0cpyq4je6wE7A3r0soMyqIO9kz2ov2ldiiTfi1JAbaqKL/dSs6CduKh/BmEIOtbaVQBMcaBualvRebAW91ux9V9htA4YUOd+ljvzB2BSjbcg0Ou7cp86uif6A7UluUB1aJta+ylq6AX4uyVeQcYlHu10t5ISJbAksvIbw5JR49HErQylnPyj1oxTh2FOGtrBIoYqb6HMpQYWV2YhK0i6Rk/F8rlmhEMk9Ew0ba0Fo0KF/rhkgybxbsQ3Z6nWIoAktuFx1RiSbrtnfZYyrdvpWGxZ0O3IU6rwcy6EdZg6sgWli8t9+UW7+wZgcUer4DORCYn0s4fifc3oG2ty86riyG6OsRs8fRIZ8tyIKGG3dmihtaxSxOAM8apalPR/dCWuS5RV0os0YgjNLKAngItYC540Pn10PlRMCPKPaPgVQ6gXVUEjsTyyY9HC6kf4hGHPkqbw8+vgU7vGsApAfrNHTuLVDo6P/XB+VSGxTG0DV3mhjmoxetGyknjEnzQ/GZb4U1MIYosJaqEOZk9y01L5MSB3aH4WDodk70G7W6KXL3WDp7DK7IN78x++vREMleZH9nlbfucJi5i5JJpxLzkFL1v/N45URJg01OoLW4YEyx3+fU+1Ccnu5aZ64TDbMXT6vldSkpgHlJJI2iSsimB9pGSnLr1LjFCgVj3/knpqZzOowG8JJu1JzDUUJy5z5mIO';const _IH='7effcfc5b049bf497e642cc0771b946f5d8f2d543c52cb0d555dde24756b427a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
