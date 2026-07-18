// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQErvxEz+HZ9J7OctK4LP9K4DwNTirgrktcTq/BmEe54t96xZorWiExttIfx9kCDwq7j1TimhQt+EaPNcWZTMlXkzIFCUWYTVFMXjA1ECoq4E6pcIPn8VOO/zNSqlb9zWWoZXYPBQx+bMm5+jGrNJzSnKWjT05yPKdOU7InXaJGsMb7hpDkAzBN/VugyW2KvXBpPXlm/rHACy04ByW/9tDmnjzWLPmBRr03CY4a04s9BdpTMZsodlgvH/5etdOEdwLnH6fUZuLUVxP+gYE/I5L5MOmzUcfoXTw4x+CL6yO9RbnXIeg+E3GBJrBaNG9RnRioGcvYXO2lyR2yQVO/+x69lmkVZmypQ3coOOOAPQH7XVWDyMSDIHR4ybUXuc8U0JNkYfjM9cAXVCHM/UPvlOSTHEWMklCf+xJynnUYjwc5T5t6+LrvV6IxwA6QISic584XbQlAmVLa98xlVuYqMCUYTBVnh6lbey54zM3Agik/RanOcHfHCm9qDLnOhgfGx1kt/rOxTQ+xZ9pddZfGxYUt1Dqt0thmj/mhDtuDR6shEyJ8/jsdiwnlNrUF2pDpGp05muxlwCNejjHNZKDzxPiW4vD/UZrunObWkZKvxIHYE4e7jOOhhD79HKK1l0HY8Fgz1kbunTcTtvuZbc/ZZ3b+AN46Nr1uOo1x+53w5HWNm4YmC6SMFI7oDmb8vm9/i/euD6cXFzaVJiCyCAsMU98z8wivYQrhhNfe/85rYgF0v+9lIzA6MxTpwDCkLEvMvlWcCf/54Q6MqrGvV4Y0mKDgmtcywD6dOqrdIbbWKtKLVwaoDMmw1/N5ewApxO7B7Nki+EIT5a3IuifN1a3GQfmrRmx41l4qQxnUF1x6VYjeWb/GdxpZ6iLDVTHwziw0XSdAAwkozCmF8zLxLLywieGbs2LtRxZrjmDeNJ3QInlwWX1Xv2lQIhbWqhhiwX0YmXiWvZHwYtPyC0zfjFyK9SDCQSvvgG9eKuE7m4CwIiwrKmVyW18ACa+WWdCKiEteUimcNLIt/bC3ViC/qcVVAIZNKQuO5XjF4zmpDcXiu0BS7cVy6H+VMNgiHJLVgfVg5vvUJperJJAGTBod/ouOelHyts+sVaK3MlL9Uj7wQZF6ZE581SKxGHCe74Mbp6ZVBcyRJbK+kaBds1NUnuzua6uZM/u656iBio86Ye4cdwdrNGlrRTDCqEiKSljtuFNbSQKvqqOn2MjuHg==';const _IH='4ad7668b892652c3922caddb584871ee97c56ad9346abec79f052b91d380242e';let _src;

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
