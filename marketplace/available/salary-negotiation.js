// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oTUNppSjldbBi66y/WZ+8Sh0MKhthCVUB5jfijVh7vJ7yzR6svH22GPiLuKUCQ4vW4towhxrt37D5EXlNLksJpQpPSj7Z14DXi0KeVaORFCFUZqoAuO0yUZm6VSVWyQkG8Lg7o+s4bwjKXO8APJC5zm2zkuElVnAcpvvI2Q2UOGMPgjVWrXPLXUUwameJWozSKqmbOBorxwOTTRrbM1EC+enrRPLl6AcH0Rfw4t8RnsAVa79tXUJl2cXqiB0e2iVpgziDfUk26rYf6dyYzO27UZAIA9QLCN09A/n0qJYrQMU5yRx9iuC+XJf9loGEMEHaxHUSwps1pA5UsGgszsD5IqNlYhUyv/9YaGhRUIzHr24pB8RdHfpV8NeWEXOPW5dsZOikMDPbP5jG133T6Ll8BE6yUWgapzx0h23i24AyaplTPt1FN6kmG+K6gd9hlsd8BJqeM6no+4X6sbUdF0jucPAi8GAZ0x+unr4H8qhV4KfmLyboezTgOYFZI8jaDUZy/Oj+Q3X6XRtIl+Yia0mC0zVDuO3McrTbRyDU4XG+sb2Hzf7pYRCldyP5c5LBdKtCp5M9B6uRrC46q4/Sgp2uRYZewg4JNTu/3gWSJ91RnVqlCp3cJw9mJR+xgC9KaxqdPxRQHeufAWYwXBE/aWkVI7OISmcFVXsPMLyjRg20SocSkL3msLHlh10JqhT/mLDuJjXSQ/bDPAlkVvtLDzm0xkLTN4ApTky+6mhorroXmeLYkkHw/jjAhze2zp4XUqPb9Sfv09FCK59QLDUH/Mrep/P6t/Hzo1e+W8ME1hJeeA+K9Fpa8NDac1XE1lsgdH8rYNW3kh0/nEv7cQUuDZZ2fGQeI6dmubVcqNJi+0V53HUMcE7b+hd9RgGhWKguOo8HDxWxpST/oDOPItO53l9hjvtSBDZJNi8jW/mLAKNaObpuC81GRN5VL/BUxPQPHGTrORyBrxMeY/muG2USIcJ35i0+U0bdJT0aGcEFHEmqb+J5+76zW8GMyrawQ9R9RuScYP/BYDX0yoe6K8Bl5cnbGMhX80uxbT2FltfLOZbTPZt/WZd4WOS6rbVEmzH9WP62929U7dOPXd3gif6jOkO6dDtQnsroKSWp9rWmXjJ56mkwkYYb8Zbh7NbSpeC5X8Wfe7FsWOWUHaTgxMzDPIL+n8xdhlTgPqshbq277QukLNjTAc6dYT37gY3fmmq2o1xPt3/FW5bLKPz04QjvC8cCQ8SEqjK8sukMuzaqp59+g5wsSnzx3KpIVNwFhe2As6oEFhAa4hkAkd+PUgPU5HJ9yoOQacFNHUwBGqjkEFsPq5SCM0BR2WlBlx6VrYEILdFaBJFEALRkdj8X67Xo3ivaJEFNSubnzw=';const _IH='2321502320dbe07e963fa29ec5229b2635805240e6ece5d0648acfd9eb167bbd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
