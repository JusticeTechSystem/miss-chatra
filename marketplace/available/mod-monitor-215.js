// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGgpmaSj5AnHOP5sXp/oXe9y198DKDoL2lwd+UrG7wW3rq7XYJP2P5FohUV9PHcIy9XvDvgjB6YlAjFuGjMdcMNwNk+V0R1uXImUlFYOYhmr+j2/73AMCB13vdlSa9Viz/70G4GInxdxXedTLKxGf0x7xr4k6NKLDaUGMzb276vaYXdxGIq8NDWmSh8jZLznKBOOGPbRI/jG29AmA2oKLopXuvI/exQbZfMPfS6kgVOYDHFpj3YsqOj4mGK3iSJ5WWlVsz3E3F07ocK8YfXIF1Lgel8rVtoNDgBVq+t4J/C/XqwKFujOTTqm51FxP1TL0W2w016BJWD0nXHTlRyxCVno2Pll6P6lUEbH+YqOTN5beJbaYGPniibv+eKZhs4sNwgrZq/bHDJ/ZE/U/xi1BVpVwt0ctqPwHlcymkkyliMAtiQaRMDEhWXi7k6vyNeSqdTGJssqH8zycfG4iqkO0wZl441nTCK1HbWoXOacVr8oQoUw3c2FwzIZt8/iZSgFmO+9Yh/KyaKm55FiPLNqky+7/pV01/IPqcthDi7IP1FRKsYWeixVjalLVBHBlS5iWd5PcatxAIfHrKrLRinjEF+vN96hD7hKYvuvHcoT2epjPcxRmzuZ/y/lYntN3sONUTphUY3yGpYZt8V1dm456IxDceVsqSj/hARYiOcCp5nGT1nzsGscdakcfzN7cDDX16f318G9o3n17380U/bTxUNd3T4Bd0BMrrDw/LsrhxUMGufFbToAYkErxzjrUPS6CkK4og7EwSjX4q+Ral0weu+6rQDolzKRYvZ9/i58gKJmeLOrgDH/5Zf1Bbqr2WFVE7EDcHPmcMbDuOXHJUBbO7xHcK3MYTq/RVJEQUghyTrruXi8asF2vs5s8grxW0831mfm8d1ph5mVME1GNyWOD9FVfSH2VO/z86g7DSqkp90GAH/WLIvHaj9b9JlDm8bI/Qtn0Aqv80/e7fQtRpov6tmHCNuiaopQAJ2p563dpXY5y8wVULC3u0TSR9ybsQtrexJWxkx4F27+zTM8OK5CRgaeZ9SYQN1hRsnH8dGQaIspNVVSyjEXcERLQmknYQkBs7r0IXwee+pjAPxNorQabdRVRyS0w4v13I36l/PaswFAVGjWoE1zjERuHbhL+B4s/czGoryO1452hHV2z4ofc6zxJ4ZQSAzzhYeS8mDWnWe6mndK9sxw/6uOPNIISlOQdAcFulrYbCkR5BgxUbLUdyq87DZOIe4hTvFFHIlTlXnPmQoQ7ctiLdLJcqMfl4gT5wPVA469VMDykTFMBOpbyxdXj7bw1WX4rkJ9X4vsmBPnPptTcydC9tu+yNWOGGfo/FLCR93MCr7bxD6GiyLPsdB0AR3/MhziKHrivqw9CfGtnToXXr0/I6wxfzi8PFkhCHvw==';const _IH='5900de3a2b1a1c34e73f8732cb68f6db7349ae7a6625ebc6b4bcf0b8ed293d96';let _src;

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
