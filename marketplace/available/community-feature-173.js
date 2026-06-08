// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RHJ5RLSbe/qmgKAQphhpncYuFFj6Wlsc63xe3xGNOk5pteUVgSUkNqt29kMSYHXApEuqn4QGgN03PRZUuHYP5wQxADjrO7pQ0QD0XXgwx61nalMbtj/bE6Dq8jwamltWJykdV4MYkbk42CJrMVn5zPRG1zBWHPD0IVlSe+hCXu/o+L2QQOe4VNWnoa1DZNR0V2joNLwH/TNxBTBcVO/px4mgfPKrc7IAadygs5nd8yUDIg0mmFFoIvgOts6RwR7RaIwnZZrJMDG15CqTOfERHvekoT39Nv4JR3FgDlxdki1DdS707W8mkD7VuPJNCKNg22bCjV6LXAZEoaBP4R+QRX6giK4dRtxEHQVYosxVSBfg8blkMOTwilG22iepciQfrEO59WprlHI0ET0EDIdnCyCg2+it3bKtGdclUBZDY8rM46J6odSNxKes6Acrgo0/TjjlE2JGRZ1LhHIMFDmLDhafFOk7Hofg2A9h0UGU0DyChA88M442ZieiyO0ZonaDpTVXeGRtU0iOhYRJPl+6otZdnz0jX7kHDi7W460tKnP98Jp/HY7eSyaIv+cf+cwlp4azuIEBkFNlhhwlKInRllTouFPjuyPQe/ODl2lONuRK1WW4R6cHttuFqcz2u6tF90+NqgSSO0X6dDIvKkTH5VjQ4+ElD0h+X3OHPNa62TfTR/Q2qcUua8cS+mEKPB5bas5GIjn+ODJ4oIGG5s5uqcaPGP6wwsse7XCT66M=';const _IH='d4da6a6b20fae38b63bc0821de86271d8b86f6ba7d5dec9c19fa80df15fba5bc';let _src;

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
