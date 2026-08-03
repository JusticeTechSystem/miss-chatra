// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmA+PcBxeB6fjHbEgEYk6dFC6R90o8p8dxjsXNhCr1x2R1pWYMkdyq7rnSjZDXrI07+MnT3bkK7z+efa8Nn88i5omD0gOR730R/Erw7v66s+GlQJWnO5wl+rninZJMGNA7W1AYytaZ2PD+ZMD/clUJjndWwDqlS+TwJ/WhzTMGrJ2TVvaPocpAwJ23xd+ZOtWF/uYRFHRKn3ihdCNkxWDgsCIMTZwaiISntm90hAAnjZ1i/pcWxO1AT59t1QJvLmGbHlVjc1NiV781LyTMd3D2ysl8k5w1Jgc5Vl9LIYB5Pyo4Ck772IjhQlPyL9dVx4zzD1eQzU30F+y0fUMIVk6eRB0A72LEuFbmX0nE3a1zQvB6Cs8t8A3Tbdm8nsgVaQIQafzpsmbFoYmJ/Yy9SBCs35dG3VlHrj8aHoivihsb828f3vAmXWl+OiVU3riZZh5k1ZTnz3LdsSfn70lJ5ItYJZa42x1lcLFjisfWuK2KcKY1LAFskcHKxkspj+wkTeiLlARcmqj/46lSq5PjrT6MgbmoKoBOBxXnZDhKr/rB0Wp3oDRwuaMp1GXz5+hqgM4JTmMMm4H3QgL8XJ7McsBh6C6IHvZeTBFubzpd8KKOnD+R8FGaHv8XuIcJHAOWk0bFNzSovd7gGrLXSbUFTBHkcsz9Akktfp/z3RsvF9myxuT1MXxwZJkV4SozAV+1TlAS5OfAMZqdILpqf4GQtoiQpY8KNzVXz60tw3UxuCKQ6c04VgEGqNI00ruaETpg4NaMaDGrN0xn7LE+8ju37/jtzJ6VUzqzX+adYrv6BWBXl+pfGqSw2nKIg48sj8QU/Hxi8H2B0Jr7tcSxvMnlAs/aX5+fOTyLMK0oNNw/1r3LonnkZN9BhEJCUFlw4+7XbFvFJ7WghennxWIpwRLWrYD+2IK0/n34+bIEw4P8Bb3X9WlwLnmhdCcZz/zKuShv5yXdtQHbhHGEFSj18/JMtVs/kRnV8ChjV042sNL6vs214JgZd6JzKfua9ybHGrVuGHaNrSOe+db3/DKTg2XKqOacHz+OSPFTQfqF3kmpt20TGtqDbjfp97zkSmQuKdTk2I3aTzOyZqiMep3uWx3yVDbXD25Lu8BVuu8DL0WqVtwreyA/YuPVS1JKYMSrVUHpzJEeODS5ygRGxdWxUfSui1GUYOE1eibqYZZkLSLF6YJ9dpOQCr+5ELHElG93GNTsq33oj16S3F/mdQ5GmWVhnvu6pMUj6nDdtlmPfZvCDjOcCJtr6QrDMvem7SPC7ecL0wrPAybIuKtEehQCCkCWBN9mXZrvzgEkUwqPmyDDmos3fQImOaXN0YV42d3YfFB4q4P3JBqP53+IvgmP71ygnn2IFZCn6M+b';const _IH='a55e5ac53b67ad4cb28dd426426f14bdf788937bfad1e1323e1396d26544d3d7';let _src;

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
