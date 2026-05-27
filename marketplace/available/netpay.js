// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xylghrORVkS855lo6/je3SPaK7C88GJsA/2bTFngYEyWJbSE8THySe8qaTmshcn4DzIoqOvomiLoYdoWM1Az4VowEBJtxRvxaKgxPFLnLsSZZibRyUTfBoDx1ML99bUWTrl2BP/ZUQ6VdWlvnz1n+4M/kjNXNGbC8KkaH7RDExZ0ekmanf0svaDmzxwI2Vxfi812iYKaPpkcyymCoFjIef3DTk0pgd+YPwh4Ln2UJdffWTkVNHhtLLPcHEyLNF9gxgs2rorTcdror+22AYVhiKVf5VTYNF0E8BBxBuu8PTxEEQ59tSbu6GjjAWmzh6jM85E7n6BPuu3DG2I1PPyKc8+JqC6mZxh0CRnz1fU3Ha1m00hmQ1xXWno/XlIz5pU+ZViRTMvvfRhbpaqug/VnshQQtvI9EhG3Ru+biJCeC+klxGWLZ4oPsgoYEgpOB/7e7eToWcMlh5FIaCyS2XJpb0gFRkj2MedXwBBDz0aqU8i0I7YJNTDblyWMWuFQGZOxI29GAZiE7o4tH1G0pUQIg/TBUJntdOiSe0FvGZjD4OBcAF7bGJgfMBSqDpS5oxPuipJ1XbBdTP0xKUqUaK+mFYyMi54sCyhkXgXtBqFAnZWqjhl/1ocXK6zLEZEZWKa6IPPMpYPUPU2lTQIV3ep5ET79gzoOUFY4H+q+v3WpPQ5jyU4si0/ef9/4J4jQX1841v6seAdTreLPVGctLmu7BNV1cNd5n2RWUh1IQu1IT7J7/XegSeIuSQLpBs2SJ0IXL8C8gQH4DU7209uy4Z1gfDBsi8INBEtOIGuG3qFPXm4eI9aNt1RZaLQNufXi0ld/S4OGOvgZypPo2m/5hebUpUSrAtPyasSYxBd/j60nuvtsFHUUH6WOyn2SVeJQ3Y4oWetkg39NsoMKpYq1khK1GLMYjWU0yMXmOQbKSvgfGAhtktR4D6viEYnX102EIFbXqVELovzt2j6dHxssejCLwdzo2NYCSLJ0Z/mdRI9z2prH+xujR+XlvQhXv+g9kygxMDRJhCL47QZq8SlAiRPDdw21UqYfvagS0X7h83/U6pIzJuNNxoAW9uKTQ/eIyc9TfbkiW+J07EL77vc0gCO8o5vBXOiHZ/5lL8FXblxlo9AJysj/vRjS+aoi/3md9ZvE787TJ5oxv8NyHXdN2RI1ZOr3kxVXbF3krTrGFC/ewVnDoSGre+QJrNO7RhHqM7k=';const _IH='427efb0771bb872ec0da11f3daf2fe84f12ed6babecb7c93a6eafa212eb7d8af';let _src;

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
