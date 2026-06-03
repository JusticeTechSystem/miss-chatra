// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9wPL77d4/1FzooNa5aV/uI7/f20IbH3JzUbaQrecp5cfVQYKYWGbnbfLNbf1osuAGlsl9bRJVjgK7xhJZnCvEwi//GAQi0rfN0c8a/nnkG26tEoTvNiYqSZAh8DDGUrx28aQpD2iyRskPSuAjwdOx8/JJ8mbl434t0WVtEHbx6gCJ/6WWfvMTH6OUTj7Tel5XcDUI6zJrXDqeNzstj2Azt3sajd5ybWF5opdzP6TXbo4O76jjXyQabJ0dQF5wpodZcfNAGIIaa/87ZPQ7+adCU5kgBMLYXDW/g2bTzmScNUQQtojS33YtOnMSNGaPqE/VXAO6T8EUQrPYNsYsgX+AQlJZRncPSe2LnTUT7DEHqLytna4evwA69yTfwCYmCOMxIXcNMmX9fBczkSYABxURBEB6uNRJvSHB04pHnQcwIzxDGo8k3h/wHyqsP3qd33MWZXD4L+0sMv1EBgj6+ckGAvibZqHZR81k5omQKJIBlofmwuP8EveXakOkfTAbGRA/4aZAIeEbWnzSGrg2Mv6BSydU9B+N07J3XgsC0JqXALwOOJQGM1VKSMUgCmHp6x/ZcdSU1oOvotp/VwGajFjt7VP5Db9SqnxhnxCN+5yIkJcBuXsCOCylYR7tatNdra8mH+Rpu/+tlLEkYtGW4tOrUDhLVFx/kw5MEIBPnryk0qeXOOztr1xktsD5/8yKQAP+L0Xlc/AfkflLsZZIe3Bn1gFV4SQ+TSCO4gN7joRES4DSKQf4qNwjCtQ4mrvbyXESWFjsZG3eWoLCjS88YnUwDYEQI8iLZV/NW51Fcks3P9Z++BguP60xg0Cf8vls4pq/D+/s3f4TasvLeO5aTMC6puIDR/lCo1oYRJ0HRjIKiIWKX1srkGKtfhpPQ15c/JXoGOoQ8tf3Tx/SD8nfvH/op4p2rs7H34RWen5r1W2xxCcolUdW+Kkyy7XewcUV5i1REVm+tgaOYqaeBGwhn4gewqlOEW9WryxiVM+1rKtL6q1O6YxrjuFIbukhtr8EVTiBKKxSyw7/8hDv64iCaafwtFeIZPadvii1U0M5nt3NXX9HZcWYtc3UBktSLMQZhk9MMf1+VpH5FaOSuCx6wUnGAjYL54NB4emDSWNuOg/KF/cJa60VzdyG08smQZQt7uA9TSw4Rn9eov7K+I2ljJlhNNpLVjWSyp0QqZmYY4C3l1z2uHjQb4iyvcquqs/ml2E5OQCB3vOC7Y8EyQkV0UFAfJEtp/pFBR7bI5GKBbaJgoXtIIeLDD+Ndy/FmzKGCZgSu5tvY+lKtKXcycUx7/v+WkqK7JqYXT68ciVmZYrYCBCLm97H0wtzwPfYKekQz4+s0gySEkM2mOHO9EYt6VgwoOu1FgksPzZ9w==';const _IH='45058af1cf170d07b2818a147880b3d166b718bc71d040e2948b7ecb88f72e85';let _src;

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
