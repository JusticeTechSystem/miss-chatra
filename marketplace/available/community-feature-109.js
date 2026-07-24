// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQngKnkHEuHIlkYtLVZHHsE3qGawwazWthsMP6UMndLpomXGpRNGeQ+EXvwyZIbZqKHoqSrwFPeuUHncPlXdX5Uu/k86Gfz6uwGoCGIxTp7OoOgd4kjamU79Gn9i4JAmlLxhnwLkvPCXnCTKT/TJoj9VekQO5cTNS7fVNu0gWLM1n9Qb6Ts4xQKwAoZpU3DM0e5ho+/RT0eJt8Znq+Zw9dUR5YSacjLAtPSwNdo6BM1m+exA3jzMjqlr/uXp18bDcPhwkTnENR0JzPpRN1EGODhQN06pBrMiPct2is/VrC/miSHKCrb3ytfAwuftpbPCFLYMV/qrwEe7+1scnq94HHD+txtjV/MA/AFdwx43gcKyA9/GpkhjX4GU6YCASmvtEr+YhlVzIhjyzDkEc3cuafykutXk6rdY9zowgZDT5EPqeoNpGl2WQUUWFNs0xhkZ4XE0GPWHTSfdMDrX1FpN9Rw+PHP/VnFcEtubEgqiBS2vieTbNcnxZztc0P+WBHrqwS21DeQzL3PJrAkbXLLgD2rRUbdYlW1pFURaXTnetVgQpi9j4lOYIvchTfwacE6w8whRNlrrV+k3LakQ0xM8jKUoXMnjZT3koba6ntgLGbjP46sKMRmQqurbI95hc8pkW9B4vo0MTgSmJdmRY4s5Kv0M3lH+Y6javh/j9eyu69EMMgvrhdKd8YxywRbv9yiDP2+AGwuO4oi8q3J8zJl+RIhpkFJ1TmKZEM0t5zU2pZIZzwsuNr3fg==';const _IH='c2ee1af8d5a616282f87373ccb677d755505b92f96d629751adb3ab28b7509fb';let _src;

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
