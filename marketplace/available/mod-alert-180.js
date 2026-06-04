// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hqW+yiiRqibN4z9shRcRSdoxrGy/ihdIboazufdG162HanTfD1ZsAkf5Xo5gbUxynNph6GkuZsFvPGyLq2tOuPfbc+psb96IQKjsZ+VNTWbVl9UhY4gL0oNSHRwO9oREXU6yfeVGP6MMDwydRwgV1iqlFiopjmZ/0tSZFMzUHRWfgun9aRoAqyc8Kl3LlZnkqRFLXGKE+3WiMaUlM9PtVCUWGhjYvejLnVpXRkntjxflXADhfkYQCYyw86ZgVTl4I5k5HwBmdD9CW+Svxj20NGfF2w9JKCw/OOrqCLY7sbNlgGPeC3nsMdb8ioIVZmcSZNOiSIPh7ekepYTT7yecTLFiBaJS8tAyqEfQuvAlGAKzOLOkd4yhiJv3BpJnGx2lO0YQbRz0X5WZwPKwVDSeC0GiPmI3AFzYPlKztxSDv7U4GSNyIZnV5EOT1uN0Mjih5yidzdupsZJ/hzKXwOTDq09HW5rCP9ArVJ4dxPY0jvYXq1avllAm1VqoBf4E0IMz/MXo06Nppnps9+SuMSkC4ABIrVmG8rrgP5IAOBUOEa6Fova2VNArPzEA4PX7Hzjl3d8Ws2uJN6H8aHLrGvT07y7IhbMKfP6JlGmnrLBUfhJDgQVUQyGrpGZk2cT8pGYqQlQPpKbL1nNdDSecEOtw1d2xchmluY//pk4U7/XDifTaJA1uYX15Qiw+ScVgiI+GMo9Hphm1199b+EVnLrjUTJT3It1Hc5Kvo1VEEJan/d5h4jNsInOW4YUX3mGJROlrAnHSXuKK2T+CfbzR4wcNreZUAhxP9zfDbBnDuqGAwwltqq+4c72HyUL7KqDiETja1OHMpVTK2kYB2PgRfbokuUEKyLKaJdh0OW95qnlUlymjJQoU8A0JUUagoJtv8c1AvR72uTBsRWEtnCgKVKNVRE62REIa+zd7Kda5X6VkPxDR5N8fq0BkREBUbUxfMtwGcxWYNKGezBuuhZIElCUku4J2mV3zP6CNnk6VG/7fVm7RgXEOgXZJJkRMtdnlsjr9N8Dn/rv8dU6c9Tro1jjYQb/TT+SzeJjyphJlrpP9fARMtllrSMlC3K1WOgtcl2FvtdGfvedaUqUwFvYFI9v/WAc8QsWRYdwqEeQL5cUaTdpRZdzG8LO4k8/hXDQ/tcZ46/4c/5r8cPgiye0gVbpqXl5kpy+7o0MK2u6S7pofYG5fnosjAu+dAdZ0ImdRya9Z+hxRsXR1JxMLnn9K8lD3/M/ro6RXkA9zKFslM7nE1HfXroQv0OTYi/QjbeBonVVSdo/uBAn4e4IMIotERQr9hSKbmJivwjOv7WL24OvxtX6hJaoDMqkwHFasHnAzUH1GrCuBWwK3g+rxmBHaESlFXC3tNpz0xsHgn50WBuAZ';const _IH='377dcea5e7226e200e1c997f160a44a034939ed43ecf7760b528b9fd5ede15e0';let _src;

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
