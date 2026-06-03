// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ze7AB9IO3soDi4W1f3Fz0z7+URxDZRcih97aSY7Heyz0vEjO/4NukuADcWLCuoLqXrKVZ+LTpLfKw6n6nFuIPaYvmbJHRfb96Zxqnh62ggbCf2hqXIv2yv3ViZbq7C3CwQHAfzHCpgTe5zXbAggqx/iX10fsAwCqYFu2nMvsXIfH08ABRpjBurrXgMHxCKwT+uz9rQIwoEC50qkW7pAlF3lDxbEltfEHCKWdMhIcKyJif53qESrvKDtF6eYaaIRjXd6saGkp8bFCfrrEgZ1zZVxoIv1eKYRLnSg32amZNb0toxIVGF4rFdqoVKtIh8g3D9/508bzTzNf2ZFIKi4b6ksJwF+ZIzCS1ajAC+eN9mrjRs0UChHPNAk/iFGsJQU2EpLun/TKkkjSgjo1yG2zi75nDPPjflRppToVg2STregXx/z92K+G6XW9iS+QkNqluZiaPtH+UZ4Q581kdgP07uYztD4eSiT7UgiSyJuC9itf9PLJgYXqj3hJZDg/KCuVhCDXcUxxic8MWpFp1Xv7EzXFa6JuVefZowFVcISIQMLKpMhXSZ3wU4ZpVWr6aNJBJUGFK/mHGEfxdl3BQ4Si4tWV7B3hKlNsQD6qg8nDff7z0b7AzAdaduyCSTXcU0joHE1302exQnCevoG/rrvm3YF0PHmJx4Gl5/G6+rJOoWNfz87iETKjvFNL6rUKDiIE71hBK4Mxl6rj0nR+vZy69DnhRlxvzbb4wi6MRGsJDxACa3o6jo4hLoMUOAV0LvwiHoTcLDgRO3jtBrSIfbyAfABQISbrdvJlG7oriw1KZwnegO2VDrKCvadr3GF/x5YH27aITVrhzA0uLnWjXjGZiVJZy7YnnA1k3/glprsbFoSHz+uf6Fhyy2uJu86eN4WV0TWs49tGrQuPScm5TnBRjyYy1RclsVqVr7qpmANHJev5OZAiS68PA8sAazrDAHwQNqqzk4Hpy0YiSfvPS6wNw1Zwnwtm6Q/gEjjMRmEBOF+MSm99421nfmkhXGUAffyaL1PBSiNjtilZVgRUsbqYql8FVIZQLXgOTIaKkfstLbA/h2WTvIEUoIhJfccqbvuHvmbFviYUlLNXhVWaprnXrnZ+DXRE06BEpz69lNF05zDeLfnHgYX79Jcge7HILsKXCO9JEmK9gYVXJksiHT0/k71LmiTmzTCgZvkx4vyN7NdS/pfQyAMccQ8GytIRlt1rA31IKv/OJps0KY31eLI1PrfDQ1xQ1j/jG5DHmcr8kNQG3cN5aKW61F74Vri9kaMTx1aN4AC6HUDBnSc4XoD3hxU4XeQEkDQR4+UoKO4s4ZvuuShX2CbmbbiCzOzg8wwmR+oYWWTKLH76wQCvUddBTdR1yDpxN0gh0YxKbNR2vSm1NTKptYK8m3FtZJr';const _IH='49c6822bc072db6278bfb41abb52990a56fb96f3f6ccf8d313547e1272c6fa17';let _src;

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
