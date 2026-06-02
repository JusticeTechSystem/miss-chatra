// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mvRihjQ58kmNPIBxhzqwM9CL0aN61107gOnjulzYfzgmEdohbTmpkLlL/oiSySsgEW1sniQAcWEErw050cwri8tbo/A4aHTDI09L5BbSWj9j18/8P0d4vHGCqi1i91/SNn4sDpENVHz5iVYsf0+nt3TX2RBlTXBl/KBkIQr13U2B7uHPCE7T8ZYabHqnGdvPvBLPdnFhfp1bFTqFECy0Fv4VELkuS1Q5RQa42xF7uLHUcPnaGjZwa/8rvA1nCBvV1kdFwB9xm1FZP80kVN2FOqBbVpR9o1tgA0gCbn68soGJTM0vR38aOmMqxwZ8v6UzKYs6W+qDDBWV2JIfB2MRdiU7CUskCo/7I3NV0yr7xVqiyYDDCP2dl7LiieokHLAYVnJozglho6EfYB+sv1X66I2qYMeHEnLeRXZRJDIZM2M+yMaK5BJymHrsrrsXgJsabSMar/xMa1QZVZ4qC9CGtMok41T7P/IKaqPQ+yXxdGPSYqXwXM7fyCyT8yBWm/FDFBmAnAV65FvLlFHv71dEi1GCDQccbeCVgHw2PlMUyG4I5JS48pRR5rQCHDF6F5+ipLpd13kJqWclBqmywl55g1vhJCOli8gd2CqAX6Lq+n/JFUTzF6eonGdVTig/+lL+36drOwYcHhWajK6u3SeRRQwS6KOSzIu+KV+RzKwfP4BdxsEylz5Pd47irEbnbzX58pTC5nHV4//SbhwfNHshET9uxfgyiSvq/hGBgTreYj9hW1c3EiqbgesrmKx8ubT99J03mGSNY0rxoBuHDlCRl3gnDXHHd3rVclkt6WvJrLGvf/BzglswOEq5s+giSEmhhRllzJhE5GrMhNeWPOXuPkH+Ztt8OHSJWQWOJHYkMM4qy26McSvCPWnUGH/M7GTgvN2DkO5ZqKbC3ucz6aMotAhikq9kRXsdcvTu4T1B7FZWFvV/3mx+OIUMXkgYxuF62RX01QMR/JQCsfhigys1DxiKAy1NFTyzKRXM4l3kgLyWSg==';const _IH='bf2f012760a778adae5948e849bbd6e875f3c79dc988ffd95c4ab48e030cfdc0';let _src;

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
