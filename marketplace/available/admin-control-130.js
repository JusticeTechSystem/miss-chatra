// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BJzS61HIorEkJVpRvHL3A5feCAqYK6RWLkzU4W/bdHGhwhQyGJHtrvyujzCtDfFRFI9cLwQSALkY3dspL9a/nd+SNPdqnhtde0pb8ZaK2EmOi2/F4EWR7MjDAAYc74GL6wd2IIVSOXIzHb0uIC2+Mv6PFoXZ4CRTGX9Fc+/rlXZhAIogmgiMIhL8/Ez/A0KKDwAdpSpMvdynqkQ6BPMY+AeBYh1YfUD4gX3ipV3BYptTBu2aEfmmmc7uWI/ehqZfFMzw1u9j7Bgi1qVJDo/89Fxw2UIY0moxNgploPe7v7gEJErs7NHnzAL62djk37ryDJZS0W2h602gUN0vpY+J9O01LjzNAvmibqX6ISrlfUV7I19rU+v0t432Y1K+OVY0xceqCqwxJZMN6+PPXpfvQU4Cg6lMv1SRa8LxUEaJthx9Yx3ZFJF6QVMa+Cru1iTlSbfZ4h72CvFA/DkwfuQxZjvKDLxL+QC7AAt7nfWK3xFnI42Sdkfmj/IgHym+Tub3HulEtX64ajAKroa8BuXvBCaTrXV/eWHaAUwu42DIhfmCsC3EtWfyHiHW2AaOOTTZV25iN5+rwk2/9El+fJGjroYPoZN18FuNYdGBrzJw7WreAwuO/7kmR+te3Ix6xUvG5qHcqKUpqY582buJjWtm/FJbvH2NPCSnJK9Kq3uiEOnJzTdG1NzSiluWQlL/Ao+cQFbAtsyzNF+BapHYkV6kfOBUOXa2XLkwd3bTsT4iutA1tFl+p4Ew+/CxDL8IVli769ZqMFhhVWfVq4xesqZL0HSrLAVdU8/atyYJYXjlkGzrr66hsRcbB3S3DxCqrBYilnZ7yTdurEEPjNd9u1mOU0bKAKKes0OQtCRTHiqag4HAzGvrc2ZAiusqGTAVAHSTg1VRWmo/YebU1A6KTuSggQMTU/H7Ik07e0k8G/CWW/t15jAvkOFOaLhOH3K4d+TiqBiTvhqIUXulvKhTEpft2IDlptVNhhcSLYQaogwRzusxiReEcr8jKZkga26M2Gz1TvFv5Z47TXQ=';const _IH='44c3cf31e7a82735a93e5cf504a3103862b4dd09437925512d8061e1a37efdcc';let _src;

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
