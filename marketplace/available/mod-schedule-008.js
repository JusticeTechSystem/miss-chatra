// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrzaso0T+HY/3XnndGHpMdc3k0saMS1eraDVHCfsqb/2TwUr6/OG3foJTxyM2QzGFSCLy8kWfxMkw+ZOQ2pkFu2RrxNxBpduSiAWc3JdCM46AuOKyoauVYb9lg/HFH2s6e2TMwoL0BkhipF/puoRaGq5bSk9kMjjpPjKQmgWHuRANLRCzn78fVk0zV6BkrVu1XrOziObs9QhBSnabIAnNcJX3QxfWbABT2O01//zDVogmmYawc7N1HyPD5ObSEnDW1UtZ19ZFrlx+80XjmjP9r0xKtdJPlw2A2YTXRRBeWnjYbKqYZaDuSnuguNueN8CMVp1dxG+SQVbve4m/yRDr/Rbto0ZDsmBBem5yiX/XbvHpZOC4oUSd5jdg887TGGx+79T+/k6sIBo2T0Z8eXZW6gFmRRCf4buPTDMi8FAVjlF3tQcYWg0b00PHQw+QKl8HAfzdRU0JsomVjHCvSUgRLPdwgGmXZaBg50npVi2vE57M9TIO5zYWyuI+gtXtLCdNCUyTAdDOfBxtQ7CcEisSKdof8tByzZyIpbu1UuYbLb+OeBBXYHMMqYJwE0AVFPyvo6q5b3lAzk9zLLWqCFXRKUa7l37Cjkz4V5KBkjTy367IPetzSwqAAeIEAoZ/260talJaZRmB7bT6MrlemsNbCbRbZjr0el0MC9nnicryj+F5hkdBgsPJodUIE+Hx2DcTfCoMOvE5n++oNXT0VU4vgPebOmKtt8/f3WnLD51X++YlH0N1XnGdqKvIFSs8HoqcAgtzkaiFX/cIfU5whfDJBqg6aorR1XUthOvwW0OFlNS+Qkxho8V5dqRazSa/vjBU3ZeKkNfYFfRD7GhDU2cETiXDngFn38KMmUpVYI/pV71QhVWxU1i5Dr7YvnwheYSkYXi94oPG3dY8eL82j3LZoFax/EwWQI0Q9ryXAaHKiNJdA7rtMF8cIdtyVFbN+JTxBDnen6qm0C8CjL5K1woaW1q7H5WHX06JfRF31bFp30AJVYCwOOsfgunkZXsqIeNUV90IRMJ9lBGGqx6SioXAINT8rAHrPd/Zhu5PuMF4kFaCwSyTd9+vs6R++na3VnDqllL47YlsfVv5a3awQXmVZ110rP2pmpuSpsqDY0H26e/S2feu5DL4uFujRX6wlSr1En4mHPBVOa4BEi+5hYvAsYOUE+VBgr28qvmIwsW14xNCKQoKuHy+F00oQBltYRGBuKcKM82rH82gLJjBpHeWWajXNxeV7vjELeKq7c1UZ8OI7+sLpNFtvtaPcExK5pf99E1gMRmSZBgIWPtVK6CN/kET2dPk421mIfJqufjP4ILeI2vYGyMttH4E/xWLC2rqkgFZqF0AUA/FSiBnIfzIgAMDuau2/sbvbSy3Snho2UF4vWyXnN/96xrtk4FqfvLZRtA==';const _IH='8c5bfcdf1f3c4a0efb230486e7565d4f2ab559d8211e46c60dc54a13e6bb9f15';let _src;

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
