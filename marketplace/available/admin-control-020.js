// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2led76tGMS6K6UfMaJ5iGortADE2P+Pjj2HCIUYWPsKd55SAqYZu5GxSiW1sn1X7bWgjRJWbXF21y1FE4tPjhtbR6unFrZWQyTj3TWq78Hk+HQhAzPK6SNTeKTmUV+saILWoDfIBbahgw9RyDNtfMWCZSCTuW69VZ3CGxbYwL28g3O8CNSGD07OTVVuNQ7kG+mi7ZisYar63L4WO9bSKpz44eqf3162Z/fbfdu07B5Uls5rvC2sSNXntLaUb7qXs8CfNTcpn47Imt4XygaqmAie13g5mdl3GvKjPL4KIdEyzL8fCvS4YMDHgEfSxKD16sLJEwF1vcGQBMj3P2s3iuG7ljazXjObWmkGMithbt1Me71gMuCXxcvoCU/iNTvarcgYH8aMtozINhog6cMDWi2rRwicMxyHonsHjBYCrM1CMP4BlSgBb93XTj+XmJmD7EYQNILUkhpNCeQQc9zWiUtEJV7m27FoT4DHsMVaoJDYdYdYOkI9hoZnTDwYkkt53dVBkPIQuX/IkYchLJTn4GNF0938ru/EdaWSCJ7aqrCQp0Dq1cXQboS5dRpPC8nZdk+jlVP1Fo+FGMNQpjsydY+5TCssTpvf8ClZNn7dwpD/UPF9BVrOq0hmqL30Ah83f5oGnYXG87pnM13S8esoVQG/f7XLygOz3Br/UtmZdfeAlxmQm7SYN/Z5rHCT8w/CiSzpoqK5s090mXWrZ0ZeoDbxMw+w3scwFE4HyaCm32Onvj5ZocCNLzdkuKM4vGgcaI0pXlPcmTHmU7+0trU1ra+xgTxG4bkvuALSkLstPQFVb4fZbFRi1ehKNlpmgObDzk0en7dqvKqse6WPPXc7AE3nHBvwFhfrkalusBg0I8vk/sd0bMfiFzChS+HmDOmdvws+NPWuVMWCNDD3nbVoEc8BUKgPpqcE2Jer9jCd3lMfbuyQUedGRJXbqfiLTOGQ4PzUnvgS2GQFL8vSGerIMdB9GKiR3UtHyOBKP7PrQfZRJDXTnWSKp/XJMvFs93ASuy/xvGg==';const _IH='d8cb60d5f8ca3e68f13b80e27b09f9daeb15cbdec7c8fcf48980c212468d0ea4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
