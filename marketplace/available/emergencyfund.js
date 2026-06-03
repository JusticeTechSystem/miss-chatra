// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dnPPst/Ew9uU9vww+EolC85W3vd9LAXR3g2kcGxVsigSeGBTAOSlqootbcbGgmKCJem1GThV64za8jYE3JZZAT+58k9L9AxXe6y9HWuWk6nPyCiIHwd7KnYGHBTZhqEr//F9jxpajgvf9PAA+3TR+X0oW5mW5Zk6L4SBmtmeSRMiRCJhFqkqPzK3QYvsXfgK/yFr1BePccuj6iBsWmx2StMep8KdBfrlcEIOIaMq78yEqvLD/PAmBM7CnZwATDIX7b0yIYFQ94Vjg8/SQ93oce0u3Gm45j+ybC1Vrj6h9hxTXNfQdofh6emu8iTuWEA7/wk6mjM8a5xQN6u6hkFfx5GLO237iWNDEwOPXvJXxxgMbIk7e6yGyDmF/C9Y3nzfZK+jHXLKXxH/kbI7kTufWyExYibHq5RFxYfPpD6npaHbDR8jHNzTumKI1BQCJ71EuQot2SWVwY8qA3SkVnKApVrGcSl+uwTV85NZlK/bhyGGCBVtVYweK4GkLGoPSH3k6iuWuWWo1jZHuKkvLT3EeO/grOrOxOORtUYQkMX0I46Mc9ol5xNuUfmZULMtMqr4CdoGJgOLk9Gq4g0cYL6cGYaGDgIn0J4nlSN/HXy0g/mxSvL84hgT8eW84zkmiPOrdAXNzDiPAjyxJmsSKASwMNvtQxrecH8+Ug+hMNxTYNdi8H/+26qfY8fTqHHgk2G92y8Mzkq9peDTCKEozXaWU6vNqa6xPR6X5KxtROK/sbD9y2sA+bn3ECcx/6eERoH+UkWmkgtrX9aqbC3G/S/20QKmT8wjgrSFEfUcVnwXMO9zYasN2lka3Ve6cqdD+gppganpAa+k753fgr5wVzSHHCGbY+XQ1a8pVTsJpTV7SsHV+wbUaPhhGScIUfFNwdunxX7gUMvfrc00gf0LfeOuEAbiVmedgXiW4dQm8CRPIPZvcWr607xn6JoKyznA46Eof1CIW9bOJ306CkNq5LfVzdipafvSkgzn0O/ojcff7FtrUuHB5UmK0L+9nUE/IQfqoy42fQmWrvCyP4Bp8HUFCLmHjkmMivujc+/mijRwmrneWgG19kUIKS/eShf/f/vj3EzYEaafNDf//SjP+VKvDdrOz3yDKHgyMCBzLIWgb3WcyBdak5ZhfYWRyRkgLJZUahqHOJL+5l5zrNRyInmts332NIjVET+rxxNw5dEpEv42kcMoWnEYjGzr3W7Xz3Xa8bve8w==';const _IH='4af4e14998655711aadedabd178f2bfbf32e2a46f2b789e4205916c4725652a3';let _src;

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
