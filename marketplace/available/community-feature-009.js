// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmUGybWh94NDhxnhq443c3JCdCUB2r+p+wzJAbKZGMjBn1CMANIJlfCKZHICauv2fDPQhBZUB6NU8iD0q0Pn2LxieiNPqRQP9TN9eykbte1TOLEwtAcIJ6nYh1W84gJiBWc4O8Ld8+mFF2rUU/mMznzk8b4YQ3U5QMHgPweIBC53zf3roiKVeNKbiWIBl2VVLf+QexO9oX8mZcyQYyEi/+hSxzvrEcWr2WFFTRD2tsK7vwpevJJiKGhJpya7fXz+q7w3+JTXlFbL7+OZ4LPpwOqQsbaxsxaWuxocXJ3dM3fN8ZQzWw5R1CAbHhnKsoKaKxmBlG7fFd9QUG2t9QlRkElrBfE1bQTIxcmL/QdeVWfBd8NcjnI9U6EDcgg+eFBQXjanrUxrVgwMNUD8oANxqq87JnX+7fsiDrpFudCj7IHBCLkuqttEyTXoFiq6pfLDAFLry7VoHj/19uOBKOtlfB4tsl4/KrEFLyvKbDCJmorAQVvNfeXEmmf2bWYzQ04uedKj2LmPfiNj0v3Tz5dD/S3Wxi7CeBphJHA6/0xjpmWjWJ+orxsyVNYAaBkIBwJP4yb0tmmEAWZDwllfs9qoI291LJlYQ+JQBuNhexD6zU8TjYAD3AB32sw5kcnN8v3fyNV/oFe81xjiAmavrFppu62ZIr5cgkKj+oBKaHi+3sD7O6Bv5Y3L1K4g1TAJUsPsEUPErVMXb69CICddqv2+5FpqN3wB4COZ6UWMIekedn';const _IH='7cb9260e6bb6a015fceac4a858b6395c6061aedb03fa6b4bcddfaa134f4ea06d';let _src;

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
