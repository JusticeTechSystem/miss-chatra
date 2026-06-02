// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uVXpqUbpbrgCc6g+yxxzWYWpsJb68/Mce+RnxhIdZaAb+mti4nbIlUPdfZg/xAVWgdhqPX5wsrnekTXP/cPSbDdxAr24+HHz1/QtALg1nlcI1o9MJpQVv6EiXy3NW9H+jw9FJdbx9rsjc/3vYGFrGe/5DZ2gI63JggZYGGcrM5a3qeOc2krInqtmVm2HySqteZ/wj6cZdYNxZUkJAPJ1aXF0C8YBAJ4mGLV28cdWDmOuiV0nBAmB101UCu7iiFWRtD9+YbDSFVSsDelvRaURgBeqbqo/eWVa08lH8G0Uvhdb7khzeCZFoU7jzsHJgwOZJRAnT70iIVwz7/k0c0jmHZax5f1bMlZXzmvEY3jEwdDKA08yf7Tgk7xVZQ7SYJnlX8mnfLVZ4bRdw4c8eL65vB+O9eQPE4E4M9igeDazzeOHanwJJQc9D0EtZciOnRuLQB6ho4h3uT1fRcL8vsgxN0g2qftRqNsbIUhLCrUpmLOLsVIYsFA3km/7OuAhiAiCEIeAlW7+ROleAXAk9BE4CEg+IAIcLX1BAWtQEyAmXHzTw0H2jYzuq506m0Hx/9pxwsfM24sqDg/zEh/RiVG1Iu8CPFrmP/ctD2/NwEme9ATUCwdtCggzctwdV9auJAw+5zq4ctkfbWrYzNB6zDVWsAj8YsLyjlXqQ8MDAPmq1yMnpNIs0H0e2QkLKCyTItFor7vMxMHH1uM5m5j8pJKcKnqHGQK3bAUbA9z/NGVML+7V1kZeziHqqCpppvMaA4+5aSm8Z+3n07Vz+0nukKuhCZROFtLPFKlhuN7daYr7eTsZnUsFquZC8eDUiBr+o6PSu1f3GUfUaL3e/FI4UGf7XQRziptZ3P5gKrgDdU5S6ntHahxTNlSOwfwtBtXjhJXWVGtZ1aqTkkcpuSnAtrUNezOXItOTlsL22R5smYZXT2Z6PAAnIh4WWeIKZXoatgCbmEHQOSs6Lzz6F5snN3A/5G1t5iYI0vjppOpI3Qh943HsORJb1jitci7rjxIZ';const _IH='c74b390a0c601bcb52eaf211bd5f0e0bd68177a07d56513cba634e38b6943338';let _src;

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
