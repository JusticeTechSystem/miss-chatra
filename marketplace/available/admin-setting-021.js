// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YCo8OG1M/TqGz8WXegRMCzYX+WJs2ZooGPy4Uf9CMz9RVRl9nQkvTQRbNUeCPssIVMm2/vnGpKCu1d25cseUV025c/TRTZlC4eewJWG9WuhfWpn7F/uygXehrOlNtEpT9D3GMmZrq/8pm+0rC1B3STsvVCb5vxdq+ZksUlXuDnWukESuC4gDN8KRU3KA2lw3msHgboKPdMpESXmyZOkpAE/BERFvjQY7cXC6gqSUFZO2ZRRAK9FSVhEmfrV0u35hOUwJayCMqICWw95b9hGXZS1F1TSH+AkloNdca3TQzKMwVZXCRV7W/8jd6X/Y4hznd/OuI89DdaxtTU5gGo3v+rCLAtWg1koS7lpaCvyNfei5z9LvZFuMuN/fpeNLP12DF1smt/ABCXRvnW2I33WoyIkvEtduTA9Mey0tnRyxxAYFRMUgFVdf/WlZcEmPNP6df5Ecb8H0jNarLtOi5mjkMq0UoYjEk3CjipTUP5/1ctLm+51wi6R0+nCdRy3KrWkY+IcVoQoF1TU6hYtyFPDZ50xPKFmy9YPGRY4gMl6UcK6/9xhFbS9Hnr+f90XUh51ldWd2Cttw/yjoe8cCeClhRkMDfGaVbciQWeakW9a+pO+NhdrdS0LzWXPFUydP+alY3Xp9OVNvvVWWy2s1iBBOETJ/ILH6jviW7Ri2HHwGTge8JJAthwjdc9V//dHSfI0BG7n/Mu7cMAFmqPOEzCvTXT9RK7xIAJyN6Gn6mIYYEa/Jkohw1ttaozIX10srX3KzGPsXuyJ3jwRb2he9NtYukpyoZPYroLCGyV5/WkTSw5bhOS9nMdtTp9NTsvm6qy6VQBYzvJM74cSW7dbUorKHd/02IGElWSwU85Y1oBq18l4qyEXA0q4fdsxeSVgp3sw/6rlVmloPd4v6/H/My/gcpaJPFM37u5b7WGOV37S5AzjyWrpqd8Q9jJE+fhtoLLfB0kV6EcmfP9zEgJzBSc3DDydNUwX/P7zOWHfoBrVCTzDJqWmgKAyMOwmfD85eICCWsFSFLw==';const _IH='2908b9198b16a1c775a763aa3bfe24361ace176af5bcd53f59c7e41ae3634d71';let _src;

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
