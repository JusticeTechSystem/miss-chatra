// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZM9P/aeS2Prb9ksz/P2DYLihaaOmUORYT0SbWAK19YXdM332N8ibExeZ/fuc7T4WEWaiVY9EcNQfmH3f+MBcaOCHcdbBBG/QlQjNsRLTQR1QUFSmHIAW8K/kY5HGIcu85ixp5Umkg1ijr3jXdsKZegymzL49WRh3rrTegpRC1L3UYFQY+V0px/s2q2YUM97jmd0HLPmTy7BRKaE0G5uG18ghPiiO20vrdS55c8LG1QSW3R3+gMyC5APbZhxM8I6tckecC5r5lKof1K7l6C0O8GgM3zRjUIY8TxWYZ5990eKWz5xDdll8m5dsD5WTU/n6mbATiIkdk+W2Ot/JErUUSnckzcmrEcbwEu/3lO9Wl0qXzuXqreVYyamML8tmLnNrNJL/Vw5Gcx0AhIeOU8NPWH5Osdy+JYsaqS69Etyi/yeeAQlN7I2p7efneNA6q48O3j4WDgbzQT4TBJBMLKAhdgY7Ito/Rm55X/8aQtRQcq4Dvn++b/l1rprZl/z1hQxn0cQfgcZ9XvQtokcwNJmhICM+ZH8OWJBsTHjdmbdujOi+FMdUrHhTjag3pd/wa3PK1XSH8vwe8GMVkxMmK+QAmRoSFkmITn5DKinlA+8yk2AWxOWTSpR+QRCMPFhaT+2mGQVr1Ue3iKMhdl7nFJGU044GznmPT4mwkVn9ohiUSp41i+tZnUJKhUjVfc4IBQA9oU22spVZkX8r8QA=';const _IH='a617e7e0e5081ef4b29eeebf9d3e5d17901f9683715cd07d18510d3f3f774848';let _src;

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
