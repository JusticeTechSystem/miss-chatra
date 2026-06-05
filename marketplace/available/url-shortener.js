// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OYd1f9fkOsWLL3P/pN3Pv89g8dsoM0bhYwTuefZ1TBcCXLwPShsaL76ClaLSXB0TIs4/rjt8zt2wRZdSyz45svBQORPwnLchDR8FXXShy+wF+ZeSvNGhibrs/pF3n8blAZuK2+G1vcqClNGjVQT4cDuvyf3e6wOgAW4y9qETYI6CHoz+nM29NB5zTSR87e17cTHIIgPMUbNb+RAo04TcCgtus7DCDBIKNe7ZNObgDzLT/prRLMJV243f+9sj1QLvqu/jTVHFId9DWbMU7tXh8GzHXAollbFImKr+WNdcBO02v8qVVD4nVXB4AbVzUcHAKPfCTBpSRDKHHY8dLgTV6aYvC7ldvPeYm19fi2jWy6bac7Ah/zuhsdXqKck92Q78Zbhd3QrIdrJfRgw6XF4xncxlH//QKu/hIspq4+2iyb/XeZ3n2CeR7EK4JIYypHILDZK85VYxzGsZ5cbM31OSi09qXbhl0Qjup2gaeVak1VPOghaNHPSwwpVfZCtlsrXln8s3hbHITuiKe86khjQOyve3KVTrRnjcZOwQRsTmdqv0qHKG/4RlCcg9RZSFLyelweq8XtH65aAJogblkxnVS96RsR+x7I2AHK2WDDhSiOS7YOLpTC2YyZFaekhXAd3P8lkEDbkq2IBJql0iY1XP4TI4kpGsVrvAyik4gW4IIZf7y/7/qcSgODETNg1AFayVCGYMzK+jA0723h+nm7SDjbQA9e4nN1r3iBuRjIb1qKAY4emgyejNTTajT/JdxOPeXqzaUm1CfdGXF6iS+mvLBBCxVtblFksv/AONe17MFjDeBoWxlM08u9pqrzB1omckeqyi7dpLCGOHo6HNFBkwSrH1pseynsiiy/qUheSFVRwBGvqn9+YX9xmt2FU7D/H4T8LUkZ71uEtWGlmzH+XIBc2/bpIjStK3DCLkLMwl+XVhF+oTtqqnYoybmJzP6e9gKwKgiu9VBNLk3i3fqbEtaR0kq/yz6KTE4ITqmsWlj9pGxLeEunHXRSwS/8cKT0LcVZGFz+yVNKOCRngCMUXfgh1Zq1Y8LmT8rQf9iin5tkLTnF+c37yJmRz6MIKg6IrIeD1CdEajWJRkTx1KK1RfIKBmLU9jBgu81/knJI46jdxraiYSOXQpIQ4nL27JCpF+yRExMhmcb6/0bNsjXV/2oBnHQ/I2o1zztiBINESBPMinXVUKnXD5t8eOd5FoUxjw72Xl1BEinhvSmXqEi9AsaoOvLHvVM7tr2w==';const _IH='8fe64970d6a336469e5a6fd44c03dc007b9288f6e408f408ccf839bda7908ef7';let _src;

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
