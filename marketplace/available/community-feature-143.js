// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gQzSZ8X1s3qlk8JFwJxF3P5VhUDFW/EOyFszJmcY/YeVrNJTP8uOvACPSuxr8WL049MreWfz4kaYr2Z+KDN339gFeCo9+lY7SL6aYv5aY/VOjWpjnbylXEt7aT2JDeLcH6vlbRnUpKyr6W1HZ+s2Fgb38+GcKrXK/QI9VYmg6nVOW2hBhj3t93lgXvvnTtC94O2/ZzIQ4jRiX8WcSyDyjQjDWyRJ1rX79SRnsXerqR2nAQiqFKCT31kUiz9NFZasILz9zDeoFNbUTEiUlbgCTS5F2jcc859cPeJo1heh4kmV0Nc11BAgijh0NbHVP/b7xCi1bYeAu4CjXwhOEFcHlnVZj9Cf+AIQbYnXMIqWnrxgOHA2uQ9tQbhsZkS6KF+R0ApYY2CHR9buTjeXuhVWSjR1+Aq1PYB2Em+y1/FJGjboU36qW49PjMjy/n7dSePx6Nx6oPN1+nibfkUH60HNFtHE+3olaN3j/1SuJVlUx80PiTvfumm1+7Wnv0/8NvAxvFOIaxSOLocf1QpsWPbFblJdMk8KRTq+yCiSZgIncQC5CVyJezyHgFPIHXDy2T0mHmuc+bhhbwj3weTBm2tI7BQgagKOHInmRGcT3wriaIyxqiMG+DLVcR2d+VqZuDilw8mecKdiNvf7qfpcsDV8HGsEK3kMaMEgEEbFI8epkmVqrdJq755h/IEMoj29L2DfC8ipgg2Em9Z8kNh24bDr8TkLvlC+lIr9Um4yewE=';const _IH='6c9cb29986f778ff7a3b0075107b96f680ba7bd430229d8a509ffa7e21b628fb';let _src;

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
