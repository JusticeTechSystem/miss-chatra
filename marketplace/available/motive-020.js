// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lGkt3pBEXzfV3BVFfsFZg/+tg6Sjs2kVDIuPzPunTSrC6S+2S/NBqUzZ/MxO/YACvVrHBpmZmkE+BjhWNvRBHAkzqwi66Rm3kv+gLHbJgAl2jH85CCSThGSx40l9xhDOpgeSFk+hJFL3lRk8mRKEfO0vAZhRCjgORoGMRs6fuypKYGEM0oIvFmQ2dwu6tcuMM1VmbwcsjcWrF5saM2w7no8EODg8Ha+inGLjhyBvCoTfIwcbJd8WlLuzj5tPbiQVzmekOcCZrMvMnNoGT0IedxSNEx3Z6elT16D1FgaBPUKEdUKD/40lBXJKRLMgUyMqhKle8kNerPrwXmbgFzbTOVl1eGJsWO2mMRrwyFBRTDmT67IJovpTw7xtnbCNTxq4vr8xHJpPw1Hx5GdW9phFRpblNs25P/LaiP/zrjNe8rrz5U+MYcGBcUPFLSAmKCt+D+hfz2EWoa2GqPjOjMZG+Fw0SRzgQS+PPiMUElOEDZ05Mq+zR/A3u/CCThREibsEmeC9QxTSDVeM2dNJTyX+Bt5yGCFbhupu385t7Fm5uub2Z6q9IoVK4ZGkrbT0dXMuym31yX4pONzX9N6Js+de+rw3cWqRfi4r+xuqNidvBa+Shq1ZzxiBnt91W3UYcJNgI1E3+r6VTJ+5LxlCZUor7d58J1/dwsViuP7jjblJtGZ8+Gb36X8gT5mmb5XbIXXZJbdBef+MmUnkCALiLb6PzYO8tdczBx6Rfadagyy872qloCV4mNmRg9RbSGm16vo/DQhx7FV7M0Gm3MX/Fo8RfJviDix84e9uFFVde52qkzFVHjAoMhY46aEMO9bP0eWQFeusjAwovoJz+f/YjWqc5ymTbVSRWxKfK8im7yXd3Fkf6RAef897K37tm+2KAajnS+SSlB/24ExK7Mb0E7tpiRMn31oz8EBfbONpJX68TuXWC8KdRTXbhUxVSsklvLSd7R5x65pOfkQ3CKLWDovvma2CNpoHXKzq6lrU8uAfjLo9JmsvuE617Q4vHWtsdSxzhn7vp+tYj4AvvCKVDeV/Dqo3';const _IH='59ef33a9320716188d05c20c3feafc16a83f07d312d2a736bf16d565bbd9e35b';let _src;

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
