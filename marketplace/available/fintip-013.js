// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2vf27Z6qyUKC2SCUvZV4HEaIuy/9EiJ9OnkS4TdAjvMUZQylVoCubtbdqA+v5lVWaVGGO//KR3Bc2azzx0izNe3qp3Kg/eBYwtMxOKaKNPduvkTIaYlcqgZMXEbf5aWHwHl1TsbQNZ5u7LSGKkHP5SMbhXsk/ZdAZefU+axddVW91z5WXg3aHh4B9e0P9rX5aG3+y3iaBsxVYnNj0OlRTOCJ6qgx+4fedb1epUlyY8rKuHSpSVPNAcLE6hdr7HKJP7WinMbJy38HQfJfaQT1izOnnf0CA413QQsCcrfQY6L7bK5iBJ2/vDxI05DCyOUXwjXAf6Q0sZEasJ4aL3mLhan2FfZ2yiehdacmNOjbVPn7Lqapc3YCgYitF89yOI8tP+m6ZEaFhg8LQsqqdwGPPMS/ILlgDV2QF5E9y0ifig7j+MMDOY1sZ0dex+JVRhA74dF3hAvgzoJxpNePU7wfi63Wy4AMsxNWp1DkVUYFDXpbr/DNdrJSwwmrCvp+0Ox/mzgWhbb6/P0wPuMGBVsx0P5UQjNPehVtqZuUysY+RWHHhXLMaMIw+96/SqPNapRLQ1og36ZVSwztN8dTp9Tdu99n33y/AUkU1M0XYn3WLrH59NIpVdXU568U16aa2iGeHuP4i0w5WKZc17hWYNvBXgHqW49iLG/6GB7uoqECJAgustlraayayoenqh0RWr2U5vrhn0uBAIwOPDSGM47dFUp9OCHy0rE5O8ooYDM0c8eqxhxG45Wvdm/0IicbObrojDGHQvMwTrjnWB6AvHqe4MeTV1iYNRTswlRha7jR3b5UT0gL3quCiTOKjpcx45q2efVTXsgIiaxoyeyQBXYBrd9Brgbb9O9OFTqJbqb/wfEzkh6A43uVPsty4bpX7KCrvMIbMbc5NgR+v5HKNxm8A93Ik5NlDrl+rSr5BOEbZbKFVIthPcQg/eiGnIbenRfbLCqWc12fdH1TGl40hkDAY30fiXgYi4TALt36yjx7mOOeDHiRPb6VTqZ9OuqqVQfWacxU1CKUfzF1e/mUPVHjd08htVWNnL+OOb2Ms0jizBXvd0=';const _IH='f5df382572ddc1c9f2f3ed6d50ebe38233d8d5fae2c6f0ba767871d8220366ff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
