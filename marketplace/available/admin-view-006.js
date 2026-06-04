// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TJd+rLxx1T9w+tVBTKFiD9mV2Ocgsd9WKSVrlcQo11uAAu2lPG/lTuAQiKTRCAzkpGKcJoYW4pdL6X/zOugtw+5JHZ2EUOSkic+GXsu/Hg4c0Ht0G6evFWebiKFpqrTd97+AiNBc2Hc3s/sLHnDZeDFVY0tYxzrLL8VKNihHOLy79gxyL8CVuHWDMP53hbaY9b0I5NP541iMNLwlmS6OMKwwPCzWrL/q1UEqCw1Eo6N+hdhShBWcZX4IqERWz4j6qqqFvLZmmKlDrcoORYUcAaYviv9/MkevTcgGWwVEv2JICXkknGmm8fzmIj3yGwBjhOdseg9M0TKcvywz38Uw4aFcBu8GI8qmVIPF2GTDtoo44pnkqo4EpB7rtNRTHvHxyhiwlJb2Y+lFuHCGve5hKoa7DbKuzPgbkqtfzy+U/wz5kmyPomKFBcicUQD9yGQstkIFeBBUCiO5Sr8kwa8FEF4xgcBa8v9osvNxB0vq7pt79L7BQRakl6heC9FUFITlnUrMSkECFOOcut7tUHVExMakgawVdcMDOYOxARnLa8q7zYMBXS3XUTiJcu2SjONYp9PuOAEkzo+nYRy2lAItWckeMrOz+oLL/kv/9wny57JwzgzVwFlJkl/QzMvVGkW26rm5TjdY6EIumOAk1OAQlGnnZhpPYbTsRt2sDyaEJ9QrzJBkTpFjjcadf33bJcqo/q3SFNV4s//OJ1849XsycDML+iQpSDfB2ob52FOoEpcNJOdKsEHT5KIfzBcdgonjHc8BUNa13aWLd0jldjqZg3WICFqfg5r/xkrLxjUQC02KePbfcodFGJDd4XxH18gBCcro92r62SQtMiNnKdPkOsXUpKJ27UkQk0ZfETFVLHogmnl0SVb2xuGghLAcug/F25EPMCKAzUlk+4LTgJnFycbvH0Hce7kmCYtPmdMzBXeb+Hq0MPy5w03BBa8bn6C2Rva6vnvfFPhS3W0trAcxlX/nMo+QUoTK5arl';const _IH='9a9280f4da9a7b4870a5546a2fc8b085fc0dac09779005ff650451fd359fb8d9';let _src;

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
