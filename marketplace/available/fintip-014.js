// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREOXMYc0asXMEb7E2/3A/xZLX525++9pQ74emXYxXrMe6/0esDTytnY7UzbB/6GngHu/5ZsbSAUuexZg9FqfK13U1BzeqLdubIsC8MgfDpQT/eLr5hWrUvOOIk+t1Kg6OIDlpDOkQ2pJ+nVcTuxBYbiORpQNRIsNdAdAikUvGeBV7x1qMyfPQ8yhKeE2mhd43mTO5TOYxK0Kfy2GNXNUnnT1de5ldXcOY+vgvbxETRMTijMNk9Dz38KTCZbWPOiD79zkOtMoF0jyzl+Fg12BAGOeb3Cmg9vdvp0w2V6b4r6eshc87TCz3o9CmAJFXebvOT6nOzIsCEoJXvzaOYwSptTe96CD8bLp0kV6yW5+UWMm8mHUECC3/xEsnCoZVKlEl9wFSFtHWt2J87AWnBb0ukiNOatlKlAZe/lczrZ1tWgMAuH/apHqx8clA/PiuULFF8VUvBcgiPgiF0yuyRMk5jZZ71gRWO24dIHV9ZQEC9st6QmFIUbyLjisxp9HmhUEt3+VdJAmBHI9/MiqLOqPpPLeJW53pFOpNDIWrjgjRo6atvhmDujKk0mmyNxIycKuD3x443Tfiq6kOTfCpyXuItZI1C0t3iZLqhL1yPRlPtKyxpzKX8N+H91xdsg6yM3sbI0wX1ZvPqnMzJPV9Pd9Trr4OHc7wNuC6RQ3JkmG8rp/Y/qoP/8XMvpGO4DWG/UcirTU7V4FdKfHMuwnlHGGWCt/RMfL7uCuVeQ3aWSCVyJ4OTi/p9tzQEmAqet4i74anayDnYvNxnw256eUX7cvyb4wkPm3Ud9X27RhqLm7IN5gNQldfwytnBzJRsjXV13fPyxCwpd4TQ8zR4BuvoPMabKMVWFuDiSft2dMNQjVoqvS81RgRErOo9k/RfEv+mVgBE3dFdvwK56eBf0kUnNPT4T2AxXWpQoi8LEnZpHnIRm6RYT9zvvaVGGKQ71CHN6PkNncUbZ4oMGw7i/Rjc0ZNEMSf9xJdnNUokdThI6tCaco6hThbMaWFx0/O2dS828Lx71kdl7mPN5zdYTsJKSqSSI2saBAv8UAUNFTNKObzY/Lg0';const _IH='e6c6023b3f187d62964f98b4c0f0afda899ac6cfb80a46ccdec0af872f60951b';let _src;

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
