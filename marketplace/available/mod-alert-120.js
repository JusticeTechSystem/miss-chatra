// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1j5GvNsheJpJlW2BPAeI7WNaBrbZ7l66BU7gqF4B7yPY/R2gIFDRO+bsJzRSm0bL4xq5OI84LtRErSVn6HxVAg0YPRsKfy5RdujJ1LLi3H73Lixcr8Lkeb8zDmEEXTaSRX1tn5f9Fn+hdMGCtueeZAbPxhnbtCnQq8R0qjzp76V0Fl7NNUwoWqiVAq5/5bIfbD5dscFB6lEPWyTyKLG4JrVC+5I6Sfy6uUc2JOHLcHeA8HC407PDxdDWzoTru4iVDb8+UNqvqM4jiS/PisJHIv3kenJmcJy+AUxwsR5KdywAeg1HfrHQCDlhYeP1F94CPww/nePgUefyUMDTGaymlGm8reLhR7WlCd9mcy53SImcueFmPrIINn02gqMwZY20Y8IZpJPA3A34gdpX6YlI42/v6yMhdXqqYlwG2KaViKqy+9eXdzd/DDGA0PTg2B9ppcPpxcc11WEoxLal6FHdEv9uj9OHXLMIc2I3aozv/MXs2M22C73wbgS987HD2BL9upL1Hq0MUI1Wf73vahUpRhXP1rLip6xbiCYPyJG2RqRq2a7Utpu6+hxnubuWGJJUOg98b6gu7HeA4qUGxb3fUzadu2jT3miOsxEAAAE+NMu3qDryi54gvYmEtbSt21WfN0dlK0ZI10f1ttYX67fjpaeOguPomDBgoAmulv6LxezT+UqU4vKGW0P0OxYBn/Fp4KfeHqKYIJknVQhIj8D1TPuGruiDJdaAUvPZd0EI+e7cyelDoEMKMpPOOdsupRnLahBHD/0CozTINLfjmG6xpRUG/HUif983wyEcktDuZGYlTyq/o6kiQPgeJEIlbiGdcuj1wbgtjJ73yB1eahOMoWCkXF/qA/mKy+6GiOns/D6NJE0bg+YzebYg6JPAciNW/wFR8F6v4WBZ9QPzzRCjKd9zUaNQHCKqs9jRp/oJN/v1Gm8d3/Xgm/+uGcceWZ3AmcU2ikNmweXRazgsrVfDYct+53wHQ/FhvGEi2ih7axz3uNagNr/vVwseyOvt7FnpakItCJs/erZpdnd4JMWeWHqZn9Ar9jiRsCYwmRu/Upn55tY0+Rdg+z3VVLeLorHYKeUokzxfQjI9PbC4yxRuTFuKp7DBqg74cqfCDbmBBcFFwtYklpmO5aSp2qdpVeSm+GoTiFkb4e93OwrFh1q7iXJKTzY5FjrPVKEic8GkWyFZ7siBurfGK+1RhIyKcI1p+4L23/A7VLgZbCvyPP1sL2YPFD7CQHHFE8Wm5KEsDabb1JK6M6QRGuc5nLTnFlMrFcE7ceY+kILIhrYFxQIwl2D8yUaJpgU6rNeJuHZiLnANBLYEWrMOejkfJfqqelQjX0Zx+iMbA+ETJhiIY8rDgA+VQEEaT/nGdkcoo0Dg';const _IH='7f8cc6e475d8542ba829b105a02bba01d5053f48397fdf7ac88099f2f75d5be8';let _src;

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
