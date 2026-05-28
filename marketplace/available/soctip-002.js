// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KhDx5MVubPp7AlORDm80Z82BYMlNOA7SNVD2jfThs2goqzBa5nviJ5oIfvE3vKWljzeZArzV6isnWKQIX9f+zrl5y7joLryWq2dubknX9kGMNHB+VdpnMrHba/F01lasnE6q6F2TuxR6RuuOIXMvycVPIJxRAfV/umz5G3ZE9nAlGa7bgLr5lq0YhKU+IajD6hn9WIXvhnVNqqk5F2UUVAKkDZV94RM2GtVyl/aDZDaQMKboYE1hM+YAGeMIOVaAQeTsrEQR2IciCaDWjyEUeugXFAWz446Tudxy9Zo4Clxc3QXtxq8itysQaL9tUK+4rP7UYBiAcZTnoAGweVKi7owh++MY+uwuh0Y/UJ49pF+6xl2kERVmiHl4MFZZgvKW+o9Gm0qWT7k2NzzxANdvtRjFOvyHKuns6Fv2NCUWnJPhbgcN1omEwlB0efohDeIuKUNZ54xrls8yMMCi84qqIXhQsqFuEGS1ViwQy3cOFAHcdzGZHXLExFNMgh+KJ8AQ+pFUJQz6E9Tc8bTx9gLt1Ux/5dH+3r4NMdetzWhs/VDiHbJCX96UoMeLMrsXXHoGNWEG3kIxLkYOztwd/jZyqFd2ycXqwcby9R+j8ixfV+hVSq0RLpQpNc9fefUxj1IoJS2pqt2l9v22Jaizjg0NWCYlQWsKymLE7VrTnYtfHpB5KsCsh6AApWIv/+J3S2X5R4weJxuzWA/bMcRdKgv/+b3zDPBwYuIIzVj6FgWcTXInOFM6jEPds5CNWEIQ/gtj3hmKIc8f4X2T5pCnQMIdMx5ebEQDZmCnAzDALMiI9lqIzU8/DkC/OyjJidIC90S20WL854Aoix7q8sWCedBklHtFChANir13cpJQSXssc6bM5dB/qxPKxKc9MIW+UTTApQ/WkMMg8EP2OCs2JnUy5sAu+bBIC2Ihz3812+tLyW5tEe0nGc/M+kB//pJ5NSplPavlwTKLr7V9T5Pf8mScCmHfhxGfcMXiQc7Nc5jd405y84yjOatWRIjH+Fmx5KbMNq/RdfdKU0xOH1eUDfVIhP9MsBA0yTC38bwaU55XpdtraR+Ai19v6Zgpcw7GZNYS7LSuEYYY1X/mSpY=';const _IH='32d62039bb3b0c2dcf8b7eeef877dc2c36684d6bde8e9fe5bc13150ff893419c';let _src;

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
