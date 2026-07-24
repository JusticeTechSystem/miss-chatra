// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiIHySIdMwb3rAF+tBNt8lKHuLQ8nBLWziIWsgysb1hMzVS/O3srvg0wmeWzHwOqfrNHvjgmp8hs2eQoQYmLsMr7S2iejfuaGKHYm7FLsT1AlXXifj0kwO2602P6BlESbWqsnu2wZP/2G5MYXe2SfcmaEIM1u1z2o9Fk6WpgEh8YAGczHD5LqzDAm3+T9z+IDKaBMj5Sk63azw26zlvslN/VPvp6zcKunC2WNsHIQGxWFUutr1ah1HgODuxt+SzlhHVW1TE1rHJaan9TKVhU/O37pipPnYsl+l97a/bHIQFWEe1dvyclLYSfchetsZVcuH2EMyLrYJRGXu/9O7bOByCr8Q7z+b5qxKL3KUJAsGg+YWRCDkFYxCUrxWxvutmftjC20Vsq6KWNDwqLQUvrUcBlyvjdqrwMi986Xmx/hWLjtpSBZufq+DeYiJm2/8SMqjJzCPEONCYBFgu878XeueGqcdDrzEKe0KlGo0gEeU8djYu5waSekq+A08KTWGLAvx0zpoxf82FqgWlmgEeuBCKO3kIJB+OJEpIQIwZpmLlsFdGf1Jt10V8RrSOQ1sahkp6JnBWSgslYTPEzqjYG7K+9qVmN/Oaw+treVpXT8g08o0+EMt3SaJrQwZOURY0DC+fwpViA53MuURviC9fWlZWGVQAUbECUeK4NAAggNVNOx3x3Z5UGG+HmSyOeqC/1r+FHWy/Dq7yp8ju5DMVDCdqGzCxW3wA6aT9cLcnfo8+UZy5tbnBvplHjo5L7KvNtFVHRxEQMOQFLK/vPxidLStqMHqPfK8ns3SwZQGJj/0mhTRTV4T4GV92zHKrRyogKV8EDPVht9u60UBr9Me4KovS5J75Ec7vOKdR7uPjPeYYYaxsFEGRS+EdecXPc/0BJUy/bJ54esTjb0cT1tijXxe9FOSaev7VIrrKCXVfIypItvVAXi4MxMbCezCrS3sxR7lv0QbB4eeZEBDrlvnXWtJVpeoDfBGO9j5Lq8gQOFcqNkKk8GCyf60BzIRf9WMio1cX8njJt1gIpB/U0Gw+tEPk2kpnrAz/Ove3nN9DTUv4yeqWg0CmcgWcJCf6lLLoSlNxh7vVy9wSFLg9s7PMOS/rsJTscfcCTovm2tjqEVzml1NF6o8jJOq4WT8CEjYcLzxNKOdXQIieWgbIXWSb5oylNJvsdPFzTjgac5dnYGIEqeg0nQ39gO8IVhOQYOKlClMRDlfUktZTSbWA/XjfEtx03A5Erwnlwglox1NtXix/CqUDOGQtwUu86jmR734q95vtL3GOv9dtdXpJLNEibG3uACDbwpC4iXM7kXXkULwvtfTUOncwKn3FLpM4jpeZZJj2CcocZCejpUKVm5NuK/KbGqy8OzsuwfN';const _IH='ea6da75c88bab609034aeb08e2574e7fa358cf0c5c1e30b2b497ae9762844cea';let _src;

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
