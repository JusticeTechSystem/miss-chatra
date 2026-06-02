// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ix2uD7/Pa+m2l645ytFMSy0CwG5c7uQY2ahNRv1o/9qRtWliWwFbVZlXtJ1xcpf6gkzQHObMTHboh48lLkWVxGM1p870hEninseMZ78wok/G5YC3/0EAt+FIBWUnkAeKb3pJ5qkoBf72Ks7MUW2ZUe68nfb1dMY6cwpxzKZf/O1NL3YPDtgCUejEJg6WhIGo5JcFM1y4hAm9FYXt1bCbf+kgSjuNyFMhiy7F91SOPCcTHER8TQcFS5N0jXDEXLMPsxUbcMXMclV5V4dCnfU6VoWNPkwUraXttPU2H9BeLM04l435uQSc9xDGvZE7teiK885Ia+YzP+KXONhHz1JWlI4deVUugoEBUVHXNra7K7TwPdM7UGD5JVjtBpkKI+yWd+RIx9M25URF2AJhm0Rt15YTHa+kt1t0sCeesiAzOxTnpLsf+Nq4y9SFf4NJUZHF3nADdM936/9n81nxgtRe9+9C8tSp06MxQAxh9nSGMUi8z7Bl7ROm3mEWCY2LsZTNoAHxvYtBmyU9AtS4ljnSgdhv7WdW8v4TZRh8CjjidOrx9myuwQp05ACwXldiBkfFpQba/nK2V7xOaCCkXJpNKHhDEwOvW6aul8ZRKQY463imWcRtMbg0X2TqRnTuq+UaV77XE3tdf0k8TzuSouKM/hb7th0e5a/e8F9C4ujbZ/D7MojTp5OXMkFbdIEAOgGFB4m8pTRIiv9KL9Cb7PbZ8uZZcmwvtMIa28Yz9vrLUNt+4ESwz3rYVR2lzRIs8cz+gfxZSGFKycBW40ORRuWd2Na7GqRovQl/8VRtIZHjDGxsBvwm2Cj7XnMYWlboe1m+6lPxW8JX95BlmFMidNxnpPcBB4PDvIo9dF2er1crMdIZTNCQkbRCyLhecJebEzQ6XKFArmU436rT6Xc0H5iirqwflbaRVoyl/dc4hfS0MQH4P2nAkfb8WBhiZunsh8alQ0FJnn3o3C32+TfGQkKcBSmtpNkMKxbbNCupXlUZ/4ZVTukj4quxjTwgtsz+';const _IH='5ce71f3c85881fec7ab8d7d30b2e97ad72e0c98878b639df59d432d2b0044185';let _src;

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
