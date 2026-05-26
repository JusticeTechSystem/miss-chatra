// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CbtFF/EajcAmEJBCSTwRHWG1X43gQLWZT6uNeoY/n/ZYZDHxskXpVkX+m8+XT4y64hyXUps2JwqUX6AgQGxgz2MameNBRbtdB8Ssuf4KE2/dx9T4qtQDuoV9ajFoiZdALBiYRQGX+sHNWa9mkJzfOIHPLaepNOWx+TwQa0BH7p/izW7+9XQP3id1L6l2DU2Az87Ws/ZE6w1RqoEa0AWb2yAPkBGFEtXIKX8glzUWHg/iSB1afeQct0c7O7YcxE2zbS91SBPH1wE0rMCjBxnpMoPnzMXb11u7iLMgpg/3GOuSBfB2fApRlfCQcFEN0YJWGbs4qVXTwpokYzCMetiD02DxKWYZB85ep7qVk3I88zJgrhkY2UsJVqcxqTCoTJ2cchF53BUQFbpCvjvsKBBqV3VLZL+VqTssI2il4nk5dkVDGRHh/7QukMmS47MB6TdfPrf/tjurCd48BbnNblUwtK50DXBRs3S3yaX+89KkqEj6PlRgPrZthx8KakfhCAm20xQvLSPkw5Sp8gXE5a+YEQciKCnNY8H77EIvswcpGCc1vZsszTYPiuYo5EwIc1GbggoeUJvAwUSoYq8xrNzXHAUj9vfcHbGL6fQBuhE2S2K9oZbUUakThQEpLk5UsiRpuohhBt5c5cVAWw3lUf18FEB0yg7e7HsByx3CgYoxhrcjePSh6BYQftc137TrE9dekxkrxVYX5BBpJRdg8y+yWwz2+jhCLLq7eVerr0FS/pqRFGiQRbxpEA2slfFGScvkVdg3lVyYadSvvz7X6GpZ/4QtTMVS6R26nVxeV9sN7N0wGS6BimsoNBb6SVY2nMJckzjwWsUIJJgrKWEoMWw=';const _IH='fe0f2409df389cc352e279bb2956a3ccaacac00c250fa0d68fec1b2c86d0bca4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
