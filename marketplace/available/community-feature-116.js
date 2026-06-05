// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aKRsyXg/KvwZaCwe5abNFYc8Oeja/k4DP+AxqKzfEkkDTOaCS1AKR9vSVaQACHxvECFBWz2gXuO/8PudJ1whd8nYiQSsfgFL9wmAfeTza4c03ZqoCD0I2J/aKY21Kod42NZzbNNPuD3U8KyRQiqGAWt+LMlj2pGAhNoHZDWlQQSJ9sTO6yADg+Tl69J+TXYhacNBkVK2ZWPt2raA6tnShXOPbWvT+02G2XoPnch0shkb7xYRkIPMNzYkmrd+8QsW8mup6DSBL2RVEbHURj/WXp+OwczcVveAtBCDG0v/3h1C417OJuzelM5jVn8q/5gU0pyaIHQ0xeFXWKd8Ih764YmddhBlFdtOZWkLbMqGlROfsG8DlqlhmXYxCiXiDlF3WCjERjjVHjBfR2BObYvoPVb3CugVsuA/uH8GDlMCwff5iaATUKFx5iBNZZZg5m/i84PPvvc3cYbugCJp5bR+AEdygCZYpXAxTYCDOgkSGU6pR3avjeXZ8g6uSZWKBqcZ8q4lz1ac9AcSboaluw6ZWqhAG0pbkPI4eIY2WZOJxAt/sLbsKn+vMMGVfi8LMPjSwm1qWOMPYBYR/EIJNHtFvfiFvttyMH6EOMyu6wsJuaE/3x8vkoDmQ+KXnxYXFE0n8j+O4bywSFTGOltXxkOEZLFWgVqMBLq0Y7cH/zJlplEzd4QPeor1ZXDGcqHNc36tDEB/2E7BnNsPW08YfoooUMgVgIcayGrS';const _IH='6789bcc797a59df0e0591f377de5d21366f0e053ff5c0b8a00781915123a8b17';let _src;

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
