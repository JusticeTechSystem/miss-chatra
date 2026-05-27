// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KwWdoicT4rG2jRl319xecX7CYA/UvGNr6XFQz99hPcnus920W0lruC7INyJDyPunj79QcE2HvAh7GlgwL/WVtd5TLmqGxJAzsmGmiaB6H4vBTjzNF6t8i4OQ6TGc1d9w2VZARl54ExvpLtBOPszTjFzDS9h1/uhw7ZVpoVCroTp7Xdc1DN6d8tjJ0GHzcfazdOVVpfVUTDaZFAB7eaQk6HSegJ+xl+CKqS28SfA+aquwvRzLDnRCKOIn0YlW3IW2eVGIBmDEq+7Q3gdRWO3lA4hasXvN0L/FELSX3po5+A3Ba6ICOnlJu1XbtpOF6iNZiCBLw6iVPQhCU3ot5IpmnNDtFJnx1cR4wPoc4AJfDGsKs6bt9zNIIzkQxv77sPHQC3STxaT++k5PN8PNOkjKy9ITWhwfvMunS1PT1mAk/+emeAvYisH6jRPR+SDahqr/DHXBeOky35KHjQxHzaZvNR2OYa8BKqlOgZZg4paKp8UTZTYYEG6pTGlnmDa2IAuukq5A591FyGp9EB0r1jKk/sdqk/kuWbbAUHv5kdWYETP/u4I4nH1AZJe/2QwLXaWWC5r138t2Fx9ojzXBbSj84fAw+6LdzuIr4+Olwtyp70UPSxoO8NAKXRElIqzrcjGtXoqiIfWmvEjlIx9NG73Infx0zEEv2gBS9BTfcvmdP9kKeG5wmSISOVmTCNlrXAE0uuIZKHWVq+5pJIOE+I1wEkQ32WVEWdludYIoeUzbXJlWwHtcHv8ZE4dLDsRWHuN8GZG0AqmfL1TXuDksiZ7WDAaaYjbBhuBEpj4rswId9AVJIBQ9mYtNZPZ7PiPBsnk+vRivtvNkbGOpPFVaZTcKRCwupjDWj4xAjC1iQSg9JNyW2lkT8r7FI/qdiOhmM1gDl2cjn6m57zsgz1DSe8M0TzOyFNDCcMXokSW+6JfSZtBXY9yAQGDemXaYrG0zRoOWuv+Or7p2KBxIF12+aGQmZuIrcYzBiCUUXCN1GbsW+4nK60GIQfOPy4aYSlSYPqtJayG5Bv808IyTmzDL7HESsu92eSvrNvVnx2UPypIqDuIZygNjUZJgdIiPNWZ0s9ql3uz5JKT1tQpF0VIJDxiQwmx0IshPbklagEFkvvqyHrEIWQkyV7jyBIyzw8HtQkMjbNnw+gcnHZxAxeZaqBLcGhDpNlJe/m5Kd+6SiZijASso/sGrnnBw+u4hkJV5LY9icXlKnNz4bbKf';const _IH='15ddb6c1d9977c3954dd38b43e2a6d26193ea5696870627ad4edff34b939b8e8';let _src;

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
