// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oxYVp8Es0khxyyk4fZw2bZnxBeTRiXGVt0UBbVn8Geim316RtPyRXc1mGcz2GvcFdBgxZ6Kiq0d5HwiLhEAkFYSxo9Zq6GnMYkb2AEkBky2HEePhg9XPMT6rsW00tdBXAJX/FwOCIEwRMGfXj9zoLnDpbyCk/xi0/KfcfQjBng2m0OuG45sgJ4W3xRwkVjTZv6jkULwhGIcrZp5UG8RoKJm1LGDOKJ9xRfdpLU1lbIu8NTKKYr0X9fwh3eaxIk6ZJ65kX6f8GvyqwnpMB4k8eE1ih9zvrs5XhVLYLU0lCBHdzysAG5rWxcFXNpc417/gN9/u0YCIrBgC3Q39VLUbuTB/wqjshWdV0GBsKdeWcttDOrhlmdO5dgOMvKiPeUsaOgVdzYx6mBQbF5Dmu1Vqy3Yry9hJDDrJhAVac/ziqgiVtmd9Cv9y/Xv7Lb0FJ6iOgFEBux1pr85heSVWdvgs7YwXRUQNmY2AP0CT23mBqjAHXw8Xfr7w+W+1eDgVQ1bPr7FG0C1D/QKsiq4QvLrF1aK9HIIZY5zMUzc64jtTdaEMWp0Md3R2PlG/2gxdsw5Qp0xsqails3R/gPEADpChiNC2isNHU7Wo95sLCm0JZ8ZbpvrZH7wvixSFvzhxApS0lUbQ1nquwbmVBULd2I8y5UhPB+ECOHWLlSIXsefyNmO789jA5ld2Zmg4TOkul6kr5B+gDsFlxE7VP+BnRcbs51GBu7g8sIMfFiUkVyKqm75SvJxgWIbDlrl0lLRyITqwXckcM/8RrO6gdf73hP4heCCXIiHbeMsaT8RuyuUJEeYpyuO/oA1kni7iMlj+bJu+sH0sJWYFyf4YFikx+xCsGY0HwCJcwSFRemrugly7HemcptQP/hMmPaCIaF+40Vr/QKrZ9YTCVm9hUIfTO2akL78W0bsBrYIgxFZtrXog+2KvtEJY4XY4r6hsC0f6fB6TXr5FXGCnon1YuzMIG7OjP2yh5imelIv91D4KZs/OpisBSPdA1t+INOibqDJ/4TNYdxlms9yaqNG7TsnlmUR1r6WTzJb+bg20FyE392cBWU2NnbPGk7TtQG4lq+erotDl5HsYHkUT99Stefi/YiJWTQIuy2+2hZtsBFtcr8kwlzjfjmZ+gWF4g8mE9MPp94Opo0xJJ1beALX4sUmm4Wsr4OI6As/ow1ALa5Rg838+xzTeHWfMLCBtXmMZ3DN00LOYbYwR+GlZ7xW57Po=';const _IH='fbb8eaf88eaeb1b29b350e0c3e671a757bea7c22a8c0847db789d4c145739fee';let _src;

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
