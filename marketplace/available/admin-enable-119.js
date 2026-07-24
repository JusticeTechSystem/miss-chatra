// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWPDiFn9J0WyXDEjldDk6lhQ7oh2PcvBRiXEsSE9BBye9BDsEwPwosj5+cLEZnwAu+YhROxosChlA1r/lhX8/VcXoMp8jMHKp5Rf8PAjvEDdw82iDCP1pvJhvq4CMIjTIrFvR1fL7lwXC/LfRAzuk2PB8fXgo0CXTh8YrrEm1zvMalvsVzIjjKYG4jWn3RdyfB1+VU6V/GOoM0FUwS38/32AiHRIIuT3JTotrZPfjUdcPpffdfWPJPq6TvJtpDMz+k1jFasrvgwlLizeffmAOEgJpA9Pkz6BqHaatiBSTF9VBWUB3g1vZBCMTlI6Ae/p7EUCyTEzhHJPSBbjN2LNNwXNgsVlY8pcpEvi2lXJqI152C5JO/NsqDmwp6cSQeYaoI1iZD/WG549pp69xzvQn8JykSSAXdlkYj1O2VzBbDTrCweoIC5ck7+wZpYzWfsfgiiM8uNqcPFna3F3g8OPeCQmO1uZ1f8ZvuBxKKaQWyBXxyjeGyoI1BL44IpmI1JzHLkKBs/3DO2vrKHPsjvhTDPLbXQiWet6x1uvpUA3NqJHYtEYvErKZI3TpSClIF7a49HJgMSAekWJH3Y7+NqArSK1KLHuLdhdCD3ktkLfFYLjuc7yrbMkzWZ3TJlmplaQrbmZHP0tUbwViExvs4TXsMKhKshxDgJWKTxxCPrXwWsk1qbTrJqgY6L9smIZWBS7zvbpVGJD6EDXCov9A1gU9eYvHypxITVDM/93x5uy2gzD1OwEccDgY2EfeQX/lrOkSxBo7MVsn4yyWIyYZpUDYJux3c6CewsOiBY3+WpG2MSTuHuj714vt6OBuTHcBvEljozPVfstuC+UwBclrZ0dzotXYnm/5cDuGnPIr6VCGUU2Wa4dXdT/3BPGIjG4QFaZh5IbgAjSpxl1OaNuieeJinRGycB+wbphT2aHVG2HONAcGFrfy8v5Sf/Zh7NY5lokswoMV657yAogsvxAUXLrBeGpGUkmR/fZ80qa80mZpHN412Vw+xq26H3NA43C+9jAeE';const _IH='0247666615cb6541ba7113ba2f612f2d36c2f535b968a20eefd389f2a33ad4be';let _src;

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
