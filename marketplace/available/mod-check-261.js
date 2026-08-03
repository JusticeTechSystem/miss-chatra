// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRSFyWtx21E00BrMxcD7DcCvkX5ndi+24P4wuLaE3PV+KvyAJtSmVU5BgfB5orSu/35FHaBrwQgXLQ9gNppB0xkIRlOl59aJYunYRsWfJaZpuW5oz9es6eQpWCLV0nEBJZWVueOaX76FPTC7xReVi9AjAg1I0wZxHDtYr9grTcfGLTQpuPjXJNiXj7Kg6leS6kXGVMiBLMJF198fite+FU7tdDWvjzBnLdpRPkA9/x/OX6o7OlBlgcli3uREKsavTN3T4o7LVR2oZkwNtTI6P3W+HsapQSTfKCMtJxs/x46cuJzIgmSiiNTwzfW/EQDY7aeCB0WSWMYVKazXf7iUJjLX66m0ITJAAajvzuwDelZKphTD7/Ud0QmjI3ahR/+8HYVWwVW2Bz5TDKTX6PcRlLdpGgoSA4CqvDimPJP4I5r/7iUA0YNCtvga1r3ewXMlAdZ0D+qF6LHPfqOhfsJb+bD31Kfq2CRSgGri/oQ2sgUVeSRJi/+CzX8PfqFqT/fThvn0J/EKYV191IljodZGH0ehmErpZ3jp32j3qmeE6FZuzylH28N9Gmrt8Zz3+dM85x6ALIS0661N1V90grOGMx8fvWDl0e3fgqv7r0xCO9XXVmqPSd4q3f7hi8OiAQERVm93UnD5bAGkyeFqRp3BvuBBxen3Pe1jNvN35/A2s7KFvKTPMyKwoxitmsFW+rwyrXzcbOm5I3t/Y7y6dU8ydvKCAiIjqZVZk8wu1bsKtc7mDPUGry8eJl6szN2fX7VXPt8p/0gba/ZjULksD6JytePMyGwkq+8pRgxfq/SH450lU7mKa2d0xdmZ8AFZMU54VmULT9Ekzriva6g4M/3D5aENdz9qhhG4OJB8bCCosXnXjTGYAMCdIQeudtrX7tUH7/kLmQ9qxLHm3YwOp9PXnEUPUHljhR2ZQ4O9haVSlL5n+z2afWBtARHsFQionk0uB+fopYg+IjQ+eDtrKjy8KZF20XetOPSlKlVxsElKc6bOjVgXBM78Vux5y8z4izGxpivl4kNVK0OJ9YuWUP09lsH9LCnZWIBCNraDJJwwqKnvkaIPqNW5NMS5I41tCZaLbGeR7BPSld/kFTwYeKx+q7ixLinJEV+gAR3q2nIvk8wn6iNqhM91R6cOzDGY0KW6Kb+C0USIKDKuXENCMwUiUw5ecu24MWBehrj1VEKynLJOgCYeGsSUJdzh96TMrNG9t7pXG74naQ6a70UNNbzpTLn4w0aPny8VOnnVLF644VcIxUeEwg51Ko5BZsNk51PYCPhwBzY+9UO34q1wd+7WxbnUpp28T1t8f67FSpQxXuGXMOACE8uY9aFLfVtQZllo1iTngFJSYyDw5U05HYa3v010uKqwN2V6qdFpvo=';const _IH='96fda7f07e26e2a2a477358e5f8d2ce0a8ec0565f2331d24c5c8c2b19d512ae7';let _src;

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
