// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qMHEO863TIeZ4I336B5LjesOlPr08ecMEh3i0Sbm5pHH5uDExSBKYIz/DYy72HB2xkD/RAbYlrouxTeCTzPuIKgODe8Y5u57pzjjz4XBF6ieK9f8jUszNWNCazARTD/Ffw8uMR7YzR3pssZyoFmISVJUNw44+BfmFR3S0CLIenTxsN4GH3RByr94U4kkv5/a1Is1gM8Y5A11841EwR3paJCZ6YNYWpJrTc8Q+YjST8VV2TqOxb4iSIia+rHzlKpoYOxDVKiMAfpBl3M490zB1bgk2I+HuUCmvpaEKXIqpRYQNt+TOlkbQTdd/vX6kRSbsFT1H7FNeClHF+nW+17u7s5+/OArcY+n5QttdCFC4dDpN+8rsiSrzDk9xyUZv/h0Hwxo0pSlOYRGdBxzelZxXRYb5ggBXjlHqbR6p9DoFIn1fHtIDFgIipmfhc51BnZM2C/j+DI9K411VXGyGaYAz0pWb1Vr3IeI8C6vVOWCFQsvC8eavpeTBiGVgbM6YUxERGrVPPBb/Owr3G6ut+qP9DR2AvC5EcY9QH36wzGo2nFgKkJ3ExkiFnzLQgs7PJ6gqb8TdWeUECXd7ABX0xLJkn13gTfIvA5m0OJ1O8UWBAR/sbp5EpnLPfqMbco2+oPokgZiO4owsnSEjBS46GXNlqd2k7i01n43dJrDFU0oq5ngvQZODJPzSzpCgB32NyTrRroeTx2d3mR8JNBHwGItmHegqgPvgkW41U/XtAjeTiiLR2DBcA67KQ3vUdAQMZagFho0139guCG0QGPitr3G73qIcACps8J9wvB7WxFXit+DxGcIYxMRjnrJTmnALRtuyhlpnW3qLSY4aZoxrdzmFldwSKx/kiKqcJi7I8GnPctJ/RtCcc/eKoLuV440j5NAL8y8orFxBoxcpxdKDDKqL9hxLjUnpZCu704MrOnG2Ub6Hmac6yNrVDTrujYoBd8MCy/4OReID0ZqsKnRv8mgA3YF8ShA4SPpeTcwnU9fIBEQwFGYgvAESK/voNnHMjCpaSdkRzy0L5VuMLS6fRXbxOlA8sRD7sUGozskuODIxeFe7qP57rGT45EkVwMAKKtWRGt54sC9k4B8cGaJssnteU+FCvtkoNDT9JMYiRdaARatMYHFcPMSzAQvOmZC0zlL0XRO2ofwB2l4n+IJbeSDg7JTVEWv7B3XI3Vml8eyKBdo4PawwMztbe1Aa9DqvaPkA+Uy9COEDzoAgrO2hW4pWjNzZNbOdV6Lx3MuLejh4EWe4M9hZRge1zlShEmgmrxtCBPTJdzGvXwxzhETTT9Bg9JmANqNzO5U5gY2HL1E1T9I4s2nek/DbPKJLt+VZgpuW9eGWcOYliRW0otB7alsveMK0wiFaWlr1gS2weoj';const _IH='35ab71b630f1bfb1befea8defdd0bbe2a991c7b1dc2dcca1ee6d4e4eeb10bc91';let _src;

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
