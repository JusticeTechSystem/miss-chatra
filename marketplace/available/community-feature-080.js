// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E029oO2ztR/e3/Vg9mxc1BDwliTaDWcyrtc0Y+1LZJktt+gt8YE0dQ+LBAD08CA9AC3YMxiSTG+C+4l7UUNxsC9YHEjcXWHDxwTt9vnJAH5WAlSGb+EOnoZA7T3miAU/YpZbhi1vjG0xPkHAcUs2hT+ReR1XB31xd9dRs85kcHqtXhO4wh6qcQr4uFjcA/Ao1JPn3l5XhbTgHr2h6jgq1Ym8ruS295JB21He+o6+dvO2xmfpavXafwdPCToqeLqNLrgHfjqD1EkH8M4ePR3xJ/UipifUlZEQCjN+bAplcU+HhwxosPL1Oixe+1BlI/hMW07yaiJ5vNqdqG6ubUO+dx3kIq3SgfmyVlhA241hqLYOGww/sxx2IjJRBFToskjEx1TKAwh8fp8nEOa3KaZMjAWe+kC1Lwa6PJ1foKJdaLfugFNpvJd1cTCo3NIBN/dcAAPpTVO4MP9U/30YFFofMKbBR99A+FVbHbgKIaOlCYwDwW6lP7CGiZ0djJy93pI7jJyUFS/DRWSXXa8ladQpGR2dhNfhI7k23fR5KU1HaXlxBZZ2WX+hxHVvj5pUmkQFVsoJhXk9fFbdtX/LIfBLixSWHnWvfNMOdE2Hu6YDbhSyzkF8QL0MAin2lXZdgwAMJEwlr0m9ynXsWRAN+h5w3W0LGZ4+5zpvb/pJWcEbBLVN5smRJqULZQdOz3jBdOMpQhHEsI69M3c8jTBPiSm5UDLGhitST8+6SZv1iGsYQ32aRL+UIEg=';const _IH='ee66d3bf2d97be3f668f4ef6a72396e6fe0bc5fcc39cc7aeff55f3af8a9387d1';let _src;

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
