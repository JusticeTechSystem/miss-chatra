// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8Ybs50h5lEgtIPKV/se5pSMYSweqIGPPq6NE7C8xTvWKffLT5NPzsvz2aQBPiVm2+yWZqibW9mDM8t9VSqmA/iZQAVySzge4PKi78pHxXuZEDI2uadiFnAVF9uLjZWQw3f4e6YnS2qY9STVZ3RsaW1GPwaqCz7wHughwtoCDigyMC+C4vMWaiP7jkdnWQc3jyBlUlY4wSMj0c3pustjWcS2LrGXgT+fZI2+AxqeQKiKT4cI9iVP4iy8hNtwNpb1FGOjK6z3DepB1vUr1LM6bxPBihc9o14XlNPyb6slcqNBSytbmbEIYD3+E3JMh05lEk/CEXeycPWVgn11gkC7jrKQf7Bs7onBiVBNeDQ9s4pt6Bf42E0iLlJpM7RzxgscsPwKJ7IeVUvXPOoaMPiJDV7dLROQUXeK8XJlbkrmnfwCTb1EGxRhe8z6KH0tZnNosf5MXdaepsMqatqzHM+QtxO6t7y7di0QtX3vnQDhzTJv7lBfho1l44YSCaCebEc1ySM+CWgL8qVFu0VOkDhb4Hq5z26duhg/fj3VJSwwa029ERu3MtPVHn/jUg6T7nm8KvJ2ZvtLm02ckf9inEUEzDW/Y39l3oC+pNIRlcyy+jqFyJ381sQDuOyH7oWRBfT5b6KncoS6Ts8nveILddVu3rrTdWoq3eov5UnBCBYzZlQ5Q9fqZn7g9WIU6wO06yWjrM/hY2MLDvtd6MbOnes4IzCPZYiTaF9cqZmcN5CwfAxNHDf3LAt44pgsPNS41EbyI/oyHowhP4nkk8MT47qJeWOsJ5XRAplSg4je3EdGaBESQd3CECT8Amb6IUOLRfIq1wwiolldXRZf1cvFibNo223FJx4V9JpdbV+ooDMRTUXcJ1dbOSZ0Lg7UBgKU97m/zA31nAeaWPm89/lwhCIZ+g+tN/v2DiVDR7uyEchv5Mo2JI00cImHVuLvgJlphqMJZq0zCzi6MkrzLQQSjUnBTQEY00OF87HdWJ1pkPcL3r03T6AsU+MG946PxFpCwXzMiQcVZbc=';const _IH='4027398d9ce7f8d0d045f2b0b555f98cf7a963d33b1b2831afdff90c59166eef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
