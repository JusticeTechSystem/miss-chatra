// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zjp5EhMWycyc2x9ZTtgwacNpCPuYjPjShjAyc27lTshUguvLxa5CzCHBB8xfpL3+NkjSs7a6neSKb1xhG9m1N2kzk0QWUgcgkS3bxK608PfGUuTMdY7RefFpztnfHSTGeDw5wfaUP+RQ0p7F5VTEkOnQ9i4QQ2UY/HwKrH4WPrFvpi8oiOU65bTjkLFZ3Dw5oVsfgLwatLnicu4/T1wH+nXdixZsi3co9xKOSxwcqJ6+SZAKcvhHoMfjTVvOOdB8iincf5FZbmuzYjBLsLMpZ585wbWzliBQeBktWjrvj8Pv3gIDZ0qN67SiVHXCFyOSDtbSiP53j2Gqu8hUR4HMkO//CguuidKJCbCD6dTf7hk9y4CWLcP5Jj4zKhRYBPiTyIQ51acHHLN4npgKbFqkLvHK9TI5Sm226xOidl/dxsofZ5doXqPi2i+TYIwt+bUv6ms8dRqN+8otle8NDjIoQsqU7FIYCU/wZrwCTEoE/FLRQBn2Pyu6rOnUyfwuSdRZ9uwd99HIy3RF+uOVl/OdsNpYYO25Rl/NLMfBtM+iCdsrtp6s7k1GUaeKzuh0ZsTkS9U1SqiEriiZgiJ1POEC6hf2hu3qG6+JPYvz940xzegYMvNkY9c5+lMaluUuHlKREw2ImRAwAcoA4VlI/lXIzWQSUe1u4dcZY551Bf5Y7ZU3R/hq7GcCX7k+bhFRk86RYA3vy5Qutu+nlufzGdGKgXjWyhta+P3V8Uz5wxI1sxGN6EweiMEgBHlWygwm2HCOzmoWMFC/dXTY0crpaHIFAIKrwWOogGByex2OEyZm5zYRoN0De2e5FsLN8nHsYBEcxNuGeJEyRttfzC+/81FsjOu+kgt8hx4+nYgF8rxFf0L2Od45e/ZHRY6dXAuJmw5ofIn13uOusBea1nSl7F/342PGca6yyJC2uITr2PCC+10y7El0NL357EWPJLTMCkfN6BhuMyAaWOr4pLhWRc4ZOMg2f+EEkxsllY7ZnBBn4VdaZZRpuSMMZl0ml4R8Zim5YdMJx9jaD/IxjdTjkgjBaXsZoWti6btZ5h69zHkd77SC4B/L3p5q7j8FoZa/5wqA/zsWobZ5UCWpagFwFNEzqvu3aEj/NSqEHvt/nji3ITdYgxDuPtoV/bLIWOlbouXkZc4swuUnoqKP+s/Rx49S4r4uO0WXIPtMCFfq8qGFCgqQQtXLyX3w4nvyxPaUv37+HbS+17rUu17qumDd3LObWKTu+F0I7R2A6GFRzLd4Wg7kTqE9LOFvgC5/zisOdXv3ZnUwG4+YrSjXM19RB1LWh689jMTPTRvQHQMttwWoNYuDkbf/JHJXhllGXGZVGXsi1bv7K8s/napaXykVW/uTCDiSXdXKyzbcIEwC9vUn';const _IH='6ab24eecb1a9077dfa0fe1f1f9dae3b6e0afd67f0dcf6983a33f3bcf64deedcd';let _src;

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
