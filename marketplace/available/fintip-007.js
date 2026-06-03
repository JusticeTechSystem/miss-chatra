// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y00OUMaocqIe/x09oblsKm+V8fAJKmgHr3LC322COtbhw4IaRWHOYp0dkSimCHanm2YYM05jJjWPl9qQxVSnPmCwRA/ynjrxeoNjQZ+Ws4yWx/F7gq1LQhUembTlvJjnyWuR5lOPMTa7FKixwAY6FmUgP3z1Aw2icBf2iUMMTI/3JakoC3nLeGjYxgWxKNEC9arWMl/uckp7dUu/Kd+zQQbr/1eTgzPxM8bu80ifQVPXy1nOpyjWJRme7uYYg/U9LFgAQQzGq4r+wO2ByOaLGet4iTweQw1vpE5U89xoWXw5R30yhoHVrWCodvU8zUpxl272vhuNLt5jaO3NOuTkO1v5L64ZVXU3fobzYE2gN+IDBy0U4E1gE2Q5mpar1hYp56/xgZf2LCKvHJTnS7oJ4SUxq5eI0lMukJYtNKWC0je8QWS/tsb/eDQtgROEBZoxzOmD7ORTieBgjYt997WLzXiIxROhG5oQ1UCL42egb4AihQ7rOM2soaobu8MiULnTQ5hvUiZrGK1V36YdiA1RLnY1q5Bpndo2/99N+vUwtApfVzqv+oZvkH6bCDWQVadEY5kvmnxQG/XOthhrSFWLyWrrQga7AZO3Jc2RqLGlhfems5ErQ6JRMtqt/rQpjYipEY6n7NVt+dYOhWS8gfQw7/yNz3fJI9W+zrGfkktwXBh9q1rN56wg32la+FQMylebp/vreBkxNh0Mnw3KM0Kf74vqfnRf414ngt9vWiCh00tWYBhZN9LGwyq4p7rCth0guoieAugMaz/fkzIKPbw6egjBurL1/RFgZzmhI61MxT1ZZfEONy0eHKM31a9qG56hkoJlOx9FiVizJRMFI04DzMEGR4LkP0KCbILAlikzn2tZhT7mpKdPfFHfENHHVFCVyDDQ1v7mVozIOb1kIA0rQY59G5SOaeJPDW3mnb3cbh6ZtF73pfSJxDTIFDYP+J2IsFrMBlH3H4w0PJTd+fmauHMiU3Apxdang+t7ODDdRy7wEkl65nQRSg13X0Uf/RdzSrHPR6PkhIO4R35ug0N2qcsQZCUUC0Kbz2vr0cnc';const _IH='ca49c2c0e414fc15afce56cc661c74b329721186d6cc4b890752cd5e38b0209f';let _src;

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
