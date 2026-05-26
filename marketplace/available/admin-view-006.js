// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mtg9Eck2DlpOQLgtE6Dw73dduUBf+WKFtoKHuTiRvezmDNYzFUyd/LOm2pi18XqXmBFeYMtUQB/QMfk/IonUfv/9+ZeOQq2x1+AwGjBUvVXuDfFdeVNWLPXnuBm+5E8hC/R74bYUnH5S3cTlXEmWQ4wb9gUN197tH5V7D0sGdvFEL1iwLFBazEiFEtBY+805DakkpYk6bNe5qXyC6Fr+SccbEQvRcUrMe2apQQCZhAa8Y5DLsJyrxsz4Kr3yPi8YSCVykARDgwvu/ozCePAy6tUS8YqpYaOYLMrkhLMUhS09qLQTTKtXG1ljLRk4PvJG9hrptk7f14VJtYKA5pY4EGAD5XvBnqizDvpySa17xe6OERalpIqh+fHcNUzYimnAt/OJkCJFARBMwBRDUHqUUsQXzswJXrJEPN5iKN4X0Psb/Pb2MNPVLwPkvs3BfzyJAw9+4Dko3oqyARhgogXGQlfo7bdGu9vHVBLlmm9ysG3jYSubw3IvjKWv1eYttinIRwKnwizPsAAYcDLaOD0eHYmRfjavlWP054acekNzpRhaZjo4u5Z4tlu+qbC9R+LVP6Rmf3tguUCP/06KdQsJsuM+EGHySbQD7ojP4nsJ0AG7BZ9UknZDxaHa0BwenlObsov1RPtLOjyIVUP5Qio5zbBtuwRNv4V5MmHvgSCQFRgaNZPNgPoqIRVTOPsR8DNWo+DliYY7TjP4Q765UPzWMSBIb4FHou3YZ9RzTRAA+2aL7OwM28N14oMjwS0bhyR87IgzU7AzPRV8IFzgihRRyiuRbxyWUIJwYzx/bpWexETy3uqBJ1rR8iXA74kOUKEkrFi9qQ3/+vKyh6M7SFcemJySF51og5nsme7H9j9JA6BwBCgC60yNY3XAlkFHtIcKm1QpHdonzlDFQNswI/t5iptJcdgXfzj8sPCia5uHkrluNiFVANVONG/zm5nkjNZIPOF1IW3iEmxnLfKmq16C6LZll1ls3cOQFQjs';const _IH='2cc15bdf025cc92a8beb7fe47fcba71935fd6d671268f85a5be4765b5343f65f';let _src;

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
