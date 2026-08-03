// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVSRVt5Pg97hEr9x88ZLhjTheBBdlDP7fOLuk8Cnuw5xVEXWkLpm9I4jkAWASyKMw7lDec36NmAVGFt9lQLfkM8ivG4Q3iApP0SW1BbzdQ9wUb259h2uFfcKKLEcwdsx3gHb9YCkKV4txPTidzVOLBUwjmDpjgYdagMqMkaN10IaOSf/vQWQ24x/Dgq3UMXhWoLHId33cYokY7BBy5oUfMWy6DUnemJIQDKB868sIQExRtCWSlaZiQryLHkAE2ZKQRU5SOJH+XASo81LYxKOPVG4ZYYoipofvs1/XthqW0+1q2YsPROmP0ANMgHTtsSCmKjJ2j1MsprREvH1be5hpufJGx/T+HWI4yckxfRAeuyMwaEPd95lXu74bsoXbn6wsj8aWy/BU53V6Spqb1Y7vSjdUbo2NKxhvQ9Bg4nAeMaLyb629CfoXxEsfEHyfHENZ3JoTuZpLiEAlgrJQCPcHAUn1N7fzADCZPgwkjn20p3vhv8hzxQsZ5fQRN5mpiJh3VMm17Wfe9+3kWOZeruS3ms5zW2NoWx8lIEzk1D92WNG6rH4z8x9OmAMKPO0RxXJx0aiqYDs/xTnZXaIoGfKHdouhUWF9GhtsdGY+3Ts5yRsTwdrQteic+i5Olt/rmm0R0aIBAUlQFH0JzzrGEfSXveG36a1nk45m3/TQQ/cN5G3u2GDtsyJrZplYmzkm8OcOIofS3x1EOklE5vbOy8S1TX4CcHWBBCiJTSr9qPxl2ieGaytG5ljI5QDt9RZmxND/fJ6+sqrcnmjBuQIBW98cKvoJ5FJ+vPnGkRzXpegjEv6xEAYvn/RkslOW2IccK9gD+URWVnPmzPR5BS8NCtXJXZvfcazee37WX/C4XBMsi3eRpsHiA74vCAmrbRsvPa+SrQmgcS2ScJWR5OLYrhlDmmyR+zV1hK7wJUeYmDoTHoeGmuW7AkBnxayYqkJIM8cxLou9n3wrGkM4T1T5QmALql+NyVXU0iX0SweuG2tZASvpkxVGzr52RbF5ENIFiXp0NEnaL7njIg1aFrVyYnFKRGMrxqcI6SV9DcX99ukSZchCy1dvX4rH8pOo0T6ku1+T7HZ4v+cpRdchg41sy+jKlSzW5I5hw6LoncdkpZCQBOD4IxeetIHMem2fkRgSLbTZHfPxrOP2xPtEsrzOCH5ZbKJPzdSJb799i7VTFilRnsQsEKpVoUVwaU3wJalnntap7c9DqQdHa8jWzLXExxbKO/0RZ310Rmm+WHCf0gWoxBfTWGdxlEqll/ckCSWetoXr6TUzbqzSTfR9VtVm7PP7p3JK7XPzrWIq5mc+C3PlBoOZxQRoFi+x4UCyt8iv6JRJ6R5x/ulrhEy5kRgRzcP4HNxLl7Xoe5R9ibI0=';const _IH='7f44ef5f522faf219efbd4cb0038c6cbfa29223e2005d2349dc56c90fe61bc0b';let _src;

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
