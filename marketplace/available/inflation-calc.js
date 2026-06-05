// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aeg9qsbu1wS4wSImdiJ0/ti9bAKi2zlTQ2GsIOvRRegSqqGBXE9bU2w08dH7Ehgu3Ei3OeGb5nZ5LC4fB345JYvuksviI7sLrtsDV/efsH0Xmhypk+r0DjLDRE3LUVXR3R5N/ZiEGfUYqHzM8EMzgjofb2+7LjHZOme+7enh7N4tgtlhN06wE+yDHPGKFb7eZFMNpYaevQOl3U+xb5V3b2cU8E40yMNZ5PAr68d4bNMyEOwuoaU9yjZfJua/5rPZFLGuMFAI4kB6B1Z5BhgSDpKc4BICyob+ER0Xq90Y/hf5L3d7CXVXOVyTS5RPAg931A29P/UMrjZAgXeIj7qQxl+GrwZUlDyJEzyeeLQJsKhNFmT0PUEb5JM0EQBdZlRp++yFN6QpVwdNbelJ1kGSIUFDTYvEsnk1xbJgomgh63rKHmbCdEDbVJWp12zUzykiykO0/YnaBxT+mpnWR75+urbPZDfljtOU1oS//RhrKCChoJhgHrshCo3c/e9TvKIPpVxG7017vBLfoinD0b2jYqclX7R6TmqbF58GHCqFz0x85Wn4UlAbcmdymtFB1ZM7dM/HecO1PNFoNxGdazatBuLofYJjYPW9FepYxJgdIMvUb8uU+oRHZpMsiCaKy0NC96IgjhQrQ1KMF4XMP37NeYcj302esp/0bX9QVJjcThaCEYB47LpuqZ6yoT7kG/yAtqyHyoStta80q5ZBjsbZHqZCgmvBpPmiWQsgoqNAd/bFSFYxvJysAb/hO/2ECwgqcqWjULNmZMCxiTmu8gd3TtCYDHwbyriLpwor7KM76XmkA/bLCyA5cv1fbTOjd8SKRJCyEwA/QCoP1CBzQ/h6uhF8FDSvCcK8K29pLbolqec3HK37eoRzHGJxVBruH+8ZYsypohTLLx0bul7OWshc+TdztbTojIX9dilVT0Axw362guMphHDSc8zKt65JHKRaGpUGB7Igf7WWuTqk3UK0sstG+U/TwgdoOm5CeOtRZn8Hwr/6a+1wB9IxOd8mJpV6AUi6njpk7K0StqSuUhLmFxMvdWytwwCTZXanwGUjNNOS5RYOt0BKQZSr6DbdG4ImaxeQV2N1s4E7SV0CadSqQYYyZ+7Hh13tCcVsthSGyLEdkQkxiSlsTMit51EufwgQnhTHPBTI99tyw6S41EU/4x84WjDOUrzv+vwfR3AR/zZ5W0cfM051Zmljoi5vzRPmwNySqtao1U/yCFDCVClTLKpQt/ajQHWJmQWQ5qbYgI+uEkvik0QrVQn8SIJ4Yl0S6sPf3SPSQP6UOmW9szIwwnUtqbLG2cJJRH5PBA9+855XyOiXEa1qpSg3MOziOpONHOC65QWuobaX6tiHImZyxqhr/o/gzEbd/RMQI4Uo8OPv/tKjUyyD3mcf22hrgERk2JK0OpsTBMGv99841cm/OI82lQBVSxJYfcwO+jPUYxLDOkKez0+l3qOHowylLtGpHk4Eo0Js+hihVN0RaQtroPVlGmzW+kFZKIOk38yfrFTX1kxDQsSKAtRZwygUaCU7TnL0Fmn/gt9T08kgcVpsulyaisHZCHHGQhgMI84h+z4mCy2B8hhFQ1fgfIFZPobF47xRZlNlY+pprgZWbW1WB86IuWECvwlI1Jg2ffMyQzDQTSEO7g8AFF4j3o/pH7LWyp3YSxc7OGMLpy7HizdcclfXoIo2KmIjMiD6x7Vbbqx4PvewDBCSY7D6wrs4QF9OoNASZRzZ1xLZ4ir7/yW6Ttos';const _IH='e0072d67f3d536f71dc87bea41b8182518f4ad878546420afb2ce2070d486f1c';let _src;

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
