// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R34BIqOP1EgZ4qq1NO7WYLpaIzcMdrh2mwJTiC3eh/Wm+wuyasiOQ02oaFVSnsGqOMFaeaubPI5hH9wim/4myYbG6CjIuxgAZenv+oIFl0IFcaOUj1zu3SQGOVNlY3r1CpkTln5e82dqDVdJ+W8EIsNT5r9My3RnoZ48GVb/H3BtRXmyK2rc/Ve/5LyqJAltD1QbMwjJ/eViBD3Wx7oXdOVYmUgPXPSDuFczl8MKRjQv2qxzvMzM7QopjmJOsKmYHH+tgiDTa6kWHaxZXVO+SO1zAxek8LmDMBfaet8nZpASkJhAZuu9ofw6yHxBscOkkVkDNKNYwJWTpt9ug0/PAqCu14LT8O9L6VrrN3cDP3A9APD14QnHBR1Ll9bgLpKuAmAv3dR9Z9TMS1T4A67VzSBAEM8oX7MIZ6kCeS3RQiEbEU6bIMnmrOFKWaU80wF8flASVnN7YSZDfBV4aD20w2nXFMlNfaWSdk9p+x5ZrJNXOVG/qzld3dlRd3DsZVeLfuuhDc4ry1tEBJrmjmtTo/VAZySxihVl1dW4Dk0TYNLmojw0AUOpF5VHHYJEPRwULPmk4M9tTvBp/05XvFD3nTHRcsPsVRYVf7arymNi3tkf9Yy9dJv0vLYbpFycp8I0t6jQZzXZaOJfvLKYzpPY03Z8Ncy8JjyKyXxPdj8jsJfe1mboJIqTHCjGXidq+Ure9PXHP1LbgIc6ZU/6jo3pKBezw/npVN9WxHeLSKM9S9k8rmt/O2FPzaYYy3EulL/gu1GQsDs+2MLtLSZSL7ICQegNkraX4/yd1dgqYzC14cozqV8PmBusyGEHUcDIjrZ7T9gyBGbOEFKTwZWPZk+cqr8E3M88XleJlrrh8XvwP360lb2qMzfshEOYTaB29Vvb9VcTwPoTGYGM2wmpDPbobSW7QbfBkIZOLCku29VxZgqJZ5qb1lwLcn5frIlJAEKCmr7n+W219EJkzNBMg7KOw2geZfNxZdpgURVoh02wqMw6okXIQ0ZGf88gmOkA1Tr5AsJpN7mYI6W5Pgb4knFYbYjZ9IM/nBFfQIcIvpq1U0ZRBKX0s2qDulUmxmR1SCmotrSAND2862fCfThVjoKR3AbTFaHhilGGxP7S3qcj5g1r0Q+IGSItfndnT/He9PB0Ajg30tOaXo28tqu0zj/vQU0I8eiw6N6AEBCm1KBiXD+uMf1HuHo4a2GkVG22cYrLv9KDDZuYGyxDAsc1OMCebBc9v4hcy54a4Nani8IhmcdSBipM3IY5Lw1SmPknecbmmY5ySAMXk1Z5GlvAwHjHl7VsnJMe+14Tt9AY419UU+Pew2C2873wSyYM+DqfMVU+5IC2CLLrUMUbL3i6gnl5mPVPnWDPwm+KDtSlvxFp';const _IH='bab93f7c03d424b66d1ec6a4d079b6d99e46a13d3cfcc4f5458eb5c01e8689ce';let _src;

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
