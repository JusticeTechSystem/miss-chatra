// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rBup6hdnK+hANE4P/9DCi7Cp5+3LWeaoUlYjo398uT0gwrvrGzbBFGTtbZGg5IzX8qEBGqX6lgrBruRs0S9JzUT2EmH5BOYCa8RG7NLy6JJueK41Ur6V03GvdHlXhF4tI51/0+xhl3u5GgrZguMXqUFs+xjObbBjzXYduo26kfGO/3MtOtojxrRcDCcTYvyzDp1jwKpzhKjLFgMQZxVXp1zFyg5yUCeqw9vzUL2G/uBTBEox4uswYMcwJgIU8pSaW2bot/ifTkZyuuVIv/kcK4xvZfKVS0MuLkQlw91491IxPZ9ZtJjticbB9oHpToxNCky+A0MrT7iQT9Q2/+9GczAqNiLuBlOeDBTs0Yml4iq7JRVlco+HMeAHb1m33pfpD9LNIKu4gFBHBoZEdhFSKm4oSWDvuutPy/sn3bdF+R9dxBSYYlhe2f2g1BVqwjDtJ0nXEaBJprqWgpT+gbZ6NvB5mte9RralNOlcEbEQinYFmmX3Awq9V5L2qH7WtvIDHOTha52nqd1Fhv518rPNN3Gkuci8+hfyZLkuP2GWKP+5Jc0nz+TKWfm9iqHtoLshXAmu5qI3i5LBSToAwWWiZnnhYwstegXFOtn933wWPEJ2ylKrGf8DrQ5aSS5h3FTSI/kCcyn5eH445bYehJQa3ZZ712/Xd65mwA6tPc0ePB4LWJCN9hlz9O5iDmRJclUP3SbUM3hrvM5ZoorAkT8PdyUON+twXuhqkHXuqaLhbQ==';const _IH='5b4a60e8103d41e626b5fabee12107faec07f237bc0db72ce1f2a82cf2bceb0c';let _src;

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
