// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+XfAqrz8bTIyvWJCDPhbSkp4SBMuA0EPLC9wLstMGFhqJbA3umNMwJghlNjuzKOFvCidSW2+X2lU1mlRLPz4cdANfqrDB5Q61vwlbz/UHwcjHiw1T0rxSebXd4ioqIENnzh+6Oala1yHaV1hqp2XowiA+UKMIqjgVNt3VS1ZcZoaHZd9KakmlSHD7+bzy/Bl39J89K7GgDlSz3AltuQvao3+bVlHKbyz+t79HjXxDum9xHEWiAxxIT6oes1colN0Ux0NWylT3/tQM6JOwYbJFuvzdawzwwMJ91ZoYfdvK0kU5VV1sXQNqPNcnhtoPlWm+DcbTp3mL75koEABVbBGL9CcjoaTESv2NsQn/JIIAAHQ93OKs7XhOJunOI0cdxqNAyDixaovQyYy/N5U6eDC07/YFNxWiv2SRxb2T8/oJ3yZYrL/FC5XtovhSrE0RUEmlGup4oT9Mv78jIAV+9d92L9Vl0TttBP8G9ZzTbIZYwA9ufSRN2EDKgxPTsotE3IVXvo3dW0zvM1LUERR9SBkvlYwjeIOys1bxyaFTEOauebcf/+6YFICmsGWYJzWQW+oAOtFNyhMymEoRVnpShsm/wPlWeVn+Mf/0ZmSVCEAYJHFvNzoT39AgwlM1vLRcyKqSN5L2LVHFz21kBv1pNmOdhbJJM4dE6pn2AFrwpyGR80ErylQF4vD64lkTvN5kbEIe+la0A4tEyUmr0zZ45ZyzOoIpuGclNQltc7NNYW1W+BMYOA=';const _IH='3c58cf37702423fa1893be32583629e33e75cb4ed682bb17df465e76ae84e2ea';let _src;

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
