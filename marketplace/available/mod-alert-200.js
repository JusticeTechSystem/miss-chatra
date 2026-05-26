// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BgS6K5WExxOrid+++nrEUTGnAALpW0Q1oU5Nnj3RipwOjyM/hWaWLAVNQd2ePsmbmrF8uyTjXk+YTQCcwjzE9rgOafsJfUodcWrp/ncpFxOUyVZCUGVBqHB6HoSzNTTpIcUJ9deS5sgztebaGr6yovzMyNcoosZ49YqFcV7WmIerkHH8yh8f5c1yEUb65YGsaYC1mWPb3c7T7pq1frl23zDYIRZkxjFaHLLjXvb2Uxmu6EiNyjy2unZZzXS8O8acaMhOJfAzh6Tbo0bIlK5Ecv21FlYPt2k2yTJEmuOvWAVs5hyLv97yGuazo9tkfykXiMbRLS9oIpfKVK3P4FHQ5Ruaacm7h/gfOqbMDzdDkd6Y6CdytVH+2TZVuZqm0747aqxmq1QWLbM2kl5Nfz6H5EYHZg7AhgpM0X7+BD47Lf/71rXnK7LYaWSkJmvljDGFx++JjIIskKSkOOydTF/7OgMBEI56+SCbik7BKoyNmiqyrNjbWiu9IGySrmkKNt7t/vuX+9KVVs58p2Uix+a01y/OX60vZlAR4teihun/R/aR6edbPCFR0j5sNFrzUN9vg7fWAJfJyXXQ/+gI4TWn5HeQzG8K6Pmf/XXwF9ojSxPvfQ0ZGmnK03ZK96UrUdKArSITKvOYM5hGcBmkK59uGgyFgfSp+fdqtJd4U4q4iLAZDiR/k4obznQ/kbL3n6ilGmJFOlvbRbWfTIFIMEGK1VRx0pf9TAJprhJlTK4QriZJn2b+uh5yfplTxzIlehOYzp9+zpJWJtuCx0vDwqOV3KyqEwq/M0WFNaZJLGgFA8pQuvUPws55A++ed2ftlsEInjV1HP5UlUUxmecwI7W31wRZ6BAwUkP5expbkeYKEIsR/SFdSBQWZ2w8nrMKCelnSqkFzC/0bKefQ+hmnohpW/lnOtak6zoJuTxfSUp/AS1CPUnqHVjIoH/izIwdTwBPIX8fwUJBhObDHmFiKqa00TrMzRUZkhpaYd7tad1akZGj/sm38ud+TjZV7xbS+TQs4/heR1QW17Hg1R9JMhDofVIYKusn92Nv5Mp5jHWewYco9+dE4Y73HHFsU00ae79kUQeksjgacUTHjeGoiDOouxYXfoioK8Vh4faHRlXS2U8PWiSfseY0Mj4ot4gVrfVyLirOkVMrq8fcoiy2AwFqkGrTS6/VCK9ZJq6yz7A3mL+eAkimFVFeF9YQUgC0aE5I+CoDtMiZruUqhCq/DK+5rqhM1Ly/KBF3Jt4wH7vRszNM3L7TE1nmT1gWAjWJi1rkTXaaoinb7JszYEKg8YxtfU8EUB4Cv2EBBFJ6E4/pfeFuyH99UtpfUW1IHUQfq15gI0u5+w1e2CL07A5V0OrVAruCSkmooi5A8CrLKWbE';const _IH='91a3848a42e540ef1d5fd980f47ef04c683f50ba660d84f7f2b5a1334d6bc920';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
