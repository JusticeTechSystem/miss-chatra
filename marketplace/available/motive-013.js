// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ih9VUTB9bpPzJU2kbrcS3xL+XysU8rRHS9POv3QCWtmwNkQuw7j8aGZbt8xFns4Oh2kZHoNtTdKvfvJWWl3SjwCsAB/hsy2BGPoTXy1pQLq4vSOP3+9dlSGsGvyW8he84CtDrNNQu8EHeNSSpVecAT8l9gRnZ+YfoU1HcPOUGwtNhJP7gYPeNi/FgEhtQwUAoaqU1rYmesvFzsA/t8OBEUNo0pprt6ADmysbMZaacz87d6bRecZm+h5wf86cjshyxJizZw0WcJc1NkrMVbSWlxjRtw0zKzqbu8TmYODN4C0VuAg/YfWgmsNvwBZVy6eKREC6la5a8CY4GB98FGntAOHh4IdwqIe4/goijcC2OQPA16QFnn2czDyjarujtzFG27RpC21hqcoaLSkTIcVWYuuCaoOYj1Pz96tlDSDVxKvBEsFGy7JuZLu53Qy+Z197RUoIZ75VgA7XHNr3abmCnaPM4mewKqIW8u1dZN7T878M10XU+XWC2hUmYfCA/hM9BXLj4Yu4zM8Ieq/rdzuAcxxG4G8CoDhDr/w9gqO7Tk8efyZ4Y9GcAmAiwAtsd9efscp+fGz5H25uV44gujZ6QsxNNb8QgXUeJPuLj1Y22MXRap9QB/N7vZS3o+jm1k5RiHqi0CoRb/91w7mlTQb47viaN3aoYRU1+yXMSQeTUZJWwEDcYbis7UKqtJRuhzcCzDie61Ou51SJKJgKfz/DTXMPVpB9NEZ2E7IanMNfITi5YTl4HnqRAhnO1kEeNT025l3LCWYrSMePVItsatRDKWYBsj1hcQoCnm6Sbdt1QI77HOynw7lrmTSOh/poVBmJmq/KJH70fI1lQI/whlQJUNOSTqMcz8oaoWptJXcSkflwVy3/WDvXZS7bWA+k1npGBHWxpK+CRiqdfj/rrpf4EenXJumKhQ4UVGHkTtxLdwePjsPCrfYfoqeXJuePeCbAMm18R6HzdkvH/iSaL79j3IjyFb43sz0LQexw1dcqcuyEwWJw/QV/WwVnfZ0YI6AsGeY0Il30F6sy/MiDSt6c8ADg';const _IH='9a9a095a3e0a57c9f1ead59bf005f6ac61501a711568b86900864206ff1a2395';let _src;

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
