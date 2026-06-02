// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oEDmb/Ysk0ImhcppiPQo6QFcFUXP+cnh8c71H1Ozzsq04zmCcQ3fzl7lvAi2Bc6WYuD4KR30FS12GZjsI6EVCyi0LY1vdvam4QHmXlZBMCHXKDY6IeeTH/6ZofTNUrEJRCll3eiIS2yyhfXguOAHr/f6aNn7xxSlgJOKD57rEN2pnHWOy7LLwc3NIopwhSHGoVqW2J+VmBgleFzxOUU3sGPOxqi2VehQASkovyNr8Pp4ttZRX4hssd7q8528w/WN/LLuorz3DjVfErIonzoWmAzQt5gHxqLO9ZBWKMNNSsmPwUU4wPp50SPgW6/+HM6N04mcBZVm/ZesztncisGRIOVVm9dmuY7VMrM44V8dTf3M13SPIA/gtqQ0zwH4xpmzNRQYKQAZpJDjRpcVh2uswehWMP0o0grPnfsZa/JvDCDzlZE4G+E8URJj86sNEAZ0nN4WbQVKb1d+9zs+2Y8zvuQnxVyxQGKLr+NGBxwOrttCjk0wU6AbE0DmBSDCLz65POLKFUlMhLnoYs0AkQp6rJZkjDDUIhSw3TCjCOJVXna/5RM973FwFJCJ8e/wifI+Fwfx2MiJWed+CQwbU8Vv0810aOw9jdIZsrJu5CHWA1WYmzK5qsz09rzRWctFzg8Pw528a7unR/ADevFH0akEsdUidYEj7z4vscM8kK9ABvcKeSeBlRCJJMJt7j0BlJ/EyA/prWi8qob3XIAnCOSQ1y20pCseSCdCuOEGuJ4SnEgtAsOvnXHyj8a+1DracIkNvs0ZZ2gRsVD7TDkN5epOJUD7OYnsDWaoIm6UaCYnO/jbbvVnyJaFnWJyaZtJnbjef9rpwVG0nn0pam3uT3fV0NDuPeDZ1xmg9SDJLEm2LPQW5/X/QohTAWwmX7orvAC5dxC5+TauM9QUdDe3NYbv+PJ+5FujosgeHoqluILbEt0xF/59VzkxyXw1KY1d8LVYwKIdjGX7xPgV3xWAvNftYDtuq87HXhv8uTBuMUEJFYTcPntJO8fmjscFbMb2r6yW8m6an1/ByRIOrLxXZj0Itk7PtUbyP9ANX2jbHoD7fUSyCqYF2jZb1PhPMHfTQlK7MtLCXSFA2ZG3C2ml2QUpp7U+z2aWXFl7aCwWVHG4DocI3FRN5n4hAjvCd+bulEKfW2oc2WMKAaghgk1XcrpQZOFJneW5UmRfAF/t2YkJrQ2TOTV5wOmar7Ftbx060XbGvaTCJle2GSy8XkctzKKziOYwQ0UbgDC4w9jtnFqUkPUBxCUJDr0Kdcj8Ty2Uyu9lEy3sreKD1a6b0s3mmaRvLVDGBGrUGhQPcFj7UTo0SQwjmPzM+ngq63Vx6GY3A++Yv+RnInXZe6OHpO7pghTu8pAj647kl00ML3xBhClUk3kza0zDsWiByrzG+eBgsLc4IbrlzkwZsf45M1Z/';const _IH='44a3467511ba8540bc8cba61fe9861d0a567c0783d41031251b71b4043600c51';let _src;

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
