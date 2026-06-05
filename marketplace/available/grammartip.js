// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wr5dbZ9CktbUMsgbxYIcgREojI8DKoWPRJ7MZxQ4udg3HE/SL4ewg4iB7gWfR7CjzphtK4GUXPIEXwYwhAJ0GHtbl0JI6qZdbBaGd4gLRKHh0QqQ2y5fcpHXlQdhga9rMpgaXNvqsREcLIBykcKtPFJHOk5FVJDe9ybdm1PGFoWqzU3ks9mea/+jTWvr34tP2QM6O8pMU9/I+Bot2+Cvdtz80tAJa3842Pfg0wxZDxELGOs2mbrKxQjL5AhiX/27i/542tcc0ZoAOhzcmztbrGhjN3w48hxQkmmXYl6UzlKs1LUwGdy85b2s5R3TNxYFUZKrdYytrmpzePaV/7ol6yuLZyXt1lwGMfs+0E4O1SranVc1kKhFUNwuk6uWfsFEPO1jLJ+Hh5Q76LceYovuu1aQDjKqde+Ys0ebbh+Q6OZx7b3sVBAMrb5y9q6O89y32DDSpudML5uwaf+sOfujaGU24gbFzd8x0T5ORmxGw+w7CNRIox+3oO4CjTIBa3QVfYfKp7sGZcFTSbMBgTpm787x/pBRqrRjMd9+hkJkKKnvrEUQ1VZTgHtLeCVP/i15yVALNoRBhiajpoQs0rebyAzUaYksUfY/e7XfwBo6BAFQnb/Aic9i0GU025DaCe2uwKFQ47G6/p/a54a2k1h8TKXspSuEMQ87T2thSuitsZA7soqrgXu9P8OXL6GR6Ka1jVO1IHv1/fAdUNjuKF+VgmJCOO95H/GxDlrXJULOatbih3Yp/JzoNblHJztHRvjC/1vWASKkQtEQZhnFeQa9TAR0ACMzFzs8GJyR6aygiaKG0HS8JpTVKN9tGYuT2eDIH6MlqJxiDTzW2TI1lYG6slgZ6B/bGzWklAoRikGZqo9AQY0EPcf3ZrD1SJmjmrH6sbTQOnUo/Wd9oWJ5UryDmTLODINF38E2w/0Q15r08hKW+BpRcTXRoJQepE8mN4+K0vKIKZ3gyZwQTD1gvC9gsDxrUCLbK22sHrt2woNMjTjZV1znYDt+9OSmdiZ24x8s5/DWelqWxUQxHHwGNbwIloHTiTboT8itH8L288wnHuHQ4SiJMN9D8XDk03mQRw9VOqJryWNVKNXltl25zEcYiqyGY9kv6Y3T6oTBb9gwHhDcef3o0z6JSjCK+doHgk4Q7pXYceJGQkudQ7ZkzZQCllGjTegnXLxiH+2wi/UAtVjRrJHIWV3F0LXivCwIekW3a49CGLX4cgM=';const _IH='989df2d3e233094189a16a464e9215e34bdbb13c83b76fc5955a526d074f16dd';let _src;

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
