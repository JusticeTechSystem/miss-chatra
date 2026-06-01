// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/pUj1cxICoayDV9cZNUaxPE8JgDaenJnXQthZY8aTJvEi80kFTKAFofLaUPwSndfyF8NsaF3hJmHSwihs8Vq5gNqGYbbea0+dbS4QbbvcSUzAWuC1Q28Fklp7WGF/jsOfh/XEkeI4bkULFzDjSNj07JLpoEMIlJ0zaBU+Vsuo2CzCm3O1gbAkHlgY54LdU4aTyG3sKTdW9zgnzIoEORwqZe5ZET5QBTkAVhg7OCYXIhOvozsRVGxYdi8d+oOSkVY56ORoonAu6WxaiIiorh9VhDFkhWVLdvq+z1G8iGWniYeXxBYKzce2YCJ5bjSRpCNnCRMt1DymtVi2Yho0cbYNT1SqPQuEisI9Mu9sqgXj/CSkS3QqTP8UhoLmGOB6aNfPsam5jJNyDc48eLMSXCBLbu3IrVtX/sMC9JRy2pC+EJp7u4etzP47AU9NoV/SE90ym4FJEaj0eaYqb7BR0TE9d/ouLnfv75p93OHuYRsuNxFmiCb4swivghaKIp45XfEJJmx6zxVwWCjaWweXCDfhFmh6hHk96RYKDcZmHWxBjL1+im01Dhhnr2qtv83h2gar6swkhRT9r+Ok6HeZHfS173VrWcUo8AuDcBAjbD/pYFYsKxHo0NlfhNj7QDV2dB8bYL+1NcJvdXZsTvJDH12YyJjTELvDkglW8GbTp0xeXFNAnKa9QulIpgmXt5TvIZpeESiyA0KbMqFfnehRy8rKB5Fix5unQO4osaQFvXdjZUrMqBn3xo+7TgHl7VSOkP5YhV8YHeOpckYUFrRdBEH1MNJ6r2YF+nX6zfWmC6Faom8Z0LntqZJsEBB2ASKfELGcamCfeobZi0cCjiUW7vDfE1lth4Kx5QbfghZiKVUqbdwwNqYMJhiY0PfjRhuUeBEVkc2pG7BaZGB4rmYM9/veqckReiOc8QkaAGB7yjbgYSKo/PTmMxAsmOvqebhaI2OYmsKSITvm6DVrry7Gc17ssSUIRkylbxQ6tND96njm9zY/PHHfjJt8mx8OzA8/TWhW9+4p1bHyDkOsT5fDrThfNdfgkaz5FzolBJHsnA4vKPOOKSE5JPEVVO7YX9BlopN/zrLaO4mAGdAzfwW0gpZYLY0sN0pUAkBfqtl0XZSJt95HsDcy6iBdpNziqq2lSuMCBST8cfcEvyzrbTFjhV6YBRwKRny/8EbThrKWxXdHn5LLTPwKHk9t4TEIdm1vVzVVo5zgU0/yVHg/TeXAjbbYc=';const _IH='984c8a9c59f6f2b6d043261eff63d7918d74c887227daa384942bd4c98d5af78';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
