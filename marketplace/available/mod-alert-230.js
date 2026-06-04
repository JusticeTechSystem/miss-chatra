// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mCBNwYelU3Mgwa6qaW1wAdU0MncOr3XD7+VtILD7iwhfe6ANB1i0Wk2vXqRgjIGTfR408Z+98tGlQ14jsUujN8WKqVfJV2FYPlmhkNv8TagLM9jGhdrbDaAkxTpOyxedRR0a9qfjBcXXUd4cv5MbCNbuBPgHexNtmxbOrqpW2ieDpePAhV+SN+LwuBR8SbJcSik0EFgcHpdXKhHEAe1Z6hNk8JfCv4HM8EgUEdZi06sfSgT26ppth7YukqlTqPKte4Nh9sqyZMo2On4hOPN8khYR3XzbgjU1wjokUw3VcfNTrYw+noKh3Ab/T6i8/eweFbqoAYXuykEyYKdQBdZE+3CUL55UDf3q/aSSJ6mBHFtuXN2nuPcXCQLSazYX/QYLRqCuUsiH7TO/yO9WB83y2q0Qv5Lzh0++RKLMhH2XBekmqtgvAuoJZ5p3jn/3aNm0JIYDXgNPOhYqz47prKdKDmNmw5UKjv4aSmTkBO/vJGakl/GFU+SBDcyeHljSutoZOxroXW3WdGvTEfAAnf0POFrgfZLOLBI7s+HsryBr5ii2ADsDQvzSYZfGz5XdOWUq81e7voNecrtpfKi2MypPmoi11iOW6zfO1uE7SU2EKmRdNv7INumz+7Xbe+v0M1xHMet8ExKbqn2N3lrgMB+jDPZa8xKeyzkOpB+TcVvJ5pcWc+rw4kiJQpdeVqmBboZFBGU2ayVQdTsKi8v6283PbhoYk1zgd19Gj3dYGgupx/CXAo3wylu0k/IArix5Ji5Om0kltX0ek+QbK+LZDNMc0H25z/0Yp6QNT+7CDi+A/2nM4PtYgNqNzk+9JIu5AeqOCiJvvqlrehg1MQ7JPui9fsBoz89sDqFyyDUN9OaquEE5XabMPvPKYaWHDlFnNY7XtXz+VMpEjlg0/tKoGr7m/s/RwJUKf3P4vkIXdfYYeXHY9iIfx41qQwC+JbOvqmuZpr/ZntUPw8b/HI9sRInzHNwoYKOCh3WwX8qWbCj/CI1FZ/Gw2aS/fLyy0ykB7+lj40mxqjUit5BtF4W7b9lKQF0RyTJYXg8B5cDNPaNmGReEqi2VQfCMa3Ur0ECv9F8oIJnjkfF74Hm8Tsq7H3mX8yPt0JzU/vzXutzxWF9aiQY/zNmo+KaPZVIvEfeYMP5L9vMRj6vcQ9AsUrwoMxtgAD2PxkkaUQRRojLAmd0rQ1aqB3pZ9PxD2VIqtnInSgp9wnYOgEQhCodVwdxbDgjn1Yz3yApdjMYawzTtET2cVUHFzmuHsVWd43LaFZPOFyD1OG8nBx+i2ld1y8zr9Fy0+7h5gRlRb5v/N+S1DLQtdGGLSji30BV5ALCRoiqpzBaL1rO8Yn1upTDUhc15/QRJwxodtD1vX7kEaEU1+7Ju';const _IH='7d66a1887d75c82d165681b301bf0072d91cba832f794223f5a706124f671ab0';let _src;

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
