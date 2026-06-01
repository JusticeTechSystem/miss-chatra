// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw+TUrlSlhcf9IpO6ldcP+afeo7sjLU6erxFoLESUSZpVjdU9h4PX4r/bSnA2JpVEiXGVO6fJpr1YqscCOxl6fG1stUNnMdPU7kY0nTmOvYmeLMf0LQCxL96uPl2WCw2RbxMOt9yYSVZYxXQFzAFMUJHbK+Ksds4l/DWT7x6UPguU71DeFHA05eJ/D7+1jwqGo3smXJb9PTCAvJBtJVGiXtcAQALMMRiSW3vD/cOY4DuYS2RnM5dpfFCdBEEY/iAxkmy+Qr3By0rxbkupEJYFzjiwgg2oxXc7+LZyUu5t8ab5tyaa5Mv9VHf6e4216LTTRO7BBWEKFsSylAr6QplDdF9VgXNNPZbSmFXlcPw8DNdvMlf5uFWhgMAbbFlMEp8XsAlmbyeP1FADF1Q4a3aRpaAIV5iDsK/wlU55OVYJeq/Oamolu4hxWYaIyUrPLHJlHEXUxr6j9VNTpLyas/c1GuueflWCUJ9XgZmdCCcpAZYd+ONAX8Sn0Jjf5o/Y+VyzOssMM1Jgkumv//lshv7xsTQEztUNI59Fs23iLk0HY9uOLzfdqLULHIP+wm8o1r/rc4yVadTqO3CMrh8Yad7KDerRfoUKbNWEPsjVqTdGs+kFW+Wr0yOAtUtfkJmHOOQj6BZkMyDOySDTBcZkFQHfe2P822EFT94s4+Un+VB9SslAp6gqiat0SsXEJQaWI7pwDBkKGV6Vzu9RVv9zj0h9idjh2HH7havejaqhCCHKIGJ0HctOk2vkA2vOQtgSwiiXdOm4A0Q0FW+gIw0FDLNyQE9opRN3Yalk+6XpEw0tK8/IYF8d/yDXX+U48hQmIpubMYyOni4O9p+76cWbqlBjPzVcKxxE4F/JS5PQsM4vJOVBuylfOsKfJE6CDVNoPN8+fqss1H/Re5RA9PSoSFgNcJ/mEFVmtWN8Ije5McwfqnjYuq5J1yKb2B/te3uuTZcsjV9YHtScwZGAhtH5biF6eTc2atGUjgYXZMtETs9Omyx0j3NNj+lw8HAK0lDT1WGzZh8Xo+jmIOlnMH74cBu+eqw0tEHpNk=';const _IH='a4df53af1df448ecad6ea593bee1e0236d1fd37541600666c25f38dba25d2cef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
