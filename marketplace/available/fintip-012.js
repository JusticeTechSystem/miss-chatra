// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qB7tcxgYwIT1i7ehSxHCqNOq1Ij7l8TcB+3zrZFp6bCvMwXKCQfuZN0YYvd28DrwLyRuJYjqGRQ1KqPV6TlRvxfV3NJY7iz3S8Chtll0eFkJVZwQiSBTFWCNvcBWoxsHYyPLRVNo8j/++kCOCXq1RhfJuXno1JykBE/ihUN7JARiikki8q8d8geZU+tBDMsD/z6JNpKCOR/T9fH89Ru+r3PwhCYXW7ygpU9TkJiRFrqybfwxY52LsaTr7uaC6Moiq9LaJDB8xnjQo9dzDry5ZHyshYg+2jOGJVMw90HsHszGbPYRo/UNxNhoSP5QlbX8SGLegzFhmzfSj5UwfVb5LdDhLyrg1dUs2KqsRe9cpnzBaCLEexTrtujcCblQuFblqUEKF1yVs6rhVy7k9lRlbOo3Ey8Blbv7/MvMsW/N2k2FxJ2DW5C/BJs20XnvTy14EYiW661Q6PuqAscjmGmW338dvbxRp9VTx1bXdYGSPZbGkFUqu091IJaUeN5naYgPrwewQ8oCxKmppXPYGWsNT1gBqEaTuhdXoYJo8rYQ60pwM/0KQLJfH5j+OTeUIvSRcj90UD1ldeW4V7iPYM1ryZqByip9kl/n10NOsvCW7HcX+KUpvgodlLlaEgA2lqxLBrspM24XYUHVxMjSi3+gq8R76Ka7k2U+Lh4zSHYqpIiF29ktI8HyCJngBKPhb8QRlmFHfkwjo3WU7EkJx2hUt/VbLrJ5EKyPYvC+ZPKdp3LkJYkvmUGAB7JzoLW5MHI4GPSWL+5FiKUj3DE9zBoUIqahoRzpDIJlTzQjiZGBdqSekr+XTX2rzjTGb2c4Dq94OeU0xX6zTvUuntghhgqgPtBQaf1x0gtk4Apc0MOpN4BzJEBSj8FPbsfiCgTxf/UnGVBqA+KJMJ/FnBaHy+iI7z3UBkshYn1R+Eq2uuKuOIPCpBW7fSdOJa7lH1W85gx6jP9j7CKkn5oNtnASctu3bSxDy6TJep7TmwhB4k7yWyZw3HiiOpWeqQMuF2eeBt2H1us51s6/U72nFaUCDtKAZhI1mGLIZFkG+ONOiinuqtrgzA==';const _IH='0462ea1ab8b612449a9135fd24fc136076ea1491612a216885848c657fb25331';let _src;

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
