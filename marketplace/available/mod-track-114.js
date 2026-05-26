// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c96/9DigWVqSRbp7wi1QJGVyR6ZQdxJ3Y/oWp+CktLQ178aLuNq21X1QcuRmpKjPodvT6nzqE/BMJJ5DZmYfI8q9Mslv6jbhWuk1XHmU8A1/TNsUlGUngFkO8JOTEoIeUfcnganxBZ1U76CCTCE6sMj8SgtCchvwXL+S8aP9xVTXmYMfjh8clJI7bXHgk5j6Z84lnGNHRFVaJOrVdJhsf3nY0cELt+syUfX+xRQhrA7BiV4NAPRua0Cu3Tn/96wiKMsG+UygMH4GKiZmTx0M+PAATrljEZCiOb+wNJuIaAtZ907I8vs4TuCC+8VPh29G+FwVY/0KiZRgohgVbAXCSWj5Sf0wEtZaXrkrm4uhM2thuw++5WFRREhdXyFGYBJmPw6ulZCVEsUh9fmm6j6fWWJPNaThCIgPfN+k4/DZGzi4qLS8cp00oo/OuUnBOMl2Xrcv5K7FomhCpUWZB/Vvt47EJzTmD6wBZ5eauAmgq5bCY84OHR/BSm0sj44+V71TV9QmG4KFaklWd7PvhvbmleiiwDgvRpFZRmRbeQSH00e4uxd0a4+xlYAtGnNmlEJiq+LpiBFbjM98EgaxM6cmHytxtdu9ZMJKF6EhB5Ac2BcSI6/CZXzNIgFACzK0COxpbQU6AX/tQcVbGY5B4L5r+KD7MtBFrkiIAH/M0IoAx3ahac+OxHtx0vZ4JcpuZFpUDsuB5aBH4tD7YRkQeEvDB+GRtBE0Z8b1ojF/WPkHRAnZBn/QHgsDd7ZVWlNNboLWRiTSN2JIq9POblyX9fiRFH6j/kKSSsHGDRSARXXHuNKOufy568hKJUdtLXMag22MT244+2KhKzv/7tGRCK8M2UUpsySM3sc+pTXiZff26BuWRdBd+kgY9hMhuzPpKjIWhBi+jHa9cZ0l0iz3aSpQXt0xk7hCFF9C3db9kRhP7qxSXVlyn8pm9uagGRWSYTxwrDE0F0rfyG5UYnyKOksnD1yY+0geDdCUBh5b+lAm+WyklcW98SmlkDPiUj0IP8+buf0iv42Pv/upehY9scXvPLrbCeeeWkP1sLqzDnLR3Y1Z07fM2GptkGYqpLizmR/g1JtBOSYRHZ3TMGB6m1drssWO2jCHlqOAQsWaY/HG4a5rDnrcWS/j4r9nWlJkxn83KTWgm87zEi8xIp7CDQ3ZBB1NTKdquI2+Dbs7zNKS9mMHskYBXxNz85QisrhCnLvJFwX5rNM1Svz1k4RwHP2d5aFua95KcLo0ii6P7Sr5d6po+7z2CxT8gBvk2uyqMXuqXabiMTeAzQapAKwkHKZcxVWkR1xb4rnc+M7fcbbvxriutqeN7JmrVXwjs+net+3uMQYwHhmXTBZllMhgHlWDq7dfPi4lAB17fq9Za/jF';const _IH='0ce6013ae96125670d70218dbabc5987d92bbc8a9c929880c7722b966a4f2c36';let _src;

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
