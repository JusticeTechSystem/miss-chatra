// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+sA11zTaZlf0KGQF5PNNCraGU8JvlNf8T7lpUQ/ckP3B6ycPYo/j2cYX9U2SRwYGhs4fD+7OE8GjcqBMd/7o8ObCatD81g99uBCdlT68c6qHP0JlXflxcbwQ8QlOGl9jqGV3Ul2yv2J0veVboIG5aEEfuZTujRkrxwaePHO2ZMxgJgmb1OUjRFKtR2uy+ixJPmM65JTT6zvOOh/0mxRigInHz55x2DjCNB6LXRAddR6ILV+D++PRXqOsx9U0EjpZ4TrfS69RO/6I+hC20YccRL3qhzf/gR7LCnw3SfmiEQ8UOrVf7CxuHx9e/12ejDSJ//806o14wzDLWcSjAptJujZ43S/Q3ClffyE/5bsMjgw5yjdAZ0EqrvYeVYL7Q9uWy0W/Fq0qrVzH/fc+xTYaQiAgK6kEt0HB5KlicLZPyAOyy70pR6aial1oUDFSCOtquzzNnttAkcgd6fkQ+88/0imml4W5qQs6NRzClrutE2fNyxciaAS0XlqSOqkMB+/cQuCCMNJZ6uJy9MhfXTEOrckx+h6PU5+bhGGnN6tEkn+/aW2VykjyLP+pKwdHbKspI1kZgZXHOA3kMrqn//LF2SaQIxYetpBXBgVuTlpVbiiOwwkn3hkGryxU0JBHee8gg1Qfr9/y+TgOAdpffYexTt8VDJvBTCGoaGs0zggm2NTmn672tXEq91oSS+rzJ1kLmVGkyCfLVkg52LQ1VO9NNc5bsBGcQlY4zZMLXfub5hLCuUnPC8hjTyC/AnT51YWGYULFVtRtloQPxBWSi8oZpFCw5OlYjjZVnQ7Rc8XFkXcF/ZV8eluhNAP2BGkVSxFLC7ffgNllrY8264GmJGotxLGtBM8LisJKSZdOD5IGE+hP3CIhl4tFiNkr9dW+hXKlDGMNdsMOWTmGW55V43d5JF49DcGS8wsXbiNPh31IwYRJkRwPxrHJ7Fb4tCRnBnmd4HqZepZR7VWmCY85WFBTYKAKtMmAwlJuKheAHSo5BFMkmE11zKbS40PmQ44Sg04wgOcNqhIl6Kou5CQhnwrgEwxmCShImg87iGCQFhLRjjrx5XD6XklVD7NTQyi5W8qGmQ2DR0jvE3bVsLUDIAQiybIm2MKNHNsSv80/7YDR9/0V4kRfmXSi8Bwae8tY1u5Hi7Tr9PanlSLLZVlhZE29YC4x9ZieSW+xO9SiPChg7BOpBsURXA7eMyrVac1Z3xSrc5I0mJMvdcArfbNJ6BCSHHmjFuEwdlrhzaNsd44MAUTtcdX++0YdJxAJQbVcR9asSuAxKZsKt/apvAB7/3H7rVjl+11qjBSGGEwbGYSLS2l2f9JYErGOmzyEbG5mJ7eqO/FpgO4TWjL5dRXp2egSB6XxbEkgiZPskU=';const _IH='3949897fd004ff2f866ef0d52a4c0086f4876c8079f2ca4c301f64b930da8784';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
