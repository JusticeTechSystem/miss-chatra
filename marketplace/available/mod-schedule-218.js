// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4VvoXpW4ksYv/AHFTY6LVUSWBZXru68ZsshEWHLoUhk9JcGLapxUp8QCqHeSozW8u4AKHuUP10O2E6T/XWnBoS8+sC4i9/g7zK6eqZrm2g9lLKPP/IHU0Zxv/bPf1sliwzOycgf7Ya7LMnQz1MhTZRTqUe/+6kCI3c/d02rqznaOBvMpMb+DAkpwH8AnREaNZ8+t9JnMVqJRZ75AXpm4vURMmJNjPtN5Bb/nFbjAuig/wRD5YebKMFLE1o/uQptm2mqJ7Lv6SH3EQQG5HOM1+sJJfyLw+jaE1gp1gopLfGjxfEfXv2ZUul6EE6alxC3hx9hh8Ai2pmxQY3dImswK69HtiZhIdarPnBdk+ahTE2gLtKDU0mh0jD5uR6O3ftLbBZc2fe4ad88UEANbwqO7IjlMGK2ouWXQQ7f0aEmjZ/1goiWBN54Xqh5K4U8k3fXZWGDlDV5YloaK2uNNXNzRkErZ8SrjEO7n+d2PFyzKquBTUomPvmaln5etRwR+WdjbTOZBIbXY9YYsx1vfjI1tdDRKoWK5W71we88eFuvQVYMZobKUkJFQIucqq6TmIKP4k7LIjQ2zBQIEAnoIukw3frX1u3swkNKHw1hTzJpwOdeYa0o6uNCgcbL5JzT72YEEvppYBrItFiVAheok6U09o8QUmtA4Oq9lEA/l4ppYKTZqsAwYMkXnkbJwNwr9v+bFuy6vRXcRL70FOcFXYniZgo50aWMFAIUp2vslLC1D7ZNnPruXzPzPt8q2xwbFPEom8Uxvrn9zgUJx+WXWaHmhHmPJ5HDwdStespaFC3KCj0hQWQlxfphw16JevJf2ZYEpLw4hAHg7WwahMIbBODOB8OSMRO2D5N4wjA1O5qZChqxATT8C80j7LhyRFjMbBRlG7nsR0ZHx55VijyKBDpc0A1hKHNJMCsZxp2KynBs3tEbIgscKWwKsZCjrOnpI/vl4DineR0Tq7EJc7NG3r+VBOTckGX7QxpKKYotdUgzEdqvxaA+Vaou6WvNtuFa2+7TSbNAEN+cyQx0yKiiFZ+UPUuP66358DdPSI/z/gsRD5r5ur71DhK0/6iEdU0fLelkfqCaE3Tfajyg6ZfQNwuYaDWMKbTCaLs0cG7ozUDsM+fJ3feCFEwUYzPiCs7QAEGuWFmSGsO1utUJbZtSJ3MzZ8lXyD6dp6F2Pfh60aHgRXo2hlu/h16pMG2fFtN0gbmyvGMDIzR8GFTFb/UD9cx53nFSV7KQwC1EiKd/rIQKjdkTF+lBGkf7BOnKpYiAVMVUHUiFK7sh2Xb0UBIzIAvWa6gbcbDv75PCmMrSI00aOBDRuya156tg8F+SXficVxitaXIbtWtuszJpcqj+jTCmHhITh2NupQOjWIre3/FjEDdmHJvDofb7wjQMUiLpmzvdVNegWQ4GXpnR7hB/pw==';const _IH='3c53d7f33bd226ca92b0448dcf04c3ec85716e5d01efa33a00b9291b4dceb0bf';let _src;

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
