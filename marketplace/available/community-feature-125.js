// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr6nq2URgo34/TgK4WbkCjl6epnhAUk+jv0qkhmEQz9IFnFA16HRaScwzxKxFXJ/n9Escc1FX2WwPY5AV2lSBaMsXuWaCTBn/8GohlqdWw7qSW5O91SzKKC+92aHVvfbRYWVyClc/D2J/ap3k4shXw3hN2M6aIvx1D6vCGGucYILUNhRvTVl2n9i46h7I9vYIQcS/wJyMtLaeQ9zzVo0YHTvnxq/3jorQ+ofNsBiLJKeTpEvjyQaLIwUXon7IZetCf+LVDgij5h4t5JfItlC4GXfN6UGtV9DDlu41IewJhXM5gc69KZIKJzEWcP8aT+e2SbDv8dEvBhgQDUObh2HzBTWqzxokUD9vCC7BSE253xa3b4Of4lUUlLIk5IyChVYSjmYTQpf7PjVVnBbQypB+KVnAcCHMjwj02hN6Lnkzt5hFG9jHGGiHQeNf57zdlZ6p7m9wp9ql3vVtQ4bzYDhFEq3fbX3+zLkz6CFRFcgHiXbiR6ehkqdTCyA1uVHebIu+XaZwDxWLwzM0o+nO2guuu3ESJzwU8Ab7RUEeaIRHXRM5uKT+yiB1RafpdHBZWDhOK4769KVOBq+zquun8SFVKs9Z3OwfymNDUhnHuE4D+w5otUV2fUYgF26K1fp5HV99gzLmkW7g3+KNw+mIjO1y+9MEDqDtFVufMfNyUwMvDoWc2m9dTd2KjOoA+U5s9KR+FcD6HokJ5IRjP5cd7auCjQqCQln0eMnoR8OavdgttuBNBKW1Ca7Fr9kE=';const _IH='d903c6037ce16dd03ca830c27fc0d50d6d15d25ae33b1f3d38b083b67c70a384';let _src;

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
