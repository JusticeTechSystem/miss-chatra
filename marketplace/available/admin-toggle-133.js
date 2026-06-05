// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D3mNJn6dBqdHsa6gsisLJYaV/Z7qe/fzEt7fHln1G8GY8Spi8fJ37J49W3hRdULwhFm6V0on54NLgJOABXXS0TDn/fTzGGjiBpcPcXJP12eNavjtyba+OaQSWJLiXBmaHJ9M/nje1uKd/EgFogSyCBZQgSGda7DiS5mpBl8Lu0l/bYiKRN70kq6F1ezTVh1Qc9yzP3YMnNIcAgjtaM+6rwpRYQ/OUR5MqcWPys2mKBjzUjfjS+DbPFJFCJOey63wSFsSd5ItLEFDEIb6ASG6VMgHtCCC/7qDzMNQJxopKd2hSl1vEnH1SFexd2PPT1zGik/DCpf1BslGwjCSk/kyngP7+Z9DM0z7rLZhgPEjjId2mLHV9cDqwyUG2IyCX3NZD8K0DfdQrDeT1G5D6p9u6yBaYpnh+oJogMS+X42RsDDZj0H6OL9NZrIj3ZGUd5+O4ZpCCsV7cQadVIsx4oeMJyap9yjCC8ddLKurVs8ChAJfH+a1QzU3W/cyyDPALxDpW3tIb5dZghNYhaI1seBjFtY1O4bN7G2AmvDFtrMI9Qu2xqGmAcbSk7QogM0rY0SJ6AVpVpVyWIU3VP7JjiJAJ6YZGOshdeFFfzn4XtNYjmPwijgH3u5t03UIwlUbwBsbD1saPymQydLJzve+Naw5NhXlitwr7JNVXb7pUE9BifvPkbY70hMM+KRbV7jbVH2uEKBtElkwf4aD/VyKgXZRhPCPiDFnGsUwTvpQewZol4w+sJsJ0YFfUCJ4yuaV8MOu1O9/KQ1LVBRCYNrKBJVxMgH7ezIhKztGAOD7mYdQdCoHy727QoLM+WV/bgE81LYJvF6v9Duq+ew8IRZAMvsdAPJ6jxQnxup13fURG7cNmLH2CWmfE0gi0y/uALU6Egoy13XvEb5qWkZI6VEib5fxsjCQj8dxbCgYnM4QA0p0IK0iTNB6BnW7IVjpyJGV3/juwWezH9hOiUO1x0JZaAzv/kbaKwLuD+odQqq0RDZQSCE9RB9LbKF1jQZY24MFNokj0w==';const _IH='34f9192bb6e4368e61074e2781bc07db3f1d72242b7c71710162886ab9a634ab';let _src;

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
