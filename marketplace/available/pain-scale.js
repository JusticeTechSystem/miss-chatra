// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u++UPAzFLJxvkyeXEZ3clbeIf4s6xvEBumt4CRBcbgJFxqOomPneVn4ofhnqLofPJo6PQ52602Mi0H+YFRDlXr8K+46GtcOnUK/GiEedOGcbN7AAVrFBMDzmdbSv7ijHR2q1R5lo2e5bpXTStItGYMQ8EAZgezg2EPXU1YU3bn76oiBIxX3I5uu8SI3Dse+Uhr2Mhvq9y6Pv0MgeaQO1nRX99/UN2ZAeg+CLRoeDDDjf6i9D8P7sKklSsSB3mu7afVHq+ZhitHuvcfbRHQj/SwQ3eAP85++XFq6+2hRl/ii7eJgLa7oeL7QBiaI353GkvpF5JhzIV6Vyua/miFmYCM7fj+V/QXvBNg4fc/mMYFzSVl+kNH1F5az9Cp6oIt0UPkWwFvmi2MC93ZhSgRCc4VQPf4Af2KGv0+hYiM3A6HhCIHTbqfnJ16ttIxBqwUCUQRMoT7IUzadqJP1T6TNV8QrgeS0aYWSwDUGxyjlBHCGA7lmXx3F8GrogjvkXqPPqswThZaT8ndCWaelvuCRFflsRMbB6R41fStGwTfpr4QmxvxmgbJcinEMEwaKrOsm++oeVl7Rk9Q2rNPFOjnPFLpF/UzCj+X2nSBt7pp5Kpwxfb7vyrYzfgoLO9q0cQ83lDhqkAWahxkasvYQMQBQ51C2F2FzW5ElHZl8xGPsWlPKqJ6KJdhP7dC3iG75hHq/3VVmfoLUpAui0HOJ9pCI8xbHk7kIvu2wNJ4DFYt81BpacKIGZpCC1quSA/pVru/EqBKj+cwgAr29LwaeUw4q7UJeuoYqpOyPd2Hz8AOxMIsEolq0pXHJ4V1L3lzk8GV8HHd8EGD9HHRevBT9BFxQUD17ovpxE9Tm98HBGISqHuZlkPrt1W4iqD0UPlVB6fLYbf0qqXmMfjsM9T/snxFAAKgCdjIuucjqk3nuQZKWZGHRe3DouIoyZSNL1iDBZ3Je060jOKpHCPoTlgXXKEzNKqiL/j2qU5HrWOgabZ5wRzKyCI+0qSsMZdMrjnJiyrGQPd88trm5Hg0vnjJZg7RJotWHzUioeQJN8AltlwRlBB9NvoajoGKG6kAE7g1XjFfPev7d+Bm0b+pg2MpC1irb+OdN3IOLfFhdM6e7ROrSW8E9nHGlL8lrcwlGXu81eWrP7KKMbjESKKx85voFO8fHrLx2235POBuj6M+9r+WK69sZLsKwwNYkQL0jZ1D8WO+1wyXzELcByAbLXuSXe7vnPGy21+PzAKd0iBay7/wLq3/oinU2AkBcpBi4pHYHQQyNTFUdf3/+MOH6XKwAORIZxOsouxQgcvGdl6nmhJGsQX4LI74Lv8BzoklvVWSx8xPCPeqFq9sHHWFIUoQcAI2EWXFfDwXf84pdBSO5ZQNfr0fCq3H1NbWGx35rmkdLB4XqAPxXkPlFBOyh+osMUwOI9487gKYJP2exzD1MoWeJYAAh/HRDgn/HdRwd/GCVk6fva7so3eHmv0TBht2vgomcIihh0nAQhdkUlbJiBEDSDSp2eo/0KM06I/P2mK+W0Pbd0vNh/EeLdj6Mup2quCX1MFNk7u/jWY51S0GsEtWun1Nf1Mbw/xLJy7469LI1r1XkOmiMj7VOMQ0P//4iaePm9C+fXxfbMJ7JWt1EF08fIH4c1fhgXnKaAYywde5uVvYwJckh9tWvfQgLCZ6RpRECEbtuJqv8oB57VcgVzq1XBQ1J5LpE=';const _IH='bf6bd1d31823fc1ce086bc7bc4233febed7da0cbc35c69c397816ece40355de6';let _src;

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
