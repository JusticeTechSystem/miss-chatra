// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FZbQOWxBxC7jglQJtCFcNb9J6I08mJLlhDDnZCEIK6Isi/8pRQFCYKdd/Mlx8rwShuw+cRhQxrcDOilPdvOLT6d2SIylYtgufxUNNUCrsZEwtm72Xl6iKJTLkfcbEveGtllhAj1MFCle7hUK5+4lOa+g2a98ecZMjIT0RmyYZsWOs6iza0NIiSOZUN3sGgRDwtjQ6p3tOdIUCoq7RICXb5lUPg/g7LpqhLix/mzfziPaCtYs31PupjipPxA+vI51foJd1AL2t1wMX01I2FtfLDrpLTwWPH9s7zO+oXqDEth8lbZQ4c+demCNBfgx3emVtGj1urzoEW5g6YsOPRH5G2nP4y11dj3navMFFRNUFs7sHbEeCigAhUX49laLEp9DcBDEPwRvE3zAhn7xRf3IswRYohmGST+yuubG50VNpyJwChpzJjjaqW5OwAx8KjSCEAd+kH+aftnm7CcOgWheMstssfxwKMdmeQEYErdw1d1mZSQ0sVfSzdOCqpNqMhDs8LWX1M0xD5VjeppPuo9SqDMW0937GkIeUgqiSrrk/qJQ0kVwLgDsUFTQ45pMej8TEw59sfAF2BLnYxgWyqQVe07siImY1cgdEYmqVjSyC4dZgzSdPBjUJi2iKjkdlpwhg6XCC/GL7myhLqYEydrqnODWWbRip2iGnJY/ml8P5pZJag5u7b/NZyOh+JwRzbIbESy7HeEnjpHMEXZuBC09uJZSW53E0jiZCU1g3ySW74n5+2RVngbDjkpdmmJ/Q1rkbSzs8XOg6CCSE9OY3IUXMVsdksxAbFkUEbk4180LIs3ircEVKNRdnpJRWzM5feAgJI31WmVMUF58+iIYJxROQUyMkXLIKCOD03AV65JcHt09cdCFz89HsLmpHaYEZViEmIIQmCETBfHCVhDK6hwu3EWv9v1E2iE6v05kX/lWl838LGyWUFmRrwLg4Ae+CmqPXXNX/WCVuB5m57QvlcYTMPjitJrhA5MOPhQk05PpV4+eol/DmTP9FRZPbqnsMXN+jU/1MbUqzYWnwDux7qX2yLfLg8/5oY/awCZvudKJgQu7+0hFocSJ47Mch25csDORlQNgijFqEjxZA00=';const _IH='fd4d91b529e579ceda6e85561a4a44cad878334a44c6588e226c01abb23206f4';let _src;

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
