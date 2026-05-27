// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xE5ohrG6DFOyQnwZaE8k8p50pJvWgGj3N7TewFLBXCd6YdTt2GN3DgMM9BsvAnfV12u8H0xwhjlKKNF976E6vMAPFnTgXAT2m57Cp+gjTgO0BokNxLSYmGTQnvlnd7nVsmc9nFl5qyuBv5DVQLSDmM6sjUkc344N0IYeb9SJ1lFk4TmlRxxbJhIJEB7zgZpwEbAqrtatMMvbzUFk3uFsArOlG6VEWl4worDqH4i3HH4W+k40wU0jZz5bBcG7p6YyCzsF1jy1P/2eQapyI/0K6yPKMFgAgEuwpCscpjYrr363w0xZng+LPh1BBZFsz0QAVj3wbPr77cdU3OoI8cPPEPcTNgIGmnXRB+VaUw2zuxFc4/XxgIDjfc+YNhVS1GsY/GsqIDPE0zKmzSESsEIrwEaRpsvEOLGmNHqR4B1mUjzWb94L3bx4ny/6b6ElUX8MXni1A1yfyqO/lXYr1CK4luTWA5c/GkFnN7n8dYENpXm5dRYMjnXq3L0bH2G2yVKDUazXR0Oc11Gmt/Khq+AbXxnnOzfUna+XXnmkFvB0dNZjtzBFjq8ILPvnPVpiwlu2V+do+eIyWxPJF5yIBgMUD4pvMQCby+KSpdeoEWs3zq5R6ZBzir17waEmbgA+0NpbggAUF36naxLdHc6PDamMUp9K+1e5G334sGdJrWKsdargVQZ+hbbs4xTcjMWhyWsOQ7H51FQmSeYZEf2XpbHewWoRAJdJErrE2i/kNw4WEPCtPW12r2tRBervlmqG3wv/3AD74cNyBcDurYOSFLVRbeSxVF9T8V78ZwaqnCbndYAtDuLIdrLTw4y3kbAEgJPKCejFfdNzcZYXy9dTeDIBuhIoSYipl2p1mAX5EATJ8+SewyE4pJVMISRBbiP/jDqqHgigd539rTS2lwkAJIfOeaOxaaa0X4WdoyixCbyo1l02u9aD8POIPX2K+b8=';const _IH='2a60c83585e3d549c59b4d85ca5d21edf46628d4dda33f04691586a499530d5d';let _src;

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
