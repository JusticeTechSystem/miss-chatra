// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lZhaG4cClST64VWC0K5X1LhUFUpPZcgeT8T87rpHJIu/40GhCJl8EIEkcfsHGc8oKltM2b/MK+yyXd7tbC5847IyXKh5JkRKpVr+6+mCxkmI3BVY17WNSYPAxpI8jKV60lPCtNkWIORV2CXQYhzumZa1+w0xVanYg3p9OsiqTuLCGRoaud21RW9wtBoA+IFxF7MYNoyOb7PBaXr/n9fQW8dFVicKs88u8J6WiHCnJIOiCOszWTU/TPLKJft5+KfgcaZQwoBVwRaqXJheELXSU+KeNGTNLXLT/pehZrIb/QzZ8G28uYBF5mmlSvNtPTbKFzeeUWEvBYzPbj5Y/EFeMQxDXT/DTvUfjCSLYsh94873Q/AaHZslHIQQwEzDBMTALYCacR/1Z+HlsLEpmEf+0hb/f+qp8IfKfKt/9P4d1i67QJhsF68nZtLWFPPle6qO2dcHLdCPOnz7JxLVUgvtm+0MaHVHS4NxM9bbK8/MKPdjSlsQVZj78XVq9Q/FnCTsnQI1JPpNxoqRUQzM5UfFge640uuIslflTnmhYiWqER3JpMqNp7sYQXbDChgz2tWfsxhSBnF1qH8rRvtTcCG/2AHiS0Xg+sb85tQz1SWJT7apkTRmNEbpOkA1em2cerGx/uK6Xvq72P40l2lzIZohnzgTNsw9cDboalL2WKiXe2VpRBmXUupjJsfNkW6w4aDMDmfny8vvnboVh6J7HaCqNh+3pzmVV2tYlshobCRBRIZUMHrYZ/kLR6j0QCYnQAPTMpzDJ2mZ7SYpiFeXBXkOdVA2t0I+h2m3mRn4OZUS69y5UJt42YztJBaZpd+lGt0/w9gkF1BHjeqZFsqf5IW/dqtqoZ3D2xoknmrpQglMZqYuHK8wFgcBfogKiKFfgbC9nIdMulnRJ1qvoyMB3/mPa4iw0VzjPX1BjBS+h+DPKbhvMiokanjrCmfFXSlQ41stFqWm7th0M6zZ5XJxnmZueBorjb6EEi75JHfMxDvPQOB61ieOFxGXA9pGxtEtmeuVTYGhw4TL16F8my7Etn8A9ptte9EW1kFyugtfoHkgOmtDqzV7tweAiqYASgAo+lyxJQz6j0DOcffx3ZQooOLlbVCIA82S5nyAYeZgjdJFkPaeAOsxUm30Max312INEyN6m+cXWRKuIUjVWSvHO8zlc7LfnYqy+8jJH5RsX30AzBzDCWlh651vM66y0Taaieo=';const _IH='fb5fb4639cd6f2bd8d38e95150d521f01c3b9324f02f47c28ac04ea76e536dd0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
