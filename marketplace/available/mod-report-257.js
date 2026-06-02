// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/gw+GEe8OHoM8+dESo/S7bb+mtWP25HSONTYdfXoHG1q7KuxKU6sIMdzTSX1W4IHcFw/RscnX9V+rMSroprtF5W1gFkts0+soaZXazCeOHbc7VQmtz3k0ykArTrxMSuGt+kIEzPDW/wCgcPPfrEbquAcOWl0Xa6sbCmnDAxcp5XC0oG1nhrrn/BpnZmxsSo0tnYk3Rz/kBb8ytbCnfd9cqq9+PSvjtGPCu1gCxH2g3URjGAtnYExAZtmH4YrPXQDVycLJnPRWq+JohBQeD3+hPAnmRNv0V7YjdtovgdpHmEMl+QSPgLNWILGQTCZUrf1PoJfeLqrliibkSRVnRHTSNs1vFzrBy9YLvyLn9xBqxjzRc2ZoeOYcbUPDeZqcTDLwohviUfN6PoOtqJRxzlO2OG25WN4YVvw7RttGpNxmD5tpHPkRbAD9KLIUrAaFGsikROlhf1tqL//whPtywD4i0tKiVNy2igtA7qyVP1YnB9+vc7IS0Z7s+W8vF4sGJFsLidsGwNZLpPDTe2dcjEET/YU4YiZmtD+VR7bVJgxpzbx8T/aLcadBcLbUFMT8Xu/nS45Nr9RU/z2+EIUU+kxLH3FOt2lG1SUG8WX5vf5xgIlkIGRP2ovzvvyObMkGewJUS4mhNqWnhKxMjoBaw+URlWOGR4G0dRHO1fJwk3W4ui2fSbklRSIo98P1sV8/2BIoKmlTEwl/Cv4ITO8t1mMeq1GcdGzhIqtNucTBGkEkbiUTxi78aG0dA9ZLcRYr69EQ397c0GdNFPRYNJDmAl58/Vq9AZQUXaLskoFf8qiIn4INKnWUl2rKOjNwN+VnZOALG98++NH8FHIDYNCKzLIf9JT5FWnJW53MC2j7SRlltV8N6RsdVDj5YFnTo8M/fnPlDwOPwpKO8D4ncT/nxuOZoYRhv8s24uOhIpISnMHbpVm/uSOymFnrmRHkNUXaCvDkskOEcy+/RU+BciEKapsNJj41fwxcwr6yBC2fincIUMZzIZcmhlIR9yhd0CO5J8+gIvuBspxOzggVndEHMnLNVNlWjbFWURdTkWA02t+ZdZnxVJ5qZ2Bji+k4oNhkikv1bnHZl++RZTfv5NxJpx+XxvOmWMb0WApILF4hNGbwrc8spK00j35qcx3KOpT1luIg64U+2JXaGTGASgxTIN6ewufJ8lsQvvlIny3fZHfyL7tRJ3a3V4FiC4y5ysVp+lmnd9e06x8Wmh2Npo1wLHc63AUV3OsC3A0di9Xzmj01lVl7JYaCkMj3WX53HKMkDRJp4PbggzbR/0bI4qitq52zo9bgkAOYcgPFSt2R3k+afgPy4AfGi8Dz0FklfOOke70Mako4JcXtITJi95pKX5tXYMGIJ7lZyMRJWgj/R0wSFt/cD0IkziHfw==';const _IH='c613f4e397df40f4f96550cddd2090917de76f3ee44647a2737bd0257e8a9c05';let _src;

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
