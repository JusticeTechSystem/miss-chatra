// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7QJgAjnoU41CYJUwPgwqoMMHgY/lK+E2I92v+P8alJYLw7iWxwc+TKY99jJNTKscdKJhOOj496y3CzU7o1u4lCKeeUt3eQOoENMaFmcZmyRdFRVpjTxMNPbyWQgm6fQJIf2n9Ia92JaM3ATTv0Gg6tMa2v2jH7bQvl6ScILaRVo1OOm19FbaZzogoyZS/CR1/Gazqy9zwTrNa1TK+HNAdDmUMud6UhthGyCME1A3av059C/AQjVU0G+WGY7kPS0veQBTfCu2ltuPep0OT5jxJvgPK9OFLANFa6oOSqTSxcevGHath7U4FWb3bX5UzXUgJWBFuCS+OyhFGakHplz12cqm4YGg6fUBAuEykcSdCzElSo/rOt+XCbojYb/pnJRe3REHWaYuPPEu9MjkvZACW/R3l2tF4DTM29G2dCheQp6J3zw4HM65HBF7GwhxDF66fATygNZYBv7oxUTWGdICKGA3CH9yHPFbFLJFoDzPUhvxXkrEPgBt0dfAleKdHuPsfC7IyYJ5dwRIvxUmBJLt6peDc+oeRYO5ADvZXqYQB4LCoj+GgJPaM7f4GjgQhoeEdngJX3ZtjUe5dXSw3HIduPn6ZW6M46bpRnnWi/kCvNH8NNPZ0jhhONJLlXlcFe6QsRcQdfmS6TuAoIzYHY+4h7ovq6y08KLBCxzSO2hFo1TYOj/QfUix9MW01+c7CnnGt7rH7vKHUWU5ykABm+SsUs+IgJv1gwgdwHjR1rlV1zlOLTlFCSjK1RFT0lv9m1JI9qOB7Gnm/Rr4Uc4OUXtXR1PgQiOcrB0TAMXxATt5H/QAWTKCYN1wc0cNq4NEIL0r5VTIkv0KKxp4nfIDFA2IlF3wkAsRNyU4fplMJBn5Ens64LCEac14sXnbmpkP4t9TpvoITOTIuvSp71sQUnA4JP5nUuzEjHxS2SDfUY51Uwyo33v4zRYT4sksekqPqCziFSUWH58/Wu6sIqsxFPllZInTcFmkMTQpgdrGhtRoHzjJ5vK0U5VBB3bJ6c0gjB6ClQ8Y8/+VAAobs5vTVPcfr+qGHTxpN5TusZopZx89KDYYvv1NtjKfEBzNoysUE943eF87sYA3K+uMQKwMQIQ==';const _IH='00c20f35475ed12906d6c5b2b205446b0aa621c3f3dfd35003536652597241bd';let _src;

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
