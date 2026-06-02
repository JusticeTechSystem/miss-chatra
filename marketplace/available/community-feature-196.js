// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ChEXW7+Wup+nlbZzCeJ48c+jTjfYqamgdGfbBcncuILQJnMxh2ZnChzrMmBuie1iJ3rnGqCVq6U4rtqBf0JJFobAZw7occqFkfY/XQdGBo63LkvxG3k2YNXfBMxmEysrTvCLlQSYF89p4P1XDLq7CTicGZPcnWAGGPWG/5SMJXWOiOH97QQP5XYS1I8lrPXAwM+B9yhbUkj0u41963wKSM76QN+kHKA8RXgrln50mSntzkgjiC/NNGDZ70xioR81oQNtMa251qWA5BONHwUo9t2FlORGxc1WYbqVyIReS+/f+3GtR54EY5s7XKHqVgP1efy6bLW96/7KbXeTQ90M/JFbe6aIUk2vRK2lmyGJzkZIy5MLJVyTfpAj7e73ssF54fLBsDPqqsJ2lsZti6TccRIVQOCM73F6D7ep1G15bv32d4dIi6auCoujWvge6ASoCTKLpyUBbz4M6WDYu7DpKwf/qpOdtEmV3Nuj9611xenylBJcBRQJUUCz5tYd3Ff1YQQcHArvp24pqLkkwp2AgrIeZEYYQnineU2y7lBchSRUZyKKaBRtCnEHrOdFl5nxXsg1Xctsn/x60uVjE4QxcQwDgwa6RQVuu+5nq4uYd1gy7S5G806L84Tsdbq3a4OjrzgVfvgOwlmgTpue9ljOIehUuk/iGA4Nci2RR9WjUzJtLxkz3Y2R+TP9iajDB2G7sVAN6t3iH5zSBevOaNcHm4lb3BR3RPpk';const _IH='70e266a9861a79b49e5b532f1ff97b8dd0c461944c29429291edaf5e40eb8cce';let _src;

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
