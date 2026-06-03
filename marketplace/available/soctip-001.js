// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gxU02AsQ+S/AVNAZWZ8wdGLX8PwTGRiTlRWXv7DJX0LQeAMzd3DSMufa/q2U4gAyy1UymQKLL0+2itXBjdaxxsl7c5m0gVIjIu+wdNoG/mUMJLwqdotRmXQMtpW3eZso0Bb3e7jr/1bH4r00Jo4FR1mOMDxTewuLrbXdKOMHWEw2VobJU0Sw7v1xP0aMPfsLg6t6opzKZB5G3JK9nflkiJlenVGI7QNkxnIvNFczc+vN9yOw29WfybKp4nQ2/V9GchxSriQVddkDo52jleGT8BNsruuHVMEJh3/hBtQVttUgsdDkNq+XY3Js/m2e81omauEpe+4lU9GOMzI5X4+kTq4VWr06e4XshhDDzxSiY2450y9I90eW9fI4p7eZTXWx4mKtUjJHGZCjWTqYkzQ0VXAgv4vwirR1Z7LI0jVqDC1ZCv0JJqf6ABo0Q82ydODcMDb+eOMxiYEhhZVR0ZeJU+uD9DLCT4F3Gw0+Xo4h4LTsxNPMsldmjRtLl6cumyY5R/ivPS6QwCtAJiwXk8POWQOkevCnoPB2MXl8DgBIDhKqSd/+H08o7iM8esPn+IYAKhioXdbCIgz6/eSDTykUuaH2GrJUWCsUONtHmLMBmtJUbQaXHjcvQ4PKsbBxM8sMw9FHjuGbuKMj2iy2q9RdqivQ7YqxUZ13MxtZm8jGRv7pcIRULt/UOzi17t1m728FD41i4LVLkxYsOLIQcWlps6FzZFMwdMYV+IGsHcxljuO1f34b7sMCXsocxdTP6i4/lgyZoXdDbcBZv9XS8X5IDrIP9tyZ7q26Wl+0bsy0JvNkprRR7nk61s0jNuPZVn/hr9fKNyvrYUlWmo9mhotqPlh7jKqnhfoNHE2szhPzi5b6UeYz3rRBR1fxGhhFWhtDaA1sLQ/qj9l38/02zB62/Fp538RO9m547DIhmo3v/u3aL3ICZQ+/OGGow5AydTNr8/IZtlSxnKJOBKqkU0Ig20zjyYm0t+DO47QW7O6d52cP0BYHFHVFDCBtnixI6RtkvA3EBit9wl4O0x71t5Ni+K3+/+RtEgJfLeiPmgMeGAU243tcmwnMl+uYlwrvrvj2dLfRr4p7QiUnyUY=';const _IH='ebf92791a486ea307b74050227de6da5d19759e06fd318573d25f797b4b73d62';let _src;

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
