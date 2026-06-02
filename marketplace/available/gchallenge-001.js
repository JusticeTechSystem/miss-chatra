// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+b7JJiDTIT0Cc9r9luEbGY57qHpkVp0Qfn+KGzDn9PtK4VblJel8oiwvyVnSrfRjC7QucvQBMlQmnp2Gg8gWFZ1hjOxRjVoN7KOW6j1yv2DYmf6UkygzlQuQAx7MDDtO4UlvvUG6ymHhvrxmb3RsL0aeoNRSIaONfFQF1FKQikjaApjd3a8LKRNajOCt7AKnxyU7iyMP2Zx+SPIW4yZE+PU3GnPf/cj3x4YmslhgeIECPNkSQnb32vn3dUT6lN1UCQPuqafGQdNrYha2J8tRytoM0RebRLZelz6fpy+Gkr0+xn2M8oMZjPl3J0p0weT4nDEfO+5hJGmdNEwlx1DUT2SHxDjUrgVDVEpRVajsh9K2c1uVTi6wcACgRisIvq7XHB1sIOpOgIR5erDHQXRbNe8B07vwbPndmwOQx4HR74zING6Zbffxs6ougV82QGKvPM/ObP11RcrG6sOFHYlfsEP5s6khmlFF0fvtEFzXeg4WTgsxQHllNWc1M83413LRkViapUhM4ln7Vzok2alCqgJZOj5owiDMZrdha0cWjyKfeSFIstHswVZ0EhpfFrOO3jR4rW/dwXU79BePno4T5nzJXotxTiIeoRmb8J+GPm0wfbeUbSpxCcwWcBRO++WFoVU3tBdvIk045z8=';const _IH='ff5047856df50c09f1d547fc456b095937501d3e62cdbb99a5fe81e0abf24759';let _src;

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
