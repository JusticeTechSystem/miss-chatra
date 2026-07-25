// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNbo0GNntTD9Eyk3c1rDgABRUGeuERckCyCWkeUUolA1xVU7WOGr95Be7w9Xk/1/xXkKc0kRnSgh2N7rWw+vv7Yydw5hCu7xQRAI2xtIeMGDTktTidsIpKB+o/YGushEAiqIp83tQRXlSyHV+C/Eh+NlEW26eBSixSRE1KwcY9kyGhadxcV2TAaC+wmhSoREXrCNs0XkN9JMgCnJuKDatUa2fzR3ptQJDeOS3Kk6u5h7TPhZpy0cHd0+p6NfZSVZSBLtwe5kFuifKIOzY0kpn7ZsTHtldmD79mtJt9rBeKLolIiDmvyofam/dIGW6dos/3SEKPzDdaRJFL/i6b5keIJjOeHtIRb42nznjcEz7VdXoV1CilJkyQRSv9Ie6iHuR1m7sXIJ1GZ2iMCVpirxzDnzElxKryVc6khho1y6DgNmuhA1gTVHj3IUBDKdx9AfXiUPuCysxm5hMdbivtgbeLTlK/4vIsWYpzFcZs0Y4bwQGRCYXepxgjIreW/vRNMxXD03hslTRZ27SXkTHWOT3dupE7D2fAHPy7OfiMscqy64tgTDlFlHzQEXuJn3p/Uko37kVJispeFuPSWom6W9kQ4f1Am971bt4rb+g+4kfPNK22iLQ2xYRXUVBw6GSleIHyuRjmGAGWI2t9H/FQBXJwPjYKHYbey6SveIT/SCzkN7w8bpetL6tvO/4c7tcCt/7XqXOX0rJevOHgCnqjXwzwIdVRortLY5fipYfI8DsAGlif';const _IH='a9354c07f0656f8dccc1f6ce598d1a302238a665bc26d90f97d8f175cea657cc';let _src;

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
