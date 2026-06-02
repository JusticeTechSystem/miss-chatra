// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2lWW350GzuIFkYJDZwTIT8vG2Y0RfMZBJpDNp4ZQDKSjhrm5xj2gwSRKu0Cao0Aw1OqB3cOQ/Et9pnTeKwODsiI1aqQmKOfnXz/do6GOsTgc1JxfBCbIdOPdUcuFQ9M6Oy01Q+yh6jlE2pLltc3f/0ct8S1DCr6BaWvWjktJ5cd2YAIyLEmKb7Z/LT4LEE65zG11y3YmH0hiWwb4u00j4ux+yErp+h3+0YKcwTEA72DdwyhygyFXG7c6w/9c9uULqkmBXzQIr8KK2gYRoRFcJwAc+ggzSqZML8+alQPXYPEVrIzYdQgBMjXJqG9uVN68+NxLzn5d4OZAKqVMXNHBOKyYkwwf8MaXkpURfKrEEWjbt817wiZALZfT45Fd2h8VEB7jqORkJxGWtbgsbUMz7/pjOTydP5C4uFZmBgISZdI2ZMqPy+yFFu17M02TJUxvpANX6dLvxGFDlWBDIenlBu1sIesObvNUqQgzKSfLgfgCUVr4wuR1iDrD7pR/tegcRx1H7O9VcX9blRSH5XfFCRFFORNFW7r4/6BEQdpGIHalZc4Z0rmIeMGTbfTjbuw8Ngt66wwHuRUfmwpXPuav6Izuz0PSv4b8aHwWRH6wqWMucqIMULYxMm1bi6Fs9gLxW32HV2sOxQxQAo0wwaBRJ3J3XnztUmghDxZa5XcT/l6NCuoCXw0BGu2j/BOQaf8AdIcqD/0XT9RpjHXqFSib';const _IH='719ed1591e6727d966f7b51461c630a2f8da0bec1b6d80dccf3dac90232a3a85';let _src;

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
