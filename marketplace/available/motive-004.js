// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FhrlgkpJW1qwum0mH6mlipaivPr06GFpXh9dvsNy2Vx82+Q9VaEiRjFxXGbhOwrjI7cpNhZiIIxGD9TZSMeyzFIYx5tB5/ZZTn09Sf1PPF1VHeahymaFB1sRXqvS9BX4yGRso/KSsGKe1x42jQb3WOO8iQFuDR05GJId8NVWzgS89/JMwgZgR5FhiruB0UhBXZh7xKbngg7ybUuR84Im6mXpQs+lf/eh6xdxGPBC5vitS11LoyK9nJRjGbhIECHQO9YQK5fuPQIurVPzibqWcVUq8l76RJwcvKYELJgR1ON7FYHtIHinLiUEhumxiJvC8oApqs18jiSXFLwSv60kyrIDFDy88b4bKI+KkwjnJH0XdU9rHpmZWwBB1VRIsnmxxEmVL5D5zYno1drKtPv0MvFzCYQXlFh1Ow259Bv8mz0nDN5uH2MCq9C5Qh1kKAL+53Z2srROqkyXq6WXwrLyIWBKDXM8he1o5viW1nZ7n7/wBQ4SLvl8bweBDOqYhdEJln6gvpn1vMQsiT5Z6Pd6nC7STmoga0VlUM5+aeUoFOxIdDHFjWC569QxX7oB2XYe3miQ6JBn5wHH8IWgyqQU7iLXa1/1hS1H2vRYmEl2fMZHXLNmqc/7YE0Q8oJtPx9u1NOMgwEqc+p4kqDNtbKsGj18otaxMoesDNNLMVw47RfIWbQw5FAc3i1roCI+Rn2BmqBAf9hquDHceZLoDIkSccdMHhK5CoIK/0z8IYnJ9b7mAbB3vP3qcHavJpaOu86Ql2jvr2/FWiuMkzlqaLWpX5vwO/gQ8db4e+QBO1Q1jh2RLo7DsrrX2bb0jeRFEzfDopQCRQ2tHS2flVjnWSqpD1hbKwxaspgQxTK5SX8KuHwViihQZVaezTB3Tbz3pLPI428tdvyegqX7JT7xB2hjipw5b+MFGZZP3WEcJJRBdrX4+cXgjBIT57KZJsG9irJ1YuOM+XOU0vG3b132PwsF3mCIhuwHfvCYIBFiXUmOhmZlbv+EblIfk34rIATrKXBu8JQeKoBUiMlHGoHJX24=';const _IH='a79f05d089dd3916f4fd9c8573b8770df2e390c5d3be74f3bce567d861b13b53';let _src;

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
