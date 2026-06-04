// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S9Xv41R8uUg3p4ftxIEgKopqDmwhdqE4BnNgeLLexTZLf1KZdbWcj56VFtzyJceFmS6ElDxPQOtt2zjXxlT8PYg19UKePlB/qsMgExVhCmibEC2B57JS4NSxni9CyUv1ztFivBCLT4Fe5GTcmnS9o7V7IuVZkFzXAtMx8D8nYyANJRT6IMCBJ3uqo1W8hIZ/QQglD0e93aCECA9B21osaub8UdwrNa3A6+yE5roxu9MXOvjwhl12u9ex5YzMcc6qVRJhPkvJagg8IvJZLHGVBKZJxWXuqqoiKn2vyLIsNp6mLVQz1SltuGB1Bwb90LpgZedvI/jLOhK3b2TNZBHrZ/2h9NNVKlKceLaMdGlRfO9WuLMGba54R1RiwxzFBgJmEQ348/8sjNepyazFds/gSyYT8m2s7f7adlhE/bk5oKGjW+FhX/ecFF2k+SsoKBgd03USre5++jKSvy55UzW6PYt1AItwFTBIVvXMbFXnxlhFKMbxAcwQ7VCoTFm0NFaw1Kcre7ipOi3oHecUIP7qfELXzFbYfwh19Gw+qzrMVo7KvhuZzyYcKw5jRLORy92IUKI5S7BnTZ3hOEVRfE6GAZNyZJyUXbnxMZISn0Xw6EzvzvmlYlSkspSK2uhWKg5ANdNxdgkNErIpbK8OqHxHaCmxST8qe4V1YjUOdzvsIPZZ96MjG1BrFi6b66UiHu0Dvl9gW+hHEuTzbnZ3szPZuwGJ7pC4nSsCQI53G8chCTTa+ZE=';const _IH='e0b5fc00dc47cc3dd89797e9663068a3047263d2aa27fcc3baff39dcf09f41cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
