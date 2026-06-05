// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y0KWuPsSRK7POIhAP+by6X7ys9ihIYMlFV8FVBRicv+Nrr1yzApjeMGgLt9+y7Fon7PqfjOTLsbQgyUgsKHGFSRMVSb9JsjBwUxeeq8ZcIl/kaxC6LMiLkLqaRe2vmx5tOiCuY52+UxceNg2zNx4WozB/oYq2eTWjsB6IXzu7rZzTyfa4GuOxknMf4xyCYFxHPEhpFwWf1egrvyJpZCQZt5iPjB2cTtOWHVS1t7i/cINpaa8f/p5pv8w80HIg7Q5Rvu9O4gZIcLre0mSdmBozxKLIqkOQ/4uCiivWX/iH+EkOH2mFyokVqRPv91FeuLIJtCjWE/hahIp/JSN4/5ghvnRX2xtc/mqmrRXiF6KVLW5PaSyHnvFZxljRJFrLU6CuGLjVOVlyunWVT7YOaBvXLLRwoOL2qBo99WaXUivX88ISoe3G2h8e33QLizNmiyzHJ8b20NTEIjby+1j/Wl1qy71q80oNvJ4dZ8anWm4DhGW8oMR89dBdDhjvxfmGbQ8OUB706ce5mZU6ZaRElc9NdhGn3TOPFZoWZY3k8JYISCihUU1jBi82LrQUhzuSzTti1TwJIVbJ+i6s4PHK44zm1mQygWD8aAqYf5TEaf58aLfHnp5Ex5lCygholIJ1SerHKLBhYHGQgVCa31Ps4dy27lT6EXJbYCJniYqI9Nb9l4yQsIGly9EDkNN1lX4COBkFF3JehqnJ/eiEeSoxh2KR/7+QGt6UYbRxL30o4QJ1Zpl8E53E3aUTIYwvtSnG2RrFzjz2Q+j/MWrPk6cssZKSIKR63GgjumoKCclpfgKGykclWFfh8CdkrIiL+WmJhZMaVyKUkX/a1POrOYRaBto2zjOTSTIbEw3oiRxvqGTtjWfontnS5a4CZNCbcCk8Vb91pZBOJ2RsNGc757aWUUvyuHdexRUdNFj6OpAeT3orGlxzbkRcXmnkGcmv134zqT1SR/4xv1o4Uf2wPAOlI4WnQWvUXI8QrJwtevHBJLML0/pjs6/BH2M9IytnEG+zYEcheb5anoALoja7TBmePAfOHVBB8x9e8xgojNlfqy6z8dGoFnAKdLLWi/hjUHa2xnct8H9vojXTMTf7IHbmLKnNMDgGxqIjOY+v2Uc/K0uPsAepcMvKYGN5mbRGjkxb44MIOOyPcZrmKXOuJ3PFsMNuxlmTbhi51za/khC7knjjRFQSjTjwoo6FVgGHgZZaeNMtmMRmXt5F9e+jLiLGYKW5Nb7IiL8udObse3O/rpo4NrNKQwaIAnmbmhjEF7wfa8zFvEuxjLmzPRyPR0qf2Lt50NpDv10cNGuSvz9plBG5Z3LTcQymoIAsNDk6VGvHurWV7XzooMVe5qqaXbJPt45fXw2DYb3DHyB94YFnzqCmqbmCEaAQa+e3+PchTi/HsfJCPvXeZpKjINzBvN67GnvmtTUfZGh1g1wNpvGiWT3PQCrR3oh7WjYViBqlWRyOPr+7auO5Bsbbe7JoZiec/ldRYMYz824Vsu82q7vd7rLUxAjIGD2Qpcuaa9KD9w/MbyGz56PTHowdIbwH4mWEoZkGgRrhHWStX8LGZ+U/AIiLdLwwZdazBMOeOoJ41AQg/VdUE7GX0jX';const _IH='1baf57aaa15f49f5fa20308c708f96b6e3b4eb6b06ae22ec89f1619b331268a7';let _src;

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
