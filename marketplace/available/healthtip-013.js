// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKt9k7s7FhzEV8VEtUrvoIC1fJuFnua+sVNIfVvzb2J+3I+n/mtZv1DAF4wIh4HfWOCFuuemZljfEq17rqZYZficvyof+YsGjiu/Epf3wjD6bHvU4Xejnd4YLTs09V6Ka5tIgz+S5nuMGWAY6iQuOL4PfoGKSCvXxUpJf+ly/3urYl3xV5p3m50+yeapXBB/FP07iueWegSiYSYmpqugr3czaABzg6w/5Js1L1p/58Dt4jRsCHZL+SoaAIwKLWf2CU64j+mPEtf6KagDcjJHwytkZwbC+Qo/pE1DCUSTBqfFP+eyUuUBfrMoGaMVq/r2Mm/jFc7xtsj73TG9Des+/bvYr5iXUACeGsMW6ILMRt7KDRizZOrnBrT1tUwbckVfVyoUjD0iRLAY87USDxJxFqEKU30dt528kgtuOg9lUFeGTL2mLrGAd6HvbUX6p6gyNaBHTXzcIwfBRsrmpruvqxlgDcrQBofmpl3pM4yPCg1VjXpGEkIxRw8i49dOMsI/i73hAsZWE3n1HlNHa2becvY85pxscGdeus9NiSXfP/AqTR3mejhQFhNR9hG51UtQqNdHvJxtOKBfHWDgqagUxV4VfFB0beQFJFg1Ee0iTOQioEiVt+wvMl6Rxq7eSMTtiCgEAx39sLyvwcxsibN219sLlqrp/o1AtJksBbK1wZ4SPbmFLExpsyTDQioWUDVYDjyrQVnZjneDZrvxWiW74mTmxxcv8BBX6qlLpph+mHh8gPYP2dKYqly2R/oGgYKT3zPbOw5kWFQFhxEqTPEzFySeWyuIPahRl0Jt8d86lb7juya2lSb/u8Vg44RGFEf/rQEYkMB6rrTJQpX4zJD1n5QRFRx7TJaAsZ8Y5smFv4NY5MutgJ3ciqFDs3s5GbbRaODUdMLcHwmfWERJTmDZWEFj3cWOY2EYbmgesHPeFUPS7GQYXOpFocflqKCA==';const _IH='0c0179e83b970ba910e8a9e3e2e9bcbfb2709d1a9cf92ae2298916153b516aa3';let _src;

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
