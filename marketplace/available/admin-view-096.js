// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQX2FlkH28lWw470SDgAt2f9F2XREiKHMWaKLhlGvySYlnAtLWupU5pPujwgmHV4MVAp/uepZdcgYpLp9SapYtM92JkMgSi16Wt6N4uUKOo9PsLU36n+2W6JfDo1SOHI1O/vGYK0iX8jeGjUD42cIos/Jc19mdNso0KYMVL+Ca8LTE/aa+BCB8iRDKkfxtTgZggcQ8ZO2v1FDi/YQv/4mSGujpNrbRNmIOSKi5Q67QxAnnactzBMxjqZJvO5YqTHIZBnMuCAUAybNE+OyOdGilpPuCK9e91IgeyhodIbVSv8oy4J9hrrDY7GMs1bRM8hIolyy8mo7yRV8bek+qDlf/k5LOlqR2I7Z4BzR70x5ifIK7xLU2bEixX4QyqlBqGKXWxtyMCTxrKCqqDtww15uUh/iumq5bZyjtvDvaW2mkLw9wWw0Pczrb3BVGAlvx2KXqcKF//ZUSah3M9W41yz/0+PGxbBA70lvv+Sb8uYBgFUtEgEhj296/ywmYmtOUmdBqpkMqW9sDzRlOkWJ3ZEo+5j1kFsiadZZoSQexOFaOZliKpT2yAcN+Boq5eKr7W1giSyOFoDchckhy77JLduY/KW2aYMptgYFM3X7lFHxbht/GCMvb9CDQetvCWlTm6KI6UDbaQNw9T1T4a0U//RR76CJcfFSR2z0/BxWriXefI/N8EJHw+i/tVfhbV1jeAyX4ylzA8OD+e86g8lkZm5mmclYrJhJtCuWuUtksvYVuSUhZicmz/JoAFD+iIJnJCdXVU8lKFojz+knzz+WbdmGh+YwP2WnTH+JMismC4Ywx+kkiIJCyTgfYT5eBT6fNs/e4sKqam5UYHxbvnrGOFvMqNce0tJNYLh+c/2z0tmJJGr0yx3RItAzk5acbxQxtWoNV6elZnFtQLccgDTaQVqnNHGQSamJP1DYZlI+JE/lihkiAvxeVCknIeOagydVUupFp9LoviBwTauVxWDUSysztojSRr2maRGQuM3ru1Yvt4';const _IH='9cc72dce4d476df8b19cc15ca3c9def9bed21a285921e44a0274e2506139722d';let _src;

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
