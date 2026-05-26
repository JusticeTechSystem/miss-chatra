// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NqnqzWtRE9pSZMF+scPzrwhPa2cN7itvZHjIcJz8jiwpRD/DXxJ6EPL5+eAkvH8sOKjJwgcrNLXuU7X5pnBvBiYS0h7IPLb8mYWjpJJ7ZqAp3jvbZ9EhfeUR+Q9zk08sEkTNom4/DL/2kltNUwka19BuDhdKG3/yeIIfsZO0Y/2+I2sHsTGHhV01oW+8OVcxD3zyf/wZ/ev1xI26Qfwuzt/eHwz2iJX5gUQrkFFazpnsVT/sHi8UH1oqRyEyoSucd/fRibAddkNE6WmfAToCivDvRE0VdZjaObzSLOfQARPNDWyVdj2Eool6YzKI9JjJjIrGWeeHWBpf9aSLgthr0vf+upuHVG388GIVXpSJpyN5LXMy9cz/wNK31hBiUtY5nJhLpNBAR7EzwjI6A5qJwQiaDtN0mjbos3Nma8ZJJRUOWYKG9+GOu6OQwEHbiwdWkHQVmJ9Ptbsy6CJcjy5ZiTBdg3pz9HHOC6asiL6GU+RONZ8mXamzgl27MDXcTogplLbZNiT6FXl5xCzCtLj3R8KiIpsQt/zappR5avVQkfHnPAxwrl4t/hIGsnKjFyZ1YWepIltjkZAkNOcVtmg/MLtqq3JipN01t7txFIDnJ5SB7YX8jqIyYlavlefF69XJkZ6Y+riC+Q8dY1+wH8pEKDJEhul1tBVS/LEFw2+dkUH1GLFbuxC+8aoXFGEVXdW5hUKr5f3lXgKPlSWM+G8wHVuws7Am8IhaABm/B30=';const _IH='0146fe7c73c0cca8046d9389485518d6524348582a923c6930a6750f01602ef8';let _src;

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
