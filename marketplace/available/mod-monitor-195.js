// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='06olVDBvElUM3P1ZhhjYVINgGIT8EdbbK/V93cb/OaYrtxmCIhUDJ/r/8Lic6exCBjypGHcg4SrgcWgsqCs1IxqT/9lQQT8Vvcn5XaEVwbwOzygjfFDvVShNHaCD0l0GdMjQIXNmX1X9JmNWe91tBut3qX/OXQul72pjh69j0MW++4WW8X6NVKPfenLmoL4/DR4WfQzECc9oUy7VR/eVXvze2EscW5k/tsww+iaU/HTd8Fg12R+KSpNXnBvTQJZXWW5y3uEIBmYsJym9fL/04edAzHKth+jC07/isXRKSDWsH81b30o93CaJylgu/T9s4K+vUeszXC1ZxO168QD6Qn/bWnWhjKTO1q11JtFiXVHqJQl8su+/XkGqPxsI0bEqNc+ib4x65XGsH2+SCtGKid4uCQRKZ+//wdi8J/is8+IfUYHn2r56VcCgRrOtctt1qmL/eNQDf18f5cOkccDpa7eH+HMDmTp3ni5DtlCO+CheQyf84i7MSEoNaSoUJ33FFtXNNd7QtPEWKOhmJZ3I7jp6YOK8qWQsPGPrnXeVqWORQXM6RrEfaKngVDIjBhCfhIi2YJEglzBndiN81zj2SkZD5ROWyxyFu/i0J0+2i5rQmD66Gwk7KNrF5sXsr3ky/r/exdarkryFUBc8Fy33IWf14MiDTPEsioqTCliRgEvQOdT7PcPf1Y94bvb9pI9SjK5QeXin9gF+wDYH4EOiBk/CQs31pZwb8FdW+L5KhpEPh9Bx4QStQEceiZs/OTbWzHElbUFnV6E4JGmMsbU2EyF1YQ6pk2aZEJbcsrh3F02j5dEwao3NSzLOWgKQBze3hCd7e1+TVcgBSzDLYY/Q6Ie6xOsLce+kEqIshf4IO/feH2yWUKuEkmq0HKkUjPev8TBFoG62QSRfl3QxVyiep/Rm6lnBh8jZM0znWiZW/Jggu+Np25UI1yIbfStDsxSzF/1ZHp1C+t4BAPZtO6k8BGhc98BIE3POA8y7rcfP45kfeTzQkYGU1d3Ead0I+6XmWWHId00QKviMl17kl2tgkrRhnJRqgkqVbKLVyYbhPL3VrnyxoMpvPpc+dDsfRI7fgPQnm1UewWGcSClwkDUPiRiFS25cePmhkcTqSrOEOn1xMp/R7H0y/pIaTtXjIGy7axa1YxizcGV6dtEvuqoLgAZ7N1DKRWUP0NuVPupZvJ8QrguQCEIqeRqwycxfkILeCV7XZpvORVW4fMqo9pYtZfMM0IwkFmrn1vivPS3N2xKKocBQGMNGLxyFc2gBBmeAl+IkRVrw9/9eh0pEUtdiIfLB8XGZPmzp2BMbn/wE81eyOLSPlbSX2XISY5lJqtCUd5lalSvq18bBqHEVzmWZTbdQ15zde4a/lkfjd/+It/bJZVRl3eDobqUvgGjQDOOu9Yg=';const _IH='c7a68483d445dc30fb0c899a56fd32888b6ad9a9c3a928f513b0d35f8a9f3406';let _src;

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
