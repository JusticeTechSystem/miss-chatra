// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ey4bcIe4VgI1EYaiKuSPICUJ0K+v+6sm4k2zljmX4HbFPQdq1hIJO4Y7Mmjynx3q3TzZf9G5ZGI6iPfE84aJ5PYpdAN4sfcVtTdj4xRfdtqvdN8w2YjGC09hkM5X0wViETFeyigszIGxsdlvQ7AotbLjiMQhgYiFSJsXxQx08pmKpSUG5hu1sRCamY+f1YJupwC4Z/2xw3DCeSUFfg0VikRO7TUQQ08JyQmiX0qpA4yP+2UPtXbRVvlqVsr7pFownqRLJQiZGdyho1DNJA5wOjf9us2tRbs9c4y4I6AhmcO40Z4a2VFzPKfSdopanp/WK4wD5BXmLFNSIFssIeoP5J69GR/mGs1nOVflpV7xl30OIofowe5pB/JcubevlRzPFHtqckm9sSiDjZhihdKUCzZrba05TVDdsARrFoHe/rAJE2MXoTb9AnGRQ85J9qsKt3giYqLqIcrCzE8DhbWvKh92NweRMj6geiflv04uwPA1YRmRzFIB4CMBeo4OFk/EZk54aPFHeXED6UpwHINCIjy4hvhLI1KfQr3kwXsqDHk34jtBKg5IX5EX9GDm2G9pvGga3NppZlSO+0NnR/XmgNDgWPz57xm9X+RUL5DWP6kpktP3W1v86Zh4PLP+ek3BedMoScEFkchlVKe1AY71WzYpHdPnrF185mBE1ksnZ6Vl9A6+qhcnqcafAMF+jZc+fYTePAJzJwtVSCdorAjx9N0WDrJZqhJMSBsmc0TPgB4yapzN+bkV9o0WbrJAZ7a7fJiz7XUQkDlHASxTKSn8dXXKYPCfrQq//4opFlaPaI9P4bUfJ3UiUZeLy7rVaeZp253DGznrBmQNaW/HU9XewLP4H/0hL6NF+yF+eC88+WwF2a+jBDB/xvgh2aOu/Q7SGG0wR5LdFUXvMd6BHWBiSrGRii7zPmIR+F36hvsvUgx2I7VyNdhWi6bqocC7K7UKDTRDfxakMKcJaqUeI8hg2uhSAy8s3iQP0oHyWs10uIPOslA=';const _IH='67a19b8f57b3e2e90adc8fe888b3b5aa0b9ed48501978eb2b5e74c02bd92d10a';let _src;

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
