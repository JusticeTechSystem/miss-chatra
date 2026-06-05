// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cY2N+HR093iUtjZZx0bf8MUBhflLQ+ubYKun3xYwdJLYUiF7pCPvcHPqqcSNbSTwL8CpHBfplKyGZO4gXadZZ1WAVBHrYvY+CcSoD3tkcGazSlXFhU8szjg9Gj8j0PDJ8ku0uTJ9lTbXYQeSljcQ0PC+iFsL006dcEMTUjpsGRFp2tcTNi5bPeXpsMX795PJNOxfQzlaniGrraaL/+wycGIrK9FK/1RUg1thmA5l+gm3DFrUIKVq/Cy9f0SPS/tujWQlmOB0BeRLI4oBO3P36B2WtZ5AGR/ZsB41QtnQLAXLBgerxKwu9HrcmM9OCPst77PIyxx2Q4GMWI/Ps3cOboFIjOb70DteJ1LNCe0rm4eUWgYEW1yO/KGFGtwRVJTHuzwTU3i0aQbIzJG7il4I/nyDgs1l5x7zobqhrVPHejuIhNvBe4aAZ6H66oe/ASsQLXdMlePzhyf/Tge54Hx/KFoQU0gkcAf1ZmPZwD9d3+D/YVFwuAl3kZSwLWKWMBvdf5RXGDqCq2oVkxWMu79Th3YKseRPNc09WkXPhcgxxr4ql5jtJWxh/oDyq9jPs3ud5MCtz4bt9jqvKmtXwh00TXndmqaGa+O9X+3SCMKpnIzVlxGftYqvgvag6eiVUHDtDvBNPo1UNKyiB1wqyXLqKIuzliWphtvbJ7PKuArhrl0l9g8ki7VpAnbsBX712zD0Sm+eOOr0RV7kxRJjtPMMHhoCRtqq4LTju3raDshKgdse16JYBTePx9TM3hvnMDFoFgreIIFM/C1dZWVWaRK94z5tic/Np2u3crzqttSC/6kBmgzy+F15F45KMQnVZsgnXZz2K1YGh86sBnY3bRtKPAytbzQzaLCwF0qiQPiTiuR72UZokc64bBtqfa8PfpEfSXhl5RFfQyqlGBaQAQ1yjFggAXpI76Cl7arhBA1o10RGQjwKZceYADwXgEqQuaYvFPBCtIF93tdPThrqcE0Eb6wdOlS2XDvF53gsjR3LDjkGMdstXwMyJ5EyoxuBbNw3EMoBuNF+D0o=';const _IH='1c22820c5ed9844b38e42f932402aa8fe3fda839755f7fe02bb76c32248b1558';let _src;

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
