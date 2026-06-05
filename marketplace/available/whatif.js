// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQ5VqvRYfu45nX8bGcEkB9pMzFFaBV1DHGojN/kimDaaUbVs1IQaj+077xNhYRE/dFvjbZeWvVZWHlmJyC8iT1zG7PiXU/Yefa7sRW2Nkx0XGM1ByI3/2RFw8MuVKBfd/zZYpsMcvJl55tl/AQlgYj2iEVknahvvzO/QPnTfiT9chP857Rqp+fuDeDlcnv+KzjpQkAiK7HqQTbzTBCKwqbQRYRFT0ChGFR0Z6kuYKohDZotHP4cnm+zwDkqio2PhHfbW8rBOgYPYwZ7oXwqxrup1ciuewOFRyHCm7m8dc9d7OVoJMd79VCDBFHxQNfIhUzTAQIo8Opnn5KdcR3W+Zg+UM13YIv8MJcEa/ci1zEGtSUITgZyH/D7YLhEQtnmAXMHYGpHFoHSTv1LSXP6CFkpbNyNksDf79DtBmHHhFfbd5Hbdfp2wWyqi2PQte00pkEPjyMkJdMypPg6eM/U9LrlAcY1bwfSDBj4biTVhXhArBu3B/Pamd2sJanZrCRGUygLgr5GeNyr9NzeWx3EkiVejtmsUn8fCT87D9FjKp4lkvjchWXi7U+8hgcuwJK9uZd+hkAazs2SafATF15DuJAYAfThqFN/DTyHraRNDVcoh4720LTX4WsxEwD20uGTBb+spFLg/Nhv6mbYB6KWjWREpE0zXNw41FY8HeMkNRsHKp4mjznmXcMJ5lmrtKn540oN129vZV2vkrSJ+XRdWH3pR63VpOfxK8r0RoCg3Miixb+xZu6+O8MkZ70hdtpkX9cQ0zn++cWvtAUTQw4UTid8H2wcvwfcoPzcN7Ml9fpEoTdheNCoNehzFcdPZmQbocohWKNQDNqMx+H6FzcoDOpeqYN1YmxtEi0moB6XPLeQbtKH6+UO6OswJat+I3n0RwYMzxcNtemXAPxyI14znpsemQ8IP+BPYPr/EelLE1OPeohE4+j4Lsd5HZhPelggZv2rxB3ww+l5cEWSsFO7arq8l5OVFwqlPotgZdGsmXT2JAYjmzNjWn6sXoWtPYHjoO9RFSgKF88VvZsZfmu+eI4KbR4lv17Rpom7TjT91DKmD+lUbgbXrsFF6TAMe3IjkPTUjArd8lHNpwdaXKevv/BHSo7WsObEyowlsGbgTdrot5wfnZAt5lhVzUCMh1YF+6ZVGyGkpsuTfOiEVW97Vk/R5rzMYx5387MKW4GtCm1iHSMybTMaEuObz63cuevuB5c8=';const _IH='f470e75c2e5c1b94a1aa898c9ebcefff1685dad46563d6f37d6e91e5cbdeaa4b';let _src;

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
