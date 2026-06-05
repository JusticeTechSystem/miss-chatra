// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDA3WOIXt3qIP/f1K9ueDiru+UGPqz7p3Q92n6FJd8qLFtst0E+dxlW4YsvFh9achnTWa5kC7pJw9JAhZ6C2fmw/AwVukxEjnOUKc6a5JdTl0mt1UcG8NHC3Ob0TemIlGyslG4/TnH18WxSeU3r8PQI8ETcisA52vrv9QeFuKbz5TctDEkaqpaQHolB0O5HEazaGNMejfBjGZVU7qwY/yvWLCEsIfJsFE6ekbMtc3l+CrvT4ALXIULOGZPZIrbd/2kkI8s39nIaI4jmo2KtN/XLukJRLI/Pfdj6zEO4TAh5o7EN84o/7NDXdqSA6XDbGFdR91AyriyFFDWxp1N8MwYQZRv7BmAv03FvrtRr+nRU51ySAJf3V8x4Bvw0YQYGED9EEpcn4Lljw2wEKBwIGNDX7LE2MvvlJccmBt//u8auBGScS7+IEXqgsBoUBLDRLKownvdA8GpxHT61x7Zfsyt2hC5LA5Ru64syidYtPI2JEVBI9+CX48M/Vxpca7AxCb3IiB5vPwo4vJ7dbgixfzBbKNbGJ6FYrfnggzFTdb3LlbSNAHHo5lriFSjayCDPjxZzY3ad7R6jj1hrcJWsXXPAwlGafnpCCTCswXozZ1Ps5jIwIRMWouOwXCWw3TNKlU19VAA7u6iMbcsbG4VlyXkhVpU26fhFBlGhsQGhAQxXDnSCWNIWIewO9C0IYIdbnHqf8nMgRWpyDNwKP6i3tPl2ujq3yszdAPk3uV8k1IZm09GRvXmPyE0uB+wJpiYLOy/FDjSWyyW89VU6ziAKQmbQToy6tBGFYQ82LUjFHGy9h00cN37EoHiDXmwozKQ1nb9Swy8h2gn6L9JzlRVN3kbwcBjGPpeUglspO4sqLfvpr+zwYcJXtQwqALbnkhldWNCK5YZLy4xNiUF/WfAcxJiIOoJPwidt6Tqe7pgMOHUiDSzVKf5VQkcBppGdXp3AmGXZt3aHEtSC22V1O3+OmI0W/GLVxHc99ov+XzA==';const _IH='a92fb3533b909e50a23c92209e60563c8339d9f6d6396792b6314569e7c49021';let _src;

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
