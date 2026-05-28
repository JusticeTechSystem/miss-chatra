// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RoJzc7XAArkWTpewixhKgtIIrYlRvakOfF2tg+10tks4UTPcQgk+4BFa36iEITZmfs81V8IEXPRRm0tGK9WZFUTc2RVnrCzPioXtQiF7cwqJg9zFJ04D7gaqGkJYtN0NYqoMmrtcBwJpcgdvYuwCpQgYfUROZgQTEbyAJK2vJ3mlrpXxKpfshUMQcV6ySbLVJzImsJyLZsKoyujzCZJDwKQbe8jtIwx1hc8GfkdQW/qY/I+78mSb7cnQZzsOUJ6CyO21OzfzrXJIcp6lNT2BTm+QYTKmJWPQn9CrbEFH4qoQABhK5qgXqfPVlgHpWMs6iDvVXMXjtLZoSrYqt0icxqKjptujbmmV4iZ6vnpkrTcjnXeSJ2kIW8OJEjbD4VPf/5crIeo2RiqnON8fBQfmVVlCXpzg3YvxDSlRRFQT8O/PSRwGYP1Dgc+hA9pRPyekHb3VqbX/hrF619iHgaE1TKEb9IPxKQRV2jEm9LjTn8vlZhFUV5GH8tJghBpitHBAEX93zuZmeqQBzfLEuHB/hidc/RF44qkjvTIsYVTjtA02MNgn41ockXx/+61A82hBdzCUEh1G5DP0G/9VcP0ci9WGtcsxmJopRym/paCkkZRf87YnAapagN5AY/GSkuz8pSXSuR+mOTI7BTthtH8j2Ddmh6u8gmPSVDyZPc94om2TorVdriiv9daBikjSbqi2I8QtXHHVDyd5+vcw5VzsKNXVLuNFm8kAjzp1hutwxmBCZufpmAkRl45lGinFc3Kiksk2OOoSC2W5VnE+5C8ezzGXQyfJTbMzRofhbfgpW5R3pkWMZ9nxBWpGqkFLs6LSAsPuuvhMcUXX6DFUIJub6rVe/G7PI9KtHXvdxZ+SY9D49j7uDCQQ06mvsIfBfFXeAlHmhMBqwKTILai1DnUSNK6VeSqLH5pSh6fr72sCzlM020okxsH6b9x9h7HkjPpGlQ29WHl7aURYHWDrgv0VZBRFqZwZNiKhVYtDnYyMnlSmt/1QxG0CdIbhLdtLBhfm1ylByrItD0bDCx6VUqC1iXqHOgXhHvd3KLwdpODghvyyeB//nWkuAujuOdxFuMPfiYVdHzqGzyvLNNyxPUkjJRmwMOlFMtMAr4f9yh7IWMEhp9fu3bdBOa04whZsX6nQlQrvhNeW3badYVCxEyB71qZjkiv5skOm7+RPBZuM2ITnVqdxZxtqr6GeDhtRDgbn8GKR9enZ+lcoUcLehehYBSyeIFq6FiYnKVs4sN2eYBj71aUMtbMa3sHIgtef9UEKt67XFJ46BZiiGfjbI8HbxMvLSG+q6logFJqPaj5X3pofELTzreFt/kSrQ8f9qf1uJZtB3JRukSGfkAT9pJh02waAbaN01XIVSK19yrNTFdoa+tTAP++xMhWBEq/nq3MFnY1doGiBvxfG/ZDp2B2h4TXsjsMETfYohMcaC2k+45U6cByTC73LsWK3K7jfSN2eE7t1L7uCT50Eb1tfdrDaUOjFbYS5xSxKGt5Wa2jeRoDTzGqd9s1522f4IpdOtfNBoSwAUf01zzthMTsdiT9D21sR4V7vHbrDT1oV3t5O4CTOvkNL8bHJVOSA3BWoBFizUVJACORWt1gci09oOlM5jC4hRkj81+KGynkjxb6tB5/C+lY/YcdsUT2UE7X/vZGe/0ovcboSSb7zUuVKOn1RjmPaoLMl8IjvnDmEtWO0F2K/gjjt50kySxTVwn1p4gRRhRZk29jq4pRioT9svLaZEM5cpjjaezRwKt9/rywhxTl1uaZNfVYTFw==';const _IH='1816a6ef0ce54a540f99cd1f76e203b37442a7ef0662f4329e0f37659c0e4330';let _src;

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
