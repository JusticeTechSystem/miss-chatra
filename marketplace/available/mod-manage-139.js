// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='83w219ApMZFvvOp3m/kevOVdTg0XseaR+FTgxT2Em84DMUiips+MRB/4CQo6y8VnoNyudd6ZIvH8ei1s0JJNmlY1xtYOihbPzG8kOwSquzaVns4yByJPDoKti/T/CdEZ1QcWJVD06zKszvQzGpMTLgfu4BA7vCeerO799MxAXiJcGOEMjGdLrPNsutQFOUCanY7V7B1uHtau4EKiYYYTi3x1Q+rlG+jtIK2nGZloHpn5fTzRr26S2W+EN4egMs67LOqWtu/k3fdK2M1zoriyxhNNrUX0n6ddnZd+4kQGpozQl2K1ToJsUh67ISo1OuvCjXxzGtO5gEqRq6uheJK9Xt1eb67+bVeg324S+/DePbmmR/8BMHo1XJSNSJmxFqRiMQ55XiDeRfnWEhYn45P0dRHf1oF3jGaGXGAh9/La8WPGkSiX51EVJiPDgexgQ3c2SBzCGN5xr7IIyTRgAIyaM2f5Fz2UAZlue66tjiNwAV6CU/ik4j4vnzrWGfE0XNBG8y451lKDn2mR7iHHH/u4GxSHPvQYF6hUxEKo2PSFh3nxGBWbOlSneAVwp1WE/7Cv6qwD3qBDNBX+R0JhjyentLY5SsQ4ISyD6T3y4nAGnVf6aW1AR/yAz1FN+gKNyFnPUJvG8PpcpnYKV4CzBpGbWWHWZETKuJhDrcSEdpnW1Yg9MysmFjWJJl+mhyuHjkfyWcmwPDNZcWDMfx0fl5qK5Y0S9qEnVgQIOPheZzY1achKzaul1S0Xd0pMbhl0zGg4f/Wk+Zb+0i/2QILUMiIUBRW0rGXdfOmYNg9JzDuBD3G0RcgwB4rWVUv+zCUYJmzXmIImhnekOAwmnlyspmr0w7Wj4iz/6Sz/NQtlm1zZ+icZjSKIwUAy3SpvrZUBaK4W1bNAT1eQTxliZ8tksPnOAOV7KtugY11TukTPORrhL7irqBika9HUu69mUsPNkteC/9Za/ir0ac10N2zZjGBfE3JH5Iag6axq735gh0MKBLdPxflo3pocoYmkEAOxeYURFaz/dFW6OKvui8b/dbj8O/Tlkv11A0noirXHvT/jOHynAwwPkFywkLbj+1G69Kqo1a1K+8wbCyd27SEJ9djfXAsIFg/KHzCA6HrdYqtcee/Mqf20IcAnZeBnGu1QjnWV0UplHJZv0oy9l4i7iO5eAG0DgS3aR01FqE2LBp9tTmsX47FtIIslwOboMUAbtqu7wAAb6ql06W0VydlQIXiekK0QkEwSg21gNYIG3YodaPS93GXsmNb+MI1D+F7FWok42lvLifyxkFcITa0qdPg2XVVTfuw3z6WEGIHaGz3uUJNUXri1wrAi7K7UfjvCBN5YQhUMkpHno2Ceftjf6IuJh8pobEWIO6nf0z9NhE7sMxVNWppQaKOAyQ==';const _IH='343c647f0303993d843c06db9b79ac9eebd24e364270ae3b6c3f6f678396b7b8';let _src;

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
