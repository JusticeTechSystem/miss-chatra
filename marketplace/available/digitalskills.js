// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYAe75pAsVNiNlG65CQ2/bz3/7yWHyMQhS+T2ZVk3eQemy0kYvB3SFbhoixFTPlKnjN7Co4uCKwiCwGoM/4PmqGG9eQONgSXU7RgxwxvIDokrIvd4oeKoPMpn+wrEXfsYzay0R2Mp94lYKikYKa7qKn2QYBIHOyzjPCuXGVAfUjmGCJtXpy0LVnu3jHfUsYPvgvjop6v2e+eP50a1F6Fo5UHckFQsj1C0fhWyViTeWtMaDEloBh/4KJkVppl9ELSxOkq+je0e/3O2UEsjfAIlyOPb3FshU5SBDhAQhZfyo2CeY0C4Rf8S2m1lFGJEixPk+2ZUOPxoW8k78kMEqRgZ1K2VXn+MgoVEadzURFQLlke2ZgJzrv6rN4kG9UwJ1ZYsP43hCvd4pBuMy/t8ffLvMyFqw2gIGJksM8gwkvCChf0Ou9dsgZ6swdx/C8xtIlhoN6sWAvOipOv0nvH3Ustsi8XhkSGHXgqpUUEo/4lf5/GLD/ZclpG7WBghLK2KosCkcwGAth/Hk92yiLV2mKRShWtWKl9tCICkOq9H6nybZQF8Yte3Itk2uLfod4NUYTyuhcddFR/FASlb9s3kqmZGTCbJKTKDMtA8Nr21lKy595kRzteEhwzklRJsVFU2mQFbiJsH9Xb6yAV/7ulYsxRBZ1CR4cD3roy3v9wHhJO7GQ+Q1+csZgoFvexVqj/aGI1rQm/02U8zICBrueswj+nFJ9K2LA+NkZDLKM9RjIUeP5q3Eqq6szRwiy1dn3xiGD5IOFSSqWppnePW0nF7qcRINivqje4Ix2Np1c07/0W1XmkWKIccFwOAzXe/v3ixWhk9bkMRgAbztneeNNYo35b4tjq6hXp7N3A6RRxEu+nrigJl4d5XKbG2SdSZndyj3IM2oD4Q29PJSkktr7ZyGuPccXEAmdSIQcZx3TvglRupsOaIctgQsulU574wo0nvoxDIe0UA6WN7HcIIL5WY/+0kuq1/BQrZ/dpfXEvYHgNHADAYO7dsxUVsHnZkew//PX2oBnOCvEPlmtmohjDvcr8NLHUVVO5hfv/zs1UF/853x0BoTaciXasVYgCZGLxL+iv/impAFgdcqO213fOVI5541lKW8VGUE8grI6Hjut52cLijMt8vsrQLXdCh/ajkW184bMwJJNB5p+mjfw2UI/2Zzs+CfhNJwk//vQAxlZeUW/AzF76OJX6kwQNqaKhem9ChOLMlA81h+UJ9vMbf2Mw==';const _IH='0fe80513f02d347ca57c4964c3f816307dd37051b05e7e48cb67aeebc5a1ce81';let _src;

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
