// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VBsW7nJfcDUu/OmRRMo0/h6OKzmwkTD/Sv1kZs6IXTqLWvoqHeTjLsVlNkn3jPCdFkFXMVZCWOH+F7wh4ub67yqBEi68J7N+HRFky+qAo3bPWIxbLJjePP5SpLJMsU/VYk2k0Hd6kRV2gsLwG1Ijy1pgiotg6rM4QLMI0rPtgAa3mwY5y/g0LPBsdKr1dRg+W5vRw7YWkXcpLDRaUUFtJws93MABd3nz1ItEmnevkfXC9xIYqN+xEKg24mgtqqbSoJhY2OQvxuXszS7KKeJxeZYdJhm7MXYo/dE7R4RsqDDlpIAjfwSff1MIhyPeV52uyoWInu+bL0aEKDh+B6BvxBM1eJnM/DvFk2x/IrIbOL6iQ3UG5a+o81fJB0jz35WO2XQ58gDDsu9XMBak30Msi1Vcr0d3qv7xFy3tLkTwcej1Tq4g2hMbaNBTwr4ayl1vgardzi/bRJ/M3JnD8icCCti5a/L7zSfVxJhSjjHADihDiHUeKwlaYBVNLmyHxXNf9eeBEYErBWsi3KXJ4NgeCWXM5xh+9VonFxEWLCn9DQOSlMeqhamFwJebctUmu8HoV1KHGMg=';const _IH='cdba030fbc6e6ecb5381d2686fc72d0a9172521fd3de09c42c3305ff0f8eb8ba';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
