// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k5A7OCbcj/Qq0eNVfQeTFy2T4D4wyo3C5oZ9D4wbyt34mvMfAD3Xq4x2Kf+L+4+mFRU/aH4/46wtp/DESZ0/q8ziVc6dbKVk8oO57z9iXD2gX22kc+cv2DSKBpQj2J7bWzOYERCnlYZ9LDwnc+YmL91uYR93mpHQSaFD7M8NlyEPDrfeQX+i/J3llfB3MJ8LDJIDQILEoRzcmavLYqogZ/MSMXTId/lJUgolqTvLjB/SyQGDO1X1Qfm/R1nICJ0u3kfHzMqrJFJ+tVqDUY2yd6FsWx7rlRbx/E5kuqJE0F9XOUckJO+EFs+2T5574S0WFlvJrJW8vs7EgrZnP7q0C4qaChWys/fN9s4Q1QNru1nDKeK97VJqrxRsGG7c0krRInL1oUVVL0V5nVigWQRTHbd0dzyNcAo69tv98fi+sTya6goa1L6msZzJfJ0UC2hFMbBHpspQ5E+fF27qEz3dz28pkEi7O9nrNNzOwwBt7lXnj2+t4LV+DTD71nkqnWsLz5L8keUgYr0/qzOVWWFNIA39ScyiYlsaT8jpwz8h/VH/KOBLHBj5HJ/FOzQFJY3p8Ngl4jh6GeBDNh6YPudiqo7j7ETppVBCuWSfRVgRhq78VymHTXU/Ec/f1c0igf7Ci1McEoEPf3UugxlIcaUAOpxuCJuhaa/zlUZ0mo+yW+1Ozste+xM0mgpA2oFMpc+8Ew9wOkQcSfIxDu3IdnQ9SJsfnb1M5eadyA==';const _IH='1bd10c2b589be3aab3a6af5a6130f1a45deb668bd252dabccd7d90e826651e0b';let _src;

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
