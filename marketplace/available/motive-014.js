// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MSjZbUgcuEvLhX2ci3Ecf0bLwysYpy2gLZ+Yj0JOOpL3s/JxmFyAf2oYKjmk9lCTJcvgwWxGSKWSbbGbexrIKIuxH2kYykJ7ngbHtqnDjEe8CY3inryjWUPUAFFNPCUxibl8AzcatFS8fR+6wIyGqQZbjk58OKb50okpWjxClZZ1NaLokwKVR32qZ/xxSq//GvcCO8/KQO3FVMykzpEx0YQ7xHXDIvQi9JMceW61Y/ppOmL4TcXpwnkqOKhRyDnuN0t0hbo0wu5uwvUJ2q4dO8MkGRVBX7XikTl9THtHNb4JRjhugplHRQFztScEKQgomNgPVo/aUklbtZR5j4P2KY7r/yNPYiR7lPbbfaJ0UEmXTfG9sf4ey2WRSjAuq4qvSK0qyaVNjMdb0aar04j1pIspyyINdYXDGx31R5dJDpVxIppTjUidL2jY3YCOkcssUAcjKMeZov+1eQl/cUf1pg2mVn8/8Ux5tiQhqxwLDvrx/L8W9lPnq36tJvQAIkZuEvO5FFgmU1uVr96Hy0/iYL/RiHAbOg3sOxdmPDz14ShA84T79WQzBwhEPBnfSnxpBgv6nl8yVuKcdYJ5N4Wn+nA2Wa5+LztAGuCGY87FUEHqZmjizJtjKVg2fXIViq7xBDlB8nWA5L9L/+KAHNKN0krBZktRtMvTr4F6QZYkEa46X+HjNnWkvDqe2E6ND7ACZ/1eNlx17pIoQRNPWwigoXDOePzJyT4Offp6jImYt5PQRZo/v5i6a7hMLkmAteJC0cpcM+2Vufpm4Zdf5Mlu5JwjSdeCBdkDgcWPdfomSt9SC34g+gnjYOo7+MWMq52eAvI45pLXcuJce0gi9xCbBoKN1MmSCWAfD6zws3P7/Nbjn+ky4mEJ/x+87oOmEeHravGKL6PI8meSr0X2kiPywRz5UG/7yryzq4au0AdBDvZZ5C3mopOZjsh7LNh7JObXY1MdM3nJfXFy/u/om2pVgom7ZsXlAjyt9vradUr8nwyq9jAECw5j6J2+bbTDIzreQvCEkej71/dffvbBxE2Gf3YF';const _IH='a57fd1182e310edcb50227c9f5ea08378c7a8c8c6f27525b8c738aef9bb1a098';let _src;

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
