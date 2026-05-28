// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7U5QyWf2xABlUxrvTmMLYMXsAjHdy8nrskhX7HRZwin4ESm3+OjcY8ah3y5MSMmmhVgG3Q0HqPZYP3AZx9pHZyZI5n8pwG4/qgt6/vz2N/Px2jkCojX0S1WGwCASttMoIXbitBCoN0JjL5lmvhZ0mih0nPgXYB0miqVLupIzz/H8NL9uDM67JOrJSrIfUO5Vc0YxC1pR/N9Ul7SeDw366Id7zEgYJ89LtGnBOhVgiovT4Bcs2yt1DmvcsRhXQxnftcve2m2saCjpMZ8MmcIwTa1140z2DibQK3PYjQR4BvUpMQsJmGrEJlXjlX4NU4qVngLNWs03skVzdzZJRQjWdOnQ814NG1iyr2FqNLF2oh5Svv+ryKNzKj7AX+clRBD494oJGzv+jYxBvX8k2weLtkissEPHmqNJ8HP8fuITJn+ZmbrrV6bgvdl8GoGXA6KWtc5WhxzAPOr4zPcREBxTJ6W5LC2PWzBceEgJtLsv8IXa4dYBNIssflKGwauW/fcpPithHNUq1jwaq2ygQEVtpDmpzGVPphD91D9Z/oFztH3jeNI9xFbLoEWf2xEzDaySwBE8HD5KwFkvREKLk/Pu73S9QC0/eftZpfp/bGPxo+fSwvbI2kKbjkg1qnPWrR7voiF5kvdyBcdHA1xzw9k1EjKjoJVWLxoH1iwZs8hjrw0Fgid7kpUB2Qm4zce0Kw4V7gUXn3WuHjIasTV0v5wPP/TQAhbCcWl9G91DfJ56XcI3IyadHvygup7wjq65pXZiuXbUiKHSD5lGvAWa+BtRUW6QoyDNc38P4XS4wZgmQ0cQY6A8JXMVDYfcGzgbPEtJeV+iLME14yfG2Bg4BKhmGbgbTcjqHx1aN4ZkZYU7thXS4A+Ik1HtUv3M7A3++DO+0K6w9xWvA7sjJfT7tfH3rBgGLfoHCgRsuL6zV3Ik3YL3euZWvRGTO6JY9bG5Z0D0YDlkdEiu/B1Ve8eBLI4TJ0qWgT6xycvxv8rgh+xcco2O5Q==';const _IH='0e36db577289048738fe3f6f538bdd145ebc3fe691ce00dd41471c234040d064';let _src;

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
