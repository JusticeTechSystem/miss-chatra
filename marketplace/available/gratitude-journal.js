// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SboYhKB3zOgIPLMX76OWR45ot0embiNrvDlcEaxPjNAmnMSFuPHUAnhYVlARg4eeBszEVX52JPa+p340ybflV1pf8fOHDIxxVeVYsNk3+grviLxSc5L0Gp+Zzz9VFbJZjhyAqnTmEZwGEFX3cXobSCzERFNdeMMmANlKJPC6OZDPfg7K9Bff4SrN3zE151sOrSGmYnLSj7u16OhMzeuMa0MLVTrE3goWjjCmaGaq48jETQdQH+ohhxaG8l8FIGcru126CPF5w93jhwwh//f5tO6ByLrp14dhlZ+mGBIGo2edGBGrKxboGY9uNc0DEtb3VZ5+VHFt4hS0lORbs0SXEBGnLfPu2wMDHARMQucOCilfvZJ2kqQH03AHZro1dzAxl79xxGV+OEqLwmheanHjMuV7YVxbnMFpV0DOVeYUYTZeqb2lOlPB5ZFBvwBBDswCy9uEKNXYGa8lZFQjhB5xA0c83krabUXCuwW6iJ3bLebnyewIGRexFQVunSX/6NmaF4mX0I0KE06YAiUHeqK0JrXWmQHYWV73u3aXXJDmunQXCiPa1m8mLAQ33JH7Yo3I6iJhm+dPQwHOjNJSGG/r2mL6MX/i37bIu8C1GF2N5zu6nGsRF0QOY0lquomaSrEaKd0QG/O+eid8MDd0Dvnid/GDtoPtrkY6z0atPenHQc+IwApjRI1lV9UCRUjDGGMHpi75H2K93Y9a4kBKT8Mvn0E6YVYALd79UmIVCtQFAar2agHMIWSNLiQ43EnqgazvixgXv7s0Q8oWSbH6qpvF/7+/brxfbOHdVVR78B4uyhHSxjmVoaVxwvTsJMIOcFtZALksZ/5TCzjxqxaWDwTi+n0nGBXUgQMVNoofWhShKExaprKRvq/Du82VFcGfQhp4quj3ADCSSZqcp4/x9NRUSYYJmUzcksV1gZ/Woz3eq1rCHQNfT005gZD9UikES5LPB9JGhCH9BIsAePyBk9q2kj9kquACzOibGUST70vRX1Zxe7PqT0l+ivaiL7v8n+IAmTRNCCu23p+/Eti3dvKGt8pBYNg1C6egjItuBc6o5ODJsigd89XJQYGpDbdP58268i6b8vdGqJGw5UHFxMqCrqHRYfBNjerGCHPKKACjJQkpW9QN+rgVkzLF69sA3ncn9RYUFpQKER4BMG0f32XOn8/IDMeREQPwiGCFhGW9d5JGVvb+zuASmQA6sBdYbpTEl7nOnQNDY/wAuLPGST+xflg/obh3g5L2yqnmhlP6yrfT99Z4wdwDVZ4YFba7ZVu1hALzDFsPK30PK0n7wwfCqDlAYKLphYZzpRNU8/LswVh5HJWvVEYo8T03oHp33FrfDuQfJWe+g0rP2KSwqMicAuO3DfzQ65NSMOT2xenKF9ZscGlDMfMLBXTAXFWZhW6hdrOQlE5Uh2nn1CRgTokEWAfs1EqowWfZGP15OCoKsgCifl3z6S1Of9QqVG+/iit4AEXr1TeqRKHKin9CxYRYdIWVugD6eCnqRlKe6EUVtGEfLBiYS+5dXw0f9p9F7l21kGP3OqfLjw860tOZkkC2GW49Hj8+HBX6vOyQdqIShdfrqd19wzSnV0Mb4veV/4sb8d6bMkEELlXC8o5SSXIa9VbgnLwjoht+QtOfCmMSWyJIxWGHbRzNpFGE12emYyYwHdFjIFzgvKsqSaFHpd9pfqx4lXBehGGfe/EMgi18zyzbPJY7lXc6lD3W1++ARMj4weQY+eaGnvizEVpXKAffjj/wABRh1xjdOam6UCrrN9rtafLQOXYW9keY95VYCERHMWq5nXNzq0UCl34LgwwjsCplGQ==';const _IH='6842f19dc551d38f3835c723dd60c48a0f3b7470a949f1ba58aa72aa922e6505';let _src;

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
