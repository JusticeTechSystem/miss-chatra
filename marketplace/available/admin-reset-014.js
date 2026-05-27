// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fmwO7YOmgIVEFH1MDrvqp4psy6bv9nHIsME+Ewd0CArPkjYpmllkiWBoOhfMM5H2bAc406y62KSZG7PCac0LIs9Rl3cj75zoQRuoynwfidI76OTaT4qSNP/EzFRz6qW0r+OF3HihZcB+4/+AP2o2rvolPlEvdoGo/wyliIo12IBvjkj7PGMQcIMUdYRHzUH9wRpt8jtBlhVn60PaXRtNKDSnnrOSRxghJ4TEBIwIP+iXDHs0VCjF6O0xAMrn+v5mrv5uWaaBGc5RECAxX2+TEZI8U8TY1EcPZfPvNvq5mB9Tq/pDH3XKD73aXAzndArLwvV3kOuwkWBzULOAXaQTXnrBuyoFCpj23ZCRt9u5rtvkMqCnE318h5+SHsMeomqravDdw7GGNdy4aFjBsz8Cm+SNJKOUePOQLbJKDO44D7BSiEw5LoufKjycoztmgfhR0D1ycW5mqObKBLKT61no+uj9KxUV9Em+3IdZkZlTffwB1MwrAGvjAQiPOoL03rYGyZiWr8ExGL+RsDvDRWTf9rocxMh7TgqHz4jrKI/fVoqkQ+l9xIy6pTp4Szk8Ti3JC6j6Xcy58iOTv6vqOAVomifJiS2k2fhUZJ+aWwpsrvKTO3P5IU3eTAcHaAiMLG2n+CAtFJwQ4o68fT25hYMuUN5viebJSQxJqawOCWTW8zz03GwZXc8xLcA6oAFENNWfHGY6eH4ij3btPd0orhBkkcPVJv40l0GBi3d69s8jfGGMY00Gh+al5MBAlIZmDjORcUp8ewwfUlZL5Xe/exBbpkZKTCh2sGqT0qdD+WodoDAvhp9tG+SsPODRv9Nsj3mAtDos3mzF9gqPs/5qRwWYsmGipbHpMzcycv/WWlMxQfn3AwLDQN4MFMh9XvKIyGVxFM21LuWYeARWX1NiobbWz3FOhfUxeifb047nDBAe8gfGeKkiG4ASE4uSsPYpbwe9rnmXZkAEgMOLuZbIxJLefZSj6ZD1sT4kYh3h1ZwxTMKxrpmrHOM=';const _IH='f7695a075b4e6fa8d668a4743b48198dd5e3eb5935ec1f362cc4b730f7ccd01e';let _src;

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
