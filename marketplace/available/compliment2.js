// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDCR/kwBORxj1+v5vF8KKI68A7IOd+QBAw7HjGo41c2y3J4Y5TxsQMcPAjpJFaxOw2/J2vSrJG7Q1P8kPYYj0oIqbaGGFzduziXOIs4bPtXShvQoYCiU//s5XiBEl2FQh7orSvoK+ArVks7Da4SnwjATQmAu5FFSQn/Ih7E36MCT2Jsd8zJf3Y//9yHFCkutUFlRfRls+I+RzYBL/u6Vjzi0yBQR9sBCsIdX9DzNu2UpoZoQQBU2Amjum4qUdyp28Kw67tFc4gmO2+gqo2TCPt0fHcN4cdyC7SWUl6YDUnUghLqp2UtJSXh6t72aMoQiV7eumFJRjLZcigLzXHNZuNSYWibxY2YlryGRbev58TJkGY7CIRZckEAdrBXr6PPOEqugOUnGYcZZ8VT7JHOqdquoBWl92wPE7kuWZbhR3R79CDZ3Rd4Wf/GXfIyffjzKVpnYsAYEV4gsCyYfrKLWzdBFGMAVzSvhLvD15vaaQh15n4TSZmUmkMUOgIOO8kvteb3XHGdjm+isHY5BZRXdz/dQA1sXZ81vhTm3hK4JwMiZiDALAHkN/sWtctJedXTr7qA2iJvqdSkpnMnDQ0/APN4S9FLElLKE8ILT5QTylMnAl4h0em7KH0AQFGhCFIjT+Tl8wtzDb6P9o3NKgdVzuMgDgGMxhvFVxx407/HDbnAywvlmrFA9guaYftLTtt7ByrP+Nn8/GbwlgMxFXygENlr8keO6KJpze7BsenafGwvL5NHDgOByA89NX/AtI44hqkexHY11coTY9wHCQ4UIiKFDPLYxFx9vjfO3zBPFUxkjcBQHj7E6tIf9VRHNJxxzZPuY12EojyoUt6wbLGo1iiCVAZaGivCulpxV/nosR393re8riBT8p0pWGnDkNpYnhG9Zp/tUIHz+fyvAFOs6eKMbI1h7xu6rkWuYtATyN7BBPPQqFNkchh4yLHewv+oyRx3Vfd3MHGYXeLYY86MNzmCRs+UDTDv1ily5X2o/32+TgzesbbWNBiO8qx471ATYnxusqNIsTQSRAWKDONRZS8xuuhAfqwsBJuINJDvKzqPYcxKv1BzdgsugaotXripNS3Sm/83ykPG2HZKvHHZzsEOuWroqT/30TaNBxG8dfRXgntSTjPoiu5qps33VPcMhlB+mcjKkvEhRqeMiCVkFaahIejzz9xyO0XHtbSzCwekRtnbbCFY9qD2LjSD70fUyZQ5UEhYbWxiujzMP2UpsBElOWTGvk=';const _IH='f702758f97ead355bd4862bf0609e73b1cca1695c4d354b65314d8262f2f79cd';let _src;

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
