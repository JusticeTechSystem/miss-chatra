// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeJuYKF2rFGoLaPAmTbxTBtPVFs8Po4qgRClOWo+KZMKPCS6I0mthEvkpnZzQ9ZJ/K4sCMjcF1+VxgBYfQU5DB/95YDsnbH14H4znGBX4X0K4LsXorvLlKngCpiDSVS0E+Py/bvMYrXiuTrl/lLmGbJvz54Uuv3V7iGzA5ymZD3zcBg+vg4k5etR4lorpnJ7baE2Pjkwy7N4Vpt6oMZnPL1FjDCM/ctulVlDytmdbnC2dQpgNaqK8Sw/7RiUA+4oMN30oEwc4LQjykl4qN7Cv2uI+1gXUFBFoaAWFsRvA5s2UIR1fh8+vYISTJ4cSjdT8E0pnt4yngfMh1TZ13MM7Qi6Gich5wom41iSDJuWcBAukAnAPu9XRqUUWNLPZmF8ukLQbfYlyRBTGYPf/oMUJAJPodlYIw4tPARmlG5IsBkpvwWnxyANuNQXlSmqBAM/w3nZ9AenYWykWpjrwvpwSgmrI3TqVqmz4ydEjZRaBeM9W0KrkbXZ4mHREHdZWFZfZI2ffLKNttf+v+r4aSz/fHifPKOzElUdOTuCCUUD5urUPwcMAj0BhPQny17i4Pu2x5XKaaWTwVl2xpAav09OFADKx2Zbbn7khN4bh2bkjI9fYwQJVHZ/MKl1qpUfn7MGUrTtkcffXyj5UwZlQzlQU3E/FyLJtDkexraqATISrdrHJFRjOSJWt+Ov4ve8fvrffRc+XTNkFmj5izhzLy0K4x9uE0XN63n6isZW4Z21ICWkJBeaqzINxTtmK0IzKIh9Rj0qAtx+I/Py02sTXgYIHpZB1U+qcNEx5OgC1bA3ikvrvVUxqwngrzEqJEmCl4A00T5Nb/rJ99AuZM9oBcKBbuTocuqWFtWlm3PeFBohBafnbVQW9cXIzN0vfK4JcFGzvqLC699trp+VP3QhgoZIBYWfylwwp5hhn08r6Dc/mVp2HzGHbbeXNUrq+FYjaiE5ziKGJtQ1jAJgACnIY77LtMXA+OPLl41iUntXYCEUGjvqOJwOto5R/KBHbV3y5Hj81DfGfLcXj1ED+b/wWvtaHxvU7yk/mavdEdcWlvE8QnPBWngNEABk3J/T7//76U0rdlUYw77IK9LCQqmAet24auwa0Hnv8TK4AgAvrpifbKSw50+oDa0CygE34QAkwwSpDKb3QZMjxkzNRIEoUkjGfM2VcVB3YhKqYcvZeNAjrExCEHBgJW+oya2Fe9u7VgUWHSY55y8lXo92cTTZCRVQszTKGtelFceMoSijaEBx5D2tClvQbLLbK45c26pvGY5i1af9Sg7hqcAsgYy/udj3nlKOn40IkJPEmFvE6rK6Ldwidvt0zG8IuJ6TKaa4F7hp8JOM/kF4Jya5G3FP94Q36f1dc/Qkjm6Yr3LtRjfXbdP9tNgBzvagVDekWGi0XixMFvkg==';const _IH='ea3d626ba4cdd3c66e231533850e1cee9976e5e10896f01545b543b165a01821';let _src;

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
