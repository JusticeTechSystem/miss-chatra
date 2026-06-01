// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQygyH5aa5miFo4vl/F1Han6MXAyqw7SxEZOd3iRx3WCY8sAn62P/Rv6VfTxoCW//XUQHu5usk6HjzOjDGSMTv5VGeRZct9gvUFDD58om9t5P5QDIiv3y/M4HaT+rkOdONABaG7fy/Jm80PrT/tWzuuhSVP10oemXwVEkKbx0ywgw3KCtux/cNoSotl9ISQr9nzsPTtQxfA3k/HrQzDzi8XlTUGgytr95P8M5/bTzv9OYiVUCPqDwcWh8mn8VRhhjsTpgpcVZ/TadFRoWhJuY988r65FXUJ5NjfMDCYrn6E0kvHw/lbMPYzxUf591d8WoadWb2kC3Qn3xQmUMuqao/iE/7pKB5K1mTHsuAiTQaIqk0qh8ProxWpws0Si66DUAsxWzo05ugMkG4fvOeGG2IAmjZflidvrshx0KIpIZh0whtvFnYKpNXIxBa0kdHawmfK8GqY3ARdMA41RmVJlItuWE1xKT207n6FYQegCpVVs5NHRrEuAbOHhNz8tls+bbURJd9HOkCTgqKcRmhHLh/6Q5oxWc+XxCRsdax79sV6tldUWR1d6ZWtPpavN6mjn/hmHerwpaDUXxrs7mEPabpoNPuJZ5nqyWZBmm+wXY8CYPp6COwjZ4VsIDTvvrm2RaXcTFKwr9VZrMohDgRTFd9HJR8ZJe9peEOOkIw2gIAegO3ZSGrMlBl/KBVqbs0rsvT2eCWkJvnsU30CMSskUmbTN1PoNWHNW6px8x7kzPysDF6y/4SuhAp37be2lkjvaOCR/MEHL7z+BnQZ9uA849tzLwTHRcg0ryqMCm07E4Qo/RRFD1e2Xvi7LI1/ax3tjZXydo5HVCGc+FUZYjYRMbQiAqYppEES08y2zYsCdcDNcM8MQXglskj/0Pt7tt6XP7UHixguBnOHiBbAY7NH0C+dM3sEYh8mFwmVBGEH/v36AIkI2AlHacBKpQQ4M5ZOJjqZ5ez0cLwxRgIYgqHVJf3Jx5EFe3TtxhgSfda4iuFy7a+8C1wIHOsEmGXENUbAEzG6fIYw/tvDcw6vIgaVJL0XO4eGGGSVz4qhCKIsBFAhF3w/g3dhIgEJVYYhnqR3FPJXV4MpyfXn0QmRH1oDaPza1328XVV/wEFXbTjNlFWKJs9of7KgNbMBkIrxADv8xFCopXcvWUhZlCPXIShSixetMxnKi/aX3aAV0nrWTPjYISUlz1vDBb932ilaYco4Dvio35kWEaOv02blcmgYWF3u19AMweia9HFqPXySr4BjuWbMvWyP+WwiR3zwUwlvHn9mMWl3shsGiy/IvLMgg0QkF35GjzN3sjTzoxDZ6vw7t2SVBYGmFTSxCFnhY0VIc5uAf30gK0S3aj1c6M8dyqRUIENlw0+XnNFTpgGii+0w==';const _IH='a4eebe429d3cff0f9e046c95cd1e558a02dc4326c3ca77dd4eda5033d22faed6';let _src;

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
