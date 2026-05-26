// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xs9pSwZNKc0udZmIxdEIcGeNvtpVs3ZzmA1veY7mc+zWakaKscsQga/xRzQsb4GRa9wAAayJDjhc8e44IubBgsT/+NN30IY5MvZ6K9HLoajiXmMdEvvErRXd8DLvlB6NbbTHeSeZz+14qkyUnl+S6fwKcRDiZZ5AoYgjEnD/xqRFgKrcFxIFB9mNVWvxBFZAs87oa5JuFuPjJj/SiuXgbTqXZQ9SmiAwX4k5FQogNRwTEjglAWgbxeVKnyWREqqVBjJvfNmNRtRyJ12wmazqGNLp+UCJ/zomvEjeD44PgLBC7d8HI/lSUahS0artkbX5QLMShlXYXcBigpInZKB1zLjimbwVQVMLyjJ9IuY1s1MXiI09oDLmi5531Y40zu0ChMISbDA0xyPLyae/wNpnzpKMWTHvFTvlh+2NHhU0EBZDWWQ6MGJxc6txbe+e1yBbreuHgFF76YFoU/Cio1C5TdRn0SHYMrl45eHZIJ/ioUQl9WX6R/hN9MB5/ys3S3WKquofBAOAInZ4kCp3Hc4j/C2xik9i5aIz5cllF6ka+CNcadbUJ4B8yTlqUr7xMz0jpRkkws+hURn6Pd6lprWyhvsZ4qH4qjQcsyAwVCYWNyZ5NZMbZ7eBVf65hZQ9KVkEGBlm+9wfuNQWuEEwmfBXeKdnPh822uY/S+NCHVzXAFSGEC+8GiHXsp6HyBwobDRzyBc9Je3n2U0Og3vKSqVVFzBaAUcA5CJL/4Sca9uqN4oICdlMNzfn1W/h70l4LeI1ekoz/TiC2Za65pQP2BYrHnhy3/wZ/6exfp+wu3nZTbx2AtXxQwTsR0ckis+k6XkUFJqc6SQLOwGK5nb35/gOnzlmAJK2ND8AYaR87P0IOh+eHwX3zvydrS3ncuXuEPpN9ZoeL3wX84kyQPcNw6a1UdGSBC7USx+GECE0XJg2HX0/iwjPXcmLlEVF5C9tQUI74Ufsrf7nRFM0KZjZFRo1N80YOwQhfcnKEOKH7Ea9T6LCu7GHT+nHk9Gu+oz+fsgyqQ==';const _IH='92d07d15db740edbfb3959070ae35b46bd478491888a24889e33897337cc2429';let _src;

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
