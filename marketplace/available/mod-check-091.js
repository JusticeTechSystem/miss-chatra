// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8cVLfBd10MLk0ubkOXWFCYX0Sp9rxUA1xxRSckOvS/a1M3zsZzo0MN739Z5RQI/x8gRVgxXnxuzmUaAzFnP/OjhxiX2GPTtV8PSnpnjsRL3oACaouqLz5ePRBNv9DPh+4yZVuYiwaWy3rX80C3U2YsD/TWm5ewE4AXx+VQTHj8MEmFAUwQ1W98tvaKnmiiU14yKgwxJkL+F//QmhQk90IvG89UAxuR0+QKK8JFXmWNUN2FzL5d0t8sqvo8lhvN+14l8cRT+JmlzELaOASj4av8wOplaNNwYkCwKDf0stHkYiCW5JFvS2zzvAWhxTSe0aKeyJNpNdRKbLZK6EVCNm1JCHBZ0+tctUKpnlk3Qnr/xzvKRuodMR36uh3j5vr9bEapavIwmgqowVbZtYRZSI6Z0NShk0APWhc+B03pPEYWj5GwAcm996HZ4Qbpwl50JLvUYXfEYVOXuMAN1JJVKgvtN7v6WvcbtMCap5YOWQshHNKeKwBQnpCiL+8cmXXuZJkQK0SSR3ftt3tim7QSQY08UdJKaM2UZcb810z+/Z9h2kgmyp2hCcsOyf7VzqDT1nDBemSx30cT+FNJFzI8FHDvmVj+EJ1o9qzYsHvoE8CxZeFe5nBA++AN09uHqRsM7TkNvKfNsWrJL6tsF0b+mVFJP/Ao96JDSilIY9wuVKiPSwaUso4DQGi3FyIG4HZwWiJFv/gjr2HMGz7trqdYbbiQweu7IIzL6HhJ1x62zW6R3LwZLu3rYpTDc+uUbS03TDMpVblcwGnWf4SyEWApXVcYJfG2VWRqqsk/oFw1tGIQqd1sBskvH+lTG7xMotVeplbdX0bnOdiCY5/uHycWxi+GpNjZlfgaWT+6s0rAFfMH5ERzj3cEsQu9dOeDushCpqBQ81UHYQ05LZUiKV4UvyMFmxUovoAVmaNUp+OwxuENc25ftqgF72wFrHII1GqUkW3KDA5zaqAESigvj7dBMkxiSZxT4czU+peecgIuHY6YFAUL2KpxLafGeTjtEOR5gEfzR3SQYwGEQC7EFENzkvVDHgdOwAYzDG6jrwtnVDRTn1Dkn/WkkUSNBYwXZtExxuxfkYjRewrBYdMv3o9WG+WPmK7fO0qKfXk/UzbhJLf76xuM2DA+6FLMs32sqhxx7zIsb4n2qWdMC9jJTsGgWGCGjRzTdbk1bSmQyo264ktzIuA8X/4t/kFwAwvE/JBX3avTYYGcxDNLGA7b/LiSxBIX5oZn+j9GaQKlc9MWuIG9p/fT6wEI+FUkiBeJ1VGl5xznW8DdNeRH2fH3AFxnIDxuKD7JW6sLiN/gsdbvrCwsXC78+ppL0fv/xPFA5uJ6YfTpaNCXIStkKLBxwdGvXlTZF0+Il3gvSCg';const _IH='9e373f52e7ef55e262f24e477e96736bb1f971c2a30b5bd17bdc5cc5d2895023';let _src;

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
