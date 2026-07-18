// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzyI8FVcqns1/USGh7C/7642nwrDtgu8s1bc9Xn+QGbnJio1XOhFzzuo6i8WoXh4krU5RKY+jaDxHoz5ZurrksoOjzVUnS84g8HlGnElzjDlsmkiECFTsvV34zlJbnKKfOQIUvqsedfalyBLm00L8wuIV3ZjCCQn4sFuKIoc9GfsHo4FD5RD9VPDN3TlSPlOxLVc80Z1mhb9nySxtvyV0hdYeHaW5yXzTgTgSIe3xRJrfRw7KK2xXNz+T9BWWV0d7w7v3u7oDsUys3EFa+Y2hwNykiPQ0r1KSBiELHXb1hjb2a/YzfcHPR1m01+pCYpviOnpj5SFSPn9nc6YD2UNx/nwKabn5ZEeJ9a000+4k1n8DA907R4VqvYzqYDlqGvCWPdblP3ZBRekeCyCYY5IkJwyTgALQiuoO9vhLbQmgKyOqmeHUDVnKjLxnQrKcwyqE+NRwMVM9ghXqmiZlMd9dCkDa6w+rl90F+vp7RzFBzeOHqyvBY5FU9lriPw1ZTn+gZnJhJQ7rg6cHZQsL5uya6G3JPflYjmtc8x42JRTKCNkKL3/ylRbnCD6O19gGgafptO7M0Nm9tUGlsRIvfblSzMMvZuETKa8tYdjz40Eysk2dRVeY4oj9n/AGrp3CY43XZ2i8bsWzlQrJGSpT0vF3VQZQ0Cxyaz4jSQQSdcujG1F0jnT8ewH1i97u/8BswiB7wsdtjOYU9gW+LBkteUbMD75ocAsl8N9OD66Y0JSSkKd0PJiEJaNobn4T+WLaupeEDgO54s+7ff7XU3FrWNg0GwfB/qNIg36POumLUEmRCGL+62XFk/0EJRKVa4ak6oT6Ie1limZ1pzy/FYBf2+X4lQidGFz7sE//dJCUVAeY0tsKSFiaUWN8o61ypShc/BUyLBrCEu3oizMCcgrq7qEv1j4soss+v4JF5XCBOGbaqAworgK5p//kvZR6ExMn5ZV0H7C7G8lKtTckLhhZDdJu+WEBT5rymOIRlAbYogYAIuvtinz9qe32G+1DKK7PSLN6CoUdLH/4Igw==';const _IH='908d32b6472f396c55317e1d46b8d62b3561ac0089cf4ab382853120d8431135';let _src;

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
