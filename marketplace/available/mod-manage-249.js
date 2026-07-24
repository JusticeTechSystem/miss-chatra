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
  const _b64='T0JGdjQ/2qErqBlNVSOzJSDKr2wmXubPsSUiE/1lLQFWQBjYdGiAl8dbPTg826CBq+LFuk4xQfd1bqVQF/Dsx6a8M1SwfAEImp+XpfkikLGeiv+wUcLNdibjhAD1CpyoZND3wJBD+kc2IUngT7zL0gYVkrQoZLQZWhGFf4OGEM9lLPLpnPqBx1AGaXiOhrTN+infnAk38ElNBbWk4X410O04vzNsCt+OCn933xcnbv8mytGy9kcvdx1Y0zaJcYKvzUsJnBilSKrNqFrn11usP6qcbRdx7EfcAP0VCzENRZEu0UtRfsUi2xSRySt+Ak3uu2EOoabpPH22ZxpKS/uRNSW3AZPCkN7ULHKMxgc+SaLhi3yGxOpeuQr6FMsvSED1RZO+dq4jUEpnkVONTlSEnh4JYEOurBUSKLw5AuHN24KRbi4zVEK6kkT3q+JqDCxeviaOUF5i42XM2wIo1DmMtOdFYrxp9fGZVXWnxrp3iAryl/GFFlGWfWVKWOQEDsABUIs1HEHqxrkbG7sK4K7vlnKnUXqZf+X7QC8WXSrnqNwQuULOt9kTaKDR47zAutF7tizNaU6O1gHKCU1opfaByl3qRCmyZU6gn91Kr6uUO3RLcIt0d2m3fSFPpdk9ADqioHUZhsHFLRI6cNC3jFZkSLJqQuK0Ws94fbUUHOL+U7YRLyLjKxyYmsfXTyj1tKixcgfHBsS6t41bx/8gUvPHMZSrhuITrxjB5gjZeqPOQGa/NbKyivKdmeDY2TaO/fTYS8aMYWUgUPv4td4jvwlKqZSbNEZwYft25RC86WYww8ChSAITJIo0szEYT57lnhVMmjxtxed2E0zbqUjQP9o1C8e+tG3kk6mgbiCIT+28wSPgzp11+ZpkGLJCMdDk+zSbdFwDbijL0rTRsLHEgv3U35CDFuG5zO5e/2iYy7CJj0ge7K31iBXV3RasYU9UWk4LFf43UEFIcYFGZs3UGbyvIAJjqBQ2R+pcMsMbay7KZz0vN48efa/bBRb8sknK6x1nGc0zmO1G/WxsKUJiEVA+6nErqnqJ8yTLNOovP+7iDK1ay0lZy4VGS5fn/kDJ9wAdopC/6XsKd1yO9nOwso8uT8OUCrV5wJSpOPzTXHg+f8dSQCEmCvxnUHP5LaVPj9+V4ghZY7ujjxzuhzQWl6//+11qOCMS+o/JMFp7bNkF4AZnunolC6oUCQutXOlGRVmUv/mpfl4hMCxGuu0agMHmw+8wV3LMZ5iouiPKPXKqCDmCMsJ1s9tgc7d1r2A9a0mx3+v3hOI6iMBztOTtlyfQjaMgU2EM0tUybC4S7OLXGSC/3asgCwIM0OL2GY1KpxDyp9+mmZFKD0Ld7S9/zq+2fQU/xVZPQa+tsPtrpgrjUEx4xlv76PSDwCRdbA3Q';const _IH='890c56a077c5fea55cb46c318f177de92de797b27d53ab7592a83b8b990cf7d5';let _src;

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
