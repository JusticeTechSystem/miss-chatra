// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7b1UG62RYJ9vmgpWpan4L6dmSo0z6qWQdDuuHceIyzCkdhxwUpmFMKfhsPxz4ExZtORSxeebD0rfOn1J6orzk8qy2LbCNH2yzZDKfZDUKzFVF6F8ELGvUHZXcHffFf4+8lV2zrbrqr7O15crZdwnrNIjQ6kQDwFYmPxnkVId4YJkHUqu/PIpckCZjkxfuMjt+q7rgwGZOPPXKmct+z5VIyynapXIsz91HZH2rTGW4rxka43ddE56wgdWzc2NalDmSnuitI9wi53zJcs7ouUA4umUhof+ezucM+F5p/ZVDakxoIjMFgBFNtAmZxOWd/QZQKxWuGY5ynuV2wY00xs3qtHAAcavkVzFRCK/dMOzXqD5duAAUj8//JgGJx1lGEcS2pXFvj3zlcxGWuo7RJ3TnTe//isy0kIwOHBNDnVUCY7FBF6uEkHaebaddvc8DX7koo/Dd8NQGRQvXUcSmH+ZLab8EzG8CBt/5c1GRlpEozdqdTT84KFoX07wIpnmgN8kA+tvcVI52YmXs4r+B9aIw4bpHjIwtSQL2boy4WPor9z6ILepJUy/x9PHGYVenSMfsuhNpXa1sMTQWnGcnpeFf7cArVWStD1L4iucI5YBQpqGUH7IE2gAgJOfcZcre4UO+w0OjmQxukHS2lqUdDDynnxYavpQ/93+NUl0k9iorFb79WtqbP9L+41lUTXWhcCyv+YedLqBVwvosYeDsdxqwRfn3WBlkAhCpjeDaxDPa6CMyy8vgssVndcKQZ2rqkraCO+XUJJeuLVN/GOc3AGspfTqDQwRg4ElJ4ErA15TAGcS5G4UruOGp6wCChTY/UFACVraBUHLNZo7InkBQwxrRm0fYhhUQPiE81cpK2dBTJv0kHLybnxWgfs3L3Sq2FfyIxKKNZnx4l8j6z9JEDqBe1M3JkKsp/Nzd2k0B4Djoam8BQlSWFHkIeTw+rPCA642QZqjTi2gzLr6rUWH4gp/x33u0jUC1jSwm0c7t7mVglTwPGfCCKaFuunSfexINnynwsg4GVUD/povCpmjqsjcHCMng==';const _IH='2e82c4389bc992608a3892900b2c79531911b5f6d07b0cbb765c53cbf0e635db';let _src;

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
