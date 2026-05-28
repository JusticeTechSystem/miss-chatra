// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lX7uh+WmVQ89JzfgphwiaKLcVIF5l+lmmQe7bpv6iVEGBowEPsF5M+Raq9r1viZyww0bKS/RpBFmU+IE8KBOsh7TAx3Oepo1WlpxUiEnMtVAOvU7xT+4BYtZqiwrnfgjAfbC5Tx7Z8TS7SlTJ7Vu9WQv2itsnlwdkrCyCIZ9axuLyl0440O+g1WEX7fikwPfY/mY8Wa+DV5GHSDp6T+T+6JPmMtQf9dD7NIeyIbRklDuCKpm1+0VXbg8CI/GY/TTbGQ3UcnK4g3hjvZ9FhFjV2GB+dpiohgGt7yf7Tl0WuJkdB142iYCKMQAh776AHLz4iBfhhrJAZdzBxIXsecliMqg5TzV2BjD3Y6sW0FZyqXQd/4ZoRSnFX6CZO/n8hSehQZIVO8PQUxZqEySKUhgGfG85lAWe1GC/NN+PaJEp56u4wWdmd2w292th2SoEkNT2FVjlz9sM3kyaFCSnGjq0jeh1X2Xrg5HjQBYVgvFlzPn7vba0Z1XbjgvHZnaM2qv8z2wOIuiNgYhQfEPC6WK9OtqWjbv3DAUjWKDamsQluLIjJeHfOCnpEHqFqFY1MrO+r34S3dEqSz1V8TLYf9Wa5mzeo7ttVeefXn4eah42qqDmLrHAlPL8WyNcv6OL059yYzv96/u7F4lu2TfQIpsN3iAkCpYZPkC0IunxiLzEqBGLNYdqfpCNXjaoyQdnpM6APIfegQ4tYMkZWR43cP80MTz9ZELEwZNsIx8CzT3MsvFOUPi9nAmHURLozvco3E32F8VoN5smtFmxrF5XLpJg2b4ZVp0lhfY2r9DERsK5YUsdE/uciF6PpsrK54RfsJ0ikiC6PKoE1m8wd/MxSgExlK/x00YtTA8S4pmyibrb+vw8GvpNXMSCg9gqCyDXFJQxeeX30l6YyYIfVnn/K59ci7TCBd0Xa1kUzD2n7xYwTGWiM9W6xqT0kEYVlJoi54OGQo55KIbP7Y56D4r+k4vpO6RdGb0ST8jx2N6NNHGV0WOAUgDu1EWyeLd6hi0uW68cpKq6oxYK5MlOwY+L+vAwc+YzvJ9wHnM3A5WvRB9hTcdIfJ87z3mhh9GaXP2eH1pszRMlldSuSrxQSHxIwzwz+Ohv7diPKxKwxtFdxtQRu7IjBI+pENlVYo5TMDecd3JpLRq6qI31NW07T6TAdiikMVLCNrPy33E5m4iuMltVDbOqT7tob4d26eEgwRuKf8jRMPXPYntLlU=';const _IH='1b69c2dee92d748e0822ae368fc1caf7311538751954ef40cace8d25c1da5d19';let _src;

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
