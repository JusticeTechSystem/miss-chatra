// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gv0uy407zn8kW2FVpq8DM8W3qbGo6zILNo8ieDLCPJf9iYvk3GjJXWtWLNGGWIK3equ/k1PO20SoDXHBya6BXKww6NY9LhzUQSeuqtohnJq+8LadcxoAVsNyoadJOB9Jxd2mf/RMpeAHPpoS4puZYc7osUSaik1EPsy0SwKK1gn9w0ZK7grOzysT3w6sMKwsBULHw90kcgkJVmdpKQOTpkeAg23Hw04F9PXIKEwi2SdLyCCExda1DLBt8ror0qSK+ec1Nd4rwlnobMmXGFkbG3utF/4Xg6beEokKwAWpGMhfP41AeHgN284mcY/u0Yr954qaLRavs5IDMFJfT6X6FCClGf/vCj80P9o0yv9gNX5JFyuPGZldOivqVtgjFdSDpgSJ4KFcNHtGJTcefQifdg8gnQ2XwKo/J6JRsq26cc+gIjIGPWXEA4lldXUnh8D7Barxpvm+/Hg/dLFRYtg6lWzpw+9/yQa1SPsqFsOR9JRN8HgHcGVSepFdkbpvwEvFCqGz4fiVGWs78EWDcj9F41AUx3MzPwTq5L35lUJlg5yuHpHUPQ/Kl0pzv3+ywkwV+rKNI8MXZdJBvYQWKc28Q4qQ/YzoZDBIGaCjKTT7xRPVbsv6mtkKMCdl1vhazvaeI5xl6FrdM+lDqc+iRuoa2alyETM0xYMAXiwV2+RHhaqheBUEw7fCeDiIdNHszdNZ/7qbuHFwAj/vUcwGBQk58hiJx4GWT4+1yNCN5G6BZJ67Vff1HmRWDKfopeV3eICZW13ImnkobP2WzuvrhqMUfUsFsQdyJUqwz5nDincbucg9H8U1J3vEMio6N8HOt0nYl5XVVBQMjX8kNoWZPDoa5mxc+MAA74jo+pGEcMz4f89/nHIMAPiE1SSY6xlXXCcOKiGRclNGYmNNmDvDHAsJBNAoOv4kcntLO9wIdyMwOXDno/Lxv+2t+ChTXEhFWVyAImCmE4GM90mXINf9SxOwYYv5uXuakYByR9mKLub6FOlozrVYwI2eRjjTGJE1o2BxLeeKDRJi8t8v5MmCRytasx+SGLw+0g3Rz0CRk3CZTPelAbBRJVICgLKPaN6vQXY2HNMzQ96pqeQuLc/7gH0NMjd4/OMGJFdJhHcDgGo4/pPleyWmPJamWDC2+2CWD1Q9PpbqcixvHOKyNUUs/54RKzdkVyEZlc5t1GS1wKh3iW+YOJYb/WsrHxZIpRxGa2NnCYYGj64xZsyTH2R9nA==';const _IH='a814f9e25c73ab22793cc2c0b6559628f9ffe3b81dd015464db868ae4644b630';let _src;

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
