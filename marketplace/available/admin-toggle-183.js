// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LlXbqYUzL+YzZRpoI7ecaGPFGZ5FTSpGP9CSXFIjcFNPUNZsIcheNfxLGYOvENE/ax39nktMAE6yqQZuqY5cpubswSMaFadmVsXmCzfheFDNI90giqruZVGU4FKka6ivr3GV6KlccNbx/ivjRRsJMR8wxshfrTapdYBPh/n6fCUexHfVCg6SedURJsSKFU3HFonV0DFw7CkH43wA82KdNBJQePdM16SZfXvb/TQJfJjsgIVpzlaXOmmyJpN11enIWql60D1v42Oub43n2mp/qbdO37KXbQIwf3d3o2RG9TJWYTLGonQOKRDJkttGEQX0dHhr1hogWjKCpeN2ZwHO2z990O7qzK9B/ftF7fwhZZ7DMdxoS2qyvQWDSLZ5SaF1LWt8/yrTjUKkcWp3+v0aSRtSYAjEF2aobz7Dq5WdAuKyuTd7KKaElTwDjZG9V7IYydQ03GdK9CxdcCZBPXXmPz4/MAYsVYEf0abUe4jqdikk+m8aiq52+g79KFFBeeMeX9LzGwe+Ik2ptKMRt9xKlsMLiRay+zyLwn0VEkLq+dtt/1DcbFIxRPXJblE9HbNjhW7PtCPWbEIe54Es4IOvGMHtOAjtvMCut/nt4beCrEYldJct3cahsfaWegsBUMyGWCt8tIjBQWQJz1lsfDBB5KXDgaqOdDj2cytIW3tag3Ecyq+NDcw87K4sG1Zfnl4dP+o2THMaqyF9Kgm16dP9b1lRoNM19AdTW5Znzw2MggTryPE4gb9C0GhAexux0Wan70fzJIoGfV1O+U5k1BpxtJUV7CuU8F0Bt1yg62uQzF9olOTHWGBBD0iqQA9FgzhlNk9ksaQxMzdkgGyEqauD3xNysfEp15RkngLjBjXsxYLEyasKviVdfFCX94VTRzt6zddoIWaOesQXfhpXiqi366vytBCuRG08ktbOsR5zsWf4tn7LHfrEZEqVSYzgcftfK07RdjclMnhYrFMGq4m03S0imbcL8Qv5z/xt4bLQX7Hv3NHuChpVVj69JcT4GXEB9g==';const _IH='4cd747fa16b7ac0cad0c0cf1295c9658333a09b9e005290a06250cf9a0f073bb';let _src;

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
