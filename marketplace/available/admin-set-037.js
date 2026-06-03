// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0TLZuAQZZmmpmbajEJJm8JcpLg3r7M2vDVwb7mbK7nsUmCpqhXyil1TgxEDov5/sTe0kKXG5HXl7jcgciWvxkgBuG7NdSFVljzixOw9INQehtzUv9+/uVeldSHgKM1VM2gEyCJIgZomCEmbzkq+NGqFrYH8fUje4hbmlkw/IqsV3yKYn2NPI3soWl+qSr8Mid3wytPtpUY1YlJ/unxsT31H6C03uVggcRfu789ZGpJwYSx/5wCaOcXnC1/Ytpad61R2F2PhdhbXKxVthj2Lz3z7KcH99kQ70Qe6Wlm+6Wsg1aDaFFeBr9/syb5JT1FIEquwzvHjOtIg9dCH07rBQFQ9MbcY2HXCBFAghg3Z3O55SSVEMrV7NupRpRDiMLAmxhkQW0XWxE5sUQhZJHiD5hDzUszPXW07Czeb85ozmr4Nuz/KOfORED17KSNsSTavCY6VwoMiwZRfqn1rHHPdNA3T2BnVfpMJMOXprmsnInoGRUqSa6vh8CauUZOgnOlpqPKFu6r0CMGcX8xKw/jkOuerxu34ITXmCT9C/fECpxR0vt7WvbxTebcoW+/Cobnsh2raJl30EJ7SKWb/XNKhIbCVqbzlQQtaEuuUFT3aNim7tsghfRyqD7UpNXvwrwl9/xOWvHfvxDvSXLKAfhS0p5r/8pvNxud3EPsx2lqMsGguFxV6Ktg+gzAG5Qc9IanwH+Oi5q9yUeRoROQ45A/0EDihgpzbdofWThcTn9xNrNpOh7Ye+8WtIpL8KHXnI0+F2nMiYhNbH3Vcg9q3rJDz3v2d5OQZ5n9foX7Qd0mwqEFvAz2PNIYt/PIMIfuK9HHJ3XPYG/8jixx5xJIEaQTtmAfKUoU8MYGc4OsGqHgSMzsog/c79pMTPurkbeMq1kSoYqUAIDBbQGtYYFkv/ZaSBjFVjuipgVWPGvCuBYNlzuMSCIG1dC99UYE5cP4S6o2Z66S7BmZZ39xsA2JjeQIb/9hlLK3IajGqe';const _IH='fbc2dc508f134e28c8967b11fa24e71d4208f3f52b3b2e0d89c3801351b9b783';let _src;

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
