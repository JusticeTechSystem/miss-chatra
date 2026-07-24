// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB53a14TEDv69/bgn93UqD8K9Bb968it0MAdLXWY7/9OaH6/A7P57BXfSBG0qjZJKy2yBMPNtJR4MzADSZTEFIZcWJfjnPNY8FqUmty2Yv02wkEoGZzQ3opxMokgNMgv+zErU8JuuGsH+5kLyRvh0+a0/Y0RLF4hI2sFvTxsWm4/Ufj9HzQc2jvCIMfr/NS5s+rLoHFo9Y+8zfpiY/X2JVLZAlLuV/bQihZf2m74QT0x4bYYSw/CqV48xNmVvxl/2egG2bg4E9EVpCm/FW5vJvJ4kydapbyU79BIhV6KMti6BEbl1Hqyw43JHyWyO45KWhlOCL3ddWLeVOAMEWBgtroSsNuDdJTSNycD5U8bVu0RD9KOj0zRnd1cAtKUrFhLNVhJZj4Ts2ewvVU87e4vdYna25d/uBrSNgEV2xb7HwSZcMMVciq5yozfnDo6e7jnZSdJuD7xBBENvxQGmO0eUh8wB5KlJTYlDArljE25Amrjfa+33lj9uR8ow2kjtBoSpu2xcX5Z40zZ6dkAx+e6X/0ISeFP2P25iz+LLs8Ew6BYsTfgpKudwg/dx9HyzT3BvCk/e/0/cyRHbyA4vxqyO6WQ==';const _IH='c818e705c20102a628807515bc2390b26e8a8d89b2ea61e8aa4dabae0225bb86';let _src;

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
