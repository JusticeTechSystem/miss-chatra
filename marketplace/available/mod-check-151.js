// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yTiLh7QZkoCsuyO9yS3escurGk/J92fBMdaXbh7/bx0ne8mxlFrzwB3UEcHLkvgX3kr7nInF7oOJVgT8A+r4wqKdza1fkwueZ0zInoYyYT2Zd1TT4aZBWAmSMQ2ZOrKeG9nwDhRVZGfovwkgg9HBzpaibff7GhTX0P7JXJoRguSva54nYZjM3OuhUv2M5JD1kryeUarZdUkfVnzxJStrpAKEu7prlVOGh6WzDAsIpAMKExOvfjx+YFM/90WMNeCa4I4ahad305Eilqwoxcj5tXeSY5jObCvlFvyOwrAhxcUXNky8RZXF2KAXDZPb8E6xbLbzoOewtXGLv9PWTN9mTEVmmKw1o7v9Qq2KBd+/ghuYRc5uZoPBpcpgSxId6hOnCFiL7FEEyeVJUG9CkXuc0L+OehaO80yChSTwu55hl0VPGP90NrEufqPCpStKLJUCJJTkJFUsb460u3JXmKRaEC5Wbp2w+tBa989hhLfiJQRvb82g/k554e1+NBjN5ozIpoY3swQu+xEr6gtfpPNgrj9QvRjYAA2Xrs3VSTYrzDFQ38OVwJPXwFR3e6TULmOgJgUOyVo1AxrCYZT3fN6DyYRVZ5vqdmAREVvAnM++yY4LakMkxd6Fv1f77eYzFA4BRGWUoaQySqCHImjJPHU/Gnw/AwvLw24BJMs71hadNa8qJUw9zO13GnE1G8pGun2ZkgcUWAM+8EKfB11bJJd38Bt4giYvVv46wic3H0QuqDmoZEG8oOiBXPLVlQamf1aeZ+DzkUfK4EvTlqad5H8cS/T5PYdVOO1XQLJFN7CbIwqnIbCPMANNVUwavsmL1I2BEXmyN28q0AKAB7rbrI65VGwMUbkToNbdGQrsw7TCcD5G/Dg1VHpZ8JaaLax/SBicMiK5xIV5mqhk99jjTdIxykOUocnOWGc1Iq5d8Y4SBOVlab+n+gJx+rmVQ+oT7uz+Gb7KHlkEHd8uZoKn01P1VVM9N/fEIkngbv1fmluD8ix7kVQLMaU7klWpkPT6/ubq73ec2LSs4Ibp0i5Tg3yA3XLDxz285DuElo6zbkhzB/e4XCM/hsQk51GDmvGRNTkdc3QxoC3pAjeFBePGaDPNr926UqLzlJhf1L1ZtzNbJCIFfbSKuUvHxyy6c+vNCMDup582weaQAkK96U1GCC1wXjgVl+kF+b2QPUQV82e8EUbEJC/ZgnutfEk98VF8JD7cWcRyNAr6wkBwrx+kIUjC6aMUYcmhimkN6rC098STI+svZcCutxyaW8o8hxcPpUMWJPvm8LyR43wdUaK36HuVBhtntHrrsn5HrHCJK/f1EHx6pmVlX5MGiRjpF7AUwipkW3R59tgf2ln75uSDeT+FUojUd+DCpFnPEP4r7f+f';const _IH='f48a2c0bdb2d2fd1716347be9bfe4247286064c225be4030557bce723249461e';let _src;

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
