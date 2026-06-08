// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Za/frbafukbvf3MLOirScbBPW7uOzZa+JndJ2gSdxKsQNTT7fJHHq8NXnsEmzuHxEsWQo/VMe45zOfXHQnQEnWiyUWKM2s9deFT4a6C4+dPk7zvvnD+bpvLnD0bR5PQXcLGJbbBeLR7fJJOU1kPyhlRtsfAMoyQ/PTmuVTxYcUsOyMGB9kgEizqUtF3+5lkm+DxVirFPwN3lwlmAZEF+Gwu7j3WW+I+U83Z7n6kOL/np11koMIuXo+otz7nTxnwkOPBC6k6xyX9SL39oFPR7XNBGwulMO4MGXBnE4zZZEqYNYHcVbb777jt7WrHa1uCtlYIWctUihwL72hT6ZZvEkOI9HVfdsXJ5RZb9voyMlWvjvXoAn8K6K1r2gwr5QBpdAGG44VdjzToWC/tNywFSKl6gn82tPb+RldI7L6i72bB8o+w1/X97zgHwMhXZSw6QpkA1RFEvYSphq8ATVLHm5IqkLTDjmZ5GSrb0fCSpH/nZNZBhrJt9oivGHzHlcOtwBdxanfo3FzdDVLedqQbk/vjEvuZgm5/G1LpK2XU8r4+f1q91xIi4fMJZudmvCS6sbXpHzSPDpS81hJVbysA36vG1+Y7oQ5p2zb5u3TBVBR1IxvZfmvO7l8cN5sM99THErCjKZCXQg1aQtILOToMxs97sNXQWN2kE1g68OaospdJQ+/hlz7HCNQ3m10mpJZX0nKZLsTbHi3dxE7sEf3pAEUUcYWcuHA/hqWku+BHBqa4GyyONu/oh9mRxRnPDXKfk1YrXIjMS6Vg1Rb2JcDv7B1ngIhbk7VvtIpxLr5tid4LnSUIA3Weal5dS6ZWABOcBHtlk2mgEWCxr+f/Pzpw2YvNNS8le2ewCMmBPUOkyrOwKsFDkiWgzYtQmToCr0Hs1+7hk/Dft5TfIjIzn1ydvaLaZ9LLOLJG8e7LpfG9iqaL5Sd1jm+nbrxcdEfeHGv6G8Vq1yh3+QQOSEyXLqmiEnDjxT1An2AF0Xez+IyIDwbNAzzA/zlGEhB25bwoNocyuDCq4mUZSfuzSdEuXtJTXickTw/1U4zjgzEy16XPaBKH5FZf2EC4cClVvUcTOAh1fyaeliPt2E6cRswIZg5eEOtnCxcDUIweIFDXutjw3pWEqBj8wjknNHed2eYowoZ8jnj8MTBYy//2JaUJ07iETbDnQX3nxWzE8ohfxPpw3OUy';const _IH='f0fef1b394442034a409b4ec60a15110cdf0fd66aca491aedb2e943970fa829a';let _src;

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
