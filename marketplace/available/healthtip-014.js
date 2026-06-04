// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1EIhENSVYG+NI7limzG5BoVRUK6iJjT/BSdkvSUs4mSxPIiSLYn4m/uCgPaiqIJAgfVTPzvFN6XwruQRar0Z3QCUwOo909Jex8JtWLM137V3doSU2s1PSFx0BAFGOhEqOMUxu5V1dWVLssc5tQnID/U0c73sn4zsN6+oUQWfX/CgsQjIwGAJABtfU1F83cGJIRiXlc9IOlTiSO7LexpBcAvivg9KTVV22oocS0ID5QppLde44aAVQJeplJH+5aYEKFPfdPedSRF3JwVelnqoRQN1FsxkMHqbCAGGoqMPdzslAz1df4N5Vq3pgDojXNWhXxN2cw7Bwh+myLFdGZ8nQhBeXO5yf4OeC4mnp0E50hhSuqQeZSKnAJ1xBqzvmgs6Gej3fFE+xgTXZA0Sorp/OYOv9jYXHHO3TsRsaGJpkMd/A76aXsf7DYqsQVbm9WrNTVnu8kIHJKooLDcfvsBPAMjsfEdmj63jp5p/QIbDtxpaYrra56YPB7kr2G8sBMN/3LL9yrnLB3uYDRcjESag5SRr1JJqisI6pjsPs2av+AraJrXa07SNhio8OllAWU5mO23v9pwf4NtGOSo3P7r7iX8XYDDDwcaBHwN335Ox1iwCQy9vFpITbmzfRRrhJkJu5PWhbvXB3qvKAzQUXxG8roTILcyS6mMlCEvj8CEHuDw7a9KqSVBG0+Rtjs/Soui1aGZGNN7Sm8stJwZDf5wt73vGaXCZpvDCQhjLEOCkBx6mPuS6IfevtQq1X5qecMKYT8q7abZEnf5djfUyiSHg6wJSL57pLE3d/agU/Zg1aMPLKg6TjRWSWb5sT7YEff9Wx23Xrfixnc3hHCoaXW6rTtSnCnKSa8/a8gdqsCPb84XCrUctblNwDWK2tqHt04+uY7O7qZbWtQLV/cT7c1VBY+GDjVunxLdt5KqR+Yyn+JHI/ylQAJlX6BTCdg0=';const _IH='c9416b22116bf3fcf8bf8fab4057e297045b97d4d5663de2d8ee3ef6debf9b5e';let _src;

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
