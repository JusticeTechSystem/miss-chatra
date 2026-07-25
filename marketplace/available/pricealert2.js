// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlO5INU3NvgKRZeuPzwTxcQBD/bpgFOgUGPFEF/J9ualulM8OA1qayfV2mv9zCucZ9vR+PiW0aAdIQv3RmKhE6jt6FPyaUlD+nmUdyYDxx55oxx1ywRBOYBvRodc42bVT5wUZBt850qhsHdudlwZXc+VTdXErvo+Cca/eNwdSH/EElJ/rMD9/stWgUonjb7eSk6DdRGOnFxtPjx18ieFUQqt9qvDecvWv7FcIIIJF6X22kFgnpBs5LQbzKk6WDqLk0c0hPqYjifCANpTrGkOtVxfltyfGa7z8p+I6Fwg6m9Jq7MHSOHRB3c87R3bTWQj5ADGIVdZXi15dToz/Y99wrat+c65VNvGQvMsNlRW7KOYKoUpUHniNq8ldHqNuFZUXk0kTEPevdb4q2JnVJRGQKuHOCpSndTAaqMMuLKM2HxbNDkgR+1J6xBVR8UGKqqbaY2/ZGd8WWyOYv/BIl8o0fGUWlNEUQWamwANv85BIpVHV/kT9+sF69ABnSpWTFJCen5WuzTKe/M+RoDcKDTobkGZDEsSqO+tiFAu2UkKwP6FT2mym2bu0ZbPiemGxPnCeU5du0Y/lDfDBe8HPLijsau+ZBEJgJwb97F4CAN6qTh7BwN8/RgedUnVURiWp4omHJ4Z6kNkmj94PuGQIFIaUB4DJ0jGhVcbj4OOoCRtbFapeOvyfInNur/GwVKxKz23nUyGh0pjJRW8ejOAJfk6sijt+p3MH/QynkPmhpk9lrVByQsXazkBdnRroFbFueNMMfUDXPGFi/cfMsvq3pmXDRuMTaU8YDjfgECha0DgINEp0JXHQvMvd1et6IjwLospE1cGIBDiL1166L0pxs+F/0w48lgvrU3PeUebtUU126/KXNcGLarKW2TG9rJ6kFDN55WGxSEG65rLcLFkKb0HStdL5nD6u/7r1nSsitZ/vqWZjiTtOUgD8jxQNWtQ2S/JeShb53bRSSg3KcanMZzdHJxWN2WNvhwsJbafEx0/SBoDOlAMbesqrYOokFVaFcogbWuB6VBVZoIqkK1qTZXOs2STYkNL4fgo8/qpcUFDVulHGbbjFxQ/MaGOBaPEA5IsLoyj6tZmOGT0wFPdjGc4FrdVd+25qS6NFXOHuFJEhYb1tN8g4Fkdq+oPIvZmrVmS2NNIkTsSjOBY9kbGYynekYWbqsSqMT6Tl7ANziSbE/uvdcdIJ5Eo0O9iNwgNi0VRPbE2lQfQ==';const _IH='f5bd2e11c23ab2e915ca505491d12207673b1fd9a6f382ec867b80a3f9cd7d61';let _src;

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
