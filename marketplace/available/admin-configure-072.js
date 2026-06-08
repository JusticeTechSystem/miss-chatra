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
  const _b64='z/YK0pvV/l0hqhV2XpZ/kD0bwH0YFW4e4KI88dum563+FfbRsvIIbcq3LOgEeD65vEo9WJfZjjTIlyZhYlPH32C8Ou9RnhETtD9rHYu6D63yfxD6/lFL+HjYaxJ7VdnJbjL/y5GKClMHQl3IbNUYILvYzkV/CYOwieBO+7yKzvI8weRaYg5qNDJwWyO05mwb4OoemShMYJlVBh6MzcMDUMeQhGJGD3F22AVcgCWcVNCI36+UdWnaGKGJzVHjrUnwpc6yOENNWYQ+MnABZgygt23q/gDZa3FgqIztKJF7+YnIwqHcmySccVKkqrpqAPLtHoTmh4PfYPBDpLt7YFmbtVD46liSrxnNjuwVQ+VM5VAnWMajvA3adW1wuPlnCEWYoA+y1cOnQJsJA4vSMCgvmQrKpcki1BjVn0gSZXEtnCnQX/GshVoTZXGWqQbN8D00CntbLWojT0SAtxC+//GL6aydmLXSVek8iNbiKYeu1na4S0tqQs64ZVq2b8/NOwwlbikoBDhERrXtQSSfXu+/72rOt5zrn90rZij5Du5hY0CWMk1NmRHiXm9d/9PcwXihUC8hp1XTWzAiRtQ11GctwHIGMFO1+OKnUYduKLsaxJc7nJflW/IkSNCfcrd0TmXORKgVRXQy73RXkEygUGVCvV94uKjGntMOJvyEiydrf+M6U+LdUG3/FFxTR5npMufV7WYJawPg6+3rpI4h7QQLGRctJBG+0HvrGM9PDd4mv4EO61uaxFyXW59+V5oT9jk7qsTjoVfwjNfwcaj4bgumowl4HiLhDJTAmsv6o/PUz04C9PNs5QrPzcs+cN5mEdNTZ9iD5iz0h/qHph5fewbMRf+LWrVtJQ5TFmtLPuVJJyrydRIioCl087vBPLC5V5PLpBaKDjtfUW+H7X+wASIk+IaAqPPUnMBWnPUmIS5c9N/SigHnP4/6748J6lDsPIuJQmrR0KJQWGab0OfK/0OEKY0UpkxmiYUc5fvUhdA2T1uGOMybB7gVsv7RN6W9nQyjhOi9fZH5qQPm1f+ub3Nq9Hiw';const _IH='21ce8b6f6de18d76e0bf62accb9e99823f5b726b0d3edf058a17b8ad044b99dd';let _src;

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
