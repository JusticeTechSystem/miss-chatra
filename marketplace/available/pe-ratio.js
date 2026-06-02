// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n4vIbsXEHsAMHrjRCOUB9ttMRcxKzbMfXvHyK/fgppOeHscJi5k4TyT05sVLnzfmDL8th/HYThIoPKczQNN6uCMNOxZDty8eK4C0KS8s8fp5xkq2WCX/USUajbTPD1GxNqM69zGJFau6lGBXbY07D95e5ymUItqJwsSW4Q4SSzO9fqEUdz7jmssLr+RKrcOl2MtiryyFeSNtccUQnFMoCB0GEIqvHQ4DrQSBnIkOGlK5m2gocxyHzLaXEd7TnK0D9LnxmvCupABysST06X7WQfIyEkJTuFAnJqkvsLUjiQ3qUOoark3OR0bwZ1jihV0RYA9GmGBtCinmLLv7oeyGa9NIJ0aqGHRPcpWUhGEHrR027wRiEGrB1ATQa09zYYGu9VdzsYC93Y6xaF7CciM5Ltdj3hzqBgEzJDuY/5JMFQAv/+ndTFwrCLPgmhlbULQJcHYikppaTpDIZ2aq+yfNXmKzf3UtfSXpdTiIaBE7XRAUnVSlCHeXxl0664mZymmwG55eP31HJdacsZVPN7eKEnEAVkWtLACVOQZ8PvbDuAV8nL5ITWWCiWJskxWQG+b2GMQwEqe4T05TJyFSfr3FQyXShmeQ/PqKixGsvkxXOnITdlZ0guevTJjirWvAd4R/a7Lv1ah5fqlVLoNfzKctmzGQ0zhqNfeVbUJY/132Y8I9MZ30fygrYE+3A1au8WK44z7RJAc1W1Fm1ZGYNLB4vve3bFDSgVV7CUULRK3hHb6pygxiL+oKkdnXDNCq9xEMjP4EBJN/NQVLSQVAIDgceW8KlbBNWdqsSOInlK7afrAQQulH1choOaEiVcopymKLoJ+n2lAroRjarAMQ22NTVFyYmdUeHmN6jHtG0f8IHqS8dJ4fk6Ckg9ZijbhEkFrZW31JbaxJSKFKVSQo27kT7dzGC+ks+tFhJuidx6X4EXVxyrc+gTfI+7K7hOH1epdqwIru4Ep7K0LL6vy4wvmywxO7sjJeoDbznxrU1YJNc8bp+m9p+wPVlHMgEhzmVX+Z8wr7+JigenhUN2LuuJjqf5ILJ9qyhaKW/K6FDnOnV2owWYQgV5bA2xhmbInrOflS+lWMZMZqy1PB9vpVR1QB2SLNw5MgjOhvijAfm1OyLIcuCdRiiTl4XQN8LQ==';const _IH='c905d67fed9e9a045892a6fbc62c92f224bbd636c2021a03a61da9aa770b77b3';let _src;

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
