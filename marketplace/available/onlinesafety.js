// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2oPc1NvjNeSwOkGVam2LpIDpuRL3GVkiYv7J1gLPYbZ0QYEEdVIqFMsfs3HCQIEdpVFBFHsIZUWRkjdQAVg91OpMvrFGGb+yNMXAid2iuM1yeufdck6hpdUJzArYM+af1a+riobxABaTs6r/wctGQJTYOWKq6dUtJP9U+f3fP5WqmpZESD3PA+mb2MPNPSkcdd+8WCrt+jisXtGTfGkYHOYVERXodrNivjU+OsSnwZgOZcwv+E+Bp/vNQifMRbymxYMCrPlr35Q7jYdbC2LebLRe0cVvDxDmbG0oEDOyUV9gCIGhVFO8nOkxN90QympguA/u2pl8MJyy2oRhZBPpB8bZ8jIlpWOBtW4ZXMGMgctQo0XwHsEUPsj/+fBYxRcQl8+dQkHd727uaQJK2OBEomdYNAO8/AxvUck6A354MnWaDUStZEAwB2u6KDzjnA2z/OGK45rbcx00/s+K/ebNeH8+av2qlwVkkDY8wq/qz6HPZbgUVbz2ySv6v8kPt8pwo25T/NHDp9mgTCnQuLazJUxjWoyv+ytjR1/Jur6pjL2MO7F+vDTrnUOFS6jS+QRtq/855+lT0fk5lnRHL4iq8vVVLBlnPngFBz369BE/8C8jrYTrAygvkZjPF+UHuZT+9gTee38zQ/vEEcAR9+C6wzwCAmPHvkSWBmGaRDvBWf0161VgrbkPOORfBNlkjNYbdoRG0kcCr5RQRz1iF68OuE1RODLWccoT0Sr84QykbtyRI33BNtTZYkxEI0aN1gDQfRAk8cPY5tmTzNbzoDc/RLy/01NaaA0Ctj0Mp8CU4Q/fFIcaIiZVSr70fdPxzzBgn60GUskbT1JZAmoZBRUSMcuuuPNv32sZFCBv9F9hQCkLZfo1sAMUgBZX184F8p288hWzX/DhBONjQccXBsf8Gl0eCYJh4+V9oTKAG1CAIEnXzveJnmyoKXoj/z9yxVVkJ9G8X+QFOIVPJZE81fEYCtwNJShfaPzeYS41Bz9aYexJrZ4jAkBMrkuhWf7AbRu4PnwSKnckoUpVMKWXtKqhu5RHb+QVZNU0Ld7rij2ypyxIH+ODQedjWt6xXLHtaCgvV9zrAPPvOrh8hTfq3ij5A2mPUUUKEevAt+qQFsydyiFVURXeaRBPL7uP6zMA2EHc/c9s1trCxdWCuFEXsQ1dFAOilUk2SOAGHJdluVni9P+7Yio+zKZMvE5W8hXJoY+6TMNbqENWssya';const _IH='2e30af7d9f8488a8370da8bfd65092198a611a2ee257e7d71eb5e9445ab92d32';let _src;

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
