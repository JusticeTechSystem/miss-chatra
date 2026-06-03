// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kUuXciLi1t37RFsZQbcQOcsj3Qvqe0iAOfv4m4IFQBpYuPt6xlxPjlae47hEtfL2jb4Kt/3SHbm76U3KGMwJp6rzA1FrqOEkINqLo45nm9SnH2q6/SAExzK4Qhn4ESG38r/SMMksiVo8iqUFE2/7VGJj5KaMQ3ZxdIE3520iISZLivF1I+faPoghxPWa72+33bC143D02u53qxpxY2ayzhG817aNKYpUqqnzhZM9hVKcEeemhSNCO5GKhTjh4EDLHM2GxRHOvFNbFc47Hytwj6g8gE+MhRR0g+e4vlouwqBXSh3L8WNgOJWdLql/BujbjybfE10rYDttecqxGwHkg8KZzsiONx93DZI+wUUN0AEFlVDjvAOEEXvVI0+lP4upVHwLYbYisr2UYUzG6Y+LtuA4oHW7/NM4UBEDh2CYy50kqU7NhGTCaZgtegOohR8VQmLI0oUvkw1lkTZQexyfvAa9foZzJkfAYq+8EXvP6ItSsN4sqR+sMNPYDOXpezXynXQmmE5PqJ5cW4zg7IeodxnK12vxXRiST0Qu/1w0iJ98UYPjYPw93zd8sVzEXA11Z2RlCtgkM54/weJWOkM00lQcT/Q0aLV8HEdsXpqyKbCo3u2YvLt9H8uv4RnCwjbXnPVjoVdMn2auFJheO3Sx9UVejg9joJykV0SZDroVVwDt2PuXqxvLpKbm0bxM890eNXjL7/4J03vnGX8B1HVpmkLHBv6yUWrt0WkK5k3cQay4/VoAidbr5Yvl0YZIE3zu/r1gcgqIr5v2BPZxe7LsMYDM50LPqwZp6s2zx3nasovINzBjaYT4lKfcBPZKkhvdhSahGRUHRu8Cpp8k8UN1Lzb+f7Ee8PsqSiR+aqwfQWxtsjFHMdpD5oArn7WuRywGdev2wKbWaS9Hg3RvuhSgSNb/LikSpgThSi3ooP8z1xPPNfrTT7oXHo6ZRu6LLON1Bk9e54VPiY/hPBuGM4SWtrRlkcXaMqQljckvYbfkg5WNx4grSrTcEa6wya80jMxa0uvVlU/6ZOYXC52ethK1Xrf0NlY4Ov82fTB0ZhZqNSpmTiG90dN76bF0wMoChzZ5XvWdPWPg57dUd/oATyic02QDkCFKiaZcGhVRkF+BHP79xmHrAeGswvbhPjnu68/MPKSUE2HeviJVFn7SttzGUPnhu9Vckne9gLA6YsztUy6EkELPn1MC8fDt9J6jflc9dHAB7A/0QPCgjkDDAIXZ8mbZWKHzVrbwhmC2T0neBbiEhxDL1B5VXKwP4A93fR0PlTcATEoBMHZpvJ9sqzYcLQBO+qaudWo8Ka8Pjv4ZX24WRG3Wgct/X4cfdq/aj+Ii09VaE9h63WLdi+ad857bje+ykuj8e0C6pSET8fqVm/QtmFASV772EA==';const _IH='4aa101b115e5e88db9852a03a1a8966eb0dc055f76e434782f121a14698d2e42';let _src;

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
