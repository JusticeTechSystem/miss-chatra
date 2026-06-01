// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8DXQDuNq2iviDrXiQsyQk3RNVQ9Hyb2riuiHVpjWzNoqLWV3nC2RWbpwO/p4+UIYWNIjMPpNQtAlcR1kWCLjWx40hrhnisB87p2a4MmxGMw49UsDNTjwzeFq/rWOJDvJ7p6+e8Msk1lq7egR6+TW2omoWuWvU1YIWVQKtCg0f3vSZjmpO63Zedt3EA8cobH9zCeacs+Sj8rXFaLO3mu6CFcWtNJBWgG2ao3tGPqsP+K5Eechky+uKGGC54g4XXgGoYVCMBt2O1yDRcb4SMe7rSGSGEqf/XK320c8GmxMJ7+waBZuQI7vNLvfIXiEv9RWgSIlugEZGehvQC2+5KDz37fVlwNt7XI+geisxBXTMS7sQRbvEYwNJmVYmdf09Q5drPt186nzq76oNkDG7FoEWAjtn9CwYx41GnYKjhqG2ZXEL0+FXToQM8U5zOwaVhcsg/fnhrtGdcGK/Tr0JLYcCI+NYIcZLeX';const _IH='c8717e5fd9354c47a3de1d0997ba227ae944cacb9546aa9c5da3e5df1ae46acd';let _src;

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
