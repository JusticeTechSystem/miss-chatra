// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1qxdYo5qAtQ/QggJXEjtYL7PUmoMDynNC4Q4d5xF0EWhu1YqX9EduxhLq/svjT7Bc0HWUTcBD3kY6zA/lV0vchvMWRrU20BqAbFkbc/gxkzc2IbB6WEQVWCYcxeuA5hKbNagw0xc4pnpCq5LnArudqOyACKNqj7QXcTKDiJbZBdEDEH9HltNuyORw3zVPfaFSgs6nHD+sCa9K0sRmnhz81KjtQQmOjj150hv+0+Fn0MY/ubRb6DDQ/7TIN2RkSjCIvflHkIs/huDzMXpzL4WwwEq7iXVibeFxJYvURTQKWrQOAXXzPutj7J/mHAC30TOqtIQctVyqVKJYTzs0NG5ZFm9IRYeA24cR9nlyyNNloIKMX3/HPwLae+w5hqNSgwi/pWMSnAjxsjr0/C50DjpJShdK6VfB3sG569knOhF4EqpwiSyNQL43RtHMpZ0vUYunQiP/HQNp1OhOof+ZjLxQjLhW7O3jsA=';const _IH='22eba5abb2759176420d78b3e522072e6feb71347be3827a17372b33f06e7d88';let _src;

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
