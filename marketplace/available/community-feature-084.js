// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHIGSfjk+VZ+4Gz1ftONE25EViJIAsll8J+5RfYVhl1JxrQuwKr/YZ94vVjTEg4wYxRVFwVMMsJzIqK3NEb8u3q+oFwu4yO/EQ5pqzke4LsRxVXQyn6NhfuY56MSKu5yH65w/HDKDen+H1+swXPIpDw+BE/Qy5ki8nEvHdWSrOLsrh5H7IwbasKN6U1hLgjp9XAk5WpGGVDMJla3UpfOUjnxZzw4lG/dMZffe+9ayophU+c/DBIGmR5+GuC1YwQnMNJFrUEXomK4PyUGsIHeJaluBgQuCyBcMY/JfBtd5SHNJUNBtW/upfSmDdm7P6kXq53Fjvo60zoMELkArobjKEgUbjT2WavSXE3Ew8pGTmgdde0/cEEDFW7O41ptypzW8N6Us/7o7Q+jlvH4FpmICNp/Gir8RpdlGeUqwex5x1W/15j915a/0AnYbM6F2FqTuXeeynCsqRjUrNOMBUV+kcsqOwrD3TBYEAgcVPP2lX9jstusLE/XnMSbPx1zyO4DoPeaZB4jdH4Dk7VwFlRWpqUuZT/ZO4+Pb1Fp7dHZBqBYIiNRSg49ufUaPzvEl6OSJJ6QlQArXdjh++mdfT1vJlQzBJKMTuqH3RFi8719vi3BdM8sD5UgYYKEw1r74T7NdKARL8GUGYssF9negUMafzIiKkxfIYRkOegLgH/IDUOoVtz4wlyvprk1yaXX99+mPb5r65OSjhYYzL3hFlbExLtdCErkqSxqi46r9T4hgnwVgA==';const _IH='00641efe7a79a02690d3f827e77476899b692b8b9bdebe21c3fe85ed04bf5e24';let _src;

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
