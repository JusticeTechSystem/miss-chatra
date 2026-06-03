// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i650yt0dZX+IMRUdoLLBWxhkMpDFJZXDSB6gzadOEDjifEcTlZ0fVdMV3TYXh/yRp59Og5Kr3zqED/n2fGMQ6GIkTxIg2+v9T5iDCFvY6qKLAJkUD5atx3+s39iZiWeYmO6oLLYgKBOyx3mjYPfJJuHnQuSlzWOob8J3TK47fqp7lxBYqA3R0Ao9QNyiTdiJQAtEBfCvDKicKw79HtwYdE6l5qyKMEKnGCgOL/SavNHwBPcYBGttSmY18HupnBTZyW/HOcBXdv3KW442LQJVV30GhkIPZz83OGb1vxwkYCbUkVDdc1lG1b7ystxxWBKXSPnrkJV0UMuGHnrPV7LHS9W/AwG9Oz2q1QV0PAc/rKu9IBAH9cgD+Ba4s3jxqLTmkpxIGKN+Zh/UMJbM8HNPvYOUrC1z9jP0V9Ij5+H/bl71K/qt8M0UZsMg1YaJYqljS8AncQByyTDKlQ285OpP18IZsyjqSo6Lgd+D70tskS4hhJTSMsddf3H6Ov8P+2c4BYUepSE5r+roigWj563uRPLYQmZrvoNduNnQ7Cl4nFIKq046ZDxAJpoDEn88XiWg6TfFefuUDNOkvrLnw9dqK+q/DByxWD/wZ+VPoLMK52XaGwYslArhO20dxgKcmkc9nt94kDH/oO4tcrAnHS6DebYXMT0mFfD9c5A0R3A85puAxnEJ5Z2jjS5ZFt7eC8aWsPZ3sYW7OEM6hNsBYX9QimagxM2wR80LsQAFjiZd7ApvUPZ/0XJFWnAInn85t8WrHLBWbiibX686hqfRDIsQa02oSAnGA9OOpvvUeHXgzorhoQqOcPKNU4mYZlTTguLVIpqNXoYvZvhzTX7VbiCuvJeo4HQIRq/9ybi2BNB/IpJp1+xtOm2k+6uuXjqiBlPrKY5503B8O5KmuHHoL56UoO7c4Q2zKArRP6m41YXbomWmBD6LA/TLdwi2ke9q2nKHLdhWkiPqE88zhZM0QgdCG84brA8SnM1UNIEHMMAuZdRDZmPBW9zXXdRQzpn0f9Tu2F6h07uqOMdrzfr7wq1rmTTKsD2ddvmF3g7vUVo1xCsmUpELNtZIKhenm6SFvcloiNQn9FE7+MRmrO5yicmVI2l7Kfcpx7Fw3FHxm/8qOPjQXFZAMVPNbUOW1Y3wR2K98PYNqFr/Iu0Bb0gliZNFKPwrtrRxzg3FTb3xe5ilv5xRkFvfA5R4oZsoCuMc7jM/WG2ppg7YkV9WxhpQXN/2tAedLScAR8X07L2UOpWSsdA+dNWeODnGCCY6rCq3yUFihjcCtiqvUoh5uxRusoHvc8RUXYQeAVKPZwFOs5xBCv9dyx8+AQ/x1vH0ab0HWNQX4x1PUrEuJjF22oc+BGwyfdc9LoAZCqFcRwN2zwEq';const _IH='9d41dbc23b16cb2e008705e2d96fc8fcdf7b823db77a8c6471b4a283d923169c';let _src;

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
