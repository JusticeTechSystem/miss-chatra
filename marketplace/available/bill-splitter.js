// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFUqe3V8QNp4R0zfOlISpU054wVmS2yTECKlIP5kTi60V3mjzKo8mS/u1Ri6y/reOSGRNNQVerB8r2VPFfIwoBO3bBp0fN6/hPwyTqyyo8PL1MOic2O1bmBTlxBFFYpLO1sICAxxPInKxVMu4yLuDRDOgeVD2S4YkuMwE24IFMIVZq1SX+6IKlXh2EH4rIF32bAOVKKxisGDnaZxOrk0VsZR+qLXZ9wmmQzUjtUmeobYLSwbC2WRa0J6SAZ08bvbyx2QW+5VjbX+Cn+JBsvll0ssQhrE6L8VqFG4hokMxKl9YoId9c+ZjuD+W8BtEwXQAt6EIDU1X4pwdK0InvzroLWQnhN08apmlv1Cp8+7rVnqAZqWYCbf71sFwqYJqjsduFKHh1T5lnqlohsbobZzAsR8wHetDAT8nOkTBV+mU/VWAAe3TOsZRkuUOfjT4GTmu3DxNofMRVmFahavib3CfXbjMsb7ZVvIOoTEQXVsTae1cjdl9Z2fTpDVyEgJKq7pJU9AEiCq3a59dCvadhZXe5ImPqpAYnKwY0B9yoRA/DRThcp0p9pVcqShtZ76QGJQGjL4iP5EppVlyHtS2eLbCWO5miPqoK2dyvd3hQGHIFEHYpbPt8wbPECWRUuVtiTwpNG6WFibUS3RPbHGSS9e8UwHRcjbMkK+g8UeOKljxfKwqlid409n/Gow9mHN7g1sMRcYY8wJWPBZjsOMNvZJkltUX7WqHcIJTwkSEBArhF/qsN8DtyHt/369HT7RozQy7TN8Lyn81G9MhXsYsmBXjrGxCIylmlIN+K8usRDwIl/niYqJAkuu2Rsz31ny89M8BsXAe5lLTWY+QGV72JAESMAlvtr3qYzjhzqpd+6QtB6Fv/aR9QSek/e5Ziiv+IXxLJsiBkpq35fU61ZGrmPNQP6+l2aIkIW/24HDYLSJ1mWtU3iBm5IhxBJ36WVKmBt9SdQ0gHohqugAPRZiPWNIJusDFk2YS1gQky9gnwoB38y0m4DoGrC721kO7wyC41aRYfET5Ej2t40XNww7I0tyy+spYJl2cG68tQRiEfMDcExtJxNEQTGPkXMg/HEhEnBE6Wmb1X24JGKkucyTiqXKBN59TjeB+T8dHu6jRmZ5lRATteOzA4Xn51ghpChIT/5tv0jMH8KZr8hh6qRnPiy8Ev8JMhUeZnl7wv++oHuR1NBB3Wx1sgAFfyYLwl9G+X0GFIP77CYnxQMsX+ui6zU0rFu4DSPaG2rBgjg3LXJBhmg0GFbieFSrTO5TJt/XoPg6sdzyGKbdwiWVbbvvE8LmD40J4uPxNtY3WP1uaYtOqtAWzAr7Pt83AaHgY3VTxcRGW5sYKC9zwnt1lH5MJ3Vt26ikSrlbd3CqdgZ5Gr1Wvo/E/oIBM9WZ8VYU1+x+efMwIoyY2ZAB69++S9ANUyUAt54pCNkcTQqRSt6Fa9KfmP4fgJWUAWj2z1PK25KxA8Pqlfug2DZibUx2hE5hAzSoT6L8AUZocg93VbkGkADSuSfgZiiU+M88boZ+yS85KixDQJR4+p49FLkOjyF1R2rIPyyoqQgMtcqmJCVbC1lGhabCLFyCtT3lp252aqdEJtTDxzaeRLt7IWtM+OOGhJJWWh8LR7wnbIPQHsuVUVrm6xCCFlaPR/lZyfReu9gMBe1hU5kTgC1pq772JLiIIjJDc5xcibJ9g+u0XS0o6yupoOoFK65gn8GpqJW8/bhpiz3iuoXBay';const _IH='dba17b7a6c84d1a8c24b406aa1189c1e72c514f8aa323dab1e913e60baec003e';let _src;

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
