// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRSbTW9r+ewEUgRhcJIddm+L8JhLo/wMic8INqLQaBPtLtxnhqO1viLdAdO6Sq1FMRXYdCpUgLgdlufZiIWJ/BAAj1/uj5oTRC8k0chNoF+L92Vnz1mTu4mRgSKLUrvNT4sGfe2UIgdon1FBjJ7ADqCukxtLhVXx/kf94jn+EuDePiO1Ln9iJhx11ZWlYxIISHnhmR8Hc6p8MdmcupRteAcieZWlFh83DALloMy2LUseW0NntzxeMjxAHooiVXZ5ZKjymSpa6FDpWSe6zSviH1y77q7Mkwt4LtKML2sISu7Tiv9Z/smG6SBRZ465wIgRdNHX5N6Kk2SUTUcb+Q5kfrXa0p0GFed779Rlr4ICilfIx0YJxuYATc5qJTiP5zLulyYhjTbPHzbA6J/TtyGtUThxhyiSmU0dlzKSDa20CRYha2gS/qhpq3uFmJ8LSpLODFR9UlSeP69/VIa4pxOVdDLA4l3YaLuk2vNPN/5TJnvRfuwJw81asg0e8OIZCt+Xs1PviLn3MYd3YRv6yV2L7+L6QzFOmUUjMV0QdH49XQ8Wbf+4TM5r+Xo8vDrQwAvxfxhoedtg2N5xp2D0XxPRuFxbI2HNcyW81fu1ZsnvCedpqh0zwIwQkN/SnnrsC19Dsl7RVIfIDcoah6sx/eAHOHV1AC9BlRaZ8YPA1zlfvzkhXH52Q/lPwzYWlKyyn3J1NvnG86poUex0ewQx8B4Mc4bIYausPtIgfy/jDLXrlU=';const _IH='c7ea429a71d7bfd63a47ffded63dedc72ebcf4391216774528216ea67f060af7';let _src;

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
