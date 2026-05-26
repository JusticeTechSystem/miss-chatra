// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O9wj4/E0GAUpAmPcimYVd6Z5FSn4fknd8h4+RaN568EQwHtG/vXiGww2nYKYIESnvjoYxpbCihPJu+UduVI9DwJIblyOfZChBhpsmUW30Vwaig3/whRRVoayP38VScaGTxrIafPv9Gobif/h3e0C8LK8EC1xqRynjFpETH0qdFw4ok1FP99HhIWrxNJftQN+7k+pMt50B7ofLM2kFRldJb475SXtmbvTi6O9HPHa447YDggQs3johOw6RjK7buvNIEKyfKjV3HUHDp1v8q96COQdHjt28NnauLBy3GBNw4EBC/TKTtd1h2rofTTO0VTjn72snt4ety2jDg3ulYmZ5Bzc6QKR1zgwQfyd7n68PigRq0h7gGz9HjYXYdJ3le2Vp8gOGnDFJ8w/x4k6fIteZoGUuEY8vF8mog/gdOnv4fe6Nq0Al8liVqs6T6pJaXLfIozkRnr1G8n79QMArcqAIRRKBbpC4Gu0Gu16VVU1OZj7lK6UKm9bCvu9ajPkisZKY1W/ATeA8ZpGnZnRFOdmD0ozEFiUhvaq9Ud8/TXYQ/bBMzJ7BQ9W1JWVmh2YtlYqYSujUC9njWmGny+vfmeD778l1HURFwPvPpFDdjVGO5t3842YoXN5Moho97akJfubx4XjCqiCJ7rCKpkbLaH+vjM+lVOenS1RfKWILyUFmXqXLe5n6QBBH0m3/mqdfA3N/csSc3ylGbTC1vFoJURHVJfQLBc2rUlGXyxZqwgJ7NicDA==';const _IH='b611028ee56191600f4660ca5896c21622dfa7438b66a5f32662e2fb0e705013';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
