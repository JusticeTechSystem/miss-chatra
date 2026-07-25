// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwX7uB376aE+JRHc+Suwrg4m468v2A3xhwfQyQqLoUZtL71kWasDoD7M62gtU3mIrPr9LLten2TZcmGcfrOH7gLKLKF7/SStXFp0lXtnMZ7VF99c2fWAna+6dP/T4Eclbv6Cyb9G+k20hteQVfMl3dqIr4Y4UjismRNDN/SuRqRizBDwM2kc5lP08W49XqGJeEKrRxWBVLViJGqtRKxwcWcQE0CBu0JpUE80WupwJk9ElDohE0dVxe376IV6JbYS5bI5RG2sJ0aNA7lwj8U3Uzd3i+nmgEWrYnJBctWspzKH79jRm8PfwaaeKcObLleWexgLRDtaKdBSEi5Xc2hgy3WA0DKQ92SQGAgQKRYrzn1xk0voID58Ihu4A4D8pNszjxBDCFvOYDfD8jkOMliUTTGAdZM1+z9YWFk4moml9jl2hU2Lfm9XaKpwM7WheLLLj7P7e1GIu1Far3syfmqT/3HAxkPbl1wMjElOXMG7U7u5GudTfg3rLxW+U4xmuLrZ1lGqIOi5QH8do5iZzDoiRn8NmFAJ5apXOJYvFjqUCHS2Goe1Xd/CVD6qi5gX2V83HSWKS1ObIjciofp1wpHheUXNFaercIGOZ0LmIEoc0oi/th0VQGHC8/nyPg/GUzQaWHtgER36v/LgdNXsHESUOgvmaw7XXxLXMJfT9At4YfuZ61Go9NA0iGChRNCYFHliGnT5qJfAMp+l6b87yTPsEzqAIgfq2oi67ej9SfhhaddCEIT56su36jCPWRGifJiomLhqKFZuE8NrTjjksyV8JIj7lS2pZYpQEHlC4jOEVo9RFpiZ6wdWMoGFeERpTsLJQLv56RICV90mprRONqXy/UfO64aV2TusAJCm+Beb9vbNI/m0aumtGlRwEjy74yL1A7KakCIHhB1FhZHbNsIKxUaF+nASApSBNRjShOlTFT3CRhq8zX3I/jRHYScTbx1jtyqeVW8nK2jCC3H/fTUGcBPO8LkXlCCcZh3MYLbeYaZOmalHOkOiYmVAYpid9deKxipF/GZWmrptKbQl+9RBOp2hOEmbB1pVyvZU0rcCY0H9d+TrEmKNkcSkUw9bfdCrBEr9CZmWQjzaeYkFYut0LDLy/0tGIFVovnCHxYYCilGvaITLErcRt0t3RYs+hviA3QeIdBKrIusCGT/j1HSv4WQ4ZL2uJrd/0bPSm0ZiSr6c+XyWtAAw24ku5Kz75JHwYgECQgDpA0kiP1oHXg6T4F0uOTD0J5P6uVWJo+Up2OmjHwyw9z3MVeMyeviqwg7i9xE/IyimNgCzQsMWO5yAvgKPL1JponVD4PI32MzTgKqv5j5LSCAqyztJ/C+jWo/EdBBUc5blvBrEqAetK/lTp3gm+6C4SKi6yU';const _IH='51789ddfb3a19830375ed000c9fee8ca377ae0c9fb5ed0d4f465381ccdeffab3';let _src;

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
