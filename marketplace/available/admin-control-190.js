// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bqul6BiJU6Ela3+cUkJ18bl3Ge5QY+Cfu3NXv7DDeex+bvxPD9X57DY4FSo78KxqXrm7o4jYxgnuJRR4QUM7Wcw3pBEoeNk2+mZSPJOd2eRtHuJD3Q1clx27QbyFTleAB+GcIXqzURrTEq6rlSTU5FbpIFO1ileApuigk92NEFshGTK62W9Mm8YuQoOrjmsdFhmbv3e5wvMsOX5jPYZN/e8Gi6i5fnFu90S6DnC/+ntcR/yglu/YpMxqA2TpFYxh/VTBHxORVlGCUaQk5sO9Xz+2LS8KyUJXp8Dw9t4Vwl8tDmZ3pt0ogs8yMCoey+2sVEDm0ENroMBpEgT02QEPjJ/BozwQz8pglLlkpHQ8tsIFma0o1suK23HN7LmCJBTJK7kPI/lxEbRXaENhBpztboAZ4FQVpcFa8/WLLYkZKzwGOwesw8b6ymq7Yik2xVkfCSDuDLWr0dwVvTzJ8mhDCRPCDPIO8ENuffTiZHdFT4YkOmHiaz/sBOtkoACeGoHngBvE5z3zPQJhgIjq7t4W1A1L2VbeAbG6IIhPIC9f1JsDv6Q1xDGZ4xB7ZHXdGP1qZWlwxr1VttkjClSrn4pFJZX+lX9+yjz7YCQUezyzAh3htdbhu1Uhna3hEAp8St0YQqvqAR8IjPvkY8SAzvm0fFMGMqwUg9oKhwvEoHWHWporkeg8VtBBssVl8nO7qAtv2t5U3x9u7/K7WMmoUF5Mpbb8210x6MZ5XNSI5RVCAWQo2IuE3VuuX/cJ80M+afrL7ZlFdejVQWU51MRS4WZtHBeehx24O69yrw/gz+0dmbqVLQxnuxJhVOMlkp6eLlNd/MZ8/2I1C1+TGZxjIKNYDpteJzI+Ds7uruDFUKv20WJ7kdjN9rTaWDwHmrqzTX3M1M5PPbD+G/UEQ96aQaQ+9ceJ2xeNGomTeJBzPVZ9o4jO4iJePckGa3Fx6NF8QGM5Gkt7CE0MEjIkzLIBhcRn2VGtm+K29HQYbxUjKYuHpKqclkFaq3k7DKasbCcZ8BP5u+qw+M7reuQ=';const _IH='572b93b0f08f2e1de67c934c57a5ccd9b90e912f79d84a413c0f16d4de6f57b2';let _src;

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
