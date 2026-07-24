// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEPnY0R7NPYDfk3um9IDAiQuoRZUe+SqFZ2f95hIA9aJYMjNLMjbCx1pm9uqh50rZc7eRTgb71El84JyYanOh8i/NdLhfct60Fit3dYxoE/66HQK72/RjWit9yxGdnkaPBc7c/RX6W2x3pisiAdR9c2AYMWyZzdfVqWovWyEwJ2qzP3x5AzbhmH5+cu2Z7NjKfsRbPo885c4ceNuLMX4wIEnOn8DR/YZltWazHC3Vv5y0oPkNlHrHQEZ28YUeYqhOxJADXdBcCNMC8C5+NtvTzHInuRZbcCKZ53qJiW8S/CyuLVUd4lS89mRYlzkDP6tl1g4DWNGhuFkzI6+S0YcM+nYzeUzF2dhX5W5bJMakwbymlXiTZIcELClFg0ywUrFwRPa7FhMiJDVKFkvL30novYoCHgGGqB74WWXoZOAXEE53xLha9WcttfgZRkxgH3ZT1uGtY+cq4raEoNsASn9Eb5efnBfrclwxlrbxH3wg9OQVKgIAoWgA10BV0jvutx06z/F655KBzzbtxjnv3nwvHuXep+3h2r3OElqcuREHUAsfaZyED2cs7pae+Ctlr/8s617rXRUwDBp2Q7XHf4tmg1yMwJdOj201efj2jjs8/cphf12h9VAkuy/0fw341fQo6Zt3DFixJ5bdyPzi1fOOY32JRz5d0boC5VmB9596TDCW4Mypj82RK09O0+DcTuCnIrR9UufDZoB1wWfyC+6TTd2i2ep+GsFLnLKSapvMsV888cZjyPQEGBM+4tZeDAllyrPZ8cddpJ81SvQrUNKh4M35p2iHYNO0V+PAv86xvMMT/VIkoiknYvej8auYUwYrP3gni8Feq8pwSpW6fFOoc0gWNeovfUwQnN3DahSiu04sJhP+aOmZ5CdieRuG2H9AGLZaJAU6qmSP7mntKqZekXYkGV6DDWW2Al+4xTlftzK/ok5+q9EKfm407ZgInyN/TWvLVKlAEQFk9NplriP/Q0/UKPHvuSn1DUWcx5ykbHJQ0/veeS710Un4=';const _IH='40a34a4127f60c0ee8b823a7a5c8e0d5b9be70490aa28b1283a0c57ff02cdd0a';let _src;

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
