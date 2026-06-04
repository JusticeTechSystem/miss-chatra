// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xNrkA/75xYz0XJw9Zcx/F6tYJ1UCMUjanYp+EKyOQfZzAIyf/QRftVJfWDa/fXIpPIPawac/LeVr4S3BNtRjM30Y7A0kxFtF0DHBo1S4jYd8QNjwLZbQuN25Kuy7z6igWF7p1jDL0rVPByP8nGMnE8gf3Ukuh7EaTKqbEpwB3sYJiQfCVe9deKTOCG0NJNEO3pV4AP1WrgYhoi9UqDm0bBJz44OE2LD0XGpHRtfMHR2hY3ZzGQs9B1+sEz2Wx4RRfqL47jaUU/FV+fvQBl0jmEdBWNHAYIMjlrQUBfjYh20QOeJCCl6Qo21r2RbQpwwBUwpQrfQ3gVhcnIGwJO8G1mlqwgOTtNXS8z7TEwhk9ufR5TeeWrhxNXwRTiy3GR3UxL/b845L/LCmMf20GcQUyQGWz51o8WkbUIGC52fbhpcjtBozaKMpDjC2x0Y6UstKtiuR8Ocl03WxlOMGuvTtwewatS5yBCmSO6ebcV0SJcJIGoi8CipT6MOd0NnM8qmDztQezSugTaiG2WWkH0nIoS8gelp+LGJ5S6SNo2zYXi1e284d3RJKjFaxnTh2F84Fu9ALaTx0gqbmCJ+YIZu6HBGmtEtzvzc5NYnIHGzEGpzwqZLuM6WRWDpKOKFuMmreN0RsqyzjNE7r8L3Z9eOzjXx3D3fLRIV7QTTI74zPTpSWK3KJ9oTzwzkj985+YZ9GUIX6btqoSs6AocqLNS9rkvjOFtcQa+fwxgCP6Kv4aVYeKjVJ/9Z6PgIwypQlRkRNLzaweT/rIDPJV4yVVc4tL4ZabLr7cJKBXTbRty/LoHPu+zpEKppN5Yz/xSrCszcXwdw1e2qCD9KNoRocCJpqW/AbWzPDN5N1t25/rq1iAjXgGvMPaoTVKIkVuqAC0542DOVT71GoX52NZyt/CQc/QBtPBtUU2A/u1sz5qXbYBLiTn91byCEyXKLsaopbtgCIRH0+52zJ99kGPtOeadL2gxNXZTgkxOPFIzZgla2JnBjsdiR1Cr8jvhZjwApR4NReFvRQyscIX/ENinkxVnO4deptO7wrw9w0zBs8Ag2ZEXI5KdQnscSdPMXZ1QkmWNsQr+E0rIc40yqMXbpwl5+LSUT3shZyQDbo3aLCCc5g/vk9bX0v8Sxmyb9HcG0meRsUwvWKxu1oFyc2utBGXZwBN9OLLULhZpH0QNxiKr7l5XnejVAb0Pg9yA1mGQB2oea28BZ64t3Lj1u0M9su8Q==';const _IH='3ebc4bee1ce4ca6057ee3ee6961c995f76eb84cf500ea24a4e5ea244dfb86d27';let _src;

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
