// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XpsEMRmRNIsFXlmNtKUtqB+5OJ2FUKEkr+XOpVFEU956nT8tR/mUxMO4a/THq0/UFx/hLikm+s0xBjfkTsZFNmLXxqrGaUUgXCsgXZtyX+G1j0TXgS1GKGPiQZyHiNLhEUmBrpfsxYslKhg1p9HFxLaOl6CdggcrcsDSDnWRiYj5zgu97fpPafkQ8B3KFz0hG6Kg2xbgmOJ1HIktEi8ej3dIoEX4fc7of1NPFqn+N6qXD2EwhhUdnQjXOwLJraxxKAK5VQzgbC+PfPg2zTWrW8a++rfIC2ufLh0x+c+obS0BJ+X+wRV/lYUZFcdMwMagRZyfVdo69MjLvB7iFr5nllb7W83rULVG6u4YfaSn5XltNQHBOzFCbiOSTbGi2LgN7/6yaQauc2NhyLa3QiGXSNVXTYwbONxs9VlUPZ8Ww/8v29ppPLjY9/5ETQUatT6l+C360u4fYHUTfUOjVsMlYUiLiHjjmBgsCZI34uSx/jN5hMb79HfQO8d2HMuYYc4L1nCi81BhOOMZOd/8A2Rm3dlA9ulU8UOiEPTKnCOycXcaq1hIYHSLlst+RTPMg2kTARtIc+oqLeYzRAuNRc3PEjYcBhABmoiqOI1sPbZC4rs6NzLPJc2GLNY7wymWark5IPNJ08T+2NjQrPwoT7OO7MgsaINmxLlTvyteVTWnmRxQupjFjwbfukPuzvkAYtwEFlN+7mnYJtXQGMxCJUEsRnr94hqCmkK2DDFkdZnr1PC7pr2VHhLDJvR8D0IqKV2vuw9E2Mc1XyOq+EQHjIxZrU9bgPl2wfzLGhW9GzTbHtlk+eBBHpGBD1swTUYHIyuVRv3pu0qM2qCuwlO25dF4qfqFtL0eQQI+jGBOOKxH7XmbA5M2WQemopl33fATJGs8CHM9YZNRZDLBaZBLAAH8WEEpH6r4NnuO6piK7Yqz9SjeXirbii/ucm/o0rJNksoRYTCwUAPpFHc+fkBZi82uG97O0kkF0iUBHB8kTZtoxgbXjYD20g1mbPca9s0xU5Q3Ss8nX5JFtuYpbgtVYWXZ1LUxD4dkK5QEFyWEbQ0Oooanz3J/CkGCdJ+43vAdja8NRyizglFynsHhNWeMdRvBjM0+5B6rTS9veU563Piqyt7hIxDVCPhag+UJM+8lqePB0r6qZDbxXvoJHeLJjIZwWSwTCDcdlIXlj6TYeQ9P/mk6VByFFYoVBAMGZTitxQwo9wp9XG/qHK72k+ctYfcf4dRfDuyyr/GCCxiUwD7iI3sAloBGbtxb9OJJ0wxbnOUEYXg1zV3kslxm6bXg5e9p5DNS84520xAsXmCRXXEFaXTORtDjTBmS1HdKjoc5Zxmn9VEW339MekszArpfpEcgmJLPhyfiWMI8B+uG7PCp0Sd+IbRCf+k25QsUp+GlKyiGAPLV84QFYlTCCXr8U7Pv/Aj/krK2ftN19EzfM0XXHcnj0OK5HLVYe0wuC77i5ZfW0C2MVs2B6e4VbeEsAnlDAIOYciqrR0dC18fHA/qTKC/gNe8Z5ixUZ7JmuQ2qe0Y/9XycpRXRj/DH8OODWSZYt6bXhMY4aTL/itVx+tiiAfaJeswihQBeI5a6LexetA==';const _IH='a6553e7333c64455c9107481a0eba7bc9042b44549e7cf2a87872eb4fd30d462';let _src;

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
