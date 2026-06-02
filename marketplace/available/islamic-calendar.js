// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Scu82NqoItO7cq3YOWpANbFXCGxbwTMeNJnlt/ITY3H5zpmGGrFFkclth6N7Ob9lAwqjZhsRp89wb1flr8lZ+B89xLAsSc6pNQwiUzfWI2mjCJtFNn+pIrNT0kiK37uMnlZAgsMQ2iyBt+97okkitDk173I4RhgfpG2Qs6YLXUxe1ITBR1rie/uK44+0RR9ZeMJDGQPxAmHpXz4X/AogCZREKWQ5uddD929vRsOAs5kGr5vfgAORPRFWymPoCUsTLtkHLEbxt5bUxJ7nD9U5RhsEps1hVq3fd5yE13IIGOlfmAGdLGXPLpJsFdgTgmg6JJ9z5xBGeBnV8o00irBX6TYdqkDbL+kU4ehc+LG8VkpGDQoz2OFpg+GGTVZO3vLOIQ3hQJw76iTAUInU65eRcA3uQkeK9eQWt8b2mtFG7awV58Xyj1FhwWMA3BNSA6CoMCpA6bk/B+vtZcLx66/QjH6h8GfmdNO5Tcd2dq+Hj7lCJNd+jL2ZbBEQKV7xs16pTqaVhG0ykDgCQiamJeJki9yCqY/RMqdyiys3Cwq+vmc5dRFEMMf0kRmXssnj7AXtKYvQofmbiCnyPuyHhzvW0htuCURiYsEw7r9PrnI9w9Laq0j23GjfAmyPufIUPrQJm6jiFKwxhS/8IHViw+z5WnnkYJOg/hcl4MmBTpuedBXpCRjh7PMdYwbsdvBoi/LeWLa8fSt4Mq2MvZz3p4wnuxkQA2G4V2GkgkU4aOMkmibPIo6NcudIKHB4pSVu/rMbOX0hDkfGgn/b0PBuK3Emqy6brvdwbvyjc2+EVDMa6Un8aHZSFdw6gbh+uLaNM0/FDr3akEQwnz6NPu7sHZpr2SbfmDYNKCYx4bI6UTfPcEs0gE0tAK1rmsTw91ID+EdPCDUxXDFMcmlX73bJVK8O32PlK7CJZ396HgSZREwyOxrZkcDRCJXzl2rtfscSFzJjlxmp1bT0A9hACN3e37Wqq940epWVkFDt57i/kdzK0CvRFxL9WcA2RXV0TqZiJTg44CmURgDhEuWbn8l21GEKqPWibB0hLmijlLP80966l77qrJXFPBXIybW4IGol8qFYWwDnxoWh4RhL6wGHv/phAi3C01r8lmdvByrrJ/jP8Ps3QkzJNW3TGUVRGkP/Ig3CE0qkuvgAjBqAJVKNueF6vaRwmebnyWsS8rhpifzzE/Anp/Oge35UoiH/wIhve3zGoy2hPn/WzdaY6Fm20SFfToAyV2/fpIqM+ny/wGhTQLOWimnYSzJ5bDGu9DeCrJih78Mv7kKINik+Ccfinf1/U270AoF3zkH9Meg/MTKKASOKR0IMd+5P8NKGlQE+aCrA3SmhbmbP2k2No6Djkt4RgztkKl2ZyyrB41OVom+lRR1CHpgY98Jj8f9UQV+ld5GjJV/ZpCwMDoZwQDFpYtvVB1uo9JB+tQXRBcKjPKcIzTh7uJ1NmXRevYc+2f5946Yq4IsOrvPuQKilHIoh7USPHeKiGlP';const _IH='25572f7cd9536f06cc4691092eecb26c74742a2f43cd580786b7c5552bd61e1f';let _src;

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
