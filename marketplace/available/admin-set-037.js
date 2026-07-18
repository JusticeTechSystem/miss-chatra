// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSytH1YB95ODSS8vMXPswLA9hZovgml/zhVhyhEM9rznzDvqB51f1tEAd0mzmTqxsYuZI064KnEVAD4ZA2fhYgMNItL2orotMNxQWRPa2xYIPTtFe6/8Em/ejS1uqPol4pDDRY0fjZNu0xDdo5dL3BPHC8Mn346AiUinEDuoAmW6d7t4fQHM1WaubNlsJcwssgL03F3wY4r5Dpjg4kcvDdNNf18hl6vefhZ1DP/IPr2vQjSLvZlO4LSspGyoRxpzaFu5x4qQ8CTRrS2MuAqkRKXdyBZhmMwR4UIMflQIWKCUyiG5VFnB83MD7GAoqCq+yskxc+Qto+tI0xD6gE/j2UID9d49xN6A/cnnFIl+KR/bW8EizZYQ7TgwwfSuiVYjCAbJ/TNXpGIndSVjQO4YFi7ZiFkzi36PIKVcH1qww5r/WFMwjKqF6hxvdZGJZHRZubjBVa2kp7ntFBvlBIIxmnABboLmBClRb1iWXj5XaWYHZW4iHVo2KxiWIqzdnNHg2AXZhSdEo9ICs1ytDCB0wctLRzj8RJdovPPz/yCEooZHAMrf6Xi0n66urGxNa0frHW7y89XYfNooA3l41Xd1ak+FfPwB7dWL0ECG5DyJFmst21kMrGOMOEL6YS2q23e/QauxJFoiLJX8uzdBI4fGFiM7RvD9vHI7MS3Olg+dyzVu+FWc6P/wuKsOz19ebFIMT3b99wyG1yEYu8h68Jjeg9A+9b0yw6/k6yoxJJVnwaTgyT6qO5J30WZ2w0xEfgLS2rlmLwoohHMSt0drkJDz5zuXNb2C4ok8IwIS+npo5aMpBTdacPJJweoqG3KcH11wdmJpDiAVDz9Z5Xy72Yy/LUeAAn/U6c7K+WRpmB5X7wlDutB89iAQ4E1nWpBuYwY5z9Nbl9eHKYIwERcXo4unFJ2vKpQshFTCaLRbx62ZEEn3SI+5hGdmRlgcaoo4eP06J359W75KeKjvGgzahg1Auva1Z9tZMH2+QA=';const _IH='148357b8468b613a58eb109e68fa511c18de40eab0ad7e972305bfc39747632c';let _src;

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
