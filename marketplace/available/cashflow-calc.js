// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sa8JS0FdXRQ3vZQ200+17P+DHcNAlVyGD/dx1zJUr0lUGZW6YY4PRqO+NU11ziMUy106LhuRdcjOBYsJRq7/gZIPJL/kNpd56Lr6QASfHuSAlQ6j3hM7VpheYJd76eRFh4EHQIKqgACKuhVQp82unjGRvjCQcrOm1Mv5lswYeZHjMaXgx8OcxPWzyFzh7/UFPHkUQJeTTWEs2AzZlnDAq6cBcimfrNTIr9WkmcQZhIxtkpIgSVkF8E9uK9/i/3HJN/GPLlVTKCEScZeYnkzranJ8un94McBy5KYPcf18fb5stVKocGyxzRlVsyYk4JswQ/st9dChu9/4z5RuVrmPUtjxxJbppLsbf4ngxGdBSMSht+xgkjGeS6P4n+z8V6kg4YyJUaVYfUQK7gXix7/6UcyGaY2K7Jh+vSCJC3SNlKqwh1FTujJ1FMkyemKqKbFrFR4YHx0fL3DnbzOP/IinU+s7dWhtNlkrM5QYpAjnIJUMa7SDR7zmFzxR2IbmMIIX5rk1+wsLFkXyw8U9nvUTWaH3l4Gvhgl0G6BjGyQ1nQ4vYKgXmzS3o8a2tFY05eqHpzUHeZZfzJI14T0h347qN0tr7cYWVqace8nhKlQHlCvVwB3rHIvmzt3DxT++efI5x/3ZJKLfmQazs+stLyiEDUrL1Y9+eI4XxFjAG/1iQqvLRDVdu0OOZfHKi36oF9LFVi07UvcgUpTK9Ox4HK9Rxts5VOdysLzltbTdiE/Zt0AnBGsNlBNKFQcDa8yF9NFY6eX3vAZVH/O/eNB+DVFLFOuOXTELhsxS5Q4MAeFwTJ6w90m6wNtgCsnCw7G+4pio1K2NHaFxZSXJk37I/HxTagtKrKTmPzPItj0Yzr7hheiwIZkHyflOOnessFynaWjTep4Euj33ecb+7Ha/v9rxho6Kh6GDyIc0aVdmA4IZBNViusKhgSvCZGARxz/K51g1QxeAQePYBqwg8zxT7vRF5XZWcKq0ev9dRvApY/Xtu+zg+BNXyOoWkagCZJRH01K8AMEqPrnjpjw08phZlwmYbBRpXnlWvT7W8oJErF/2pGFybPq3pG/xx30X4Cb2cxMhGnXsrzZtnoFmq8Ph5uHcBrC8wIePfzUiktabOvjzCDe9bDbZmB8bWIEXcNiN0n1RLwoT+pSn2x67XvQl5G/Io0s4MrZuB2GNaQpja5W/w3xfXXKLZRZsN7iktROoFMRex3jn8Sm4hfCPqNjxzZr1X1owC4jZnF3ukZicUOn6z04rCynwhg/nvc9FyNPAvwPB0VmKyh4Pr5y7YTYGiAZSt85GXGgWEzXO3kYm2kKtdXklP0Jg3Ak2RMIj/RAVIfal';const _IH='bd3c7d1b0e81b7a91b89da4d84b442ed4d6cc105983cdf33f80209e4bb779c7d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
