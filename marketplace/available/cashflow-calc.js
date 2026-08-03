// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQui8ukOTw6ckJX43Js3+dFC8tNAmgq/tW+a/NWlSfQPxDTdTzvqJgy4hZCRa6+3jJKZXoDg2XLE+kjNPWcJOZ6QbKKkZX2q0zdUq5NmNZJp8EXyOcTGydo0tCURWDfGopVGz4BTiRg1Eu24+KtRlJEhYiGfFFycB06DJrcGaNB0fCvft0dGo6FQEgeiT7YQS/1uCTjAnW2wS6sEiVxcNwoj6oM1sc97/jeKuqpu8rttvcvVqxpQ+FbhYO2OeOxWBCtf5cTqTZre84B2ey6eJ22HQrvEMzyiDE27yABzUJq7RrkN814fhupWQrBHX5kNMKePYI6z95bAnviAtqkxJLN8yMOrIEslMGuP009tetJL/FgEecnM69OPotp/DN0Y1Oe2GgfvsB9oha1yYzs2WkNwxHZRYn/LXy39i5DNA1mQ24v42ADsKHuMC5201s/baGlu/uNXb1rp7j5JVRAT9D/gw3+7Uu4WNBje+gN/2ZAjGlP+mkeOPZv7XSF732cvmDtPbhFwo+XXmNgZpPxN5nXgSpaRIA4Z/44AR9BC578Jtbq1fgF0hwLohGVumpv5dbsWVZI7PUkesjly75BYqg8aX4NpGFxYWp7n2SDnPp6K9XTwZ5D59kwi+PLNDFnYIeyexQ+VRkohNH5SEITrG3jYBKDGQEx5ZSByCpyL6TSfZKquaUecXK2IFeefb0xIntZRJnphiAi6p9NEv72WalJQHbrbRX8rNDS+IPBdGXlQ2FIC2gl1NbujYbzPvJ8PMdWnEQqsmatEb2O4GDSrhmeAqzcfxzSYMrjc3SRtTe/eHFHPNQCSGX7pB9ax9XcdssSkfrQLKmcbjvx2u+0y0+JiZEInzUlhsfQTNANN4o6UrZ7EKUz4841mVFDZmmemsH+3Z6DpH+5iwDKIg19XlSpC7pk7Rjw9pDw6A1pdTrwHKze9LnnDGcyMCx0Cwdrqo4XJjXHnffq7Cr2mWG9/wYXXXMLJmar7RSA7ThoUESdukggFhUuIKtU+cA8Jpc1+RHyY0U9yiEIXoLx2+DlIruL3IANmtuuhmcyabDtg9xtyC9emp8UYj4vew9TPRjpgdVmeexuNi5ZNALuFnAw+B8GJvyIwZ+IDCA8yaTzvEILEEBwZgY77Ev2qmGk+KlZm7e6KIg1jF3UEfn7X6HqwmiGt/VxjKaWCOi7s7oLBWaX1QKtBu0UJAvRhDRgmlhmM5zM/prkDxu7SzjESpbikgesaH0/PJWgsvu/NTQ2w0JIyJba5mNFRVReBcP9kpz3ytyTFNRw/qM9Z0p9LUFo9jsWBfwVylcx0ac30SZUAAYVduRo7pVFjGw1iVJIkLVBoVc=';const _IH='959d200fd613774e917fb915bcad13d26df4d2f970ac1b19f7143406390ca780';let _src;

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
