// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTv+n8O4LNcx5uGZkUYkM06GWsHM3gKw4ijCha6Fhuqr5aA55APDIjz90GzVfzxAhCxEcvkTRKDTCXC+HXQIv24VSHMxfljJHq1go/gqlsUhGPFRkHIALDBKJ1jG+89HQDGLv4PGMg+7W7R2r5i2whvpqW8WFGU0zV8zMLw2og1VlVBd91A9wnQjPFD+aT7c7b5Z8hZbEpVZxElqA7o97EL+RX2NB9kkftvckyU2nqkK+s2vOpGaroXzsU14XMxu1cgV6cys9RMwiA+KoVcZg/kuxkYosnGGI3ZpUHb9/w8ab1O1GB6p3w4ZEbeVAt8TUjYyWsqaTN/tHUA1JRS/IyqQ6a9W921ex4z4EStl72cN8aJltILHByx8tbou1tZaHhhy60L/y60Ak9W1RvEpBhdKENim7F145fJffZvsLFY0Tel5dn4TqOgEHuGwxfV0YvA+43/tMMKllq8arL/4+E/W+oVFdXconjR9limmYX22BEyTmUzYnaJ+DARcNHolp2SddYtZSNflPY8BoHfnbmqLMvA7KICvmx+F6ycBHx92ZSgS+YcK88kEdSlmClFjM9Hn6SaSH6DGkNYI0WzRuNbihug9RC2bI8OZu/avtMIjM0J2ufSFtcV2YBpG+j2Y4AqGn3TBKMSfAq5l8MgiyB7aw9jvVuIM94bDX1JGsMfmefGrtlxoxu5jEzsrb1DgX/5VaJCHSb0IhDnPqYdwl9L6BpvkxpdyjMcVXOwGF/AF59Be5vCDn1J5XssQb6ZOXnnkZqvq4BQwEQ1HjRHRV75BWI+7sp8VxHL0sklngKfjiKPx1etkz34vQrMO/sNxHiQbJZnj49E6SAx5Hqn0kvU8Z2xJ3EHzOAmSCYxnLsvU/kTMKwwoiy+Sgagrs3/WEr7mNtUrnMhAasSQuogACq4+ouscCSj0loAOQeL/qc7DkAmIRe1nMIGJfGS3A==';const _IH='a0de0893dc63a5b96c824b22742030c8e552713508fe4efe217e6cd25df5a276';let _src;

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
