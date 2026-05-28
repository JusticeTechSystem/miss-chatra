// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YUoj+HltgOHzbz317/vXEamZRu2J48PVTu8ovOjAprHvyAgXFvaJH7HdLOo1xRYV0pqq/jKc0Vnt2p1FluQ3qq+X0ghXU+aeeUkk/RTeF+KS//etd/ulqzPHre5D8LF5PvEAJPS12hhu4QGDkjLpEniM26EUIeSjgx+l4eqFVzd9KvmhtARmbJmZNYnv1QLDr9GBLjVNZELgFBtuovbY6mgPY0qa6bvTrBUIvTe5tu1UI9PfezW7hf4233QtvDP6GNQD5ELeM67u2LruyK9OB8ONMvqZUJlH/k7V6mUPgr//mm4xej9kYV3YtDweYt9CiljaraXgWyNlCFfCTSRmr4Ru4KhBob7ePo/DGD2yxJfHkgApZ0nSOOjjopoJIPdyrwV8Gt6et6L2rN6VkHhseQzXVPx9i+YQqUn4j8QuZ7pkBU3Jthe0JMbVkdDKnNFYKJ23jYBEOPoBq0FzXu0BUxpdD/W3hEqHjTE0vdDfvsmvcmiomhAMYks3DnrSAfadyMV2kuiJUtmkly8y0AEbJeGVWThJ1jYhlTpSfPwlCEYHaXFMjweZ0LhY7i3JFI09/hHo+p3i3DM0Tb0qkVtunzFsr7xR8gYlbS+HjUcNlbQmSnzyq0bEmzB1ZMInDK/wHN1lDUl/4Gu/3rdffqIduje9qyBN54+HivMveYecrBEnD+mkIK6d4EdCcOrVRPioItwOgFdC5Re7g5J7om9XT4WomBf4lTucMYrDk2o95nRWhuYyeh9LjvRzR6yuFtfvG7H1FAW2LWoMGRiK+/vIlnUqk8Uzv67B/zq/fUE7+SzDwz8IzU3TRQ5CJMg9ZAOeFshzgwfmHhG8IwzxrzBUz97HQgQK4t+Wo9hbZtzXFFhqd/Fync1uP0Oy7+Fq/0mQPDiGu6vME9ICsQ+9R+K87ST0VLRzL0A/hwhbfLnys2/6IITMHVEcFagtXZiBaxtKgVYkL6aR3mjlhbaTBMf+xWxqEHchdGLLFCKnMZIBh9q8ic4K2X93aD2GKM0NliciRwhwURNlI/AiYgYzxDaXSgjrIJ9mrBBg4wvwI7e9IJe3EMbsP+KXrQwAEq4qURJmtjxK6Io6dhevqqKna6NENOy7DR3iOaVSonUr2rEbf4uF1BeolGYd8X6ITxWoveuNiri/n9LcyhXeSZCom2ZF8av1P1LdZzwfp/Q0ZBfo6F6Trz3ASbd8zJ54bsqPIJCmnjUImqypEkz23SUBVS2QfG6349VCvtgYbvmySWGpgeJmUFt2QIKJH1eGGFaD/xg/RVgQQrvyCUY+bt+sUpuND/POKemMqUA2uqVuf+HdS0WCnbrag6/3T6TptDk5D86K2Y4VtrxSdk+RMOM3DgsTlIRtnblkx4xK5QwXwK00YRCVIB3DUkVRnA==';const _IH='0190464fc133209da766a2c3bec246030b665466ceb8d3b6877d18ce7bc5ad6d';let _src;

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
