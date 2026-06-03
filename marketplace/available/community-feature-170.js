// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KcOUrm41LG63jNpEi5WY5a5Jq/cGmg9i+l1Cvar9Wb0XFGRXsHp/gJco1lK/+wEnh2pFCkwpd/vjRoygQPaA6G36QUFDF53m0tI65uqjufdOQ7m9Fp3bFM6tfRSETqFOCUxeH4FS47p487Hgj92wlJ0zDqHi6cFi5aGv9NOHO8eXwEkQ8+Y3pZpQSFlDfXbP/wUwcZWVkex3JCBHJd+eNcf9CzaIP1u4+u0wvxsKQzBawSUJY2e3ZfxBkHsU3Hg1XyKkC/0InwHCzEej4CPdMDkB5Vq+fDA4jLpB3TlP12KWhsCPmV+UCiUbgZ92jZbtv+nhJsqZoR1ugVop0o3xxqMuGVtDSKtCmvEdLek77rapgf2W735vYIYuv5yNalmoXeYeHo2tWxhBPwQUe8bO8ZUqeutbme/khOvLuQW7eQdx7BRz+AIpWhLKaNK9XFnrFdWPKmTCkIc4sSs2koo/LUIU61LAzlFqBK3Ev1RdUxc5PIAnn2OBVZC/t/aLN9nbkttJkeAmCC2RXwmPlKMs1xO8g8ZksTT1gsac7ZRnLElclMSkEJUARA8Pc0amTDfl6AjN87OPOm/q4pQe0sAuOs4jyZx0ZRi/kYBm2/UQ77j45wm+A/hhDHBhGBjP+2dBZV12IKIIrtRGz+4e7T05v/gh8cL9s8ztd+lkr3v92u6tFzefEES/gzM+tbXv3iNM8ESZ6PQeLiB5KVwlquzXcIgd8IIEKdHhGf8L5gSFoGCFRY/iUnnKOCJS';const _IH='0d7b31e670f82824029f534f273f460c1b55d1bbb98722c56cd0d9dd59563abc';let _src;

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
