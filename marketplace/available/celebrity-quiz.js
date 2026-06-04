// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o0foDoQ0pdz5k2d93Zh04La8gzj0sBB4gKdSQvmCBRu/PzJB4QquXD1bRqKHgWsCe6NozeFcyumbfOr9WYwfYk5QwonV4E7FXcJ0XPMOzIbgUkR8xjiurWSQn/N74WkNeMYMFo5pK5sqqAZDH2ISjhmpRK4eymXbPCvu00CsJI6O+HWOcYqbGmUCKcT647Kvqk9Gt3HdGUfH8Q5Z/U/IzhezdfUlVZIv59FuzLVJ3g164FefQGg49au5LexPMkiaDc1cTa5uow/yZpSCF0HAJDYoCq8nE6g+lRaPOOD5OJgHHAZvM8dNeRyjH09bmBFZvzu+cMSr0MHi975ZQNCb/V1/rxMkDPNH3nAOrQIycm/aYsy8TJQrr57d0aI1cAd+T3EyrQyAA3h74uIF6KjFwvgN4QvdCA7LAZ/1YXckWj5+zbNMrig4OIuwkql0J26us/8TazGVbFCSN23LO6vFoEZBQIgNbiiMtEA1p/N1mOFY06Nrm/hxnVuLeUs5jW/BOAtR5VJMvnSzf0UCATYOFHuQQoPlNiY1XRyTPW7aB+EPMHNUAaP954pqJIs+VKtSd5mgWKqh0B4APKg3juOUz5JbV5fXjLZqTEdcQ2Sm97rK04yU/XaQgheAfs3wbqV5EDrsvr+kME+EF8pkaAz0UN1QV9NheUcq7+USR4NR4cGY4CZagqdunqUUxsmEqbEV0Pb7gvmqVHBqlOBwWz3N086zflnUXS0tvcbvLS+iUr//Z4PIyaNFbfnUeU7WgsGCwJN4rFmxsx/wWUnjgUMrmWSIOSNVuNZv8iWf2E/Dp+ZOJXjFdOQKsxbSwa7DOe42O23zZtwaQ7LiiDIc1h1PJpewodui26zw/IEmFa5472EvgaohgwHZ6cgRK9W3bNT3NAmI6eX+ofDKl9xHRUzdc4RQI02Vp4SM42vCxWYAqNRsYCZGg7N1+sRSENEBmdWcHKs36SNVhZ/GRCx5HSTpUtRprAEKAA/c3XsHDFZmOKWIkTrnOPIHyPv4LuLgKuM+PxKiOUrjYBxa41XozgjaeOYj1xsX3SPuM1jel9chGzFFJP/qNZq3u5OWXeYFFCU1H4rjKqbSmcZXFJcY0Et0bR/LJoTBltGypJXsRYivGqUjvgCku0eu9HBMGIz81MGsu4WYxJzjzYPIBGjDM7Jf7F0ZsXMcuwXSx7vcxVLC7EVWCKedzqW02vdCz86kaCQE35PYZLGh2khzlOkahr8Hc4JGJAU/0ZQoOi+weusvX4ySCwmnlPtJbthnNpWHrqmpzPFQRReBKFIfzRS9NLwkJrXthoYDLH2AeTrw7rP67TmrlZqsd8RtG1bKyWtcf4wWsC8wIg0EUPGVPfS7l+zfQ0HlixHUaW6kRvbsfiEC59O2A1WmHnwYeV5qviixPukrnRHjICU5hNZvc76MP8fauZYVpDT7YxVSzTOPINzeg1M=';const _IH='af23c1eb1f170c3257258ba2d5cb5c8a120c0350aacc818a750ae4a5cb82f019';let _src;

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
