// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NalwxE6i6vaIuYBey6EdzMEma7xPCTv0PM38JaDDve0TZ+KbMZfrbQMYCxXwHFzb4D/Rc5GB/Khl01fUcUhlq4DXCV7OjPaAawIITwrQ1aG390soitWBnL6ae9Ihb70OuOKhry/JA1+m3LIF+lPkwG+jeP10bk2/z75ev6nUteu30tFV/q4LQT0dOrjx4uKAlCzfnWDoG4yGwIQw0KeYtNghch3QBba2pBC+S9X17PwTo3Oe75Bs8sfio7rE2iocbFVxxBl3dxWNPvJsLLh5q0LTY71nKnY2mV1zqnzXZ1v9hJUjZ2hEgo2niYRs4WwE0PvGW6p1iV0ID9c+/MwQpVxROSHiN6G3LGto049gx4rbVyULZMzi8qL8hAHnWfQ4cb6lLtp/BdpBwjt7eGK/yKs+Zm4wvUqAP0SwZOuffgDO+QnEN/cYtuA9K4jfy0FtQKotFuJpoT8uoZxpisx5Vs0nDFdM6b0cLh5A40br+QBAVRKD3dSpK86TcUYalkAwISPKD0hKhxgL8WXvJF9FAF4l56RAfSfEnpLPwMLRuY1MBcSBbvnq2LygVLPCLiRgMelwqm+a3NkBulE2dAB8BB3WKfGh5my9gnEfmf85YCUkNFGzV7Ei4yssM4idVpVKU4F0vFRglJA4rsrrWO7AaDrIMdWi3kvKZ6rSm1t0kyt0J6MrJc0KG5iB+5ARFtGQOUkgsBUI91JfzMZ0hb9cdouKP7MqzOC90nehSgqBhw==';const _IH='4a9c569797417bea7dc6ad570f42d85c80452d562863849c02d0fd5156226cb3';let _src;

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
