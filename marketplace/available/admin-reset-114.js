// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz/vtSzdRiYuFSbHhCZUTsfZmKC0P/XzUN13L9PCQAb/L63XQypboFwuiTE+EDcTV0Qn92o1DULnGAv0bDQlYSK37MV3GS7WqAgzkgBCKLqJulvVkDMxdGULGUoqeRvGOato29/e0jb0/Y+dQpX0UMrtbr0aECm+kEdnpSZsvFi6exNJoED7/2oIYZvyUm2CsSKiwR1M6TUlMnvjAgToWbyd6skQhJ8V9nKAemOARlWNy1Dm6Jo1wlgvaO9tMJiw4+ITL5Ru+fCWJFHFuK3fTGar8EKtGO4XrqIk8l3bJDO5793jyIhyd4ie5IoFLGV+WDI+egFSHs74V7GlsgpIVKL4G0nDT64XlAmxisCnQ/4IyE8b+kgdtaLm4Y4fFC4f3Qq5itqEo5YX/VjKp13bGOWEkRDYd7UECBknt3TFuJypAgg/i9E+72DZ3MzzrIVTxP47PeDO79GizRJIeA8+cYVtMiI+KKJiJeT/gnNVTsSHPZkv6Gp8vo+IxR0t06smLcYdieZIVZs3BuA06Uygf+JSmMbccqVSWjFnhNmVVYxtRypRDf0EdgGnY1qhjGh3AfzKT+rmloJS0jXkyUxJ4TKwOz1yG9F1H7i0qJOEA49/WwesP7UB4lOzct6OO8bzSvLz7OeBERSTv8V4TcI8h2P4t/VRRuC9Ah1LbsAgxfH/ojYUjJLhfKCKtrxHJALGeeEDAg0nDvlYg2/OkvkX+9Ejd6mY+nwBevH0aZQEL4LA56YhNduM8kMxp5ql1aZ0JZNB73xlJMn6H25zHAzJYTHrSBK1EnsAHHHCqp+B+G4Mikd+nFO3uMxGgzvhMAerXsRIftkC/ndEvYLyM+J2bE0WhdnHJu4eGiaUOEJBv6W8mZEsDIxFkLHqMH/sIMd45DdtGjhMKBHk/ufwIdMW27o1zneOt01OW3qNA8WUT9rmg69EfcUc2RM+B8dYwcMXoJtmb02P3xOEAdaseNdGbOw904t+SFiebg0lZt0IhV4bqTM4Wia3MpTBsw==';const _IH='73024303c48b5ffda167792f13a3785abf310217013b7aff73abb0e816b12a25';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
