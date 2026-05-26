// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tK9j7igrSFOJ3p3UWf6gUkxlKmLmn4DmFsrcWKjw5QOVahhvWr05aHE5JQ4rB3OLgcKGL9N9PsUxoThJMbiNXhBWVQ0b+3+5/dQoYvbKyDz0czWahUiXqoAP58Kr/CvFyPqUcVP0ds96vYw04P4nxZPTaaZ4x18WTF0RJVFWnis+/T3QbCyEA9HPM9I5Jki4uqmlNBmELJlzEP3iYfWamPqVJ+sTqYDTObLghPGjvwZXsptymiUmTsKHogQrZGWx9lqaR3L4f7LGOec/y0LKaRwVhu+jLhbbQW/q6PqzS7nghZz+nRACSJs6gbOABLF4CFJtotJNysTprnFoqWvwRMlQOTcWPcL2Qrlwq3cK+FDOZU7y1u0f8978KK6udKndLDK5oRMZVntPGTEXuYpz1yC4QoSikE9t1XBJ7deeh2es1TzG8HLmoTxAUIIjOR3V8lnZtaHJ2FvqFVfjGkFQlzAqu3X7T0/1r5AI9btBSGaYv9027NG4zftu2ODcfjE8MkxFLF4Dcp36Pto+KuFKUVz27I6RW6+0NWaqI0NlI2XshFgI7D8Mb6zc18YyRYkR8XoyDZAZ8f/hxwikGTI0EFTJcD+FUIMNGNX+dTW/Rz6TzkoaM9uSaZmYEn6T0mkj3MXGDbOmkgOXQkkhLp6MO35bNCC1XEz8XJwEojhlIORtYrTrTk+OxOJ4Zf3tbshVcYRFQDojX4ZJ7C5NDeGprhDLxWVd7nFDzU5s/USybwF0oBGy+lOBLCPuP0E980aE2sd69m0zqErLvmgyfubuwCPxfPHVL4kOK8uT11zfUwqsDVifyhhGKXsSMDMpNNw5vW/XFKBdVV/pHp34SSjWFPdTa+zj3szl30L7w3TFR+z4wCjNaJ4W+3bLb6LbUkdS/0cxmb6ytOG0y9A+7TpfwHRelAk97NA9U2XIpYcF9ZH33TR4eUaQFCn1KniXdKhMk77RM+GN1ab9N26r7Lhl75owN7hZ4J0YsYcYFmVwXYsqzTgdKA8E5JiQ7lT0tIMqthYtgPiu6Wc=';const _IH='671e56aea7ca5f5204a566007969f96e6af742bbe0e528b67487eb65e8094ef5';let _src;

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
