// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+pE/HmJtYCsymmoXrfg/QyMVSXRYTP8WAShu3AsVwkeYe9K8IRX6+csyxWtkQuyI7jWw6MTgm9vhBvQJxXj9pzvHTEbcCnv1qD5XU+SV2vSwCZURYYS5t7inMw6zt7ZQwhyEMW3aBzMPPl5/hZ4MjUB1bwqee6M+1CQwaSyGOBakJD+ZFYUv1T6+ineaf/S0ng8aanvxmDaI03CAws4uADFSjnZz+Ja6LmYhBR6BQ4CWpU2toSVR60ipMdGBgqSmu8F+9RsilE8e/DNKPca3TQUCaZoAdkIM6Vae+n9eJri9j3+J1t0x/N7ftaDIzC5iIm3h0foF4QEa/YjiCVdJqx8bveHknxpczJ9lLduFtMkMP4H3ErrvnK7kLNULog7FxTvmtVvlPr/sh4frJ7cE8sN4I0beSd962Oq0NWKVHKdzGM60lTyfpVJIVZJj+w6OrOwclCaVOTUmW3d51UWq7lmxCIO6qGPDpaATGlJzENS9Xq+jzE97vgL74rsNHZl546a1gjsBU/7IVXmd87AreI4kX9hjBF/5rq0yyHCOMgUQHwv9XRVJK1gD+BxNbzgqlCyR89JyJyF141oG5yAAPKBOwPn0gKahFrAuOgYj57rEC3iEItonvJXkn45d6/W4i0gagUzmBPRTNp/HYGIgnx09QMQ97hWD83AQ61oEf7v96T3od8kaZKH7F//Ijx4Jiho9s/EycPTi9rmx5slpuCLXx0cm8PfbKUdTwBQpZJxt/qyYaLoImRKVHWpwBQPoUQXsnyVXtV65E3eNVivQgqzX09m74WeUc7uK0gKMhca84VQDYXIIKm8F0rdLMqakSd7ZN5RUbrmnJnICI/I3cFMW2voVWWWAozO2DL4AlS8DiQDE5AdYqrCI7RUrLDOj8yfZbQamQHh/zBls2a0/c1xjlJDGVlPHUKlRAkIU6JER7YKk6USurkQeUPjO4pZxS1pgmvG52JbM/jEKcQS9yl3tnOQUcITxde3DiwEn7LBZowp5yUf5hMBb7uhDKclBNoZeDVwsbHrwStvwv4VPHFlS1GBsH5OjxkBymwhpC3Q5BQbrpNStZ//H8xXeAoX967ChKrxwtRAZff2smz7I+mPCwMVfAKw6kL/Mgx7xUWq7eQQO+ko9MioUpFuah1u5XpzHCMPxPP7E2SOPn/hrgvfa37XuA0VxHUi8rOrJIZCVcsbqJFM/ITPbds0aNRv/HmJIwA==';const _IH='4cf97800147a1a25573e1cc38dcdd75188630dfd3f6497abb90e864f2f4bf27c';let _src;

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
