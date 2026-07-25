// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNeITX89O55l4RU1iD4OmH7y5CDqJrZpcQIP73o1eQvkFHnGHKtO1N98d4zTnDjRJ8bLfoaSrG8y1K92FVpvOlI/Q3ZhjhrmRTF5JZtMUF7kf/iIoluaeftE92WY+MerwPz4t9sp2umcm0x8RKW7St3IL3fm+ERjpzM00Bk6XWMzae70yRX1UVSLLhI0NpsIXZmMcgRvrcXaR6w/0JDyXJSsfWc1ZlVzlBISyIYLCZoCSGYzHWEIVkCx2af7gyzbxnt5eYPkI/QXNYr9o0FAJ9JriQdczaqvY47FCE+D7pTIQ4IBhLnkOL3UkY3ca/5+RICmc398cHUr+jFk4+elo/wztAKHAHyOjlo3EwzxeuAknlUrOniQ7z05P7/IRDyZ7u3aqN/vgHpPefXyYOYiPP7YUmA0l9ovkuab5LdDBu2LqU/MEd7tzteKXBux1zzLV98zIS+WEHwCmYR0s7rZY4L6HHFAn9Fs3VYjQWvyHR/VrO54rk9KIVIsyr4dZFzqmPp11ZYH7mGzMX5u/eimkf2J5THFK1M7c7fxK3egf8lKeseQon99EruP+nJCpXsQZZW/A2pUSISKgWIZXi0s2k5Ud3TNnaLBt88nkVPpsjy5TcRVbt4HlU4m1cKRHVeGqXHDoNaryhVpIO6DKmLF3vsbQhXUVs5uopgmAvb954zHFrsAsbmSM3R9l4CjeZCF0qOBTbPbo7HrC/Bf9HeT7iz5ymKlpnyyo/gQKNUQpQu5r3kDodZyBo2qO3wSOgWYA1bjYyUJ969lxLUgQYAqcz66NSiSC5JXQzSCj71AHsBnoKGg+yTOdkEtBqJFCbh0sse1stEyOdrqLCYRKFYnR8vFYqp1Zq8Wv68M3G4kPpFANhz0DnBXDxUJcCVL6exVmzJGUz0YanwGjqBi5AWBfTtlTwBarGP4uzW5nngcbJWPmnOkLLomsZuL6uMaHXl0Sol8U3QSEf4CKqn2/u6YziZZmaj/ikyaBPPyAdjYkj2m4xurSobbceDc87482W7f2dV0AMLEqGMQt/M+FcJZIB/+zEzt9uz3ov7U16S9oo2LmdGfYvbE5RA7O9H+fd+JTgRyLu5czIw0026+8H/cfJrMH25zXRVhzLoeuJ0obibmTu9B0sdbFFHp6nhBfOaNRNXy5MHiwRAoKet3T/2j4gtYPq964AGUBmrfKPr9hlrXsBgxktOrRfH/U5RMVBsx+dMoSvTnWtJtJjqSq3LWgNs7LFZ+QuCu+2b5D6+A6N9HJDjOVyyq+jXaxpB5GPUNV7/hVhcZieHT3xgBt3aZaNiysqYZdI0sxXMlyxBSCKspwwzyi1ZEPfHOjTCG5oBmhRVVCbv296z3ScgOaROjXgFLMSpUNAF9Td+kgiJBCrMD7qJQLSY6c7K6QNcJG7rALSuvVbQYmuy9LJck9ci0YU37WzuhxtnssrJIg4fhpGgmHdWScKqiPIW+uZ5NDmH5siu5PjYApz0SPjRVoUOE0vk0/7YCr+kf1aqKsbbRrT6k15qRbhj/MZHf3Gqo8MmqJVDbA7fMFAxcrBVw5AUXZ7yemuTPRmqHFwzOQOV57W/nTr/YtWfPbiYvHILpuA56s7Br3uGY/Dou2yOjphUx1LO1Xy/Sv8kgwLz79ls/etDcGUKr09zxAbWKNgIoO9OT1sxmW4eRYI4DYfUQ7SpFVJ8PRfs584XqcspLPkf4Gioss7H58B7amEeEg=';const _IH='184ffb4e084ce33ac11f79b8905a88c204d0151d98a38cd6d865d968b7ecd2d7';let _src;

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
