// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQl67l/L+txaDRAiCUv2tujwbUkMqFzHH70mw4WSE4jGyvMokJUvqEby4jx5OGnKlbtPV4hzrGLhTMEp+DJ97mN4PQ/an7b5m+RakpjWt1x5/jXBj0/CVStq4kPvTUi/K6IRAipc52V/cQJZOrGIE28M+r1V+iFov2UzUp5cPF2LmkH+K2xxT5EVc9ncxAJTrbHno8U1JhzV/NXe/uEDzzdLgUjSgw/mrJ8ihuhGOWyurJ0XAm6zQjQIVjdvO4fT22IaGNI46XJQCqowvZ5ZICGmnJL7pZPQ7VyuFGP8bnpWFm1tDAC6xKLZTHB18q3ts0S1FcmY2F4xv1v5dF5G32YLRuf/HZTL3TLwSM3KVtIWkz0cibM1vWdbSPNXr19vfwrqZjCrDE5P3YQ+y2kEVVsNap/OIP4boweMTXHc0cZ1HZ5zjKE2FMy+UmRl06NPB2MR6cRZF6lElJOczHOQiMO+VRm8WpiK09QPdEAlEIvH7oX4s6YwRNYPfrB7es8QVc+XleGpd4LwDARcMWjfm3aA3ZfJTMjThfSgIZkIZZ05AaOPMgkaVQV3qQ1/KNK+x/nSxEaROSaWYPfEPcJ2q5GL5N9+922dkQO51U5shCq/K8sT+hUaJPJP6u0CFvkSQunlBkpQ1cCiDgaKsUHwvYQsVoE1Hy7zer1CmjdfoyVq0JoMt0o9251inGz6FfKpaIXT/SlslAKqkKt+Lf20p1feHXWDk+mTLk=';const _IH='c419e91e661e028832695b542e8a692673279afedd9f17572c461df0fb32432a';let _src;

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
