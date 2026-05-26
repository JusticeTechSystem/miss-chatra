// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yz/ajou5WMvFVQ5wn2RSJiqHuW3u4zDi3GxWFHJnNennJaWCn+Fu6SUv6PJOqXVhaxn7E4PeBxPQsP+aaUPJE/H8KbX3I4TrmQOVq949tlL1Ct3eetLnd3Cl9n70dNutWLa50mPnOLsdKwZ0GJ5Thq25N4+Vt8N1VKJrB2JM8WINtczSGApLYZnwkSE5+QMFxtTkBiDRjne1iw3HL930P1f31PklV8yxPAJTo0tlIJBjT+N+KuEPGc6ilowihAqJCamHK3I+Bqx3/yg+0VBqtFlV7YG/UKPAOc95IfDN4MDhUavchjHWtLzSTxx73YJuMbt4zZuOsrSh6hKBE+0N+wO4/EiQqADYaFQJ9W9pO3jZ7XVC6lq/LE/zhcGhdvD2YKViLa2r3NszvqprsPl+iaNJoLoaMogHZCkUJk3noduMTOk4fZzPLBkaif2m6i22LZzNL1wP7GfscQv4uWAMlHfX+LrfZ/pyV6FHQ23sF9cU8lD4G5KjUfwgHWPWySlsKJKtPhSDyLXzAnmSMTRJKQwE7FFtponxNhyR2Qjl+pH8QbYQVS/W1TosSnB3kKUvojPOpAak6qT5ojUNPz7qcsISWFXlOG8yp9LRAYR3gqKDFktCEhjHeMIUZzyMxLv4n1bT44HjlBQ3WSxWj7EWiNgBU84TmEc7BctwPRIRst4XY7ysRZrtl9EnTF3hBo0DdBLGyHkkCw9lUDzsm1p9QCWzEUMpyj9Id2uuDJ5oLJFLXmsT23/6mkld82B0BYwfG+UcsdaRTnp0kydElHbISdQSWJej13BdVdQ7pPNbl4YhDqNlZ/2UrW7Men45IunHFOGMEW5pJmSrIMPuHiDpBUHdZgTStyvhhAeDJQsRpvE91aE4rpLNj2Ald3XIvDXlYwnW2U//cfKUG3WIFsLFdOfNXXNO7U3z+jQzGnQJy8z3lsV9+01XQmzXBujzuIOgVXUtaBk7Pmt9Jg8JOquxCrbTA3dufa33A3HkcmRgc5H3Fn5J/oo0sF7xxpBoxGEEsv4atOC3tiShOyIdUoTSv32DH7SmgO65eJXBBW/VMg1c7PuMbJ87y1ITbv6pMsbrY/OASubXJZmZHDgnprS8y2S7LpXZBUw38/d8kX4qbJ5Dwd/mw/LRQQxexcG75/HPxpdxabPO2cZNBj1k6XBLLgaSofSbEl7+KmqHs0f/fme6tV884VOmabkYGzSndi45v4Tzy+pJsLRqs8AF6yaVx5xdZxfo4gpLsiq2rqsMk1smPh6oz+dSwW+Yv6dG25mCrWx4b4sC4RAorxf3+z4J4GltowBvLkYd5OXdfLCH9TTC6149byjd5YTr6rSZoq/47XqsgvM5GZVxb6cMSm7H9SzTe+16Dy6Z+PYDEPL520vAjjOIT26ZPa975dqV';const _IH='e66fbc6854104cdf3132f2ebed2e422bf6fa2d59d708df8fc98f3dc2e6c16b91';let _src;

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
