// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fGb5vQx3uF2nWeRc02VjO5yoD/NGzr3tM1vHdcpKVXxljoEnHbNjW+p4S+s+fUpOpsz5p+aIeDSKSkMI3l3GZOPdSe+gx7VVuTorIaPN2FxhZ2yLVdCE1tr+EeMdmCm55vo9opkC8SANlfZxY3vqDE+pcaXbic2P1cuRbgSRIYnAXnwAUw3ZU0r3reQFUe+wQLTv/B5T1bBpcvxK57wK2dBpreOKCMF7Zbc2GNNgp36RofhLGna03OVSx6QuH1XfS07EqPHqVIsVu1jW66XuyjEBHE5TN3slGnNrVRVRWt2fDigjvRfQ439oadex8xJ7aiXv5DFd47iZ1Ke6GR55lmLUT/AUYwpdZRp2sGiJqnzsAZihHwpCk4kN423Geb5G9Hx0GsLvCNiNW7PfzKLKYx2EXKoiU9r82jaT8azaxZ/6ozMBQigx2dkJ1UaW5Mwc9s8TDzpAh8v6QkC+3Ri1j1uCb6RtQF6QkEoFoQ0j1/LmYLPB2szrmnF1TBVvEn+lRPegIv16Psz8HOhgX4WvUAubo7rcTjjpmShtOC79tpLU2tZa4fa8dWewwPg/a/X7gOMU8Kkojug+D/mvuY52u8cj/y7UyAqMg3h5ZQo3MZ1hsy6Wzg8MCqt3HnxnwkUged8rLa60jWUlGn2jvA/z5gFeQeMh6+F17qFYPgFHcLC9SbRdolvsWA524GuwsYKph/S5Z2/XfcdISSYM1PmbEnZa7H5YR9DGSlK/XuBxo15KNYrkjx3cxLd1C4I1/N3oYtcsYKmZ0ySqjmeypjJNMqccGxa8xHxIvaa64kE4wtOXWVlmuiS8RDhwtzE11XECXLk6CAddBKppDi/M79pKsI2zoPEBVnoC3lkaFGewBB60xZabFi+hQcyphCkE6qfk8qXQweFEqhknECK7WQtuxTmHJpxRIfSTJB8hO7aTmp4K4TKzThydKFcCQ1AEdVkFjKFhblfl0V8wP28vx6yW+kCFkGPNkZ4xr4sveZ4H9CE+lu0=';const _IH='f2f6739457a4e217e886f507cc634dd7fa4230ea4e4239ff1e37ac6403825697';let _src;

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
