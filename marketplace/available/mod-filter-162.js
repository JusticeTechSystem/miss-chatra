// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FL+FcPVBQmckqshYqLFvk09D/5XSJNeLhYXr7Jaz0ukZ2HiOcad9Hik8RHCpkWrqdqfwM38vKZKSukapUdh1y+VfE8XRmRBkwOOvF7XsYdIH556hYQRmx8fcJ0yBbLXhnGiLdQc7+V7Ai/ytNMnjnYasDEyYQbsjYaVcvjd23LW9ift2bNlk/xt5XVP8k0/a99/y0V+xf2z9r/Ai+4PR55jhwCOzA1/7i+0T1F6OwTI+J4ZEAK4BhIE4NAQKK3ZJlhHYgzk8sT4oxAHfMao9NH053/WHgaoZI+x7u7a2p4cQUXrl5Z5Y/dAGUGDvpgec+K8b7AHzVzOwBYJ4urUJAwWEE1yKyateRwUPz4Hg4y1wnFUaCKNZzXEsaF8MKEQxnQXpvk1jPo/9q7OPhV1uOEzGAC2i+Uwt1a4nTCpA4kM148/qWzTiFoQjAGMz9gmjpgpj4OHiL1goAajR5sc3yeIXChfu38QByfBrefYv+NToQDLiTeaC7zu9wGIVJc147V3CFs6P7XThNQ6QNty9GzvtTOQtjRxpZq0Neizb2xUZQ8avrzC2dNIIvAPdiiPMsVRhvFVFWztOnc+95/NhUAXGmywdxzpsfOi4TlshU6RfDTh1rspt6dB3K6w+8DooQbzuSkP5lK0VU2sdPdeQCoSPDKOFQg7mtMQyn8k0UeL2NArdCphOTBNtOTxFcw5Y8wugOW8qLKLmRcoS5OpUvesRwhtXnVyofrIbYdiMyXleySESqviHaG4V6EaSgmkHQzsdTgtcRmg6r88BbtKO0wUgRv3HwBgPlndFRq8NRGrBlImAwXOedE+bfZmTnI/KSSUdlevWctdIgAX3KkJX5i9bx2igY/VxtaoDMHY/g8m8SwQiyEm0VddYBmSjrOltepywQzarz0+HlMnY3u2pH3GmwbjLcLJMq3CQxiJUlBpb1WJwKHYB4n/7PFstPGPS6Rjj2p4PQSOCwkb1oykPKYDwwCyBYEf3cP9phYDlGGqiqU2VrN+nUiZmbyiaIj5yRRw+b7jqbMc3vwzK913hBvZ26cGs+rGcz12Q91TqaihqxIfGG8VlbE+oQFsJWlaeliSBpdC6R5UZcxFySzIszNYlGJLZ4C8cdPWzFyJj+B1t/ZjXOt9VdL8mMshPYoCklZG2cRTqh431tMrXvepxdP6s+p2ULQjrFiHr+G6o97poceNo09WS5k8Y9M55ZibGkuiuVnsKUPf/J5XguuK9B8y1RoPgXJ1i6Y1yuL9B/0G8t7BXqLbCWxqxbOxkSs6sxrcwGEQl0d/ZpqtIFLMK0D4v/kkjz0a58wz+fISMCDZgkPiNzoGwfuy1tm8hco5ukyNc/4itPuctl2MuSmrvtCUeO63l/kqKCUGmkwco8Qeq4g7qZFsAdg==';const _IH='2db05f8378f2865d5cc1e8a0e19698dcc61ceca78819ea6ab328ab9da15985a8';let _src;

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
