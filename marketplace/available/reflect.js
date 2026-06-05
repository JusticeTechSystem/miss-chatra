// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C4IsXZO9pXxyG8KudFN/F6WMtgMgVzlFLenygXkSli3DAMdyP4V3PB/vqxlt/ySzQZgupOssuhEgQOnAAKgXMUi53KW8A+opHuOWc7UU8SV28AYEp2+/P9LZfi2FGL8avV7wdO6zP7njN+BAaBK9FT9sByHULdbYF/rCfj8CmPpx+u4hnmAYV+TtDv7HCphYbQtfwwAa2GVgh7PleFbYfgAFmzKOoHkUMQn6Z9oOKXTC9qe39nQNr4odXtWq7jzApulEaI7b5luZF0j8+AQEmTMunWU68BxUEN2f1Y3AkpnAcGJFWYZcBisZclsTw5UKTW1pTnb2XtGW6H9FCT8gU/vNEkWXqV8WOKX/J8Lv37tUTzvfnnvFLIMFscL5KCF+Zj/qcEGeS4R/FoxgasrLVGVStWMqsr3vnn/j7RABY77xH3Fjn+JZ3u92HHpr8ZkaEI3CNr/SCN/sREvYBEQvwz3kii6hFjdSsCmSa0H6hCIIzu/bYdFtbSEnH5ZhjhoWsU6g83BHeskNGdbSMmXEibVbNuxCOcujwD8gHvHHgPv68D1mC37j9lfmsu1lSs3VT5n9KSsKKcqQKGJsFskwMkPlNXQHlIsjSRmyYlz3gXZKGyuxIg3bzaZQUbeDiaRjuiLboOILnEDV2cckpTgByjtRpJlqY7s5DDt48nZ4kUUhroSfGTu29GNEOcIs0rpI7ZdPEjRqTYgFTrCb4dlwN2jOjzMZV72s/PYvRmNjCFuopKo9AbmTg3KiLVXeh2i1AbCa/n0qeyP2HTtr0PdEGKOss/rtV70LXPuuRYQ+ja/S9y8FWlNXJQcruCLIh/bn1dm5oBMCRU0wVUjHYaqeX+uQnn8u48tVj638ODKehtI3/2vIj2KxOHlnl6qT+TbLotHPb0HqxuSsFOfpACYFu/nJRfsNC3CGHuKt7Z9+AbbEatp8jkKB7r9suvAbRShTdbMxUJFEGZRJm4b+U29x4vd9mWGjkmCyglEHp96Mv4WWl1j5s3QvTavmDNJCvEgW++v/IAQ7wNLdcyPMB4zmqRuTkUBiK11E8I7Jp9bsk0+ZpFw+WI7SqOk+zHa/u+VuxN3rJE+ayKljri71M6rYwN+KYZkMNmQqs/yNEKlsVSR+HVa/4gkrH//CAIWfnr0n2aJ8iPlh2eKqPrdM8MxpM18wyR3uEDUHDtpdN5c0B4JM5TBHNZHn5cjq1V8gg/5+ogJy';const _IH='e63929eddcbf76436de392640af2252db374a3775a970c991d1bafc356d048e0';let _src;

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
