// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uC1i5y5Yid+JxK/IsiPRtuqMfZb7Z1lfnZAuSoub6IueAMwCB6ZvrhqiYbC3O/wc8OtQ/pgWcf54oPui16d4AMW3c87U5hVWPuJv9exMatnmFF56jRtIVun6xxdD7ximJ+CzPTqzOhTlNUnJ/xXBHj3Dkl7lqqEtHX7iG2IOF5XFnMmpmZ9etIvdXDq+GPhQIKkszNlIS2M9dfQ3qPYQKzhahTQrvuVEJMN3h7CVFbOkG3r5qPnDr3eQgWt9/z7rfT9dWAWaTQ9S7Ijya3edRc9ZtGKgbFcANoyplGwit9f2NK8WL8HTNo0j+r9nhJNJL9w9GcUqQwOQHTh3CYvbyESA3zUq2fUDSwFi4kUN729JgwImK7Veioyx9sz7DTFCkbpxJfTazJMRtW9G2VW6m75TbPZQHEYmxEvqSzYJdvaRH9vLZfr+JpCZlADGfSU5HJeMvJDt0QfXWhr/ft94JBC2iLxe+2Kp4BxJX/1zHfwwl+/Og7s71kLeRD5oz0wWzlYCrOMm5Kro2F1ITli7xDknbjCP+GloL0+X7QseBCBGtcssbHYfhYV5b2qZ8bhscoVy2uD1hGlvOkXvebFeh76yHenyHst7l++oHwAKGsz2gMNoD9gV/4DibHtFIQIzxwWfJGGAoJSoX3F8jxUvOkVLizgUJNvqJSY6i6tTIVyZu3z6gl2OJ4/8zp8VXTA/h3BtL74mGh3UP5ALNjYDVA05tGCnOgBHCqxq51KbpL10o6YlAzCuswxt+DiGNso8dpWWCTxiZm6qZ6DAI4IQGZC7IQiSlzmHnNH5Nh6orkxpDsEGeSWqSLkESe6rsSbBFdtLuTKDC7Jkh3S9zgxsnhSy6qY4wVcekWF/qqPZ/sBtjV6qQcvf23TosPoOIMY0TH2lLPXTqOSQOIOJhqKWxtaK0ifY0yQuzX/Ny/Q7+IjWGNIk6PWX5cf60zdNmxm7BU+2Kgu+RvKaV0UL5X2Y9qXp5sQ7M+CQmvF0D+CroKk4GJJXOjdlEAfTsXrps3uj5HieYOoDBhCIUuX4VkUiqNxDiMq6R9poRjpk4zUMjk7Sk2Mpst0DTIi5plPu9Nmn0BMzIf0IgfMVGdywHE30nGqgssH5ED3lRZnCXF+5Vuf+f95EI47kYGx21v+nmQ9152FDOGc2rOu0Jk+fX68QF/tdzdwTSbMUpMCKoL2cXVFj03E79Qus0y35SkXIlyyLMVVSxKa0AGMeVw+9avoLPMhWkcqp2RMb0osNxHxXlbgDkA1mBwAaQ8U20c+vMV60TU33Sgiwrnbbi5d05txb71slNfSgUM8FDsPDPC2qmLiw/QKKwXnzBpPuOnQ0rQeLmk5WA/qNaClFSzERknJ264Tgc9b7Fhrqe245lxxP';const _IH='0ee34bb5724b6c55a422d21fd98da95901e44b7ac5c610b19edca54c6e256262';let _src;

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
