// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNeYnCL0TzSlbyLPgVDOF99ZyybevXuZQyTdn2bYPIDJdPKvtEFkPvcfXc/GjQ7Ox3rceVDe1Wcivr7xW+KjHrY8W1rbRtDgcNM8l9taz/s1Irn70B6+/NgTIHOIRusVuzkbXjU++hmIcGO4iJgavXPJPsqSNUSIs64VuFVpk89K/wBSUf5NKMlniwmeJMrZ8FGVGnVuBv3Bgc/2U30CyZgrtukfBb6SD3lchwN7Hj4bnoU4QudMoSydTLgrvaDUQx34XukX6utM+CQCl8WMXhWaxjiHoBpVHh6pLIqnulVz5rbC3UyNe0C2mifaoeOYNe2kyEJB33hD/wQscC02jekya9jGIQV/ANsx6vESi7oIoskNVXo7yTktm7SRzdD+diHJOtHYyZl+0J15PHk4vrzUBAJM1ec8RIFID3uyIThthvZ4MuNpb5YTDr+NDPFV3UPjhxLhKw30c3bRCy+rE++qDKKZrM+uiw8D7Ybr6Jx1fOegrBzEAEFG+RtvfTKot4Z+wV7veMnXVmVCTSLg7saAWCaROYg5sX+QISrNXtw8NGpV1E0F+xuJEUA1ivHFEAa0FAz35pxCBInK/FHj7RFb1RY7bT2DupeO9O8lmB1jO8Ay919GD1wdLKwBA5a92toip6yO7BHXqJxDfHfij4x4ycizrDMj03xH88LKx6RboAb7iw/PMMYNgQ4UL55hmsEyZpVywxRcF3/V6g0DFzHTmob6WSMQvC5LHtaTY+F6TbNRRgAQ1Som4FFRMC78sKRiHhgYGwWqgKDFUk+1/n+mn/K79l7vPiwV7AeQwf4Nk+8kP7ioQI2lZXi15t4lrFv9vxfv5MMz7sSRL1KuvDKudOmI8EBxXQKJPtILdf0eUE9dLru96zt/Z7Pz/e/FTBs9couPxKlZlooXVC6uorxxpiO27vVluPGPKk+/Ds5kTNmyw69CvBwzA+/HwNw3cwJyhIE+7ChYE50zziihyYM87Ejkr9LdD/FwT36ZQ3zj2P0pqVwniC/OinPHsz1wHlJQAdJd9ELnG82xaCdn88R7LAOF7Tm3iX7tUv691WBY35nSg6Kzovq2koUhrVNKHkgl30MXounwaVdFFr8mKzOkvBcHL1m4JGu/FbA29PlvUGlOpUosnro9rkC3WpHOx5yRSNzD/qIJjliDXFdCRwLQEF/fh1FDggtTpjEbp+Q9iBsPfhtx4abuWqcyFSMtzb3JPZOu0u1+HKmLjq1idjDW7vF3Bq5KatfzyFs2TaOb/X9ixxPlqG4YRgHtxJBfYVYZ2ilQuBSJ/cZ3b5keUWalO1u2kiBGz9FlW/99Niwam/81VloZmrn31aKsVYFOBj6OjPmkJtgeGKg8x6+Bh7fLxgBaFheWSKxuhxXuj7E8+EV/EO1XT9Gr7ELfIrAoTpDj1q+Oxo4vikTK7ANwWaXLSpD+wmR8R/CCVOWfTKqTy7LYc8Rhqz';const _IH='6cfd4799bdf21354aafafdde3d0cf65fcbd142e6f3b6700e811bb829760b650e';let _src;

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
