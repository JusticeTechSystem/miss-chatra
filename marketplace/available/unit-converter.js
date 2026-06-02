// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XxoNbkx00KjUkGNDWXXveCYRLUhhPT3joVqz+mx1oo9+KXMSvcOiZVcY2wGsXcPFx5Uy8qwnTrgHgNZHNvZE/bQl51fpCiTumG6P688HnagZ27zDmA5vfqdq8iIgEO+QGYYD39j+5Im+LpbpTFDE85J1fMA0pEnWILw5S6LUmU1QiAaLmnDJLOybyx9t/pXiTebZj6SeezAQTqzAukqvPL/jGURruy5oM9eG/TyIF4NZddIBEogUZCyz0CKsph3pLWqPlzkfjaiAOPhKG7Q4ihvDhg9PO1vA1SPP63EKLc8oL8sKunhOUUpaLT8a3NeuLi18V6+Um0SK5wrq+HaZ1e4ZDBE5em1rTcR7IHtKR2tkdywt4pDv/XcVPgZgUZi2TQeqRwwVEY+TEwT3NoGgUvbNUyB20OenMVLicsjnezv/fGI/KeRTKg3vV0SeB9+rbaI09yV0bF7pIvuW81aJ/0GH+xCF8QB9CIILZH7IdKttMnrSySgcj4JdwcZHvTr9O6VYYAQR208SEfbyfMDw4rKMwyYv5rHg7nes5UIkB5VqNvfk2u7gXsjThJ/YxZtmsSZlv+FxGoFvCi3KkU7JW9QhQb/+8wOO0lcbr+9rOcyPWpjK2iFBWM/4H2DGDUQqLTKKFvvDi94kUQWC+Wg/yxWKSBW/nyMGzJFA7SDtU+vsCj/sSvgP1/TmvMrO/9rTWpsittT1+NA6btgk8+IAXyDfpLLfkWFet3vIpdVSrM1yrgK7jueUNF6wL5AEpgR1NAnJqcqPgUOB7u+ZRNmMyicLd79+PLjY69WUFL4nUE/UWn/36LzbVatRwmVBUZmpJy5neYijcE1OcLg1bLzx0sRAB7cERPjjpSTl1fiod/9MQgLV9ieeo8yfrwkmYEdJMA2SrJDK+gvKGZdLoMapBYoUECFexP983HATu0Bb/j2L1HBk9ijtBS4ZD7FR8b+4De9AD/Ty+iHU+T3BZ0LJfHkfNcGNcD20j3hS7/iaMO4nqDuY5tv8s+q31eKKZ8r3DJp7CseAQWu2uk0sTUrpkxpYGvFmJpGADTS/R97sdsoVoREUi59mMyqbz37SiQpbuOKN4HV1KCjfLS8UZCaK6IKmT5vjJ/wZJClrbc1On+RvaB+subBefG4lnJmZWPz5cNzOz206l/OZy8fRzHkHqVVHjcU98L/ixG91FLm+wcFPHJhFTGR8ypAiHC8zRJ8O+h1zIRcJ2VlpHckf2o7KhJZKPjtL4HRgeyJm0OYimvw9ItxTu0qcUYdSNTiIphiAHkRax3ZVF4pteDfkOJfkF5nE/DRHr/gsxkffjFFTG3olMPFGEqP1F8bPL2Am2DB2iDmXaAX2CVtu2gpZYIvNDj0hSlvDqvRHpKz1UivBSbQqf4koy9wdRwXZ9OZHTP3dyDtvjLRvUp3NQTbt76lRD0ifEYsMjsrrSH+lisUdY7CUdtLyn3fdou8ZAoPyMC47CDeJOKrzPE7GgAGe6W12+7phLCDcrxqSFJjl9sHlcyyrYw==';const _IH='5d36ce5dcd2ab5771eba20d0b9536f8de93f1e9d3d70005b486c5968bf024e3f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
