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
  const _b64='UUVOQ8SfVhN1oN+4HAm2PUvkqw2w1xma+gpaWmj3lS7oAKtHL/djc9CE86dc5qRjQJAxCQYLDNa/+Lq1t9j5Tg/5MV2ca9DtQdhSTtx6czLGYY13a5kFdS+5p9R1JJI3ZFuFK53MrrvqgwgIwN2mTK6X0PIaVx+ho7xhON3h7Pmyf0TrJp14cLhv6tL82AMlBnOqSSbJZkL+hWHRw5iRwYOof8knkFTYI5lRAWXBF5obMecKw2DW+jKJEdousUet+bSAgxKIsXzbGnBbmnYVvf5cITUErQXWEMyxNI6xuKY+qfS2UsumJbOL5kz69V4kNVmHGhHO3gOwOOPvyHjVKjvvp01BeftN0VQvJ/u70w1CkvhROVcDPwub3vp3z6TTOJsVYL2yVluZS1wF5lofwWLHsxHq1WhHwVcxUDKfZTvEFVYGw4HnIe0XZ18/DyMs6QF0q0gz9AALw0zSPX1eDaNMt2aWuVE1y0sJOf/NsWy5PPbMRk72bwozx/D9A/7L021F1LSCGRt7v7d5ccn9LwMogh2fCIWANIffaqGxocvHEpdTPih36O4QZL2kplOJnMt+sEztqX9jrl6bJf0/GZ0lJp7ioowkqItCy7bPyuNGR2XIWh6RQkNhy4lTFrfA14S5beNwNrwFUv+iu/pMoh7LAdTp1MgxV09VwNzD6UkW3O4gM6/ssO2W/+gPanLufqNJELDzaijF5y0oYPnSLVVJ2Bp4b9yyHXl7P1M7a+kxIHt5xIMaFEU9b9lcAPxl/dqYFIwtaYDlheLuVlL51+J57+lznEHPcdnUkrC8d0Uesnqpt0cw+KP9iWGhxrxNt2Kt0UJSNG7BeFUY/rnO+3acKLWNFPYQ8FZW1vr39fVesq4e85eqE/XmJxA1TF7nRD1Xx1IDzRsm3D2cnQ3LGPP94RLkIk7nZTYkwMLzLmmTd+NHbVB9DUx3U2wJdX1LY4FvcMsb6pPThGiTw5YYBmkocO2XlR5aKp5fssydpGlHOpSU03LB7PaIRpdjT9h4Mdrb9PnMP3hiE+9TGKuIDDZIh7nA7Bg8SDBMNXHTeqZ2iQ==';const _IH='8053f78658e0573641cf3809068de9ceddba77e734a1e607a8ce985e4e8acfc5';let _src;

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
