// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='omGDM4dZLq3IRJPDP8zowyGrntTQqyFIJDbr0NDifuIQhXNKq7S4SO2Hsbk0Vuxwk8u2O0aTE1juCXZ/REpKuyjKavwCoypqvu8TLtsJRb0eoo7/bi5edHyEPAjKkjip3USzFTWjc6XImLG5tElKnn4PWwB0QcR8ihOK9kaHnuAU08TgYW7rLRTt3TswaZxopNMjDaJksvh/gzt1PVLsSx1r+3dljQK1eatY8VqLc0Vicv+qz4QyuKsfcRW4EZIkTEB514uiSzTi5PpoPrkVlfj/zlRsRfutl38zvFZJ9lXtQxcaqzphjJ8sbaqVIHWTDLR8wwDMvOYa0/b12yrIIOBQyJiCHWBgQyk++s0l/bH9kPD0aBofExHjdZWcsg/dgiQGnlkO4vZTbFH2IIY1fC7PPdctFJq3+c0M2dWbxZBDUsuBb/G8G5GoBs9rBNTj+va75uT9uR9Db1TTBSIN/2JNKjRvWFmWzIGK3qRQvLFMYZfLUjGtPvvQhz7H7zpyhPVc+iokD7/ca7fhhASmfjcmJfWw4SL6nGctN/YX+bae4RFFrQeWandcS4WcPSwElZCL/YvA/vavTnGhZ9ftRI6OtfnDTGJ8FjpS9yzBOzDkDBVb1dNDDkyvMNYTEZG1kvlX/no5oIPAmnDW0MaXF/6lpkpNPiVcXGAw1chlMkGxr5rU3XXHiWbAHdFlEiTr36MWsh5JRACQ+RtLoBv7KBAIkGGXqpnaD0QrxI+t407WLp+udO52cOOTBneq0bh4xY1ThDcECQIgbqRmJQj9jLGNvafsU3/EOmazuvEcS4QilGw420xmNrOPAgKKLAS5mEOVjNkxAzjv+hdVXV7If1DvDSYVR0t3HArV2VfPsXN+5qAHuoskuj8OzVQ90Ee8zXTvJFPwzK7jytcrpxLP0H4cpe04/7peaXTqjF0stIw1zAJzH7AkZT3n9cXDkvoDwRrILV9P5AipM9bJr74Ot9ZO0ga+n3fvCDrRen5eG7+aQ26HOymzc4YlvPntBuZvENXNOWkfWtUXCH/mHUJNSnLBZTerRZflnDl84THSYVC7cipi8GRtLAUgk1iUT0nSLRmYYf7gx1KLasLpoRAYlD6O+qkMg6V76V82PFmu+tkNDV0DbTkbuehberU40Nc4Q9tAvd2UTV0eVD4hShswnB0ZqeNBWEOusEOVpkZ5temf5mQGCp4vIkdz6Bcy3w26/eYeLQzfnN9BTcUBnIYB2IBzMNGhbYvD2FNNeBYxtrELD3a/ZKik209rPLO3VRGAx7nJdI/B8FZkawN49IYsgoQgXxZnirFdBxXn+oDmexZopfjrGSNXZXgu8awgrDC8dOkTYvBwj/P4UCwjftsjFjFUgkNkERlE06mt78IucGWnYtidb95JL/oIe1i+oxbUi8ypvZP+sA==';const _IH='4de7afd286ae1a689b1cc427178bf4cc106579f19d3c7a392a08572482c29320';let _src;

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
