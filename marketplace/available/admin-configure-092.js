// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5B/BIzLIs+HXIkFSdvk2OY0Y9N/5qC1hCGgplZAcPOv4Yp3MHDHsC6pVApdUGJAKubwj/0YmwyLugaPUARuz4CKiLfq71AqX7Ku1sPLXUWMPyLutTHP8SEElcybyn1Tty290tD3dKaFC/nyYpdlOOfq+EiAuL2EXeeJ5pYmuc56vyekkh0+zxFmIyXzOyFXtrzUVSGaZz22A2TQ1g0fSFRNvYa8GrebSgggo0nPO5DnjSadG49U3OCmSSUWKRVHWpDQN4UKAyRCJ1pkNJtGI34KHjNtuZAkJhtJmXg/6dyYHeYZSLaHVu+rCc5k7V/1Duth/o8NdfukyaCbzMqT0h2tTaSbeCOl3dK7Atf881k/WOluUtUptzMa7LVNlQi55PvBftSIlgZj7GfCay2/3zki3h2qb8uA2yVocWpMMlXWNnrCxkHkKNLIpSYYXRuT0edVHMcQ6FmTkXF+PkcmkOQzh99cmN7pYxC72ElPaflriuUlll+Vym53r5ZtO6DLiLCi7oOmyjYLk+PMyTgUawVPjQc4KC7xl9VKSKjaywBaMpA1GSqDBt8WFtFx1d2LlEOO3knmbckf7PotL/fPUQUX9NZh8DDytGxLWsBB5L5el2wrwyCyfj4YZW2ggv2O9A02mZmI1yte9cUIcb+4SfSEh+nyHj/5P5U4Q4Kb9i08xAH/+IFKMQM0FyrgQjC3wQrNmTzWFpg78kiB2S6VW6TylErymXa7D76keHdnfvs/DFdUc29zvL6WoRicMVcWCbOdE/2Ypwat2MdnJ0s6Rw6+PoE1wYJDPFRXT8JARPq9Us/bzvLMmIBHvTlntxEYltXWphO5sPfl4NEmmcTV1vSJVZeLiAY3R2EJ2V/O7fvblOiINQ7QQQ/vYtoQ8BGdXpzLwT2LOnpsicM49avZnuqz/czLIPoMEpmecufBkHid+WuTrzOq+cml71c/kJfHPzpGjOqmfFbIAiZUEhZCQUDPkR6eR/3tWO40CGhMI4ZsU2EQpRAmA7ngUcRVrp3aGOs1LLAv/T5CmdVEOe7yPF';const _IH='cd666348c8b604cf9816e592a3273a93941fe59da54f5d587c9c7700d9960b7a';let _src;

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
