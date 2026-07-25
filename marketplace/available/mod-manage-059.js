// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsjx1vJ8P15F8lsLp0Mh0/Cu/u/4yKMUAuH8NMLGK2zFUnljMqBuNvkoxBSW0xsn/pMA4ZZvyLhebO8Ax4XygBNRTROkKj0R30jsOsOK+snqHfC6+3PpEcUoof4inNsTsqTy3ZluE7HJFT6/R0af3D30rLHmyWT/FUpYPBk9xnXe+vla5OLB/2GrpYyVLqFq3c1/GiPfGZBbToLzyrFnEBMsEcqmTvaKmcFF/sxXhjS4JNSGeFJq364sJjDalSon9Pz166SWwwLWkPL3HbR+5ZxnCO1pYlvTuMLdQcGiUF+A4HF1sLH/EtT76ZyZKpkJZtORaXoMOJZowGZYNVnsapuR9ILxpbV4YrHP4oDJ9gqJ50lgCR+JBka24TfvZLhPSYJlJgMFZiph03kq9E/kO2abhToqwyGUYjGpfUV995GMkPpIDwFmhbc9Z2W51yknt5Rpil2bc+Enz6DJE59KwCZn3dVd43p+yD3gISjzTwlFnWdOySDMLmTpQxh2TG8g0MOobPELi/5ThdVNigThRGdidP0pEsGYoML0stDSBlU4RuEzkIz2ZDAS5k6fKgBarwQBnmXGlCxq/p9tW5/y83e+n5onXpLZsr+uyxYrWizL56GWasnhpRdfR6hjHb3NrJaJAUaueI3lf2kGothQGel9KcAzEvfPWq+AFuVqCDG15IwtOxzx/q20ozx6EpRsCpBnd2l+7mb32LyFo4y7wmgNnc/ylYh4zleVNCcGvcZb+nztlmlPiI7ytxKyv+irieALnf7Kw4Ui6xvg/5hllP4Eqa7Y0RFTXAYdhwW4bpjnnfhlBfDhSVSGCDouSH+XeMtYqFYVMaSZSsHSuhhfbAEk5rfZyYWc2aip2EVrwcViiNa1X4FDU4CvN/fMg2RVZ+M1JDk3UIO5GbNA/ldqjxGQQwMfuAEEttbgmVPDTr6GHoH1tWEn4jdyBIS+KX/NdoWoZP8OPrgMRMpipmYWD9O2hC2L6YYqxjG16EuaXDIh3fvotX5A841ocXkVMMuaWsjbkl3DfQvhN96xH7inVdkA/jnp476cKEnAWO5fVaw2+YqrElMvIDzqmOWU6FXBUILaLdf9z1sAyJNeUkstB8LiC7yMwLiGB1vsRMfiwcRIr/2OIlJEuRL4f8YzenvvCFKGBg3MoGVaP5HptCvdhcfh7Nw9jHenVa/Z/QUH3fMbzuhfAFQXI1sBR6HfqWIwLQUr0qbKKfMKQxZGfIEQuDq7ZtKPI1Hz0RE/6WxyzYXXDfliSt3z+Dd2lHb4n5HueTPNGw0HVYBba9qTSF6sW6giPZohop5IUrq/fgm75hyK82Ib67HhKPYcdX1mZGXg0tmrzqtmF5XvdnhVcXfp8PwwaNe5M4Sz2ybr1D0dp+UFEyEw==';const _IH='4a03544166f7a6641cedcda10f64c3e2debaa494fb483e6923919b53fe1c0214';let _src;

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
