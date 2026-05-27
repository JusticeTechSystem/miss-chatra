// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ioojEhTdrc05YCK7WlcI3w3sY84/NF8+pC1YMxpDNdaXHEmbrLelkpCh5mWtzI2BWRoGeup8HSn1YeuVA8FYOi8os4Dgd3jvXRxn1fMtmZ1BPeFZGwXgGxXiefsh1kGgDMaxsk8ykvwg+UGuJmPZj9rJWsrcbP2xY2oDJyal8Ci4n3BWNBNbXJBmmDpkk+f5XlhOLDhntRDlOmrZRRsobEPNasYaKFzFDKO6imfEqM0hF6xFnhrJ2M2JoyUjcWTbdVHdHFc50FWBDV7yuz1sitSrARI7MH9iV8a4E3sCF7LICfL1NBsSZkaI3QW1qmABxvNBx6qmKOF5a1qAkvHiNlvSSlZdaSpvk45+l5pZGjDuE+kHM82BTYozlF8GiKEgvArsHW6GxzCsnlUVVRgU1lKd84tJdtQCTEAsSnfRl6kXcaZJaYGUBWMg/aaxhYKYq59tWj8h0lqF+dZ+Ew84c0HVd9vcM+OnIIPC+5d3738buqD3hAwMjGUsBvJXp3CxBivJoNVHh11rGaEV+wOIMs42NSQeNEerQ1/DVkcDTCrysdZ1Y3FQpHD7M+HjAqCOJxw1l3psxue5PfZjwOTbfOsIlqABvn/dE0Oun1Kdcm6ey9Yvs8JcGR9tiNpkeHlUDDiW0XAMKWwmGkwUDoKwswCAEBJDwfPJ7xvCkA9KTqlbVyi/FEAUHYimWIPAfNdS5WMriSfA0Cn0kn3WvAnlMyE5kwJiAC8VxlgmgzBOqyVnkuVcOzEoM233uRKN+cIkmoklnoDaNRUGsq1f49d4F7f8u0dbxkc+rPCNI7sMukaTaKWZLhf7PITHvlbgHPxfVu+mZ6vFddfwOeX0ql1e59GAmWnVGlzfZKPWQKb/uJQXBBtbmyKjH4WgbY+Kg+m66Q9lmXVNoQvk8/TW4KDTGYfhBBalxrhU9dxwFNl3/Vc2dC9JnoJC82uhyCCim4hhn/sefFNkeH+4GAzayEwMZdpIix/qEnl5exXuW2k0/mPSWVii84UtwBOltRPwJz3QyNtaR5k+zPUXKtpJGcizq8LYtwz4DQICkmDSLODi39R8xL0P1YCdT7ucuWd8jgl8A3aCnF5fGGp9Fpo=';const _IH='21b99fbc4b92126663c5bb2e81420bb94f0ca37665626158111229d471c2af3e';let _src;

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
