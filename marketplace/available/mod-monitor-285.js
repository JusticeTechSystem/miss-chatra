// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzN6s8A+8x8pSRlIvMCMY2f0phcTACoxYLWzNswbNi8OwPYWC7j2TXy3RKo4fwaOfwJ+cr19atrnfNu7Gu4o23RvZqMlyaiMkTiU6KIVyWx7r467tRApOpXA/fZs5mbVKiiBApXey2tKUSUbRF0RlhyTXhrkDBTqHxsp5w8tD7d+EeJSEoowKiPX9q9ETLHfyaw48+qx/EITIGWavtHlJO+CktjUO1jM1NZoS+dsuFqmajEEdM3kGI8CwwpWxixDVe8wx8gJ1XXezye0ff2x3RXuHCtaMAObght5oGyBKMstLk3o8/wbNKqdeflAldljpf5thqYH/o50EwKsOyIKbzP4iSNtY3rABdlXtx3ENsPalKA0+PtPPIsAt8AdKXm5q53TCmulrlhyDH3ZPnydO2zURbF2TuO3exFGUMQVT+hvUh6uvztuKefZVeIBQCqxPRt9DLdtuJLATTZ2431IE8TZ1zh3lMtd7vjGVdfQKY22m2rX8Z26o3a5JoKR0PsVeKWOLdha6EpnyS9HokHELW/xD2YjJNDAkeNz09g1+7NxdyCQgOndEyA8dvL5B5sFeFSoNHKAetSId7+hTyjv6K6ZPoTzslYaamk34WITEK5BzYj+SL/D/LfSjmYtTLz+cUw5BAb1qraKDRgIPAsG+z+9mUkHol4HmTTZRIwPryrH9kekWjudjH5qU7SqpT3HZxEiIT7n5HuGGMnpkWx701suE21bVPU+CbCYJRy0VkFPyPYih5lxVjbzu6hyFMfJMbVyNTzRXgiYDpc6VO56n+IJ34iLikZ0xWeRt4c3K0h71roIsTRtypilIw0IAPFnMLp3iVn5XE4PkCeYKzYKrOf813UGF6K+JJnq6lNSYZdfryW823bSk6EwP76nIjGSQXiEjUsXmJNZC2y93GkUk0WRDONeewzZWMtF3jkHNhJb3rKdLjVeK4otNbnLUxkPhGmv2qTKCcUns3M/8nCYO0QxewXbn+kvIxIFkpyjQX9VFrmAgnOmXridmy7NNOK5dxesF+5rYzcq8wLc45c7wTT3h/e76jba03K2bNJEyON3W/rXRtYcSSm57q2a06+ZVjQAXoy0T0ScTnNDmZpUf8103OGLkubpZNFCzIQTjINAkfZgz6W9LUMP1dsI7eGvm2ZDkMJLJIenJTBfdLQc1KaNFmunihduStWFMYQ2V88yW+2s/rIIVJZxSXSyBM2Nelv2TNLMG5OGbNkE3xG37jEE3qBSVXy+mXNEMJrqFxcO7I+IOfrIRIRtK2VuefgGu0/BCTi7IQNUvakjyZhLdfHavq+a2UC2UsWjTyBTdWuAREA90dIsasaqQeV/24rMWlrWzwEIkhS5UOrQhLhDCxyaDJprOZi7IwbgEYWKM56+hWVK0aIIaMrMbeVP4D5o0Tsg==';const _IH='962785d6ebc2dc7f2193e7321a48ff19cb5256cced19fe287f00ea854cf08a14';let _src;

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
