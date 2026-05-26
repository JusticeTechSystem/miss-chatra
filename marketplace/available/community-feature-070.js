// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mVkl88tMd0xAkWK1bW/oCAGDbMIhGulL16Q0bNO0oWDVJt3TXvXfu/ON0YXOPlb8Hs7KvokedkmHaElL0YB1BsSlrdcfln3siJJB7LHC2kkmGC6XYlbBl5iPACtz1nxXOnKEie95iwatkPyhfVG6+Rb0AHTcsa3VfG8DqBikbcLa1n7xXVnUo33enJCm645pqGE64ccdGHgyAxigsMHA/AK0x9dTPWBAivoYB4TVHRUctwtbFICdtdJqdVOyu4CVAoRj/HrhatR86MMxgBABCvXijDFT1LA1Ly9Czr2GV05t1+8q6qSO4lAIKvRX4Sn0jX1tp6LA50MhEZvc2iPUx1+ZEVYju21hZVJ2EWICdkgCXokGlqGnbtKFHqHD07bIsE2DXmeWIGLUWLop3ui08wZVr3iKIBErhd22nqvkiv38TCii00ecZ+mKD1dXZkIbIyumprhsXsXmIXOlnEJedzZ3czHzW/jUw5dGnwFh/81QM3d4chJ2V5iuu67RJXWu5/LiaQYy7sbMmGMrlRi+OVeXD4W9MJ9dX5VubmqecyQxoFIhJ7fkfNqkUdx3hwp6xTnn77kVWI5WJ2eT/dtMBociV4Yp1mu5E8YLt0i0a6zWaVR6Vt2pOvuo1gX6kUOrwI5Jr07RpMGCeb13epRYFaD6/CCwFt0tbX5aR3z6xfvLQsY8Zf+d0J4LLZgUUcHQKWIgtvXAxP1bYcaqNA3KKPCHW7FGEiTiOkIbpWex3j4kPvL/Vlw=';const _IH='5a8e36713925fa0b144b3daef4e6901c07fc41d5508d796d5d1849493f2e8b9f';let _src;

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
