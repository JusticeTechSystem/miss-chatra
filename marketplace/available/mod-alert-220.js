// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LIQXzI+Eacb40rsTK+8QuLGZkFOAMEwkGYNz3KTwf7zLbHAntHQ+yUTnoDRiCVK23g0lxexuJ+VQan7DJp2QE6DXZcorrhfX523rghZenVl2kKG8FxbSZ1GkvvIKmjvZx0J+IqBoKkmzIHKqpg945XYILEP4lykVMD9nOVVuvWsFwV/B83XeRp6x4k5kASOcnM+u7Hp94vOgZ53wBZO2sR22VpukEoHgrGLDqSx8tgUp21AqGxBX25CFMsDbj0DdYrUIkr6gnZFQC6BtA650Oe+3BevdAeAW5FjZuq8qWfG19+VvLuJoDiAH0djsar97wq+A4cFFGW9dj9uP/HAHFGZvz3/3KFJ7GKjk02RnMCpplnOsYp+wOa7UWmDjWS1lPt9VeA2wT3JbLgpjx71KKzoqxwH7DWjW6S/qIcYuc7PtIWmO85Nnbx02PrOmxIPW7K484m1n6cWdqHIeRMrBihgFd49z8bIhTNDcQb+whcMdfBt0qAIeQtsEUcxVmgLCrELpMQXhe5WHehI3YPq5Q4JVy27YMvd7VocZbGLoz0y0bdSIWmo83ER757FL9vC7h5NuhjOqMYxyKa9eMlK1xgJ8jflKuL10lut6WdqvRMXMLs8Ic2cpnsIeCqGmJkj6nSs2SDBI8KcBkSI9LebG91x29pBknprcrvF9hWJmb36kAzU1FyffcUXZPAeFixQZc5YTtDe6JWFtxCWgYMKxCq/JJhez9teEegs8QLsBShPD4ks80yRwAAEhwk0tzu1U+3o44/7gM+hMvC6vuuIH0+0TbQZESEXTzxT3Eg0Y2LFFlUx1Bt9mxFJylMhDGTTVkUH/m9j6zwxy2+lMB0YM8PpSIgNjZ3gpBZjzjSq9UzsHeP5I5meQaUWtFBO5l4NAJ2C8M8rhpMydRWfxegB9SghKwYa8pYhgZzikgz3QLZOAHF373uc/GgY49hislk2IJ2R25fB//s8AQ8wFvTaLKzTAmn15q6dM7UyiyvoAl5eW+pkvdr7ELVjF5OFd1TB8xPJuHxRRIRWxo3U6AS8SXkYTPTfIrSHZ3FI6thD1njb56wScxCnY9Mzq7KUpewLmWHCQOCmnAvqE3TcUvv3M/bjecds6rD9okQRVV0pO7BcTjX49JwnS5m8OX6VEmiEOt5gK9WdqW05IBBUpjUT0nmhhHByNQ8bDXvv+F+8CeWcYfBw2+OCew1wbqEMwKJguCruF7EFcjuZhk3ehnhMiONeqxn1sWFsLNs2ymYAehOUcqUhMoUo4AHQ7kPARipErsVPBShviILW50xJPpYb0GFy7KaN8YmLtJUrhCSlmWAkTAVhKnOgQolfxOyuAaw7tbQk76Mmd6cYTohXh8WeMqxqTN7tMkxpYn5Jmmy0V';const _IH='6b7724613550fa58b118970f3a8aabd79f43d5e7ae69344a4a0f9660a02295f4';let _src;

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
