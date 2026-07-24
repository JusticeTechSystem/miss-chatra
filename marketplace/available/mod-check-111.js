// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYbbJNJp09vv8i+OGYdAxUHNqd0j50wASLkHbMrH3IUyKeRD4zL3iB8aROhWZxNTWPZL5c3hjuzSYFXPurQVoFfKen8+z17fS9bynCg27yZJB4K//ok4L/26rAtY8yoFPJFtdCRVYN0W0Fk/QiyThhIoK11TCgxA2jqC5dY96bOYy2KOrGol4YwokXJBjrKkiyqdYIdN4RAbSnF0zCaGXObnOSKqFwUx2yVyKicQan4duvN4ZlYS3xRWB3K0Ty/Zfs4ACZgcpn7k8bz0TuvCdHHDFNlMPCJ2WyPh0ze4gNMn07VMoRjt7nX5pz7eD3YQ1CjB0gTNcoGiILnBTMuscMNo2Y9dqtI5+Idjxr1uDrYGtxdESafBmqNl7ydTjqYRtKcC4VPvGk+cPZISayihWNCzFvqwzqzTvFZURL8pHBOB/6KXEYpPJEPXBYx8MWV6LaFQXCFVWN5gNOUm5xeCdSxBMtf377oFjiVZ63csbkGimpwqaVJ33hZ5Q+2yDuAmztw9KxYL5CAkwkMNX3kaxQTbi78rwgF2Hw79oJU5jmUhpmLSdrBm8NBMRGdvC+45nm7Zcrt5g1xnuC/OJ+HTat7F+npN2Tk+nVuHvF1ViZ74+5jprphtcgb5vwmzGxXcnqh2GiSYskl6fnUnQSzxkk+6xkYzYSxZNMd5e2IV1j2VRPKrxynkF+r3Uo3Zl61/ia617CXsyR5R57gg5zyovWI3A1lLihROreFjANBn9c4ujKLOLMgVQm07ZJ4zbfb9NQh3JGySbRTDaDVX/qeSG0QvZ0QYQAxxYPeL4QKNNBg2VQYxWiOuwuavmMNsaEHElW453Ulv+I57ydPwhGdHUuV+napNqlnMDzwnnRJMiao6mvoGOiRb7J2pdpSqFFvA6AAU9X45nG8uMKBWhGb9Za9nbWgXlmcuzQJA02RXhhjb71HXHRCwAtZfR45qdg6FbFKg64C+pQMFJsQj3H8LeF97BQhjAF+dFAj+A7H7Y78ab4rGf84j+XE2I4h8dPxSewGMgyTI/XKh/GfA0PJporofwspbVTQRf0PbxJbd0ALb2BqwGMuGm87E7xyn560j6NuZ1GGbBPSBPhBbPZDOS64R895sHj04w+DyESY5fRo5XONridXqaGbe1DzuBRAMnBJwqd9Av8n07zgFrcHMjWbwZb/CkQXBbHs2Xtr+UF/j2a2UHS+heMtxIcyF33d0SmMCUNM7JJDNv4ZIWOaTZZCKfJba+HNuN5uiN8TIVfng6l+VjA0U+b8FbjhTdML1igxKF45YU2QSEk2G1hCiyK/TpFLjMUHClMf1XqgzL2twPMGZy5d1H63V9R/PCs5oyLpHSlQIs+CZqwdknS4LWysYEflsMSQb3MIVdBjmo=';const _IH='f10a7b71d455efb523f6e2e43b5118ebfc8c9b9358fe3d9d0c420092de466b9f';let _src;

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
