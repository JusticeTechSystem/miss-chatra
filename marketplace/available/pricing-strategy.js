// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MCOIR/YZ8i3UQj/fmRyaAPCusWNINYXfwSYU9mEFdsASfx/+m/gCOAi783Fp+e8PFy31R4FT3KUqzlhZqdedEhGvmntG8r2kag7wpkh3VTakh3FmY9ZzlXE5TdtJccEFrd8x8aRLw1gieu95orofPfCnnoN8BzK0kdvd+3NWk5SVu941oOfxQHd90DgfvWm67asALvT3vRbqjWAbBr4g+KUde9iL7c2UHZ3vy9LumFe7nk7nVR3emiokyITZMWhomX4ihp33hV1rIxdUMLElsD5/9jzMml7jkxdWw4vP+8ew2nTXCKmXdSOfsxxHp9+mjZWpgODNVpsKTfQrwSztF7TGCB2BsnkyaF310zOpVrJSgZUVNgkdTFNIKviWAP9BTuyy3K3fSbhf/yo4j7DDQD20BY9J+Vgutt2xPwupo+YgNmxBm+AqeIcbNyYEqxebtLuCdv4a+F22PBeJykA77qtoU0z9SL3RkM++fWQBDAYtFs8UZ4gRe/NXAG7sh/tW6I29TufkaN0uDh3F3u/oEoZGUVmWFvMT/h4/7F2W6pI4Zt2E1dMqC64JbpbtdPVRZ1v1r58gU3oIhTWSF+Hz/Cr/wDOvFbIiS4s85us3YdIJbYo2/Dd29spGLzhHMl4ElZrChDrKc3HG8fmaLApjbl7uMUrOIGxRFynDGWlhJoWuqoObWnjiakoaDMkGGYZUas1geOBgVav7380bUahPLsngCdYgfdfz2y0njAehj8s0ykB2ujM5MBzOWXdDvOmA4qvgOT9JTjraYdPyyTOejF3Mhq3pvUZBmGJbmfDRwUwaHNV39l2ZZojQ/zE/qQVU/tFqChnvOk8pml1RLYUMXPuXTlbpA5mPlFaWgDCmc7cn7i8cIVgf7GQFz3bu/SP3nI5x2nMmho4j7s8SqkkiOQZxygkd0ypAwr74zPQjwEalGge8vToiQ51aEr5MNJ0dj5M5uXgUl+yGhHajcr5rqVc7Rv9RiA7R/LiQYuGuKON26QYtHNBVSYvdR/hkfh3ByyNjrNN/+2EDx6eqFfpTktEHYXuH4aKc7/4iQi/6hKZtkwCT542xRXJmjlJyavBBJJPfNnw+ABFpmqXYH98L4xmVRdcg0OATiwv39aWzD+a2a/keIRKBXw8mx8sZnqJMN4LQZyX0C7loK12NFgC47XFja2qKtahaTRW2YPQwzjqoQHiWT7Tl3NVwJCavFZcRJRHev4bQ2N+7yJXYTOJ90slrk3krVaysczuxVPIMIdsqEqsRW3yQVX9bLiEWJ/yErvg4VGvADvjHgebw2fZdCFZvWS/ILo0V69hgsB5DY9+1PrrvYQUE9tyH5fFCRcmxEh8hFit2K0/sfdrm1/rALQB0GY0wv/PHtl6Gu7NJ8Y+JHRkU+7I5+QWj5kbV9iRdWP+xrLep2Nv7cIoxcWhnAIDah8rA0QIo4GVZNnrDmJRS3w1/OdIJnDwbmAnClGEX3VXrU3HP9b6eAov/U3AB6wRVsth61hvA3GCiyJyW1lnt5fJLYJ6IjDy8kmWT0fttw4DvDRcF6icKWqDcFimFObZiYvkQZKGz4BsVe5GPMm6e/N9y5akv7BnYUMkQynU352cbOUjTmRIJDnLcRd6dSDekCwkSLL9kVBoJ0l3DJ8U1M5t+SYlKynVZ14nwDsg1JvKR11CuFg==';const _IH='120f5d583a49fe0a09b7f24c5eafd55f5ae535dcde864510fae281e4ceb6cd6d';let _src;

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
