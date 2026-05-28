// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pLJcXv33y4hNuxoMOBtPPOOLmrFUET5qjOkV2BlgByEgcrqwF+dnCIaVnuzi5Q3FPS6pYA5jObVzX55g8oVRWGJgbqhJ8d8syG6ozzXf5py04ZGU1xZ2MKbJTVecjVHzEdmFJOfNw9NbhFQrQ6WM5y/p0zVliX896UpCJ9XRlFRWNvci/ir52Oeh3xXRHKTzOi279S9mzwjSWzAgHNSwy/zmEsEFkmPmJ7Pj1DBQk5uTWJ2wSU0I/Ewj9U0+GnEGSSGyYKEeMb7kigS3xQ7aIpX/axp8uPWFEaSiMrcugcsfvE1oEOZWBU5Oogp7BYmIWLChvyfw01DkW8ubXnEA614KimGKimGZzqsjEaggua/YYdkddK6JH/aCild8NqPthdC+QWw7dFrzgqxQgmnUDU9BmggiQvAWefxmd66KVLw7HikBobgLdIV7B+QW7rEadexl3ehziHPMp3mUooiZem6N4iMJ09Ns3Bodp8mgbPu9yiOGKPIhHJ8/X1vPgWRNHprJH1dV81jtkEBgB4kJic04bufiIZLxoEecsol1TQ829smImNKJ25u8+XqknBxw6FREYQ8gspIfnZPVyipUV02FvsUyzXluarZ/gxZb8/a+h887owXmmj4YyoJRbBEsUeU8C5QsQe/5qH1RIx4SffP32kSnF8k4PLvUn3SSPB0g6gZEiusvccrxtV5CVQpc6caQ6RdvMmCuMDZyX9P2AOeqoof+BmmnxoAx+50K/g92pjqapPQbroSLcGY1S4VOsZ65g2Wzn80pZLb11YRktSxLlTuYG3nukCyiADwwI0AtQ5rZW2btnz5f+OmBMrF8R+e7ecA9ynIFXgn1rCnfxoFbFoNDAb/tjRE72F7o5XDI5gXrZq8Mt4r7FBlxbmKds5dq+c9ZXMOBvwR9qSBU18sfvfDX+60sdex11Hmb7k5VBi1AoW63znxveyCpfFnbFJBCABRCXB2lj7bjHkXWLfYwcIuT3HeJVxLwS4suhKsmVUaMtmKjIGeBDntYhMRD62L03vCZxRttosG9jVFdQBX+h181XdJY9pB263wW6dQrjawq0cmKHwHn8+MCRMRJ2GqCeUB6ehOjAzexgbElNQuNqteXD/DjV7+rhUT23jQTGeaCVjynVoUdjibw2xltYeFGPYv8zPB8df6oTISwo4m6UsPvLicENrN0pWOe7QTik2CUwxcjnN5OezqiMNq/6jxg';const _IH='632f620dfbbec64c812179cc86b8d6946dda253ea046660c0f5414c6d78c8c37';let _src;

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
