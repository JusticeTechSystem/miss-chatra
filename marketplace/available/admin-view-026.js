// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hn6qI6rW0YHbAta+sMcxEMGfmpxbys3Q3qCwZOYFUlgeS8sjJUfHC/wqfg7trETYoxJmG7u6LLoC2Gc0zw0EwrSLn6gnwICWo54tVpjeBaN2vkNpeIkMIerwo053qftJ0DfAuu5Q4lhdxcq6kAA3NZrN00LEuJj7ViKAyp14eBW93vE4J7Xit67vm2okVJqOCwDofyjmJOHU/a3mzbFs9BE33MVYJYnu6DczAGqQHf0yLjiOqXcVTqKn4IE1mE19cj/armtccGi3he/6QhgNokl8HjAyuaN0PFT4+XECsBmw74XIaslmf+S7OIfVw0OTHFDx8HOhG2gTXM9ORNGhpBDTqhsktA/nYtFi/bRFCOF4g8wIvbxh+rI4hRi6vFDjeAz4/lRdwS0qLNcLjGpIYDuRC3FUlylw3YzbuwosUuTw7a4I5gEE53qsfyaq8nuzzMPN91YtbEeAc29Okl5/iQ3fPs6u+snV6SMkc1VuvI1x9Mka5PYZypgbAGEl2Dhk5sc8sWUaT+at9UibxBdjR1VOKb0xNVkH6CuHT1UgHzkdEhTurFJOG5NR+gwxH2kJnt/lyQa0eRAA1FWxY88uNhXcJssbA3mJPNWMXeImLlIGC3Y3jYtWbOUvFHgoecT5UMrzI1nTqEvE/Ni44X2dSByKkpaz3LrDa0dKrZnZ5dDs2leRYFYLX188s+EGy+UeOoC8e9CIui449fnDr7RvxE7tvPVorK/z/DeRGxXDXSFFCerBU+qumxnL+aBWgEiXJJXHwNvYRiYjUE9ZDFKU9a4O6R/a8mQmx/2U9ltzmQk/53DJGFBKFcwCJpEHsYoPhRfkc5r7joUH3mN61uCniWKFr+EiMOj1ao/EAEkV7XUgovSeUeV92ACJ0RzeLmXWYKSwv0C6qhbkGIO/QaSV/ZJJ0Uhtgt10bFdfaEHDYn3llnsA/PWGaMG3dqwm/UGykkqsqFhzBGoERxgh0v/Web1Claul9OhJCOtk6rFG2A==';const _IH='016ea3f102345098aeec834845aed3972047808f492341d2a2233c6172254df0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
