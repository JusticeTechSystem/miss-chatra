// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SWCvlvYMr19z7nL2KjUk9rS+Oej31uUxvL3y4ipaxaLr9No9yO443CwjjuWRfrhvbiM0/T/Wujr437YHr7Ng6wDOgH9NwsVdnwzEHo9Q7Jx6VGqW1jceEBMtdRTBWJVfPp22N8UVu1PynKt7jN6Klh/nuFTkOtDQbwMq6K00/Q8qRA+Awm5ZbY854Fds9rKv6ynI6Ob/osk+OxJL+V2bZgjQVdrNJ0XM8nX1G2bApskPJY8JLK/Nf1Fg/RqMqaUr+DfcQIt0jfi8FNkSTIiWicKxt5y+BbqlEk3HpV9S+iY4p8wYz4H51sdvGI3YBp/kOsSWOaBeDtzrLs25vzwa6Kznp06Hvgj3Qb+GnmnRLm5fS/P+rR4py8rE1qIsxEtA8oebRWG++ic4e7jTfNvMmLEKlbvKsZ9vT3rJ/QmLOGdfsUiZacgadlsoMijgWsF8vaAJgJaXuoCu/j1lBPLC/agaPiSoSy+bLBg1A3/D0NYzj173O8YzoDzLdugTI8W1o1GGY8Kx9jP3s2nVeh8fy+WZojBd3AGEHwgIiFfI5IYOike7ipaHcRQG4x3odOISkDYjzhClwRL7J18cXUvglYB8ibaq+rJrnPViGmrs1CRxwN2FGCWd8sIDqxLeX4pLuMIw3yWhZ/GOUAamLhxjT2/LPEYHy40fkvz7Un5jUPq2OXaCheEn5eTwkGebB8rs2QAIDFfxnQnA1rJx/Xcknznx2nWPhsRxBBOyQRG2A+5fVuI60hnZMEUXN122vch/vzTIhCp8Tz3NX38ftR8hv3g2Qm9W9K0iG0CmaVefYUSLaVLR6nJzSDbd8qHjy+YLmkuOelhCKht7yYdg+iksWO/u7mUYLKoCMcA8KDDlKGduxxuJsRK3ujiEvQOVTjfL9HbHjIw0hZG7+xIB390MJLk8fsIJrWczA2tuZLRMJV6Q+5EfGYHSBEPRx7dUgcQKdn0wdKreSEr5t/kxBQC9I8aAjjOKqHngRsvscN03UtZLkFG8Qf+i5T3t9Rpr3B7K8SKDGHzsbSZxEKdeFcD7ExOqTemTOyWXJxrocqkjzeY5zoJyzyZIJ1jR4MB+eSMjNRUlb2I+5AWKCfiZnHtxNYI9sOj1yY0UbpMpqnEVxVmE4p2VDP4omUie2Y0I7Xl/PdZ2cx8ISM2Gg4I3/VaZZzHm5QTxATm8bskP27cEbUdFePYsbl08IYFD3C1w7fKX9nVQeQ1kn53nLoEUqsXKa94T4f4M/ghfd+3ipzrioBO2HQ+YZb4WkmAJ5XEgX2y4AsYYOaL5mcXaG3/bnaNvJ2sOrgaiCUFcX81lnX9fkq1CBB8CWG7Jl/DdVMW9MUqIGPMH/ZoLlxURtg==';const _IH='b1edab095713db777aa31ec73511b0d5c80ef15b704f7b4259d1e35de574284b';let _src;

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
