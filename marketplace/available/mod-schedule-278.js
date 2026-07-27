// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBv3S+6IXIK4378NWqnxTQt7gFFU543osA9Y4EP0KZ9wooSnfU+u1cLkKFp3RFTlr5ejMsALvJ04I8ueGsxdACzlix900ZufVAzormEd7qEUTuFmZYmmWq1k2NqCqu1h6HnO1sFy6U3fSyBQCD5F5972fdbVua4TwjfJNmR6XV4ppqDCkXHQceSERbBvjTMtxT8Khns7WsYfoFOUnav49EP766tGwMByFgRDdhdYfU6pbC4dhDOw2g4Eeey3BFjaTonYtqv5FE4/wjiRBaRO5b/kGwtJaRdk2Xh0jwLvNDWEfLg9+0VEnED55H6KOpyBJy2dX4mDW52Y6dGMzAcoqAmDY9Et6vTBZe4jJ4h5X2SZJ/sxtZ6QjDj52JdofRS9hu2QOoODkmdo4IFLJoXCb6iJoaw3DRJ17Htpb0P1my58GLlFjjzw35tZt5cI2s8sULU7WnS0nuv/wfrdhCiQrWAq1z0dgtKSUb8BetSgD0STO6evLECcTRcYGrB5iJDFgLHSjszSuE63VB+G3lad0vtq+NzzvypQ2Zia2SNqwMcPld11ELbU3rWvKQXAP1Snq8ZlUxiHfJewjN2t0B8PC+0/rqYixeIxmU00Fa2DrS5nMOxFZlNQ+oTmaKRY+InUPQ5Z+lHgjVA9ozUUl3ncT6j9Pv5yBf2QLUnWWrr0Pwz2dIS7e1oEYb02xg2LRZO0KiFmqPq+Wr6JpkoTv0m5+suVUin+4QB7O4CjUgX9uclK9aThp422KsNtDzs7Ay9OqB9kzM5lv8hotgKO/bV/ZIzPU6auxnwFU6en0fskQd5PxQcUyIMqNChEmVivyFwJc632cqb71s2kfR+2rfse3R+3wcNgmSYNoy1Vm+6PzqTxtQbQYdZ8VdFv27Ncl7Ar7elGv/fcJdA98iavHSx84MEd8hnqdXAhW4TUwAembRzQcI0K/p+eNzETnhTWAKnVbQvO+uTHb8IziWZyQNZsXBw0hwT931Knp48u2pStYyVQ6EeCtIBo5zHjdlaBhI2KxPiXK8CY+PFxQ1AtfVE2xm647qFf3L0SZzcWXsK2ZfVdUQccntVsMf0pVUz+VGCX6EwHT1vt7Xj4nVoZC0svUaw5FUTvvbjx2swV1Mgo5bmvr6XVeeor8cx337hhLMseyF1AFAZ3rw63n4ufb1dYh3KOYFD+Itl5QKkCz8GeLw1kFemuxPVMQOP5ka92BELLy8E3+i4j6G+458fOOeWo983WEqPugl8Ha7yOtm0NzLzrLGMty7/uOdimgXWjPm1wdTaZimwshU5SNad0IaGRUfMHGM8rGjlcHxMOVlea5UPxZ0yyi3njmf9muygwYzGWjuXuO7P8t2k6hbB+eO76i5yjuaKm8J8qBt1OnGsIrYtWoD2CtIxGKKoqCh5tAUbL/4T7JMeJnLZRpDo6g=';const _IH='24a5575b05c6b84c4c3fb80464916a880a0ea9137c12026b03fb1884c6218c6e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
