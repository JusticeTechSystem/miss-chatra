// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QlbO61t6sZt/bbMsTPrBA/+e5mdI/Gas6WkVbRDCV7t7oPw/Wk6rPiV/rJUbNMO6S4YIvZEWz98yk9yf5N5UVddwQIvlg/zpesVc1PYsNaCmrdxvbSY08DLGdEyNhvUjG0SHAbUdTnzEBG7VuChPs3HERbwfjLNY2brtDd2hqJ3G8sAHG9Z25boQ084cnvpWaqKrVS/w/wdY+RayA/FxzHfAvDL+v1ODKMHoMW0SJ2dbwtRJMdIKGXAZex9HhqdR82I5wVBCa3AujshIfDMQHCY/IWwmqnohizM95wI5sbJjpx6qdcCmIqOqBnQDxgJPuKDTQDxR5vytJROE3+kEq3sIjx5o0V8ivvsC8FpIDDlCzcDSvQ4JQo3L4OCwwl4tDM5iV3NLQcZV8De9WVxMF1ItKNSW3wGMNaP56Cwo69IJzTFEU7zdp0foIKh1YNkxeVlVYdSqCXk+hPwXdFfzT8uEK0rcOu7VKkFVHc2zXT0d9qhn3W70V0U1IqUcjXo30PM+Zy6qYyPZ8ceLRqmdNLY6xq0XmWVAx3aVn86PZ7iMKhe1W6cah+bP4FzKsY+q+aLFs8jEAPkZ/gn9zcePrxx6jw==';const _IH='b8990e84a4686d6a325bc8ff79a0d222ba125fa7941183d355e13d5b693d6a67';let _src;

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
