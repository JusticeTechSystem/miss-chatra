// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Thr3feu+w5KjQyJyjWIFgDpFqgbOQTkJcihVuf6Wx+yDVNnP3RCinpd2qYPKu2A0u7MQO2Vprc8qUxanJ1gfyhfSSC9sY3KmlA+63LZr48s3WnXcs1qbGKnwvtVyDrkwgKwfsDLNC+99jWH9hj3YvDpV5WFCx3hsQO3z7NaWDr+CbLQkpBa1f2Cy0zXkArv+byAjWGB4lXfQ58SKDv2UVOEQ0FlivDhif6xvJRPeyBPpPe3r2f/+WujA1sOKRyUvMyDAEMOj854SIVrr7WfDo7cMG9dj10XfKwjSp3Y99ejkOm9l/1lbm7VAOAy4l2mYk63xzs5JZg1YfhGekJbti1+MnWs45YeGXAGtqbS2kvnRmYt6TMmOu0vhnicMNIQiV+T6wFzoatbeubD76GG+pKBNFoHHjOS4edfqPrnwzR/TldT6P/KPOAaIkcDfmC/KQreQjyaT7qtTGhtJlLsng1Izik/35+n38JpjHGJM6SaRj9NvvD+tos/L5qs0rbtx3Yo5ZB0/ijk0reVWgLEKkaF+4XHi3St+Oto3xCfolCT69f5E+ZPg0Ej6waIaLOGV7Jfhxjb2D7RdkB6BwQ9krg5NpvdqRJuwAXzfgluyiTgFvdORWStZy8vfYSxjYIT/3nnIJI8VIQiEzZI5UHXvI90FQNBonZOUOwyakytcGign+pt2FQmTQ0OlW/gssfyIOO0WIvmAFT+cwechm//J7dKamUY9nUkJbKUXhe8q4G9Semm43w7jcA+i7XHGMdnteT9rO1LrvF7LUwt0V7cFS9v89vztN8lMpi0ZvmKEV8n4egffAP1l3k7kFV16X15He7NnRyOpaSjMHBTkfytC9+6gyFlmslOGmvdWa0hIKPY1zjNeENzt5J9JlhtJcxLgOvj3MEuqOhjHtfWGuisEck2qRMC4OsYfEBDt4RGpA9yoWJlUuvSgbsta1/oNYcy94YI0Lq4NUxX8xP1U3dsp/pRzsueGO5xtS5NqfSaJSVEKWm2GX5rgcwd';const _IH='20c6f93e74805ba9247e993c58abe2ed698f4c82a00ea120df7fd88aa258e1a9';let _src;

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
