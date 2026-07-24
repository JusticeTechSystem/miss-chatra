// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTselOjse9tV7+ps1QwXFhk2NLYsW9cGiBGFOtdPD5LvCa0NPoY84yehCopetdkS4psfpEXBYhWP/xjs0LkH/UAaKLSyYPRsYsQ7oqAngJY3JxitA9FE8s4HiOkpb6rKoSG0p8Jc0jwJaNoZQf1DDUByWv7h3gBRMS2WKMP8I2try5I+mD8VWHLZV/o+nbrL2CUV28wzCWuNwG+k5e9iHeSyCxQxfs+/OM73QhJLr6FLZ1vDuEfb4VO5/7qp+UG2GsJoPErjnJArbAUkG+h1Z5/R9xxpnkR6ewOxrcvC2P1jGP7tJN2bnxTPvji/m/QxJduVmBx6EoIhNHMJUW1lWnA1kzTDLpDyuUlkytT2INdnUyTAesDQRSyEORgTqkiPbstEqHHXmNhl25hnY6PKJfZ4YQ0NfCw289jwt5qFK+vb4YZmOFVyc2B5NEVXDgzAVLyYX/ZrowrNmrovG8K0n52vxJg2x2lnk4nPVZKUl791bGupi6EkpM65epNWfOAR7lwIRjJZcJw+eVqXmlSYK5g7e7Mvc0U55pxnNyUc+l5WfD6qr4PvAvMEN0H2//Mk9k9OXGbpc/TREpvxYGB82J+lwqYpLMD2XTTRDoskoptvvthpltODO3l4ppaCrLss/KcLG2i9bJ2IIPR+8dQ6D+RfC5lZ1VCt9S7wmsdTTVqSVyHTN+er0D3SqBh6gsuWhThwvMM43NELb8HDSc9V5HZNNED07NqzsRwyFpVjNJ42ttMOIihP/Eb1byI0q90qE+kwe04cbjHJkfXE41H8KTHTKLOTz4J4ni8aVZ+YSKRwLWPflxRVfzj6jOG2Mxf8rV/fTly24CVUyHNCGph5x4whgtanMFG0P6Vnk8JYL2R26RrkKjEcm4hA/jtE46p7iNOIfjNPWgAPdCcy3Q0MtmFeBDaILqdUDvY5AflzDOs/cce7Ir7MXX8NBxGqsCYZDFRjEXxjH94OVakh7K93XdssiAUPRs4pQ10x30jW4g7nO1GfppH8YwzzybSt1F0gBKO5qZ/zMLpHE2LrPAc+JpjeIdGQxY2B5F4IMCMWAgiYl9KnBQtBpNzgISJ240YBgKo4xVb0nRSyuz+QK+TyFUmMDUJRej6Oe6HiDK8mbyfyyaSFBNAEYFdDayZJhorKyfAtUUlR+hGt9ek1JLR7GobkJEzJld25X1j9YS9bM622pClt0WCtewI3zMP8Fdd226sjQoqUDxeUWFyOC5vRUIkuGpnxHbSOUwHM5dnwvrqbRMG11spJxSKGuRxaLusUWk8AfF4JQtnk7YtZ3r1wod8sGiiewt2pgD6sB01PcwFjzUy8Yg5Ux54+4BVhPPLFhJmw2A8RZEI+CV/8Y2XfK/U7fVnjpGPqkCx444cS5o=';const _IH='3ff74e16092530fb064df1ba34ee113cff8dbf7b7e55861c0a2b6b89a42e976c';let _src;

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
