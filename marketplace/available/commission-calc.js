// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/wp9Nj0nd179w9R30v79lc7E0jX3YNYsDrWqdX4FntWU5gf7iYpJW2utdpuhzTzrQ2dTRcAoUDYFc5LQMjyZ0JBt0yLom59DdHwdkpmRdsDKOzra5vi22l58orHsePtjGJuY0AV1nBBXlhmIrDBt5F4Nk+IqdIy8kYjabSXr4SDPDqB8kiYbgB/lUx2PDk9gwk0ROLWXazXxl3EQLcOYijA6oGQbIlZmDgs7QQ3u6HvgLZWKOMZWbIHnsJsOUAHs2SX6rBPiYO1SB8X+gae0quAmLxW5M2sYF5FBlvSFWgfiCzOMVWOswMpMSV2SVRjwwktAmVtow83ahAV2XgbtRGtcVCX5HuKA5ZGp/NcdeiyymYIYOTjUMyYCgqHKGFkllJAE1yK8+/78wkdK4faCGcAGQaeM74CW9id+46IX7V0qou+koO+ZppbgXv0yk6nln8cVhPQBDOu9R/YCfwYRoqK5mGyTOh4rH+0ZI+a7IqLVjon49XCPY12l+5fABizv5JodHb3Ldi0/fS4E2Pcp+AFmjVtYWrDmcJufffnZch/b4ig4s2YDcGM/SYOkvG09w2IcBbUGmYdcXBJBRn6RX5sCijG+rxSWh8w=';const _IH='5349bb0ab2c3dc95d7efdfb65e21e0cd76daa77720d82f98b20fb35d77606203';let _src;

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
