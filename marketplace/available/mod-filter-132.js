// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vYg/C774vWwrd5DfDqv8T7E5xpX0BGTCIs+T3jwJoUTJDMXMM2Oq0dSwpLLB0hfhd38ZO53yTkPGTnwKci+Ws1ZT8yhR1xoTuMock//+GYYXJOv3bdFfp1UJe4a3ZLHNiqdnrIa9B9WmDdFNL+tLSVEaOqh0wcc1LMFII8CgCmee3mpwJ9j/dhOt1IDg+MhI3qxeQQrdQAVgpMgdWz25HWEwv2WKWmg5KoLHhZfV45f7Fkz4QI2uVbUB7/J3Lvk+ZdwADDU/x1OTl5P53q2yjfgfn30tkJLiO2dQd5CLr9yigI+zUbtA54l/G99Mxze1gm81plC033cRNNuQiIcvBtj9O0n4YGFhplJvbOv7Raek9QS9k7/OolSyzAhy6JKs7S93CCYSATmdIdOWvB5OzPmxa8rNTL/O58l5e8Bh6Kab5uvkZ1sfxk/M6uqmBLPQM5YDF+wNbCV8nLeFFPB/7skIrBinTim0nfQ1d4cOx18i2PErJLbQf4ywko1dC0zJu92GeywnAy1HD8WPQ+psUDSANJKWxguSRc1+WHeWmuQKhYfEgFidZdn1axPc3pCr04cccoJnhWs7F1XM7EkHLs4xlA6preRgAUD90LKRc95fxV1fhKt5MjhDaMJ4hOPokdCtQaDhbVIzuNNSjaRxb+CKSVm7KEjmRXGu7QF+8lpalvB84sIMKllfTjkvHIkHk+n7vI1exYh//e3yf4TwfZ06EQ+8TVEbBBSqa+85yv0x8OT1Ru1HhnMBJ7TNCPg+rIOXH5N/AzFkDT7au4X3UNtClPOwz4ZOtKJOXa8ZL2HxNaPPnCSQlfUm2pDkTctCIg0w9LnsJnhk5BvfGTrKoW12+ElSVzBFVomhwevLA1OczN994pCdlGcL9HnNsW+K8FPRT48Y/QBAYBnt5MIbNe1wIPLrRZEA2HpGGHQCWwHOPnmnU6XDwiz6VvSe9GbQuq8+c76xG7aIis1Wfcwo0mRN/76zVU+rC6Hy1lpRp66HX0G/Ddk+Y84/v7s5hLVQiby7e+f5L4c33NA2ZR/06bbIZzr9ppAPVKYiUbMQJzOqlq36Q9WD9qlsX6Imw73nNEjH6y4EITetfbFATjhcCE6BcYZk7eLDTkJ7B0JE5n9D85CD1Jbh/L7JSIA2HBIquVceu8ulR1YH8nLc9Vp+0DRh1cB9W2PXq2TfxEjaNqvRyzMLagjA1G5KKXbOThoCpO85KdmexK+i6HlQKb1mtMT3zfL5KYxPJAT5qOdMC/XBt3WppcoKQvmGm2v5Zqf2PU2CaWE0xFmk7vXJfBHgXpHt5k1Hqqvs4IKZApEisMdRz8DCGSI3noHJiiPHQscnFj/3N9gQ0ObksGDRzlQ6oMWraLSS1SWDRsdrKiOKzt6TP5Vz/ClVmQ==';const _IH='de3f24357467c25547bddd31bc74ec8c603b7a5f90364a05750efae1c662245c';let _src;

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
