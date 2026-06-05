// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='krtQ1eQfD6ITM++2M4m6zpayjIUxeLysrDtdFgTGSiUtCxp4LFmIpCmx4RHn9SoVKz34I2NlgQJS1B6wTsXzfD0CLYHsOhIM2HNjVpBDtzcl1EPpNZSTfWB1EOo72Eugff+uhbWClsbswb8EwUTOVfvIa8knf5cZtJ7oGmiKsaEnPbinSmS1yjyy+TQr49U3BpBsTbwSIcu0D26Y9ZpkPOgp52eb8jANFnbmwCe/NBU6xhYZIABzaIzWIeSfJjxXJSqUBZ54XT/IOoDJCcMnik/5H6ycWNi2z3A8oMGKXgQDNoPsrHA7DDpkRhLPOVhqSGSJzJr9mzeqVNXk/hD2SFQJGp36TgyZRGkxj5veGS1kBfXiE0MFpa+NlQBYIHhLT6R9UwlReIXrm3r2mc6KLZAyim4URbrqGzRcU+M4vva5qdcjGC2zgQq8jOtMP6UiN9KTOmkHBR5XmNd0NA7hAHoxtqqFb2viXYw7SAoImO25z2AbU2eTfRFjoT0MOGuCBrbuH7DwVgBwGs30ZVxLTRqNc4nwpKwcZvsb7lIlysjZfNh4FmarjWdPr5qz0HdC7G8dQUbYtiA2UhatvTwCcMGihLmjipjNsLROpgqKHVsqZnaTn9Y1XP99Rt7kEj6pX6fsXcqoJ7nf3yqEX2tzPVaoIDJTDqoVQeO2tTgRzhU5J3f0OtFTB1uv7j+u6xHQxYPu0m+nFssOiAwrTPgLiYf8Wfh/eA3Nsag3GnLdcmeecMN6/BXvcfktD82Za4+fVofXtTP0hvSHf7ojJpjghz0k8KrfP2lEuo/pwq9sOB72+yzfMNYovXmNxHPuXB/8DMAcRn4UC58u04fKBlLw3a38kG3M1Mclv3/dRyiTLq6g2JNd5NAw0A4TuUqzl5aa7jEtCucXH25OHyj1eAnnZuouV6jytZ+LkOCF6mcQt8gGN3P89jJH4crrilsg5umKlTAWTdVMMrUf4ZnGeZXL+nS3Rs1QUfOVKWFkDc1xqBnVWDgP7vYWeN02x8UoiyTw2/UmDwq2xTrLwqcrbnknuXJqNPtc8qHk9DnhUhoMFTzuu8/Qjfr82YtN9GtX8WSqN/o39ErdpKrBZpsOwpOj7XI6p1LOBehzW8EnlBPga2jlTeGqC9vTSyZ+GJXT5IahUOisbvlYTMtF8eg0cUI4tqBg5khJOb2D4Ukphl2Lh485V++vyK4MoaTEIjC90jbu7kIf1Yg77zU=';const _IH='e848ff9a3fb262de5ab47075ad0d1d574473cb00cf731107e83c703f8ffd8b89';let _src;

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
