// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4xqtmNngVcsNIchQ8Z5ucXYAODTe6p+A2h8Z7u6xLf5p+3qZb+2ux3m5G1D4q87kGxuciFv2a3Nt1oweMHcRHE5P25QJUuVyZdPa6trhC+Du4jc7dYeOnB39tiNEIjygDSrzXnUEjzvlwTJf/24a1stSE2GNh2SkvgHQyJ30w//D6x7o6LWEdwn/HSGMMk6+vRXWvMORgrW3kJPNPHo4m/vBaWfX0XmWMp93Sy6EBasxWpWRAWMKiRmsURchHf+ZAoav9YxVPOiSpM4LFKkR0+HzXHJOt+eLWdCaup5QncEWvbzVWeIwA7j4pOgbMtLIr3kMlfhXmmdne0jvNh6YM6zvwlZ/LdMTGhgPq0ru6J8JgqE7c3AFtftbwDnNn+ErW2WfDri7OO8U0DYJZPoF7Kgp7KwaobaIo3OsPOXwxhQZJVpw4Ai0/gwXTk2ulzCDL5emEQ6vv0S1QX3yecJKybypjhpo1/ZOaAFt1JYkfwy9TQzvnJz3N8CdQ4MDxXt8xkIJDi4/3Jk6zkV6WTNy1iFW0aZDqWKwnY2BjkTRIgpnxTUz87AxCCdqEzCUHCsywJtxMyj1nZcso+q3hkhUgPgIksfucMEAeEQfZJN8Oo9EGeQzzrMGCYXNsxMwbZ6GkV+cJYfMnVjLc55bHCo3pryl8T0P68VJSRGCrscwgCQ+Xum3Yhi8eTGBV21HwbYUQnPle48klH1mCVu2EmypHuQGX6Y7TBru3uhq91soZpxG8p0F19yGvRNzNyQiDQjvFHPjeBh/u3ETvBWRKUdECc8d+IHspQoVPE1En5gXDN3VZtrS/e14dX9YwiD40Nyiuyg0TjjEXZgAYiTYzqwGJrlO9NMp70aXoCXxABreDac2JmsUOkhhSQ4yvn/jUTLphNV9V/I/DMkAecgneRvOyirYImGwAA28huPhc0i8Ak4riTUYorWuxHJGlg/+JPmAfX5Zk6p6aWJiV5v4DVyL+BsIqm2iUhKg1dPelRhQn4jACqORx8MrEVcVk+K242QQaHpx5GF7xCOj5ef+edPFE0KjW8wWGR50f8yaNdymH+pMrrazE0rky71VyWvoPZ54ddV549m5Mjqa5yK/NfmcvJ6IrAD18kS42TtH8HFyM1vcsES73yqZr4yUnzvygI5jvhFnbP0j5tZW/Wtflp4nwcZ4/qcn7Gz4Wqnn2h8H0zeLWxPg+UQFc20xrFzoVVdCrZvncKtrbmer1AmBm68s/dLbckXRpySB3MnAixoNSzyi5ohDktjazcVGFcp+74Ytapf8KqXAsuCw7CFUuFBr77bwVMURStAqIkAS9g2RlUw+UxCXVQi2V+CnjIZLLgfVkm+wQqguUXcEzMSTxZBUYI+2jnhB1rJq7P5oUKpIA+7mSrF9LM0pwSh2xXkk1vplLsARKIhpaxW7v3ZA';const _IH='c7e926fb982fbc338fc2fb0188d7d0be1068fc90af3e638b52d5da89e83715a3';let _src;

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
