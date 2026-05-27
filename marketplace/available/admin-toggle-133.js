// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='au4DQsyPpKRHsnHrk7aT5c/Og3VF9zYbcvB/aRN24EuOiGmXwQW9SwJp9jTGukn+0E7iRqIF4QAG2n7i05NhZHFc8d3/h0rfymBPLfXd1mzNZrM9icg6etRNSbR8kmLUhBCuME2P8yrpR2f1S04QJXh1tPEO4nSjPQy8190GVanBngS+MhrsZSFxJGVtqdOJ93rCTFKii8Gi3OuogwPKBPmK2iV9vq/HjojWhXnbaVAJIm936X7B8ZQcjmJgmYxXEA+6246zaIZMlJlJ6JeooPcwWOeKILGTW8QUT7f3VkpE0yN+ltMPViHte7qI0ZQabtI547LWKgbshFnJZNzngjoN4LgFykJ9iKOIr5GqUeLb62cs36ewmd2dc2yM7W29jaoGdIqawbo1oGGRTtIPbYebdJEg7pbG122SNnzfVay9PWLM7zC/NDb3uTWPBv8googw/3+4bN4woutZk5Qb+7qTiCrd2BvyLUxkb07g5qL/gKxMDHJVuHTT1s/NLD6tNHNvFTS7WuguJWO4AOWByaOJ262eyZUXay/QvkmePtkeppAuty1Cdw8UmhkDAvsUZI7RkftDzEFxHY6bm4cVQpupIarpcc/v49OfbHYPjYykzvzCkPWrqUNdD8OwANhf8zOYOeKKvV/WjsltQ5fHIj1VNN/a4Ie70QaeT4kr5+RBvRZ3mtsCONfJi/wFr1yxQXZkHYoM+PpltA4KWKOXgdA3TfXRmHopmJlBI96EDzwyzalKiEVEep/1ngE5fDbMxm9p+A158z5BeR/LN3PA9uvxpgZlfs3ut7QamX9B6TXJmU+YbzFMdYvAjgnWsbDp0y3UuZHkH6sG7Vn/MEnws0oQiSAw9+THzwdEeGHrn6D03huiRB9AnfpZeDQXkhaCwhJEJMUJ5by0NgsWcMtIpCdl1iZLMwN5U98EOmn0aoh5lcedp8KDAydgfI04uu+Nrw/P+lliLUO+utQ4vALb5HalrAA2+NVIdccYGCD5beqhMbjO2dOVf4ZcSWnsIA9f1g==';const _IH='488f5dddf9f4b034c77451eb9438a738ce3bbbb221cf7c1196ececbbc19753cf';let _src;

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
