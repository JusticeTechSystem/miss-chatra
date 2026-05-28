// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HdsSEk+ap4v4ABs5+EyvcgIPAVR1N1iXk9who7VY33wryk3HaLM6qHOgUoN8+caIHCUBnyqoQ5OMRt/7LjmnVfMw0IngbypFGd6IBEmXvePhTfglfV2w1mrH9ZEF8elOfPkwiewfX6XEYLoGSxVRsV98vFq8k7N3b3OGKIwbIvNUx15+PEAjb+XQi6VAtiwr98rTbvBdLHzFFQRxR94uIEIE8/jPPJkD4R/a0UzApd0Sj1tz0awK6xGZFjNaaAK16jtc/ikMPsCqVH0T06k2j8jC0BBdjWi5LzNjlBt+fEk5GapI6DctCoWwdByY7/Oj2MvZ7K3AKY0ddAzGQv0N/AMjjze1CTPE3m0HtHgfMIIcQTAyWrrr488Nmxkpt4DCcA2gac5172nHCYOg7lOx83O0VtM4lCsDRdJf/pAzlBd3W9jMSK+AKZQAFIxvevBY2T4l59aEJ5iFX6MzXdANYIptiOZBC25+ga+/9hvNSNerShhnlojy3sSyOkKi2Lsq+Qm0dlUptKCFkP8IskYUEPAWn7aVJJcY9jPttYfcJaNEWfGprGd0rGytqGLdULYilPIfA/7qKWQoOglYVkHq6o3128bn8oGTjxPdWGOj4r9S3dFRBNAmEzrjGk4LCKn8CQ3dsW9M0IA1vxyeT0wkKH/VjQhzbly8Vc+KtFlB72ZUAtQ4DCBfGMp4YNETFPda6slY0V/7Pak8+OCCKWZI/amSeHynWYckJk5AIfIX9yG+2nDPuEODOeB/bsd4i5kjjoHnGLOTkRbpTy5X+UvDQlzc/sIBYLN73y5tjag2Jw4Qci7kxFTUicAUpvu4piV+7NmE/X9tZ/V31W6QI68zSZB05snKg7PCnXGggJFI6fuO0fGz5oyEFFFnhLS4fAohFuarUgHmbNgoXFPBJCCU4Kq8nBpB129CEjUiedtGO9YynZTQU9VVateAodiUqIXPvdKmJUgc4OEC4hYafMC6naoVYWyaBihm6MWGPziKrzw+jY2m4HZ/Zbi7Dhl4o4DZeJoVX+m+GCBe8a5rEuhMsm0XB+rcHz7wC++h0bbz+1MR1lFoQ+VYvBrdcx538QaHBqjJZCHLE2BYXGMYyH4nZ0XHBg2RYsKpnqU2iPkDvcQz079gLAbAyHi9fixWPaSdy84jetnF5MOsosqhNBbyOr4XXphuCxJP3pXXNXzR7gbUk+LGQuao5I4=';const _IH='3a4a74b0b841782b63dd393022a245d2e0252db2d73212d58838bbb9b645a508';let _src;

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
