// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz16C8nMRPO1Mvh0d61xvU2150IsK71W35Rsq2mGPl69r+Qh2z+CaodcSs85zwqW2cWXly9xiICqgNVl/RKEAvbGbWDrs9xFpNpT+yBmRvPA5ptm5i2UXb+wqYVXciIBoy5Zx0fiXf2lVVcEHk+50iSkJoMRV4vxnp4hU3Uh6aCjTHUBzkyXCVYg7NtQxJMzSl5t0Wc0fre0Omw6PZsUTG0W/AFsGSmGuPxdwt2CsP248WD3uQ2wtZlACwc6QmE1XfiX7ZYYKuoc6jd8WYomDIqUU1fqpJOlv/08xbpYybWaocwyhfzCWBEZip4IIjRp5EvL71VCLSXzIVEq2HSl2+/mQ06aMZon3bGd7CNMQwWwiXNgteZbZAIo/jeT3GQMOLWGuKuUldVZ4n9oEanF4N/d2j81BGyA7gEDR9JMa4DxpdyhGscSIDLkLKsyN5DibGww8d9vDWLH5pbk0E7wH8O3BgrVj6cCEdKH+RCY7U5VV4ePjRvxU7beDHJ8wQwE2Wrz9JgJ9O/P2s3ksNH1XuZm0x//h48CTbFnNAFTlS+ZXFwvvNrBl4vrVyZ5OLmVsOM5Q5zufd8=';const _IH='fceaf6e89d95f380fed447e98f4e95cd654cfce4d88d959aedff2d686b72bed8';let _src;

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
