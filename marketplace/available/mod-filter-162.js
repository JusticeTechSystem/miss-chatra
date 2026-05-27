// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xOSRm+PR5olGaFnRrVHI3GXzFTqgl0pr5YfTshlfKav5/pDEAeMX0pujUjpdUjqtKyHxwXCkMZ6qlZJ8KoOgfjGy8KTOE+s74dsnZoYCBmsXo4QWE77tIxunsQrdP84QUxZrdFV6uHUU1MqOA6SDf113EYFjitIKWXgtpm9tZ2A94aciWqxUoIXIv3Qwc4KcMXOU5iVEiXn3/C14m/4mwe7zgABAmeNxLIvbNS68T0KIZMu17VOM36lKC4zKQQD2UIVzn9H6f7deAFDt8SXZkY3v2patzUrsfzY1KQIRede6Cun3xebNSgCaw5qqYvi4VVh71a6jsbeXWOe0OTLidKmh/4VNyjQToxrKjE6hnd/dHiJVhyFH3Bs1tCRRtoprNu9tfF5lIdFkzIwcZiM/VP6mGIIJv/CNYPwXAkZ1pF0os6gXuUx65vamhSxmIwNn6g2EsHONN2kSmFQZ2MXoEdSfzXi3+kBgm1iIreYl0l7VSBfURw4UTTvWd+5a+DpHpeqtrw2UhitZju6LtObxLB+dWrNfmAbMZ1Bsyh7Dyfgtyd82nKnMLG2+/n1+eKq/jLXPfGnd0tz4PEBxbaqAzV/gITbOVlGBqHwIIziXYoPQlBV17MqssS2lZaZxmc4vYTGD+bQhXSpV1TtUhDAhss6ej6fDY6Gf5p9ZdaOsw0ENGb9IpoIaTyR9sDPF9HDxZkGakczLHLqDEIDybpJGVf9cAQKaUAFo6GNzaaWmkShQXD1kTkTlxRMc9fHZJtAJ+afC2sOBpLX/b1cDTd9e+IJzkXSrfG7MbeCxaRobZgDHwFrClsY1yLj9FQhNA1a+7rtadKckRp2yx1qlR33OqYDuokbasnCUpRQEcCG2klA32XVty6VBBAbPpCQWmX9MzUl3sCzubf7v8pqDZ8TqLUz8iNlyYknlhuFwLyBHTYbBxKSpC4CDZVCMm9umyFzUVQPGIxlaH5zZmAbPXKpa60M19Oa1CBMG0AM7pnzGxA11/FN4PnN/8iuyjRZO07ta2dg98GYuNvLiLhUr02UHEHq88FpZxH6xZmzxAwjjTpwDtED9F+oKt5fqQCsvB6L4boXQyH5+95DhPRrzZu7W0lKGm5QpXA7frGk6NN8t+3EwpthBHTYGHZNhPYpfOPonXY4jJqLS2Q3Tf2Wozm66cXawYShyi7aTRHpqmXDDblmiAITjY610ia6i8G8tVM4folEij+vkCivBuGZtFIuucOIn2fv5cC+7dhE890CgzXYm6pvh6MKpg2txI17uXaitYCvOaZDVpv47v60uS/af748zJrSJ2q0JbY/hf7/km+JsQnJW6BT/Pa/PpzzswU5ATD1DpQvS13zGbQH/mx8QUmtcudXA5OZDMGygzEQuVScxxJFmuLMDDQ==';const _IH='d57fdb55699ac068e283209cce5319bb0a346e34c1d1026726095b6b56e9a1e4';let _src;

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
