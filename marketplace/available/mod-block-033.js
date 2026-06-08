// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cYrE1rsEKmrPeCxEdsBNtDy4I9fXigqpOtJtpwkvOb1aMbrs1OIXYTTJ6rpZUxvfDqN2GZOfLyk9D4qZ/FXME9BaP5FlitsyQoBOTieYBTXSk21Ko2vgfNx5mk0GdVaNf4/HufR/QKpnStUznou6OIdO7smwHbl9mqwUZTw2mk36bU7+PTrUEGdpy9tfyaP1zhR5vm3U4Ix4SXKkvhjcuPfzueidefcw0B5Q2qHUOd+iH4fDlsuxRnWgKsd2s6QfFgWOWNfFPh5rSDt4JOWycBammYSqPqbxTt3D7yjvHrtqW20e7YZrcFhuo/FGVfsRLVXWMx6JKLt0LRv6nqm1PFrbRBGCYOdCgF+EL+dcvdnSN6vKtuMFreek6qbM0DT+zLImEWB8qygePtfxv6zoYeoX1bdL6PEQzG4upBi/wpQeFHfRLksxEPoxVKq8uW9vqC8J2P4hxGhSQbatghvhx68/lTFZ/xzZWa0wJd72f1UiN2dpdXAtzATXZOFcdQqZOpkXnwwySFnOXs/0i8kjTmuYM5jok5KARcL6MmpGEspxJpUqR3xTe0qXg1xPoZlZal4D7isq0KZCdC2EcVVw1rXYRaitpDxjMckyV+t1g1nBDoSUB+enAWB2e6pMZ6pzIjOrn52Z+RUD7FIoq6q/aDP7/QRQ/vqri/fwq5b9OQkdxVJHyHI2liyRlcL6zhN3tKaEh0hMiFV5hBiLHbL0UqAsellihADLPn+brKotOCGUu2P7jdRlKddfN+kDuu8+ZZfczuALJSbpPhl6Avo2BPExfF78+VAkHp39dQ5M+I5vCmxUJ/5/xTOEvD+N8BNs3dCC41fedcOgysq2ady5J6Ri13EEKVvjDgVbVW/7NVbHVNa0T7CjOdSWW6ARRE0Jd6S6wVChJAmtn6vn98AwoeGbCI0yXckG7ePBzMvGL/sznzihv6XlDSqX/zbAkcOR8SPc87VBXWr/1QsFuURkI1L2l5lpYThQxlFxXuXpBWaEW1Vj6+stRepBhkol1mYvtPS5L4WPjpfrE3Wxtxf/AkyBT7ib36izHEtuPo7IC62Y1WKzE2c3Xemr3AA3+TdxVgcda6TbWezW/gMPjA7QNWGCn8TajYAC97cHtHOEOL132eqAevYjyeQo874/7eHzqDaQsbVPAozii9qFXDV1JtKuYAukCTx0vrxc35+ulkJAoYVbunX5sbcieukGNsg3DCT9FuweUL/b8p8QDjYbSdASI/IRURezOAsvo52eHWfRKltCz9xzu9Ijl5MOPCJdHzqdPU9nhV3u2lptCk5GbdWqDtIOM28es88Kq2SllyhD/nP3MZE2HomgH2m6Wkfi9lpOC4pZFNvrEsA/SL11J3LV7zTAW8lthg==';const _IH='7c8ec85cfac8a764581d175421ac8a4ad9e4211e4beedaf8ff54712bd5753666';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
