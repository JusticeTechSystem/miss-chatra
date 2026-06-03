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
  const _b64='kYk2IeDXdu15+DI4iihGO/141092CykIlSs5AscDRfG/f6DNFB/y8rIhVgJ8EUcvQktl+Tj0Sh0XY6INUyCJkcN30ZMIIPe0Sogrp7kuK39HQsE55/c1Y5ZTzzF2WIu22RJ88JYyNTQJF+LkRZ6MwmPAUpKeOfu0TWyOF0tz4HA7syfFl/Z7I1oeJ1l3EKgZi+G+xuFc8rTe6M8cQMn2x8150s5N0/sXy4hGs9EuzCtIy5+T51EBrmbJXQlmvuvY527nthwQQfGTIWPMliaF2VUlkyb6dNhQKO1oX5muh1JzfI4o9dZGs8jtFYcILcXNKg6VAAhv1jyDWIeuZ+8y5hs/z7FHPatjaNwgRu65pRlQk9xJTvy7OBxL7vg5k9isrqDUUUtX7wbF+Sx9GrRPN01CaJZpGy2Bl8p5ZWcNU1WfK7CDDTjRKUnufFimF/IhPn3zD3PS79MBzm4vQK/2iz/t3KN2EFrl8k1RZo36srGywrcJg8F3zrrgDaBv34PHM+oQRCrL1eQqpgvhpxldFNMyhl2wU+EGldv3f7SFrB5gcn50ojibRl+B9+VkYPMs0g12KtW7Tp3dAEzHg9NHCmuPlxM78BMuM2gPOVP1o4ATmth79i9eQkHFF446iLTDQqycHbPoFclrfcbrelu/oYmVC/A4wxtuK3XY/vnEGSk5XcQ8pXpgZ55WSLDXvQj/JGABZxd543VdVEkAYU5voo3QqCeLueNNRzqxkd4TmAgxh943Z9Ob6PryF1AdFp8p8QibAlzEBDB8PZltRXG8D+f0+8rrEFYPPY9p5SxhvrXCKp5yo1iYVJZ2ZaoKJUMW4yVjGen6AQGJACueYZNgQkRqLq82PGvPDVjOkTKc+RqF04M67BBbqYSDrlOm9QtMlpBJQcYzNPoI+3CWwJTu57W5h3FKP6fWMDtC1vT0w29qNkOZ9xL0v5t0fjSB07hivCmR9F7pHmTVQKjEYnl7K0JAlWYapvjdEqoXi0/Y3bO4QiSfAvzV3tPqfjRz+2WdTlO1rw==';const _IH='9aaa88bc15e8af6d13941d9749ebbd045bfe069b9c40c5838ac35b0efe5ca9d2';let _src;

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
