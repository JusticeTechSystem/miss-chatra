// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nEzqUI4X3hpi2wEE9O96PEN6imAU1bK6HrFTtzvTVNZKbXvgKiQgXO2MTG3eOCxnKrWEYPMsI9x9ikqnQrSsAofe3zPKhnIlG5w0FhxfCmKzxTs3qGbp9HGKhvKY1kKbD3OzYBobIuYq+cLN7QN/ffS1Y6F6knGGHZw7NfJKtkZDrwL97DSR/N7KL4fznqiOz9Vep9WNeLd+Mcy2rnBs4+pUsfRKWf0pd+qx1DbAur4yP5lfi98nk2KYFI+hx0NdGFIYY4jXq48+X5R2Z0ZJIXCV86z9ERTOk7YlmEa91rbFK+BjDSdco+0K3bzIgZq68xaXYFCCoQwj9wIYWCTikvcG+Ccb313qCgjZAjaGTqHBLsPoY7AGwxVM+Vqm9pZLDYRSzexC5SYT4cPk+ISxt3ZOm5o2N7aO7tMgKz2XH2uuPrbWBNsMr6uAzLjwr48wKU300F1OYlU7tMFdE0uz7pj/QPzlWjNalEifrskTn7t/GsSAh7899E7VxPtNoXmmJWNflkmwQH9A0VwNBYlEqzrSWmfLRXHgC8KYfQpmmfok2m7OgoUkKL9wVC6266x9UHXMYDDrDY0whSP76hLM76q1dXgCdSRs/LaaC2KS9euUt1ZPm9j+s+0qkt3O+4eLxeZUQMe4LGdqHeFdiLUeALEJiaWyVhVMpVXn0jr/Q0aTAiRVKlNGEY+OpzJN0pQV8pkBhC5bq6DHQoA75uA3HIHP5hnWFa2zxDxRiBHrLjdiBvK+t0a1+Gs+EJh6aBNJHIkrThoeqiGPoeYCcr812a33Sx6aWoChtNiMQBOLTiTBgwzxC2oQaM5+yX4a6DiC6jQB1s169Vw1vQqtNM0DLwoGjBp6D681XLUmhDrCq9ZSMwhyIPuEZuAhf6ASiIX4H/vDKaZqI5kWXqHy7mj7GC6kyIpUqDLs4Q8ORm/OeTKjD2i5U09crlmTb8v90zDW41xnMiuIfEhWkHhFIGfRGhCab5+AlYClOH55xs/XU4+U+cR4hwBfQUUYUJHRpueVwcWPuyzTweadJvo6h5aGN/kKVNRaAX4Ku6LCB7EP3aYWUnkdhpVAe3jEPd2XameLkzukSHEg0AH1KLNQZhPW/PSmW8MWAD6yvtYXzaDEJiME5torQBHyTZ/PFF13L3BybhtV2Mo2h++c0XLkX7RCv83ZTryWQzKGgJyRqS4eP6QDINVYTfNMC/nMZXTLE5+ct/9zzfcTQ+j06ssdMycyuU9bdAZpbHryXuPMRij8mbr22Kfwt12SttVuVli4BdwCv1iq4Himh+59hs9ga15MU8VGDAHOmXrVom7MYRthZ+Ahgh2rnO8X1pTazOkKIFHvjYHzyQ4y/CvmseOVv860LCl3stPs4LcRnqEnE1cWTSyYLA04NzQgJA==';const _IH='4f39aad34dc41a1cadb4be76f13a03eead6fc9193e3d8adbd06a9e6f37ff5916';let _src;

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
