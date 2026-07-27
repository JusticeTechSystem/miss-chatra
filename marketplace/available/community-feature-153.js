// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzRWixjezif2vzHi/vYOHDJ2ENZVZJ6vrnMBYUkd3xbIT2OWw0La/LFs/0+jPnUx8ic+1KYvLKn+zHt/5vd09Pt9qTNAy2LNtz6cg4Pc38L9iOG3ZeyijTU/emiVl9KHNxN/y8LiQ3LQM1y4FaHYQGcYTzNNjZIxgzbymtEom+PeWgypP3DHHjXogp0kvzHOJ7sDZ5cxHXXqPsWnoZEps3AqRfTGXJ/Xl+GCnM0SXDS6b0EiD5T7w178KMT3fpKSPeHVyTzTYeNUcL5ipi+lXWQuHehOe2wYcwx9R+zkof7fIuSADUbjejlRzzBaPsJsXVNHesZc7NU0oZwzGSqCu6jx3jVMrBHxjFxr2tZKURpt+QBWj0la2xb83bd0O7414UYzHqDg4m6O4E/rd60F6OlA3bq/fI12bmDmGlFTTM0n+xC7AC+THfVtqOcG4wLMcaeq4PwzK1Su4ch3lppP/LT6hlbJ84p38RdUvulTA304NnvZj4PH6B0OpBupeWwLI69UkiX+5iJG40Rm7+iTPPMtABcKCU4tsfH1xwjZxoDdQp1N3eyEa6pQOq35JziEOiW6ot95/6grSziFPMFyZEhcQj952gS2SBL69o451O3hW+p8xE60PDqTwrHeydeJMzYav+FDa/K/vyD1WGUEsROu29MmrjbtEcDxRH/FQifTCy/XEIuUxO7SUIVe43XFGYDwXBgEeIOr0bh20onVmWYl9W4N4sP6PXT7uryg==';const _IH='8447e26536bb6f6fc5949e0772a9fb7374501047a679b4eb937e3a8193c2ac55';let _src;

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
