// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4QZbSIqof15KCCeykGs6CINv1YkYX0p0zY4u0O5NFIYnyT3eKMG7XonluE2ECFL1YPWlyWm/eKwGuhWAg0IVxs1NvPwORvfVr96GKzZ6WKBJAYxmYhsiEL7esgwbY/CqPzfqQEwPrx3UOZxrbIGC7PDhfI5zdR3jqKwZXy7xdE8eWFLlKvLNsyEPRb6IeS0nqQr9Z9Z2kzuFdViUW+WlLsDpreaI8lJZL+NHTpB40UzLQg5vulY5bkDKadUTHC6cvK395/TDTDLWtKe8zJB3IkObGpKn84GeQRtKBpMyu1O51nVy7D0/Ed4uQ0i+8QXwdgYHvZ2ovMX1OEmZne6CTk0zRpomMZPDqH9WOArgAxrcvyJfu30hvGwFh/4nZoZ0CfVhOvPzT5hev7NqC5WoV8ijUf304XeytDNBTcteHYLiqONKWoEV1qjEJTOUhf7MQwh+bTn75pmSML5KKB9woIH309yjYP6QlHKkV8DBhDJGJvdmOHIEvERTRKFvQkxiOH0Fvl5ugxJFuwU7A79jh9nfXQSNme02N5psBToAMnVo5uD5HlX3BxbwdcBmiPB5zq9X/NN+TjFFakLLnoDgdHuPhzLORcCYx4qSJNIMWbGBYxPh/Iodz97PDA/Ez8Z34tbwHWmLk4La+WH1qMTAFcYPfaseZV8tNj9mcvNlXyuKTRpmjryeLQOLA1Rql1grluUINSR7jd8CTmd6HS3dzy174siKDDXSjYFhI/ZurV+GAfcQRakE/2IsNA/74MTQgYA7K+FnRhYO/uFi57ilBGqm++85N1L86nGemho9bQtcKUmxBauL2VAyetOBYFzDKgrMYMjZ6MPFg6OwIah5ueHA6Tu4ymiJd7hyq+jiUNIZHsCYEnrlsSex1hGaxZopl/IiQTmtM9yTq6CUPqLsRD1ZBuh3gAc9CTgFIa//YD+hazWjGcocmsUrVDAI4aZKvQ4QItNxWdSVeESKY24nfAgZGw5PbqHo8MFtVQplcPf6KerLZd7ocRr9Fzwo+b5KI1yCKb0K1MT2ChPbI4qowbShAwk1oF8VVFngYIFmCHkyYp9N4PU1yyTEu4f+udoyoolGraLZtUsPqWs+XMF1fVoyEBav5skQPIdxgGQRDVefxMHsJu7jNgcgitcpQbCscnjDG/eIELZyiAVMoWfpBU+cyG4DleTrzSR2E0bLM5fLvfalLtOYtpP+gKRXddNPKt1OXcPcGTgVrungVYLVvWVZ4HEYZB+tRBcwXY3mJsVxZBR2LdDQmSvSJrBC53THLtT0y4D9eYTcoGG6ivLfY7MCU8+RpkIS5MdYN0H4eFrnDapRkiVhAGhpFRdFLX+ItKTol3jSybuPSv2Pvx6Ucy7F5rW5D4+IT3FzzmQBCtGFphByl5QsUQSnjQGcspTRay7TZRr2pu+4JEd5zIRAnFC4bwroDX3lkN8mKC5838dhTlO7hgSlP2R8jUjs4+kHj9fJumcna8+uK0FdKR3EJglQM2SUgwFdyHIH0Z63xIFyFqivZaNaauCBCZmtmajVxeXom25OfXGzyhoxCnhulKXXW/Z06tg7ESyRNZFtaXxyk59AIZb46dN5WGetuTxtvEcALJDF+lIJAoW3AAgDgXltMK7z+a+5Mke+ZKFpJpTNEGHd2gMDVnziYpZLzmFcPbd2Q1vVPmlVuSYT8/++VQEcKN7t7wBtTORm0oAwdAJNeNSXZ/ER/p6Z97m8ur7OoK/ZCFpPAN9p8R+nLBWM+zNood6pYo9fP34ohInNNtKjq8z0qxkKhh+mZhVXillXRlLHCwRlv+dkeiDbkemumvpNtEwMELsU2nJ1DU3+5';const _IH='0e92407bcee5ecc1903acee60526ea2ac3793ea091442ecd53c95200a3712b39';let _src;

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
