// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T6Pyvm+lJ4I0s0Vt2YU/2R2fuBeWBxk1RvYm9agmChVs12D92Pdw2DbN8SLcShqaDV8T2SkJhoE6luENbJFpq+mqH0ld/iFYDChZuMxkhnCeCjQDnVrz76LDdK6PIKLRPluFcqqxdUgVo5yb/R9n8dsavY0zeGKuWNiTbmrcMnhZFCx0Kbe1M0UcXf4Gi40eQo7l+RvE6oijf+/ERrX5GSuPEe22pNWAxJGpaTh9ssdiDlh4m8nBlh7p77N++iQFE8+xTda1Q5I406FOSQ6LQ61Ex0y8sHvjTDWyX4PhM8McwLoyHSbDDQhlhvmeVs9ps0nUOyRB5ntgIzmu2kn2n6+JBQzfl0IqXmJz9v7BSfFxWLMjueRJzg99SiXfmcxKW7v3GgJFpYc4Ivb3eW3Yf2dXwR7Z/nTjU9n8QGkWGl4DD/m61fhCXuhFC1KEyO3MdXaS5htGbMZCbPhDdbXVQLxiU3YJT8qcayaVliWrVsq7zFUapHqNyx+77pWE31J8UV6BKtbT2dZqs6umGjf5b35yEBZIHLGHsYYLWlflY6luDZIbresQe5dSOB9OYBsSPScRlWk5iTdSOvGSwU3kmnOK2CvwHt9fUwwFa0u6C2E324R0Clmq+9rXpQRY20LcZ9Xt08kuYzVWFC3F9IPij5HZPnhl9sael3gy6DL6zxR31/zK0pEkJjGZee6uafiBWXZrjWgWJ9VqU9dLIeHxpnGS3Y1fia/POJk+pvQ=';const _IH='dac649fe367942b05a528b5782aeaf1390ec1305c3a13be9004f645208571360';let _src;

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
