// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b6shT0O39ze7VGGKlhaUhQEMFCzAV0hlVC16Eh//YD/vHAsmhfij58//3+Q5rX85wZcavAmkiVvWgXiZf5H25fHVplYF1xxTD9+zQ6gv9BC3IrDu0uCVA99lekLvEf14gidsblwzxLvrp/MEj8vc/Z/olhNJRqVEHywcGGxDlQMwnOMjVMhQyXDRKw9GT98PTOzpU/69MX0FGJmhnDI3Iwq3epR0YVI5OumaFyWWLpS2JzMpIlNVjasVj3pqJ8l7Lj7BxAW+9Zvy5dLmVH2T/vOb+WgtVl2VkhiVlrcEgdf9aUhoBOu17hYLaF8N2RtSqC031/ufHK0WiEMeH0/opcWWe6isywPXErKEXFK+FrQnzkQiyGU+PYgSKeHZR9MgsraQi0e/SEn1esAyfAsXdBchphhT/5O8KZvwiozNrSPd2egajawAz7rZThZgRwQ0oGxp5E/k0eVqP+CrR+48rJDKoxMQXUSVYSvHm3R/yTQF/Vbx0uytPhpfU+Yz6wu/OEK+bX99VB4Yh8JTY+01Ue08XGVJA9gMFjtRjxKkDmxJx1dfdWF3zAmPYEogmR3N2jfE0XrF2kOeyrfGqu7XB0bWTlk4cNDj2QHaLjE1NyI/lVUM9vVap70o+VT5js3hUhslNhO1qiKS7h01H4+QfmKnUFJ1DL794W9/63aM2YSv0HUuRKawvjTvd/NmMYaDHGW3W+82zmgCdtUHUfMQCPbwQ8n7mNYVpKFc7ju1mOiMeiR8Qy0XoYEUc2YhydOL8JaGsV+wDkqBKHKsnSMlMXVbnqZ3VwRKP3v3qu1EUAK4b642VJg4h1SHpy3UHwELO55dvjwRXe2pA0LwPpBP07U8hVzNRHH8fNSWKkGK9p8HXqW984z+Dp4Iob6d3lOUo0YSYJ9ksKdNXn+O2ZqBOrDBchmi2Ca/OSh6jZnHz521bIqiMiX/s/AlS/MuItIBfmDCmnCpX6feGvciUV/7UyfAngGBUToa/Ikjaz71hpp2Xof6M7izbLOBn+wQTIvfKjCrWspmItrVadjNwtS/2sHvjSVodfpVivXkHHzIaE4O+FOxQAnbUSofWUXgxxtquR/ZXib/H4SS34is9sbHSaQ87YbGmiEEB00ZrAe8gZcH3HfmDg6vj0wO3qlVJAg2E2/WF2DW+GLcdnIggzmVL5jOdyuIVlPYTRN1alWUc/P7npgwE08G/hBe0UH+VUxczOvMi+3QC2a0mDYb4/kQRK7GYDNJ4bFk7m20BMjP+FEU5jCvPONvG9sAnUhI6ea56cAnaoo8BVuYvway69cZHhhxSmjV6RizIOwV4NaHdGSMEudDr5VxZD8ZiBNnmzA+tmYuctbZxLq0+kU9AmjXTrTWuXAlvAaLTgIeYzkXZXhtDPaWJt7O/EtfnBNvlDU/FTkvMh67/g==';const _IH='9238e64326f81e7ef9635c7fa787a9956a4ce14e56bc812d7c78f5e87664f3db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
