// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ROMu7IOtAJXWFaSPL8NYIsnrXCi8AI14IV4PFV8eku9QFz4YTI86BXeb15hALXm+wzWY93FtfPMra79+iBzDJuAGDw0grgi7d6WFchtZDpqI8CS5RoClRjZ4GbT5bPkak9rpNDuHzvZmjCNAb+Dj36jG+ZIe1tFmX7ptVKOO/WrGhsBKJDf9yanZ2tRS67QMLkJ8YKWPBODRL+8QEC52xYjXAe5CGAfAuUKm0NiLEfsZeqfR8b0AEfJuP2a5a1nJ0yYOwyAHP211oLK1YtnAb8NxG+0IJdRwwf4/IuEgUAtuoiwCc4uF18fK//LtRWHGxqvB69bMOGw+aUWtfSjzv2cukZ9576cx1iQypD4KIs+J446D9+ndCVIr4y3usDRtPbwByMwMZ+l3DJiaNTOSSXaVUP2vADvtivbaOQ6zr4PX/63rnZtXDORmB0RaNq99uQU6cES5ES5CKwUe55TYzIhUcswuXQqKpEMLxaOfmk09tWZvqKu5jbHSOzZzFQ7Zwt0cU/F6OGWMrH4X1e8dzCXBusSJEmqCqzz1GDdH1Z+kU/OExSF2UZyUoVDMCz8s/IjA5cmP9/WqIuc310ii9iqyLTdkDNTMJGuqHO3bLkJha7Sz9la7nNtwCvfObrtTDERyc+FIEurE4NUhShEUg10v8+SZSR6aRTpeJFAk3NYa5IkK/mL77pr3qFgi/MeCPt3C4mxQ9zhnkfhEzY8wPDBLp7avDqL3aOYfMKtHk8eTo64R2nDxAyRcc6/WyJxxNW/ViwpnEkmobNVxU/Sn1DdpnNrIMuR6VZL+qieIvf4U0utalEMdwKynyPfVGCMN606kLE1J4u9/GgXskcW5giUm2a7p+P7O6wdZV2J1yWZxNiX1nF35rihlrVPRqxb/57+ePiUv+MIPbq5qj4KCbadUKst0c9Bh97awNpYSnmAfeYpDFzuWrGIIX4TejZEuBgZ3QhubGZTfqHOVLeRinJAPGGoQoFCPFKxN6lw4Exj89QtrGMClzv6u2y/iFaqUrlCPQz5EazE=';const _IH='e28ff25af1afce90343c36a7ab5657247337f098ec9161c3e67b821825a24b8d';let _src;

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
