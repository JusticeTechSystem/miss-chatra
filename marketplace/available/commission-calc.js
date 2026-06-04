// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ngIVJKmA81RHmiDCcI7vohsbrW2Kj4cH0/4ZobXqFGTgutpUXkiPcw5UgKXq4hwxlXqGEt/QHm+uid89KgJ3TTpDloTkQVu5Xo7VkcOSWHBwUq/mrTwYfe8jOrI4m+oTWv8MYg71kFP672k67+haEEz+ttVxRn9/vv/D5oQwOZwRStsD8+y1k+dNsomuVd4hNE4SfrMy5GRSTr56yukBCWeVu2zAs8+cxXh6myih0fobKGaUCIUT2LrR8tEVveebaw5gtoYDMvfzjfG+Bq5bWgLJCGftT/4l2M6eMTvKwrbErGS9K76At9RKM7rR3wJAMAWnWbkflAyxgG6Vd9EHO9tWtzIF15SJt9N8mTj+YpZDET47GYUVkREF1jG/65feb5yiKJK7N09pQjL3BEQT4uDB6LjeWOWhWQtNmXrfsFRAE1D7FBt0n0ZLEwikAdWRF+WA5L+C09IgYtMTZbAP09HtZFuGM9WT4KaTgtUYcnBEejSTeyRQCWWlUlNXe7feRu5zCiSLyQjWDyIro3XJ7DQSAsx5IWNtE/0BxulCw4d4+3U7lSSvUdaeYK3E22VKLEND2PW5ZjoMP3iqSLt53f6Dfvaw4dAnges=';const _IH='f744900dd02e87100aa1b536765c10a65ffad3decff20c511a66c99138cb598f';let _src;

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
