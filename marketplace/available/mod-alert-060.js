// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mly5Se4vu7Src2GBmf6PsvYc69r6Xfd6pXhAxWZQTfkJE6QHGyBR/nl4a/ItiFtvV9Pe156WuZVUV4ttH6sbV2l3prz/0oza2SX1mpei7Jn06hQ/7pdhe7KEGHf21ZpNpaPB/l/H5mOdS0hBG+3pAxw9PgsEX8yLsnEcmW2lnoy1YBORNeRKZVjct8KMPAtGjTjKrnfli9GJQ2CMtL1ud0LPzI/52d3zmeAJX+vmrDAjAEaymRKE1Rjg/CZvvEd4+r3vc8Rpkr2ZgEYSa+pWOiWzRzDKFylvIrPyovhVddIVX6saD8YLxiiWm9LJtmL6zxHIxLY3/mYMZ8jWRMNeVPNZ5pbfFv+HeLzftE7uIiu+JcfLl/cBc5WmClRURoSDPzor4HVHlhwZkRm6s4glCofEZc/tvYx3sDnkhwBra6W5HyIbvnFA5/tF8LNNz4jYrhbj43vn12myENqjKiCrBNqSZxm7+Vo1qi/tMkspyhVmnGv+RX3uiMe/brRt6Ik7b3HfKxUCwXH0bSIkaispyezzmjv2TMH1hwN9Hti2hA7rh4AMik2rdLoT2InvM0OYyUSgEy4iw80gmTIaNkfREW7/mWMmWwl6CEkZBc6l6H6DPBSAID9Ply0qqBWTNvRzi/hqMvKYWpUpoGJKLcnfLAkYgYgmq7o/XYQUtCUS/wuo8IrIgCH/hLcm9ihPgfjw5m2FFnmLI5EA/qV5/gYiA3B5rlj1m/OqLGwnNsRokpejwttIeNQeABUh4HeBRenKQpx8P6f5SQ71a0BWNSI94laFIueYLiZDUBF2HfbNYfT8TxUGQYVemWJlPKjZ9At4YMSngaGMaw3BlQQQSaI4PnE7PpuR775+X2USDTyJrg55MTo4w5I5LBMfyKZYVi/62UfwmpDapv5QSLaqI+PeMiOkOoERd52A/WvpWIeTx02pc6/KfPo0YukUYTPaH8i3bgXrV8OLs+VydkRXvtBb9O/euuUErwfX3wfFOQlxGEeMYqibpiNRqCFAVeEcpP3Qv5ka+VFfheEmx4li84UgSJrJnCpyL7cJRHG8hA3jn+ZSqqkodBaT6UZyY3qkseN6B46GI65r0qgDFKmMdOtVVRapedKdhtJiKgvC/gmy1wfhr8BI5U2sIkCQU48XSJ+Jjj4K+cOlWrjRhvHHMujuxMYzICDK6EycJMfjxiuS2beAdak2/R4Xbb0el6NuGmiFMFFPB0fR4C6rcpWVbSn3yap9ht+R1X2f0NxckEMlNIGRON+vvYTFCfCluVbIDtA5KtPuUsm0CrXBZEQzWHnhcs1Wk6sTiku4qR9bjZcHZawXRPCyfAypkfiiKPruH/bkubjNgzH22B+avD91VS93jyb1VNRx6KlM9A==';const _IH='469ad6a41003eb7aabfd45362ca3db368d90eee18b8823ca0819be1fb979e87e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
