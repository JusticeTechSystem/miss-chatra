// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwUNNGsdA5kJF+OxeuCkz/EugXoq/Pi3OT3q21ptyQjPSWs0w8oiLmIFHuYZLbcwTOUyRDrJ5+6qzwNTI6UjylFvqKzVoM0VyfiVqEoCwVXxvck09iV7A7k7ezyJPO4gxSnsdwwzTmyU+XwqZh6zomUUCCFIri2NmqnyBaZylo6UZJ2GWoITg2DkJLRcvpAv3GxMKUvXtqUnnBtmNpCpWsWYUKm/hFLLkN5ca2nEMvn77ppmUXDTcCOmD0usIrnH5UtRP9SVOSAsiJL0hwCo3h9IiOPpILrDCgT3GLBWv+6f4K5LyuhDPrKRzwI3ww9nIh0/p4k74S357/F4OHfMhrH+/38d3O3RZyu00VW2t7XzSX61TCiAtiRTb70RRfIhNqu1SBuwcrRbmSIgEADezI4Gt4HXoJAgmkj/tfwAfOICHSSwX4uu6pz71IddkD/ZjxzNYzoNNpjlC1eZthLcLFc+YDM248hkwOSoeORgsGVZ1eMD3cN0iZY6dt2c6IPDmvB6c38Nr6sW3+5PJ0EfdIBQY05ZsO9mHnZ370XBjm+DK67ERmHzCDusNwoAxwv3+07hkntr5pyUNs9GfAfnaaA97BoUeDFkXDfDpzg9JyBkJo1X8M/Mykbt7JXZbY4p/vfY3wcfKPY4UoPmoIJra+nAkA+O2UBN3TNSF8rWC1K0BwA/tIuCY9LaZADI/T3N4UYPUkqF7MsnQk3FsgHJb3FP8fqRFo5z9OU7iheA==';const _IH='b075641e8279697de2180e6aabcebdcca05b1f253e9dbaa817f41d02922fa0fe';let _src;

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
