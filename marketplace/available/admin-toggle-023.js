// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FEhTBN3qrxZ2+zxlPOtmFizt+RgsKQTJnvfVEFhaGfWnxlBN5fJ9nNtLcrn5uqhKW7IXEbR3u8Ppi4TNFYCLd259BQnrv3PGk7tG5DU3Y7IdJsUGJYooythbhsk+Geuv/u38uI6onGBO2mCZ1qg8W2UgjT3OmKmZkm6c7hEVzq2RjZtLx6VsYb+pQxhUfcaiERE1pjKhNj+UHbOLEcBHOC/1V1XvcPvVgG7BfPP9AR182oH3vNtdaKR4NKQRY4/pjscRv7kX+p6NUHxTDjsiZnHxMKRD6VViRVKBmFlTuEEgrFnlv4xGHXKdsGDcH60mIuYMrBway5JKCZXOYffXgRpY4isjNf7/CfAHk65YYk9RFTwXbydAQTH9LCWtY3gF6AQW53ZG2YJuI08oMZMfdF/VDfihIOFsTtCwv1GQwxHYuLvGbJ5wYSP7ubMvS57cURiOxxOpDME3N5Ttj+NiCoHZyDBQlv9JoY7i87usaRFF36fR+R3YblYP8nH3jsaSXznq2IoLKgHvEU+L5vS4kFQxmLoRGWhBvnaR3jFsCi8RZWJKJh4UJeHQkez4UY+nyMOqkf+1lU7u/9Mvp0iGwmPsTSsOeAo51wplSi5G/Xz4NjmEM4a8JLMPQP0nRPZ93/Kas+raDRI4NuYS/T0gSryVJUFuepxhX3+uqosg6xsfFujpBzfb1PjJ5acMMKLG96yBLkgZ/zefbzz6TSsA94uquKggJVPOforrzHe3yrCj8sJPhfJ2luegEHsQjPZ5EFzFXk3BKTR7SzKK7patC0pmdUg/H/PxEBqa5A3T74Doww9pCykJElrB5a++7Z5Zc5yjBM64kNPC8zVHj0qZKrkbzAvjiwmyH2f/VRnvACDUBlBEOuU0BvfasyJaSRg6EjBU9SQ6ao1yqDXzoV2DIItbvWO/pnCBcmdomUcWsSxtx35+rOEhRM98gbf5RJXSCNiTaQemrZ8EVEB4chYSkeoJ8AidND31aOTaGq5UHACfBhpyfS26liKT989l';const _IH='a9992c3922c779a9cb1fab9c29461344ab869f69cefc012fe34fc0acac123263';let _src;

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
