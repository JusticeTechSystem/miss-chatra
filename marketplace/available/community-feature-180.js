// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oZKbi46aVm+SAzKkNf7M3jylOh66lVO+qmFAt/jPUHe71NetTodiE4h69gHblDzLli6Vecdxm9goCp/xzm2fkLY3xyZME4GSRmoG+RFsC1Ij6z+F2A+ZRCYhaGkIxPTzBluI7a5eDXmSGMTxDeGyIyTprHJxyS1tA8ypozD/cz8K362QHNIaHUKWB6ezQqIEDTY9WYIodXV1UWcGRGvA1ctTZRmkporEgJPZo72AwnyjZ0bRklkqlZ7PwhMrrXDIjVSojxM2sNT8vmdpQbHqsc7T4KT033SisejMru34X4szU0p5cJFwREy26C8i0WzAYHH44pT6Iqk0eu4Sdm5CTTQNmI8X3Rkv24KntDV3gHFUftYumHarIU+B0QGABe1s2UnhHVdEGsshPcrUPsI+1PT9QVt3+gb1BzogkLfmWbuqas+/f+0FiCP2xilk6wAfXwojcQvLIZDecZe+tk4kZwZMCAbwMShIhsTUw0lnaZxe2f5ID3MXrLzOHirrGlAMxJidLDUa56SSTGxYW9YKeXyIJFbLLzZY2uYDv8evMfzM5xsS2WjNKIb8YrJ3e9rQ20YhJynGCCUqsTJCh+lnwvp/viEEbfL31sJRz5msDR9gLC7IbbnS/Gw078/eA/0RNyR8ckTudIv8CIGVPKC91A3uTDmLjx64+s71GbHpX5xoqXvKQxDM7kw1G/V/1i4YaztF4SxDjzwB42OfrdOshLp1Psn4q3kv8LW06aVZEBzPTmFLxuZmFnEw';const _IH='f1afcb8293bcaa0d6bf2ecb6b63084df0491758d0177b9b7d9c71dbf878c7b67';let _src;

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
