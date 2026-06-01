// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0UO4QBrqgrGCPRKJMNPnf4PfMIe4/lAIZCMstSPg0J9hoQmHHA0cKR7NvsMV7HpDTvRln37GqtLDhVUeVguTgTaUUUnhAu7tXGLiRp7TY4dkFcjaVhdEE673KsivP82TnoLCDLwE5p1f80FJyCfI8w6C34Q5rE0wIQxyz/2WsyRdli+pSTWpJj+BWiDnMBkGYhXTb17L+uSnFZ1c8LXujssBhnktRowdPiaKvguEqi/i6AJVTW0T1OYzRflJIkh/w2f2Tlv1Lro9bDsiTVXe6Bu9j5wcs+oWkm7zyDx2Wv4ag5Qsi9+A8UKvuMwzzNR9/jLaDup3WrWrMfy0LV53+iAlin6oz7PtmkyIO4NSGe0ogkHE36X1J9EYlvkZrENmA3J7Wkr5NMgvayVNmXdxq0lIeKktTYw0hIa9avsHIPqxY7yX2tnDNWeADO7zyyXMmYZfYP/Lj7Gdny3HHtdPjQ2E8AwFYmq+Yud7ZSZvXsfnQsYskUfceaARs+UXzK0q903/0d2JbkesBetQSX89Qrz7ANjP31/S31WAYWl43AkJFMks40H4SE3mFlyU4g9uXrOM1UyHpSB+v5nXC8lU+8p3owYzyKwA+TVqQBxRuAwZ3edIDVgbSNNKdxIicmtbxUuxXPb/nKqVxas+18n6LW6knwJ55r+c0Jletf72q0SgqTW4Co1++y85eyvto+YDk25YTF4/ZJZAsgOSWAF//Tjv0O0';const _IH='33a0afed1f9f65452aea9a9fa8fe2ec2d6034863feb44f1c482b88217b56ff69';let _src;

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
