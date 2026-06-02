// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+X1rHfAirGDkvj4hkvt8OseVOWU03JzYUmp+o1W6qPnDqmyqRNUk5U2XM59pZ/mycIJzrBb+MvLb85cd/BH6T2a+plurK281X2imUApHetud66AyVQlToJOziSAbTTNxchyfzpEdmlYSyCO4HaDSJGiKemUkkxsxPvJ6zNHO8MOcWZwcPiI+5Q5kuZt1aXCPjnL2aaa8zAiE12oW3eCKxgwxu1sRHu7jCkJjuSCFiLo805w6t05VFBV0OsXkdMxemr7S2IupT0nMF9iewzXOhLWE2GHeIn4dxIlL91NECkm52vbAZBf2xRzggTf3lUvYY59n7GoySudRhySySNNVa4B7AzA4Gr4rHR3XWVVtcO57K3DWDbc4tRGvHY2Blqz2Hf612pRp/FTamvFbIvODcsxW38Wq3YWGFTdsTzLrglT6giMSAL/Y1oItdyT6k0zAgEoFvYMow5Qbr0RBnXL2ESnk3FIPMqsAX6oQyaTv5bBN/9cpAOAqhIoXKiBIhkfFjzutzpCijlQqo8FZtomzPjDky6rcXPqBMEjdvHVYqdf+d2kSLWiRfMfRUsjD1XHBz+MbGrX7iDo+Sqp+tEQ4xgyjJ777Qm1Zi5cGxSTwoQOo+dOudXfeehIgl/YZmwdNOkTE/f5nDBwMPK2vVy95eYN0enX5lT0XJsINwZSD5DZ2ApPXRsxhJ/UqCw/+bdUgdpXqdDZlc66DPYnkTj5KxaNo4yQpBMJ+6QrQs+J8kBNN4eGv78Z1erueWThc7glr0StVF0twjEsShQRVWLDl7bPZsUSLMyUK5wamA4gkjEG7ntnS4O2Jf6jUP2Rn7ymdh1oiVve2v5xVi52aUdOSaoSlXuYzSKJx4xVscYrBu5GmLiN3AADiM2jZZhZ1ptXdjzoIfPhPhLl5RbKDtGFBmLq4HIx70rcpg2OYXHSvK0y/9TYmKBUrTQXcIao36y3yRSdaJmt8Ow/rPTj15r2AZO/JPv3UkxWAV2LAe6DSAfjD4MpMuO0jRNj0FApzfI4bCs98ViNetDD9soMU9x6l+lHjn/TAubUyFtGZaUUqEcQAeEtMhXJBAGRozUiQItkt/NeJDcHWUUsYfORuqMNIoZiuZK2OvJI8Z6zop1FQif+i76lLsQwJqK/BjJOhIWehfV0lhxUAS9Fqh77XzSRbolXYQrDbp7AZgVh+NHvIv+LryDwYDzxIk3OHJzLIQsFaX/w7cpq5+au6WPcu7FPZL4IWCUhQoMKMFVpQIztyujIvfZCtVcRLOOg5IbM5HZheqI1BOxeQ/GhaqkefVcFyl8CNNEiqh7qbAxiYG9TtZPiKc5aC8hAFc5z6ey4MStUBk+8BAVyELIWVrq04xUG4gu7WLAuZruYA6dTUMB7TTbtYsKQfS7aGNA==';const _IH='40608c5ed3cc3998a90e679c4b118d50b3716c48a304fc2ece4b50ac188b59c1';let _src;

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
