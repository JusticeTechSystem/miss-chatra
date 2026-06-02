// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dUTA1D4APo3KpJikEpDvse/D0VPKVBHoq2GLvulA+04DTWXtb+6JIMeLOCobYcr3ptAdf0zyAUNpx6RQaO6MQLeWkQBDSxZo9r8LT8pS+0b6P0NOMlOuqzYsd0pOx3Y9n1Kp1Zv/Veu9nTxdIkEOcBBKj0GBY+ZnyHJTIL5iOIUGBRqgfEeAgWR4ZZNGf8DmmFGLofJi4dKm2PA91dTtZE8uKU0uC8s7e2irPXaOXUVDnMGKceY6IV3tBsSBGHxc6OzcxBID6mqTRFI/qMT1f2PIW/gTAKEa9FC08cC8PpSaPfjdY3WC65PWv7mSY+CSPA186EirKinTZFOGtWUn3rQ9mCRXUV1oqKBEE+YBu1br6bXf2a/M0fs7EWUoKkY6jegXOzICM5vL1sEwLoc0XnZH/a6RlDDAPZ5cdnIiyfsnMqiGWWfIhNO4Ph/oHAytvnL/GtMi3yx/LvOmkKWqbAxRqQ/9fHhAub0UGv5JYXjHprHfNmtWzp5bqEOuIP4WtyqMwelGAFYKDZslhpWpvLZDgqUlwoxSdVKX0Ih0EI/6koWXbigy02upVyU7Mtu+jMfo8BfgzVzOaTkwij+NZ+tfvpNETRLps0DEfQWxhHzGjnaWFiu0QfTGiivukVceOWxwFBLBR7ffUnBU8ar0N83qYQI9X5j+bE8265skZpB085tBG2dnROy3+MbIlxcjejk4h+mgRTqwCf2Qic7MfzYeV/QRnjoGXyRvJdohzw==';const _IH='636277d038b01d10d0a55f128375549f1b9f381d0ee5b89d57ea3db174ac1ff5';let _src;

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
