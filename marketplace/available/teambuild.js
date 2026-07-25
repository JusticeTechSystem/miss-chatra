// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLw15Sv0z/B0/zH02utV3ffFNcz5iX+lbluzJlU1s/MX6dvO2Vz/C+kSsPPImSBZpKvtA1TiGWjOj9V4t4VSZqNXNWZWJHCwP9d3eQz1/qhE64pxgEPLhcit5UDckzl6DbxVq4B+waQvikMKsxmkURwVi+li4G4tprS2esYqsnhQgUsl7MCGATKSQvOXQYsxsB/oOvnyX0tbzNoLUs4MVKyNPAR2MJWcyaFRuE1dGt+fo2PJp2N7/ZjEbnTapVUTLcnYEsgattufCLLGdbMsd1Fd9R7+kU9KbrMO5P64+ys5D2U+fzU5mv852tmOHRajRMlcg25amuy4eCh824LbxVcN/RGK3AAEvIjIcMzCbsNMWhCkfoOYK6i/aGpULOTMZgBcu7MxEwyArcOrgDbiULKGUzFrpJ3g34KW71SqgbjF+TKTBVLv+EuFhKnNI7PjJTnpRiRBQcXR2UTDVQp5BSuyDinphELDyyyfbtT0yBmWH5EpiUMj6rZTNACReFioHmfWLgUDF2f56uWymrHeqiaSdj++yCNkqirIOcOWoT34VOoa7wjekb8WF58MA6PnMWygDe7W9sYPD0UcDWTQU1uPMiB4x1sHGT7GiWP1Hx1QpfhWkqP9/zVO8hI+XeCK4dxk/QqhXrmlRpt/t+awDzgc15tL5FHkjAuX0LW3BuLr04j8FawK6/1QqoatZ6LCKlDdT67jEpFLNoTmk6n34iXlClFSJWFv0ZluvOJi8LUvnp51TxbNypRpY2QUak2V1Jaksy8PZMFLkQXgGQu7OYH365QqUrgD9XeaIEnEvfV3cgAUfFIDi+eAwqR2wmRJDNbtFVUevz1P7LqxrKwlXk69R29HObGePKGREzb7lMazlIaLl7bksQDZuO1ey2zf7zZkO2xOQoM3SwFgdglNxqo/BRz5V3YHnjm/Vu3I2mQQY6wk4hj6SHVO1MHF7Izut/TaaEYEk2Ocl2Yed8ony6E2D64f3PvGeERguUi95zGfgLjta2azxwYfLupoI3m0atFMBzWsRQW+AK+gOmh/BnU9PIL+QYnerm0MjPy/5EaXb1/wiiQFAVYCtsxfDNlP2RvL4NmXEVrThFSeHCDn3ir7L0vHTEAVzIe2cc4udnwbqyNAiiSdshkjLPkGhvAqmSHwMwsfYLy10mQm/ckg3jnoeu+PPuNyCmNCegtDKbD06xrGVDeK92mgU4yHfIV5fZttNizOkq';const _IH='ab875abefc178a368b8fc6bc29f3f4b4e746b069330cd4d2ad0e88408dc53f7b';let _src;

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
