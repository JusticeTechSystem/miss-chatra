// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gupz5vFI6VeiL4xTnErHNfPFI1gT2UG4PdTcFHcV6JaWH7KZ3p0bIdwW8sOEG9JJauTnrs2m8LI4cIf+Xo6ygmpnS/sWFQm9MtbJnYAUjDM3IX9z7fmdMwKEgTi2xbavI7Xs7A+ZtCm0X5YWMhWTwclAiIEbcBE5HLpfvTuV1cuGKL3vxHXnrfeZ+4I25TOKCrF4oYDNFWgHltOTLIxWrfPG/ySr1HFnY6OGG9NBElS46JyTltPWML8Vg2XENShYtUfrZM+DRKTeU1hcWVEgnNjiDKl8GMP9U2ixEJOMDFwJP7GHrbCZdCcoTRQOeAUbOnKSgsPvl0Sx4vBht8wx8uHheTd1tzemeXNP3X36elSFfAuBC3oKKEcbK7EJ17WZOFUPhWzaQxNFz4JPxolamaXBXb9xom2D5dJcl6eJXmr81vZPLSK4mSLIdTMetjO/xtULy9wNTuhtiThfj7QWLBgOCJlHRWQM0NzB8EQ52iLmS5NIqVMqxgmdW527Kzs/1bNfC4ULhiLCKfVbCv5drxYt5T5OZ/qWfa/lnV68BYY8u6O/vPAUeCAWm0n1p5WjZeWxEQdTI/8/y434NnbLKemQaZ5x0Q3VdJC/24fuJZLrLZE51a1/e97+Pa1pHR5rh6jVeaT1QCbG6YSXQa41IB/WezWI+UpurUjUbwKbFm4KChZPF+WMT7Mr102Pzt/pxrRyYJCOv7i0t1fng2VphUE9Mqsetsr6UPJzNxBcnhguuR2KHam2XOE7OzSn3xEMHGv28ujrqywXrFfB5jWNy2sxSBDHjBhlaWQu12bzN7neCtDrp/gjKSsZurtFBwqAKmxsgNNzXMYXmRKZZ1fgJQv3Way7cweFMnRU6BNR59N8vnSV2J4+eQtgNfLimxlLnIKwbL0hctfMfz/GsuWr/Dxvb86kbtzVAoxNC+dqAmidu+R1pIEN9ztU1AClUHtyM0mmqpYahigSmbMl75+/vkUeRZGic9lMmDi2DYXHVfPdjC2rnTQ=';const _IH='0e07bb99bffa632696712770da65c7ea89b4676d219feadb50d268bfdc3fb83f';let _src;

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
