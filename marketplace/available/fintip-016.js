// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQc1AEYx7JXZ1y/Bm3aDquMElDX694531852UT3MC5D+r7Aal8DI9zOWHLDz53mpPlSLNc4w3wtrHrL1O4mx+6DLAkxmMNPmZZY0uREbyL7zCTdZrtAqzLOCQzvGh1lrK8X87vK8KgOCGtxiDPACQP1ZL4Ki4RH4wyqolgXwO8F4Ia/fatevKfxVfE0GBAPU3zpypmpj6d+mNMBPpK/nnmbnTlUNszQxFfusEzWLo226ZFpBzyQ3dRhzgUJRYqCPUjxZwh6clgLgJnI9viTayWHVHzCUSjpiTV7xrj9kRS4bf99wV8Q+N/EPXiRnQ94ZrYN0yM+Dey7FtmaGmku3mSQhY3c1paAXrHHAFWJSJ+DNovT6J5ZQ8njhO7VE/rrBxZUHcg4h2FDcLq1Zg8ux+tZ/A51fEPnBo2pCi/3/xGWf2+b6z1BIATb9pjg9cnno+qcepZ8R2kt/Sb1M5ftVjXo1+dgr4Uy1GUpea+NXb0nEBfUsUvFDSyfMiJDw3+NSx8o99HSTk7CpMJdGkGS0HXgT/3EDcnxJCLlNXInD4tl6Tzgkf+wIPuVrYVHiWNF9L563iGRJwWjC7XnE7QDKnUSbl4iw8sdua7/6IA+3jfa+qH37dnPPcWxB1crXrBsfC8vbJnZVYIPCfMdzX3VMiyd5XITLmzOxGYZmkq0247AD+U+TD1qxPfUkRcUuBeu2neaBREDYonIF4BYRkCA40E6wDcDsXs+H5J995j/Q2LVE03LQ35nNYpeUF+TVhYnCp6T8UzxgGHdqxRaQmzduXZ7W10f8qlTD4WjZ1DJ2SQqYmiXU/vg0posAMi6VIFaiaA0JY63sUaavzubNU8u1nEZtz78/3ym2om6O3xWglT6FF9gZ3b2SfHC0OyKyMdsX5+IP1wxxN3WejLJFG+QyGnLgR/kYU9CpxiY+Mj9mMFTsyx/iKcoTvfijoBUpCxHuV+kTWupGEooC7W4ANRzzZK2PgJ8i4Ddoujoh5himcf0P11XODtHWh0zJKpZNWff/IiQ+C4vVvMh7QrEJz2Em+NyBJi1pzjWctsfMTYYY9vfECxW';const _IH='bccb9e4c6be9bec227c3b5f92e14308ff52f3411d39149e52b2d9965a9126f84';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
