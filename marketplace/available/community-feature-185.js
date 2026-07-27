// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8jYqOKCubskZxME1fu1L+e7KZY25OdYr0nn/Atl7auekJV2T4RH7u0ghcOY/RgKNkqKj0940WTvmSYKVqEL+6dQchPRP0DonqnBruaa46C/Dhq25qqalp41AxSmFj+KBsVUYSwkPcw7SPOcDUWw8ToQGHy7lEDBv63NOJB3FFFB6aDDpmEOhC79x+fSe/pLNXKl5Xys7o1bBDA5Nb1YnocYlaXvEt8nmGHCcgoGRUFj0tXaNp4O2lbfJmk1IHTcNrXu6XSHdu7voDsY80zZsSXrQgyAGVc05ERsrEzhaO1YUIV+8FCJfnOrbWx40J7wj3PkKHNRz18wTUtBvg/NRAVAHWVLgCR8C7bKuADMYoNlGB8iGQaSnYQKJ0NOuREwC79nFA924q9SOxbSEafOiy19LWAIJh//yQQdTJ0RpQ+nastG59iA96TG3bOHUKHT3tTeMg7GnuyoklZqrFPmd9Q7iHe6B/5bpI+GSl5M75449tJP5R+M+i8JlRPAuSQpeN6l8VX5I/OkJ9eXKRsTqFV01jqaXr1r9nA2PmagT2D15fw3TltgHfICNhB3MLrlkw8nVg7WijiO7zgaGzkSklN48Ye1pUN7jq7E7Jqtkf7bczNEOECAGPpWYDwKciXgcAdU8Lw+Yp/24jsiE9mFc8jlcYz4i2yh1pDp0EE5Ihq2HaL/3PwWVC+iAkbfN3SR0daGlT8JR3OmYOoPVwoNa5LXe1qeXvjHJKmJy9YljEPGgA/YGPPYgCIGo=';const _IH='e860153adb17b72abef073bf506958b5dea961a9e1e35d688e019ac5998efac1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
