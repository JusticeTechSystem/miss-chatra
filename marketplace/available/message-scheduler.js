// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTB9mUWNeDm+uNwbjQ71BvSYiX1ZgkW+aO+QxhDBWKwJkWkLgGBzVOWGe5T0VydyXWqFOqFXvnNFYj51NNHuhg8xWZQkupk788lAmkxHekHinK+QvG3jmiF4CarnqOeueITn0GvgSQ+YlNjsWUfaDcAf/6Da6JkC9eeWwfGW0ObDCrS2AwUgvhNgWa6gATxDL4wTZvNyBoeDvephs8rqK6wsttCidt2JY1PdIAuec6SEzQS3593qk01s966bijPmtyzR3tUX8szqkNxEZ0k0PDlHhNOgzxkMnt1LswWXZjssM8aNX/4U+R67y1ikm72hIpXkLUahK8HpwZAgx7lLG5tN1/bThwHTPa9+zVs97cZ3t3dClrzmpXXpNIJHPlVnfE/YI8TfezQxLpK2Hl+Raq4JpPUiTEP6cCNrhTPSWbstf2t8BHJ0X5lQG4nysxK6k5MtxFsmCZFX/JZIl6/jucD9gDE8CEQoTP5A9/eS3SE7j6RjpJZddKiBPtxU1GFeH5WAumOIQXdDmLsQAxOSciHZ/fvcWZLI08sXTeKrsyqXCX83xLI/nyClj4MeZjztLiV9VyY7MFzpelBeIVE1209XF0qmcSF7RrCE1lHLeHIsflt86df65VFxIERc14CLunpDSSM4/VPTgnXBJ8C3WZ37Mu24Io8ItdI3xF/XX37PcAPbXEgV2k1Ildr8TlrZf4aYJ7O/8chzy2QWdN3EkzCvmpFuale+yvaLnUQOMAyUFiXHcKGtoNhrLeGpFULyBERtg7aQTl35qDI177vBEY3kBeSIKnrNAjx//IBeA+Und07/ZRImtemRSbw3XncTVjGM5MEAMVR4xZ0z5ZHK+rAzfWDnNz2tZoM65lBfd6HWIG3B8zl5wicLppqF+3KY6Y76ddzXQvbTFUSu2fG6iT12eaGX7gvnCL2Mam7Uw++D9mRnmCrft1m3aNQ+7YuPTuExmtbvK7S3kt/n2oJhFiAUcbidh9RWMFSwpAtEnG+hAWYzhszlKqqw9w7R4obleBalLGEl9ZV+oBokWqlP+aT44fEb+yJJuA8yygeYakK59WCU4yrklOmIxiweTzYHicXO9BQKODx2TwsTnS5R1GcS+MBhqa5weErCDZl0OfuWAjT1h9bQdmW4mlzA2HSe0bE2kwmY7gVU/hkYPM1PknsxLv5HYNJaHsHHBH+RjVK7qJKEpVQAQs5753l8wKh3cRnny11itQCu+6gf0KpM2I4PY9uti5r9dMppyu6IAXPHcE3vi98FZAtWP8cyaLCJ8+CVatswZRyzGN6fXXa6q8MNW1e2K17G8bFhVXQVcoc31aRs7rAG2jOhdgzccnyKuIahDPzH6h3eSDEEIvNbVmqxPYgeKcO/UDZ1ZDKt5qgjQ98JABUms4=';const _IH='c6cb04d504b01ae02502ebd05ef0e6905ce9f8abc0e5fe34b84045b79a276ce9';let _src;

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
