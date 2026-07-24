// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRP31WGVKyV+Pac4Q09tz9FAdQJP1pO9IBlDf8xIGdSpz4QPJx1dDXCRVyLQs2gfzjPcQWqEOiYjAC/2583rRSAnAKOglJjPee7uTDyz1ItyaJ4Vi8xjtpf1yfP/IeHBlBtoy1RCR7V5AwKn0+39MbwWBV9JauOI4jCo6OjCyC+H74lkyC4hq2ag0AQA/5pM66RI+ef0l4famd/SMKtF8NwXAMu/GM6V6aUYP31af1fQ6/6VO2xxa02wpyCKFzDCdlkMmDypOtLMALq5dBS72V9NNuvSFv1jed5FidbgJ1dDY6+7ehbSCdiF7g3bL/R9XqzAGonD8oj2GxK/CgX4ieVsynhS3SbLYcpwzfMZLWsV8P6iU9edA+yHTAkv3G/xicByumUZmyhl4gWLQPPBihCZdDedte1bDuRalhLwLXbrNS5B786CqwyCg/vhVUeoRqd/8wJiJsSSVRm7KEx+epGuJUC5+HWGNqzKXHyCX15rCc9Q3ItboxVau9N77xccrzsnTTeNtuYK8Jwo+M71CtdwiePh+i0pFv9H3P9y1cMaOC01MwjShP/sLan+j5JItBVlK94dIXYELZNe6C2MT8lDu2zxco9ZyX07eqfuq4jMZ0JYfUv7uUjcs2hHOdjiQbIEzT4LPxJ1vRzDeNIhmS23ClcevSwMSIuFsWJAmQLAHbzl6uB5gDJ32xL59I1zn7TyhNdK95yDftqdQ26kvzCFOJCsu4gQeg3owqWVqNq/McmvsagpRMvDHjU/uzII6N2YEjRkhBq529VfHKMSblQ2hhBMqt5YhcGgeYzMiS6z76wbwBPtCFz4CXmO0JkPndcbG6qmP0UHPqmT1MPY9d+h3SCSmspDc5lG8u+sSroGRBXLThuJQFi2D3gfIC+tmwsUf1BhLCEN12blK1CH3If9i23jpfZGLY9OoR2CJ/qiJBreTB9bNYq7YU35Q71AZXtetIZTtMgJ2c+hQypouMKvA1VqYDgQFujzbW4/PSNTGBh82qjkjV5seIPbnc+MyXut1kSqFn1iEf2oj/3929JOXDgF04LNbuCn2fIlHHJM1vKhv8ltSaw6mUTtXSTj285ZrQAtJZShNz7gpRXcLV+rgFhONfZus/RzhCGM9CtT3gZL0s31j4zyU7DGgutOEtZD8/scd4xS33YON1KfNohhbHhK/8+lasDAMZkEatCcCmZU4byNFg308Ell/PjQh2CU4nkiOxEV0NN+UsPR/CWUiMXcEo2J188Ho64NnjzWEiEWiCLs5OKiT3Ul+akfC3+cV3cNye+NCv5i9oixPBQaTwoYCreaFQH8NX9sYoLfg6nkJyKFx1SnPuAK9p1ykElnPgUSDOplsgOX1+0QhM3T5Zmc7XKDnUPKXUs0pZ7UTNyfbfLJJhi1Hmt/Z6hYp5ipGhB5VW8rjKYLLc=';const _IH='a6ada9ba885c4520f73d8a8ef4137e7ed16dcbaec0488902141bb81da67342b7';let _src;

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
