// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5WyN/v4fET/Jki+O7916ikuKTDhztHZlp++T6N62OEGWGMrozUyv7nFSvQK1rQtNklXu21tVKWkllMmpt8bDS/z7Wv264GYYHA7am3YkOc7AHlV2fCwxzzC+XQm99pF7ilQbfUc3TWKxX5UDniNC3qoCIKQMlP4XdUOsXENGZ3r6U8DVjGlDWm6sj1nTch70n1NGr/ftRPIifza7r78Dla2aEYwxlvWItOyaR6/PUKA4Z0kLS2agrG+6yooV6ZDD07G/moOOgHQeiKk5tJL0Gjtcx5D5o7xbEVAecxqukfcTv6bH+4pMviJtd79vPca1UpmiV+ziNHcBYUzgFdP3VAZRCxoEuFQtnfDq72mysF5TEBjhpTLw95kTiKOTQlJLrP696RHmLROvQrCvcWnPw4l7I8HWVQ0DG955keu1lfY72Ax7SEG3L/8W4GQaGA/nbWz7MLUY/VVgAS/ffemp2MdeF6ymVDwlM9Vpd2rmJTecRkYgWgAFoksQKZrNmzV09F0d3EVfjPNJm3m52tvC5N3CHOe8PkhHL1vZTMQlkcWKt+AMuBYydN+WfdfliyDyl5sZW0GmT9N1K2DkAkPAjwY96GuEp7pc3FHIzhKwlYGD35Pzq7MjHh1M4iECb9RUD6cERUoY3HMbrd0jU4vZ1THG2m0WEHVxxvPtvkVN5EUzmg9WxyAWzivc74DM0ZLv9j9QEZyOcbrpLmOMoYH+kDdTty0gsSyBQOmzbpbhraJ+r5OMvPPQrnlaq5DJHDO1goi4+U+M4kWLpQG9MTcPMGc6IS38VdH1sLrnIiV95DMdsZh4bSHnaCUw23knrLm1/7riBQJPmMBpGAjQawtEo1JagAJSrpaF1EcRFqzQfnYUDe8IrrqR6bpmXNLSyoxoHgdoPM3e5lweTLXSfzBtEpiyTWaK9D0E2pU7x5prFPzP33xPNDr2L7ZpjZ/ZO+rs/t2zbObLOn3YI46kiJDdwLh1GGjknE6TJaegZNOuXqPZDIaEDOPEN4KfprTrZbUOO4iuyIXouRkRpqS6bC1c2k2eM9cmBsNtesgXelXu59wA7nTkVuK0ZrrK+sic2f3dejFwk6YkB+6jPCeDpKrlGe0YrrKmocVXsTrfV28P1fjCST2iVgqzBzjtW8SXWixk4SDZNm/1f7R72fkVAdgmtFDOv2wMnZY6WL8RtxxQnn0GLSMHpZ088RrYRo/v58K+WpG46olArbVE8RXjl+tvm/xdUVDZB3DDjVfag0grmU5/2msdKiu3mLhHxkdDq2G7Y5HoYyyoWyMYMooR9lGCoHxs2Qftn8Alx9Qz16mxnMWYZRUtL+4ZnvtaXvPwz4n/ehRFZGA+wmEzOmOeqiKa26zFmFO52Eb0jQ==';const _IH='2abc62164b6f59f6a2f4b2c2bee6a77ed3fa503d4ef137fa2e90043f9c40eecb';let _src;

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
