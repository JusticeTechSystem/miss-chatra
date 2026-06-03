// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CICuLePCGsL2xnpDWjw4CHSzv4jDSbm+K4MFKWa4OMtG6v9g7UwKykacVf/O+0MgJVOe6kfUtYyOkZOUjqOB/h3nGzgg1NnTrpGy2OQzXWDXh1UrAvcIuR2cGpvoNKneZEW/paO6i/wBY6BbSa7N6zdJdDDh83bmCNPXfLFATE9f/azY3S1KnYWiUsTdH6A4fGsh19L59/hZv3hmNtyAUYl3kpoUW8aTItQ5uQjCxoYkdE84n1qHasHiKkf8P+RNuYKF3YXA6FOYXUB44582e5vpB/IaXE4D4npF/x7pTpUs5RVMxljBTOu1BtReuGfJccGRwlKS7DeLgwsOU76EtnDzrQdpO3cd1PWMlvTJV8oLIw9rVMm1tcagsJMaOdxiLpefPr9UoeJV/T/YuZJYQ47P5bAoUNrjYLwv8IjCTQJdSZTtWH0eNWiujQ6qqNXhUqIAoKRoM205IrP2FDuP9aLrQazeKucmGU+Jhp0Y2477kzyoZFLt4I3FDn4AAVgS0/mCmEpy762AP0Jf6NERwzgQpc5gnq40l3Zjq2GuHWYJK53JZJweBDW6o/ct3/B4urV1hNfQ5X5GR8pl+63kWMH0MPUhkgUyhCkgAAv1Ll6bZxp8lgUST+egv59pZGdT1vjkp6/K5vD3dt9s0PZUrSYDaAF2fkqT0kYN7BQ4UZcODKtHTCQKiKBZPP6nt9hlYcJ4pVdxoa+oMIzDRgrqflE0/E0=';const _IH='270a71e3e3999493d10cb62cb029e270f5940ba5b9452a71b3f692c2574e3204';let _src;

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
