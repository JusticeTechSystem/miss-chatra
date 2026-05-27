// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tP5xlEyWj3PS0I9Itsod3DzexSoND3zpuV6IvpKddFs2QQe85gL1SdZib9pJuAqCOifJOml2wmeKramzmqlkGi99WYW07P6iOm76qi7+W2v4scw0h/dOF0k+WSL4jnftcx5d9uWd48tgx0H+E6aittwTY1DfduSdkKxli8Hmr+7ghzuTTZqAnqBr/F8kzcP+RHX9E9nnNv3Hg9iHZTGimam0r+EB/o1aMCWLUiz6gIN3v9A6u2dPbkCw5GhUmzqQc/SQ4JcjL6Jzo8XR/rHgM/JeAPTj6z8uBpwCUvODNjkrG+PIUc2pIUwwg0lXj2dylweuAqX4QIvEdPUUq7cnw+BiBDkKqsG/WdNarRpIBQ+LERSRbZV/NVn/tfzN4VZDUMKiUmu1aozogGUfL1CqahyxQI3Q51nks2cVZDP5vzbsgJJ1D19SZvqnu2Gtfwl/P/nkc61BoXzLwm4KepfX1yvbjp0t3FpaarrLEzljf9FTNXMg4xPlxZVUjMBLL+rO/z22+k36+wS9mjy4fZ7nP70m4L/DG/c6mR54OIKaxRtrN+cPdIDQSD7BPkRyumQN6xE2Ekjmj496Nv+JDtPBxs1Rf6gn80gxmP/Ah5dg0sX8RcA39vimvm4ff+Nmbc7mJGFUmDvym3+rudRyhPZsjO/PkbgHMcA8J93+ReK+vBw0xYl4IQTxbYl/s5pnH65RMjTE6tOGGiBB2+6fLoW6WXnPNVR0tKNZu5ec/SCpfa0O8f0=';const _IH='190980ba48927b7466a8600e534448ec565aec3ad43b53e01c982b64ad1eaf0e';let _src;

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
