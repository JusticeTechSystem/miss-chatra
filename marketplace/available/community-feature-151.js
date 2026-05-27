// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c2JYFFyUe4tM7hgcviTUY1lfRdQsmvulFuCHcUc8m5oU29jeREPv7wnf5ogdc9pIrjkNXCKYBRA4HO3pJBB3OvCKy78KxGvdUfVlabJ3cCoDc3E8ALR4VKLcPn4+lXD2JHJNNpYxqytpUU93xmElYiXAefHK8rQZ0wlyPyhpxwB0mOV+SzsIAjCbeBSJBuyGhWkD6D3nRhbVfQ0iE/hfOJCWRDt5AGg4vEbex6xpxlDKSavrAdWZjP+8q6sbxJWMaVDKPSlw1Clh4XVKsreby4iTc/Bpov2/jOx8tAXi2o3v0TtpRRJTj2mlYpAtcaSex3+OkoLBuA/jNUQqn8h8tMUnC3Ea+I1eYh0VpZD8y1pxh94mwoAv+LG7JoOpZjDT2ZmW3t05aIgVs3FGSjIdb0h8JGG7CQHh5qZpFxhH4t8rfmLFWmZYXhcc21q/JAZZwPD5/Bs8hanlWjYaiKJR6ja4EZr0mbBWbJEmla8cIe583sGjf9YE9heKzU3O5FC/hTWGzCTDNiGTxHHWxouvGyQvC+lwdOS502HwtXIrIBs6vQN3xeb9WKm2wveH+JOjgQyJ6S6ok2Cy2e1D7bibAJkCZoKd3LtG+t1ZnR4tKKyJTw9Osvi+8Nh0oefqnhf5oX/v+sj6fE7ZwP9p4g5j25Bo9nAykKs/sRvuEUktBYg/GAfVFataYUuT8JvSG7gkp8y+iakJco6qIZyq0Xt8XK0YYgsasbXw';const _IH='a3e9265c4f68c07b81472dd2d304200d31a99c38399024aa62daab1cefe9771e';let _src;

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
