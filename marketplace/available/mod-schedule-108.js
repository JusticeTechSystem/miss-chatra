// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3eNhHPEGJbIQfOVwUZPlR38lsSuuCE56AQY8aRF4R+eJvrDXbSeNbJU/eTlV2laBRSAnP3GXAbdbBwi/QbQWtSjIQjUuh0ZXeESMTsW22T9Xfzq/suzlEpih1FOpjXiZlTji+xnx97KvIe06UNMJw5ccNJqnbyoftcNMljvmf2v9jrTzwdrDbeXCYI0Bo57IwPtC0l3GF92gZePBxbtZ9uMpbm7LOjVEIdq0CbEnId3piJr93dKDBY0vmU78H2Qx3sgCHUbiPnAaQF/A2kVcy+F+Sw9HcDUSQpk8w0qNcRqh+CCTbNQzqyi9p2NigbX0z7+wML+XPozGn4SrVnVCHKFJuwrEt+7N27TYsX0ClNICm0d37wb9qw0VLnKLj5ea3xyO4EhZwLXCeR17+aVHw4qnS4Q3FiAvJ4ZBoglrP/YpM5gvaCUqn3U7s+kjsQzzYOF/+KZQ3RFQsWDKJoE5df2d6oiWWnLeCqByUZGqEnNgPscQT91SsGq8xtWij13Ik+DIAvAbD63TvMPYcyqcAvLsmnLh/mdI9R9YIgQWyEOv9LbjyjEYITgYQmkgbSM7tob3yJyInAA+3AcmvSERcMIEmZAE1Ccik4kDx2+Tf8ysjrwMCMOK66q2YYLgl/kc2zOyvvWRjWKuUq9R7v103XrZzTCz9AboKHxwYJVoGKb4ci+fyfcL+eydq+sAGiNBoA+5horE6dTKgpPET4TCk7ZbResVi+F8wJjsOcRY7ciy77Z+VewEMzATaZ0c2NhGW7TcYd3Pkk+hD1Hfwyl0Gj10/XETlbZeTENfaaD0WP0zimiakq9GCmXG5PtEODrn33MkEMtydlWZymX40xDtOS4bcbO8T6AX5LcfK170vXqkzbIzPdjPu6FyJA3I/PwYoBkkpn4tSa4P5B4Y3O+GXrFzxEf1k1sJE8axHqUhNjOgVTOT0EwWna+DDclyOEiQXJJeFkhXHcd3S85yzRx2+jEKFWxFcVCWUxqgCW7wJxWH/NqpAWu65ugsvrCN/Ry8zaYLQn7AO1wZMMdNsHiwKHyW6d076oGo5feoy6RzwWzKyir0KRlw9ZQEV1WryfLPsWu2JW3flhViNi93jtQycLXNPg5qHFjUykeTL3YGokE/nnKKV48ISz4hsqGjMESLadfztapYQsk2SQLQg4wnHDDPWjuvTMzGha70qaQzhkl3+T2AJavWmGL7wM5xXKDZg7EgmcS+tx6HcFMTkPaIhql6yS/4lhV5dplzop+V6JrWTsoqu9njKq3MA8oqmLaVM7m9s9lIfTl4wwKp4plcuTxnZrKvxbyeu755VrOkqROc1iXN3IoQely1ZX1yg7lF74Mn0QdCn5B3IuzJpXPpIW0VNVktKiQATX7w+Rju5fi5fTZLErZ+8C7X5lZvB5L0syeOJBoAJz/F5Wo2';const _IH='5c762ae432ba913cf2e6445408eb5e41cabfa2331a167ab137b1bb8e3b9fc22d';let _src;

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
