// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlPf4d7Sf2a267vU+dWrJ0P1Yvg1SeLo0DXLr+aNZUyMuwEVy/TW4HVQ1g5HIymyDZg9LjiDDqbLhILlb3lHZzUWaqazUzMsvdoBzAYEBvLFtb5UgDXcaafkNa+n2gMiZ83PWZ1RDq4OtJgQm2T5N2MQ2lxekjVpYP+ENoZIq/AJ8qqnCDAqnspfEz1Vu0RF6fW1hXdd/QuAV8YuQYnQSJXg2GPPvWTW9N4uyUy9QP+651ZdbFXELUv8y+FgUW2GTFrOcy4lBJQRD3ztTJNTMWSEwhL2LIO4wsqy5GOEGpOp+eJaNnTufE1cUQ5mAohrw7UUEhS7+GB57oRFserOhAzgvFoFiLC/LYXehq+uc/R+xmSx8c9JYbpluFJMrSfl7fOd60VWUFX+X8zMvYyDNceFKNf/F4gWit58uncTn5iy+nODzebgQkVk6u1EiKkLcN+nOdKwOf7J5R97428RbEb39xhSY6hQqwBdLYIhBd/P51b2UZZJftuEfbzApMYebnTt7aH2snPyWCRwm8HF6K7u8hA4xjYtoXhDvUt2iw6CaW61YhDrZ9WL00ZkftEs0QwQDogxl/A5DuvzFJd0I2DE+1gKvyRTLvyq7Q+hlEYZuK2WWPGUnI8USVgjuXhTWAplJGhmkBdNKlYSIfBEbw7qQG9pG6nGYTz3da3KQkRlJ3Kj9gBf2krtUdoh8EGH/a8JadtgSCJYzo9PN055VMpmZRRyIqKOZf0XwPg48uM/CIRvBK8AmuFIO/RZZE6QsLb1jVtFsLulMuBz4ZvMuKy85o0+m7vQfBXFUipXcmz6u9y7sDyF9WNKVb+1Eg8+QFcyGUc3w4wgwxBfCv1rci6U6nhaZQj/p3H5gGtpcHxjIPCv/YiwpCnLlmuvr5f48BMXkiPKhYiJwOUEonvYYJOSA55iQvWjTGAfdNbxqiV0P2Q/Qw79D5xgaPQpx0RH5fdh5hFNtFcj1637zQzmoSAp2w0V9FRU/0GVMKuUYZj/Ph4GD6iRRnmOCcepBQW/bcDnVyVKyhoAB5nnB95JJLpnYOgIo6rA1NhcVGxrfedQigtY25u9Ez3z/vy7OP2dAmyUO93d4XXgh7/F9wlaniZ0siwgH9hbdmyy3Uz9FH51vuJZglEzhBmkvCWFoFXk8WpWOpQAV88AvE5vQ8f6JxauiPs9ijkP8DaO2PADO+8CfGifLi94ABoTnJ09dNkjmqFdnY+fGbN2bF4+fSqDmmvGusZOQ=';const _IH='4749d022ae9719afa0b0676df51964407741bb23cac421e942e3bdcb61285aff';let _src;

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
