// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='weVWDyeTcl/gaxICqTEYjIjTcYphVjU0/iWWtXk3EhVRdiF4XG6jcd7LGTv4QtWSLH5WM3afNmFzMaeRwWbAqqJDW2nbVoWTNfhudUq9Mnk4FKPTnhUeffWn997vgAJ+RD8g1e0MsYzwxrj/mPgoZvjCUSv6Is+WVHs5kawA4N5AX1M4wvEBQr9lMRk4QR/LQU3Q+GACgYtyJbq+7ZTIP2T6SKZ4EYo5Ueg5WN27dBG9oNzZjuQcMQ2EqOyNTbfGNaG+QRpPPc9xx9XsHTMuoWQLxdI/06Q3l7+LLQ+KKc/YneqtcHq5BDQw26IYKmp5GlfveveqD4XoaQLfJNTi5BoYb/ZrN8BEsFGbgaSTIPqtWykkTVIeJAYYqESXCCy+Hq7ikX6mJtyfjL0z4jVmVKjOiYfX3jyERCG09ojy9D2NfkMjJKfjyxRt10SyvEU5vn8J+xfmsibVklXUENl5tBpZhfJTQia+5jGpeWxIWYWLwO5L4tnnXhI5W5evfiww8vmOKOmu34L9QT3vi8gDCjgWlbjLRtjqOCdQxhtLNhjuQgn/e4hy71ZcHix60YzG6F4RfTV7YxC7LsanFHw7pYpl2vsipPds54iIf0HSps/kB11BWF4nee9r8WP/YxYZyV7tKBRKWUtc0Mk=';const _IH='fe96e976a6b6dc93214518b42844028b66fedccf1a0188e6b540318da4e3e678';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
