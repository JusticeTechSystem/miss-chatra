// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LQt+YlOl0vsTDB12ooNgsUyydYY2mrNy5sRmbW56XZnp3LrbJWkccd6VA5+JRUVPzg5Vw3BUsGo8y9XQKsigl0NOUNmep9PWwyxC7j73uZMEgaErCy5GFDNeHrxloCE7JWT9AIVgpbFHzge2IIVkOT8zRXD9ZMSJPM0aDi1c+BBRhjA5KRTs3nqFfTvJxCnqJurBFgu0WJFvZMr4Qq2fpBHyExy8eyedjHlR376g3n58NlbMQxHh9RgaI2bxDejArP2/DwQgC/c1OQGOQnkHP3+48lG+vv3JeJen/wxbf+byVQpYtELDrUG1kQjjQKfbpmd7JDtqNlIzwjF+QeuzKJC4CfOJA4JgjWyVojQpy3hVeMuGXp69f/MP2pLC0Q5ZSkthMYli33Z6rqYkwYxHM9uDOvUwLf2HVj+jdvGci9Du9LGJ3GZgB76hAscNQQKZvJmtHamQTYB9ACbScznkGna8u+z7E61WIvHjJbO/UdiQSsPKqQfLFqNs3BroOIsdUHc99Uli0TZouJoDh8laJ1mVYHOB2HxyWWEUsudg9CJr8j24n1g8ULB2kgp/ZE2DLqRkpvBNfKDNG9K5jB+9BbI3KrMapsDl7mj9wKIqTMPcc8ddXWS64phBm9CvnDjq8GUtaUoAMgXkz73lOmryY/l/uUQvuYdSgplZn5lg/VTGDqqYrzeOONlzeJl1qt63LJnf0uHRL/xeoHsyK2flP3O0RLoJ0SkQ6ZLl5AEMzjAiJ6ehl0OiShFLIZZHLxUyBo2x8rSaWE6fn/zktJWSgd+wZWtndUkqesQfGTBwpUu5AVIwfInT+yBvjbMRg9B7p+EtfUnRlN7LOMEY8OIqe7zTRm1g92J+iObfgmZ/QsvHYK95BfwqjeWtogvgbT/fwZHboBwtY841xx77sM3G1NCQBIaySLUtQ5gRQiWTBe91IatUT7XxJBaQMJd0nv+6zdBBGrD8969EBcDSVDUpE/rlAfx+hzKfi8cGVEjBhii4b7gBR9GpSkKh0PYWZMG3QBWYuG9+b0rsHJtBG+zQaA4gNie5gcXLlO0/xT3eg6faAfk3XvpBDA7Mzji6UyLdzwsfnEe+JZzLX2NgYhD80+mHeHfWIsRsgWR1sqOZE45I7SO8MsEon8IL2bptdYrUcZkBTnv8/HA46wCoJPYDh0HsB7NMe4/W5hgJ+gyr2J71SG61DNS0PV+H9tkrzvKD2QiLPO6ZVvJQJeMlA61InRG+sjQ1HFPCXvbK4UT4ZbHFg5KDlEbCjxDabmfwZTVqlblXAWhdAcIRtq5p9IhuEwgHjhR1tNHTW169DuTS5eTnqs6Am4i96cCnOjzBqh//hQOYcvTRx9SmTI8JEn6fJzlP07YBolH7XoSf3YwuEKvfJKDB1/4bZ0F8vOY3QUt9w8U=';const _IH='4405f80a80e7fe73a4538a9bf453d5a4bba391ae4ceb8b1de269ba132f2c38ff';let _src;

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
