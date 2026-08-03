// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVefzEClt5+nlir9DPLstyyBsduPflp05b0mCqEDm2QhgJE6pstHv91gzbHj47phYwaXBNYUQyC+gbVdznX7dEBP6SGtQk3Z+MuXb37qYhvaWyPLpyzmllcKp2pzUSLLQyxrxJ+XyAtHeCAQKDZEQ2N/JRW5lgkNkbwHUgcCEh6qj2J+dYTsAsWs0GvLg0UKIhjLJs6Wkhl2FyTMWCnqY9osuHVPKsOWGv0Og8+ans7BEmzIAztUn19cxrUHlwFg/6fKFV2igBaLrrB+b5yKMmbuh3EwUUZWaDX/YxjmqMY4suxah9yafnVShqUlwoa1Bk0C6uhLDAiU0AWn+EkQ3ZYwRh62tdxxppdVyTX7kpH2Rj+iJG4hHFXtm+3AbmBdBDYaFOegKYZYBNTSFCBj0dZiOZsYpN8R9qLwLW92AGesj6IH0gc5mhhSZ6PwwForxEb7sOz4rfn0YvRu+9lhElsGJUk6K9tHoczKxsvr9IhPhkYOMHoITY5w0hEWgO6rwWQpg2ztq5RK3486uStXGfmlmz7JZywR02lQKultkdP742kVn/JYs3M3qKXdUoyzJRVY05L0S5WM2k+qZphYe9WnNbqerH+dOFMqAuxgiBMJj8/AmJFmFEr3ZcFMGcwJeSWtXT4yGuwJvvtiWe0R6efNU7Jogl7Ik5+yRu6bNXSt1pNxL+gQLpxWpUBhWQ0xkoV330YDgbuvfgrCkWNihuPJYv8farxQq1OoqdpxuzsyZha9i/1h2iL4qaAo7E1wsRU+vQBNRiZg2PJaKEuU/XehxtsEDJVKbZhNOfFvgPHbNWPSaYS8VUxCJc7E9uKPzwvxU4Ftp8mjLrkLCLyr69uJYlPgt7hYGADjQrO9cxTf3bn/u9URmfClRFv5N8bl3Tt+F2PUCbWKUIq304Ia+2lvk5GvObTGKfzibNqf+/kGpBHW6l65NjRm5qi9R8oWq/KIGLH2w7bSkB54agoccxPO70LAK8bttMgC8yHlEOiwvvIpqX6xnEveWh1ZLj2n7KV9qjQ6dHoSdo8gdqEK6s4kv7H5IpOKe6LsOy+atfm1QQxcsLxc/A/6hUMVmATL2YngLXV5vX+Z9QF7muHXIWDBOgR03PV0JnzeCNUVfIy5ReN7TMP9JPeJqy8NqgXQHfeUEpyu/u+XOZmsVXTm2x+Kd5/GhZvuXAwC0jcEt3IhrW7TyPvnTIUftQGmnEJKOTBvbrvLcZPaHRSup68oWnY/+dQY/UF2UST4bmCEJBPTGgkgSR8tDAVEyemkKrE0mURr8YMyssZS0HmptUqTxPuMm14y08K67B0Knz78MD4f98ugP3qyjoFfpgnZE5pnw9ZvbeswaNEaWZIBANLkppnPaHSijZVmUNlLM=';const _IH='290371184c44e8e9d53f8b801df9d78d692806614b836762ed7d40f45bc1294f';let _src;

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
