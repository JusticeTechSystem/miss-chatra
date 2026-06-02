// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dwP9dUH0KCLPoBPeBmrJDmNvMN9DKYkoZ8fJK01HHvkRB+MOQLMYe7Wc787FmQDja/G9j2qRmvp4H0vbFRLKZT1+TMKQTyZoWuhTSK+ZIFBlnhiSJd++EHVg3cuc2+O4JqFtAi5uTfH9Od2O9qRTPfMrOgu/eREfvgL2cObhYVRVMgbCnHyeNlg3zl+h9u11HD5QKS5Bv+jYVTOKiD7DLpDuVgr9Kz/8IRSE+JS6DD/LucZXj4p2+bb8t392hprnN078+qLcPocyO0XPfI9/q3489jbRPTPxeBL9MF8PnMd0pMPKKio/n3W8M/TVYZnp+fW09pWQX0iKDGXPMzpZzdlsjkmdCniVX4jixk0jUeTxroBh0GslHrmvNrABtOzNzGHUjDOoKd3tY1rkXc9XoRZrynz0tlYch14o5Gl36eBRW609XropGwQHTIu7YbnHp2FEtx7owFMvHBnrx8uTn4F962O7E2m13VDQ9q1u58x4HsGABy+NKkfexOnFN/yG+VSmxmKRuZrzEKuJN8IdqA9QXrJkcZ9cQjK6OAYX+McjKZVgo9VNUDbJC+wxwbpHNQIrQ/tk4Tp/so/cy0oDPuKN2wNJDHxcfKWZ0+v1X9n9BtqAr3DEuoxzNI4j/4ogXkMwFix+9eMVPXGL2IzGvly1+aVbToah6QZ2319+yn2MHxfMomwtCHjTjrniePFxxnNKsflTSyq+MBlCsnHOFukaqprv3yqRCxT2/MgYx59R1nRf4+KKIH90hS+fJxll4kDI9vYHdtieEGHwcd4FIRkNWvnR6kJk7Grnwx+hqbia9+hzQKYP45mHKuynKHNbfaf+JgwivKGgebi8giCKlteTAuHUM+efV301kRHeqdD/5SUxrOXf0FvdITfFvQCM5n1jKLm1HLVqi4v1YprVP2DsnQUK0lM3IQ514o+BWHzrTW9cWV7ijw==';const _IH='6bddc578af19528d3d899dd48f7465a5793e98e49d1a6316a0567413851d6a00';let _src;

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
