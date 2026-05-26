// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AehLzcYfIIQN6DjsXEOGNu2eaeF4FJzVni11fJx610DlzjC+5z/ntwqVqV18/9RP8ZI3qByeiN6Vr/7k+JYOnkBBABi8hIrKRdpNPNI4iqoJ17mSRQ8SGSTS0bYFxK32LiL39Ugq6VMXieUpdXE6H4Gj/hFCVr+TkFs+Vt2syoDQDRc3kice4eGasIcRGBHw91pp6z3hyV+YFCqO3sH63f/y92oAtWBfrwbKZhUQnM/wLYh2ACcpaxkFF7MBMOK1zmO/25vpwS7ZEkEafsrDNgtIJmVRU1NCea4R0moz612kG+cWJXWMA2R4JFSms7knBJl+wNzzMgPGx7GRcqCr7vhiuuwGHmwmwNIGk4IUPoxI/GoI0ouVSmA7+eDK0EBNL+7i+2+ZzLkqmk28aMl2Vzhl3q04Y/OHNvHxkPsIciKDO7YV1E+7D1mRK0Gp/9uIhtdhoifkmboUWcgImaFOwwBl4k40ynxpx/NWkCJ0npDuTRbQ5ICRX9V/jAxXT8SboTee33QSSLpvqMlO7NaOIEB9Y549G9dhsBtiVEzjWd6BFDwlH7Cukq5eO/jeGtHut5LXtDNUoi3FsTLXAkngfucr9I1928WD8VX2Abn77vNR+SgM6VPwecXYxR/Lmu+03MUAI6joCgGpnuznyWf9XGDzrl0J4rPblecdzaA/OwpZlwkjqBvhz7LNu0LDKkzwIoZYH02AR+GqNWB+vMwIZZxf4OFXVgqH';const _IH='c550066fc3e55df35fb1d94d7c3c5ff78d6ba8655948bcc1a7da9be4b74e0c09';let _src;

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
