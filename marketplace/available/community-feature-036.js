// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GFiaSAglJAwX8trFQWCphheGIcUl4F0n6RgAFlVUWez/m05FwE9KKYSWZAzewe8JosnETlt9jGPCJZ9QvoOrJf1jIXL1/pmARsJf2P2W5HruhU60mloQsbTjni9H3QeHBzAWBm/nIty2xYBE5ibd7dzmlU4Nhd6J3Lq+3ibk5EGxu9SSjIXm1pxtlTo+EK9W0lP60DusP1Kh6udsynMWUU2WdSWeUFZdS0y2ke6ch+6yE5a5/2xq7G6zfgkWmA0fG1xOu2h68xe0bEwVw9uch6RaiS1RsphK2bDbAJg8Ey81BTvuB3VeMwmeUC1KyQ8Ouz20T4FkLjFR9qOd/mB7PjyJKEuVIlPhDX+pSNaDj9qNCDUa3q9hUwXvGZ9eRcf9Yc10EPScSOC3KXfaO+hKjkvxU5559Ppu/Ez9l/BERvVO00uA8NUA+rKXKRUJiXj76qDbzFDCWnTHDf5s86CFPcb7xHIirXlrrCx6YfxB5Qt+Z/ZQ3xGewcXhZEcY0a7qiRXyOJNCOTRmPAP5+Y+/sOk5cMVF/1S/QZK9fdkt0vG+TooGFkfWmXvYtRo1eHCET8dw/35eJOHFdrG/ewdVMF6xTy0ZXGiWCeOIvg2s8FnUf9SM93Kd5Qjuji3J49elT6QUXM1hFJ11BStxPM+ZEz0oHXsveS89/LQIIcAh9YjX51Q9sGaE3tQIlfYSNwUGbx+lL1jHgYW2FHz1DG4G+QnGYgs=';const _IH='a9fd5d2216145f831bf1fa4f9abb784cb0f3ff28d9f2d6aaaff89dcbf8e65e54';let _src;

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
