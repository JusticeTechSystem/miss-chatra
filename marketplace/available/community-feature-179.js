// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2UTrZo0kubbb4FTDcd6Nov4bX5fgadegr1NKGWnUDumgKEhhH+xnE20YdAp91PC/SUN554jJj9B39LCvl5RLhZDymXwEWTZOk2wVHVATglrAox0aCtD+H+lxF2N93hgYmWQ5TdRiSEIoxwg7KKkqPy5KfDH9K/8vmJTTXuYd/zjqaIQqVnEgGum//XnUfJqfbTrvwZqePljnQ+6LcKKNEU6uM3rTcVYjLcD6NHW1JJlBIu5GbjaVoec1niKmNTG42pitfzbJv0Y5G7w3Xqe/jX5xU32zQbUC84GWTQ6DROXGNa79fcGESXkq3yQKAYLG0AkfQkLRsJcPu4R+dNpWo5msoVzUjTJi0cIYVFUIWBGSD7ItdOnRU+IZ0q9OXy7/I9cFpOGjq2L2xoidFzX7ipWR5iOgfm9kVUefXVeT79XhDLApPzc5odbTqEDlzYad3kDwxmTBJkh3zs0c9Sm9IKMVzNye80DeSIx+74/IzM3I7MjxMg2BKkP4RGmYpSRh3fequ5mVrxjxolywoT69mOAvT3GD4+qZmVbAw4PujDuB37+RFcrX8jX0vJlKTnm9BIS+HemENOQuJEPgOEXOOsk82ZFyNW0nUVSm1KpSwMjj5jXBpL9hFVycDaA0AMwV9WPFsBjle1PtLOUaLei7MOhZ0FcUcTBlhnyARQiNZO9QsSVpHxwO5Ptxn9MuD7dm746Ok5QkE+WbE0Ga9OOWRKxO+fpIlfvdZdJH06amvcZfXwtzy3g=';const _IH='ef632805f8420ac81766d290ffc2851f42a27a1303ee6be9c3ed59ce787c2153';let _src;

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
