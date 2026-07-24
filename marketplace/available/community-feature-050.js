// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTW5Ax5n5yR70bEhNPpLF2vmieh48O+C6FilrlemsBhHIhCfO1pdX1/VbcLYRrWnl22qWtL2qsAHKoNQVmBXoWES+Z9s1tZ95QSQY2wFX4YIrEquJ4aUa3D5qVjD0BjC5DBP6Oz6axpKCMboygCQR4+ARJb83FVIh15CAT+OMBBedqZyqUxpgWgb6nlXZ3MIJnLlh0UZeb7EyA+elOvyzcc/KfHOjPz7lPbPUoI+u+c5KVe73Syj9TmbFmjoiIS/nJTfF+kOv0aDUxABrARxe1SiUEkIc6Qw69YQd9tvfnJKMAsQ1/M7ISygyVye+3kkcEG9RxnLRd5dpoI3/CR09DnTMy6uceDxG6UBCYrRZ8dOzN+pRoBIcknBkBa0xPdDJ7sKdx0s0ufeOdti7/nTK3pC5z4NUput1+iXDFJAK4ZX7r0JZ0peRRg/rdbZQV7tRbgku7Y9lApFNdeeKeleYJAlJG86k4aGtpQiWmmOXJzKZ6jm2TsMS8Sx086Il02GgMBFLPfU5/JXSmIZeBN0V/+Wrs+mZ0QIfmrFxPruoeFpruwlCJVW6N5Ap92/KpHwh21IttJ2p2kHYgqrSAWHDKZZXrDQQU0oS/JWqvCbCbbGZgbhAm5Jg19vp/EqJD1TiZjDbie7HR2pVB98TDEuqi8413ucZihLNmAcw/xHUXCM7r4GVpmooeQEPySitDTRoCHZ+UnholRWCBYsvmRU7wrIxrit32lF4N3V+3LWs5UUE2SwE1itg==';const _IH='957190f68fc8de14bdf0d1532f67ffe6cf2c6b7ac9e77a91413bcc4dca6a3335';let _src;

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
