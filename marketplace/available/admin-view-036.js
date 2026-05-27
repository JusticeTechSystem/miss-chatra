// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ckVp51YYsNtBlrctECCIkLixUjE3aPU/ooYfi4cEZZRVIgSJaykJ2h/ifmh9cQ0W/rho+bHV4QhGQD3CiyD6TKHbcTZWCx745uBI8dXspsNRQbDpk61uCoujZeVAUZfsWxtjw7lGiIiDkUuKrvPOnLtsxcpRRrgCkxqc7QJrYnTyh7o58Z1f+V90lXYDrwOuV8wxOy70ynPhRSn/yrjoi63Yxe7Y1EeNM9fNDUOiSxkKhGHGhccd1XQgSwNHcRa4CZam41sXXGmMQo9bWqpa7D9asFGUxh/DFVHAwMWWrUvjt6SJDTEvhCA1ZD4vA0RZVyDKUb2pkfWonlqtR2rlJDCHZ2mNAAn8iIBsMrTUbV7zFQxtdA8W82+LN9WaYujan+FAs6X1okb+t2DhD7lMvat3RgwfRa1DNIG8TRXoSdFgoix6JjaNtARKS5bS3AbhO99U9mzo2uknddazXg2PVgYrYCxthmFmmFNhgfsBtQZnth6KaEaf3Tm7siTWhxIBSEKe8oq0JYbhaDkmtw3+aw0VbyiYE8NXnxB04YtfcGm6B8KXNffA0rTOotAH8fQgW/T6XoW3XOnIvYWZhGZlWS9zd8rhB7oKZtM+WVWatjA2KD6utq7gMQjhQMY2jfqM8BdMVZUuoTZs5TOU5ukxi7wMxakteA/xlvffgweHBJ9BZFEat7BGDmiQZouAfbUfgOPRgBSRTmQzYGw34im+1RuaObBl0GA9rtfUvVxtaV81j8pzL+NcbyhrLKk8gTCQXEt/iidnr81kKDIDywQX3ct+Xcg7PsN8F+MQncyIRsCGmNTZdC006gc4xtp2lTipgrqgYDzBYY36NrGIELkS2dqJq+Jf/UJ7NyH9r4kQvwGVss/SUIiswISSr8SSf9/2zRx29A1uWkyxUB7iJb9sqlJQQvSGwKA/Ov+2EtJGIIMzMlYxOPr6qEcY54tAmbUo3S/kcdfQSAj6VDpRgYv6ROO9J9puF2IDCy/H38dKQ==';const _IH='f92f434d8e39e3209b3941de38a69183a2bb3de07ceae87b4e1f689cfb498246';let _src;

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
