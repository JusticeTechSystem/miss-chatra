// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SrOfIx3oaBFV46dV7jZmO+VU7F2Myvs3SxK5wN3SEi7zBaO5ohNMOS7ep8sL6UHao6TAhSYRAX14MCXFqHgqKVv5cbyaz7YKYVHtFyaRUMKVHx+dtmfDwiASASV6q9u1lqzG2u/WjW6B8OvJJo50LR/tPD48o7d7roQ7BNjndy97I+yVEzJFVdZZnmiLkf2ELm8qNf4QoDi4JzGMgBEcp6L2aYwLAVEfE55ZZV+AcNCfU9Mk3ZZ0xwUrlscyeNCIrBhyXhc6vPKOjDhcYAa9kjqw7njmr87SPlbj2sycqRMNModKgoDk6fTM67WSZmQeTCXoifxzfWeL5ijMDWrkNXncm4SU/6Rx95YslK0mO56sAlpM5JNquokdSdywSSbxy1+ptOgY3RNSoS2m+imWYvtQ3y7fHTtvKHllj899vkjUvIbQ2epO3nPyLkwiwQbnD2M4qcd0gpTUdPEgg/pEK7vYqqYH1V+avUwAOTi9nbj9B048puoszf5XO4USQ9rh74ONnalyvYvypUMOR99YZwblNdoIe4KLG8wm5frjcecE4ZdBwY2ZcSxvb9HyD1XwXpvACP2JIP3/lmhVUCgt8OSMjoll0RCtqNjBZz1cTMYGnPHlehgKeYDEOds3ZigHBPCrG+mJTwRdh9HYTwHUTI6VLJIPEhZrIiJJd9p2KQ9TctvcBb/66Pu8TYnziqbiZxAaFoiDHa6pg/aQ0s7EN6J5QEI6ZaHgXsAXPerUDvXD/edxWGbZWb7WiyPJR8FSdFR2CaYrMN5DgIYmlv/H3bZ6rhje4SpU8sehQOuSLR7kZNWewwZQWIbKPOPA9Wa3MHGCxfqNoQyb67C+Pg67ea+RqNs8j9DitgOH3JAsxFENrhX01KTWMB4g52RjboiqGIY8Es2q8mZuAP0EG4FX2ZbBLeL3XxnzTjkHFRR4HWWKZ9oq+6YBJIlzaFVfiSBFtYpNln0pDBA13TFC4MW2WLijkN/Z3baJh121XNXcd5arD6twqaumB/t3w98XA5DEPPQh650tySx4lnLr8RtNKyZSCbK3c2Kq62lswDRB6xDyLwnBKpUcqCecwsNA9Zaci7dADvL9wEthygV6/V6LdvZTA4GklawVzSNsE20l4rIIYI6KPKjBSC7sJ5mT34I3viX8s0I0RM8wRVMiiXLhKVU0Fx+Ok/14I2o1Cq66/hHqkwUXJ75mm/h5ImmmUqV7YaJbdB4M2kOBgQXw9nsXNrIsqrLaQrqNprN7emKCOT1m2xcu//HDmLLJr+G9oI6VwAP5yYa6gjIf7SQDFf6tF2Lv1c/Ii8iKUomgbUogv4Z9vH9DCmiUfqvefC5SPqqtbUSQNC6JZiOnjoZNEq/0RCM4jSiOXcDeSCoT9on3';const _IH='17e7eab73dafef6b5d0fb37b2065022715cfbe6d5e957eb8d3b6cf3ccca9db1e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
