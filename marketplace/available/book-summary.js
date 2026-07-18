// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMU4b8hSYsWpX3jKx9gOix1NynILMB9eH2tBfR+B4bFRrfxrcIou94wBe/QUMmUxfhGglKiOaO5bIQJ6BGdaatY7gxg1fPR+tt/JH8nPqOgp1xCiPGhOPIo/RpxAiKr1ThYf7apaKGBO46ywOpS+hW/4n0hsA6UJkgscE0xhCAoq5gKtSBoVJ5KU8FMV49kkQYM1sZ7zgh1VIuRTicMVifuL8pgAFuS0kNvbjqm4wk1RE14F/d3dGBfWXg2FJP0na5J7kPzxdOEuKqAs/WYOX0gaB/C57kdeUmiYgk0bGY3SPve1wfsX6ivPq5Qm/ztUbHdVqIagg9ssWO8Kqbbiu82oqO8KlT1KOJfIPCdWQck2Pnl9C3p7dUgDmfJW9NeSlqxHm/LPjSc4BzGyJnwYoxYjVMA89bbliDB58XUk1fFNANDLNmScvZZ68BNna0U/6bONVL65Eb8umvRXsPj1+3xO/waPvg9A==';const _IH='c26c8170dfdaf670671684110cc761d09f010425a6b68af18c0e99a5059f4a17';let _src;

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
