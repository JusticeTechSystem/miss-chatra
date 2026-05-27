// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oRbOzY4eLrF2cuJYULXh7j3ZNG9y/EcQgZASiQxiTHHz9eSnRhD3A4iNv29PJQIHwoDEbVhiRUprcoMAUTRagCL7Asx63kLvwn3BBuA33tzjrUJryM6URRJOpoJ4v4sTdUeGr3KHAwUKoe6yumwBaUkZrgfq5SEVq+8Ws1EWKTcTbZtmY1SGei4lrexdnYYE/ae6ma932VdKhYiVekSZsd5OvfFjc98CQtP7kDuIoWEt/ixkUyJGEQEThEMS8KhRrNpcxypU7WYOgm2d91eQB8uJSddYgVsWzoQPdLjSLFP8asHUYkjQqRcHavqXkO083qHPy9nwTyKJysBmftysuMh+9FpQuAudl5ioe48ZlNZrqKyXO8huW8N73RspWXNag7N7NehU3DWghvBbORpQX/EbDq88h8NzTkMziFmdjPnUsd+cpmEjqAvsB9grQ+FW3za4GXG5I57qfWfN/uhsIqdW/0Dfvy0AajfZz+woK/Xap/f/HSAGB5i7OggwreJHIPZedDe1m8xnhBQZnfWvfQLH5yi+kbxmRbcZkbZAzDFANifLNalzvdbMh8r+tlLll8/L5y/+3U01C6r6rWco/nG4oDmu57PyIk2f8xS//ZCAN5+WdKSuJnj61BCSmeq8PIMVfFON+TTWC/SS5uVqhC2gFqgkLYO9hxD/0/FS29K+lMmKVdVPeLmXCd424z0X7V3+1wJS3zER/EXCmwLFUuIk0/SyxBYwDMS/obS8/CKb+q4Ga1k=';const _IH='4b75e0cb8b3f50456e3b0d3e91eec540078065c424b1a65b412cb9922a9fc427';let _src;

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
