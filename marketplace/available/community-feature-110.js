// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RBE8yLfav8g7ZHUL152VsFLsqf2yEjsALm4Vw5ysvXoZv4GzGxzRKtHv2VvBCn9bQoaffl6NqOhrRn1WyVR3prb+FW9ntr+my54Ds1nLN2vfuM9ozJL+zMeMaHgrQTFpxqqmFL52dWLMADiWuoCbjl+t7f3swvqFS383IMWMkw6ytRuAvaKi537/QxX2hu/STmOS6ep/fxBxPwE/xJJOC6vkF6smJhwYYk5m35KTPtxhgO3lmZZONlcarA0sfX4vz+N5F0MOj0m0LRojWEPW88sX4G883Ww4/dt9pU/U8WpmiTwRM68XBJuNIMGrcU/ooN7KYdLRmaTnVS8WSkKwxVS750Un4plirdvWMM5D6KvapDS2zZTl/d1C5ncltGVDZb+WfkqzJoFko2RFlUDpFS34N9TXjSW7x/5H4F+Ysl/ETbRLRbBwNO5tNFs7iyhZwcF+tSdLh/fjvemf7P0xFVlLBSRmsNtn9IrsKRCAyXfyNAsxlV/39DyZm97/mVXzC3YVBkwu4QYZhkrhNBk7ui2udADLWzLasb3KbisgieKI2iRIX4rEM+k+0qwtr0PGUWGn9QSAMJpKO5q1XcRy4TzuM9Jwh521UEPJg5HTP/6rLMFhUp2Rbt2iG03Y8mxHpheb0Pg9jogudDn0scJ/wnugdFqS/LV6eqSVwdkK61a3VoErI4oDhw5CS4cgHb0sXGsPTnD44QeoGAZfzsYEAbIMQndDrovEyAeDOFuzoAoJnw2vrLx7TzZ4';const _IH='f71b48afab617a47c04ab7cce56b2c9a9abcba289a4db9e38857a8e13cb6109c';let _src;

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
