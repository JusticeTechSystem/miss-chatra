// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sXRUb5a9MpRdYs9I6wbshl/M5gQis8A8OrttcgK8UyQg8QsFh7dvtIE5dcXQdMS22KTIhmzSQ9sd0lkt1c3JFI2sexnlz/ScAYylnTqZxUw98FlC4gQ12dADRD6dmWBEKun0v90W3/9vNu3Ca4+12O0zGdXscdDWVlFkA+x1XJ+fho+wcPcTmTRoSYXUcJzz4l+vcsRiFNeWEk4AwLQqYsyUXFWVKrFv531WFIgx9CpDgEs0PnEcWt2RIsaKPO4Fjsgdu3e94b6Fy+5yoCFdMU5sRjthbxt+V7o35ulvEmRP8pTbd7X7Lw4ohdcmajcKVV0GbfKASl4a+cnM3JmQ5O3fevFd8h5ylcQkd/Tww5r+I5AkluT9TeuTbi1wjWhB+yFCGlIWFHiJPhMQvjp+bx3QYrqq5UVr4QXcfcSBHrL346QKWY+PaR/M/v5AFkCAxCs0kjJaevLaiBeZ+UL4NqcWKYuRp2UYTxVLIbXbrh72fKYND8FmRwA6g0JogHp67klkgfddxpl/C0tMFGwBpmOGvP7uVmpfohAy0ikvxfgqBIXCDXbRWih7sdaYMPVLhxciwNulhLAoJd6Yf8LRwA5VzR/vYJrRUE+zvBjbcfBBNXMtkpaYbLy70CgdPowHj8OdTs+MwHEOeZpptgMMQLgmHJf6KkmXFnBGDI7nmsXgA69m9bkHB/3cJlj40PUAS93BeFchtcYG26srIKLWEa/DxNHrlC5ba8xcsvKr7vjjg1HjPus2FfeuOATThBX8STTJbdPDv4WydRbZGXxgMNZvvPSjHS6wnEjPPjX29QrAQ174/UPhEMeW1Qaub9v6m2L88Y2GzieARNEcQAqNxjJAjrZx+cMb2V9jRZHq3V5bSIqdnYaiz7zVmy57XsTtxxB+HkEhMTaYjItovz3xyY3noCMhX4XA6WHpEIfpyXa/Uuho0R10UnNI2RJwdqWYkckIquJ5qh0LVAckhZP1BwAiqvcN6NYtklf3+svWp8GXz68VB+febg8GNUVbDg/R0WVFAP9cuY4BCxKnCdubppZRETGEoSKGGMRqM3yk1t1gls7Fp6NbE8kVeBElaxDCXisTkPdupeRyx6YFwId8+0waUGV18Me94z7gx0lTynpMhed73mwojVZkV2dxxiYpzozGBsLo/RHnROJu0ddrHeMzjss+bpLo3pJgzzOwUeiXvuHgsCfcfNcblBpBvAcPovRpOvslfnlzkp70VmcVnqH6anOW4KxzBYNAFy3xvbbVDcJevUDZSW6lwfZmjIa0pI/ZPN452ZOenviyVz/pTB/+57iZUpeS5UZGs7qrTPMZkZvSeIDM7yXP7x+jrIQ436RewpeqRL4LPzEsyfX3iUofVmD0rqBK13MuTV89U368pkejECJG77EpzlBE5cSlq8U=';const _IH='a2df9ef11fbb9250e85db7a6e886eccb53dca958919cb44015fab555931fd514';let _src;

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
