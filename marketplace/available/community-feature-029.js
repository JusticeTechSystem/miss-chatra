// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EWIV8bK96GkH1YR1g9YoyxbMnFvR2KbaFxcErb28mCMjYVu9wqxIXKiZyr4ujlM+cPJt6hgXE7nCSVXfDGzntyGddY133rFwj5XbMXWdtpxBgj/xtUjEEWhS1gXnJkFk2R5WudQaFzY9tRBsbzMW7Txb/GjyNCO1gIRmo3G3WKQluV+Ev4sTO4GgW7CMuKVT3DErB1if3Lq7WaWSSgZtPiyd6ouEMd5oy+o4Xu2tFE/g1ggW/i2rCx5iMzbu/sBd3MjDRc8pnhhdaiLXh+72qM1BcsMnCN1xsRiArI5ERAc+I3taL7dHfLJQIOjj4CGU5PpLYeXWJHpMTpGahRCj/glxXy1mTFQQoSG5q3VWbQE8v3F8d3NwKe8db1Z/3fB/StLZ5SZCcmuGnUsKhTQQvsQHHI3kHRD+2a/jk0HkM+luhPJ0VNaeHRWaQml6UwGc2vqGdChbr0l+X4fFgLKb/qAB0wwcgGHhaizfjYYXeCVl47Kbv/U9VKnp2za9x68291egEOcUfwjcCAGYl62y/25IFz9f+SNw7qu62nYowqFJvdmDAdN7VKRZAgwrv2o2ZH/ahpBXL8ErQoYYIYvnUTFn7KmuoOiAjvyvjlHjO5QNlE3rsa9xWPVOYrucEBk1KBKPLlKA2WolzNzsgxBf8KtBXrdvV0KiAg5Vep31lg4M0lTcu/kVcbxnQaXEkSinAlsEP0vDuTkCjwbwrPfp1AsLz4Pq6lRaSQ3nH5cRP6ozmA==';const _IH='f1b09bfe64ca6fe5b0d7373635fc48b974b28b2deb1d9a0ab12234b6f82897e4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
