// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwKse993wSMppFbWfEuK418i2gUFuicCUi/23X61WwX4HlIE1x9lxI8DLd3TjC7aeY6AZkj4QWrg5JmMStPraYz2+6JFjVG5gDlsrEvpnmExrhqt066xTA6IbtRxphnoONy+4lObOghxx0Vy5oCOqzQ3IQkVc4v/QmC1vSGLkKyibcV75/NJau7XDZOsDMfIMBl3z2HxE/OjmgoTX9PRcnogMzcoSOucFAAmIN6L7r7HfyCklGOL5e9y8r+J83cJYd+aI8GgiR92xIn7RrMm+Mp+YpcJbR0M89zPXTOhiGUisHX6f8KajLbiTuTP2ljH6EHZWzJTV+WLIMPItFLhu4gLmOz85DF+STrsrVyN2ZRfHjPRw+I3O58+E8LOhB0TwhJX8bxMpjwR3zqxftAh28mDlVQ0mNztHNpq9o6W8uGMUd89T6N4R4I31Q7K7XcdZ6bsJa/pTVHwpIHRfazCrYWUJDHSNR85hAVcsG0JOU94TOh9F7SFma2LPD563wxhEBcdHYFU770NPbEt/TFd0FL4KrVpxsuRf/7QpVXthrUkOjBe0L6yoeJqcVi/3DfuiFM5Uiut5ePjN79tMljbuwor7WM9BW5JeOYXMk5rkDJTdyabb3owXSWWaYfA0p3tlvp1sQbvCf72n19tXNxV/bquoEY/75lakA9M7jt2zD0MuCkwIcPtqcqb0oqYTwYIkZeuWJvI83Kc4rgKBnhTX634wqR5cUdAcVLiYHQl6AzrH8ktz6QKVnIDdsIwYBSOriEduGFrrSX6aswm1KTBVVdq2ChnPrlQIthcSV6MYhxOSnEU1C/9DN0ei0DjuhV/YKN4R3a9BDFLL+zbopzFBj7qCmUPp7iA0H/wcO7m5TfwdPz0jtKx49VQPavBO4B2Iw56GliL/pLjioc2YbwaOOXovhOgYrDsLG1XEORL2JpmRySIL7lyxbsx5PltxuDMz2sRGJGPem+Eu1eK4EzYSqvucLEXQcQv1/z8QYzlMfw+98wyikShEzuGCHngwnSdbl+Z8SmVF75YKEllwnVRwaaIW7/bTUGIKjqabAJ/kGmsrT9H+sk0JJN15qadJocfFgizZcOrVfZuMV3iUjYuoUfTu8Y4ZdpM4BNvyMlyWtTzreo34jMf1Qw1gsg+AexcqYfUWI/RpgQ6TsGEGD8qX84MbrnIBKgR9/Jui5gse6xG1CqSzWzN2whWa0HxxA8LSSnPfWIf4SOp22FQcBcFxR9CnN4DZPgJQMhPmIB5MxNkgkElfnkun50YZonSe1KFxpP708iTptsIq4VkWO3P4GoLtEHkOqIu9i9g6aQUGlAU+fVt76rArt5/1bR2W8loqm2PtObpbSghiCJ+YLQOxiDCasjVVVxVse5gQhxRdHvTeYrsu6G52b';const _IH='a77ac7e3f77690b7504dac294438e9c6feb501fdeed3e48a7e0e99f3b0fcc35f';let _src;

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
