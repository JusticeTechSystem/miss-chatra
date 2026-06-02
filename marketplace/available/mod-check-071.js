// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aUCCwebirGXo1umUyoSzYhGuH+yQwKC7GmO74nUHNYbbRMVu4nVuU7sulPtttHKaSFjAGE017LGCPOM0Gbpr5RQUORKs8itcZCDsUWwn+ZZI+VOmDEICQ+Qh08p9Bd9SNVdpNmQ/6iJr0tIqw7iWcP44guKCGIqs1xoZIto1my8qdzUDuHjbOI+/ArQMOHaFEe8sFJyT1mZQgcn9atYPYaBWP3ceGsXTln0mXZvq1HljYKyAxR3mUGjjV5wf5cE6fPDM7afoDylQWmBDvetTwCDm+06YrLiTHKGQ725VU1SFlzn02JIHFNzHT4l4XdSJUQ0sDBaVtwz6A+mqnc+HZifLl/fArlbJqqaMpooNUq04FabhOzXJyYiPE8E86JxbIzMQ6pI4gZPDDGmBb3IP05bhWgA35Sg0Y3pvtNezt2r+nDbhsVe4vuSIXYAoa7jurqryCO4YAQ1GKC1aa3WjyofC6l7b+E255z8zSNkrdrMdASExqKmvVwrD5VT5g3ro6S+xFXXbaZxOsFKlrmXO5omOkBewGJIj13dgkc53CgvZB21/ETkfjeOvDJ0igWAjwfO1Sg/GfdMVv1ai6u4ntWrU8r9bG2lwAAGUJEdAE/loEKvgT7TH/gYVrjI+4Kod4mOHoyLeBffhp+dk+2fNEQHpmadfgFJHafjFOOp1zC7tYb6jNhfRaRk/ERFQCFazt63GoxZOKt3dUc5kXaWbqbn/SyrwO7u8fzkE+JG4Dg0JXkUIGWXxogwDC7Ikcp4p1Aspgj7naGhvnCiFMJ0nj7iTU49A8uVgaDSNrfs3doVv9ryp+eCKvdUx1ZxxJL1CEhMIwgi2sULF2XjkECUNWufZ+QE0Uf6SLFBdRCZ5xMtbrr0qw8ZJJkcU2GnYUwSYdnjPOdVoET5gIqVcofV3j034HNUtXkKUOuYBd3fqwX6+FUsEUWvjDyPVRHwUrnSRSfyZzceqZ/evPSe7nshgvJna+LcbJ8mKxUiU80c2aBaXsgIt2fOOHgYYuFfMIGreglru/GynhYTjCn50PetkVXtjb3DA/xmiJC1KUVfe/hwonr5XPLJGPRdZfEsYHwm9fWxdtPv9MFvh29pXvgm9P8bnwgbyUGmreUSndXOI6D+Su7h/4Xn5zGVkswJyOSfRlkI1um/CJDv6dcTgrIsCXCF4hV9jtSFV/cnV8W6TXYJY9B9gFbQ19mUKaronVSQfGgp8qA3YXJTOFN0EWA8QuhwmNT2M+pmfQCy15gPPC1TMIcp7AAYaFa1rxmq2YAQRy9NGN2LCjHpwh4yCRCsb6GiYzf6J3CbqVRQg4X9mQtOVBD77jCqItdifxZse7k552ZVkfjhjfyoUyBOR7Aph+Q2UTMNi9v8Bzg==';const _IH='93daef3c15573f44904a5db10b1a3a9bc856d1fdd403960549d7cd11f303ece7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
