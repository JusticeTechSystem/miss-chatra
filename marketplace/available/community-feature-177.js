// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z2nKpvrvw1Ej6jYipz1zQ6xGFPbQLXIboHC7C+wVVxOqLB5Drx59wESSRUh3QkLeJ3HosiVNTUtBSEb4J9k2LD+Gi1LIRG/FHLZpD02ojr0mhikbdYdcZz/wDp+RLZaNOMTokFrU224RuCWANOOV50JKPNNTGvy3xtLDhTza+gNRdoQawMhTnmTfsmwghdTQMrpdM9GAen3FtN6Ns38jb4eJbbz0fIb9Qn9z0CnV4iQKyV8MWlBdW49bIJ0c/P42n5gwZi5OtBKCKPTaQCh0a/svUJIRwCITMvVF28HFCNW1WMT4ke779T23J/uXemGt8+mOdIeAEjWRBODlLKGEKnffrs4KOH6xrM7zscV/jRaUIH3KslRW9+4X/bhD0QYl7HrysntJ6mPKU0aU0mRn3GKhefZd9Lbk4ob4RbmOzWWPdBNzA00W41l1Y10DvK/dmAuaiWRRe/oVLpxHJk5+IpeZbBWiuv30517uVx6r/l/CwuCK3aW9SEu+uZwk8FRyeXJzGHNjH8vsICJ78wYa0WQUiQfiE23DXdDPNc3i6uCAcMeCxeMlYVNV/vFZJrg1A8NWIoNMO9/uPy6uShnn204i0g+J4RL9tLi3BXLrHnuhtDOdIL6ukK90Cs+BZ0EpiSqYCd4BC57M2j51340Oilv5acE/dcxtE6UbSZF3FXXEy1t5RayvITKrSfMUE2S3TzKNTYYGQH+CqrH5QYrOmoesfX7/6IeFdTHTHwBZZ9d2fOU=';const _IH='eb3351fc0f6e1042a070a3be928513da1acca2e512eb82f6bdc19f2d10276555';let _src;

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
