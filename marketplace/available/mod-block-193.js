// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLMmW9WA1/G4X7udRvKPedxcceyTPlin2P1GkIwnC79iBaKAW0WC9fjRylp23shGVPy3DAiT6fBxakj0cSHJ8b6EZzpiONh2zYNRghHDVlD9UY/sVflZXHVW65lnm8/lyHqQYwNAXckmCyWlLoQThXVBjRwT+7bsJr2/5LEf53jAW/D6VtJXXBf+n9O8TeJXD6l50yAk/1B+OBMpqpLyf+R4IrCH6dgg2fT4FX7zFdWd0rRQmAJlBkj6Qxl3n8Bwt/jCUcObDzXJu8HIN7RGTDbfp2V9S7pZWhSnktX48/5UCSuB37UsVdFv9U3GcDxjHW92T5aD9bYDqWDYqAo9SCia6BYmnNCEm311QskXkcaPMdonZpEE3fUPtxjEeBpVP7ZiSVdXUja+tXH/seu3uGVa5gxZf09OiT+pQDRui62tuwzU12+YAbSrwHvSKdk6um0hG5E5BgM2uYL6LBJfkKMyDlrOTfbX4Qqf1ME94RZOpgVpzxLvCZQ86yrZjctIkE5btzaAk29sOAl+ZEWs+tI31o5J0xPxHzWs/XckcvB6gLHm0A3Iqz+jmK2V+31mvECTHk4LZTL+ZILO+Ar8O8iNfSUC+6O5TNDRyRhRv0a/jZTBuJyZzeTQPsZY2dJJYFrV3evS/ZvtEjOQCRNwHMUX47ity5yvjgjpbZ4ri06aaS6vLqf6G+OqGRxmBTpkjzjeckCqVUCQ4SxTQ3krUtzV2mg2CLE7kXEnIRtjLr3QSKsWfIKxXyEWQ82MPlTmP+IxTnD24f1uFx87YZl9jeAjC+uZq/DSDo7+Szcy2tI5qaRA1OW8ypUvCxVGwnZsyMx+PtUKwkHonZrAPFzQsjycwyqCG9EujML25zS83izRiUO3hjVTcTIua38r6+f5bkdoOuE00u7mBa+odRfodUHh8T6Vk9qrIIlgFaTSvDiE0w13FSzG5pa9xh/zGnvF3bUAQ7F5wUCS5QWUMLtdrWAg2DhDKUtxFXJLMk9RW99CwlYhCzNM8N+TmaQ3iA9pimb/yJ9B7jB9D4AGkGHQYhyInaNCwynZ/h0wEFjAWRbGsJzYEPNur86dm2KsZ+aogpPYcRDpk3txQPDTGF1M2dUDnIa5HZwKdIY+CxtVPnBFekJA9OnQPeOt3D4I+/XPDc3PijXWDCXj9tA0wg+PfmcbFpgOuW4+ndIKIAqCQ4QONe+v3Ty9yCUrwCHcANVdB7X0MvriNtHGlcZuDVY/VwwYGRAEB06TswfdOaz6EDweWq7H4tbGzZbQvD4dzCGkZrxHVIHapQlnG3qY7Aba1HQo42h4m+H9xuqXiQEo8PYKHoNycz0V5yyaBupS+8Scjb7NjswB3DdSDh0kCP2K0ShmfldgzVkr0fnr/csdI=';const _IH='79fcd06a0c1b41495f79a9f35d22b580e04eae5c3ccfaa2ef502b1b85f5ea6ab';let _src;

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
