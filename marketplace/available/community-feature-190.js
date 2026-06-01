// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxe2HLalBsOuaxmsRnAWOpdoada3WamncHPB9yZuvTeluREkiweho1NuKe0/FEvP7C734eAOYQAbohovcHieivEjQj1Xy6qmwJptmZ6ujcS3P7PwPlt9Ts29EtnUITXsutll4aJ9cvYeVUC5LfbogxPMfjesnCKkEltyjqWJOYrrLOCojnywIV5s5e1+abouwty9VU5Ugg7oRgJA77S0rUa697JDf/FW6LZhz3aR3NMyf+ZXKUPFQznOGOcgSBGqrYpqoKXpP2kNcD6YHPzDFw2pKmhUnPwZn+Ayg6UmtY/+0QrlE7W9RkycXiMZHctWuLIlodbq6y2A3uteLmqkd5XVCCtZp4kG2gFoldWJIcYG6V3Wf1VF+ll/mTa2eZOIcW+Xr+L6V9GxHYQ4zydCmbkkcFQUGdTCxx1dy9/b/iLsCyjC2wuSWJDcdsr1xZWHiK+QnxohWeBemBTSmuWGxb2Y7886LXSTm0m7B7AofxdCMo3vffxzLRJ8KlWqlDIXBVhXZYKTnXuMxM8Ko22BuDSlFKhiLXu8O12NufhkI2q3cF5oyDvcJHsoqyU7DLtt2W0I6yQzK3o9lTNTSYkocZ1e6TEFyui1cPJBEPwv8AX+4Bmnytu17SR9pzM4cBLmYDEHm6IW1UEgC+cifyKLkx0cp2qlBhNkErR8EINkGzjA8n9Qw0YIb3TEX1NDGTsAYYiVgFeMyKrTXQeYn/jyMdRVzENwXBAR/EmazoTMVUeF2pQypSjUZFYxag==';const _IH='c719bcf853a9c642cd15496b33bad654ec40fe5c02f898c6fa840f73a7d096e1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
