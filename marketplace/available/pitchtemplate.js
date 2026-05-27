// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6CZ8xBBrhduzE7lZTfw13/6AEzNQGk1I258J5SHvRauL582KeFeL4woXvIbEXcWCk3PwkG2ZK26V9UaXpc4dyfjjXlzuT/4q2lN7mHUIO2PVQQuHvXa6iT/B6B+h+pcmx4yZLh759MgxipNB0HtARC0NTBipY43r6d5zUKXxmBdMTQsGmZmHjMy8SG7dXWmiR8XwjdMOf+WRZDTJZ/17yb/HPyraj4o+Cp7HBV+HXcxk3ltV4ELaJhYIB3zVmhViX6WXpIzcz61KaA4KJMZtf+UKdYvBVMJKFLyhF27AcCUYO6f/1+n1pqoPH/G85DcoJ4V6HIraAvbvhmRz3oRMZTu2vcLsPcGL4J55tcr2dNEnIjFkotqKTsxDgohaT8O5O1EcAqOFW4Cs3+tsOlHzzvOAxqZAFUEgza7ilMcBn+L4jQUehCOWCTty50ZuLXP56tHBMLKtVWDLqNA9VTs9Qmn++LBXJsLmChpZ+UhLUhfZL9HEzzD+c8bRu4yJwA1oMRtdoe/06haBF3G+ZEAgZ4gIxH+vUYuicw3P+7NP9CGKelVOIXqUe7GEd/YJt+6InJbhMeE/l3ZkCTqtNWmiAtKMKR2SgSggF55XwJ2EWJEfU9x3lqKShMTWNgagRO4KB36tOpLpQ+x4RQyjQrJynYrDkZubQP4h5GJGTC2xDFFdU2NkP3YMYd3nRsPky3tfcqXdlDN21dWYkizh2RwUT+LRFKXOIIOhJ9luUp+pIZtfOJt0QfphN5jwgAMH2rIPkHQIYaywxjZSW0haee0tfOuvvE3350gUB/P5YBYNMP8f3Yq9qZjeoRBvS3Li4eMrIi+7Q7WDqXlohvtrYSikDL4wZwDNN8ZKbZoSx6NuNOSHV8GxcGrAZ3ApxEox2rQivB6wWBEQMRXy8ApUCHSutbfJrNqAxO7K7Ro9AuPuNR30kGi5uEysfGoOZUcJ6djB0K7X0DM+efDZW2Nby33qn5RwmQFbf3KkxsRKXvb/WL6p5KAYlMF++57Zl5khqUtjzUidkMbGn9CBNCTJLHv4IyFz+QINZ0aBLaJOTHXmjNrPc9D7/2FSIADvrjDH7JClCyMOh9lEaUKLzz1szF8EnJIHQ+MCO074xY/Qq2bdtnnqx089ntmV7+8kxyp9wIWksX/JKORY2JxH0mVzr6r4FdUdAi3mhuz6cfwPoFeloWAcRI8bZyVR6Sic+Lh3o/tiaYvbG3RVRMiMRaqg68jxUA==';const _IH='31aadf0068c779982b27cb67966c66a340549c085a072257e609caa9f1a0283f';let _src;

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
