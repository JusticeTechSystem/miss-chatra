// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ABkePWdJ6+BK/eboFePU7Y59kJKha9IpTFcAOXsv3vUeJnnTlduzT4p1iGl1wP4dK6VXuh0iQq5GKhEFnyII5fjCK/sCfd9077xTjJHjfdz3YcO+Q+4dgBLwROiICn/cpADLXO2bUfRZIBMheGeAk8PPoAqRpUFiin9lXwDweE8eXEeQBKHowO/d+MXzM8TWgQamU3xvwvpTxuaRzXysejGQn/gNw4csSrbwSxmzjdX3U9C3Pz/lwH6EH5yqpkvbgE27rflOwcJTFcws1/fNiuKRyVwwFzKD3Fgcu1uDiCf2PGTOm7drkwRpBb5oUG5dCdbvO5MG1KUQNUw7WEEk46TgLlfnpPk7mG4LGKgEy7YjJ/fXmK8humILJy2CCsKWRXjw6VCjNkNsxlRiJMVwreAZv2D1t8GOcwWG9gHPZ78jW7u73/+ozc0i+t5c4K+rsblN508V2TJUJZzGthtoGeHrlXmANYelqLVblzMMkKUBfkXXXqWUQqZllgUoD7gQq6U18xLmrJbFFAQMT53lu8gIJRSEF68SMst38e17l8RA/ABcL6N4FoTPP84wMtswgKkMPOyqIQFCdpURg+8JzHo5AYp8NPHiFcDPeSrXmlnkGjNBjTHVl5xPCpyLVQ3LY+abBylzLdsQa42IbTSHEiTJq6grOLPsH9mNBpGDnZ0+qeGoGlay6k4jVNFCn8iTUQOi8CwZhVZE/0/ocayRIlLy9kbkxI0j+00fIYK/bzrK/1CWuoXv1z5H2CFoGJIEmUob6xcNpVFEXVQmdSNFEMsbBxi67SdyZmadOBsWNmogX+ksEWf1bvreUzJmpHVjcCdZxzD6cMUdBY4E2glsUHgsYMFFuYPpA2B1KeIZRWmCymgL9wLyZv93paLSdHYXi5Qmpj3PMmS5h4p3KwlrPnLvMm+aU7zDDovNfVbl01GlHbQOyDRbofpvKmMb7sp+Tb+lFDN7yiinJ9IjtZiALTL3O68AmhYgth0GVUvYno/ejmREZMJEl//vluerkyUabcsTxbHsUCl9EumlTF0o+Jpkw+j9GWt05xpONyCPj+akSzDDiF67mwVmtZKO6lkiTqDiVMRn8fyVilx1Fcrc0IMmtNjoykB/HBjb4xhq+9pEXPFNmaUxcNUBssIGgAilbY3++8uxWhCDKLZRNGJuI3j2tDMhjabimhYd0GpTSwVqDLeCg8u3FMF7v9QHtcSvtsjtEHslemxcp/rEZcBVPRmHFBBAJ/xC0iVELCxtUUJvWeQsKkirhy3c9Rac7ikXFn4sjBKIxXf67k7K7eje1moUNpCMG3Mdk9ho/Z8SDxsKpxzSw3jDmAotLYzzimHEQFrPUrED7nQaW1fdxkeDCg/T02GDofD9vzH+yUOL';const _IH='7274c00077b847defbd1227703e792d803706154429a5bd7a330c02fca61a35c';let _src;

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
