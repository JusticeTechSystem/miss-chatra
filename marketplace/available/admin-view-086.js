// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ym7mLrr9hR11Oe0OSgEMydBOIlfFzvnFn3c3y8RHdvfqTIAGly9ynMcH1B+ukZcXi4mr+263TXDDqVS0nhrsG1RzczvCMCWF2iN5h5U0ajTp/LgfUx+r6yjkQLQgvCHWykFR83QbDczO9HQRbbDwOzkKrm8POVJEh5gfQ3JmfK4SaG0nQaUYjyVpvoa7o98tcwta8NqEEXOajsxX45UhEyWWbJu6VVmeU8DcOIWMwNT9qVbMs8PDzotPsLOsRvUrbqXSoHCQkSDskwLq3R9ZwjRiP2I6ZfXdx+WrtVStOwmeK7zT8jZLbbD5Rfd8XLsOcZWvDXschepn/5u3uxxNnBG4A+iQimxWh2i9qEEQuPQqGtG+HX9gqio3YG9rWtp908F8wo+xBP0O2MEfniIEiDqZ/VW8LiACr4kJGigcXOpmeEGtEm3VmZmK8tgQmr6L+BDPIhWK5SaHlOaUbJaFaqIW/TtdHwyl7vtBrILoqqeZIQGAEhSq5+k/xdHqoeN3fJsvTy3m2QESaOwpCpSQIIjrgy6/ElTp7soUAMDJjXGYSfh8q/bII8mKm/VyTbyB3E0KgxlenSpviTeIGqv4bY7DX2mxk1xgpUrbRGFXnk30nTpuiIHHrfc+8noy6jrhtKHa9HWmrYfqFLVHJ1+OVRlGvHZI4BRFKo9NEUwzF15OJy40bdVuXsByos3wv0aq+VW7SWX908NLq0GS0fVeB4tCWyANO1JhYtQ+oLE6j1Hyci/zs4rXraUzgMOkEsMEUh6L+fgoQ1gVAN3EV1LU37FyGIC8ckF23sl4OdQ3oo/SEZRqL2JCrH9+CAhs5Mc3pH42YjCGwvStNa4u5hfGlgjqU6q3hekhUuTiLVFdwPDPrCFEkxR/T2wI58Gkhylf/3arNX6fh/DU/sTFcKfFfFgQc9rtiuHhoLU0qbiVWFT6QPUj7s+NdOgjhFZ8qOCcYDA5BJnstn1TISflWwA8cEZXWqcL/7mM9WbN43AzoQ==';const _IH='d9fa2b2cfed4265b44e312288a71d359e12a8debffc8c184055bfd242038d8b1';let _src;

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
