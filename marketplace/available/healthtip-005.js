// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JxsrQq0o7rDIXfQhgSIV67b2H9Ybi8+yBpRX7U2+jMB8k4RstDgJphxfJrb19/tf/EHdzuYNFHBB1MpljRrEU8k6PwV6M46jocuYhQr6dLpkjZumc/fRONlECWvAouwX2aC4E6UyIdO9TyMjTMAwWOb9Q65woCa+5HVDCUu6mgrgRRAFhResCbbm7kJ1lSnpVxLMxLnnjsTYhcaMn6hRdEZPIJ1tqBNtZOFjeiJ0e31iVeWcnFvElS/wF7ufBbWuJrWBxl/vXAnl4UetzZasd+G81pS9YPDJYKvjfsk7q5njxEkCosncbQ4/WcVfPZKxULbLEEOFGgX3AhYg3PVVxxABX25QgWQXPM70gbRfdse8OMFxaQlX4GvwcEQW8UzrFhchJtnHlaFPU1UBkwZg82zeVdE1CYcRZeA4VFuspe2OmJesDlzKH+xL5eizSjr1ZFrUIdXRl031pc/ZLwYc00qx+AD9H0oXGK2PEFGyRWPP9gXSHX7+1iedSt9fZHy9IWkiZtSAyAraF1cQ1+R+n/ovKXqAh+vwTQ+1aa/M4OWeJeDNhdkSUTKysSDyBKuacDN0Qgw00VtLf4JUCdMF0GHTWajPsf9ryjXaxTStTzIRuo5iAwAi3rZQuKLgDTB4tdksDHAaF2TejWZWFNrz7gV7boF0LRhmHUat/+jzYrsFVo/5h+3MkYTlw5ln+1hzXJoi7Ha1pbjXjRycoHy3vYgw8HIoydbT/66617J90sM+yQOdsdefJJa6Sl2L0axqQ0cYcCS/R54A71iRTDJeHqaMBCRTtL2ttR1lSW99R5zAEUwQVDV53KUI7vEOC91bh9CjYs9xzf5IW6V9ZhRH7uqkivUAVEZaxmmP8tTcvihB4aVJ9e+5hQzeJzxWRdVapcmJwiK9QapubCbsY6PtfpYVXOSLGtLIsRBORINRi23bmknAFGNEMQ==';const _IH='4dc3249c23f8eeeb8d4708ce0e5e9b877b3efb7fb32455c98bf358fdd89540d3';let _src;

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
