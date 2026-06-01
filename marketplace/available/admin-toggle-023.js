// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQylWdtDeCow3HncX95drhi26VA+Yrc0Gy/8vbeaw2uuQbfmYPFn7AB0R88uS1RC+aNiXA8En96g2FAY+bMeW+f2SekCTwo4C4odZXme+mDD7CX5deELfaccFf77pQ1dXz7y5V2kDtlhdqqAOC3uJDrFCvsOKPF+W6BmAw38mygyG82/hhdDEJ4U/2H8qa3+nyjIo/0T4J2mlGIjkCZru9Zp9cBwxQgpkSTpijl4xf5QCnaP3bTet+pmUhDNegfRxcV/AQvpnvXhEewHAwjveLSnpd91RhQ7DnYuByvKEU47R7JWGhZa73//y1Jje5l2Tb1zNKfM2H8JZ+xnpxUd+ni7QVO4/fjqlWYY02tU+BTpQyehB3i12dsX0nLlNgY0atCQY7gC/IRo7kUE1R/vmAX8Lu9KNaNjewgig+CDWK5R+HCRtjBfhA/KMb5Enqv0ctSSeEbQyYcwpO8b0wPYGobmqUNcyZkeINC2kqd6oCLTwNv4WROoSiyZFzzYcF/IywbmWc8r/a9bAJD9TJ/UQy8NeBeB6giUbTbvbnKfYR8kAU7TqjuDv/I/3pBMDhIGTD3THwfmyBlqPsL57SV22S7lgHd8HOeJTp98QPIDTCHfwCiSqhYoAf+KmIEFyT3hjUTT4YR0Pn7xjLUobPEjbQFKQmteQPUcd2cCMxUJVvVnkVaLBn0cGOaFJgdo0SVmmvf37LbcERVni+nPKDWB54y5e07YIj2UyOmda10WGLpv0FZIOXOKGaZQ00jf92OHVgqDmrnn0FNQGI1cIJ6l/X1PveN3bUP9fqHdo84dei4obuG7bV4GHo2FgHbwMO853W1LumOokEWkY01Vpi371LXDL6z7QzhPj94exOpoi7TlPqM26Z68c1IZjP3BGyRdg4lwArjME1FOh3guHlpJZmYl4KqJnLo5XNwEyGxOSEcBGlYnUTEHuFABqxRLWRKT0h70PABepJF6A7nA+xrY01P9hMQJOKthLhtu5Rfv7FSYXq7V2/1oQ/YKDUUktXw==';const _IH='dc2a4318dc3d1063501609136b13a7ffa2d5ebfd4812080576d58e29141c8d2a';let _src;

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
