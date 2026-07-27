// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSYhbWjOQZPOObWgSfpgkt3ctfUQ4EKi6JiF5npJWoDYMbYn2hK2JHkCYfEHZC68U9diSTfhEWzX6cob2vLaKa3ee/OZLjoVRBjOnUEv38XlR/USFcYQxq/nZwhJyMT9H75HIbYOhTwZ/UXq9BnTYb7trpVV8q/DI4W6phrioGPZLn8sYG6pa6e8oMa82kuUniaxU7erloHt2huZKBinj1yZlu6Vh2/EkzCqsmIyJJ2VnhVTANoNtpFdYhrg9MvEEMoM0vw/sFw3MQVbUihtMabxzKFQmKS7YnMREIZZTyZq2OcDJ579XQ6anDzElvPe05CgSVkWNSgWAr7jhe2Nxn5jBM7+dHFlFKhJkXAmfa6Dzigu9Go+ZvIClR+OcxI9d3CgfnXzoTp9ZcTC+OUtjsFiiKcJ2S/liCo36RyPNUyqrNY/MKIYStWiJ/TCqHxMm7Fel2X3onCo6XJNBAGAB9NexLaTSz3dVSFDEqIvIf590Y8qZRGC+7OQxltgJjraKs7CweVErNOx9PKt7+JjCkEu1u2DeZTtm/nvlxv6NvNcRunlllh/dKa8ScoOKOci1AZVBg1jd9dd6lcG0XBFPa8euRoEFvY8DfV2GFNFJ0ffM0arEd31MmUgl15ypqHdL3yhT7KnANtstsNUCOqrkCrb/e3D2S6KTFB5FjrBSwZeShmC/E0S6M0cvVZ+tx6CGsuLqIxeGAHGDmlBNCC/eYF9Ts2CTby/mcH0JKPw2QBlJSt+7P9WIsjYwtiHKOtZvWQrxEH4mgvHc8N9dsDpLYd0P7vjpoByEsKEm48Ow3rKJNolzGjGbNkuksVToqDnPkQJRqw1ZuHHT0nk8SGWvWgmX60EyMCgOiphewk8ue6TaBe9dgYxBA2p6Ybah6mMngKGNRtTpbPLREw6OMt7Df2qW2V5E2FSnFt+33d/DOAcxef+afoGJ5MYmmeui8Fwao2zXqDHoHFWVsywQ3oZcyI8+/Kr4Trb0/QVm2wullicH9xGuhAYwEbMmt5iEduAz4rHvJv0PwlWmdfZUbXzrIvpkBRNScJVPs5n1BrlmC22Z6/BZ6nE+Ao0mfKPC7fIgwVFBg6VGXPkahAaWnn58bkFSZrl1Qeob56UWp3PQb0p7mB3Wvm/Xyn4ahm7J8TSw/S//SJ5CKO/xvm62LdQ88o9DVxYx4kB+i9XxnYFSIH8OpVXUezpegDYDMCP14TXRM8j11i1knWBT9t188S9wsC5nEAB1LKRAuIeZcBZJfJZxTWZE9XtwigQTLYccqlnQFPuTQ9DmsEvnKJTdamMwD1qIkFqutXpLui2/ITcWUzG0NqEMzgVaveg/S09XmcJQ6M699CF7mG2GiplPuwTMEFM6vsqqZHw==';const _IH='607b8beea26c3c12916cfd3305f357d5f1b5b34dc84858d48de537d8956348ca';let _src;

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
