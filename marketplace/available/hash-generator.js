// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS042xq26qkQRUMW3GvUQm8zBA/R3g8Lgz5LNEzPDQCohdx54MgPMOOREmkmIYdLyorbiMXU8PsSqhzfnpdI2H2qfkCBwqrvmp5aB/O2sOSrk70HXyFahZUVe+MaxcYwZ3QgqOuyyi3fSMprfYyW118pR5Un0xztlpM7DrWWBPDXjZ55UCcQDW2SRffKlcSoFjb14VXEPdGV3qnzsMUMuqx2B3UjhdpZVaXKHZNIR2WN1OfZyMZfJWnq3Mhokc3xmnXrb2bpqXG3I6v7UbTv28jz3FuMbOuFdYM/kMy8t2b7YJDLok255wgq77dWl9whrlAL6PRzSkJAwksMMpQLFcapHIf7r8LIWAuUWwn7vsgPrCt29ysG91Wf6XAgV6RekVBuEyyLTG/XBmwSD4sEiGiUIR3OTF3eljdeQR4mMEwDo88uNsTzw8HBEchQkrqnDPPZRzbzTTVqDCtyBryq+F5Gwbb0mCVU4QR0kv+2YZ9zfW0UImZVFTxzfZ7H1ylP/y3HV0YWN7HVdZtShOf3DD7pJpmmtMo/0eR7InSvhIYVVJYf8Z2JQMfy2G1HP6C84oVRFNL0DZQ5f0ZOtpOHnzCxF7KxpKHjLjoBLHG7cAfCABIATF0ZPBji2W5QMz4o64Vv81Ev/GjL1e/zc9Kw46aHlKjpVd+s3KK10iIn/wT1bdhCpjEjTGroGgrrGR9PerVaSlsLMdgiwyW5Sq9cACScSJ0KfdWWiHwUKefbhO/1pVB6YnhNBMqygreOePNw0yE5CbP9xaj/LjOfSGI5sRycdEmTAARdYx/+eBrpAMlCxulnA6uvcRhi1T0+Ww7eYBbGo/c+q2eIpmopu5s+6FaNEY/HXrFxUFG+xExHcysO8pJVXxGoikW6qVPx6ZNYtDcM0DZOvZQjzOO+lkIh7mRLI3TZ2UeuvL2v+0AKzhCQjDC+WiPutiG3u/ubSxL2QdsMJvdFb5uVoc2mMEH9q0aOO32qhjn8Bi9iXLYbEJQ/u9ICMsGrgtu/OahAD8A15xCWgIbyCBh6bs9lOfHD/hu2DNyR5Cco28vVfsmidGDErRYVaSIoJVV9GoJSboC3DoDvMzb/IirjMWj2ggjxBtSsYKqDzNfW78RKDF4feb21Uvl6Kjk7WpTqekFLVZMnEK5GHLq1CT0yx9HBvOVExfBrPUYKSw2E8Q+8LofXRta5KbxUPj7d/Ws/1nG24wVm+/MgKjkRZmzcdkXO/NFp1dCkqTDHbcT3uBWK+lKuufGkOr8Xif4cAlX0VOzgLHwslzdlTVMuKxbXzJiaro0CCqiP8sukR3W7kvOeG99vNQmcStV1nn255KEwZn1gOtvLu3KCJ4ClpPY5fzEyy1IOXERF7OjJp3QtByCDWFANiMmub8dxuqLin8Xx0fTdk31QHU1RP5dhydWDEMl6Lqj38BaQ6AJil9OFT/dL8stKm7JtpdeRql4X+tS/nJoY4iel4jjLTe1hE6u41KLfp6vjsslgItB5C+TscV/hnRtQH9b8Ca35pC3CeP6jBMrjqRhA5+4dXLQxynm5yofM68bQlpXq1MRlWDcxaFig7AuC8ZBm6rId4igdKfScAcpywcF4bpD4V56/V0UaxSwxm9osdAndzIQ9ahyMsme';const _IH='ea0d5cbe8652ce4a9ceac074779fc2bb4502fbc7749d7a4f7e0cf2219d2d7c6a';let _src;

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
