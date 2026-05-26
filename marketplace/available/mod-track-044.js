// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='al74TgN5FKrsXZO87JmEYTLn8cW/MOca5uIu8t8rfQAWNrsZTdmQE9UEArMX+h4nS3oNtZaRb2oa/lHMMSk4T/ht5NS0hn8qL+tAe0ZaNTtaall9aUG8rOmqUY1onkitUKz2BlpKQXvM0qDc5OUFGIElMqCf3it6imA5u1qwhy4PVH/TFpVf8iraPVHcdSeldJ3rkH21uJHHaJYuiHXx8vMDwqE/cM0WgFXl/w5OBL9Ug4NbclfB5+zRv4efNOC4trh+++PhycBXVE+NZ7CbiW0n2S9PlkABISSLCYOccmNZAkQdFjOX5edVDnT2k7aspV54p+N5ShYMvDEpWvD6xmi4GHAl4wN5xBsTZBwY+jkVK2knlWXacLdTPI6+vgXCJ8/8Dxs0QoZoGHVPondVObmpdUrdb+NtXZ6UV9iIhD10Y8q2IzHbZUYHBTvPpcBAlk1uS2wuxue5yB4SpgzvkhY/jIOvcyt3j/8EJv6ITZINzUI99kucW84S/zwXuWW4jTNKLSchOVOOKteToZFsY8aqwe5TJw53Bk1VewMp/T8iSnamtP8hG1qCRFLy+jltM/yQOyVa5GUEcP2szr1SfQcl1TWIKFPWwmelVZeWgI7YtsM1n/VRojiGuQ1dqeLWGann9iF3ygbGcAiHvUORVZ/ICSDd9PjZOiBKERsKShD6wvecHT1AOKTxrsAc+4RcDrkpmuvdjCfOabaE5ac0ka3SPRkIqgNu0KIdQtQ/Ec6rsBdU23rqBJxb7y1XqtTfgXoaPD26+vbda2dhY8/3Ti+ozyL5q/ga+Y/U+OPWM9/d1NLqtQTg6fDI6scg9n3dOlcWqeEeTyJwOKAmjhTQSoxKecFeP//fu98QEkzy82i+y9Zy99A2Lp9B0owUqRtNVJt2WLvPGyC9G6UFWG6iqzJKUy3b/VP8goMyNwEPPu+d3C2BzYGv7R+ZvD5wK4JMA3fiAsq18GEJZKF63kJBdtbcv+8Zwa9lArHBdmGMI4/w2cEp9EOmMHb6278nnVup1eBDoiL2KHrufQZZJPl0dHYg5ZhKeC/LZ1hZ/CDd5RdaaAox+icZGrQmcMWY5VItDEMHWDwuyUO0CZunIhKBtp/CHaJeN+rHoD0cSHJaeWFMRNyrnEvsaBY66AwhkSYw+4YQQceZF0UsYYqXcbKfofc0pNVf+8BwoEXlZ8f4W/JF+EXZnZ7KxfOv99HQiMGJcUyoTg6uATuXFkpwJ41u0mcWi1KH2UFgtpAfNNMSn0h3OCU8iMZkZ6OVnmBUOPxiPWXPZBrQt1WPwluYWBjk6WuXXjsms+3dQekhbWBb2E6pAcTWYfd6LCREGsEdox/HhabyLbLUbFhqxQ/Ou7/odMkgR9512aGIEQ==';const _IH='5dcb1d1ab7a9a7aef69145b0fa1951dd0b93a278425891628f923ee613d08102';let _src;

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
