// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0DkJV3FqcEcVz52wVgImrj1O5ZVzD8VhFezoWqrZ88jdVMPP75qjaTwR6c6raKSh3ionWj368GZUBUvVo774DHmW7uRRlMGf06R3UZj0NL5Btq7Dm6wNgRFJv9q31FF8d8+nEbQltxO8xeHopH7EUB8NitQbQIywxXKsKxpiz4kLu/x6gtqjblD3kZI9rj63RANDM5+xpMy/N3A5sivX3X3/yN4f4SY3V+rXSi6LSYsV/zRrehySGKJV8zOe6eZg16CBiVZEIWgkdY30OFgRNYPLf+sdrlVZpuAhtcdOaOszU08TPdViDZSEn3XBN4OfSWCJmWZuM5Wd0zTIU1zeApEJnzX1OU5Mf1HM6od/8cLbgkPLhvP1PcjyIdWbjsg+A6cJVYFdvxJn1uM89CB61jbJKO26aSxe4Av+IjFfNPWlmNltQSDjsrNCikYJXFaWzFCib2eqKcrrRXHpxGuUfNgnwQkMhM/qYRd2IpASx3dd+ms/UMxoNbMv/r4CyDFpQE/YEZ6PyTID9kE3yM04eMSe7Q4dZNcQVVz1u/pZVuDEaLieZl3tyzykdTWOcRGQaOD22nnrv/EYTs+rPqUxNmez7meZiU0ypDu7Ew0TtESDs1f8QDp6Z68h725kj8LARY9j2tTS9plIEd+vXIv+Sul3qhQHLVtbB/2tPMRma/T5ARiGNg52Dp1dukZM1jkXPfhFR3+NqW8djD92SUswZ83+Zr0s+SaUNlQz5pp2hRy/rAL5A47IstI0ScSCIg0zxZ130Haaak6Yr/c+BpLnlw46GYOU7NE8addLxrCQ61KqCiomEIqSXbrrMiRe6xBgLCYOWZv6rJMDbvG4APaTyKv7ZG5VFzLF6kCSYgVWphNuDYP0yXMOItUKksQPsSFPNHA57mbGTJuVRLFup3suCryTCTvmE3Yl9NbRO0s5AztGIh+z0NJZ98dHnMvrOVFY0nP6NvhfI7ClanmMPd73QgBYRpBTmuogbbBXRd13uyliPDBKq9iKRxDDLo5Ltm03wi/lMqAHEI83yHtZS1vOsrfFvBJ5Yc4Pkd5tnU3RNfGJxlggvVa+3AxUEqkwYMFD/u8TBcGtc1dCMxbm8ZVq+8oc0qPiRkpK5MQ5W4cJ/UiVyCOMxZSRvTkWt8juLtilmc/N1jtv/ZYk6YU5xQeafLpmCENFPYOmPj6yivVFS7WWee1tJLnpz7jHEDsmgSmVpo72HFUgx4=';const _IH='6b6570356aa4dff8b988f0028ace0f5e59ef3f241e94a8525ff28260d4de31bd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
