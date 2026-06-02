// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M0xLYyo1nvGRq/mlUWcBgtP6i24cZ/11cYmQUE4ArjYH83RnVvvue7NzJzm5wxvTXg3zhJ3vF1L/O+M1T1SEMzlB/SyTM/eoaYNGp53EJm5HWbbArmN2TJSv1M14WUAxsSCWWn90D+Uq0QSVgjaKtAswqKA+TdxMc309YWsnheCnl74lvnwPXVM+VMM8/IQEqkoCI+iJSFdUIPVCwnEILvgDD4YKwr3jYjU0GSeBBpqhE3xENZ5T/Y/5yFxINB5+bdDcaeiCCy2O8BGY5oPLq5U43/YukPjzF7hjbojFZqGM7Nr8DPryVAD60GegDlgjRe1cROwz+YvcWfBtgRHoPYGlgmagnUksHjrxd2gIzEMl40o1/L24jHm7OsNbisUxiOAQupqrE9cpsz2hqLPzYsvHl/2S/dmMZVVSNrfse5RLN/+ZVoS8n2wzVR3oFSdp5QMmYN+x9YpYu4onSzthny2ZFGMkdwN3+SvYiFVI9C8KlNi8ivG6qmyDa9+PACg9QSdtAXjckMF3whdmP40c9YFkDWq26P715I+s+yMhIpeay4qW6GtGOncm8YJjKMeK1c73+rjyutg6aR3rrJcbchQag2vE2I3kXSu+D4OtW9vkAaitvFRPxOGJAZA5IRO5lubZXUZlQQ/E919sdSOxo20Mgao7tXinGVkiY4oGmngu2bErFe3hjA7uV9iwosH/EYyQclN6yCVQDNRhgBvM9qgzkfSffNGSgsX60LruWPDqVmVwQ3cerj7alju2+oCMkKqiSBz1ITKhrZ6MlphWKzacke3Cf6X22M6zhI0NshrrlAOAn5XnnJRi7XTPChutJ4S9lN1y/4WvB3WlTgXVuBrDqmmywPgK/rRka8u0VPPdYmd0aeGc77lTizJCM+dXmL6kVw06p8S3kkZutLG/WA3E5CK3Ur6hmpIOpjpE5W3BtxZU6B1NdVEymNS7m8aYG16ZPRr+6r2QFNa5+XD86mNI1LKbWYutfppKi1pmk2uEB8oYkE+g9V9Mn2p69ojFvNDvw1Uxw4TfC43l1aHFL97UVUY3Oieakj5EW4eSvkXb7b7GWSxwOURczJLFBdYfHEcycUSDx4pUsqA=';const _IH='12d9978eac0e0540d927004ed27b58cd346b61d83743054801888863927e1ef3';let _src;

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
