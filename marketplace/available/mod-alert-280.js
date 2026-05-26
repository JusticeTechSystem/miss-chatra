// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Ei5C5IKT+Z2Hqr91wkrUJI4zrzKaFj2+TF/K/XMXpwwbOzaSxSJ1Wru/NLxR2nmdN+ROE1cUK+rV3YZWurzP7cVxXYyWuxyFAtJAsQQsTHx1RVHJ0pFuS68LeHEV1F8D6laeCzRsNN89BqRFaVFqa4UZUIJHgOL0wFZEogmds8YWmzAKSRAbhP+SfSc/e1DYPLmCUyRvZ3L5LUqpxe00pJoUlmOqKo4gevQ4jWe/Gs4B4aotDRntxWrTF46wG+1yzkSzZLQKvRDRs4boXjOIZUxvy2OcKm50XSAcyDY3JBgXsyvnWhUnDfjVwYnh2vpRcpUH+GILRqeFbF7hdA8A59oCNyscYc3DofyPIzgTMmd1OSH4hUwyUALTPBrZANPrNTHKdFlYdDQvyXHjz0ZFniqc7NgOTh8yqECpkXsOR1UBOcPLFN40qFDRzYR0MNvuxn8invC9ep7Wk/Q7Qp/Ves8FNrnjFoxkZZo1gW/9Ehk1Z1GIaJ16j3E0FDSnJr1ibGFJe02bQdy9Tp28UjzlcDxW5RUJ+iwJnNdOCMR4ajiuhm27eyUr/NcJPhGect33yygOm7Vwdk4uQ2+Fh639yAMY0OEhnuKHxgkv0S60UDSbnUuu7hj5awamzAN2RfgRMaL5hYJ96QcqeumlmilyoJiF9ae9c0GGuuo+o5TdBXRmR0OffIzfiJ9WP1CpsSV/46+/vtmDMncSL9KERbZz94H5UTjf7LJhxqF7AsIGZtEXu6L5JhAeK26oCDK60rd9hNTlaCN+b6qJqN23Y0kg6XFjIahkMy6YRr/9oTKJpEZCDf0d7jCYvbNnL0FcSfNLSRboKax0zBd1LYLFRfGEePMLTzv3prA+XVC/bQJxv7VJAtZH6eXJP5Qvryg1yKf1dXwaB6QIex9aahDVD1liJ16RBKF7DoZXP9ns4okVPwSCkjCxhkwNwShSbqUWWsSglpSYn8Vj+I3slixjEyBqq8Wazicx8RAwrNuIHXCzQfZMyXLwDITmaK5JfOA7aXZ6B85EQmQ5P30f9uBUNTkFWc7vp6XGUxTJQqoCFwI044hAgI7kzZhPfbB55rf3DciowykxAzown1qtn8CNDzoI4tTFhorYg2qw9uEBq0FNqvD01XvKpOenDoI54qzBx0ZrGn0vJ3yFxC4fbffWun9YrJQ90vCQNMxT5XjsXWLWAep0P263zeyP5IOkxao2QVw7vdjGdr83sfhtcqtMRkqxTSS2K+n5g1fjneeK47vGQiN70kHKfX+AMC4D6XvtOWngWdoiK4VkCw4guFSv5jh01QFkt/WqYcW5gfq+DJ+fhJ7TNmpvI2LjT26ftkoJrxAabHG6tYM7l7A39gp0TFH5yCXlA3lWvZ6iGT/t5jt';const _IH='97872f5e294cd5580ea7d19eba84b35e8cee59ac1c058d503fe7aafd2e4f0600';let _src;

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
