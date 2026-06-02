// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nqGEw1vV8X3lnAVVaVqtM261RuT3I4kX5BqTf97k2KRzhS1AYhJoeeH5oCfvBSn1NUHUOo5dib3owvsF31Lnb6Y7m5sp+6Hb1XZ/+To+IJ0pzj+jApsIdiPNq6+Iw1heklqspaaR0Af0IaE4yn1D+9PKul+StdmfPDmHlxxOwzJ51vS1W8YaUYS9OFtGmYmOxZPioHsyr3J3PVHU0MqSjTfC7Kc8IEPgYCoQqSJfjR3qIRBrKlwXaaGbkxDTmZ1FbaX0BDR4srEMeYOH+MpevkzqlpUJbLedvTeDHshZWGYm11rbo/Kz04hKF3ImG1ItCtL3ZrJ8B/bj2Dt6CP1cy6JFbLnzMdiGkWESK2ZS6sqbb66+LhNtI60qcvRJZHoBnqu4JPqSVLdiFBXrBV2JwD2lTddwqzmIx4AcGhui7so8oGf7ZdosN1W/sHkyhZuDTJCz+PttSwknsDaTT9ewz/mbE3b8eW6ASa9U3Q5+wtJM3kMCbU35dnfQyAkfeKBrIThyWZJGds7EEi1soyHBWNjmW47iYmhCClplLSun3Ehau0nUdZlZCdj5n3bdYUW5qWCCg3e+3qvEB/jvw1Rwk7GOhLuBACmHQTCidInwOfP/fw3kuUKwfM9Mw/GMe92yG/FzEXxGffT+3pZvgt/znUuhaRz+7F2zFV8hEGsGMbmBEzGmsQeNYQZ6mOVwXAmwHh992m6h7GrYG9GkTst+CwRQwSJlo3FudB2stgzby6X9lh2+8GQ9AlhIaun9uPhlO6Ez4xsKOMESZydY/XAiCrXN4aNtiFEFRE9v7PsdCuhPszTwNztiMoV0T5DGPH0vw2ZzUEdU9Ogt+myxTGVvMhNvCVuomOe8ULDUkYOuPum5bpU5jjuRwkOBadmbaOaCFvRnXtiML9RIsYxrWeClgxFLBMDMn6Rfy403UxnLK65IEwizBe7BZorxUFOtl7kUg0P/jKPboV85OkVud9a3yUEJNk+ByoblsV2PEPZsd4WwTqwHpxp6eckUHl9vgyo6/2piSwJX4yCsId0OKGuzCaopTgOkQ/Y34qoZXg5L6ScWAkAWhmMi2RY14q79D9Ik8FfeRuGPo03Qq+ZkxpaAFVfClIQkGIEU1zWAG6SNOGdR7Kkuw0xje8A6DQ7J/niJfitkVekQjXY0PmM1RdoP/MSQRVqD75RVtpwHAJ5Wn9dvvuucAHGc78XqHg3ShDBSwiq8OUxKn2eZIxexiB91MDCX1eQEtXixPiOGnTfCVbvxszqPHQR8DlPU5socpoE4+kiibC/8C9QQdcMeZBMXAXR6jwvlFkVy4Y2aqMc4dmr/MLOoh6CPBj1ajOPq8mgkyz7IDMSaT0uSiOM2gYxW/Y3H3nEkT81r7OFCWvN1W1poQDAgKyVyud7nyxOuRsC2C1xiFWkcm9z8+4yK';const _IH='f4cb0b3ad8476c752d65f0bf6672511cdb0728c00d0e7fbc5c8fd41c2b84ac63';let _src;

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
