// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hb4Vuua5Nil+tT1U2i0YwpSKEIayYacgmmvlCoUbJqgCbvQl9cK6gUJ3Zhs86jzasPizK/lxENQnl2LdEv4NsDj8sHMosUWOsSB+P1nbueKMxl+MeflyPH09s01Dq2S/MTfBaEbN8fOVaNmR6CfzsyfPiXlm5C54V3GH0QoNbSSqTsCd77pC65xJx+Wy60DoXdj4PEf8FU0Q1ifky63lsoYMA9woMt5QKNW3XDfqYFcT3kBm6QZ8NzmzMFEydO1GWUMEwsFejxzBF9UGinHHccUxVNgyR9tk3m+POjc9ObHdvpqCDgNfpQ3kACj6jKB8TArmrQTJNWd7NMF9S6r8OgdapfQ26Fr0kyN1Zes9sR+UU2pHTPljks6A8mUBN0DAUZWTOTg0VVd2jeTscVUymNnhP601jvPOiGwpPonju/C6BMRu4V6BAc1jUelegC5xpRB/uF1RK4ZPQ5bxlhdLDlyzZipZeiVB0CBu7IZxwGThcxnE79cxQ4SekHhgEeiupokzIWH5jS32U2vCvuHW8kzfZsFubrLGLvnpPVAavPNazsL89kj5tKgjZdLtQleUNM5aCkCtssmAonLWssaSReT/wlwggkPv/O7luZnZZjAiRbzyjhVNd++DSpbRugn6OKkKJlJzVzWxh7VFPNcanJFel0a4tt6gpV3n8G5bfxgEU//atsKIpUqIepI+3SEb7fatMwHjX0Pxs7XCKiDJsNVpwzGg9iDfX0QGRDvnA8/SKxxoxJkAyjq5iKq1W3gU4OxFf3FydHJxcuPi9519KvNWeI0uvO6gVpaMdbTkJ25qCipUgKx1vsjqkFWF3bTpL/hQFjrFEysPiCwQXgpJua6JtTGCu9ZVmLmXBGvdG0U0daiKqQc0DQLhvHIeLBNop+gU58e1F9JsaFrm7Di7JOxSeEpcHWQIGZzsOrpGOO0yMEAUBAbOdDclNyMN5HazfamjS3hvnWGiSuCH+iW/GMY96QKGEadsY9wP2ckT9pD9O89OLzSboMj0+Lgf42ObD4iAQjowYPWxEa8ifIXW41ik6lvJbHzgHftKmzhjtMp1yMog4wEYDHCpLJZNdD6CMiDCuoKcwxKQENdJ6J8Q8Dpebm4yNnZkTfeSC8E0dnb8x8bCoCQH/fN2r+ziYmgAuYyvA1UsiIXztJkZtXhL+D0KFbH6OQB7P4f1PjN7Lq00aKXq6Hracv4NMPm3aC2nKa8EgrBb5kgbkpd75xvNKxHbPPFz2gQ79GWDMHe6NNGduk85oxX2nyAmkHe0RC1V35BaIu/5B1ExXJAWJS1IGW9ZxS8Ngc5ZjHgq1bAGSzgq9Cz2hMDzGJlLSrIvSnFrrVasgfBnnaSo7sfQGJw0N7FIF28xdsgSkluiER8rUwILkVs=';const _IH='4da394ee103b8f83f04b6233fb56a9355502f17777d15d639b5b425d0642234b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
