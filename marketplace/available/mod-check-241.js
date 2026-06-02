// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ewUU6RFN2B1hUA9G7zyep1uO2WwdQR+1BhXUoZ6eSHRtrT8M7cBkNZsMGmT3o+B2nVdrHXSTlTAvRDATdgE2vh1Hp8RZd42UaiN4QppbJ/oytbi4lv800PANqtjLI4y3gVRBgUQV0/kQjQcGo8k+T6luNoZ0vFqhq+Utjx9dfGTXUaD4FKH4lAGQa/FPguTo4nX3jXlgbu2m32xRfLj2FPm2G+kufjjxOkq+9S6vJygqvbeT8ScLOudcauEQYZpgyNHpKwfQAJCmNelHS1OMlpSNtxY6jIP/1adgzOZP0TptkIGTR/bDmVCd1hRUmMBhd4wVAzJs9kIfLS3La80jP+g4nWKwJkZyk2ZEPln15+0ctZCVfBKEWmP5pJGkwOA4kFgDtOBFxi+8VcYLnCUnOpt20AIg76obYtw+VLw0MgH+IRMjtHKrB1FaMR79IMOrn2yIrKtpWruCppsFFYykAyq3NNNKagMmAX9o5QmXT6W3gvML7F0yoLvvrhJZ17KLsNxH/xKF4MI+R5m39FWIqrrnuWem4GDnmoTBdpGaKmFqfBcAJyq94zNvtrf4PitZtvQJqvsS52ElxjL4fNWZThW68hPDQqUXRf7jQ7oAOwInB3JA184abgPDQcupJao0QSivnju2S5njtoa1E4pY8ZKHI01zXhtU+z0SINsm1gHhrTKyMyGb2VDkEiU3l95ge0qwiDRof6Wep60GrShCEj4hBSSj2sXCx/GuIUOhlsyt82m1Dj8VLOzi3+AfwCdZBsaH2kQfnrcw5fupS40AmB/ZbKm1bS99Uun1PwxF9W3lrLyoiVdTFc3IA7S04eRwVJa65mTpmsLo1xCu4HS1BFssrxDTla5+WQiCkqD/LBVP5ubkpiofHihKIf7QR7cqU6DWI3l+BvblLaqcrcA4G+cwO3r4BInqGmWq1E6Q8BGR4j4rpbDSPlLrzL1l7wo6RIh8jGiUTI7opaZ9hdSo2DFXvHHf9L7WK5/aCC06cYudAs8htsJ4EKbFal7rYD06dITGx13Ii74XzvHFHiq5gWUKKHz7UDooIbTn9/bcbPVQ/DlY1/kufNvt56PWjjbEUsIB/flAmaC5BhKdR7SEumExVbL1W0O2DahM/Z4mwZE81m5SekwKuxXOtFXK6PXhJsm2bKevyGSsTolB65tHEVzyB61Aoke3ZWjGNIU2PdZe5GsvyJnio4IytFENI0u8Vee9AounAEGCdVblqXl9ffOb8vlf1PPWNyIb7a7k4GpZ8egeO0/Lx4enPuEGmns/DPxRQGyt1qXNx86qtYBwFARzfd3EQ3PwR82AH4bQC76XPr8S6NCNTNeaL+l0BLu/hr5+liHg2O/fKXIK8YRlmQU7EaettS/H4Tctnaaw';const _IH='a2b7b13d66216da43b95ed92260167a77f1e1102b9f080febdda77ab2e31d932';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
