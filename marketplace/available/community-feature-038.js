// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tyFCmup/d/SSn9uTCeLI1xvJHwlm/vkYRpKg5lD5ODD1YmvWxak3lVJc1uW/TAml/W3+epbnrx6kDlBaTIBApJJzUJa8hday1JLwYre6r9nXtdf5B/uNVGV8HT6/lLAgFauqj+Bpez07QcfC7BFqe0OnhN0u0IyF/m+MWeuNs8ZgOBp16MsRncGOeWmX/rZrIFnjL9cXe3nOiPoNr4kr5kk4EaXikLor+LE4qZnTGoyfdBgTlapg7aF2CNfJ0j6kiK92iJfedd0koQYaYgRYrq3pykgidoKN+fb9lq9mUIK4eOBH/AKR/kKdNJ8v/62PDDfTSQZdT5yH0mouSiI3Cpbl8iu+0KjNs+eCTbB8fNraO7IYNx+Bc80oZjRi1MNBYdZCVWQkXa02Z7M5Ml+fE3V7HmC7t7e5HZRp69TlvsJV0VVNBLJw9q0i0YrZmAk4cB375vCZDnlJ7nkbEDNjFZXV6jq90mZzd8ZmxR/mpgXYmm1dtiIBTigTcn7Gy6ZRiUk12nYBN1GbrNOh0ph+ur1UFSaHeZPkwUk5lXYfgspgBvBt6k2Lbjzh2vKCxfdwt0xZKc1ow41eMO1Fy5flLrjY61SmqKxiXQNMU2Sc194xF93N4BXvOeyjoANY6sZqbLvFxaP3kjh8bEwOGpvA9xA7xl0MbARZcmvufjNhTuWpefL4YxEdtBizrN8V4GbnRfKVLh+RRP1o+xNpMDGPld4Kzwd8fJeBxA==';const _IH='7558ee8aad0d15d8d82976debd5db3de7f90e5c5883ff00ccecc191f92eb352c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
