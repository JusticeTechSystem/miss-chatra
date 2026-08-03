// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSl69t5dRKETJz6J7t88tmN/E92CcR6ksVWzQ298O0HMNSnxIXd+sJHgtP1nmiOIpY2l/BXzSdjBJoS54t7V4bQTqfkyOsWA8XiBPuAD30VUDnfbjedk3g6rrRdBpm0keHEm7ja/uhdibIJ0MyQDsr77F4+Lz8eT4FhwfVJhHtx13GbZmTteCBpStiypHX3+AfCHrFmnrjRmVyZZK8F+G9X8ImtX+6KzHHZv9aLW0nllgARcQ8TITpmLwdpS2TZ7IkF63iCZ7gNPZdZL18vpLBA9+638SpJVErQHJctyCpBiSaJhv09P6z/PBVaMv4rDGjSCijo5xKSlj5YJMJtgfvcJ5yh/4DTys4ezE7JyMcaO8Xdje+7csjxOe1PJDQYzPp9+72hSbVnp11eZMkp2eWiY1x6dJ/X1cTsn2ilx4hZb1CRWJBdn7jU1w9kirXsoxFzIgbPwvjXsEcObFbyhLV16InkYTARP0OO8ldY3w6TorlvfWzQXqXZ5peQTKVE42+luvHVGGQ3llpFAgDKNx1HhC+Jn8nyTp1jAfWz/mnB4cXEy3tdD0rnZmdNMdbzCdGijl2FE1ZteuO1FggZB3aE+CapqFHb9Tfv53YUNh0PYGrDf+YqE7BDzdQM41I7P+czUbM7gcUCjvYaiSyeowNcMntOpXMRQkk5e7TRo+XiN0o3u8Ro4e1YGTGjjG9lglKm929pblLWa4kCPTVkqBRuDfIyrxas+L2NnhO3ILG9+4O7gxR7tFmYC5B8qS8MyQ4x0KtrFK1xrnCm8XVWx/BUpO6+eFtv7/sNB3DwUKJy3ohI6E/Xj+1JBGiYwX+gW68AvHRzdxx/rI5dwpNlcJOkRi72Pf1Eaf/I7cRyvSY5VyoQEICEHmNKddcym9vZCDFwMb9DeqdPbh1+YUatEpOM4McQUvRYQgYiKcHFeHYy0IXluGJFE/CmYrfRENFW6Ker9GBq/iccW9GMxCCDJdIOjanI5hj1+5ivn3wt3BlS1yO8vUBwc8j+99BPZzN417D5i9NUAiChGGKg3mpIy3S2LijGhH8e5fHjltpzln1biU8c2fonmul3hY3g3bdzumpdw4tpfJ6zr9USuyUzYdWg+2yXLUMtWn3Z1facIK/syBFu6WtfODcJ5s9KOJxR8eEbRnbMXKDBwUD3dTa8KgzxwkNjyU+jtBkWgRomMB4ekYKdKmmAqAxL/xQQ08KL5Ef6B/L1AG5kA+9NN0axoC3WchwRBo7gyM+OXNVUjjB5yP2wqktD90XZ8gTy3dWMP0aRuaJ6EfbZzkmopPD/+n6i/VadqF/RAH7wFJCxfplLWEHjd2KF6OWOKnMM+raOV3qSFkpdlZ1CPl0ZL7PF7GY4nZJpaUK9YTuOgLM=';const _IH='7a80afcdc12b68c82af6c0009713fac03056067f08d8e905526926467d83595e';let _src;

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
