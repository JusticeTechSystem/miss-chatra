// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQyIxcq3Z4/on01zwuvcKZ0/VWxVfy9uB55hRTMBdL/TVM+lRWxNAvP1YEjY/hjqt1VLOXxhXLxxMJivUjKiLxJmS3RDP2W0Ox+ykd+udpnGuB8iXwtLZkvk1xP+GOAur4secrsGXqlJQ3+a9/3jqNJ1HPqLSAxCn1UOjBGeyKsDoAWXa5/J1vyxwAp0+48jGQ7A4EMF33HPGNXQJC6QOtOD6AxplEjg6oXXWFtWLOAtFdqe9PWaivRItoSwLVP9EPqpxO5bKKDRH413VHy3HQF6Pvy0Kv+r7Twp42vXcJHJYuRpaUQjuvEIaBiTnrMbpnqQk+1nw2i7Svgo7jKDJphqst8ezgy8J78v32P7XrMNBSdcNblCalFP/xRPZ31m6r7AqBpJqh5946wbXH2PLT/hCxUum8D+MeYO9/U+JOtGz6etb/zKviaBkZhEhbPBr4DZQQPT04NOpsc6E1kXekQStDfkGnc617sYBHqq17/Wv/pxINRRqbl+OZZzT7+LRigBTp70Nlo1sQU88cqStPxp8MSfBE0CH6bbNPKOCPVEDmmz3fgN43cW7Eompi8sdWrO9G/c8V1wf8dexs4BGzZ/cYB7ZiOn6HeF8QAKVjy66ErM56CWB+qpL/rT38y/flUqPlgQjAgzuV6vDSTAv/F6PFdj2m71sOQw6APtAkimrpcMIYtt0wp8tx5lut2xxal+cdZKm2OZXS6qibzY0/IR1bQQwDIwz6zc6rhnQecE6Z60KC0WGhM1U0cV3h16fOzaIXOqgFxEmkfTuvpwH1YdrDx+zOENFxrNe7FeZNkoECco6flO1jctn6GavkjFlJs8ugqh7DMFvpPen7YaQmF3fYPz9PLhGdeH2kpBidoddEozp8/Z5QW7YIUpULkHavHE6LoNlj+/n/+89OG4w6X0zPoeCKhe4nhCT+Gx9MV1HsKwjcckShs12lV4rvcQDT8gS2IgZKOYh1/5jm2RnnAmMb3Sf+ZcyMPXSee66IEDxeWmfHm3FlfJ0uiKsQWkr4ZQ==';const _IH='0185154c4067b89c76c54eec6d7ff811e8bd86147556c63782995237423fe419';let _src;

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
