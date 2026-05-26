// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vXEuPYT8+znmP7QtE+b0qAtZfBAIhydXg4EM0gcQzJSQbZIeiJCHytZ+3fdUxyuQmQnhWRS/27wCXkbjYvJ3PlsxxwXghALolH70m1Dh5AxsevKPXZuUT2m1ga1AfG8G5cuhmO/xSEd8ZNr03oxbT/h0J0geggDn939fYTPwwHrLuzPcF/QKLvfEdPdoA0p14eS1W1dlBnW/n9OykdbstzFldBEQgiONCb9gX91tx9yEwywV4nAj45FJuN3bBLpH3LF7g/vrSSkqq3u28NVmambjcGWPx/JN3ETA5kNtb5YfqOyievo+IBLQehvfPs5ugQF35ylBEtdrMEMfyV1T3Xi81CX6j27ZeSc05UBVv2cJcd146Gzv5tLGrPAZrtMfPdcclq1IHcDQ92GCQmEpUs3g5tJCaEu3DOPrMJ/QD6+z9emtboBBJ2P4f4q57dtBxFpvyVM7VPHxrT7oSq7cA7S662VynepgF/PRFLvDn49foL+L8BPTx3C5ZIWOmnkx1YjifkFc2rkLLgW4zl/HMiXJIMsT7r8lJ3z/E3no6rasPFXytH1l+JPmynQVm26FcjyFyY1I2COP2JaSgKEyOJ5oYdlLVMz+Jd7wskZhAZeoXAeTwHMcFD7nEIbyghn5VE/g4XBFX4oS/3hZXuXjFv5WNLyvmMEuhRC7blsf30OIroqtOqk6nAo1bHyjJ3aguuU4KEO0f6XdvWXZGYFN22FzzGwDVj2EGwbPvQq1d0oN/OvAZlbCwzb1hjiqWvUfXz8oN1yPdg6v6nwxMhkIiIJc4tOjsJuZ7LRqkkvfGXXrv7boA3mT8QrYKrJLttgvYCCgmmz23RcsulsMOdwGBFYo4c2EjcPnHPaYTeGBBopp0/x0Vr4tk7U0mbh1Hq6uaLBHFwGEAXjxOHNFu7YxGhg7+0QqVlC53v9Gm5R2YanYj5dqeiZruS5vQ+ea2jmZHrPV4jaBmyaGQYCRmC2JSrgVZOjJpsyVbvhYor9k2OEL4pI6IrPsmISz297DiVyo9MjQ97Fl5yamW5pSkbk8QHYPnHA3IwMm6/bC38Yl95NRZssGbmKVGOcfuZRTaAH0DJElkGb2GAoG9pEUQiAX9h4Pm9e6PN0BjAd+JigL7EvHxJaVSHV/97m9mdKebSpXaMV0PmXIeZJu33oKcezkXiw7/YS9huEbBpDKxn/mSg1g5OY4W9rqoGd6kCKjBCelx6jKn8LrhYV46mdrxXgEEVkbK4ml6eNL7EvS0koKXnZKmRma8s0i9CSKEyAfuBp+8tByvrpYwaR65qme//MYosBJpXHErq9zE0phGpMi4ZAUMSaGh4pkAMWvWjibR0sxeceikpekvTxpbMd2+5MMbyTTnv7A1yHv4ql3ueOI';const _IH='fd588da20c0f25c27f30d53036782c500b628fb3a1dd6a438f49d938a92c06d6';let _src;

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
