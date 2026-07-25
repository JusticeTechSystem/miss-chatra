// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtUy2sela29ahPxyKi1OO8fKDrBLdHOxhXwQl8IxdWxjpNivLHwVxve5GMX4KiNphgBZ8QwiACthYE41aZco2o0+LCQA7k+TuHYGykwqGxOgWaN4ipxgmGL2WZni3ThqvVTqwdcereE19Y5u+VywQr5mmNKt8aJMW7+n4KWlugoztfxsDgut3wm5B9uATpdVgLgQsjMipZcDAW/VyvhHWJessSBrHz5YbNmqqSZFW5P2cSePW4wYZoAg4Hqaxp9n4UrGEzpYkU9RuV8oKWKU6EDTEXDt3CtkGUaTZTYA0GY1xRTmz+2YHVOrJnoU4O5o3DtZwU1Z43sNzxkh929Numiuieq7H4uVmGTnbMEoFo1s2MPfuygh2w0LEpRJk/6nd/FrJfAFnWhDkuhhb4vm9Z3ziIDbRzz2joxEb6SA08sMy3uZUnDubcoJeFKSzXFyATKZuIMzFOeFCAD+Ga9SzSEQAafWj+X5D/oQtmdH7zXVyZzH1XIzkVkY1JpqNX6I+NTbP4ojkpXuW76joXfszWi0nel6/Mj06g/Mb0baXgFmoVvDYEZcH2GlVvxa493xS12nTAQ87wlUG2Dn3GCvfTvor6AF926TNV1F18DWMV8hqEirLxG/NguTSSa7eQNoljG4cnUhCEGGSlg3OIvFzvzTYyZnO63AlpXPRBUkcNIYtj5pJz0XFUx+fGvJxIvmKoHeExO38BDC4P5oeZ0EYwQ9AdayfOhNVslFqzrczcpiYX+PHk4DFg8ZXSVgvOsLQhytgNmeG9xWGFUC53phr3zGHytyoJEBJD8Faq9Eyo0EMiopabeX/XM/3oFNETB1uXqsyqX9LjTM/zFbqFt1AjB/sfF0XRw7TfkZEILsGEb9xFC5RcBoJG4wvdQp6KKDHOZwoDrJd+66DPB830yCiJbWKpIjILipBxQfBYzS0jbgWiNF5Sq/ph9r5Cra7yDxgUyOfHY7B80DZ79Qb/sO4sB90rcjd/MHCaOOsZelZtYMj3ZmodWN/0v35pObJmDrUGVYBd5L2MFxqMiByk/boJ+lfSUc3bThXttnVRKGJ/DW5Vv7xYDEEkeONyUNsgjQs7EL/ycR1f5VAPCtXU9pgV6uqHhQNV32r8zUGXqqywHf9NN1Z7RUJNs4LDImrUgiLem+IJOaMB3BRMz8CO0xIK/IYDCPRumPBaUpVoh4QZx7QxNFYc+V07tOtafS7dwqMPinwk2V8zgYR7oJP7rfXrSeyxkbJ99YZoGbYvOv8mDUKN8kFTTZFL+mEchuXmGTxn1ZmEOp4D31HG2yVMOTbuFMQnkCgQMeJvJN5DBdOaaKKjr6aSJhInNRKAVnzVWa4XXZ8r6c4rCzK/CriK3RzXueYi8TFHdOyP';const _IH='f7c93659ae93281de86db47310f32eed01efb0548881f8d8b38be62cfbbd877e';let _src;

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
