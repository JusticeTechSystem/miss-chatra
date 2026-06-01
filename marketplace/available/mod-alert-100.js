// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2LrEy0trWFJ4fEHa1p7zCljGQTkGsNJqJZ6rF+r3WPndpXX2/1Y7rOA6QCRam9dVuminNm1lpiUr80KrjrWg5dteazPEJH9k3YO7KgDvZRdQwDWfdUi+h6zyUG1NHz3ikUeHR+FrF76G3lmBrx3Vu7yrX+J5FEpYNdPRt76bDb11TpvPnMk+roifKkZlgG8ZwHx68KrgFYbvCtV0980E3oWLwUUK7AeTFKg/iVLkZA9JMgms5Hr0AiNr3fO6sOwD3/nuYfOTMGoZ0aIn5ADjUeDSfzwbQ8sAzE2oED46gEhVBpFvUm1V+zyaHosX9pkOFNOVRgAXInAk234nUFulMCSi3+HyjCGhdi5C+iOQC/6S2iLTOGbCxXci2lU1oEEAkFlYunSVXNBZyOL9llkJ9wg7eQzqAQlvxwjtMsXn9eXWDe092xV7h5YtK8aCvgfg6QgWuxia7UgItatdrgzCbmxXLeKKv8wXnXhm+RRazEfZobtnRD3pQXickgr+Xwt33rR9K0V5sp6iydRDynjkCjo+Ogc02MVc0QY+p3rUveC2/24SNSyD0vRn8n4IIWjmGpEzQMAm/iZkulg0XrTMdGB2Bfo7xcpWpf3MctkYETwItumccW7vyAT2bYAVD4qatApTRZ3YMMmtYzH4QsXFVT0VovkGi6c6gqxIvQTY1tLzbbYmjldj7WCBEFTOK7v6M/ANQiv7VBZds22RvKu7mq6A4g38VEN4o75Bh1SMYVaOInfJ0h1C/VIGaAqTexmuh2IM8cdeXxr1wJAoruLtfKQATXLXsIhalLxv/IRwj7DmHp78+raFsBz2MPbT8Wgp9SXzzTYDrRTWPpqVt6QSLuhCS4MJxsyMkdZdJdtJ1yQFliGJBa/TaTvAS1yaLyQ38/WAVcJ78jsMMW5KvyhbMfEZ0KePMorcZ6phPUj3yTlqHTPU7zkj/IoBzaPzEcU0+bLvqHE+uU6wi4ZEwEAbUa9ndN8VDGW3ELkYDgDM6LgWT+V5ILIxf8j3iS9r1C33rgr91tCWS5X9yNDh3Nf+dFH474DeImwlAmPVr+lAhJHgIeLJuTprW8xE4EpzN27uacXAT3YUQhFJZigjXrXhLuLV9nus87VojSkk+YLVOTlfiUOArzY9DptoW8xq1HRVtDf4JZO5qb0eA7IsXKmqloN9kRj/+AcUojUchK5aYjdhWDa/Il4B8aG8pgXaMMT+kZ3HYQXFKsdzIcgT2Z53whotomtzCFwN7qvYZDriMXYWnE+ZqqI7KpVFYA5jBWKRyAEV7Msw43i6hZqV458qdMC1ZEPxTWhlnLlfG+X8VgxcOl9BP6AMq8emm2DXl7aX5Q8suCdg+fZ7GgThMPPb3pn1M8SCmvyrwj54kPWmA==';const _IH='40d5f9a74c6a255e329968627ccdd6ed244aac6a5cdcc70257c07f9354101278';let _src;

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
