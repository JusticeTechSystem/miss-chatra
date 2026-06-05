// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v6xvPT/dlrx4/3c4Xx42juQldCjX0H6KfcEf46gCleq/S//OcstIpukAf1fplA2jB+I3zzrqGVuIspq3/UrY3QlumQgWjo+LhNARHSaZfAMLknUWLAdkxU6roLRUlHDVC+Ln3Tu+M6SfoEF44OTgL8kt6qcbJ6RmzPISDA55O6kdqWrvxhT4ACkvtg1coVlHRe+0j29Nr7WIDbMMilFIW3SMBMmite2dQ1c8MF2VPOiX/Ad9JI8Pri3hQchBqGdRIV5f0098ozw3kGQ1IWClaRusS3kW/q1PngYnXJdLatoAb4WugNpN0X64SzkaLMTJBsxAWT1WyuNwKJbrqvnwFKuhITsKZbxn8bBwMUzwqSI76/kFPwhnyAA1DZzvN+8Il4bX5k8cgx9F3TiLmp77DLJUV2+MH4C/44XfHYkyvJEFqWnMX9EgxhWKFqx9yF7zZ4SqkRIfb/TqV0KR95tSOJR2qcOkSUx72aYAOHVNWRjWnd748tJu1yGicTLwJ9wutvpQNlbQtzAgJpACx6e0xU2kFEWGjFFI8QNE//nqif/YxDJfT1t7K1UBbm3qf6dZyuiyT0c8SJnb60GDVD8RlI3Fflsl04PJTweB3qpyntJMYU4w5zZP+1oFWCQAjHKYdjMzOKVgXpatcOEtP/8GMxRUBhEdY4m63qsY9Tc0prFObHgFgZg9VnQgTnjcaV8ARJwCEoGG1J5C3AhqHlp+eQgwryi1+9ZY5emC2Cs=';const _IH='a6fb5bfa6750f1d28bb767bcce11852519cadca83780cbd38c71fceb029bb63d';let _src;

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
