// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7DvJdnKRh4PSOD/ZJaBbq/goapO0+CIDGTAfk3LYgYRu/n2FozVZNKf8tihZcL42eESe9Ja/j3tKgasFMFrH1uyhxhGrAgAQJoQ3eig8JVLGsowz64rWhF4/baoze5bbpCagzLjEC8KFuip9Q7X7i9GYXtA6TBsDxrzM01CbhG/YJut7jjCrGm5sz7dYujFVMWsKgF6roaaMtVCPsmVT/gm9P0pjulXwLj0K05LVql4toTXt4hRWU4vwlLMAeh7ghx0boZpPWXzLJkydbBGINHKGgEhGYg832NuIG6rhoQ4J96w06kvUop5WqscTKFd9MY37Hr8s55HUu2XiBLZSWFyDRdBvVH3wOa7//O63NMczv1DZMV7B/ujQhIAK0d5Q3TciNog1D6QFIYDI4jUvx9viCKcv+H+meDfLcvL9IVq0yx+8imJXxOy9HKold8gLhIrvnEpOCLGGp3L7FF02fvySmlDJ2xFyRDCQHmxz2MV+TOnZU3T/0rT3uHDXjMTcoKplomOIAApHX3I5lRUgQnkQ8j61z0WUql8wTlu1Mx3ckRNF2tKu1PvNgEh4Xs1imLMPcpS9Y0IPgM7RPJQDVRBCUZjLYNpjX7KJIpyaSDq9kLLCagMMErwVXnuoZZ3I+gP+FWtmjn/JvU64YQ7/znQDaA9hcDG8UMgzyvPWPfDZHX0mitluo9+b5u2SKJbny8HZ0TB43Xi09qRnjMKV1vSvkZtkFCgn/Xd11qPhBe9UIIh+JF+wr7OFXwvDzgKC5Uw5IZBHapAAgPVn803cEWbfnzVBK3ZbVKsqrPgdq0Vdm4la8lyyUVgl1+Hy4swOHVxw69nDDNrWX8d5c2x5jOTOkKnuB7zXNAsWSLhVo6JYyAGRxetBYR3g2+/SYBdkH5aaEi91Gn3tt5pMCkKj8pEd1mriATQ4omk/2RiWfE6gZQAXbjhabsaH2tnlV0gK6gm8o5AScrAqU4c5IS9pFR73Gb/JI6pFTFJsPU5EFokJaiGPfzGYEKTfKxcLXCpDx72YRtYFlfaBXiOk/DvlnB8ms1+5zS31wjmiYWs/BtJujsGPH9NZD6WTU8eopWFSOCV66z44t5a7NYGgJPFemo1YzZpsV5wB3dVB007Cl8YyJko4B4/UwkdHx9iCq7A/EK/1r0MQw/ABbtgtzC8S/L5omx3YNJDBn3w5b2o2syvXJN22WrjGKCCj0jN42kzgpmIYh7QPs4PwAPFNB7ZV5ZPYD9LtAK3leqanpGm5EVwsylhxValOhSJbtSjYeTJfXVrbOdeIrpzZW43Q2RquZErth05f1+wsBgvZCnb8nISVjAOJ+EYMUiB2MlaFX6I5f6EUEhXtcVwbQmuQ4jqjDLang90Yg6TJzks7YOZtfa5n/QK3RuQcKXmqcXUx96neA61v4JFbsE=';const _IH='441d339952eee7a86455a3cc38b3a4ec21ad791444bdfab3ea0d5220758ae134';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
