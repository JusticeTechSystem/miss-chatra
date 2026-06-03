// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cqujP0i8eBYp6+fT31DupBAZe/y8afVnQjjXpiqwMqWhfQ0QF060hOh81+7OvH3E3rS/ecllrkIP+imFcZqCeb1PrCvC3FMq+EuFXs02FmdAk56aLzq5PudiLljHMKB6BPmKEqRrHaCwpZIuvY4HP13U8QHnZIzIdGP6t7mfQnZYS0kVEFfuz8HAOzvnmuBHMXwYEO7Ox6BsN7qP7weQyTD+Ory2WRze4wZrjI0y7trpBLjFZEAKWXV3JWjVRDvhyoOf2ZmDRi5Oh1mMuqMrQyUhQfLUjw7uDvDVG3TfsTnwzfdcGnmKK1j2Z1dpf07Je8lE6Rf3p5r61/pSELS0/nFsUs4Ea0Q3ZukilOvY/7GT//grjRjTJDcnQnZ3vn6Vcr9naWWxGiFiPbVVpzmo01Hla2q6DMlK/TERHBtpN7u3d/QYahhzqq7yVTFcl3HqwlYX2E1ZT+XG2iPRaFqTDSG4tfFvMaAXJ7LcfKG0x5SOOt0MqpUsVYibQnuMLLcXVjXMCyYvaJEQFoXuXFl+VbMQFvm5Wk/lEKJmnU5hDTk67nQeT9rTG2quiif6DxXi2yKiLvqROgeMKh/uhm1dy4CCYhRlBxoE1WcK/kHk08eW78LpjvMK5l2yNm2t6Q7mG7kRi1dHcaaC6TZmIOkhUojcXw54bpRb7zvr4ccv7/U0ZydCxpQhOvAtscJ4FH5bR9RMn9X4n2eRuZud9yASWkj9uQPWbMuYQx+zqZasI6KAkf7X7taZf2ervF754DeFeMIz4r4mSJXppHfyEUGAm/wQ+tG9RhgLD3LxYVGC/XEulcpkwTUUUaQeTk9+vVOLTQRhlxfVE2rI7axkLyuPiuXq53yaIklYqAWv3xb5fIsRH8LkvY0W5nGoWF5HuzGwjbivWihDIEMq0W39eFjuxdlvYLk8Mk/n6vVlYk3l84iVbxDx9R2xpKTYBmZ+M0T0nN1rwrbpSTUQddqJQpB1bcEwVeOAvpJ+cKeTN1FraYmjcvj44j87ZHwaEn3gXMMgpmroIwQ3S25z9OkUPsFbNyyGthnXsGpx0aNtj6wfztqugk/CSZRns+IGSfS6ZmZ6c5zIJm87XRR4+q+kGbgybGXOlV493Pusl4Wq4X2SMV4k3Tg6Gq2FOP7m2Zvbnp6FOBne0iXtPDYV06CIp1spovgCMlEtMoiY8bdlmEW0tKD1/0gkoanwJaO1IyxngTWs1GxDeQM=';const _IH='40d9c26b26d03f547ac50c98d622c619a43ce62590343f9dbae1118a3b652b96';let _src;

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
