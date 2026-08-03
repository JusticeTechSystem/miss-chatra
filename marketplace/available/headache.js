// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEVKT9uwpjQGzbOyBEjWm0MQCyAfk/KD8kC4TgTDb4W4oJEf1iInTQBrryFie/ZII0CgNIfj+KVGSmnNB52WFpl4OufbzBN0tn+631sMTb0qCnAT5FmH2T+zUAJlXoGeu1QHXRBDK9gQsPARmtbCKrGTIfVdxao5KhaXSWhFtdEv4Hk9gmvMo1d1a1gXo+Pz50aqcabX4jSp5KDeaZc1sJPajvs4cBGqwJSakm7M6mh/1YU0c8hoU+p2++M+dmRCk7sWAOnsAv/AV2lIuL62By9CqUWOJOgArH33vtgINOcaf2/cbLTUmlpfQ7iAE1Cgs/AR9JrcZD/xphzhey9wdyMBtGQXE/UqLwUN4l3b89aro5AFD7nw5WQi0F+frVL8mmUS4klXg+f+9W4VQ1iWlPgY928TApWc0e7qyFRyExJrWl3C2Q6Ox29v0GM2zReh3P9vM1IaWrOtgpOU9TxdDfLc4+kWUmsEpGPnOnnhG+el6v49mImL7SUFOZpfkjb+Lpwr/oFz7Hz6dOwL4wlsgdk03HsGO+b66NzOQQRevNZTyGptnv2jYobXs1MVIZ7Wh7p2lCUzlwp6Cs1edHT++FL2X6/J/8AT51Vjva3SUU5+ZmSxY8s4QSEajt4OZXOvc0wB9rf6bJSK+oiH6M+JwT7xSJ//+esVjij360MAByVNCW9lVnD7qz313ZCMi2hJ9hP4FpWpQ5R/qWC8wJ9205cy6Xtw+njwfc49/lRQY4cYe8iKgLfEXishqvqeVOvOE+K9t3XkG+RV7xS9lNPWeENjKXHojZgmc1IggE6ba6nTYm6OzSRgGD/SshsOkLGz9Lk85zx6VYLWhoSm7bUHQD1kRMs6G/hUmDNH6y9KnPF15Tk4LvTZvdoY18SMhY+2egvniPBRmY/I8dri17KEXGYs2OhUBVgSn8BOR0167fGsHa0CUYiDxOpGBWGojo6BlfEEemVIJocdkkSM96+begricVuF1wKO75fbvDsejUV/sSKndCVMoaH3/PI8zj6ZSYwOtakerwQxTWaVE47BYgXxH65x+gJS2USJORDULZ93u8TfMHLVk5IGh2nsp1bvBsKiDHu/zyacT05HNqLM5NZkvSsgn4IJlwPg+hmz6cpMKTuXYaSixNj8MFlne3Ova3Wo7dz3N8ibqHonjeeMtD6SvGCnZkG2e0ueHwykl7WVRqMUAY584/5/fs3cQ+hAS7k9+zeQ==';const _IH='0b92414ad7d86f8dbadaea7cadc3d5f1b111d5e753198f0a675e70fa4fc9d48b';let _src;

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
