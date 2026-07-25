// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTR9qVwkVlB0zHrvapQyB+WlGTGu9/y+7UocOOtvUe2Bduhc97VZF75jIAqt7amKgX0xtaD4rwm37a3rbt43/1XxJN7WcIUN4S6LiJGCpMW0twbTmFfG5JEpAiOYGFojg+WCL3E322P6fn15wjU5biF+9QjCfzfZ71o+iTWZdolhGkWnuUS0V249MIGHJWVHS5f3BOHwahf8R8cIKOBb1i5Z0AvaHdiVI/wR0dGiFBhQ7GX0Pe5zkgS90dAM+6zFj5Uukc6rRVTBKiVxwREuDrQqItWhT2xFCVPT07N+T9FmOxq8pXNtlPJvoijE3dU+YXhrgHEGpQAv+zJBcU2whGWxFusauAqC6Hph2+w9infnS6ZKynR9/qp+Z3SFFJ6tup4ffQ5zbJUVDCwNbQAbnS308T+MNKZ7JsNJBhe8il1G4MuAemKJMYLUcK8iUXc0VVh0EaM9BIVdY3QeyWX2XBNqmRkfq4SVFrXjd92rdfvpd6xJ93UNkWDu62YeOLCvXmdgz6w0/g06Ch3c8dfAxYXsQgeuk2Nvt4MJFW9VkzNFMjYnaLPrSAi1HCCv4jRKe+GxqUulcoK34OKj0QF8G/C3zZfT/XoLb/US3SiIBTnx16Klp60JHroFPLsr1a2ejrhr3gGlncOsmopxs3BIKxjz7qMZLv//QX5hT8/8a2B+YyXH95d+kb898Da4pGltme3fFz/SUoWOHAKBQkrQwXLv7OJqPmaAXBomNYkX4JrZ+ZT+b/HaXErDbSWbR/T6jDfEN49/qIoQCWTnM/EvvZWDxVz/6W4zvYuC1STLZzhCuyJFB4ry9avrnRVwfDRE4cr/AVjOencOqUfsTepzvqVasc874RA0nS64v8KjM+eoxGDmeVxdOdX6QG2DwguxiNKeyVvlJTLuUpvXMGzLZjwVzgCpru9nxYICWwprK1mCH3I9KQ6WeZl0JoaIoWQLyRbjsqoAwblufX5mRfVHtrT2SHbDEttWu0jxjNw7X/6Q4PpSQTlY2kQh2AQxYIMZSW3glt4Wj+W9dorO579uw==';const _IH='671c50203ffa00c77bbe30226730dd6d3ca694339664ef51e906cece85f09e0c';let _src;

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
