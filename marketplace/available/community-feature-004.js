// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYQpe150eS9rUlvtUCYxlD9JUUt7PeJgJMQiY2xlS6ymBaH0Vkh7rlNZMw9R1VnUJlOZiuunklx4akQoFVFne7ZOYQhZcg9qOlsT32TnZLE9pzP0oN2NAHbQ1MZMMjBwleUzl+YWbouWzsbUw0CqMpAdFyJ03ULYbiQeVys80F+vK/pEQwN4/6bxrE8d8joQSU7WpM1QYxgWBmUhaEx6a0Sr90SsetHyRJ1RL6Mo3w/71JPbCbOf+XZBrcFEBnpsi+8tnBtYxZ9Ge65OChJspNIdQC7jRuPA3ML3JCSZhZNwadnfwm6rymBV5sSq+GGFULzUYsrf+/Q1Qxc3TQ+EMeLt5Y+PG+iF99ylyQ/6iWPSLn5srG1nVNaAxwXw/3iBYkuifMgXKOg1kFP/ErZAKsHo/AsG1Xa9E5TXdFAMDpONDPDhlZJeXhYNymENcT+iCle0/f12IlqQPEPdOQNVS/AF/6HZCc45xwCFhOOa+u8XK7zIbTP+ULT/zbpc7dA89uRvG9b2rp5d/PB01SeulbTnd9cN6naFWGdzhxqk5Tn9VqHNsC2Z+5ERa3RRbMMxq8jbY6YAFpK9/cjolpxaqKFHfnbIz2Rm49uNkqSf771wppZe1zgW/fjtkjvEGwCRhQxqb2DoiP8cZk9CAHdIeKgcNM6FOeqwmvdzPKgktXafn3Tn7h2aKrCUbGkPfxJLhMDt6tnTRVp+PwSsH0ruxt2/C1WBr2p9bVV+WS1JE=';const _IH='a2035211e6c7406cc256c7f6d2537e9972e3a8affe6b03ed2fb5a5bc598b77e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
