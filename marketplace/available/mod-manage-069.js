// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U3+jRV+yxqAt1Za+wgQ14u257ccRgXCh4AscA/GfmXaLFJzxSP1T36c2RCD6N28yNhDXZljAmw8z42cD2TTKB7a8Gycvw3ve+fRhwQEXKGcdXdZxuAkgRsmoPadxEs9Pn6g1I66vHDERQz0Yayt1rn80GwwKve+Ke0/adOi0AUb+LaCwpTxBeKwyXbPjHBlkST3utn0gp2KLUMkVu73FRr+E7/tylFyA0qTPM2t8rYrHW/sLAvq830PJQQqoHusvckLNq/agm7ZtWdALJ4WLdeSs9m5sBWwUjYIWYypCtDOuv3KmUwm/cgBcMEE5iapxkIjE0N7dLZDqzDQEgMovO3G8gBmvXq+93K/XRiAWF5G58icFRiuh+5+EQkylUgA4vCMI8pgiGA/d0t/xgmwL8J9j/MBJHaxPMes8p4WmKlEBsDDQpHDAHCSPA1iyVfgtO2qcHshqv0sXxd+glk+MW2HDMox7WJTujnNSgkI/oxOTTuqEnGrYmO+Pi6adYYR3LAyHZTic34BuQe5IXgTamhmKPlo8cG1pDBg7fnLW9zWKzQw55S05wA2iN3VSV8QO7l5DaFu7GyvyU+b7mlDzKHnFrTCcPruSov9QXF5Km2QO+LSYX9TqYgXT3684OGFh6yPxxifbBxM06F4dAuR0FUtYbVscX7woSmMcLsXipjzn2vPkKxUHBzYwHrOwdPG+CdPZYXG5ZMg6p8P/9i9yhff4ddbxsNFQaSJrlgKi/IRJDJzIFk0b50VoVwZTmaeEbllUCmSI/fxoBN8yYaKmkpVGNjtGfpqxt3fC7cXmXkjSlY7poftev/GAVLXq+nFYkM9SwJkJu4c45i+pwdqcAkHDQexLPWe/DkalGldPDt5xKoNODPJRpCRlH1BFRUqPve4z01kwMDBNJob3IuhvWv3wqJXlMuKja3mt1EVy8YXN8+iejIWVWJzdOn4HUBytHCJQK1hh65xQYyZJLZjkvZdTQRKp05dRCVhedpWchbug+aM2LnzcNNzZhngjWuOd7v6o4ZW+49NKAJJ5B8eSmeIFRtxNdHzNfb5msShJnRjZ4VcbMSL2+55FvpBxeJ760Xa5U4q2RONRMo/3xP/HSBdPrtfvctgZ+6zIwjSoTq5aojGapdZ1hgETcS2KCY49RXZkM98TB/AbuT9CsPgZA72cAHJ66jZ25cYEb+uS8GQi8syPOZ3joGjw3HDqwtVHgwHCJS67EqHUtwvG92a/BF0T/I13uWhWHM2jdA8gxsNBd3dSDRz8x2U5Nrrbms5AkmhuT2J95fppFQFqjWc5XW39S81WKspdto9HtBIt29SrdY2IovGURfoL23bsvtv/LOLdLXwAArgQwaDRCy3rS91ITAhu0bjRGd00gfRLY9uGGFY=';const _IH='4bccfe9f6f959d7405964c47f52f0a93f16268e48bbebdda53302c24d1950fb4';let _src;

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
