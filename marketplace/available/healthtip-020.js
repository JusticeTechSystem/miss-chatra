// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2FPvStd3ZzQBjPM2qYRVxND1wVxZ0fmfAHLY3ES+tB8NYhCOrxbYV6briVeF7KbN7K86mQI/LvGPPNvnv2ZZZdXgVEpbbsd3dePIEn6qKx4i6fCJVbEQrb9iigGJ+gv1BCehbPsTr+M9MQGx4/keDq/wJZ+Tgf+KDUeoVWa4AZHbHPbcUPot2RVSpBAkMCp6Xb+MTm/SHaRLk915TncW9SWsG9ZtOIZKTTH2F9IkbNxNJd1tiyDuwGY6p9KsKGL7Ozc+D3WCngmYOTviOfXlieHMh+4+57Yk0Y7aB9FDuvR/nukkimwzWVlRuIbv2O1TKmWN4rQ+Qw6+o/8vsSesFRT74PAQ815OPilf3KZkD4DS0KxyZ90yHBOb/QDwEnoU1ZukbkCOC09Sd692b0bFd6/Bo3tK1Y8ch4H/BRj6s4WXk53FNkbpBEreA4KGB2fGOtpsiaQbxpqadvh8LHKrDwlh554UJyAQjBbxnSD6otKzfVfex4KCU/EwO5SQQSp1BR+cqxNz20B2mAJWzu5ht6UHLUdILloB/GwCQjHdcKnVAj4wQsWykyJLgIkFT6BbqL0mweidgvLX6YvX4czCzmhgjr1hZyPijydtTjzwaxnz8W0l8B2YyIf1HVcmOMTnn52mRSqk03q7xO57vR23D1pxPxIV0HEniRBg2I0w7iyY+wwEM0eoDdAtQSdOYzSrgyYxsVD1pJUUeRsKdmyCLxxfHXOLAlViLRZBbndFyneEVRv/KHTiuDAhhpNQYFcmhswY/5mAdfy6NeyBpdsOrXr8wb4RCU6TVG8ZHkvmyMQpUXx4NyBYnuyghfpS64TYZ0KDdbW21JMqAkT0bFdJZQE/71p8AMLS2LZgEriQ+aww/CSMgoR9RBhdCGvvyHrlF41+x0kgnOW1BXOnZ3gAh3NyeaL6FDxPB8iSDge8IhP0/Z07QRubPyWXKaB';const _IH='c2b4d768ea12a529f991e49c5244542b89b110d42a474321481772ffd9f5b597';let _src;

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
