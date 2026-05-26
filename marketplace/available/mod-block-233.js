// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3NrQIkmIobZrB67qLu6SHa9tFG8RGmGuOoHM3KWr0L9jbnYi8BgyI0C+wTSPRhkvezeVKHjOx9Gnjq5WJRsY7fjWk0UARsB6BlvjCLH4lLcUud1S4T+YBkRXBeHqSMLhjEOxYRs/EzG/zSKLjPdqDClNqNTmf05zO60Ld98TOd4U2Rw4aMg60Muz13uwga9kk8XltAJg1D5S8ocMEnzfx3BmTPMdOnGMzgUAcO5UkZztA5/gSLb6qBl5oorr3iRRBiiT2n3EEYyHwIjevm7xqnf009zla3kOWo9uoeIofJ+s6RPW7ble9KmJMNvNcwlmI3D8Fa3xrLEfkDoe7T+t1qEe+ZmBAYIxPIvdWs+Gk5sTXDEO7zEPeFVvrc46WqSFtJvmQ5EA8BYIZfQIpUOXyTQtcYTMbqbcTKQb1tiv9XcAeWJDJ45NQWHpx3ll3Fr++jo5qgx3Vjh8zk8KZTyyG+uSqEvoGsbQMWtQDiIgtPbeYIwqBLdWKmOp3MPkeN/Kw9B9rrNJZkZsZqkEjhPpoB/ng79/oah4gaSx1rD2UiHXQvu4+8jmz8QHzlXBaBdXR2yUigOzR7Hm2ruDCW3aV6MY4kpPGTIRCAxBQ0dxvcXtTZMpZLRmsnGOTnVFNE2IPqk+SDyHdBWJqIDY1rOHZdcXFsHfc6spnek0lZuO2YQ2RGOzaT3NEXuLcSMJDkTdhiLsBgrguADcJ10xKclDQzlaFhwBJcCdsKZQtPD624f9zl/em7AnCvltnVw/w3BU7g4sdqJblOKVncJD1eY7SDkckgsprN8LKE1KihbTtZyrXTh4KC/BucxRMyI1z00Q2nbLx0pqrewn0fgmLIjvYHb5kafzPpprPVCl92bzbTSr4M7FEFDGVwdQLV0vR1M2Up6votpZSMDDkUhCBqkDgMhtIVawy6K+9kiREgHRF/mlwOFjR3waC7wWbXHFTzv874qdky12jBK7Z/HFRY72lPVyUxfN91UgAs5lcg7pBUwBUsatkF8qrCAUZL9RZMd5bseNQRysKbXBj0oRdpwGTv9CgvDQdpFG6cfL1RBXLBJ6SolRSJPqZ1rAVdL1XTs/F8b6+X8pv9SY1JEK+UcqpRS/Y/AnM+sELTY9aho4r6J3eL1yoSLBOB/HvrV/ivP372A4IFHmlNZXBPXxU5UttudVSvwloQoMzZfTbWc7GfKTv0puB/rA0yWSpsFvwFJ4eNfmECXtENBCGY8S1bX+jEoSoJGpVmyK5bjk+phzQQ98E5IS90KCfG72tnx3tfpPclaV9YnZnUXYhb+hvJz44HQtOgbcS1Nyg+LM381o7MLLykrP6JHhgSW3ec/Z1GkwD16fi7rgiCeWyjaMuPNk6RMKHiCnndNNswkFrM/f';const _IH='a91add57b0d29858b91ca7bc936408380ec1618aef7e5a1ef3868690adf9cd16';let _src;

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
