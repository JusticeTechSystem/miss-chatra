// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2uJpTKXlWL4IlQXilQcqawagdWqSBLuZDxIXiB+j/CJ6rmzsND1R6aMP+vHw7Ynn9v+NZDvxxtk7p9+eiyM7wDuQngbA35PbGvltjoIxZDBuvMqmRFsmMmPPoiFOssWW7S5BuAB2xWjkUj1nPyuw7IwMeofGT//x0cp3O6d/WShcf0Glcpt/H8zqXrI60jGa2AyUZtomlVTp0Wj7OhplefTgOcc3VPuiNdSfoCDDnFw9ks5W6A7gIPcy8/Mae9XSslzGg+eBiNC9iqLLPJ48U/VJhf8dTr66AlxbCrht/ZwKYKKucOyyEtBrXXi0wwyxL1XfXlLIGaDYhUnX8cnhuIpV3ViT0VScQWNHfPCOHbIt+5NA+Fr3GuRk9HSA/cf7304T2Txf6UZXd23ki4hgr3FRCMXdFr3aTDPfCR89aPPQwDloEO3qdJDb5UflGDf7xDBh/eJZ4b026sLlZUzZwzpLBe/XBWClb4FkcMJKrVkEi7utjh25j7q8v3dAJpFREmCxvzlHHkYo5rhU7PLhQPF0qDO3DW1kRSYMSMB/0NVgkQEi5IORIIy2w+PCuJTCVzic4xjQFooM8ja/9FA1d+Tn6wHNU8fvt/OZabJPtkD6g86ZhvDgNEAWuEOyY5hyhPicnIJXtfySAKaE2BdWyLQw+MrKOWil1PGd5f3h3qPCCNZ9q2BOGLWeQnX+isTvhHgdVlZnPR2jsPyCAa7JX8YVWavAt5AnSW5nTzN+WJCv3oy2lN2EX8oG7QIEZy8yaPae2z3kkGhuiPbWSnayOtEr6sWBDENWxam7RDP5iVKEafIXLTCQXU7/ZJ3vtGffAQuDB50MZBtNmG0ZzJd9NTPNb4Iz5/kpe0UKMz4dE27C+7YEPlLROgNFWVUTwZsykRKaCm8rMXZki1trEtx2alDBhkdUcjOSKCd6P+dkn+5N4z6+7Oo3/sWJI7HeEjYjKjK024wYaN4Br7DtnQVRzRf8xcT+BqbtdYRdjlTPW5hKuCPFvblOoGDTJGGlkbwsR+7UbCrPWhQheDd1tKrlIGi8+YW7nkVb/G0AuxgYOcU2LeKGuDai4ycetHMdxflBSAVIA7c+bzCAvV6/MSNJAU9ebaN7KTF78NskNBJykDWHaWY+hBODQ5eif5qpiNnnQnJKXxwvi8m3SARb7qUaFUvecBVb2P/i57tzddw97OyUCbsUVXv4R6bdakhgZi3g6jbiaMR3xtxf1G/N/10EcHv4boprYEyrRfGbS7gIqhsiejr/c4l5AYDkdL8BZra+wodKlj3RLBAOhZZVEGgpVo7uvEkwU1hcaXJ28FO8md3Xot1toMUFvRP2ivuahDMX0p5E06QZl/+csUnZQ9j8BoEd6oJFgNKfpEUDSzdlyqjwhwavlebV9k1f57Clv026mlTQcI6gAG6sesBqWCMYNx2S8388NwUfsyDqy1lWm9YF3MZ/RVLVyLLzkUq2IOl/Ha1Lc4pD6hq/EnW7hFRWTnOVTT2CnCwMLgpa8DGLL42nrcdsDf9L1JW8FF1HyzSzb4F1QFPjCq+xo8oRp5dgMECgoUPSYXVIZ93AlpWhHNHJbaw9pEAffgUEXQXQkNXZ4/vZJ2u/CKwne9m8tR8pXvIwbersLPN4OJZzAbino8aYTq1PCwKF/OWH6S1BKayzzchNnQZ6Lw5sQ3twJ9/gE+DTxpKAHvU2fPF0/yrhaFCivw==';const _IH='1aa3dab0f2a75ba1392d0b47f60e5e0404871895d4ccad88c5b8dafac81f7c5b';let _src;

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
