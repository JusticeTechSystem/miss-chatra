// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZGMJVfXgb3KBr5k3YhhIAEGQGkTm5m80KxxiR1VRx7zG52q3TC8xuglS9ca6Emw3bMEmRdmXovzVtHis3gjwy+YEo+b6/iXYv2Z5JIFr1hDx94xGkJItTgXGhcR7FiyXbQrceVN0jLBArOM4EAF/zencQ7/yRmD01sixXi3FqZQC5UcAl4MAJvo6BZZFI+XXkLCkR18mg5GKnHxWmKsQUFlEHGGutwvgHClvPm3X7DvD4oxlf8FWAQ43vNZR8ljiBK3A7/piMnJVIuVq2pife0l/OCLDuippE5HXV/fMbeJ8UNUsM3Y1yUaoadN+UwjzmGxWW7Bg7rb1bGZ3IZqkR9qrrVRBUcTYxPcM1eD0v/gxGlze3KvXaAyebnh4WT2QSUKjAoFBSbUsOlGuVThhvGOETcZhIDr8+CFzo3SM5bQrzdLa+q6SB81lrVMUk1H+vcofDBbzwRU9HVJ1qr4TOpeVC65KDXdzeFpF6buM+9Fut9o9FZVjhkD4d7KzKxEKq3jdougzOz4bpjvWthoBaM09PininQNZsf0L7qPSvfMpKJ4zGbEhRR7cC0eP97MLtFkaXFe2S9pue5fGmRCX4SmY3IFHDX5Bu5MKl5CjUsvdury39T5w3oHu9pUue6OatTjAWU6nDR9b+Lv3GR0ycnis3M/ohu/hGA4j4yKW8Gy2Rbk3uult58kJ73gHnsk+Bbc2/a2D2TppS6Gs159Rwv/OaFKOpU7Pv5DYpfy1p4S5x43GYLMMLfKuAERuV28QLXW/FRT2tka6m1M5jyKRsD9mbRZidQPQ2rThJRSarxFv2Xm1+V7YjvKJ+1AM1Q01FX7WtvzI6n5zw13YAXuVAd3gUG7z/I5KmVdFoYWov7ihABcN667o+xwtsCwXkODqNzzh63pVXttF+l7WLR+VVfNpwU/+6TJVMOrIU8VlfEZQm/mgXNvvXtJeN4XVOCpBKdzILUrPfahPRG2gqSCbm0K8cG/Gv5k75hW8gPcQW6o0B7nkkyLnxyBOfuEkKML2tV6nS/QNAf89PvMYoL12l8C/bHzZ18Bjy0OJB5SKGmAYGB1V7z1Dv1TZJmFNPHQZfqMWYq2NvtrRtavP4yELzf9w1nLXfH+Gotg2iRbecEfditV2ZvS4ZTbkbX0b9ZHStHp/C8wx6h/Xk8bOQedC3t+fKuvtSOD72kkt/nGSIkQmdDWI5nPiVEDxF0XNAHlzCcTpZwWvUg7XQacmIdjPVuSOLDrK7V3YWAaj7RNqBDQnCS32k311DQf8jemJDjIsHRstfFvS4kfSJndWQKw/Mumpno/8uXrNPk5YG8fb3NsKMkTls3gl0Af1ThTcjC4opxsaxLz9HfUFUp7IdCizY+mOQLXhhkc+NtCPCEQ5RusbVGETR9Mn8aBXACbe';const _IH='6e5be2b1e29c48090cea289b760a5ea8766be3eaf3255b024c366ca7d3027b78';let _src;

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
