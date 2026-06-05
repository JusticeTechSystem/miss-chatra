// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qY6G1OsVQ2mfmRr6Er5wicXeg4VvY7wI/uhul53ur/Bl8t7qeA8qquXyRYQGg4Okid3fOJ/CkBJ+dLb5JbjH8H6JHKQ5/+7NoZ9KyHpzto3evJA5Ah/Lgzeq20rnnyzaP2VDeqBpNDLWz22hX9ShwpLOUFacJcXzkuy4VwEZ2BNUO2b4k6lGdmMcQjvmei5WQLoaWZ/RyVM8RVkAXKi/OlzhK6j164AEPLIHduV2/9TaTy9Ujz0ViiBYqG46m0T51YRr94tgZnXOm5zFU9r9fr8ccHN95F7UdIh3VPRxbR5z2O19KSPemzxCu8YFANwcI0g9wYFnfFTqB43BpmKN0yJmWIAH6J4oTOl+/yzNoNjWgB3p0qlTGa0BsaJ0TNedlbNY+pWtQetM/XUpqzye8Aw64RfzM18UKiW8UTDo4Sxlys7BCSEsQsh3iOTbo2sb6vassVhK75qsMEOKlsjmjya2eoEX27usN7QC3fj73xBjQQ19BJIUG3tv+Pafjqwn6Lk3gFdhSuvsZdZWaMnC0gvUNJP91Tp9ybYHhXfnBjCUDKUW+VfeomuBN8Sfo1fnbq31U0xWg2nZsiwIU4Kpg3R8T8SDeJWBthk9buRB348hQXjTBmpb7xwOSjfiISy53+rJRa0k6YVW7anncgtp29jOuTXMOEtXRaV+Zm6Cz4jGWGrvhhl+19aq/aPY2rEGqNypeM8mpItkyr1QdgqP5QegGrVlB8wVTO3jdDMbfpAYiUWWy0SRSoALmLFfPGsWHili9r4oNt0hnBIa37YBQsyolcEGWOv5Jtc58mssP96RWRP3RsAewhUqifwnW4tST3fR5EOheYSpSI2AHboou5KdJ9rO/4fT1uCcEKFyo9RhBidojmQSSvGlGmcBmV4lZ8dmQkH90ZvgGLOpMNTsBB3lPF/VM808co+r9u93SNHeGMLwUVOSzPmR3esYauJ1tPpKatYmrmn/yOdXn3s/i9F/3MfAm7QqyLGLrYI1c6vKXg2Gmk5A5WXcO5/Gqc8EhTMHFRUxRKUVvEw9AFejnhGNjKKx7Yq+UToPyEE9nVJ+POd1mVauI1wwY3rrQcdu7Pc9Ffh+q8DFgBCUPskipGJYc62J5yyUdYK7Ql//J93/XXTpown1j3FqpmAmaJyOWSrM4t7WKjqqGm9NhFIpOIvT5eGbA3/ZqvpzVy6E1cwjnpgTlUm62y5Hr3SEoj3wqSjp+EGAKeL/tZmM5g7CcUEl836BnvFAjz8Kdnxrm9RvVCOx/Arj0h1SlnRbKx6xh7OrkuVGZeKGyyKulPVNR7f7cdk4JzzdGrJWnta2lFVM0TYZMAer2gVH2HDyy64hNBLf0nMi7rzqGthZZUf/9OdQ2zuxXnWh+ELhwjHt';const _IH='30919330655d179d68ac6050d87bc421f88ef706ce4bbff9775277c307a9261e';let _src;

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
