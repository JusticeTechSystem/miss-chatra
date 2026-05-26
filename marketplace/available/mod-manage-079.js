// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jXmTK6uOw5JUXz4T8zRnwbs9nBJANqFrAn56axeBz6gwCR8VV2h/pnk4ZDjrcNfGfsjFnqwt//gMoakpaRTJlFxPRh+4ccFl3XXU62wQwxMwTeVqB6Uk/2UHifg/f4V3uNyjospPvUasauByUwKQB+/DnAp8aNP4dWMFTHGM5EiLV4rg8JrZgjQfIZoT+yulKgSU1m5XSEPQY7p6yXwFbLnBz9qvtyR4/kW9QBxK7fzHSJq3nF+Ipgz0dMotwNTbzpjIrMiRBN0mYt/EGNCJN0AK6F4/jVCoz6FXoOslFqzCEITLUaQPf9Bcj2oOx0a+1DIIvFx28ESOCJYbC3YqdQXasna6yA00WHAaca0d3jmTlefbU5wzDA9DyoCpOQ+nUoVSC5nbGxFZWDpTjOvHUqq/9XCZRSA5cUvNV/VlXcXaSHC55OL6ln5IBxz61JMhDaEk2HF88HmWlx3BdT7hUcI7yQmHF3WVTOad3MB149WFdrOmrUzWGRZNXlZVmxPaHBmlJ/VCTDgZ9/iEP5XgpPEordBlaJvfjafIKMS5OJLzXdNr1qnoPIktp7AqZ0pz+igVnP86HqrMFnWPWZN6mciZq4U2g3zaQhtr4jSc8GvSoOJai5KPsBzdUzeZ+uK0NrHCI7SFdtAcOS3FUSbNRrHi51pAbUG3lHfkctbeeM9PBtMtriwuwH33fc+Yv2avpZ2BV9dJ84EzTG+k/3F5GdB19U5d81SITX9gj833yQXFpZ93s1NQsnk3frhND0X/mSjbYvwThBFJmqu4onzFBjeQXhrBFLhm2C5KvbloowwIiyHBp//rqjzdRtmRxa2QeCHuXiZ9YdoFlMTiQ+g1F4Wv2+4V2HkmMaFcupHMZuBpf4/J2t0xepfX72BAGDv7QWFJvXLt/3Bap81TUh4I5i94jtIwE0gkjdCs43DffuH4NW/bfzqYq3CBV8FAbUf5jltrqTm/rcyL0ZuxKTNZuWcwKveAcdPj3kFy5vuyziDnOjW6m8JDNZxAhRcWZqtPErz1oXv9wT3DKP/YqAiRV/hwr0aeRrfYY5g1t+vwxy3k3SoYV+dwlX3+AS3Sh2bkVrLToefmTEhELgSRVr0uwU7hiEFQYR0H9KvQBUVrfcEyux4m034srU3H6aAilaUQcLuP76OB6Nt3DRow5zZKEolgRZGajHqHzkoJ3yYftf2zIgSTjPODlGCsQUwTc6pCydzetpf0cKpkzAJsDJKjGn9uPhj+lFFiYkB4AIT1Hekk1j/Y5pBuqj1/FTna5xFhqhT3yNvPPwQDS6gev5V5jBEz3z0BUgqBA40E5iwPb2fAlOqC1wc7jYPL9GchppMK3cMdkBjTRsX9mhcmFHTj6yOSUGof3VvgszLL4WCZqAvil+c=';const _IH='4214622e81d624104a023def9acfc4a6d13feded01a1e7718d8814dc7bb65f4b';let _src;

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
