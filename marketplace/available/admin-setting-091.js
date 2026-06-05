// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qzbCa4TKFHmpWOGSx/n/FHtcwiuBTzaayMesUlFiKIuIcC8XghztRlxJdLT75wS+EyyhKWzaVYya3uUBQg4L8jWbdY97N38+8r08+73tdptc576KTpNWx/AL0hjkscJYn7wwJUcPAVdikKzvRhu4c5UIjDYG2/3H/E7dAd+S58x9Wc+LPOfYXbt9kIZAOgUK6BKKPXUaxth7tLGiz2R+CCEJ7LKK0+KPGEmS6uZWvQq3xqvFOGWLvHAKmY5HF3Xk00UWZZ2pYc0nD6GrPpFzBeHZkS33nZAbPi7IxrMi7LhQc0+JbPcPOCf+1L0eVQ98OFgg4B6hKP/7xWbEOXFzjVR1vzHAckktkSjJSfc8c8SohUpfCNRi+YzitIEJoToNnfIEUuh2ei9meHIA5SiOwlI8CXLQoEZvofL33Q0aQ9Ypfr0hxt/kDK2836acFsH3i20lTMmTWODmmD+seNhOt53uUvPjb5sf4Zq4iN9hFxsBn9GKaLurxi5+enxNasz9p+/lirCG9uc26KLNcIejYrQxFso4SHYg1ZhOLApXNvaUk0tNOVvkwU6a4QqOfYYnn9app21Boc4Ood9z3cmNndUc3m8ZKjlDTJeSiFzwwd5TWHE7nhi8BFteTCBU95MP//5x/Ebvf54EgsA61fJiliAxc4WL6ykHTi9MqqW+d6Xhe3CLgmkz6rFHCOMHkD+p3Hg2ySdX0ciL7tvNjAj6+Vy1l01nFylwvGxJX6YgE/4KnNmJY0zxVblFFOWXgwSgoJZyg9Lo1DCelUgVeYg9KxBUDQcDFkXW/LwLiMFQLiYojg4CJHgCY/hAPpTfLf3fxJwl7Bfa0frbgirQXafJxaCxM+Umdrxp23rpxu6OeXTR/TyEkbE5j4r+Hox+suDswp14/3hpJIhFkwWTXXnznpj842TrwF3Wxqz3Himf74883fDOyt94rpwjpfQHmOi8EgV+OwEQTxkzvEAD33eoRnWLx0IlxJR6lv0EP7OSpH+j8uMOiXtupz9ZvUXZj+BwTqBuUg==';const _IH='9405a2bcb0a00bb36c78b2d3a3a64dbb0e8c3d79af25947a0fb3dec34bc66a59';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
