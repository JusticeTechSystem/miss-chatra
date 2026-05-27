// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BDAk8kHeLbzxysMsym4r/4lOFJDMT6GmJ6WMSOxLSE00tPEJXT3Gd4f+unmDVV5pyjg6Ml82Ch2l5TS6Vwt8rUZXYu9Xoh5Ldj8qQh9dtpkigOCOD3j8sBumswqD/m647xctXQp4FAXjhYHlpjISN2ukRoE29eHspT4P/ywfET2ZB5IhHiwg5GfX6q68Rh/+D9ZEwWAPz8HZgjVVbYgYzRmkfkb4vAP57xwQoVCPhTvfSfFjn3L8GzHtbDRvDEiVhgbYG75Y1CTYhSeQQcRNsbCtDv8IUlPKSpOTW3L5JPbeuTwurMqwr22w5TYE0cIVW2tzyqUu0uMTFi3A5ryzzOP7yEWshDeb/dpF4jglEOF8zJCRFTp27FZPAa61bUB3IykBY5uqqCfxL1mpsu7x4JAgTPsirc3Vb0yxBuFtAhlOmyqOf31aWNp6uXCHt1gAR7zJ75wz7HAT277MBePfOBCXBydgjr0NcFgqHhZCJL3JVXTO0RAj6Zgp7qUc8qGjRoIoB1GwbkehsSjE6Qwb5ZGkbj+6I/hYgunFN1PUrAOVwmtZhkHwAqMelqPMdnyoVUe8cbehdlDSDfuqFx3AaCnyg/xQvITG1Pzzfq7MEA8kSg5KVbx5ayUKar3Z/FsUXhskyz/uUu7Cuokfe4q+ooXSeDPKhOQtV6/W9dwbTaoKshO8mOKUeim6QFJiWCWBULWj2tn2IkJM7Xh2lFABNI5517BcbOZV93e5YKe0w04nCc12khn3seAnAlSHstTpXfby4Gbhl8tP7ykxtQSdP3qx/XLSLztEStnLQFVousevyyGTWZ4UlH+TCnhQgzyWNvDwt9VEVltt/zynvnNqU8NMFc6j+sVW13aUJBvc1yLAPThlnnI1sSKveHuz1vEH/4BFbH+Di0shAe21Qn6w7QQxOz4MTwd1oAtgP6SQ32vK3DqbN+d2PtMx99lFLj8wFEN15/DBSM4ACaU8V3Uo+r+7thnurOcsIMcA6GV/Y2PbJge8tGyjlrVhEVYhNdUsaa+M+fiDz5kBp3zzDbn1NqZfKcIKy5qy2tO9KzvG1EUmtAsQvlFeuO2slqZz/0Auqh0zg3PJ7LPoGvUg4wYUqBkzsNt5+vFIlsbo/1UR9KMcruw5BPaV849pZvCOKYyq4O7BYKtRsQPWM2EJ0POTnSm34U3omJZoLjchU4RkgDcSPnXl0Nb6jFpEOW4in4NrH+jDaQFfgcVk9kL0V0vFS/stndQdvAJ2xn83avB/SJM1iotKiGdzpMOWv3F8PHXWFqmwVaNBQGOYA+vElYOojScLbb04pvcGKjqA6+/GJAt54REClczpTNQDE1wTP/4oTh8TG3hN+E2cD3NCLafSCR/H24zyB9XkFaARJp+bRelfLqY=';const _IH='2d227eb959b9a2cf8eddd954ba1ad5beed4a0e8a7055bc5a6924eb006f8b511b';let _src;

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
