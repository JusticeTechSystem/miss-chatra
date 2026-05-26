// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Rlj3JoOVGxDoceHwMBpc/wqdCN1tZuvo10oOV/86pOrDCZIIX5nC/Rb2O9BSSivfqdgB3e9W99WnKXV7wh9fvfDpLqQIVTs6LtrfxtbQK+M/vl+/3sHrI0Kzf+3e28ufVBxo1HULRKQfAIdCk4GmnisJ/N+Fc4FuqAOVdOkcF13tSl3QefcIkyJMc/A/9yyLbo1Dvz7nRXRXZLYVLp/92kMEAYtAJ35fouNsmUiciRKSv2R5U+GtJbaqQMykXkHB1ZWTcGG++GVJF6Y7lBsjHstHznH87tDEgd6SbAxqpPnYfLNOIb5TMrP6qqvaTLhpKqh1x6jvjcOuuDVNYSyqBk2tbDZjQwqUBnrHY3UqhRcOhT0rICFGPrnkHPvsqb/ic2H3JY8VSq4s8T8+uADWlp2VK3DtdsxX96xXd9f3AecNgbHLyufCod8XzAP/Ei4Q9pDHlhyiOn3MnTtiCYSaIQlzNNGf47olAeyYhhVTWELo7pfcWzXnHXIVWyZ9nG/6zXQ4zy4nUHjpUS0JiAx30UOyOmgJ+0OFJSIyRac6pi7Wkyz06oXGaz19xoluENa3XLoIlEyQ3IQb+Px0KkvN5evrfHDiNuwJgz5GdbinbWZ1jVz7eYLupAZS8qvOgc99TIBzfpMx2RQjB1TCrwV4nU7MQksYUuQ/3+CRd7RrsqCkDTkQNJ/XBU3E6JZkOKZai4hlQtR7CHQ7s8g43SkzdcezU81GjrOutS8Ti5E7+8gngw6SqKVJdrRnC44UMXZoph7y6twV5YjaCZIsxDZni5Q44n7IjGM7JBGKuQNmYz38k0Gl6QmGSq0xVY47lsm9bO2NsQjMBWwaa37+yNw3R5ZYwsjACSk7Fk5pKGg2bEj03IPF37LM82NeE/OHE0J6xxbZhXoqPX+FKFbxCHcRv+sgZGRytL0X76SmvVGgM0AyNMNCNI8kTLfS6EndLG7f1T6z7aZRKBwLikhRvC+MaDZwrBCS3ovpY2x1L2TCVEUuhwihKA=';const _IH='10cee37de9184c94bdf6469a79dcd318c533268083e1ea2fdbd637ec506171c1';let _src;

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
