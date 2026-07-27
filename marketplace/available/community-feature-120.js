// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxga+fyEl1wtx5bzLtCE8OI+3ACksKed8GZf0DCmMD0ap4L4iSYcAr9Agr4Y4N5MdpBgAmVLQXt692DTRgpT1tBZeEcXUddsXwosUHhIEzE8Lv4G/t7XgDSariRQA2wxzvj4ClSmlfMd4q/0zJlfi2Zywf3PhV2SxomU4ltaCJ5KBCXt3F0u2KCeSrk+utAM1kJjRfKsoOEMe60fBJivsMnSl+BXlUSOe5Ef9vdyWACOFfL3p/Bfrv3ts6nu1EAVbNIRt7x3s8y6EjsBLOzzZ+V9RQQk1KyOQf1+ZVQmTSmCI4pu6Ek0yS2ez5vXZUKXlaK4wTea8YbmhWHHt+Ei3bVu7OVw1p017ZY+IzR43wiJr/IHsar0sbHZFsG2azFlXbgrOAWX1WSvv7PXuPo7E/gmivqqvHu1HJEV87x3LdOja68s8HY9mjotwHwi1tFkXNyszqHu9Xtgt2HUBB9w2K/N8YP8iwtA9uT2K0cXHHTvntMutek/bmaPlgEE51+ywSX17Q9cugxF6m3B97DOLwClvlEtNOhlKF/HiXW03bsvFLgMKTa1lXNwFFEJMvlEp8Psse01NA1UaG4OOI++Xcqoy3dlcE4Xa8MOOvETfJamVgtsljkU2iPmsKeS6ARf55A7cOV+QCx7n3r9RsuRp3Is57C0SUIrFcOMtOB+SVPrdQ6YW2e+LwC7LOuF1p/e9hjwKZVYe6GIw+aGZXqI9ss3pLs0bEkX5+FoIKTrdQO8cU9LiHlnbC9iA=';const _IH='6bc3601524110279bf359969c7b2a9a5aa590e30513ef85d4a3646dbbdc708e0';let _src;

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
