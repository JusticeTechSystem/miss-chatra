// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxLGBpHgAb3hO257kOelVCRIaConS41hJxrm/tf31XbGp6BsI5D39DChrWhXGjzzKjWxoMsX6SbRPRdawaOoUTZ6VhbS4jBmPxLq3IcCftybLA8oB0KtPHet5u0Xx4bAdvp/NvJVhOJsRGYJY9xMOpZzdKP28VS6fzatnGYK7PSFur7KkuFW5/3n6devXsTXxLZ+ooqFBOJh+1MHFdT4agm+gCm3cnp2T0OzjHLxdDFtIWh1OJ1pJEi39b62qi3dx8fnL1Gjch1zIrLOFPwP9WBmMZ11Mcz6nxcVE6hHOYNlNbe4ggo3v2X+c/nm35QKESq+DQc0cMv/gSIvTPOT6AD4r8BsIQZxSlv+wJhUqJ1QSY5sPdLj2TYVCoTlWhlH+zhU9/Igmk0hvbZTwkKIfAlIGm/4lM7jy8jpIGAa4+xwqbzLaHMzBqRVUHtGqxb3booV2AOHn5PeKZGkcFHTWkbf/xwdtVtrAAhaTfulPGB6ddf91Ot6ORgKmND0DXg4akQm9pa64537II6gKIsl2JboX8okiivBn3M6+vottWSG4CGZWvak1Hxe3zscBSCl+RoYaU+r2m3FWBSWWDGE6LV8YAqe9fBQCQpNnAsV6zkEbn3AzPHqOmTbi4Qm3og2Vms+KPaHoCi/WdfxHz633FjEVojGaOidoUmtEnUupc8y4tClMwObeo4Si1rkGIeIcNEP9AO3ZqMQmukeGPcL9RwmgNs9J9ZvfhPuiHvqvDHb8R+6UlMRy4dDPYVHveHtaDumO92bvr/UQ/mDuaP2b/thDsNDGJwRcCUIPnCvoSJQNFng71vp1wXk1ogyYeiNwJCbO2W/IVgNTw4aYXSCpmHgLkHasL4RdOnrL8CkN9H+8+WQu4NGOOZ8GK3600aC8rBiKOPQcer0sHdilL34Hy6NdRcWXkCopeccI1xS6omloqIvBhYA0dWxSkYroAxIU6s5EK6YxthpZLfKMav6EaHU7GDZq5mqk=';const _IH='527f2c816ecf4b41ce070222f8154cd58f0480c30e468c959ac2472a846eefc4';let _src;

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
