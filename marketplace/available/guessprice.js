// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AV7LV4XbVP0XL8vbSHIrMiePZVWI6Ip2enrBpxxT15yS8wyUP2J2Im9ICKh07ycNxEwpOtC502C53bCGij++jwLpMYDEdB+5WmTU23hbO/hZF0EwYMDBGN7iIaQeu/AnurCxF7kdxHqOmtJ7jZ+bu9AS8AqeHFgnuQb/XVXBpUnxIzjWkBHhKFH6/81Fkm/1d6VAWL9wWgNfXaJ8QlksBZaE8mQNqKQeBgjWjtLCORHEs2dieJ7A0Lfsc2xZ/Ag8jSoyFMett1JPl4tMqdhulOxPYsHD8ROxSswiPlt6GgM+j3pXMrE8HZ07Qdi3Edr5AOKcndlkjnIsfgnWC5IhXQatOhfCCMn4efgm86lT2A1T/54/e2A6rFG2kBO43Uot0Pb+e/zJ4oz+5mCGUpDSSkKk7yHouuiwR0YooQ9tUONY2VwthGbE1mIUDsdoy25oyaQMHakKIAlLN2rG0DndEbUn0pZfVq0XQfUPXsIcKWHh9lxVK9I/pLjWn6iaToKN+UUwRqBYLhIwLw5r1gUniP1bsXBQFX52YH+acfrn4aM0tvyoAJ/5dy27G0m2Kq3YvPLa0Jsz7zuzNcxWCap1+9RXqsAkZrspskHYsQKNH+ODzpGg4xCSHKxMqv0ENTB2vRF13Qt2k2e3BspF0MpfzLaDu5zslHk+N708he8RpTj0OvyWjjpUIDRDLOjvoARSkoYS80Z+BGsYRaRVuWUIbNPAqUv0uRt4KrGt8M8oI3ifuQwwhntdYS6Yo8M6PNG2U96TghrGSUYguZ7lT8/lpmTFkWJBX+Yij4Pg3c4DBDqV8Q4bvZivt29jcvVvNJgJCPcJaS3xGpY4GgD2Rbl5rhV257DE5ErbIcmJ/diIDJYEJMmFSZoQCiE/oeMhtmy94V3TFonl0PsyCJZOUsew+0UpSeSIS0AmwgCPO3MwOSYUVOAsDFtoYC1NLstMet0oZPH+iKN55HgvzlJoi80vgT59DE0AkcQd0gpNLBu6o6Fnl1CTttJrk2dLGCNULfGQBPFeIMEgoCi59AcThhWdAaHQctRHYa/3Lke6K21/v6SBbqFt6g6pvrN5MALEwmc2JdOBgRhLeDPVmaTatxCLkiV7yf/M5FEE/EmV//3IfoHwee0x+vj4k1RTyIAQ0tJqZrjdHSUEJxf1NYb1d7450IOuU5aiL47/rMRS4QVi3olAeBDjyjo3ZcRU07KWC/xTv/HbLbuz';const _IH='adda36d9069aa8f043f9363795fbcaa08ad3804fe3bbd0f08b531e0a8233e388';let _src;

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
