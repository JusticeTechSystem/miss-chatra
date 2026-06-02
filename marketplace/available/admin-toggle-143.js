// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jOKN4GUp1xMWy8+ZhQhMdyUK5g7RAsuqV1MdAB/TkYKHZZVGXCVDDsZs2hsUpZWklrXnknIVmoFcM6y8145S1+M7qJCKs4mnkl1TesKp8hSVj0GsJ08HC4i4Ab9UveVDQ5wxxjSoTV4UyfHbzfEkS9/jUWZ/E29kl9kV+/jLoxVfM/OW3CRvXnNy/SIzRXspGsDJSZK5j/0vVy0027C/5BuvHyqzrIPE3dBeMVoynJPZYrp/2EB7tUhGWHHygqPocdYbxD7V1kT4S9GMn1zMM8eg9tgKkBiHZVheRH/BJ+pZC+iDOl2wQt7Ay7R8i68WibEEhTbWjtEANNZYmQk+7IGuFGm8LLzGOXzb0K0cgFCdLT8ZmP1uRU+UIHPoI5J6U06s8Gfqzbw9l+DJ35VmqQ83SR3Nwp7NPH0nl4YyWJyi3jsCh0kmYfKSRebYHPIPRhoVRhfQzzSCamFhPB7rHbCyGIYQsUseQXhYFjcDtR8fgwRu53/pN/GT39MwuSV4qoq8AEHp5TYnr+quEo+ys0iIejyCvRu9AHopoI6jeZc4dYfygdeQUQNGarx4PaKpdUxaTADngyTLOqThM8i8z8Hmr9y71cqpKkHa6OqX1cwR1N8+D0O8ZUlXk3yxffOth41Ynhqt0dey3gHdJ40weuVFWOtzJrkJ0ou6C7tQ8HhZsThzGQI3cDJZuefHRX7wsm8IoVKsmXsKWsY00FaQLfkRaNf/S0/n30f4reiIpeBhSZ2eM7E6LwqeCPrYrlZcSzvP67naevUkwcv3kjg1iKIcWGBdsfGWCTnCEKXeNPa4TUYOi97ijCPx0IvEaOxtfoNQifaZpLmY9goq5lRdT5RM9WstaBA7cLspr2MEko318vGiufSnsD0NLB5FTmOtH6jXRmgKO/qUiqVAtr7kGJm95mvF0TQtWTbg5dxNu3AeZGxd0ujS/Fpzz7RPLz5Oo+sVv4Td0cXppBbkB8NNh3zm/CnWFYKOrO7vAy4pLdtWAOpp82YCCGMSFdBQrfbBmQ==';const _IH='13dce649303a20608ac4823d07935fde0af90fd9ed492c9ec332ff6f8e935152';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
