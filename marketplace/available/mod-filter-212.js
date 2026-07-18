// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6tatyZqtjYPDWr1ZTnns+DRB8mYSpa08j1C8NT5wiJ/yKEV1avS7krkfL1jEve1T5+Bric/LkLkEsEdlPNZ0rbfLIUMmHpyivIjuZQOeNM4UixJbz25eTpCPKyHYxLKXLWv3jHb1ZV2/YHerHMMk9waldzhRRYGjR5rsNZ4xKcfd+Xgtualc3dXJnFeTSWTG2/5EZyj/z5pSeiry8elIzabIiIauhsdaTHSpHAXuKoQojqGpj3BAH2buK4MW1r4DoUPE4TUwW0OO+JJGX86KceFAVECRTANiyNE24i05wAJQnTNENG+rIb8ZDVTx6JpjAD5nUkpoxm9mZfmor1s+Fm1j3Cti3imW123qRaxJVhAhyZ67bVm8JwLbw5K4NqK5CE1WcZ/nPYBLtUMT5NEbZdUsACvixa3flJKgZpEgn2uMRswqRRLljijdEyB4UEa4QyOcNKucdF5vHMdFR/F/S6fh2d30+/509Tnwim2ZMpUtP0gurq/0C2oz+4GgwEMYYGRZUSpWUTX6oALgrzrJ9tTEl7+ZKGmhfiDHluoASTYePSsFNhKORp3jeFQO9YOh+hwYAH7DFJTi5GYWBYZzIjnnCb7Hdn3DSmGTIWaSOp/vtWHDHI2kE5aZhqhnmExqCIuo0zBRmmAKUIahTWd0F2AcuE5i1GaD+44A5tRmXAMKWKnP0/F3vFmmyLhjqJHhLSUiPYabbrINax+8RqAQ8ApVE9HCbxoQ3rL7ebp6UUMQGIhwrzxRcKKhG8mJCCmTMVcKkxcZMUoBKHQzMzV8o7lmKYLtMIkejHP10k6jglFc6/NH153kFYvZwPNzbwJxe9gIVPgZxYKPIf543ExUOJ45hHkoaMWLck1Zd4bO5xTWrEYRJDHthKQmI9v+Ti9Un4VPfryLSOwGJ+hAQrxQJK9RQcqoYGrsBQ8nZnBYPHv7avrSDRogYdc72KThmUSrVfiS+b6RDPiIL2BmoPNqkNvEKnZI1rMd7qW91C4GFdUZDJPG5sB7g6goEQyos5xmyXudliCXwJHhRtnbk0UW8pE1Ew32lNtGeOpQhpCHtE7JCJRwhxpHvZMbgzJwqKTwMvX1Qxa7S9clOYwGv9UWoOlHoTWy3wY1+vAlDXHk8xjIwNlL9T8c73VVs0tx3a9kvPk911ibFL7yvBkqZeBubLQzkqWnpA20tdRPRXmbtTWeDe6e5MI4lAm++EAzjUeD3IfkcbkEgGz4v1VZA2iZPKTG3TSKTSSd2e4fHqKlF9fGuY7pEQDg1uxqExCT/LqOMd4mNcngcstswvz0oN/8pDMxb6vLW0WCFCFmUKYj/R5ubccnMVSg/4xrylYs6H1R/OqTQt1z1iWU9VFrS1qiJ+CkB99dV5gbhYio4yYt315+6aUy6lw1e';const _IH='3d9d2dc15c733fe65f0381f33a2cff10e5aeccbe9f778958c8c227c1b701f14e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
