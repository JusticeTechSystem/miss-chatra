// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lt2UMllrVV/KYcKJzsBoiLi8jFQTjIcezf1LPK5QXOAXuG5c2dow/XBaY1WtoJb1ng1ORXpWIhu3edCukaPI7/T8V5elSN4T+Gfb+y9aFOV6pEftERSMXx6U+WXB+7LrSRmEjXHNmkwb45f7m7H9FJL5JruCARN5T7yUxfhBd7VegO5/m8e/bSF0TdyVJvoANAI69rV7f5bVkdvl6AR6WYQGTfD0M5nXKRiKJ7TeLYnZNq1JY6syUImJpxNxg7rKRjSfSdV9HDSUYZ0gP3AdO1wZylZBrlcsiagTFk6VPlhrw7Bu8gY3hIiOLFe2pxe8rM+kcbKinx78S3iNHQRzIJBUe5Jmv70KPyKyPEOtgALowlCWSKYlRasrRCh+ZeFVAefJpfjdEE5Qx7Yf6/4GQYsqczetHMCcEequvD7T/zERiIzID7f0q79BJ1f0Pl8983NLjGyVYv9opA9WVoqQteujwhBkhfULXYmlRxEtn024AXdpPV1FXcwbVSRc2A81T5UBTruFYyU3ukJ+OsIBKnppWycPTxrZWb8SnoBpBn+HBIYSBr81KKdKdGMrulb4w6Q7RjwkHXDbZwacb8YWx5SuhiposxeUiIeEyVelFGMSp9B4Os4vWww6DXgzj7AXipvJOLrCwQ9V/acMs1aa6Hd6x/H4od37OY8mTL7uxQa29HI1Hal9h7wY+TD0m84+TRRBlGpQtzd3Yjg4eWqqCiCIisiwUEw3zZi7jE7UQbBALE5i3lWA2eZazsQdgWHKyOP0COhhz3rjkNTg2DJ3SBeQDClz3EqNeBPptj8Xl21b+p6lqDzh6uNAmKuG+OFg0nvSj+88m00SZyxV3IAeGcM4sSc/Fzah9zI02hx8ZzAyirPkAvByh/CpvN6Vaw3WyAQIFGaBJtOegWqmTrjphRDG5wJtQ67lfCuNk5YNCj6WdoP+JkAf5V4GUDobnHC+VlRu6vFJSiJJXPAJAZh0zdNKQcG6rR1FD9MaXhZSHvrAGZizGLXPalpeRyg1HI1RdnPt+OAdzB9hLWC9Hh18v6ViEoD3l8PC7otPb8+kSvzJJ8st31buovJYkz0C2aHQHmNOMWN7HLiJQbYIfJoixL4Q9Bya7nzVfnAOykBBgbOCHDLsrOUGak6/bGv0Kyxaw7YJXmKHZ4DuJVfhpB0YgQ0yEYp1gB44VIfdSZB0Y21WdBdRLeJAPbSP2/wYkg1gFVm5VkcXv9dAuyE20qC8MvHxektaSQ7c7QenJN+IW44BG676fw1zQInF/93Vz0ZSlONgjc8tsI1pt6Os7hZA68HUQxgG7Oi9Xzfneh0i2gm7Vlv1A0bx9mfeN8ojBcbCeK9iZ051AQUCH2TnaK5Z1v+g3Bl1ylilLc+mzghh';const _IH='3d902a3732f6525d96a21b06d3df4afcdc5528fa3451fd41bbd29d27045115b9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
