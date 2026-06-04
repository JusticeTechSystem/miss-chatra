// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uqiNF+eT7zMPQM0PA0rJfN+14sp7DSOf5QQ0f+Gmm9uLAVeXqZTXyxn9nBWwBf/1tjA0ZsMA2/1p29n/0Eym6FYrIsuMDft8jKJ9WaACr5h9/mL1kqWojRMpDG8f5CDWoaCoJuH3zSG2RaLCXj3xV46OUw3ak5mYF8ckWF8WWS2IizT/eNcxs+eGo1rcuUYHKfuTUxLcsZG0f1q0H5hXXwJmEyjTuN6IipwNGjZVUpcvMHCt5W8yND2SX6k6E1NTSTmBKXns+VlN+AP87vSs1N3QfGwplUQUC930KQEmXniP5uLaPoSJXyMxW1bt5K/OITXBdxoQOmBxvfbSw/rMOpvXd5XFP9ieIkxkBIvGANVc2qaJDUTiGOSexvMBTyJMyVHreSuxQVwKHvzgWhlzScUbVutIkCMLh2pfJQgSMSkijUtf1D1CTalbyXIKkjYcX+YEDscArMGeywGYOKkijP3FDya0UG2CQgpOCGOLnOhsH8G+Kc4jiI7Pet7FDoisMl3ytVlIu+V/Eok4MLzjADV8EZRBJNfg6TCSE5J3SOpdiEHgAWVJj4ZhwY9InrPnAH4jdyzCnvUo/Bi7iejGqLre8/1t5y7Rd5IQ5Gcom3d9BbZiLmiZuRF2eWS/Baqf2DvXiziHUFrtS2PEyCGhO8An6hx/vCS3LdnvStrTQRU8NHD21e9TklHsoBSXQBDUqhPmFstKsJcUikCqzJ+t6sow2DIEISVHCmrilyxRtU1aaKPPk4Wnq+c6CsORTAtBpr71DVYXNaFS1bi4T/5vY66/Dn9M6/RECmLWNvNAm4uwFxYM6EBoj2ltv9rOe+qfGoEjL2eVU9MISDEUYPYstWWCSM4/JWNz7guzboWrTCZBSdOvu4KH5GWP9n4vhelwoOwogsvrXd+XJTI7KNgXblz4kZwOu9y7JUuGSxWSXHJ7trtPAZVTZprux4sPhrr5kkYvlHJHETLgYam0lg9Sk1V6jCg/AUztbk0gehjjEO4ulL2bMpDyzpnBs2S6ataixVNFwX5K8dZdZgHcIkySmBcpeRnLO3oWgS+4FLWW3XuwZow1/nCz/8EFZYrYycVVt5yn12UDx5ztg9Ol5QxPlqLibx0WOd1c7R+X3UgxxTPEuSZQkCXJiBuuD5EvRnhoLxRPpH//JEQt8YwfpwyqZW2tH4++Vriq6Gh6rD/qLqjiCo/FEK1+azaG1+VN7uXRYO84kGRs9GDT7zHMnQJkDfj79BKUyMl6EFT3WTv9+8hNs1yl8yw25GsJ42ZSMhVzrcPc3djB9nXqnNaW3ZXeC67ab6Kwz2vYXIQUjpj2/9xcoKbWJrHzgIfko7r1fmdCErF7uUKTRkKmxsSyHov2NghNh2/pLICtS0ovWlFjVmD5HIhfVQriYw==';const _IH='ea749f15af5c8c625295ca3fd9128363b301b8e113b31c8309ce390f60f80769';let _src;

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
