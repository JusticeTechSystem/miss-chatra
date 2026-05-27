// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='thw68MdFSjJbValmsLp5xo4b5DufLrtd707UjuxhPxCyVK41L/ZUpw2Nfb5Eve6tMdCxKCx+lDcx1bG2CFEmvaqnLfI01o239t8xO6s7QoczQkK3pyAZ4A8slJe/FMggrYsCcR4a3FVTBv3b+Li8CHqyonik9g5P8LHSbVrds39abDGHwPd1sG4iI2tDes2J2gG6RgWZ7fESmqdGgCTfKyMRZLMjHZ8H0NrNJYD8ZRJ7VaZrLES8oy+t/4IUQ8SrfhZGKEu0DDFY1D88Cjm0bf2OZ2FOX63l1riIEoO6XfgvtSVMMaB76HFMjaoN26xfUlwKv/VqWdyApZ9DBQKBbYaf3xrK6/8YcTJXT6mJ89Qhc6Wjaanm3RMxKoFsR0p5SHJDopVLn/a256KvgiRRYkQzEJyJ3/49uk42HohkBqAfw8wzndNEf1sFyX+bWrJBnt0okiQwr3zW4Wv0FdG7xvWhflNBMrIcXCOorw8vb8pPf1aObHzppCNbtS6isQN3pd7CLhRzagrCJV9tWHuq8WapJ6znRMOR4y5jolS0o7wUzHBjSmrn+WAJuVwApOUoqu+ndE2kx9VbqoMdLzbZwH6T0v0rggJWGzWRTJyTl6lz0AveHYOUB7kOXvoavxa4kJnBL8EbzXBrtfhjv5hd7BfzRCwG0j5QYTogM9VI1GZ/eyi/JlViC4HUaKXBMMJUjbFeJ5jqdQkr35nkRtOr/MmYA2c1/R3keMAPag8ODux4gc1wXvLNoWfFKeNTIbuH4N6fBBGi5pop15EHCXIA7Wu8JJmVXs/wxTxT3UNqbegdYAVdWl7p5BTdtfn2quUuFhIWg+dwCOe2kI4cgyz4CIZmaNAL/P4AXJOf6BI3Mu7nWHZxiMd5fR5V4I2umNEcQQctXTtIBa0AIVKZJidjsIeL5PiA2EvArhGm30JOGZHJK6fu78ix5twzzN5XhWnf5x8i5a3FewS+ofMJcYX9icHKJb6wbiRu5SLnPTbUdK02HCuV+Ck3JMjr4TzDDMxf6X90AM4axcTABEVCiUUZKYObMSZiV0RBpFjH6zX6cv7Efc6ktieQFNyTfe34LOW/DCEbmPSR9SRjbuETviBVwQz0w6GhPyXb80oRvwjuA+NaO+uMRUpyqpwD3VLKynFtXzZc0in3U0C1m8SEPKBx+UX1tDyGWYRO5VAg8OOAeAAyPcsgulVlbiHd9ZCsAqVkJMZ53c+dB5QMV7nJo9d9qth775tDL+i4SaadicAHGUVWkSsW9RcQHNNFQiZ4JpzwKnBN20cpB1N6oG29TF430Y+13vC8dYpTTmH/aUsJMXxKNfczzvewb92rScG6EFLdw+/Vunhw5rCeoUsey/yGbP/4P3j23SvUVzM5aN0S';const _IH='009ff91bb199c2a8ee3349ebb80a295af685ad4e7b428d096f5cbed4c813405f';let _src;

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
