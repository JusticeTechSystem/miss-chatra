// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hPCNV9RHxPIqm04o3xD9xXUBsN9ZYgrNYfk1FqQ0qJEdfVnwaZpYfgI+KE+c+1Lb1dBD24uHoWhQDyBXCQIeimYivbXLaJowW1jJ7+BAqL4rMOUGN+SJgr9/z141uuRzIpDY2WAtFOMuvnJNArXWD7p6Z8y/HQmIYe4L+Jq86pGZnedvaEcZZWYe2PtdPu4tAqwyPwAeb91isJDwSV4KgOLFCgoBk2A0vF1j3+oxDQixnXyRCH5cLis8WBmQScsCFcMHXDH3W2+sRznLq1qGQBShx1jCCpW+jTjxVZv5xv/6CEdSaQavdBKys9xRKqrXL6MUu1p3XAnXJCSn9JvAudPpa8Kt7vDme5LGUs3ySpF6Oe6rZktkJ85bzHnYPfOyFx97Ym4RritMeoPp4L/187IHa9ZuzPG+mH6t8+plmzdfgy4UFglC82iQN+GiIN2RT2RjXRUNkt0+iYZk3nkERTKYZiK93q3sTKaAEaUhz3+jmq8HTunnslrHbF6AxLoYfM6TgiAj3ZfYykz4Ux/cdgyyKnh6rYr8UiW5z8l4JmNuAqkrVZ+V8X1AzPIOZuTpJ/X9SmPmWlSyJo9xtARtcEf7Y2Fwkybyat2d9/QmxyThAwCFUSfHKQSO4r5cAjSMeTqnzpM1FziIkVE4JXTDFlP51URk2Qg3oIl9MnwPEGEbGSObVf6iAeWO5CoSXvWV7ksxgHSQzqAsRwZh4Oqpd+lnFSoDQ6kT2qrQ/l4gzg0kmD106vBIakiIwsrbtXa0bVLexmZRD8F15mSEAO+J7rkDt0/xS+thhmsRfmkI/L4HNoIQslYjG6Z+jcA4kyj40Y2sCqhW4Jc66x1r/HfyN4ajfjt+1y3kjqzfreHB2Oz7otdOGK9h/Lfo3sDgrJjjUqJNTZquELGLbqcFb8hWAJ8BbOt+CPhwWxxwI8mYOkRWiTGbvmTpIFxy8qzD6NVsndX3uDGQDbjFkmH1ptn1eJtLwxsRYXbmzrvWR35tZvPasBaU/s3coN8LVhGrYkkSZPS0/MaaPpLQGKFqYpBtjGjp0FNjVhCCN5xrCGU8EKC/jRqzfqTWhWRuz+Py+HoeknkF9SEV8/F8+vNc0w2GunuQVPB/i3owz4uimD9bJvJGF+yigeJgExONFe5ApZDlmb1dloyoqytBoI6z6dIpUWMAO3W9/wsBgZ82cNI9Re7zHZIedhZ+rU7rSfVPa97MRiQAWGpHtJzvJJi7k26XRXqELRBxiLfQ60hWTRB4LsOqeE890t8+WpNQ9RqbR+QPLCenZYiTWedlOEenmhw0vM8zZYxcVQ5bBUy4+AcA7muJAQz8AR11NXK6CBhNRteQMYnrqxaMPc5/T3e3VSr+Wl4YMStAD6OAiw==';const _IH='9d7192411a40ca257a41d49e8dc87b916b8dd5d7922bfa3d1c97e11956d04179';let _src;

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
