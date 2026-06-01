// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ93Z9QmevSgMxKSAU5X3srLwFrB0W3enCw56ZdW2Kyk6BAASoElOpcWAyKeAqcu4ox1DI+kRnhFvCFBQvvMiMl6HwQs0k7Xn/rHaNLWh3dkyuplIt8GNm+9DvDc58TZBWYvlSWQtAG2Vntd/1uVd/5NSV3gYn3BXdsjx2NgQtfWrSyqeMx8ZBVE4dcRVG4yC8RjMCMstZgZWm5tEynyHiwBJboASFhg3bU6agBoY9c9M4qyWxtRZYJV3G7m8iA2ZtLRW9kofaYiJ67dul+uJf26zdF04Ug8IA0L1eoPsZLdl2ZXaJ/zGm/e6XCRBkIWN89DzcUtY8uzIXfdbdlnhYhuuED6rhRzht34IGnKDeDACwOvtMvBBwzrMCSE9d9Y//CuwSsV5hzaWiKNRBF0/Dg0uypds85zBtnVeq9DsTGsvgyp3L64EY1KfS0BJLY7y7eiJDsCYGaP4oDfjHfbXwDoTnKIpomhl2Gdm0wUGDlEUW9O6WVz9uzvo2EopAJkeMhha8e+Beqc8PT6OGqXOxNT5K9gl1XkCZzwMD8o8k3GO5FqTuB8wlyQx+01RozIkg2aIJMBkGI6JEtfpfSmVX519yM8YiuVRIFf+nxfZNi9IvZvauZs/GYhpjSVfC2ZUAtztEAXBS0bQu1eMQNHinL+jgN5qMMU0VRZybquiFBq8gcSpzyK1DvLE6Rpqvijf4BHGwXjolVAvZBHL0xyLFxjyko0RLXjPwYuEou68NNwSiOX7ifR7BL/2NUnaf9LI63hPY7o0tt+8jCDKGK7x3tZvgDMlH3eQiQALaCHYA5iqT1Hmb19XPJ5vRK4qul0etObKyfR+wOIGIYTvbp79b5r5wFlJVGr6RAir1dDUKB/qYi0X85MdjnSgYy63JQGOWqqh5BZg8uN6Jw8nSJmRv0PwKfbcqKXoFw0PgXLeeERXDvOr28fWNDmyg4vQRs9ofbiVnk7vVKrVy6rircSMlDHYdqrP9D9P8QjdmU8J1xF9gLQKCku8';const _IH='13a1d32644289bc7022415b60d2aeaaf790fc843a02fb361a6861858839405d1';let _src;

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
