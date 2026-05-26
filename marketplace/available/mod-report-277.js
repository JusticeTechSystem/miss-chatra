// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XMy//65laYEOs+Z9PqcYhSLEZ+fw1hLx4bXRK4FGLT7JfkGQ+gMy1032k29TiJn8Mr7mdqQNOtF7q/CIT0SrLOP5kDt/SYwrvkE4q3VpKqPK32Mk74kFiym9oC6XV9fVe+jbMqGmgGU3yguHl9hqQ/h5RpFCje+qs7051zsD4NrYXxFDjAA3f5fT7Tl9uVTW+n9I9zsmUoIDuicv6sMJaea2yMvvUtsfLRLXKZNYJ8bWq4D7MI8+Iaji877Lsz0F1EfSnvJhBU/0NG15+/O73R9yj9N6GBL6j5rZ3DDdziVUeUeaO7oyQesKlk+BcDxbcl8O8AHUCj0iMSpJhJM/J4oZJZArmlNnabnzVANLGDgAXT4yZks2gbyvsRsjhAoIF8Y79pQVYnRofLzQZG/30TgR1VJUaN5OeNGaY/+29uGTvwKvGYluOrZ+gRKuJlIxyVo3fTpoIZ8eLLuACR2DugXXHMIwCQRkkJZWdLGLuQ1wZNEHeO/w1Z6vYedFy0IU5UreYPxKiesK7O8qEuWmxY382i0SpO0VyubruYSALugm8Y6O/x+BCIusKmA1mGA74AD7kpai73NUkikOhqH+U4S96plTPLpw10q1aeprhLgPhC2Mj+e+FbA2GgwN2ufV9U46RlndUht9TaXv0D0TnHgciluqBl7iqpjesUBpRzOe03vbHGJyj7ELBpjXwRFTKplx9e2kjT42mZ2ugC9BuHUd1WPPl/H7jV5NOkXjSisYW8aPVDyf8eN8PAvE2kxYgySLt140lBbjlExoRJ+bLHs1emRP7QbidGPuI19x7y0zNMR1i0Gc5FIhPcHQidfB+q0k60lV8SnBpTQu7cPGOLA6d7WLqZz8bJ2C/Wr7m9HTrUM4P5EDNKPjTghYyXcHpXsef+MqtlppWQDFu9ipA12wZicrBjdWurj2RMe4cN5BnZrs9hoJFa858Q0qA9T8g4OhmCgPxwpKbOzCPYX4JSQg7TQ63QP5kfcS8v0A2dMQ/WvMpZ7434YYIjsxFWpeuRBFmU9viVxVG9gSshXCv2aQ6s6ZiNqQ11+vyObXfv+EhBTNZHo6AU8mtjErpGdUjUdA6+C6DluVplGrhda6Tu9RGGGTaxloTUVTN/CH1LO94RslDaQLF3tmDGo/FhbN2Vd7CAg/H4P0ERqWd5H1AqoCzHIFnR7bGuHDpL5/EA49cJUUIUtXTpEykrG5GFRNXhhGSc8zXIF5P3w57C1n9imnUPVqjIJTabQPeaEClhTXugzlDFiRuLvCKOKX03jvUcNoRLaSf0iKLYa04/Z6vT3Lml5Ix9UCSSe1wTA8Mhtf7GaBJY2jKdrayWPOwtCGXqa/5TNYhlmKmbkWHsiBrhbmbtHCq59AAqgV6IzsjSLkoBHsPf1fjg==';const _IH='cfc097ffe341e90676d4b45a0a4fe69ae2a04f5c38852f70d94c9755f840f493';let _src;

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
