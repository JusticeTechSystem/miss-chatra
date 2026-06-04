// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PFAaiEBvTuF8WLo71JWjUbLQInuVEs8EV0H6M7LZ1J6unUpuSypMF4BNrE7R7GMps8a7/c5YOPO8ydZ84PDapnzbEXkfxErSTqFe/Mb7y7EUNG5RZSTjEDL5XQXopRevBnmJgJ1O9dwuCij53O5uA3IDr2GYz2CyiIuRsPXb+aVtGJT+7+ilQnAmxvx+1GxrN6Au+xNkoMQ+tcXDgxIFZcYa73UIXaQG5qKvxPZxammuPJwOMLnqpAjeptdgai1XLqS96Ip6DLgLg9ditGUxBxTBwU3bAKN7OljSa+kNkaV6lVrCDEzyT530m6EovzQP8cW+sY5E6aeRDUmUdDZZLjHQ3dumQ+aBZvxoqK8ANdsFMKmXfvd2Jp/mkxVHYaDW6+XOa79S0/MrOSyajJ99CtqVf4CzUR0NBdVHkySyt4aKiChBTUIEFYEx343fYhoAPYsv3f6x+Gej7lJNTuamr2sjha7HrEln3dhfYcRqR0bkPibZw5utFNLRFepD0qaqouVhZABQyRJb16Y3OcwOG0smt0Q3Qy1AWlZARu9kLAJF0XCR3Z3VyfkXCLCy5HB4C5bAq5/xgaZmsi1oklW1en+96cDxh+MbojrGBScrucntbYm0tulwShRAvYiOwOltvWZv/UVq7CXaDKKp2F0P/k4AGNxLp8a/dVvz4raIRYvOCRObo7YSrGNeGz1eIqquAci5gDMdep9BtAQccHnH4pfGWbYTxmNHeWhBpQ45SDmGZTreJi5nxnYV';const _IH='da98344649f4e718c0feae09a82e7fe7050b543bcf7275f329f6e1b4c2599ffd';let _src;

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
