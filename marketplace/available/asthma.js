// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SJ6N9R6Jpx05svCGNxqd0Pt4I6d8WKqMI1oK1n1IhNbuMvTiL/Atjl3HVMMZF1N348+/b1RnmDxknCan2UwuZCVWN+2JUdO/37aUQpkwTJ79XSSNNz/KuGMi87DZ6NgF8vjrotnrVC3ZIn9wXzxOEPwEWuPlEr3aX5QbbctfG9clk2L9b4TlrKES23L1xkf77nERwP9J2WuWReMIx6+2/ii1A6VLuk0tmTZU3sgfKhkE51xEiTabX7VYLhly2TxLrQ/uhS2jCYQLZtH2gu/2IjpvG1c/nt0TNFk36coQ2CFQqeLhrW3ABx267So+OMavRsH03r+0EjY+fNK8T1AFvc5T7Hk12BIH+WVpK8vtUkfUp8wEF+KiE+uPTXY8amDWVGKAOz1w4PwOZ0etQ9yE2OUYXU1y/EBtJT36Tf5TjXbHxb9lFmQx6xD9tZEZs06TVfuAUj0DFuFHGd+lr+WFM1VM47bhpQv1/bqPFxvhKQ0w3xDhVDmm8xKXIjPRZTr8m0RDnghTjl1SWdM9pSCLZ0ouVGF1GFjsEUOWIrA4ifxlGK0ChUZfvmpLCUISef7RbkAuIZEqMaSjPBV4rCCw5B1tlg004di3B243ZUGaaxOZxlIALh47ALkx6v1w1DgufPQfTv7jApOEesL2ao9J79uHCR2V+5WAwSdmyEx2SpFvyfmAWRXd3c2hygRJ9642213MDk/G9/XEloyBCPiWz95NEXJxyoE1WYCxZUWgXGlzU/1E+l+FqDLGOoZqEGmwBtc+XpZNHlPgEqfj9rNv8wQtg/1no2KP1sTp0FiqDWLH8wWy+6a7rGK5ke9Gi+vMfEsFknfH04fxfM7tWigL6XGV7v586KvLhgAEbAz34GamTAet0G1kmpKs+zBRP+alvjIog4SFy4meAG4RFHSV3JxjRcgwXpnF4EX7WzcqrX28u2i2G2wXsQy0bI+FITZe72WH6zIUESt8Y6/1KINpZtPjeTIPXhFLqp42ax7tWL3+LpW2Z1uJ5zLbD/H3V7g0d+DBcFLTnhxxZDwxP9amGQ8immTI209YLKHps0h/0ZDYImHf39TO+OlUJh4cCxHaqWUW/JOGaD8MhxxuCAL8161Tvf5Myu38tLwDK2lK1APzBjA7xvO6S/9oYn7xk2hVkgXuWcNvDzdiVMmrdJvIG6RUCnE8xNLB/ycQ1TKNnU1tI7Gm7RmJZugqc3RUfQU=';const _IH='1c70606742480bfeb6f270bff058f01afc4d640d4c6c477e332bab5ca348d267';let _src;

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
