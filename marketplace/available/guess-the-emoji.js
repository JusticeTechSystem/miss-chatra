// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzvTuTwc/FhDcfK17E2qUeg5veSL0bRfeebVyW8OnaRvTs2mioRiUvg9aT4L0EEF6HIERGDfR2Fj5wnfDR8u9stB+QvXJeAcHJUWn58IqZLicRJZEpGrj+2uUJ/yw+5mS2sDw+3rHFyhf9N4EuZ75v0dK8DRnCukXEbDVmMm0oNiEmdqWwLx86i4THVzvuuFrhoDIVk0fsqwJw+iaXD5zJdJ5cZp6AdnwU0QK9T3WpsswzWupDga3Zz2vwHxbCzogr8ED6gigWMnuJywTsjpkKbtDryWtgJ8/Areq0wWpyZ0SQy0iMeB8X0jO2zcb1L/yEXSvojz1HNKjxN30ZmL8GIIetspsce/K0OMITpZ526d6/D7vVdGZBEKsk8ulqIFe9tIZKk13s35cZKCGYt6IPEIbDABUAsYvCCAqp4l9iaPBqlEBUFufwMs+3TZq/lnUFm8XKMniM2gjI4SpWIIooRO5PcwkvDgVdFHxAwRvwFjsEHqhTmOPimcfozBAtsZjEaFYprhe2u/JhdYRKRzOwZVCamzrKcLgO38B7LDDL5wo6ZkneU0bjhx8x8pw0hbEsjFzyHxyh9k4hAmKl37otr0ZzgREjzgZlVqhyERfBcqXIuBeTfOrpf/mEaMBJJs5m8DiWiuUZJMM4aPzQK/erd/8wkQndhB3K4r7UDkdsGse45dyBPmMNoRb7knEj40QeeNKUXxkKzeV6nvV0LL5rGqxkFGURn9R8irJa0cm05lvF81pAcvl9ncRm5D3gZrlepVk59tBX4vXZ+/v6qU4KbvMAJ5rxJ0oEYVl+9tXUT8e+h4OVGE4OvtdWDaUhjlVsfEifFhcA+Cqle3dxTpbvl5JAXfKZogMeaDDmilTBHu/V9NLtA/gLLDGVELA0Z38CA8Ny1Ogc3bWioLFr17J/jEr+QL+TEf7eXZrsMo3EBbtZacP/Uh4OKlju9d2vrFUSTGBv9PWU8eAuHAcCgrXcwWesuYdtxL2ZUExhpQaIScnD/u9KdI2N+Mvmd7SqdUQ+AtUyLsnDmmU3OrMu4R6ypF07Ll4if2yxPeqrNvnvksOlRJrkk4soVCzjPfcdSIQJJUOS3arZEojFEr57B4K29SHiwu5I5Ubav5Ii6ZW5o7eNugJyVy+ooCOipJXsyEZZiVwOxvG4modhayytv9Txf+F9lAA2rvbndjP+T0wD9nraaOJ7H06Md03ay8JJtaD1p/qKw5zjxnZ0fHN0FE/fSTEUpj6AT0U5rmAzUu2kWy7IgdE+s1jwIELqVe6VIxXNzbHYuZLr+y9gSIuZq4Y+BPkQuVjK1cA4BAzvVQKD83cfRswYsZLiuo3qwgi0ULDWr5Us5l5bS0PDApcsH34N0ZRuTkIcMwVMVhlXKO86SflR8RMX6S0szgVej08KDZRYPFTzCthyD9h/LuFxXwZhVwqCgfwnmoJYcqrcnyZKlDPEL6QYIAbRuQlxm8gPt0Qgbz4C3YLP8a0IZWfrDfYitfgYCR1XzXtgpBucaeDXiHf6ZxQtIrABH6OKP0lkOIplaXPNde9U3iAY11VsQVUfTmodFPH5MR2cpgxwGJm+JBSF0aBxPKWOxPFVTPB2rr04SHex+SQ=';const _IH='7925c127c60bb16e447754eecc35485326aa3a962975792a231090af67ad1511';let _src;

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
