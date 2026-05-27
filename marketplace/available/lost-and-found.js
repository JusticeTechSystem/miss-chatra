// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a63BNqTMsZwALyF2RIUSi/jbpVQ8rv5BBQNsuL6bQJIgLv1qH2+aiOQLsKWfEBhmOBfCokC/fh7/s8YJJXh5pRaTucO2J69lRY3MAM87rCnJrnW0AruwWAy9xcEQh1BMnsKYucBsGXDkJFUxTX6tr2ri37aBWYf4QsEHDGGmLFVa5/O6yGE69VcGg7ziN7IqYLnQOcDsSqfXsdBWOENoCWwJcxmC6yTjL0s4PtXIr0a7siUjZAsCLsmG0xluB0Ur38dDt0URt1czb76Ddo4rEjy3UZfA1E0jlQXfozsFmVP5GPrI1n+EdUpPr1K9kQFgu/Pnof9mNjm4vgW3wIYQ+SVs2PoTCfqoAC4u7I51Y6usTCB9T6SVz1QFRjToqY9PVPQblXHoFTmCTTVcXeT1p/TyeArSD0+gQtMOeP7drTmJL7xwoQNi+uzi1Go6st1W4ni/eiqIzX0d5eu3ksiz/Mbd92ayvXB+UDFmgChQxWNNn2ztyScDOiMeL/NsJG9Ma/Ghh6SXVX+qUvBgrEgemZfNXQLUsOoOLVA0t1AZQaUQirZM7Yv3uYo0MlP5js1aRhLGUbUYOc3F';const _IH='59b0b9769a1a4349d640f2a74f81fdba25fb9e967bbcbb5cbd084b12ca5f72d6';let _src;

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
