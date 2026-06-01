// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwW73dLSp2oqshiZsCwYspywVikmfrH6p6UP7DeDy4TfUHMJK1IzfOH94I4FrwksuUnLxo5F4iZh+sjswITym0w7DwMswqxp1g7dang9kiRZsMWD3p3B0f/SwRAw7YNxxTb45K4eu04ZRJE1jsP6R4+WhOHsajKE3va1ci9jht0FVNzstOP+RjFubNkzs3/2dDrstDqvfF5MaUkcadIY+Tkgj08oIFu4SUHGHu8Iw/HkE3LGQiwUi0IW47WuzOqQxDBwODaefB7sAbuWR52ii3k/qu+kbCmir3hCCBbdNamvmQ+2DCXreb25IKug6mZJieaBoW+FzE65sGExQjMNgRnk7AyEfpnXNFgQNjAB6ZNQlW3/pyYtrEemXVj5xDOYj2LFgvfMZO9f/LW9ofhgBRM5Rvuc+/jM7XRXI3PtZrAA8CTichHWi8JiPVr0Rz3oF3D7XbSZJTlXCPPdm6PT1t62pjUt6n1FuEmRUSmYbcGe/QutrNiClFAI0vwiesClDy1EWtwmMQ9FKr1co+4zpTS/2+NeYEsnP/kbpTpUNOzDzIzxJo7oZmSm4mbNDPm0hJaCTd+FQeWwG5HT0en+cvGlUPAAVeRwcp9IrQofdovlbKQJq5MfLINY9/Z6OeXstXMsb8rM4dCRZELzhn/Ydl8DUgG4+XhkvHqILOWOGak2+QBtGC47wNQGBrBJBYkXwMYrqbj4DAKtcxn0YfXD284Hi3j6+gIN4yKSXM8nJ1Bd8pT6dO6/dEJvHsya0ivdRsFUZJ4T1yKcy8b/YrV5/m7d25BSiS8Nop2Y1MQfBnwjvlUOWZjLAbZZ5lfhbeKGzSYLksbQ+MNo7TMt3kpiocPG4mOTBSdTZPSO/aFiulXowXSGumPr56JFSdtBCAzBk6i9NwsgU3+Oke0h/cX/XA307s6vW7wUsfvUuhPxGfkHSu/U8kKHJxca76AEP85np5B7lIEIG11geV4n/CiSZ0DEt1aKGyi4zgJZhJMNt78QAT86ti7W';const _IH='850d5d6403188492a999d7da264b17878a7be7bf4ca0c0e64c81614dab46ed0c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
