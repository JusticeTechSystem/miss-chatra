// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sazUHfbXI483cOzYCawXY3ZxDzILQsRs/K7AEkXP1u6wJZpWLe/MSXiEcEUghFmrjLcrGlBu8XHcm1SErd51AlyCFKdWrjtqRZ8PMEBmlK1yfCatmVeVG/whFKPTTbZqWpSBQJNXrzQHQqNt0sfdx8IIr3xMyKyVDC3ivRQyLWMB1TKNpgQuHRE7RLHMM9jO3oB2pkoSghqqghEQ4QWqQCijk954dEFP153N1biZRkXAOS/aWDQqGJ9sBCXWA81jlKeBV5QarHJY3kYAvJwbp4aPkBP6VzIv7W6PxuGAjubsxGnL2Ik8SCm3AdzclP+mDR6oQHp/vOOMj5evjaKWIJJ7tP6JaqQxVKM92U7YadxGDVJ6X1f4X9ANsyi9ZO7YOass8tYV9RsLo84G+gTY8TtNxsdCHkcvzvpODuvyiIisKYa0e0TTdtC6TDV+lvNO9JGcWMdryoIzFvuFaXJimpw9mHwJ8nxYOORXWLv7R0+Px3mWhB0VRjelUAUj182E2NXWMMfD+yDG/YqCi5LoLfLrceSTL9WY3Oit3WOPbovKxNNcvlL7VtkYQucjgTzsd8yaw+RoJJc/SRH/8bBVovzyRLjiqYoT9+kyp1LHCkN+ceDiQkTKGCGRIMqBTt+r47ZDl8RMepPMw+L9iedU7bjrU6iarrrfZFb2L1ncaDGMdw88Z1zNwE6+xz9AmSNfKnr/a3VHzgjXvFIFeo2+185HN9btx3G5xcw0VNZMj+Ho/mHevvoR/+eDVx3IO6bRyYCo0+c0F5Fesi4zrc3S/g8JSVpXptCm6rRa3GZL/WBeE8LNFXl2hTBrp5z2OG/1+5mIgKteu+Ahvv/M/UO6lGlIiOCckotv2EhWoDp81AxthAUdQ3NZY5YZv4arG9fVvDNYoUOZL4KFVonpOBYGpeRE7CbmKWe1Qb+Q285CmuQfuu+Zl2eih1PHdQ8062G+iosRdZRCAh7D8mKMfGwGurYTEhh2+K1LBXQtj6lj1ccpfTZhlI4GsAOtTvBmlfkmdnxuzTHkweqGQDKzmT/DtDKdzcVpPWz/38dDmZzfwB6hZDTZmw8OEcVPbip+Fyz13aiK26d/ytAVSJLuCDNeFGRXadmXXVsRzNuxpZWDhZX6RG5rFrM4Y7IGbAeywzmEpiaa77MYAEcvXEuaEOWA61zXS+uA82IM2yrzRfUxE2iBc0JESEP0YZZCXsgziw+BfJZV2uBUrUK5IjZqnU0BJ8OxrPycvWedvd53bxxnoJ7c1qQACPiuVf796u1zKe28hI55l6YdKv0ei1yQE8Y6p4ZsJiOwkos5whbkIGj7MO9h7De2TNL/5WmiK3PnR2fmSej5wQPK+O8AuGuE+YlP+LuFCC4S7blbHwLls5zsLr4PTO1cQxa2SVln03EpkDUD4Dc=';const _IH='16195f52ae17645605a2abac8a545b3529fc89beb9d45f9ff7a42576acfd30ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
