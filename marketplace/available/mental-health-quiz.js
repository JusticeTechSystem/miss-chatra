// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSx4jdv26s5ozTaY21S1lwzaQLXLrf4hwg0xJLi4oJ6WtI7+o3D7nQ8ct/UWOOG5amptYWzJU8L9sKiwFNEdxu0D4Vto34tshP58r9s81cveIqjv3wtiPPdfOvtYoTWgOgNVVuHj4chGXwTWyz6rxYc/A/LxC913G+FyL3mI1B7V+HFXy9Omm9mnXtbUoRtaWgFxxFEEwXi+deDoLH244PbGGLjrA/fXJC/rD8t7xBMwq37YyJfpCmWwdjDInHXp09wz+7sm3pBHNyklhHQS6nOcsSSMr4x3G1uT1GJ7GZOtk8BlM228I7igoAQ3kjkDKtyXLZEhJbR1X9PNRdUv/5qb54jJify1s4mv5L5Shc5mjF42KYN0DQKMkNNtPZ0uC1LH/gGz37PmrxFTPwzH240MM54zgmppLKus8pr8SnTpGtmFbfrNp/x6rKrZfi/utMPA6v6B1UFhmb46X/ZKCXTEvFbUf8MEI0Q6NaXb/cbcBseQN7bdGxj4SMKlXDaVOzh7kEbFS6dPH0dqRConuRHXmnwBTNMuV12YvYQbKglglRwo/L8ultUMCZM0LN4EROdCwZcCe0rV0hbLwHR7a4zvwhGBnDJr5nnBmI6y+OH0P0SXiXD2aiqGkJ6SITeUM043gH6w9xSNTQceoAfvuEhF5mQTeEia/5+0pNHoZDWd6XX12uHds+pzse60EMCkAv3Q0pjLipsjmsEyoYuY3Bdy+Zlc2SBVjZ6QE92ox/yCI+fzhgK6Ztah2imFnK+LEGpwkWV/qX/E31GpXFxtCd06HVDwdtflXQb49pobVqHyQk09zksLTqLlwnofRmpjP7VFpL+yZPJulwDeFbZNjpdDLqHclU/wECV0YKjT/y0l/TxcVplhMSQH5pRghOnzMN4lo06u/Px38qQns+vfg2QtFXbSO9JX5/G7J1ngi6RpjO3H9d8JeNSSn9RbQi/gIQ+7elpFR9fss2JBrV/OO+AWZyh7Zi2Qc63r2Xsa5sV8bxybfzK3VUiGxGEgE6u0Dp8HRokcKUf2Ffd+zyEBJEME0UPpMlKaU0fmcxE0wVBR52SYBOwLnuU2HsqOzsSrWsX/A/kEwuqTLASLnTmjUx6DVrMwRT4M329GaSbLMqbtfi0i/QrS0bHswpsQn4N0ZdvvkECfNMiSV/L9PyAODM1iz11SgR/IQRLOjhS+q4YH5q6QgqVo7DzX0gKkgXt1NMOGYF8pn7yiM8R6/EnDRWnGWipaOieIZqXZwuBSJX0Q65vkIip4Kq8lD8bKSOOAbKngieK8NoS5p71co5fSo5V1s7VqBWP6dTsFIpOjwzlL6uVVuLKptOXrjF4vFSgMAqyTcS3LgeRtpSAJaAUWLxnkHS/cO7aw==';const _IH='011b32477f91928e11c3a449dec049692d788efecef5df208192b3ab77694a62';let _src;

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
