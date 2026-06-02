// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l8nxveyl75Ac4YWB9xFf2MGitPL3Fvr21/3+hqQs41sMlFUrYkQM5y3NVTN/5cCg2DhJyuidEgIBmA7ZHE4D+UCHmm0QMtxWTUgSLuL5lS2Uvn/LZjtx9IK52PI2EHwUvTaxAIYBi+U7VwPm3Jnt0KRh6pvXSfLI/2MYHTlKs5gIwWVmP757sP67rIgaefTeOP9CEfCRTH6ItxnfCUwDyjjDVhXEbWTQw9YANnNMPwmJYVhajxNPFZCrS2FJgyQnzKQIQri3py+ItY+zqfH477WyO3t6gJbmQQZR6kTH6CIbhEOSKYQZ+k2l+K1dotYX0jrLIRhQfcED46rQ2NbLpXaBE1csJIYAQ+Xdf+CwIPEeD35GNu0Jt1P7BCJ9ymBb1mKgY6rQRracTBH9ONSwmaN6yYBNOOkty0q/Pb1nIJKXFaIVPOTliLbWzluPnFMHTnFEtXCQneLiCPCp7o708jLHU40yp+6Wcs0C44eVy1Gzoy6L+5EcH5pEXEzDYId2tizwUeI57eUJ5FqNeJVo4AYwD829FPPdBr7irqyJupOPkHCinAOkQMe7wjYYE7ejPSTi48K3W/hShlTbgI9dyhVKbxV/w+/mnFj9hGboIu7MDholvz3vW61Rtol1tF6y+RypYTxIYX3mHFh6Kvf7rwgrotCXE8SL/kVe/6uYD447oG/zXO84YJfmyd+A2sRAxuXVTbbJQrOAhgeYwkV2TCbTL39YvpZqzt+WfhREiF6wywD0zzrrtJ7APBl18D75zm93Kbbam99tO1QYeSEDI0Hx8uRCrrPlQ3JC318n2UOgtWs1rDMHI4W7/WCx/sSuSkg8CLJpqzRtCTtVw6NShc0T64AUN7vaBCeMIUZfs7w20jOuO5NhfbCYbm4+ml/O95YscFaa2lzF4wHUGkGcGKnnJej+VJJkQ8HVHRSQR9HKjUg13ManwQefbOB7nSMmQ3twjUUIBz1G9dwRD3UW07XNfd+WJGYgqXLYt2T+YrStf1AeJH1GbyBQfFbmgSXxoKzSI22B9hcPPF/OLon3fGVoFxKEM//dUMU9ZeN6JEreuMgMZr9lgP54RS3SULWR4c1t1yjEFZNrM4Jp6IawQNcj0tLP0HrDcd7czjeqSQfeOnQBO0nOWtSrC9xMmfBuPcCjNu5yNRQhZPcuxCH7kA+2Ya6p9W1kzSXfzyfymuF6tMwTYi1dlV84FrjoWrR1ArZUIXzaG/vNvVFnwemqkD9q6Uy7RpjXBRbMgP4yvz3FDOgS3MWFIR5aMj4Gh69W7GlMpftndKc2Vk8KJrJ8Jllnn+51MF7lP3M9Qa5+XUFphyvqy+ANPd1i1U3Lz/3i/6XPOWaQlMLSwvUt/MkFeeT9BKV0qmyvJdFrnZ0MFVoAQNo3T9I5igPtPKzv02CI1aEPaMhwUg5JNPNl2qicnLhxftW05J140VqYP4qEVOskl907C4BAunHr7BKgIMwiGOc5lFx54LMVbkYeC7M/feZl2njLWaB2yThxD25lM3cTmToVm24YtcK0vMNa1OGJ7O46WKGsLfs0kvc5lA4fwnOixHeKPqKKJ/h3MCt0/OzQrt70kjRKNHoaFs4e9qVIwQ8rZBj0xZNpeUaYxT2Ny7Lvj3UWZMJJkwNVWniwiR7lRkbTCYTn4BYCr8pj7aN0kejr6S+uHj6IQMOcA1l9x8mRPAB5BONdJ0QISbl3DSM7tWhlEVo2g94ca859AiChjC5EKA==';const _IH='b0fd2c2ed8745e5478865fb4822c300b44e8e315636ee4dddb2511cb739858d3';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
