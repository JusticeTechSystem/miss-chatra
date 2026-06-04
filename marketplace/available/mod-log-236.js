// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UudLB65YqbNg3/8ESLmyM0dw2zcxUJqMdx/08U+VhtC4kxVwcLRd2/NYbuBxQ69BDnRXgcGXu9qFR64pyVNtoD87P9ZIAkl5kr2cYdFq+/zXHsAaHwJ6G/dZd6qD31RIg90CaleRlS/MwZ0ppdwhn6ZwrHYwkD08Gx0YObkAaUKmxv+fCmSCmstY+xwTZZpATYohs5pjBxD3Lo50HG8nLB96JiQZdNlqbAdBE26uBlFxWY//qnXd0YO2D6ol1rZCpt6hE2MU3O6ivRp5KqfSAeVAfmK+oaBJ1b6+9Gw3ft+RId1TKNpXrm4Td6hdJAEEe3xZjJ2HCthbBxyy99QXHf6qJ245tsvj55AIruEavakNeHT1HDihYN2VduC/G+kJKudUiAO5raqo2Jx+AXS7aHA45q0H9CmzKwmT3zO+nehSBg5KQS/wOGjAcmUKHiJ1TvDiZibHjahT0dE5qxxM3jlWW+gauUm+TjvNHahmRKMCU2mlmvCb4JRlXZ4TPtIWUhXbaO/YE9Tv6vE6p5bgFHX2M976bj0CdGa4BdLf7lSWQrw4lTsLcpHhJfk7vlCN2iJ/MaoYmPOshY7BITlGcQHgO1Moqj15jsRU0stsrrpmSys1QHG4ByN809m0yPIybjKR1Tmrx5k7t3rk+jPvVVjR7DDFGkjWC4cHm/mJpelyKpvqRilFODKxpS/uC63+FTyE4p7btCUnPxN9zMjfcfHkDsHaZ4KPfNPYm86B5aKAn00pPlTYYehVXAPYN9pxTi3BljgqhZ9W7PABjPDWPr/WaaE529E7gmkGvIu8IH3UI3wjuT6OOD7tXFS1W8Hadg2okMim5/j04D7HG2yuEtCqGMylkLOyFzrDAOMlkyK60tIyxG5AQsjj+1QZpmnHPrJFcFaF7j6xKRAV1rynxOm8vKY8cty+SQeRclcbxXJrL17lXIIcrtZAl7ejI4OLWh0KK5oVM63C6YlpiSSWZBjlMBiGHlBatWK8QbzYP115LLhALILGx7jzzOwV5sH0DyUwRpz6XFe9jmZzpkIcmAWml7X+/qXwsesRETf5p2/sGuYmO1eBvHu7ciLQZA7DU4s4iqUytvskRivafPW5KRirOXKDNTqM2gBX9WR/fCvhIPrsYca/O3lMI7LiCxIadY6dDcHQqA1WdnYV4a3Qo5Bt6yjoQklDQ00xEbvXpmQst9X/tjnB040/I8scM1+67zCAG5rMnoVM0TeaK7y8ddaaBF8wYZb+EaaFghaRTYxfsyTrA7Gpmvk2BgnZf+AGdg3lSobqYg0vkVxUyb8zFSEa1efML+xk15v50+X5aHjEPz1vUgCCsLKg/Bz9AeHrSetdd/omojTQsg==';const _IH='c84a1efec239799ea769ec769b13fd397940bc75d0f3cbfee42109f46b61ade0';let _src;

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
