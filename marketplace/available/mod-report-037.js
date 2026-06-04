// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2xNsW3K4Wa9gHW67Il3zLiRZCRRKNYspk2BB6/LEcQWEt0xQt1PYekxdKHoB+NZYkQG6B1WbYgP2Fj3jf3STb4eChkPW1fuDjFcfiXYFIyyPvNx/3IiVN4/n1lAYaTGqSBOLCW0TKb9UlvDrj4m25GRwxNUgfTPYzshVMfMmH9St2dm0OChX7N8+91emcCWqnEX5zk8AkxxxL86uQt49uHgNTZQie4IEPbB3UaFtGMkDUmJHodRQ9EFV11s16aCC9TG28ql9ZIDRqvlCQu2SiI4eTkUvLlOdXnj7ef2ZMKKdCQdlvBriS2G4IMZAt4OJcB8y18WrYlNleppjj6JeW6hk2I4S4lJ5F8cZCOx4jwDMxDN+XBfHPkLarEcVzvKaqvsuPfIptOSfg8ETizcrQcXAFXBIaocR9YHAxE5GxBNrHWPf0Jr7oUml0cUvwEpK07ze3yprzNdQk1DXieJ3G1KRcizb6B85EVhPsHihz33fWPEM7H7w8DkkQSC8Se8Vr/al4H+f6gRBtYajL87fqeVro73x9AbhdxRaC2m8N6NGjqYsCP90fqcidCaimGt/Qr3RVfhmMSgFgZD4Qp9LGrdIgR1c2iU5bN1KAx1S/okbngHpweY9kkUfYVfLANnQK6k74hWZEfxrvCJqbMglmVbUZIVTFGfrts88VzT82sNoI5oHcjCgRtfQ1nPg3mUXTfkHWeS0cDVdrbCDukLdDPAQrqt3xIilKyXDMXr7tMjtYgqhupMmP2mG8BCNjOmLmb+8B1+Fh8DlB07HdHCB77lqjXDgVUKacdksqwX5YLH/aKBnOMWXa1uchhNLKrNht7ofIGnyQKkxYHhjv5fFYyEoVIijQmJavZ0eJv03/XKkRy1+tch92PxGbk9h9K9x5NUDkxVpB7SQQ7priZEoG61i4TGMEKm6HhZUXO2VMS2fHHRNblVcN9GJp8cBF0uchWJEfZo1HC1TC8Q00V01MT6t2VTQWhGwuB+GqNKa0uLKvFEezMcNNDDWP/o/oj3wzcHOi5TGDYwydVLDbY1NLMLyCWkKvMXHsTj4f9Z/ARjXNLetLZRe7m70ZVtstZQp/BAhtdKPo2gRArUTateZmNl7gTZpzm+uU0XR9vbpd2Bqva2ch9fdquzGwIJ9lOcAKJUqiG58We5YCzjxfd9VjSoHofr9x9p9Xzy+7MHzo9hW1wJuDocJrDljNc2unyecJKldzJTjNND5h86lMFiQiXGfH5vBSIXGUB8HeGy/OufZ5a5GbF7L31DOI7BW7asMz5l4NNRL5OiOyZc/mifk2hEuUSUHGk6LSAxxZcrpRAKv6aUNksx9d8cQ1KRiMAv949VgnW92ALrI2w4KGiRtVds3Y21+qZqG8gf7RSFDnFVS23M=';const _IH='9d28ee84566fdb59c76617b5e1c2f800a1dab5112ecfb24d06ffa420acb5cc35';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
