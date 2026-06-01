// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzA2kpFdNQG8cAUku6v/L5a7DLW4u+IbYx/yC7EtACsnft+8GqK9jRTtc4i+SsHcImbFpA8Kgkpv9n9tEZvJCBJkW+7gi+gSbnRntWy5m5+4FCtvurk79amrMTMUPbnwfDgRykLPa9KZl6hSALY0u7V2tgzeM5EIGvCL46ns/YgYgRSYU3weeQoSxGsGgpURuv+1ofDtvdtxplEr1y8Gll1S5jxRRaQ3shQd12WGDIvARFfmnqSSerNAQfSIYzqYngllUloy/K4haw3JPeTmBy1IZKkSy594Lmk8Ow0wHZN2GwcqEWbCvlGJF3Jh3w+OUiYYgF5o7XubTnWvcHcVccM61z/6trqcs18OHyDNjShKpzpFbnX4t1KO35oQZFZNdYDeWqEDVwcOZ8mfAOSead7pRfUExVzXS1IZo+rRA5sGJ8QNySgPGDQpJOM7cOONJdZaUfYCTFEYxcNqyFe3ahYD3fncRDZlhNAYAgVwcTqmEeA2ifCA26XuqSV/dOwSihIHwmTXtgMIl8ox7QIi+iTzlyhEREphpaY9RPFJCOYfyz/Ver2v9PmH40DY+ocs6Wv+GFHqciIUsbs184hJH2uocMxV8SaM3xjuEtYoSHVQWk3KnCi9Fr8ESWRQHKoXozuPiFTdwoin+qSo8Fl3Bg/xqx1m4WMxiQZeZkY8/44WunzX83lq/vY+Jm6tt0PApTVBu/vVNTDvzpbBqi+79Qwn84ev2Wl139XHIkms2dtZZGWARuLevVDwALGair8yIpQbh9TJDfIg2U6T/tWnzp8ztGk9osHoQmYRCMRk2n41O2Ogri/BMvGWrPww4YO4m85wE0p/LtBjG2x2m0ryelT51slvCt2GtUF6+U1i4CNMD0wyxnXW7N+obwdTljST1k4p4XJiRaUk1L2CvkFfE4BxKZmpPtJBn96WKAakBctorLV/7jXBPCVTxz3pYGE4xvIfGyFhmr6Tyj9CtxikmJOShMo4gFAv5DhvLXzIBUy39mlH2my54KpNu2KjrOOSmRHAC58MQAqeIFO0L0LGfPEcRkbo3LWzkhMYK2cvUWGyQolXxRBPwyHCccpubQ1RC8JThGFJVHkos5mt7Jqpof17bqfmJAAL30uNv9uknnl0hnobxDapUi7SXfFZHQyF8Ml64AFlgP3wsHwt5ogUhGhKQEZrCNfmTmQD3PaDSPJqbgF/ws7qmJIqi4G5rgbT+OHGYOTVScPkvQ1aADeiGcLsUpzVojj/XE04tmpL0hOZLe6rtDYbu2vI25sbGgPDmhF66KxsHfPUqxV4SC5KsqS6X2R3P5hFuDUyvr5baAd2YqL6GDlLku2XvHIc/vDa2XlpLhBw6FAYcHU6H/em+F+ZXD62USAnLZY=';const _IH='2adf002e8d3d249af95e2a2f97980023d3796c90504082ef95ecaf7d8e234c4f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
