// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RkJeBJhUSA0Dycf3fDu2Vrd9X0T9qIziNHUZh9ze7Y2ENw3bDyRi3dI8znCEphFOa+NN3YHCrbpcOtVxrpVseHs8QNaUkFSwFozCVjJQUOYYTcGExov+DTGgw3TKcTr/I5BU8G1MdaGmagjYeoRNMypDwfvc0N6XXAA0u25l7MQTIISM6p/PRadeQ1l8Pn+2rA8Adx1qwYblNS6hAXlVTScQc4O3jgA+lvDQ3Id51iX4kJ955wmI/Vx6A86OT5GzQMXYuIOQRGaMdj2BC/8QScheoSYN+jY0qVEnqZCGAqS7DJvnkRxSTwAav052hqE5giBMr/f8nlVc9GkJEscqglNvKUtQl1EqeShPwWhG1EMd0VKMMXL/DwZ9m4NCgRBZZHHtczrTbg8hbQ6eCIgZADtdOPBs23jGIoWl5jdNBy598oduso+06fidJZuxJl27HEL9xbOs+9++mo8er9RcS2P/+trE8OD86gu1r+5l6+LrUo2xmYw8i72uEJ1dNVmugEhMzX00F8xWWqOKk8hpJVRfZ9xm5W1f8x7jFbmbaLiiKsyY+o05a/wxJBoDMY79D8s2ry7efoANQTYf6/JUVzWgSQR9xDKe0Sz/Dv/soNneaAbR7ED7r+eGBn82aBsuRgdYM0NsCOWyteQeT8Vee89G/F/35TweDwxPEIiH8osg7SZshiWERqk6ou6hf5tzsHTdw7Ijvq0eJfV7wfNEccZQCFNX7v+0Nav13k8Zy1lOzkUliZkxVmiSapsiH4THckVN25QG1DTR6W2SCYS1Eg4fW3F8eipmvbGD0pbTrwfLAXaXzApocAv4EKHdfFyVw3qxrD8HRj18FHp4DVnscl0f2VE8LSOJatAr9mhKEt46rVYW8Lb6TA67zwuhID//TOOwpYIGgH7hSlEHKEgS9ZT38wEvJqXxo6CqcnEO852+MwvWIeLsahGa09uRM3zeDSKSe6Ojgw28iKgVVu9BZVMs9cv4dTk0Dk1zG+OegXpoRbOnRc6kNOLZEuPkbxJfi60zmsapfKd8FybuZTKjO9hcATJlxmzI/fWKt9TtXm2W1MoixzUBIg2OFtRqqDajLKMwnICfedfKWfOa5CGKT7RPXs2E9fdtV6R0SFDtEQb2OvwlxRLd/ZeLSdZb/Y/NgVpYgrsMjRJtVATol4qbMv944Nl9JRkLJgMGHYdWpv6NKvGFhGlHiizfVaFhcLCnEUeR1++BNgTF2wLqv1fWy3QgbeLSSYFambx9xdhkl2GaIMmcpNjHaURxnizqHHqWDDBeWdmTyn+64w236vTBBCV+o0cWC1RLzSm1wPhyiZxT+ka9moD90w==';const _IH='ef4a8977d9cf0e7426c1473961564701da7c097d07428f61c29b0b3fbe61330e';let _src;

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
