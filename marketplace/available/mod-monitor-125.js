// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIQ8nPCI2PWMdEg9tVFq+LjnTX4S4ACjVOZoEUKRo0ZvD9P5kuwXhjrLDJkd4LXcFsGNeUJYyq3T0N+v/oGDBwOZaexrkZasK7YYxfep2Y6uBsAAKmRuAx6okd0fmYbELRr1wm1TdOwXm9N30uhj0eK66bVrEnFp+pNM2HqNRh3s/g2zaVbg+Nnh5okfnt/HO21U1VYp9XiDeXopGWJ/FuYCZ+n9pXweCZQ8Dql6FgWN/EiQNsRWjP5v89uh4oOBKh/5JmXN8BhHhNLCLzqAgkr85sQJb6pEJpSvQT1P8DoMrsU+/UjzQKBT8lJukr62w7/hd5OcfP3PQ5cp/aVm4YTl5ev5YNgPitmb+Lr5ma/YA1r7BTrQPwIEBqg1rZZpUFpMbfkOOoRfMc0kUmyK7MGE58E2pOCGvIXxzfw9+mbyKILxp9ZZtKO0y9ZT1Qd38MrqJvsTfLLhUpvfqTNYOA7Ek3pPbDYHJaT6L9nZR3x7vJjGaG0PAvpVE/E5Iz1z9FqOJyEQReyvS7+s6TU7wPFA8A6oGEKEfdGPz2vQWq6PrUIOFycPCry5fznV5kwNfW3PhoCO8KKl2Q+xWM3pYtM9skXbsi5UrNdenNWd2PwIMH4bLzcK3ynGBGwwzm9ZXHrCirWEJJNzU0K8zd2GA/eaBCNtLu8b+6fs53b6Fg+AcRDEiiIkXSkCN0PVev0+jfY4foyh6Y2dbLKlgmDLO/BWyXbkpE8nuPiPq/pybuyeTYzX2IbJvkDpKzwALonC2gGeoPIg0yJRhElYe5okXrUJaPbI/n4gSKm3kzEeP4ivKf4w9svIgUejKKaAl74Srk1grOJXbwMEE8aB1kh7i8cTt68WFcYoA/akf4qs5p7ngJET7SEIbm993D4whv/IncocsvEt9IvL9pv34jMtdOk2Z5psUgxcRs3LD+vsv0l/UuNMQoH5e1ahQ9Y3sLnD0S6FCvD6v5r5a3rS+L3AUrb6Y3wJTCj2HREabST455eFaI0+LA5AxVhoo6Q/nPgS9HqKoxBemogr6YXb5BqsFOu4SrmGrUBpfcdBL4wAIdB3d9qRTIIrjUOsDE3cW8gAqSENBFCzfmgiNswjylnQB3elEkX71igSOcndPUM5csh8Zej1TqyEhCzZAz0JxVJlMFd6jBVyM/VMLkrB+RZWx4XO8roBSLMMnryi8ZzIv4jcXMQyBrbh8D6v6ArNr0XggtGNtPCZg4ano95KQUYcbtxGtBZkpV4pyvlQUC/nKdU01V8i+bCRLOzna/J/9nPm62A9kfxLMcCNeAANBqfovuaOg6/BC2MzUpiMEu4MMbVYwPPV7rUosHl861LF8ssRynRUmnUuGPiGv73Fd4VJMAUZ/9X8KaT+1FUwwE5SZXA8jeaPX1KxeDeC8xAoSoHNQ7Cw==';const _IH='33a7bd33a66c83d9652f1e290e8a16de90e5610f8060a9f0cd3358bc809b1625';let _src;

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
