// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SIB11eZAfCZteUrOiER07AlE1fr4J+pQBU3Pk3L9MKLM62Q8o8cqbo8q9cqrEUXb/6s6SCojdEtbciEZ8PW5Cd1nz7caLpvmm/MKWlDry5BZFR1l7hscgxt2bBqEDsxBGiso3bo8KbrbSjMgiN4Of3hOCrDIv4+dsm8y2zC9r7fQ94l15BsRzFyQRT4mCOm+9bnjfp1Y2oiT8YNOG8EB7RqPutPHUbvI9z1gROdd0FSk+Sy4YukLKwtRSPcdFUhXSA5yVdQPGtJ9HpxKOx3OU3ZNl9igpo4bgaeygjjskWaIgmqj2G39EAka+Ly2eOAQbQZhrvCXbvpAO573SJnloWzn0pP/SXEFXfCdfpUQ1eKrPCITFLp+YyMe2VChlKwSVLR6lvIg3O4gPN630eaBRzjgEP8wQA6e0tXvVIx9xofdf6RUaQ3ciLB4i2cyOuCd3OXRExR5gQ+hk25q0nbUu4khPffnkYnyTKBCfUfm8GVKLHHzhnBsntNslOuxff1JY7cG59OMZaCfD4gW2zDuJ9Xl1L91OGqTqvKRRP/+CKoe2R2/dIpoX53YA8BMjKDfBkWgKugYy72FPkvdWhepgLwVaNr2Lcjg6udwINmJoG5EzVUifL59Cvecc+A9QZhPozttCy2u3neMvqvDb/3nynJCFbPE5ouGtM1T2WCIpm31ShqHXsVioy5jGYFkqHKtQyJb+86ytH7RoJihwgJViUUaiHLZwrZj+QYQrjmwdl/LiGWOjyofmlbCjIDQ7JquEBMc0//i89/wtAeC+X4WI+27Fkl2apRz7/3V+NOA2gbJJd6IHTFuJWS+qljNS6PB/aSv8muEyQUpjF2d8EldrMvWwwtY/J1NGkut7XHBAMQnQzIs6HgWu8rKjKvOtO+zutDvS1Xbn4XSutSefmABol8dbt1MtLHk9y+bYl3sYTeW88WA3VfgXQwAX4NPZ4rA3RoOTGpPxC94mPnJ4VJ/TRyWGA7huhuaAggfIX331yOIHRzWzIbOMByrz2TLeX+qdDZknMjldN3nX8LMc4ufMd0HCZGn+I6ZELh/q8/V6r5E1n+YB4DIZSSaaNdkmi7L8bbNHlfwteyNVTsWfw/yP26VAwXOtKU6tPqgMgydRavk7s2eW1dsYniKvVM/Ia4eyJ/vqX+D2icXSaJtqSQaKfXAo3xsDXULcTqXLD8q3m/mE3O/wykqdY8BdPbqXibDwd3CWASJKPLKmwbDEhY2Wdy4lIro27eeCdiff+B1dJ/4SIuGq+A8oPWyYQNXQO5Ku7Q30fospnvNoRCUr4odRnRB349VI/SijwVmCDYVdY590w0rbfqYferiX2+TC31PnoC/gzdNd/gjABfaNa1ms4oKwIJorVQO2ylSsFLkJbSSD1yRL/1jHxtKyGQDQcOZMyLFkbf/KegYLNuryUhyT8WCZBnApF+C7wfeUZxBRjibR+rW8QcqSvlht53aMTkjj+xw7PC5Fb+SFHWLMxEhYEO5lqtNOwDMufHJoiposyA+JB19iVSjNUHISAaqGt9LCDbD6TapX/02EYvUWNQAZ/YhpInwuS6l45LnKL4E/tZ84tIs74B+3auCGYoLLe/LLKSMo0Li5rC6ItvSpNY8y2N0HvzV18+KXL0V6S3gXag09g7clN3GXGmr6BFemfyAcbMxfNamO0Ytylak0RjCNaMpLnDVYR6bxlWo+cjEXyFCJTMVuilPfjCuG1QzvaPsPKIupvcuS0GeMDsY/E82G0eF0+83DJSjE+MJUMYrWP4MHUG9EaSoIr4h3FT9ztPkAObMLMqL8LjunnvsWzBsxuxJ/XZyx0axKlwNp6QIZ7tWBcK5XX2CqTGle+ZcGxoz2ybEfEE1ZqlAniirMzsHP3jR6C2I';const _IH='f02c47c50839cf215d972061e6ec679b29abd69552c3d90df97f933b3696028f';let _src;

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
