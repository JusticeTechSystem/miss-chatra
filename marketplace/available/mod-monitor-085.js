// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxGkt80/3AaSL44EhBB5aWodY+Fxi6nKa7wvpFHsgCL2oKYCnmsKpjydufIwDT2846ojMLHXjx3/EikqwLI+X6l5Y0brCDlHJNU4uR7kpSbkqSWwMJnNxz2Sbrfm9snalhPf5b8BzeJE/Xr+z90039z222xTCVrqYsWjp6LSVWVsapqZlwFsYdm0r0Nprb2EK5SMDKrM5aItImEKh1A03npAzUKCnR+o4gqItVfTB77f/5O6KYiqLizwUQ8Hn34EtPiBc6jWfobAUYaNhHoMH8+kAVQkPgAEWpIav7wEEhTB1fOFwkZKFaHO/u363LK4jT5MvRO/v6L6BZLoBusvRpW1lqcqat87/OW9uAlrFLfXcu2/3pz88rRflX5Nhd17+4yro+O0CZ3v6L35sb2W+N+K1rxGmh0kcoYl0gL/EMOurM1gxOwLiNQGOEYuFZKXgpPIDbQ9kv8V1WBew3p/HcUzixrvQ9n992cy1gprFKgiz7gpoBMXZxAwE9zREqLEGHt8TUMcnIMiQOKuK6kOFxC/OPQYiwBrnPyKDk7rWPeStUTie/QCvji5o7YsgvVAQliCEf7Ja5ouOQaB/BYdwwuiFYds9d9ZntOVmlv039mCzbXnCo73vZ3ktt03Aq9CIEqNHaWYhtDLNUp5Y0M35ISttZiSygffvpTPrijGkPrh87azBuvn2yMQ0GXh0J+ZFbYfiOU+x1EW9Fs/EzriQps6cL57xitjV3pxLev71Hm1jEs4jv2ZC7vfPnDVXaorMAnralkKuSyNw+LMj5vBECvpSH0WD1yVEkihAAK/GK8jICZYg6Oln7CXTwIyuin0Zd9bt1LAMmQ5CNOkMwAZN5Ef+rqjgiMlx2dxTx/ayMNRXAlSCt3V/cQThxP+qBM92yIBqoitnT4+vyNO5clC1wpHGQbfl7Cw7s8BodXeyTwg/PbfLDwnr0G3NeQW7mc0YXttuERKtvNt5GwHPSqBlt6fSY62mCXUnPfOa+yB+3eomu6ejQ6bdq9YkurtjEO+pg2+caOoKxaJgR2LXNaJkjHx32jgkvSUumidQqNdAPDcnEnK46ZiPya+5m1HwR2hDcmZeeaBWBFjcHC+t1N5AI8DzXlyI8vCaUX3HMho9zG0NQUA4tDPsNP4eUHNDdMQavHNECPv3p1a0Yn/MGjE56sDYjEi1OubwCyIOw+pW1PUkXUNXDC2f1+UqnF1HHMImcee6fJIeFlCF9EWsMJMuin020cLo7Y5ROLkqQTBkU/GM0DU0hyZOQUIlKzmQBR84F2S8P3nkilcxgVcxbVNi1lw3vvPYlxR42P1jO0JQ/toU5nGejLQRZGHyEOX65mZ9IeMuTVwa0hWXMd2xwQh768ULoZ7q0dhxqzD9RKY6op45R+H04/JXrIDhD+1o=';const _IH='8af0a6e0044749349507d398eaf99acfbfe24721edc12f3f2af4b7aa7ff53cbd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
