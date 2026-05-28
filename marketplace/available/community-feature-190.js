// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0doAIG8jJZQMo6AFbyqRYqdGUFnagH0sQhSpaLylTwWbmXDYPi2y7iqMGeDJ8pKp72eoc4KE3410zkCEswheZcDQ414GqorHFZq6TlXYfNfTKCxAqYO3y12c8+2kIEo4pmnWjJOyoaRI/wbPhinMWGKoqaky3nX3cEcmubyDc0NEfJlCe0Yuv/97InTG6yITT1ltDRws9xkkK5dhfFl5O+mO7OWAG9uyRDLE7B9oPYtYPqJxW2k7hBsSh92XA+EMNB1fpY/iHu64s8t8QF2jsJA1S3WaeRCRrk42AVis/7IJCIEtbpkTMgYzRl4TmSwMs7cvxmIUsnHI/bgi7d4o4cBLW/NBqbs/F2tQ2Nu54lnsdCEahsQTehVWBfdJ80QOD4y+9Y1tAfYuHsuimeBnNyIYbJ4GIPhprUHdq1Z6B5sR3I/Tcz0z55wTzXgIQZY/ZjV/QOv/uV2KNwHZSL2iX7x6Xlb0OQFpu0wd8hqeTmRgDP0TOHNeXRPZcue5GH+dMwTM32O5mJxrKBP+Dql4hR+cIG61mcvY6kDPVnm5s7oK2IFCZJ6NSYPE5jXGZ9JXBFn10YM2jc+WhF1OHJQDup727DY/V0IJBGs9+I1iBY0kaa8Ocd0gs0PgF2QxQ0yWj1HmcP2oQpMJkyv+kVsBtpOe2gPx0x0rS2ptGymYYB8qoHwqQ72MMIpMhutfnrcBRUrPIQRK0Fr7FANFC3D2KVDxzo1uj+uS7Z58+/qiteEtj5+HWkfefv5d';const _IH='90b9bf9a10e9a222a1e920353ca18a143841a59441a9920860d6afb3e8b9c90c';let _src;

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
