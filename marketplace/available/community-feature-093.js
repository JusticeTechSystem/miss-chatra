// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+fhqBdvb40ksEVtcSAGtI9ZP/ZpQjb+jlmq/bSp+043G8gRixcSa6NOdpDP+QGErHmmLUZIdtum5nx7DPkSPZ90Nxf41tAKY465f0pACsLbzY+UZYxbG6UdBquI5s8hUzSIw7ve2ZQkN09Ex0mjTrFvJC/ZxGFwpm8pSAa3/KbOB06k4XPghITlLqZ45rFcW0nPPbY2SigtC7sc9675UlFT20jk1ViQ3a6hcc+fcP3H5jjCbsvQsJb4Wy/bJ07kmc4p/rb2Bf/DCI+eVfSAJjTRuRWc4RV4LXoK1b5iFAayZFtizUUtQkmHP6TrPIWfnIeYK2idD2y4rTo7NvypsAGqIIEGraUrrockOIKT8jFniXUSKaiOdSfBYQESYMSkENckALdfZwTYUpOJjehEpyi2NMkDL76uBxyyd0eRpEsmvawBP1zDUOxKW2hLIYXm5k4eQc57KFIq88JBpvA+BaWTtH9aDT7HzzTYgTceeAWtW5ToLXEYDvOJJdU3cs2dM/7O9u6mvD3EANcbHpMM1p8ezU/H4+hIxrQ5rbWXYa2myeoLc1YjO31kSkNpoNNPUl0WbbIB1A+ztY0TS7/APlYNtACoVEs72ZzttdQYobKwXLf91JKakKMbGISet0d7Oflvzb3ArWvF8D6ETQdXBySFfk+oFfwMdal70w3k6HiGnEJjNoHf4KXfdL7l4kxlL1DvgzKbS9jzhfPydFAojBEBAM9IaIvSpew==';const _IH='818686185435a22138e8ce310ca358fee995cf3330cb236cc18736eadc464fc6';let _src;

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
