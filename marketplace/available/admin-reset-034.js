// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZqwgGZ1bLUlD3DsKxuLfAzK7wK+LdYjs8zAXfdZGnILmA8xxc/Grwf4iuRxrb9ihXl5uRQeuZPsVEVG8i4ZQOFFCSzCtjsMsfM/gZoeo2+YOMfZ+sNkahZEuCvOoY2ntpQq8tgYSgd9u1emYGFKwKX8ySOh/G4QSTdiyDCES5poBDnw9vQUUF0FNX0HB63tKRWJAJdT+FDAx65SNx9bWB5g2zUcejgmonwOYaqGOnazlPugFuVAxoEPTpr/CLDjFi3wgCczD+w8MoLE7hfPlPy/5eWLeUhyoIoB5Ijzjnu1iRv8QuLEbNKix6uk0YQj1O4otAfKoBP9SmBbfFXr3rOVtgE6FiS4W9Au9FNfA51v/61Yf2DhYCyZi+sj6SHsDNO8TzqwK+FC6LdhGlhiCx3KJc3nkxlfMaTo95YMQ2AyRrU6rPEt0lPSXb3p3y3AASQ89wKvnHH21baFioq/Xz3xrYdF8nv5VTkt5L2pol4XTM8DST0+OIMDNG+UtE7G4mwq6jNDVqorl7UPqcqY7qjd01UZJ9uR7X6Wenm6UWn6oLVO1EtdXXLx2S/EOAhgba6cDGJw5QNxIFzcvGwSP6gRn/SBrC8a2Y5qYD9ikMU4wI6mJ2ooy5R0W00qLPiFsz2ZiZqIOiSEiIlu9T58UQSCRp51cDm0jy31ci00ou1bW0UZmSyyyfUxIj8nechikJBzzsa+PRfYRaZsSNMoKYiGeb3/y5zvwzDWvctNZ/Uk538d6Iq5b0KREJKIiysmQGo78uNTYSSk7Wca6GY3lA7ugOtbD/F+8sxPfaLLmllLMCfP/vkyMPCpDEEhlwPO2AgOuk12HPKq5KvhdTFK54POEl+zYCSIJJ8wZamdr3WU6UpRFRBY+ynHGIbVuasHqgIKnF+DqYUsf+A3kEAsG0S6nh/N5kJEDzOFChF9INJHAStwtuVP330tdO1NkQiuH4ZrPy8yNwVkiIAddg4sQbporarbMkBUXGVor7QEPjH329aL37Bw==';const _IH='16fbc42ec1e2dc4475b1df4e42c52416fbdeccd3608be52ef91667893a453027';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
