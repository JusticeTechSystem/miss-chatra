// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVVBGqmowhWYq+bs36DUVLTyi6sQ5uBVWomPaKjJcLQaiCiNVc+NJ056BCKSTLJU1IeZBx0wUyyH2z06CYIzaiocYQisP+D27CKPH5ESnCMKCtDYKZo9OF/5UQ3v7vvnhCjhZfvI2lt0OTPCknDD7S+7XxxxSfs7JYqUl00ywIbOnjPMby9OPArVDUwhe4Ttgj1/XQwQw56I98wDlx3wqns2I4wIPZaklSQ4XbLJD0gjK3ju2vzYjiZH4hh4RNy0+76tRlSOa/lTva82hzKIUarHlkwLp5X5txMQZoMEgY09gW2fpCoqkYIOePA2dHQ8Pq80dTJnYLPYwbQyKYLmETF7SO7Lu7BkMAJron/BgjHtrjbPkq8NtiFBoq8W5DgK+KUIAZFHJbQ3yX7KmyZhbIJVqsgl7uakDBZjyrR8neBDBa4WjnFc9q/JQ/zbu4hFADF9t7brUgVamf2NTnGxB5NVjog2oH1T8WRIZJ+FACAZeJy8LHyewW0bMG9wdrON+huL9O6dQ1kCVc0X2wj4H4yWLXjFDiV8mwLr9tRZU0wbx9f08Uv3VK+GI8bqVCUj57PrZXs4SwF+2u83vqLK7crnO+1ETY0cFoJ4hSPNB46rCCfXbTG7UY54ZcJpRKj0OagWl52d6J61jcsgrpbBTFgwQkinjykFn+KaUh7cmWF5DtQB/ITyvOBJ3mLddTIwAdsMtdSHqmXPeT8Fd1zayapsSHWssd4E3Q81lpAc+US8ffwfHChuHszymXrR2qQSgAIdiKqXOm64sXu9D0GNWJ5wS3NWdVjFgCBTEVUYAFBc+8SA+Ufwf00IAJqJZrV3/OHQbDvTjc8yga9xcKV8JmiGGmB9cZmrd5DGnGLod6gL/93mLmpAdHLQDTV/TxvjLH6E9S1TO7jAxuZtNkhUUZwuN4Ckoami/cH9CECCEtEMiQGYCDSb+G59FXAAlqIMmHdLMmlQhp+lhhQYpPd1i9v+2atmj6t5gHmtMyR1em4U3H4b/qsq3+Vl/8kZT82ThGamWVaAMWGDU/0+ErIHx/G6Jf+ZG34M0+7jS5Jbcgf9dzeE+3ffQp+DAjln/8x62eG9tYcdjFBwnPXcApWoZyvtEl6sgrEXhpJGk7QbYegu2OsyNg6Y5b9KQwGV+LMf3skDEEleSbvBgSnl4q7wnD9X1EQpHmogHHnvQ6/+VRki3tsPKQtFC6kcNjCdrMzgspucLiux4=';const _IH='3a895dfba36e2747ea489848a899b6f1b1ea5624edd1b7e0f873b11ccb8a2e31';let _src;

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
