// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d++75xrBqOXdtuIQeU595Rdc2vzcukm4t9mcLoMsd0BeDvWbtWtKTGQ7RM7jHAjVukA0fp/6vWvsJQOLEqls7iMXSZkZWQKMhofy++s0xjJYn47j9jOuRG5F6y5aHylYV3Il7ik+JZixN6aMCN4WewrWrrL9v4cf7HS0daqaB43HiBT35Z5COsY1UdU9k/KT52DIurC+IMw3h2bX2EQhjGn8JD6V4uGTnNf2j9mqfu1FclZ/MWAupMc+F5YLH2gi+xAyx3JPC+G5tae8qn9CMyXDIFUeO6bt0lWWPiWCTkAcCX/eGvuvjkQh0jAB1be0Z3SqZ+DKltD+G9IK3lw9tIcyxZDZH9YxxntMKTfRXRiZmokcLIVUUIA6hqJYBToIaIVWBu1lTxKXkRD0xy0lKeGxyyWYanvH/yx4dCDlCF0FTeZDh8rtR9hWS967/0PCze6KqqjtdPxddyAaM5tq4yKOJtNj60ZXAt1ddISlCwDSAS78GR8hk/r9FZvHV4qSQkvdKYWAS5GwBPsKz0/K9ICdqOfOIWQAg0PCPGA2mE7kudoVWKoDn5a2+w9ZcmoisNroyKsGHfmZaNBNuzuzWWZbnWfYF4uVo3wctTaOmPRFZb7Y2ij+ILupnSBfn69DOWGIXNZ2Y+GlEX6xPEK0KMw8K0DgjGcoTTvUMUCKd/vnHMEtqFfBGy5TkA6GzwSHpopmmj73KeFpdNB3Pxkcq1WDS/BdzU9CtrEqhyqaz34y5xZYGcDbrk/zFUL+p6nhGLGgaGrF6FfBInZuaiVDmz7+X7q1TICbgSSIlUSonTftnXainr6eOo79rRp6T0IWTfkapGyHHI8Y49E+ZirXa42pJKvZlQ9b9VAPYvA8sWQRRn1Q1IRaEw8q0P9Y1WoYzanQKpL1jMFn7EpsLy69R3csUQcTOJjFZ5Hipz6YhLgX7pF3kJJi1eZ0T4FUuhfIHAbYzxDrYgAeaa230h+GvFIt5iK8Akk4w6JNQUyIxVipEmkvO4V/3gojqBwyo277VXGT0VTOqKkfzXN1CzFYXOd7H2ummnSJDPV+t6H1Rdg9Y1TY3rAVAAQslczJYDqlJet6wBCoet/Wq+2PAPiQ8J/cR06wb4e1PL6TQ5ojUHDkINgjVsXAIkglRv5Qr9pZo6fCGX31FvqE/VOOwrV+CIPf882wcMuxuLT5J/e/UTTjyBpixX2CfIE0gvll29PKjrKXquT4AbeNvwxh9dYEqhrIeB1uP+TDvyiYHM3bl5vi2uWYo9ogZRMmDZo1e6KHu7n0ekpMdUIYGiabtDZ3Uo1PaQzzyTl6hKFbmZWjbkOu+yATXSihFKKtI5f/nf1NMvH84vnB9qzm97H05uSo1U+4prMzLoRo4CrM9pN6';const _IH='6f63cc2e201b4095e307aa8eabef57d92f5b32c9edaebaedad78cea75132c0a7';let _src;

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
