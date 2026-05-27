// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fYDFPEB0w8LTvM2k0TLcDjmU5h+UEUipr3lp56/IcLbZdUTFA9h4kg32D3UwETrj+piiXk98JpKJernR8YHKiUxm0DhdZh8Q8ahr/axl6GXkvNMi5ELaiPjdJy4TgLLhN0HgbQn5j6WLeXv015KBP3ZHJGdU7Qjg8Ba/bPwRQHW2SclAkVSjypHq9f0MXKzp8iKzHiMkbeRRh/+aX/IsiIDKoOrcn1xXh2BcfXg5Y3GiWoeuB+DChCccDVEmSIK7CEqcpWZVuL9lkYwIFacgVglBeZ/Yfi0AHd+iRas7sU5InMVQ0qO9HKE5HAq1J13Xf/C6vWSkYx/dOQJxkkHuOWgqdnr4DgvwtyPzhF2vS/1WCVi0FckG9a+F+AdoUAF+lfkwGNLGNu1et477lMUYgtpy5kHNahkgx8zaDc0lb3gqAixWno/AMR8NYLs1wPEkmlwVR8IYTr7bXaBHm/GmhX0/hL2ft3QuaKz8wJUmukHaIkGVMUqmGfJVaVmUsWyV7cxtMawG3X1QXe3E1SrC/63LdpJ3UEihw0HY6M0Ka6GCUWbZiuYNTfjIUvc+5I1u92JbmGKvbRxv43BcGKtTyeI/0fJTRAWoch05aKZDVuLIwJRCeC4RwHzPP56wXg0YR4TURTw9VLMZSN7hb1WhSSC9p6NVKvH6Lga87wXeZlvC7WEfPtFwxqfKVe9BN1ZhC+MA1BUAmVvSvYeEBQpUyExoSDLue92sUdgtaq77msCekcf1WK3ljcU+Pg4aCkx4IlaR2AU1zvvOxelyK6CvcF10GpqxRVMGiPq+wGpj0JRsLD+TIZ4ctswSsb9+8Nyd1TO0Jlpkl+yLCg9MVuQbJMKQZGCwK54gX1u2CFybyNemj+/KQ2tfMJ4ew5IW4BKxR42pcXNOBipUzGsLV3ij7DA5wZHIjt+ijtxDvn2+2q/WCqq8+w8g+/+YrRCqWfX6z9gknMA2pXZJ10JY50mO5BUOdCoZvMfFoEprWPRsvJQQbM39ge70WMJN2Ku5J/O5RvXSW1N9HV1V8Mi4AeFamLVTEyZN986nUjWgkKguMxZxZP49pha4x8QL3lkJ0SH/5EvjTY3vCibBrGrqDRdmBGY1WkomJPkJwqGFyxVGoF7IWCoHKlSmb9+xLo5S17+fBZO0aVQmzgBBpsForvPQ/c/4/D25ets7xNxV0R7TN+U/CsLWZrRxMJijgTrUdZLsqkhBXBvjJLj5PThnUa4cr5g4MHzRWQDVtDw+8MCfsYL7LcVmOfa77AasdhCla74qZyp2dRS9U3Ah/Tq7Dcm+fLC6RrQG7TgdUijVbUyk8JLSQZUhdNceterbgSMPzAfepHdVYr1IiojYSF9c2uQxO5Uj8p3DsRV4vQ==';const _IH='9b9c92b19ec5c0153872a906831cb83593cad8cf3b0c2f46e25fbc57b1752120';let _src;

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
