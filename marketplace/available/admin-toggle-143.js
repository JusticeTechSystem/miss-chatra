// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUhEA4Q+SmzYLJYw7jpnNm7PebdDntRl9GP1b1NyQzmf06iXtmcWBZmyKlW5DZvOAgg7fiNi5m8FG7/J2PHqD6T0grwC6aGHbBltMz7CBEpShqYU16kGqYZfb3mh3Mo/OJbJnG54WdUSEdrIZ+7FbqiR+iJDtywalwlhMlSGlK/UCZB1WP6Q2AWgKmTDWJWVv3QXRAazpA63nNjAJdk2/yWO4wQmMp3PE323yrB+ZCEWrBB0oQ8ca0E/4d/iXBn+kibo9uKu+4lpJdkYYKOCBx+rW/jwPgkDYho/hVc3rMipKbOgZ9gEayTKsqe4SzbBfasku8vJjjNxnnvIdraJThVeU5MYXZOFBqggww8Fm+DLhdn73LcjxMxdGo1ezeFX0Suzi50mNdvtisQKyKQYwYRR35leRqIIIkgNupXnDSsDoD09wtRm6qKozTJF+1KN5DS+11140bk2p3XkyD4VO+ePHjKQRo5gVd70b4YuvRxz6KkInxs7tM6MNzz40ahB1tHyKEhma0jntfCLFq/ktkwk19G1ZTbFLsEZAP9dXBKOYQYrv4BpdYkjQfHgFxBO/xVcbymtBdp5FLYhIlWaznhw3PJw6FygL1zUPYFtCw78Me0Mzy5efulfvDSazPCLUAoz8wPTE7bUjqf8L5VsdHiouYfbv+QDPpa/2769SHHT5eBXdWrO9gCkK7E3nto87r+kJ9epZTsZ1ixp2o81yyZlQ9/L7hyjjHA6aW/u82VCN55HBhRlNsRrrSkSTrJeC9/IC1sUQWArGFP8syMyP8cvhyYEItWPsLXFMPyOSDM+MpK5W0QYPLbmjBPpKbooRr8JL9Y+/aqXHu5r4vknm2aNB1GBd9JV7hv39XqQ+TZimLtbW5nyj/MbTzwwBYhhiGOPVXWcUfZMeXT2WSO6UYJQVj42zP8xc4FpCiPZAmkAqV9MgLhvEBBLR22dvJOokqBsHcskYxJ99l/yQLgLaqKQSaxpIXvrvuvPV4S6tZIKqGbhhcIhbfJBmy6wgaXZ/O';const _IH='a5eb3b8cd6c5d4d26b844a567b6b429aa5aefe93aae9a1835a1d02d0cf8ec95e';let _src;

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
