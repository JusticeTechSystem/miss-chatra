// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M0GXjb5bCQuuJyMh3FcEum8jPaR+j204r+M8j+Zo3tti0QdUR6Kn2JnYRZV7Nuz4O/PqeYXWWynp2euzZupEpKLaROK+40a9S4xjBiB3oLkHekUA9283JVmU/67Gw6RC2VIVRokx021jf+5+zGzkMOw8D0qT+1RxPlbt374eSOapqztr1eQjAjdOa4zq2mRpgOI6JEylWdnxDuZ7euiI2wD8Rw/PhRJ5mYq001ya8NvOCgUTDqLoRoOgoBDe2mmFoCGbv3s4VS5Y6IZMiySaKwntjxl05MyOlETTQEkr2TSYwhocwDjt64zNURpxqwkm6L3SnqBaOtbF7iHCIe0k10vhJ7aV9MEEgQGJelyWisVYSgpi5zYTA0zVBuw+wlMzLU2w1NYn+BI2XVPZDddPGli4/6KftUVDKBBZkDre2XwhlsKmaepcB4gXUL/aMm0bDLQP/EbWbd6NDezQi202Ho/ywLGjNV3SrrwSHjzrO0tw+s3I2Y4yznWOt+jUEjAVJ2bMxVbdBdQmqBfYQ868Jm5L2hiQFPGdF7f+4hIm9Ng9ezh09xsS7gg10VEfTSkXzDrQBJ9QS852ovOyRLgkRWmfkz4bv17582+ej3NhrwnRgbEpJd9Yo8sfOkxtvUQjQbSOec1XVQRQEB2HpsuhJ43NGD58MJ8V7JYmGJYaBGMuhQxUPMa2qmnD/xkoeknPBGNRr4eFySwTnI71RxW+HnTRVonAO9lgcRw6yaGu7IG0OgZh4HInLR9VYT4axx3N0X+w0qlf1jdD0lYivwFOWP+Uvw211i6Uv1Y07n9K0q9Unw/Hg9s001qbVJUnjCAIs5uQdCSZhySb2w/Z/iL8m3F41eb/BeXK+PpGsWTFEANqrqJXs8nMuNZhEMyRO5Ry1Sgu3AJ0ndsdQBRYgrqYuKkGTqruCI0AdK5l5sIXY4Zgyy16Q32cAHxbCw4q6T5VOgv+eyZmp+Wjb5SDo4PpE6jJuUVWVKvkfP03MFsbgPlWAkcjCQmzSCt2NunGmofkwKOaTi1enVHbdvJXHd4X4DQYOHgsvdD0S6yFEingHgXXObWkKU81IBi7Vmz9zls6wzkGE5MUdWACt+8gouvcR4hwkjdKhn9i3Al/gaX/EkkIplThgVeuPVDWOW9XQk33THa/HzR3jqe9IrGVFUnERD23ZqQ9DwXhD98iseYdFL5bEZxiP6BbpiWdR1Lk/tmbQbSp9txnn90iuHwqFQP66W5mucBzeIP7hwrQD9ssvulOF5gLW3VWGVHlM+TC5RpaATCoDbAh6o0WePWHGBAeuqMnZNAVbGyYbxsZ6BqCguxUXLJnutkPOwe8VtDToSlt/TO3LZe3R8TZVS8gm7X2i7mKZtTd7+gUEQ==';const _IH='2d9248814f0ac544e8e25935794bf09ec983bc094ade36ab568db2ef17029450';let _src;

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
