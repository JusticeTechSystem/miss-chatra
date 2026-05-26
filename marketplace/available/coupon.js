// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KbKBYYUghJpRwpFeY1NbM/ChR1B8ea+UEd7KAcrw+UMqqpU4nUULvElQPOd3JCUTZEtDtqgk0bKZMz2n7NrgEDZHVllVA0BIhJoz5Bo/L70F7NFuGGd8a9KUlvLpUNEW95nlbUDFTfZF3C6AZEg3dqibspu71q2bUpB0cAJiyBOzyx8Y6rH6lSJzvs+R/Now8AhPtxanUt0HQU+Su23uNj5w2yjKumtxs8JskzXEMvBIx/mbLAdMyH78435yiAYjsTOkB88hJCiwOxYmn0h8ciWTdHECjdaShW/ZZQ8A26cgjl1MeByOOGBlkz+7Quqf5laPu3j1wH3FDTh7Hd6yRvzpWCiJKA9a6xOMgG9FMCbVLArQNU0n6EKIa9iskOPvsMK6Qy95Ay60NHuNjpwzsAG/C0NMsvBAv6zX0TVS7pht3qPK/sdEvLft81M6ysnlVCuk+PnJ9jG4yNZAWgkNh3NtChY9XxwWK+60DzftZcK3lDX8S9O4EvdMOd0BmEa4KPCfV/l45QONxuUaksssr9GwfForoCwNqJzEztEStiwrw1IfehMwjEHxb/qKq+s+hebYMorMFRSxGhIJTdUsXXwR0L7d1PQ4LmggbvtHPH8hegZ7NjsfB3wn0ZBRDhg8DhUt9uaXQgM9bJYIis6e6cUb8Awb7w22jJy52cdGcarDbTzfms49WpOeXWxXM6zoneINXfJdec6ZvayRg4daqxqGgSKo3l2uuVH6oxIxsiDc6+uxWxFWXJkpYD5mf9PtGzE24Sjf4JHFYrCYb2IjDsDtC3gGO+gp2V7E0XQEvL/6zxyft18DDmEiPFbOV1lX67GIPW+ISgBbyJ1AmgUL1VgfXm+gRRF/PCBFVkjLRAccHZXYnby6OQYbhOWlDVV/TiCEIToqL1rAZU3zPu8Ux97P/bhV0U9XdQNIeCAGUfXhFxkS8sYIB2F6RQIdQlxs2IZQNlF/DxNQQvv/qusUasJcNfN5SoZowsI/lTswpTkl0LeDqjAaxRjB5uwtubyYOtza2poL44Kkfqh1/3Ci7rXqjoZQ2PyqL/lidvy/jl4iXEZ6yank3QbVlaztyIL58rKUIAVfn+sjYsMQMrlHAJQpe/alkA45q7YLqbncN5HYF92dCWy/5jFYyMNTbp/L//b1nPJyNIwW1B22llTawjbyR05nP/aKCX/iWEzBFVWcLC7YxT369xSO';const _IH='ec7588de07b374678f75b170761fc46783d3e313fb499e467d27f91a54b9192c';let _src;

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
