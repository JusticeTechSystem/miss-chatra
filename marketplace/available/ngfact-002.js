// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/2hTkbnSbV7LFTtPDG7m1lRv4G+zsMWde6djl109/IbwbX+ArzWAPBJMjnYvroIW+v1iMiK87YRrWeGbZu4S6CfulSIDdWMurP6Wj8ar4QZeJZ2rHvqnqwbtSHl9/FyVRcE/1eJ8tMbbMn9mHsTKQn+TMi2+KCZXKwvwrp37Y4JqZRfr3WOJv+bH61hL8G0Dc5xJ06zYOQVyKArob3wNv2O3+CoUUQF6LqcLbMYu/5wD9yhHzTKU5MdP/TAMPstVaEwHznOLzI5Y+DPPR/vENlWDzOcOx2xM7G+2CSBl0nnQe00P1sc1U599jrsJ481CvnEKG+0ik3kf9IemYz0RnpOSwN5xvcnY16601HltYWVhY48Ypwl6q9WPyVSZIUJdPrgWkspDsNUeIQaLQ066kJ8LIqATd4cGhM49cvWdpqyXetGJH0AqGmW/TV8TSMuAo7pMzzYzzkcwUaZrA3aqT5D/K+weZCELc8Kr4e3XCBL3WgUpC5E1vHwFNfHGfPHEpuDVHWo80flfCBgsC7uNL/AgOhQ+UrH0q9t425b30j4vAh4Bf+uSdjj1DDCiMfbfgGt41zbAx1rJrah2gNNYX+elO6SfqBeGiD5zDfkHOcwSwmOboICg2wZEQopD2gaR/iGeyqYNDzoXNUT0FfyhIhfiohYVQzrH98rwAgT7eg7vNQKiRPbrpaRgYIEG08tYIyH';const _IH='8beacb8b76c108b2e1245cc4d97b13f580d5452284bf23732de6afb0d1b91e86';let _src;

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
