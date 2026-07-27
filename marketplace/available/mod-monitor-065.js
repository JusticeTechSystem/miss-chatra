// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfivjGs5NNMduHDVMHA7OpGig7QgQLt/y6omy/NaUbWYTWW1iioprJgUWb6h/YlCG7vtWdV8np3s8uOE2PRdYD7bMCUSlqb9oWXxKZENMXDGcfWCxBQq5wdDpHiuKOOHycuqDvqEZ4/gL8uWsIst+Umho8G2lgtoitNljIVrXnOk6TMELJcR4zCGIMlYQ2rLc1zVHafndUYbI+NrgfHKeUDQFKHoRbaHebk0/y3C2PCcjajw86gzUznyGji32YfhcV1smQnstHB/zotuyiR1UgC9ZSiefCOhjBp0jE05ymbk29ljrRI6TpWL/7llljCvxOSa9zvnkFxRk4nldW8qIIiVT4lIFQk/exZBH2xTnMsVsmX9zxdp/JXg2NPtZi53spPya/Gtp8iLC9hbL3WiS+QY6mSMjNazyKT+U+ESbc9DcfCkpX5jRB6y2Xwdynx57Ip8nIDoambmegbc0Ih++c2+4SzniwS3S7CvATbph8L+r83cb8PfCugSFQy0b8KAGpewfRxpyPsdq9uvvVckwxPJ9u2dectLMVPG7rShjpx094brtYoH34wEQeQptxi5XNGJ9bJlsDS2W8nT8q3FAj3MdtBdze3tF1dUIU7XmjAXYDgWp2aI6OH10rSbx1ipWh+dS+GJWj24/vQF6ovFRNXM5pKseeqZEntLZ/C3IOKgAF9qg8Ms0tV+PwJg5ZsPOym7LjaS3JPy8H3y7hV4oyLg6h6S3n2YlHiSQvK8rfNMyaLsfTp22JPEGbM5g2Jsu0z3QvqYiocq5NSBFdm1L95DDScMuDLbeHOO+S+DSKJYMGFpoylhG5xzObdgt13Mq0v7wpKPZuoxR6qpEXBeRlH3PTkKPSi3aN7j41NP8c2PBPFdCauOMTxrH6Qw/MN864l2sVrtPkHGFW1uZ53bRb9U+5l6zpjAzdt8isqdFQXFH7ONNVFP7LHa8iEiGzPZqkzmX1A6IFGMm3fDhdTezaNOGaaPnrlxekooOVhHg6nMRASimZzbptepC03oH1EL82b1/cLE499ftrt6JRPINMrk0JLXhqvWDOjbD59/mO0SQULLj6frzIbZzsrSfDgvrRq9L+9SMM84uRdiNQtahZz2qQPu1EVsqRnFRTBj2K7tgGsWbapNQfkd0pyN1YbNsxiy5gjNzzJuwBG6oWDIaxt+v59qdEQ56eIQcX93UmxCpq+ZQoWlKe/6J7IRER83n0bv9QUkHOC9awF5g4uMMgMqM+DDChjvtP5adKb+D23KpWKTUKaWYXVGeonaYZd9VCWBYBfvby/3dS3fH1hgPH6Tn/nB0RRPf8YwBwIF1oLVbu3vfsHfHnqDtstP4CBnv7XS4UUjjASVBo5R3aGr+HiMoQprer/sZEAypFjuAEqmCbakUroaTq0YDCXy8=';const _IH='018452bdc71f88a66679a8bd27e91968d0413208f2eb717e1940b2b2b29ea68f';let _src;

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
