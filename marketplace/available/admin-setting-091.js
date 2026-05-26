// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='anLpQr8v2wOjgrAYgySqugTUqdC8G42dWpexMFJyN3hN3PdmHEpsAdWUu9cgLICbKrTmSUSbk2eNZAfAToYuL0I2A7Gm5ohJoEUevwJA18WHNSVuOQdKT8lXLCJhrFsgz3Is9YjkUM58akmyqxo5MifRxTlJtcxg/kdvMXlR/fwrVfP9XTV0s7wmmpbBcet7LQuq57gPzZ6s7hjWzrRG0DRtHfiimkDyc2zColQIhePBGE7bxtkSWhxknEAGU/Kz10cO/Mg87u7pzGu2EIpFxRyZ4DPrz6AqouZ0VtxGrZjPNdSvZlQSsJJ+km1o9VHdsZjcVUkRk66NmIrB8x3j2gYA5aRGcepGqky6ZX5/GFFxprO01fvbNAUlunVGjZlMLDc3sjRHGBBly1CowteROUCTeKwcDkXMIKvPEPIgUSI9snINGDGoQCteQyVUzSPRS29Uf/OlkQtQ0NLGXvY1fSRAR9GdYBidokr0b9L2JKi0cH9RF6+6CRGev4pu1WaftpEkrmVr/DRkB3/W572Ql/fn9RguQc7VxPa57IEqu7g/mef8KbKsm4HJXI1P0R2Y3I8ehPhSav8bTm/qrH1+Sb/F/raY1P2DmRHw3vdaVKeTIN68ul3Nk51fdDTFXgb6xYb26mLT0HYK68qy5NStqhL0P0GMvbHrPozJ3j2GeHO+S5c5Et1hYP9ORgfUo7JFaii9kk5pqY/yZMeL5pLKEcJUpdp/L2ITXYcvH6XCIX3vc2oKTqK+nBEiyUiLMt2k+OFjtj1QRa7bLoUALzzAkTkc04PXESP1+sFRqE3x050DuuK+cb5KJD+3HDNi4ZOOERQBgbrDTnMj08RFs1igswBHkPyDM8qfVjvIg+3ahg7YvW51sxESQt1dpD1SoP9rx+eadReZC1OY8B7S3c2qp/674EcKbHNy2Gj2pRGUV1sgfUQx6AHp5l/8/X1ZEi5HSSVdHmEMUjg00l3aqWrTsRqNHbrcKNC2Gp66l7cHaEwX3BoGK2iqxHPDvvqXqqAx2iegQg==';const _IH='7279462cf46ec1be585d0e7b5ecf2c9f52b0c60bc5f76fcea7616ef7ff4513b4';let _src;

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
