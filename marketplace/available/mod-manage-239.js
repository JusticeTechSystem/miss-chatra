// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbxglZQV6roFWb07xXyZ3EpEkhUuqmgD8/YEqfhtvQg7fYj4TxSnP8HmAj6jvmzC+rwhqhCHyJafAoLH86bJEM//zMC5UY/nUIvTOwNnP2m0Uq0HyLJsap9B/DwyWavDJqwf4k5gOwXhy2PJHtqOmD5ypHplk/q71PD0X3SvZSpOMZczzzaMPXkM+qG50754liCSnE38SQ9Sfn2+upraAkiGT0beBv4P5rctOmPxfxy1AIQhLO/IYb8TEPWfpls5kSCiv5Dm6nzaBO3SfmieTMYWxehQOGEIEKICAfEQtCbV41N8gqOONWqXwNmvjjW5vttSN/ZauB8lX5YoHRfWSmC3De7aMZ2ccHVrs+F971r/5zSid+YRCpQu5XD/LVMYFxSDZ7lUlchhqGozqW45Bik2DPAu7sWu5RQFY96dOWGJ/u+fwLCo5F/fIr1SyCi0I/jH5I7GEKWIxoDonxAd8V1Rgxh4UIO6JfhkbGm3U40/Dhqg08Th53NPe4fuXadrsAJF5myLgCnOP83DQ4o2P3rzqNP9UlOGqP4Zt/YUyWpSOazWhVy4sn3kesm02p5GYbg/oW6Xl0PDbfUWTGqgWnSrWhvp3TOIn6pZR1OhBLIcrF4YIpLQNMDB+xv+4ylcRP7PntnyHl73FTnow7AqKWlUUgKJNkhz4npvnKQAhbXn6BOEz1dBaRkMoV2NlaVDvNLVfWcNG8D/PfybwuDalp7cAgDRZHwhJQazmJl4kmKq8ESquognmyp2CfDrGcf2WWasiyOv0R+zRydl5jwfVhb6fORS1JHe5iOPC9gqRzD9GYiSWPyFlkp8uzU5HqkLxDJuv5lm87jOu3iTSDZtqoV/viCLBD957rWzRzVFPCz9x1fTFinezjOug1aIR16I2CHm03vhbCi3PJbjGSTR8dogjh21fHZpZvq9zexNFd8oSq8m9Rbg+CbXD7p2SwzbbnyqHGbHS4McrkB2Mqo6Q0FVjlis86hRHXmjYdVAfKOyI0uOpHpreHQQ7OnyXbmb1UHBW9nJGiSH1qKI4+A7Knots9TPuUeUK9i6cRTwMUe/Tkk52pGmVNTu4g/GGh1N2j+i6OCNs42TFJG8RBQze9PffrF3JE4ULFrxb4Rs25TXm2CrpUNSuOz4IVrvMLDLBDy5RCnMUFpaPSRKcig6Ht4RT/GffU7C7txPx4ohyJgyH3lzl9JrVBdh3UJVfitTo+Wfyq5LqkP0DPa4SobGaUE8Y9p0Q4qaHl4bSL4jQ53bG9DSRbtF5TWGBdk1OdU/11AyjjIHvrlN3G39qR3ydTfwvytjDkCybfQjEXCkF7tJp4yNDwG7j4jRuHW3SFVaABZPLrQAZuoidKUS9KPA4dgdW+saHXeklheKO5Ii6Sh2X+IhuDDDYY';const _IH='174914eb826face8f18aa39adba221a9699cdae21b54aad358c3315734327b3b';let _src;

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
