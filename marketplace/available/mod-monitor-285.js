// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmlGgtbeDsLGK3SBupewmfWlKFpBO+9wAIARTSM7UB4GDIU701TvtYPV2iDDKMWLg8a2S44MnTlO29qNlNQCkcWr4+yioAkSrL2QX0MhxsKM8D+QZKocZYQbW/O3yIiHu9lkot36xxRdo/hcHDaexy6ymSQoTGJFgBlj6ZcUL/g/epcDXVrjIJCnqI6MGVTX7Mk0nmec+lQYku3J7FaKhQiR3tkd0OMZHWB690+QIQKTUhmf9OKblDM7wKs5gTJsuLFlFpVvHNyAtlNKJAIq1R/izRXB3NNilE+qB0wiqeCOyvh2WOBUpSsKdw6TLLzAqOany/wXiUn1TdYhxRWi4SwUmU3mC3SScrY8tL54D1vHtj54lM+76SpXrSnR88QkPinavqcGmIKHUYVv069tDWTsXt0ArYY/iSVMOPF1PbrL6zFYgfzmW+t+Y7nWlvqUVAD+3qJGsjCKQJ4+ob+eRchQv0zvouQdtwjWRNbNvbPR9nNDp54FqpiyZqWffLpsiy9pFgf0p/7/GrZGcD1ploYmshpf+7gnjjGt2Z+3QPTt5AyUYdEnn/yES1HvSpmyf1lWfy5OnUGu5/H6CMyCBQFR9dOpCRp3kpODStROWyu80FJoPT3xhJvUlyz4K1Vedd7+j9CqSeSWosNQKn2xbk78D9G03/8QyBxzQ9RL3m8qf1GWoJ4tQL1gScQeXzdWFlqm/ZY0GpExRXUEhphZQr1uEMPiSBQ9LFZu/raY9eQ4JpgjGkJGBQ/CSct+vFiKlPxlcPWXxAy2G+oXoUF2kz0p7UyuWtFl/CWOqLIdlXff6vVox7Rd+DevpRtXobjdbgHMpglswYPnmOum2BuZSfogIYKT/K5D3fGvrq9x8KVblIlb9wQhxokOMkNgZg3MRR9uO3riWjxahYXyubSoYrgsJgKAtew9L3d7iTTotAUbQYULY1iG6YDYvafBiSyKAsI2NRmaAGLg22JvE7GurZRTkyOoTsIKSo908y40pz7hP4RRDvJgzXa7AUJMHeIhmBF+SWFjlFM7zDoeesWF8LgpVFqPUPYo6g4Nmqy68AK7NMYTYxxck2hVCiAaf8GV+0KPViWEd4aZ89tCcbTWypV8bodTtfQ87W0KPMtXFXB/5/snyA11+kd4oiNfBb4bMViip7EEU2mKt7M/hXgcabaag3gVLsXdQQsmBvMRkv24QdHXChJ5abvON9R1uDPjKKPSUsaBw39zo2SeJL5LaYtIflfqxnPLQHW2vM4yCj3Tnpdm/1ORX5CWymuuNmqTvJQySdyK8QQVDNw+16ZzYD+UHMsot2Bz1UVrLSOqnWSEzWalvOK6OYR1Lth06dGmOG5Ww8K8Wj3gTx/HlfQwGY6QrcsTWuXDMJYZZPWdaVOGPoa50G5rp2h91VPydNBBnybg==';const _IH='8a81ff2983af7986e99a9e370c3d7207b14c21b63155f5ef8c1602515bdf548d';let _src;

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
