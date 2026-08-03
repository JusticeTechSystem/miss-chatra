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
  const _b64='T0JGdjQAbbzDkI+XTpzwrtr4r/N+UcRYaBFbTgFpZQUkP6nlxPy9PTAoQ0FJz82/m6WLp4sEMX0E8AmuB1zqOkUjb11Lf4SWHg3o/kqnlQC8UcpTMKxTmgk1mXV1gJHPg+1py3TyjZjwXimgeGGDurTo0siXjNlCsojvxbag90CloqpjBB7yWzVExlijbRkfunqgYUweHVpykGpPYfWN34a0L9E7Reb3bCQ1q5TVz1wRMBPZw7Tk8kmAr+9Gvj1wLn9v1LNocT7WKm5pJ2JWvbeST+2DK7LkjiNpMd/Ggltic0BawWY3Ejg6LVf8GiC8Mo32yjmxIIbjcDzjj8xUmBu3WyeLSuLpfGAIbd0kNyPBZMA1lpeUWyR2vc/q+DiFSdjgXus0wbbToNPkXCgKOyMrO4FpDBybAIwnU/nb12tuJiBI0dNLUOz/odsmsvNgYx2Yt+c/FbXM1ym97isIHjEiqjdMfgHv9Bxg9Wsi3OmpDHn4lExQ+rnZFjE559RO7vCcXEJTIMYbKqRe3vVszVmn2zmeq2OSCIvOiTKFZ3rhKdjnYzLXIEMw5PCH4J+2UfTiLXQJl+gQ2dphnmkwFZnrC3U5ZJk57yv6bBkE0bUhq9vB3Ljf1i6rNgCTSGmjn0aEIjK6Yn2hNm+1W7DMmPULnngTZNeaieFlhlkeOyvi9XkvX2GY7STbum3jc8IQLvFXf3QX+otdaeY2XKQxfnGKMXVoXrY2XCHiO1gN';const _IH='57a57660adc854ab0445d461b2214189f1de2e9f3b5e4297930eedef1629280c';let _src;

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
