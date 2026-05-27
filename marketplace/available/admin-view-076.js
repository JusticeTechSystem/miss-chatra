// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZVVfyzNIqSK0pCQ0niRn4A53IicsyuhGRJ1Kj/ojA5QYIf0UIM/gXVYEQeuxI3hrGl3YrItcOvh4g7o3QzoWkcdn2w0dACMZBRZ3MWBzfdXXgvSL40FoAU+X3YMouVEUv033iIAMuJG3B2KmucSQsHqNSEG5rMacx98T9EAVw32rsJOXvZ96YM7JC4/xvo5w3rgAXkEc8bGnCZwd6w4Lf6O0OtePb6Znh64RU5DlpRdhMYj7Yqnexer7oF34aXHiBRgsU+/wollEy2ka0on2ES+suFGa5h7RZ9gcE2NS724+sBoE27HMO2OPWs/ZSRLdrpI2uj/gXLzdXeke6w8p3SrmxolvLv7qnYXgbr74kxBYCVLq2pqdW2KXxqEmDHGz919HvQQH6xdw5GNpVG/pvUsoLRYb2rre7L93bRxJBwyWnVRnRuj4tKnowCIYvsx6hQvHpH9zE9aJwWvFLh2vgxtCD8f3GDPXDGzm2LIaV8tahn5pPXFmsJKoXdw8vj+1xYewq5l6FJYVGpeftUkpE7ClRu7fvmHeR/zTzWuqa8D6hebqNA1S+NuyqTFcHF7SsNHOFCdmbvRyd2eeHp1qgALU/9HMzbNtv8KHKcEwu/sbfXBVVrWqIslYFSnadLO+rjQYyrHgUOykfTbjd/42xpAfqshwvWdfO4tki7q0TMUm07Cw4xrfX3sPy1EICi+RYTSTwj3rRryUxnEEvrZvLYMEyDTjzAQmnU5erzSAmkVjj2EgQ8Vwb6Dkqe2/0MT1P/fTvTNfM2VuZDaA7zRdwzJfvY5TTnBfmBMZsn3lSmPSwuYBKCqm2DZxqNzoWeQ6AHlDP6eFSfsV8nrzK/YPd0eNwTVkN4dp3WHUGFFTJ5YjV4pdyxBv3UXTuxgnYfIs3HWAhj3f2xBfN7+Z0Eh2/BtxDCLL2ouNVt7Y/w31MX3FeXsTK45H90ILHBKftelnVT5mC58wMGfWJSN2pREZexvneHycKZPFteEGnsHnaw==';const _IH='f0070f73f8487d7a71c4355c5b601a552e759ee6e2331535c8a08588357cefa7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
