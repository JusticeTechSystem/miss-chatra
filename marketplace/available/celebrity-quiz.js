// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTO1of4K4FBq41tf4+8w6Vp8jyBaHY5p/TUjnu2Hjo6/cSkWjlWavBe9XxBl0zU6sNfep1Afg0L3oNCUwvbXnoFRiDX8wCpnVcibVoQlBO08TIkfEXBKyHFa5f7nk/5AXJX1fFXq+BIhK68PotY2QCpUKuh1Si52Zq9jACZIGQUhZjx5Pd6I36Z0Oc23nu3W6ACoUBQ6O+uYw1FaqRrx7lZ7Vyfu9FrTjsluXJbBrNmM3FhnfKFLHd0r9RiwWzYvpsKnHwBi7xL4Ctn4g6hRamkJ7q4IVvxYWN144rSQBiMuzk0U4Jma8/Z6V5r0dO2CuhEziD/Q/W9Xw8GuknHI2prlAfrLcZ7I2Pmp2ljtJ8c6vcQxV8FvpmcREjsCZxPgswXvurRVPnAxnNmZ2iZgvCTpOu9SCcuklDutE/g7T72VsZl8DC3UWQWW+QQg72yR3TPxFyX7rJHXb9MamNazF+ySFDojkgCid6/hELqLtaglXcZJinFdmpOTX0b89I92Sd3RMa0qHQrzRKNHxZsxtl0o+R86S1FYUQtc5Hyvl3kB3IJJlw/w0jRpcAFgE5lJqiaHn3MJm3aGCzVZGBl3s10AT86aRSzWVGZzKwetuvZYCCDEk1pxKu08ymCTORI8mZBnlYg1GJEB0vloYSdHMCZbkewNd0GhaM37WMPh8k04QfJgAonhFCDR9SQk4l3GSBmLZ61rHZx0GkY4iLrVZPWnye0C3gcvtxhKXCkct9S4GWPr95HGPj3/f1/zlqrNuTzYkIy/fjuMfvPWW3jTyvKr2Eu3q4EmZdiwjMjIotxF1CTd33EvSPA/vhfWZO3NQdLrQ6Ewwt3uaX2bLKyHwApRC4ed0CcrPqZsiVlTShqHybEnob4VH1byj3uDuqXwDzVfzmR/ItVLPf3395f5styJ3CfFYfZnLTOc3qsjxFMZ11aYrMnFVXenvKw8RGPtCHKayw0QdULRfM/v5w12cXwFqD+6MDHR7ZhU1qqavaGy6kgBv3bzNUxS+M74irqFPpqSsWEhyZzytoW2FBGQWvFDY8MSLfBenMllVQKwONNv4th6YbDsEjcJ7pRtiWwC4IG6Ohb5Yvl4npT9JsZmu9Y7nReXlRvqXrbshwNlXdAO2p7I3pT20ZTDMRkC9PbYPc8d/PUI6Zu3zIWTE/Toi2pEQ7bx4zqsu7q4ql8OFXyobOL55BNXy78MJgUrr+LqgKI8ObeHqKbCShlu/Lo8hIvIFeqMx3XeVpRiTeM1Pqc6eH7XaLxL5lQN/XtpzGFZzzGPaASgzi+OYAT6HEzv9C5x6Er9kp4in/pQTaCqnxorfazmKliwgrQTmCMPfwuV1uEdKyLsQfZM4v4q8yllzJkPdSJYwp8E70EsuP+vUM2+l78qz/wnvKpKjA4ZKUtACf8Ih7JfTJsGNeDYSa6gDwnMe+pFsTft8rTM+ZoEhhypQ==';const _IH='3634eaf783a0c90ee56f895440dc484b086f3fde5bf3c7dfea07b18cdd1d2b42';let _src;

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
