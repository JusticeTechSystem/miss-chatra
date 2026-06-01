// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+g05HmvzM5EfFw9ljO6zUbPioiK2h6NF5OJpC+Ia7d+ykZyvfJbc60zKbXXvTR0LFLx/pU8XCac6fHl6pc8fjAamXcJgHusAb3iLS17LoPxJEXGzmTalVqc93BMwK3ATHvbyMXKI5zrWICorzIXX3XAuiK1v6qwWnPrlKGL6J7bYBxzpqP8mvvfzDBgQql5HY1FmtDLEHd4Vwrw1Px69DdzdrW9vszbMw5YDmjzhMkkeRjbIXE8n7Ne3lg9BS2FAkqKudE0K6qf6cXeDG0a0BHtqUeZnIRgXrF/KbPJDP4uiUVk0RexJ+SEA6wSdE3AqJ8KzVA1kAVe6BShs7Eys0hUs/mEOQ+oRVgMYdNV4Me5HvCivx6Dvp4/gLN0tUQFOi/di5JTb+9KyrfPzPzpqCNmXwsdS1ZWSCyhlYPQ3JObvLeAiymsi/sZKU0iE+Gl0vYNJ0nWspUJndd5ZSm8OJhdOw6xd/OF8Feu8kZp1xoDUvDDQfLMfb7j4N/WNIzI6iRf9b0MNzo3VKsiCv/fYxbGrEWWN6+mB0zpCh0L68O8FRQqwBFM28siJLMF1kVMFboMfpE9iKhYXYjo8l6un6+o5ynpESxX+SVR6kEcu5oObI1GXxdwL/sRT3Y26lA0haQqE2moTFAubD0SCaimQXqSjktkm0PbvhubwcCOcpGsca1/IhN1+F6o7S/OFabiM5xGJV8f8urDApU0O214v047okuUyk9a/uCKSwmS7LLAK9aMDor/Vjeo4cusu6dZNKLJ9EzGrO9lbu0p6nvTvfBgoqBR0O7rfhler6ukQvHBB58pGv+BqHHQeHaLPprl5NL8vJB2w/9Bxr9NnACetn1cckDr/V9zhntBQRvjSsn3lpnLYos4Eo9kuDkKLvi/zkBYKD64RJW5H57fhOL64pjNV/4lkgq4vyZTsZ74Cthoagbc1TJ5w5CbpZYLKS36Xw1vzFE2wko+/caSgSefFAEEhx9E9h5bue4YllhaRoOCYu2kTemT1n5izVjJy8BJdNB+vqfUPoUSwM7ntyeJmhjAvIUPTD4zthx5Qpp8aGck+2t0Kum7tCL0QzsplrN+i+bMJ+rUCwF2KKCF2Lgs5flFI74+wvPAcM1EhsWNILnSRRDoSSv3mOl+OKioTaFdm33aeJSmTcMVtdxWfnos6q+/8WFvOraZwDh5a+dRLLnuNicrUKID18LhpF2mNHGbY5B14Su1tNcSHQ2iSo+z5sR94s8riDd1kfm5oHgZ79FVUs+tf1fQoPitKGKdRsXQjHqNCIXplYx+O1ummDVwW/H01FP7EEbsygximps7O15gnCj/CxURJzbRrYXnxy7TVwSdAQXmZHqJOgfb0mAc3I990+Tra/fb7fm6f6Xwh3ETSLSNBvx1VUlL7EUTb3AxUx+zoM9YsqE=';const _IH='f03c6cea8cc67d554d821068ecd5afe852cc092563402b313785fd2672f9922e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
