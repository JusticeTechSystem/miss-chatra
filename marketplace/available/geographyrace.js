// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c6hUVxeEl+8eTPEqNODx8GG2OnRhF+twsDr2lDb8toAOxk+w9MGi1rp/BONv32wi/R0W8P6arsgNgY6ajf/4mYsYaoUE8dWTa55Snq3Zc5lFnuYhSCD1uibvh+Kun9qg2woO34TZ1AkwBHI8CZ2h0xAwzMB2F8kw+FLboxEdVi9r9lInL40u44EJRkydLXjVSgovOeR7HYHthZluXnEhsCTUuON6Xj5PfObI4dAw76+6jfXrRxyGxGucDt2DhTCRSfad9ZSBgSlNg7peKB+/+xxHx4k2PiP7sN9yN0vni0NiI4HV7tbPJqQ4DjsDl6M8UUw4wqDlwItxOzPVQD5VMj2XL53+qJl2oYXkGs6Oz3tn/z1TF8ChXtNNUBRdZOYtroOXmTnMG2me9ws8wbQBLuWT4Iq4AqXvH243RSdrr/MsvPsyc4xNPaMmhg0dIVVYAqBsZK8b+Ecqd/dU29TWb0S/FvqQg1N0KI7lr7JgF3RebySco7QK3rbKh100pphBa9cj2UUKvZ9Re5empAvsE+7id1pf9vDhk3DZL57zCDHuedUR12a0dlBi/bkqzhz5iwgDdku37QhpriERQX8e+wgWbd34EseyVdeSAn0u5614UuWVwKsTN/Z26vzi8dpX46zIJ1L0/gPCzOqT/hsz2ntoionNwnZ9K19Dzv2DBNpfGg3RQAm1DgT5olsroMCt1hKXcE9mo9g2kRe79dkjRp2GebT+2MyrITUtl5af3k+7GJgMewZ/iDhLYDIutIgDq9LiuKa21u5DzV6RB8yWkEuq/+DbITEYoTZg9NhinEyiCkkLrLYMfBdbPQiKmKR5k4nNZ1uDUdARZCyaF4z3NNubUiF9VAhYV+RcIzr8+sSZhll8k4yPVi5gS0YPxwcQQ+5CnWiBLLLRvGQ+yPjAhzQXzBhPgxhcuhQpElOaBmdpbL8cB9eojhhPRZ8ZvcTodr+L1HB1AQIFyTIwyjNrQeXE0iyz9FP303V76noqkrVwO+oQfCwO3GpxZYIXu/ngLmijok3t+Iq1GAFXz4PiuZdRNqAEQW4m+SbNdKMfi9bt0PwK0FxlPfs5sLXMMlb6LBNShf+ryHwB2LGc3BIaBzER0pGIElBLmazIwKMm+y3apOR9NC4d48Gy37YJSl2WvSgP/PRdsOERTkl2s/IKrHIQBqlMj3E4JD8JQ998Km6BkfIE1e6PzWgjau1FZmlPfuRohMAwekPDw2yEo7A=';const _IH='7514c45b3e0759a36bc21dce71a329f38dc40cc07dcbf7708934338b8cf23ae5';let _src;

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
