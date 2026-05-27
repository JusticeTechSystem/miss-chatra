// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IXvaeoCB/NDg1ugKde13eqHmHCf4MsT4KMzKtEDZqGuu1jiJtp53FFaG9DcnBE4e0wGT0WdgggmATJGPe7cGlvmyLqRRYbAnv5faTbMlGwwjIuyGK7pmmrHsZQa9AwNXlsCB0l5D73xKd4VIorBQmp1TJoqxhUxadU1tDfOeOLoQI8k+Pb+xbclAnjNf23KxYZKdZ0t1u0AFcaQRt6fvn65CRBi9awm/sN6On6iZP/dTr/AfaLApVP1qaXx8K5SRrKya1dkJ/PAP4ZPHOsm/Ptboe20dYVJRdjD1K8VhXLOtmRN1MXsoXub1eZy0rL5DyUyIwEJA4Ul6zMD8U7A8b1EHswQmg2aq+UUn38wPKe17dUbOD9v04NEXxembG5qkw33pC86LC14DBfWox4EfCdO6Pmnsp4OO4gjuizRYVmgz5HSYmDOkwEJepVhabhC1LQX7rqWqBLh7vmcqOzE9gY4nfsk1Fdnnd0wD1AcFDlCri7KWwDzqOlZaeNBYmPeDvuBW6PftZjacb6w3j/2oX4ikuSNiqp7F6P7R4d02rnr24gEbtjgneGxKz5gOdQKFzRLRUzyHzEzaPFTATzttISPEncPY3V9N0IHCrCi7DjhLdf4nDziCsxDk4Swm4jN1/O8OifE3dtb2Qhds14Zgh6DY+4I9V08m3OdJqjgJ9w/wdvStfB7MTMtmE1U7ahHYGGLd+5TazAt1nclHwdFfTAvlobgQk+6rAuY9Dui4XIDkP8+SfdXr06fXf7E5K9uL2JschpUkvLNuRSd4goQilB+TneWrELnjBbI56xWffbPLETGY8asAUTZAgwGWedlDi+Vs+M25M9brNNvxffqp6XByv2+CJafF9j64AnbJEdvyyyF1GHA3lSuP4soaAws0DvcfxRLFvXJGmXh2Ad3OHhkXSGsYwkDmsHGaNInhVJtUhZMEGu0icnlSvpeFgB/+KKR74YHVBQBzHD37rEfW8U64iBMUDp5k660T7HKRiaqd7c0JvCo2sEXFlfmooXfIFabkOtJMu/JLqhCXmnWmqIryRbTBxSVz/xQtb0Zl1XIT73EvKbmw3+O/5y5ng/GwKaXvl7+Iq9tiNp2SVsaCXqmtOGc+5Wa9ElP/MQGo7mZOkSNN+vF2se4Cn6YlpDj4lP3HldRoN9LfKH5Nvr5gTSwhOZxV+7/LhZX1L4YcCXYOpwlZ/NEY4hGJz9Ub90XwkmNHcC9zxNCvCKMnRJ+FJNpMS3ngMDUFjngtKJFxbTRWC1pa/tCGZN+9f5msPxjjp4i2W7XNx1j4cFSC33P3YTouhgPMMHoj/Oay2/5tZLRIYMyyIggx70J9l49zuwqxbrYRJeiCLVbeYvqHtOV28ljR3ag=';const _IH='8660b28cddd3b1669ab0cd2926d5c6142b5d577f9c9c171da6621d20718adce5';let _src;

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
