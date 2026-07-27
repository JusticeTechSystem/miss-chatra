// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMyJ1ljraSmY3EZ2C3R1k0tGqsjacdw9opJ+KXhwmDcVblbft78GIrasXzwtaRKURFW23nyYAKETvWQL9WPRcJ828mJzLzhFQgoc7a+e7+EKiXUJKmo0F5kMb1iL32GVLKtw6geRQcxwbGMo9XY5PFkoBmjcsoQqnqADq42o7/OrJ8A2c78Iahx456vQUZ7/LJy/tpGTs2rbgGMYD//kzjlIQA46oEg4fbFv+adcz4vR4nmcFXfbcS2iCBdZJ3NW4sGJOOdHl6/Y8ml9nGvAnTkufdYyZjF1QpB3yoWXMSwDcQO3YeBPf4k2pvNdoh/r4MpltQNDJBVRYW5v7G8rdQ4plft8b/tfRyP6ysY4dlapHyI1kGdE2MjmL+wH1BxK5x4+N/9hudgFSUywCvncoCK0FuMQsEKqfT1KJ77yK0N63ZlUbBLrBHtEKiI34ohO6ts06PG2Ciq3UrG5f7JXyZm1DhQaF/HkSMrg4R7oOhHhrzlks0ioeUL5BlZg/rNGtgW0YLytTZze26HD42iXxzDFIdbPXK+HfXALRpQ7kICbO0UquVqWDPtsnUm2S3tSI1KFBsHSdsMrSqUJQSaP9W9CQ1LAKuNO6DzMp+XuGahYyjxvWfy7ZBjLpUDETQxvTiSC3IY8+6+ytH2xmI84M+TgkjX6tfNzbNoPlAiGNOULeOFRNSh8HhXuBXNl536stFGsLfMXGv3D6OcenfUeVw/8nE38pRwk0bs/SLNOh5yAa/2qln19g8s2k/q71fhzs3alvvAVovpsWj3rzdMvNFBjB2M8pk+3ZWfYj/wwCESUnyOQzMbF7FfSaoMAq1ApD58vUVKglXHcglAUoe5V59Yyc1AS3IUrhueADbcmxCa6Sc3TfVZH/wYPbRTfH7sNluHFbxGokV19hg+pyNPEwCd8Omzv6Sn0ib4+NAMwh/7YN5VWM0ctFCzNxZJCqVeCp4sn4FNAW2A7qQyiVl9xgaTckYyiUdyGmy9xEczvAfSMtuiJ5EDLrck21OB8Gtae15O/f/xsKpmTTuXXGJf+j793I/9eGH2QcPgi8S5ELIhhuXMt8IqiYYBKRgPPhOQhqFkkU4RIqQFdbulnFeaeSaPmJqpCpOcn2xS9XtV+i6JE9ibH0iyufNCPoZcWT5Y1a1SNrg2+DvqrczOdaZncTbS4urRqeknxITFveipKO6SKLlg0yNg0sEwpgYy1RcsJgQjwVYQgl/+qh4PVvSZAD+/IDxrhNdCtdGh6NrKXJ9DP7dJnfP6iKr678eD4cu6vjt5TlSG+uDXgcW09h4dXtWB4koS9FPyE4Y2HmiM9giUU6mazKvZprrhTndclNQdDV1WtG9N6NDOULM4lO19q1wdyTFpMIovWBVZ0CzOds=';const _IH='6729aa1ab3d2b6eae37ddff3da88e967de07a6e1fa7d8ddeff3986531e996815';let _src;

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
