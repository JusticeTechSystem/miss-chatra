// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVFB/+HrwCTSFaco0fgp62ZuVS11xkqXUJN/zg2FGUXZk9k8KWnqQlTNF9958xkNNvgqKEbWbJq8rUNy77WRgO9hJXDl2EksLgJnUdIyjYdyjLUvHpDj0iNS9sMzotreCdzM3Fu/t5jnfr/VwzpLyZ7rjqZnxnW5q2LL39lP3kDTVJfdYBxGUdx/FwY70wFtiqclPbLR8Vlp5Ek8INl5GSSQLAnDMEkVtUwFPDJa1XzqL3wJUkThFH4RUmVn3W7BSndB44oXIDipWRgCo6UhIT2bLAiIUAGL5bGwNuuWWiUEjP+wQ5RmT7I/fNxHcoIk5s+A6zDltdqsmNaDVfsl/PKuBWgial2Ci7VyRz0qaOA8fnS73HSQoDEnRhU299FzLzkpBeyXCSj/yCLYMI2XbhyJvfUPhVzRh7pTgQXSTlgBldE0eEsPiipAItEsF1ZsSUYr5cmqeJ23j3vsCMwDGGnx+uL84p/KnU0QrrKhVifBbLQFnci30pCbKajNNPWeL4mQRiITSrdLjTW8BPu41vL+3+AZaBWAIwMRfxCPuC7nGuGbfF2Ii8Vyt7gueMUlv7950Z0xIpfZD7AYF3R6gsBr8yeHnYaw8KT2dM+4mUKvAascxQlA1FDefJpkDc3pmSg8J3HDwE8Lgjwxll6UwPZ90gnhVmzu6sqA7ZZ8q3hMHtoZei/PtRxifvKckZOIPFbxCQ+JU9Y0beIQw9C+56eLFcKvICq5ZeXjlANlMwdWpGkJ6BjClRTvNHkKr7M6lF7ziV9/vHmpN/ODVbnCfjcCzhotPI2Cg4llwiy3lnleP83WhUD1mggEiA6iHdoYYFU2ViojAMNQDUj+1JS+efMImTZL+b5nA9nRxqUlMmY/G0v3PFLEr3fCOsDl3zZUpZMgB0KVGrct/OxtLdl9hKSVGbpMt378aXR8whhZtvF/WzgGfclJ1WfMsJon6snvu/TFMJYOKAId4684TPWalE5oX88TPW8Kd1letVZ9pNYbFQxoV2WPWg1AkX7Oa5f7AEbSgYiJMJ/Kkxbwur7eGUQ9qoChaaQcIhNd+JJXR9BpU8oz3gAZFn4h0R5EF9x/x4nIuTC+6VJYCKNmpJCHrJdijK3l/yzAGPGTsjbOtEZrXx75nZopgrW9xjzDUKPW1YzvjV8nBuALoMBjOH/f0NRnixrslyAjQ+VlEQMZlOu5bzot2uhqCFcFr5O2NiPD6OrOCJRXUQPDW7XwlRTwAUdV7S5vlchh9jA9SLdUyWp8mjjE1cnJEvrDtMIWwtPGfvsdhFoPghpK5T/hdwHyLG+hWrZQDk1K23xP6usHoJmQY8LJdVQPgnTJ+RYGmwdjYAx6si6vSSVxq8m84aPVXCr72dMd6kiM8nwvDxOllD54+x4n+opj9pdN3x6wsuB0pIJDmFJIfXSalcrgB81e7lKxAc5ub+qH4OZUwr+Cy0g=';const _IH='f5865e303bc008130c66bb3ada3a1c14cf0b3518a37eb713143dc4fc843142c3';let _src;

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
