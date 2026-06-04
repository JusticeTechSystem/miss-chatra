// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UXN+kGemTDjSYd4lg9Jo8imeNg1QcFnGrWOytImYiNzt7gBZKffLF5bOYxfkZjHBJO2n8snUlqMBW0CaUqADWmhKM9LBgz+au1OFPIG5C+essARO8EhH+p6vM3FVwJ5H9CuOv6nO0nxiKD/+vFuniLQhqWWIFh7iB5pN8hPp1qbt5P8QVBmTPcIHC72JNitvDK5NpF84BrT8Uq175W91zLtEHNk66H9QQ59wPQIW/1qUL7Me3UGj9SegkhxqoKbQY0L3EojHPiXoh84TcTvSpCueko3A+X5R19un65dE2CsqVtOaIh8rLYPnEIBixXxuwfJY7TZ/tSkVDy0c48Th6HwWz9aG0asg3qdjRUtU9PE+CwA9u1maMh5f733Q8M1PQYST0YaFiVa6sC3WhFy5CcfViW3v7gGXoQrbQRgaQkB66P+IOMFYLAA1S66appVO8LkePR3MiVO4y215JVBWZT32oPlyQAtpsCMLws9YbiaV3iBmjnIh69Z6anReNFMLxYDlKjVdg4C7TNltuIDf91XtVs3CRvpVfx56H9L6wtf/HMxrBgPUNeuSFmjRdcrNAEFnJ8zGew+OgWgAPNJUxoVJswl5/3+DTU8hjOg/xHIVK5dz+dLaYC432zYYgdp8KAmjq/rX0cF39zqNfpI5U8t+RHzkt/ixUeIzsyKq9sD5FxlHyurEY2K/k2Rn3DxJgqZ3TKFWg4jgYlaX7lU6BOdgtaDJZWFzFuyDtfCjJfryCted3p1J3ZlMAIMq+0c5hDC1MeWMk4b2m04Tmp32hjIxTdP9vpJLfyUubcrAFXiSxgS9WecYog8BXJpyibxhBIuYhCO/2KrfxeAxl+PKfvf3Wh4gp7btR+B9a/opH0b1ic9UKcFDMxw48//FhI4sWc+Z5ZhHn7Jw/Vq92lG16In6UFcANekYlyfDZnMiqFaJuyvSOJ1cV1ULfLzwvMAAa/K2vta+L1RF46C1/q4nIIfpIaJFduG63wSXYwQs8VdBw2/CdBbnJaPBzpzXWn827sQbp5fun5bpRrYzTPq9q8Le0LMJ51uYWd7zwfRQ';const _IH='887e71c18df2b89942af968114012dd21e5573eda271d4b25be38d9410ab6aa8';let _src;

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
