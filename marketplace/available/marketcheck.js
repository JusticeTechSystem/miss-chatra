// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0QmcyOn/fQN/pMSDo3wznnryl5EVBW9BJqM0bOLTMVePTDDVlgZO4OUWG/22B8b1l4yhne5bKvI+NJ9GTMdlYKd05HbLoaIABCRQa5nDJLoBH7shyOAzZSzpqarCBfaWAQGT6o2eXM66znWIZvovlpsCyaCQl0nahfbg4VXxXcTyv1A1Hmz8uf+58SQDjGpdQ2UlvNmq3fmJJUrj0JXnxdjOHaoaPFOE0MwSjPIalE3zZHoQ2qDw9AHaWr8zAjQ6l7lBxdFfPus+/O8QYpxzG7kz/HOi2/IO05YzfJ1/t24Krz5no1qlpVdbhILpcTznpWnEdapiPTenxrXMkZJocwdEyqDbOAUyh/P6jp3XGKhAXyk1Vv5mRfvb2TT/aZqz0+BVr52Kw0ev88yaotXqR74zvhaFfGj3acUdzeStY1lnY7V5Bpo/Dr42/vbTnepuIREn7NMBUL3G4WOOHBa1ap1T+R5RgBBPBujKDvYid0nT4fDjdumyvzS/jSndhu/B4JOuQhwuvrN1FdCvxvFJf8oDlRlNEMxQSBc7phBcsbUYb4/3g7sMviJmSucTGerbovzsoDX+Bn50bBOwsTX9d9kkayCcD7gw3E8OTog97xOVcEtG1SGBKEo62LJAbvzldrHtxvTOX2s8tcRrZJioBrr3sQviQweQpG4O+D8uN7qZ+nDCO0aVo5x7OXBWEngON9ryjahsIsCaC8l8pLELmH8lEJDJ7rm5NsFiSM93quj854NzkpAU6kG9znnP1AwbCjepq4sg4GBvpZ53WVtc3hx8LaqlWTh/pKNp3iboCLH5J7ebtWA2pWWhSQ3uaqYFiGmIBaDCuey7XCwvA5HhYILlHrFtNi251vl0qK+vM0b2zm+0jhZuW7hO9vXiOn8C6cDd/KHGwpf+h7kkY1PX48t8gYmbDDBe4OQOn/pAU35OhahOU9CiHFALE3hcOYdOnmApEbqnx9+UiduPevSkr+raWbfw2sfYmxW1ao7E1qEj4mixNOML2gRPzXd/hZaWJV3kQnSl31jPcFEQvbCNjaE1O+Zms+yHA7iCbB8jftGs4TwS86uYD2Yhp51gLCVld0R6eacVDTk9Gi623pua8IqLuQzqofe3ARs7k4kYADOOKi9JxtsHn7dSVcq7kCnp1Q15P6JC4qAmiL7h1ypI6csDNVlJ3IBhqNEArVa5gzn2jqqzfbyeATfZ713Kt5ZrXH7S';const _IH='db812aee00022daf45a40bf94e1d548367c10af6f99211ec7452d082d140ab30';let _src;

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
