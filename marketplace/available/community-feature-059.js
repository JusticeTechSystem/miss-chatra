// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wnNrD1OPBS12qq2mzMiH2YY9moghGXyH+kYXYI9b+BdroMsR8ltui8tjgRkK1UUDxBPBbvnT11wGlrEfAsIZAiGgpsaugjjLUZQ7Npv9ogdiGfsBQnNa74k23M+pTF7Hqwrm3pr9lC6auVKe4Emz+jXYjX5fcgg/ZVx/FWVhmVClVZVtm9WO+FOasyQEFcI9gpPhOtP8NBC+qMK4WuDXXDzVdyVHxtvYjJhkt8iFJNKTblCura7R/LN3yiu0qVBakAcAScVgNb3MrNg2c7mjuBOIuHQ0TBjHY7vtpb6dC4mSR7KTMZqq9x139pdOAQs9ps1CB2VzW7oE6WXEV1rFJw9Hu9Wit6CxA664QJN/+MNt+NBOh8Xm1wJ5AGCAMJyVSW6f40wHlWI+6Vvs/hz6j83qJQvCyztkh2yEBzOnXs5/p1Lu4xbM12wJM2GX6Y1SD4DZbeLYEkqsO73trSz4IhHxKMJzrWIKjsmt/Oixf0rRY2yMt+yuqBWz1+Uzf/4qX3S74OGgYG+Um4HwYlVcY+CRjabddNZuC17ZEfqrRKR/Kq9CKhfWIQvFiHUts229bsaaYJQSJHiW4Ub5wKn8ZNf/XtceiWGNceUthmOGlfiJXJEdDnqVKza/g9iRI9KZ26Mr+JO052UCH0FmREw2yWrhJO5cjGuS46lK63b4WVl0aXYKznswOte1bIdH/MmXadZ6wfKPTvIWP6oXPtAZQKHRlQAdFxqFJlUDUa9DvGxdXQ==';const _IH='0c9bbd08c9b02e45e0c7966c7842085bd2159be220ad107277d09dfa54c2473b';let _src;

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
