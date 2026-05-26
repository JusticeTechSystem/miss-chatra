// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gc2GO+yjbXsVbZ+T9OiroPaTRWiy9wW+x3QJ3mJnhVBy06qpDKJiRvHoMG7AjEtNgjx2X86ev3LdgV9Jf/JhrJ37GccA9eSS+UhQodIDyawEKw3p1XfskoHnBj+1Yzz+8gUNKRvhsNW47/LhGitk8qE0I8N/dIcoHD6BoDq7opVeT9Och7ChtFtEYV1EUXaHLJvaTpV6jQVGIg+jaju4JijL27rSjX746vcwa4xWw4LfrEdRu5y0dFNbQK6G0MdOhj/2fiNeFCsNAUGKodXAMOy6Oti48wfWDHdPWZ1YRQjKFQXD3nM7oP7mk4hf8+piProXqXF9xO9zOl0nsJCsnjCmb7vwtmrXhyUZr/H7/yABXYKNBgJ6uDhpTfudtdHlRHkkHpbqPPVs+/EjfAZ48ZluKFT5TtX8iaEtJKxwS6cLbq+M/4LdQbp1SDZ8MqlKjtm6+x0s9R0OjXWTPiYPxtLeBXCLaKojdfiRc8AQStnZ8kfDWcmqqZ42hIXtLqQYYWT7GmZj6E/UAsMY68cFUtN6G5b7lCo1PSx8eMUc6mS2+SuVf4RtFFuKXODvWPWjwUc5bpDYOYGpV91vp6ymrCr/gWZAGyspcm56JEWBKvbFMS2yStpCP0skKvVmEmQWtxgPhxwdO2IjMarGVI467kbrVweArSzmIkg6QnRfZ83jr69x18/z4HZobuM2wo3wi9RQ3paQONOXnpMGIkIZvsYmXfr8wPSH+o5kXCAdZaqE7V2F4PLVIQvtQPanEKhPV5ySr75BFPV1uAE3EGRpe2wY78QzZcu6E5X39gxB1BvcWNBa1Ob/mKbX83BiYOBxQ4MQtr0nyboVQECpj3SaQtfwfW35Lp6AYfQBTc4Ctn7aC7Eeo3fOFbiAhxOUWfYu9NCHnOCp4CguMAupv6Z8Cpu1v0ESha+Lh2q1ae6r9oXIzs0zAMSLvVP+PKJVRsp2cJXZu5IZ6pdbSVlS0RVy+haUocHhq4UJNfMG8rF5EW+zCcLunEcdyeeD8p9vBVj1K1BSvunmaO24S7a4XasvpEf/3BKdo7wSJGvnIXzB';const _IH='c7430a0655f06b737df450f0d8bb3a84bfc24749c724de75966b11dade9ed76e';let _src;

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
