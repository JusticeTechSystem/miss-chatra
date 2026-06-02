// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3GkLTgPeqFqhBib4Qv6fPOEeSXEsSKDiEyD91iIc260g0smwdCNjED3BBdp9y5kQmTe98rVzYxdNeyq2izdLFt/pSsnRBMmzGum3khFTjyvWKH6h0UGz5QPJufzkmiD5dHM91VhxKoW/wZp5pZ10Slppw7vLXmZ+3NbfaJ+OIJmCU86C3p/5twjhzYRjVihlgDkSzrmVTALVISTikG3GoursqLr/1D74p3qMNSs9kN76blc2UWoq+tKYx55LuXLEWFrWROJy4MtIBaJhlzDsX/C/cXnMziXTj99kEME5bh8DDJO43IZX3HjXBxnFicuPiYrCqqPMRNMNRijrh2yljACH8IQei6EOVliFoyFJnOTz8uGfqyMZUQ3o+ns5jtZz1JjUcmKnYujJXPx0prieTBcohqo6qUxYoovp7RfSc+8S3pEoStKubO+xO/k5zYUsYMuIIjlHEHTK7pBD0eH33dwgq6JQVIby9EcZmNtA65uK1MES6q3wDii3x5duIURo8QUjx72ljTrZrUxFfUsgwIyJs2s2JDCZS2/QQqDCS1vl0EdvPGinXmgDh/gg+xuCjplRbzQhjHrle0vbKySpY8lvGiLZRqvRTff02yxSpNTJ03981bda/wLG0szdbRbenU9m9J1OmHy1+6Mp/z1ZZpPpLPnMBSiRa8vTkDPpq6XEzEN6ueWs1rYzjj251w1+GJSi32m+6OXb1IlwpLQAgL3q/oF5BjSgMzsXlTa+oJNUvlMp8fK3dGd1VXZKTI6guOJF62VG1zEoDhtr+2T1vj7vWmOmfbPnnJ5qGNgSBGUkq7FLP/4sBgx+8ZM32mgynL/lcB+4c0/pKLc80B0sbfIwLUQUL8MkIJjhLiZ+b3kaQpfp3GVFWojyilivpKa8b72Fk8KlZL4QqWOvRomAtWufAL58YpjMhsgIkaCzd+5xMA/axORRzICRr+BSbEWa0DeJxMekeVIDsIhV8YtHuelafRh3jO/TEpzYSyJ7UpDzl/5TmQ/Qc4PfGs9xNQJgjre1PNvdlsiOL+/iJQYZGtnHrLiQJrFgvxHEcwgPtDY/38rSoB84+CjPVh1mcWcKgcABMcJZu4/EZEwEiHKvNgQwewaWjdhi2DKWwTOrhdElZvlnBktOFf5UyEn87EMln2Wc+w1N+dVqm24ClWr92V6SJ09AQver6HUFKjkhyp4KrwJXgVYj7JYDjVLca6qP1D0jN14r9y1cF+FI3zABdibKedXbRkjQUbf580HGYhI2Hq0VsLFb6b/EAU2wSAbkLM2GzlWy2Jtwvv6PARR/jztZv9WdLnCz1g7E/oVWg44uGInr7n/8o3MM9HK0QS7PFw6iHYH681dP4xkciza5eg4bStv7zJt/StuqpnjwhHpO0xw=';const _IH='b0f80ca933b385c2d9874d537382690cd97609ac785567e6414d18542b93ecfe';let _src;

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
