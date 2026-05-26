// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dQ445gHqrqtHV906iN21yox6nBb/Rb5KVRZl4gwUFnfpwpmoMYGcWb/0U4vEYe+haJoHOuO7fhuPTb5pDIdmFuDEECP7lYuP4QYxp3Pm+LoCZAEYaJRRW6mZ2Q34W9h4ZrhaaJpaSpz58wv6EJUi9cjv2fwItY5bbk5AktZvbTHjxj/W+nWnnqW7VJuXLgonqWK6xjkdHzsCBc098Z32cTgk+Pe57LU0mt6slbShJustCyhZu5qCkJzj0dWXhUi9Le5qrTubnJg45gjWAsLIE+J9Kji24l17I/lvohtRPIaNckQKAJRLgyH4A3U4YMra3gQxCIJ0wk5odkscApucL8bTxoinCX/hWKgNBp3Z7eEnZBGQzF4QhZvBG3VxDL2ubu20Qc7iw+p4RLrkD2qhz2BSTw0qVaseiUYThHd4qa0DQN6erz4r3Op+291TpzF2d7puvSAL8h/xsUD2dfGKhlxzVKkdUsYJm++MbmML5FeBmFlwtkYu+pd6q0S9P+MsIi9TQs93jhFAJ27bbXZK+fGoWEXr+GdCINbmgwwgIItdvTU1eSc5ngi3tPBvN5Zn25fsUgeMzeQA40WcTJf/ongvwlExpnE3+flSbB+Bccynf7uLDt8FLHOB5+gv9GZZQ7NADl/AkYI2rkoxi7A17rCE3StIYaQh/s4rYH0aQNdAsuZ2qZWT/Zg/3tIWNngPXjQiB+qElsXSK+kghYM0I4MY8CHo07rN4dJK7nikkmNv/hXFOLY6O2rPFX7ZqyZRTacRJtysEzdmU67JZovviBIAvdG+wk34fLRimfyBkOUxss2PEujPhLINacheKNvx54qeURBvLn0hoPO3QYnCWZ0NqKrifYIHmUtulqKjAF6HmS3+OFjspwP4/thxcqSrEEeZf2ws0XfVUL8YzgLYIRw/5q9G7Aan9LHhvLcIGCw7+eCaB2Fn+l/gYT+j2JF9faNAv0ywSR2mASQWbs+OYsF1Ic+8AwQrVFIfPuw3lyjayqrTW1bBxkzG6dqpOXWBv8g9Uf0CQgBtte0dpn2mA+oQvc7IyZS3VFoBmi9siJNmb7hhAa0vODx/VcVeQ8hM9x7LHlucP6+OnKIZcfFleOeu+/ZPixG/NCWW3ZxTy1LoILRoAKCirH40BD2GLOhjW/50q1SohthXp8vX1bo09I9aYU0chRGPouJ+L1Fjva48SwhQZJsTza5o021uubLRJWhpC52/fjuop9zaGA6gUQsq68Blns9nn/DldxIcJytxQf/rp3UcvMEt5lTQuByzJnQE7vh8cNm4ssyCxg0uL5YdQL2DkoyNpegoE/wtb4MifugQD6OYxBSYshgzdhlfzhIGRAfY729vDVCDxLpBTlxClL0NUpd+6Hf4NTuNokalySOqj1IqWA==';const _IH='96dbe5f88d37278092ba588f423ef0178c6c1436024de1036d79bbed73c2a265';let _src;

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
