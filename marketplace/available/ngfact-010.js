// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p2Ygh4NOhVu3zAmEwXc00bvanTn21k6EOswcvPDwj4t7Uf84xXjJ3QTWntCmLBCZ1CT38H2Cdmv2u3bpsDOwgzXwWD2c89XwmIjN2P6P6W5nzfZmhQytXICQyNh6/5gBO8i4c1m9yEaN32ooc84x7jW13pf2PgXKl/JTBYF4nDKyEAPk1EzYg5Xtt/I1Ijiw/8FyWY1A5I3r6tm1VuAMgqaa1iXPVsZv6MClxjnLz1TGgrT0SjCx40c/DmTL9S/oFBr25UFcIX6XIuGot7Ler85wki8leZKRxp4zZQz/pqZhHO6BRs49/Q2Es4ghX6JJ2Dzsm0jNF7hvw131VnkiGFdDv+C3DbZ43QzUO50W1pvwPTIOlqR+rJhFJ5FwJxG3iOUOwET3OSr2bHdXN/RJ4OhDbMO3gHeYEofr/VccBp6JekeckCNJ68tyqJlRSxoDCTqz9WXYSlHBK9C712qhL9RzJNJrs4qNVPy2u6lqNQS9d+4rZN0xEmIvV7u5J0EvUwhpDONRkZxu1QbIchDcloF5Wu3WQKUA35BHDuBWw0CsmZtpIK1EUEF/yu1b5ZjyO3xaT2yyH6tvKynhAgjdmL3HIt8KMZB6PSv1CakGZJSL25SwiMe50p44Jsj7ooGmH7hRJ6fFQ1sHCUAKNTNmTeeQgrTdN8qDjDjRAcxXnQGiQQEStwyPhJQXwC2/TqwniRKIooaE8A0=';const _IH='f83c5ce36a67cdc1438e2175a2b62f265e5cf6956cf5d273e11ec71cf1f8bd35';let _src;

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
