// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYsLAKQ2T7CgMGrKpuOEokLyNK7pOpxWIGKFcv9ZbdvQEXsxxHfK3VGzRMDhQoqlYg5heTTjq0fER3UFnKUPYtDmUtJT38YSlo4w4Ak8QdjfIoAfjvRUJhILwGnHcMj2bv7cPHHQAZqnaUlMxllI3dmMyc+Sa+4uibKqhgQpxnmsH4KVmoSqSTMWhthn30MLslZpPTlsNKRaIoadis//VIq7gTAr9RJG72YrbhM5Rj38tWGvh+8pPRiBH22cFJbMoo8OuHYWy4a2Hp4h4247sCal6zEXDD5+qPb6+h+Q3cS3SBoS603fl1Vs+p+x9vgwth6dfyBmHTjQwXMdSBudaZms/hJRW/JLCUwSMsIy9eAiPUSAmoSJlFI6jWqyYv6eLK4ic6/7Xa4ezpkeYld/zskFU8HN1OywZLCC/tu9CJE45TKUSaqlOF2mSuGgCJTIjCZV5JmXQOZgd5oTzwm+9EjESNiEe7W31MtwQ5El+CqcVnSvl4mVtb1SQW98QLh2zeJfvMNjUNcrZnhc2INlPoc/hV7j3a9zWCUpwXzmO7/llBxjUITfwkFF1sVARXS7ji5lls5mVCpI7B3slv8qP0AxR2VBQa3dv2GxJ4iunCOSZGWSqRqCnZSgnufasBGs1EdAEC2NkURZ24TTKI4Q75VaLsp4tcJDCSYaA6j4C+l8qsIXdqI0q0dozUXQ56ix2ArsILItKtamFWdAXYN32uaSCuju27ZOpau1BlCnMuKhB0fLV2LiBigz9R89NVtA9E/XoyPzSMef1PmwUb4OJHHEL58FnwiV8wmwTRVxdU6HcKgiFqJzAuHm2Ys9ZHJaU2PhKWRHaUFDYTDEw8HtNDXDwpY6ALm0kI/BFhbFSeAUi0tm4z3e3/HZ2I0Gh1GHedhL8KcZcgq5QusBO/hsaEHE3qplFJoF0cO9sTzM3iYIS5wgiuU/xPXqjacP+5JFrhHWXTN9gy2896WHVoSIqAPCRiS5QRObiEEZJSVlBl77RxjUn06RJbMxB15QzwzWVd6dk8sOCGP7WABtrWJiO1X6lTIlZnkQ9DyNBTZ3R++lgQtEdNsaHq7zWfyjCAhPLElX9sGE06xfViY0snS46S5rSfEHsH3b4ZyVpfiHc8xzvTWlqVuijBDlFzL+CY9YG2eCFcOSnCQm/dFtYw8Y/hBvthn9rNEtEzLRyHHPc/BoMBGkVVecPldDT02FGEmtznbZjBG8mT22Q4/RHd';const _IH='4d959d1f6338a6c8d602140f3152b90adf2661005c6413cde7b8fd8e35a93c24';let _src;

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
