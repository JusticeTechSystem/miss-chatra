// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5POCPwGNSOfTorx5BPkfFz0ChGz3nXYOses76tHhrPnh/Ku5pRX/qljHJ8rpOUxgXNNY4Ineu2UgvYqHbdDyN3ezzZ851ysujbNiowa7u5zDDeSdXIBlnZP5fjuGJc2TF7kju0DBa73OWTjKN9ln6CBYVxkPGhIBWeeiIKj1kaxVLyOIOhqlRJE5MWn7F3hhI85pRcrd+ED7xozg6XkMh9ogcdvJLIq9kdsae3lWN1djrYJeZCrHkVDwC3TmMLQZvyEHvvWmjezNNJ1lyq+PrLM0tbXb78aCh2FLnzOK6k3IMuk5ynYxWIO7VXdYtcN0DNwK7Gr5Edo+Unc0PLvDaFI6SED0bRNkFmMKuJYglg3gCduugzGyo0GFuV0FYPjShzQS3XM/u375p2lGap7rDY0RUdmM9/d27th0YFSQj3VRpGMyaWVD4PanVh9e0vsn1hCVjLG9ZAZJzLNlMAnMSyZ2wBmqR3ePzxjhhPWVx5Lz503XoslIabmSLKiR5qHN2XMRc1ElksbuQrP0vbtRb780NRWy2bWz9ls7YOukNv1+iaoUCSP63XkoixqMB/tkhXYir50BwiZpcjygJqEOkGhXYEY9LhGlCspMyrzFsvXttSQHmkZ8iA1zTky5+3fBv9b0SXYvX/t8ChzC07/AxhNE2FSLq5lhynDf2icuCVUa2gIrl+mBVKY3k5O8lwQyR2l5r2sh1u2xpafDf1Ctl2YWuccHq5CXnCA6M/92B/ZHNg1sbinbwKtHBSaBIiAu22wvtPsMB/bofNmxv9pQedHNu73mgBEFG2YQ5G7U4RlOzoaK1Jmtyz3oWCVWTGD87KUFwKvLKd6/r2Ycs85q8tCnqxw26DalDWJXBDhXB0bl/w5GvpfG6k7Oas2Vvs7I7LppuElpxmBuHbfgMmCTcEFTt0T+uovDFSyg8ylxFKboCRM+ExTErrcpV6NSZeQJjcW1SoRL8sPAh9b6rXBgub5JFFFP4PP47WZB6e81ZB4lt/sky9hz5F+uOywbKfnjN6t0y+cnp0STAXBoYLWAkMeon8aUT7sdCLlXdhW/aILDTPl4x6n2PD4rswuU8UVmwWkr0b9tFKcXJBzOxvfZwCVkYhuqdQGI8H/sshkReQDY9Ij/vJigWrbtHAvJhoxeyKpIInsaN9+0D1QVWWGsxfCB5X/V8GTho3zQ0KALHflOlsKpe7uCkcvTHRITkfVv3/ZckYb6tgz9H4Pt4vzcRVnsTKsAFGR2J3AI7xrhUdUhANuU3K5y1CyNBGjKPd7JozKkSkKVYVbO6CNjUey2PMix1SQw8+lz/4jCvhr+srV1WB5DXYhnTpZXNok3W65m+yo5ZGbO7he5Yev8Ln6D7H1yyIk4jXdiP1W5i5MD';const _IH='b589c5e3be3859c2745b8bdcba33c858c02536ff7e82642747df303281f57021';let _src;

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
