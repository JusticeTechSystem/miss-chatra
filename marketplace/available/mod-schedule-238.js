// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dOnmDfx8tMiEXv3ah/tlLkc2kT1vyOqZw/8RaK8B2B4EhZKhtMvLgCe4QYKhCMVVvEifc94zqqXvEogqSZ0hYhLppOsVBZXrLC1IrZBMu3Eu4qSIC6qmeWENTQ76WcQ42VedUX+e3TPFcYqeeADq9JRm/kB9RCaGkYWOJPWGKy0C6DV42a6/OqF5z+9XcHdpoeHGbmixVNN9MwGOKZmeh1dQKk2wRjIigjjl1qNRukJa5DhDU+MWCO7+entwk63RD2h7LcFLnszfUaMhx+mxjDhmD5u8iaLL9imqKUuQ05DIfTa6wBG/svpEs0UG1W7r/w9aKMtUMIfwsDUEJFJ81joNs9cRTrXD2wcOHfFh/Y/B4ozkcY670K2btjkG7EyphFwT38YXrw+vpD3PXBQ0Xy3R64HKfu+n2Ne3mAHo7wMjDb2LH0fcTdPIb8SSm3uEfz/vof9tTZiL/F89QQc4mUHcawv5wSYqy3/DTt91G37bED/UdtU84i7NeeOIcpLe4uQ3s4L0g4fFOkeAtDA4GE2jiltBkz2UbBmO9PWPpB0+M5BWv91ynLHKfaK3pl2ir3URo/2zToJUA3yhPBypc8YsFCiWd2Cp1dWWkEWXQV2dDd6csNYuf8MBYmUnf2JJSfzOqSekfSGnDh0zvlwSgXVB1YRJRqSIRWizkIRWbipXbfqyyVXTKHWClvXc5PaO1udRPf3umZcYKry8PMi9/YiHfu9xm5BVzdzU0EIW3hpIWOp0Irag58mwPMtj4gYS7/bnyI8Ty+80QpmCCP/E2/bqNWJcrOU2Epz5PoElNxZdSMvy3DYTecEALzlriCTyuPl93oHxXFASkVu3yD5GBU/HJxQcJIBIbpbx0xktuqoOgon2MZYVOdS2o6bIGWmzeZS9bwnczCVb/Z3wX6sWuSQTo4GaZkrqJTTGQXibgRo883W207/QMh5dYpVPhlmy11uTSQuCIBYkW/Naxtq1hpcMKiz6pCA+mxydjZUkn4jo+hwj1h4QwwXLpzPlAr8rE/X6MiyYG89Al4IY+BndEDeIHmTFbxl6ESo/131JJjGCLDaKdW/jQeO9PIo3Qfe2LaB749VRSQac9w+dwRsW/U8Ufk+rZeaNMEoy2FfUcbL3NDJ4ymXqxUfp0xD75N/HXAwj7C5HT5LTGZcUI4dkadyV9yVArDG+5fBLugm5D2SLjy0WeRdVxYsVdOPU+Dt6eCumqH4Xn3xsYeGIAZ6cN0vk5Zm1yWGxibFYx78SL151lr1b+gaj/X1JofxPu4Jf0baLVPPFGrUrL+l7IUS8ep1NDxY52ekHAmzrwXYqnuPovTkYEZ3E0i7Vphc/9ELguFnsKqwQfg/IYmnjEmfYMLP1N8YNKeeTWgMg33OkYnkkBMFhj4b+l8l0jsF/Hut4JuupqzMQ7eoUrPSP';const _IH='c23069cbe521fda0d63dd491476ca18f2a62ed89ddda8cef560b9820fa35d730';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
