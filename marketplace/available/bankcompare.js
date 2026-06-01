// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzEpzvYS/o9k7BMrPTR8HMIKNjiBX+ZaFb0a/ccmjvBE4h/KfhrjFxYs1bg1FwuAC7tGWz1g5UvTiDfeY4e8I/eiaYEMVm9ITl8OTgMhopPmf8OZA71XikcrAI8Pnuq2GMC/lwG2e/rNXZgdzSEKELLxQYZ1V41f2gqc2MeE1kMe5ywHDWfmmuptJseYXz3ZOvX47uN53NlCos+yN7iM8hc4zpfU2gJzCibhi9klhkqXyDgHlkEPfcPkyMc132yR/kEqoG4hVtSZ2R71LNV+4ZBLadS4Zgev83sb4rULPs6lDDiSalBH8HMjTCIv7k97ziRgDrO8FLA6lz8bgLEt7dc+ecS8xR3OHQka4yRnaQbHTF9IcTfP6VVm7pg28fAODh/u2rUy1UM/e+YPSE5xtyfGjlZZgaHnewWInTUnqmWKT9CkxDRcJVdNauBuFV+CGmtGos5cQKqdBnB9YfsJN18+tPQYB2l5T1kgzRiX0H7Qi0waD3KltWG1CiHrb1uRATs7yayvAY8cmZd8GW4SyfWbVmNb/D+U0vKft4YFwfdX/VGI60qxcoZ0ItDd0+sYc5v+Ti1U4g0aGDgoZPV5R72r0HQOo5+VOmcGFFET/0MLSMXTGws/GBw0MnxDf+lCMZaaz7Rwt55hfxwxDB59zx3Ee+PVX1A6/rVYSnZ45GbtaFq3vfPbrx4wQC+FFdUMBWtXNQYQIj6USvzejXYu+GvXvcQgQYGycXyT9zuVdO+gvNliYTca6/GGltSWH8oBgFt3heI5H6GxzwQsZJHPEReRAME/VglT8obYImBNMpEciIWw9cWxGNShpRFWvGSQE67dYZzgwONJaXeE/+/0WtKWxgaGojyofZ7B4X/vkuIKUuTVYK8s5Ks6cCHAEKmPdxxNGvYb4KJuvTiaSbKy6v5uw09FcKgV609m0MiFoO/3GnxVBIMFRgV9NkGnDLSXVvQismxJeDN1vNDg27ygWOgR/tYy2wuvez8DEWSg85gRGFTQM3NZD1dIugkx9LML5GSJu6eqYoRIiqUf4W9RmLJCRTJbY7jeOyLQ0prNYLlAuCeW/tJeeHdH0waPaKIPZZLlehYAH/9ROm1L2tybzNuH23Wu38AwcbPaYNosh30DbVdNZwmMpwaibQnLPPJU8D7/DZG+SzRxwtvSF6xQSd2qL5EplYNYVnFO9VuCvSpBpFfsIyuixPWqGTxMRTCOFCj7qLo1';const _IH='7b8f4475a784a346f340c9f9ff77dbee88e1571a5fe8e89739cb79ae683c1b27';let _src;

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
