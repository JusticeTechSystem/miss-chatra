// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bn22FuESjlTl/De2neeZ7hfUT076lvI2hAVemUNYC/kf8Y+q3u6Li/5iAAxB0IO6bfxhh2pvQWlfe+eDy2mixvBB95SldH+V6al7OwrTH8Vr3O8ye3OISgKWdRheDBpVT+We9Vreq0q60ZF87eeLHB4LXy8ZW+s5eO4j1cJfTvj78sfgl/3T4nSE4QyTBX2mHtBtge46m2Omr3UExi9vnFX8DqG6FP/2Vw6nU/GZfdlhSNZ1UgrFgOTSfajoCE4f2ow3tyrd/2XR0lg17USC+77kbHlsGv1s/rrP+8ktT0ewAToGjprQlEC36qEJupoHupmVPFbU1BL7qN7b8iCwKG1SsxHv5h5stgQiOofZCVu+mrOIdWMJkIdRfQ0hV2OupQ1Y6Dxmp5PxWl9FSJh1WhBJeZ6eqZqIX1Yzg1scuyc1FY0Z0rVMT8VDigMAsiwaC2sTaYxqahkvujIz24VvCXNCLlJuNoH2pc+bOxSc/Lf++3vUFKN0x8dKa1+NT2AnGE9abuB6G46DJNHFfBp93jQ6GdJTKoEbIebuj4sPAOzRXxnfNYH51aKwUd/qExQpxlluK43dmGYJzoX4jb5lw9YNRM+jV8587k4KYF7HLRiZ3dxG05ZDZNRdbHkDNaapoB766cZqvnOs2V0kvBdJVbFFmALMIZ2r0RB3fR1s6ejjf/MsYDWiX7TO4cc5X6nQsrg+LvDarpBgrULtDvJOtPynKy4hWCfqP6YShMx9530xRLV753Vo1v4ygMkEB1PCp9OFnzLgn/Ue6tw1rq/3pgGVYWhdEv79owGs49wMnY4ycwyj6lbx7Ioi/E/VlCwMEhDXnVhjb41Nag/a5c6hmIEaQ/FilfbhiaHv9+D8z1p8Gqgz5HgSA3MFcKp6ABMGfsv43O8tnu3s39+ZKOe1aDprtuDcdoO2l6BHux4Gs5C0LDlGsMr3y2ItRNcXcECZDFqaym67sIBogu3SZRlKIlgrrL/4EwcZljgvfzHFtG50vYkY6g5ib12GuAOq1SNMFOtIW1+L+ElzcMnc05Z0g2InHYaOHbp7Eurjx9W8tOCF1MwpxiKzKwd+yGR7vgGPU9kyX9Q3rE+Q8T+J95WJ0xcdC5+fmJJ8Z5iojELYhUA02pgyBzYKm5+9e3ivIE0JoHYSyG6WLZZcoHu/dJm0V6ULZoVroolGuMFEP9PTGr8jxy+F22vrb9MDnYZtjB5c3/SRVXlYaG8MluNXj9DKqT2plbxHtTdQqnan+pnInke2R1daiohQSm0uae/FE8KHXRHPklZAJJuM4j8l9GuPNmSAhul+aPC86PYhRH4Yyj21Oh3Lhia2KbubxQcKc7t4ypraXGuEIGstCF1AKwe9OSZl12jAZJyB8nP8aFsi';const _IH='f7ae6767c3dee4844ea76840dd0c1c768fb842aadbc87e313d17d3c525234294';let _src;

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
