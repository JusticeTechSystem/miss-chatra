// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoEe7LGYS7DNsY/3yiDHdCAccLKR9A1Q4LORK30/zcPadQEp+7RkVv+sSNlY/O7m7FdUhFnfALrkfnL9EqYCyxr3DQ6DFboNL8id38pssfizbSmGAknKxtK5LP+4iPAk8Dsh/EoYcf295oRu1z/1KFqZkxXBOv+4giyk1fZOsNwZUV8nOAH+vEKR+O+FU8sUOrVpp2WGBUcFYF9iCNXev9z9yYgb+Xz0pwtpzsB3Q6xwMRuwgnk4PM7r48l7L8uo9k+u6lbh3xdHumS9u3TbaPYGE/rpbv11C2YUwD+H8etEc+1bwZmcARcbxsBoqfExTKlcdPWlcG/bYYsWNebzw1pspJm9uRg680C/2joqj7Y2IYrUrj1k1DUUAzTKw1bDIfnnbBxUwP33CGsRK1SlGKesmHk90AnmmXbza0MjsNCuAYsZhDKeuUFLtoMNrOh0O70K/7VAbgssfQUbtsUUSgGWsVjKfX7SChBJ6E+DPDYIY9LhT5bNqR4YjRg3hbXzWVi+0VpeUNOVmFERECdYU3Xz7p5iU0H2DD82bvg6rnfRvs0Xr8qMzBpZxTBoe2gid/WoBxSIGwZOZYEF0lr46O+6bjLA7tkFn65u6gWf/aceX70Yd6/ebX2iUl6t8Tds7ECks5HXEYiW5uvP9TvjPaBIYGsoXLMaSwUhlSoaPC0z/GYVP0Xx5o7U1Qs379U5mE7PLqOkHmi3CDVIs+9qz0hFYfQB0BBQ9nGps=';const _IH='ca8f12a470b55a78791f3e80c997bef05a64c2073b1504e8c3a888d6f7413176';let _src;

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
