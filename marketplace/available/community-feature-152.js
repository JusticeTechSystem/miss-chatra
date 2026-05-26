// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IL+vbGZeRURf6E+VHLKQuUCqZ5iz/7y71N8V3DynqCfVQF6NRSHHPZJ43o+dOiKEVhcXKv5Y2KTDqOt042EdTCffIZWHAocK7zT7WaFMiIDvHS0xbdsyB8UYPJwPt9eSP7rf7/CVZpXWq+t+IsHILNzBULyHPDd/x3KHr3MgK6w5Abo8qlt71/Y9Jo+GzUqSGIOfYR9h2NKpBtjWidCdPNzW8z1iFSNkxN8gHSvsiCOSgLcmwOX+wG6vuzgtbifmNd/FqZ+35ZH/BVISjQA3f78EmHGkgffJ02kavl2uE9oBw3pgQXVnnt+bAwbPMaRnwqJtomhzoaelRhNRJlxvdqgaS7lpKdHzfXFoNKyNsVNkh2zqnKqK5n1sKTH8jHCIF2AEw2/cwC5scSASINQ+LdmTygPLN3qGBq3y9dzNqvOQrIbKITTqhrPuZcrd1d9AtVkq+wKxDKsjTNdq7PCpOM1dtaeYwOiYj2FqJOI0sxGT4oTMMy2ns2s7eS7lTa1meWuz1PNfNF9fBYSjHJ3D38rVDA36Nis76u0rB6ySRsTzSqSjB8G4Z/VhD/A+yjo+OBDaMvrg90lcucThTkwOu2cgw6WxX00/g+Ckirg3H8R0UgvOKOSJTCeEhb2qwvVgdzFLBLO7nYfYHY24lw8pxQevauabr+8SbsWYxD6IzIYHxi5nfnFXQQEW0VxElmUdQrsiCCPOtbffHcGwQVWa+4qTp4gwag6BwnmiI+xwWitlRoI=';const _IH='7c123f2af6671815e872ccd740f1186957728c0ce954a39807eb9db1774543be';let _src;

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
