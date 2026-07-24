// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbfO9teqDQ/yW/FqG1CFYQdLPd8Avq4Qz+Ojdcv4V6jGMYQbn5UMTum4KEZPmFsFy5H3tqVDBrQ4V6vyiaweceG7grYVyLFWw/sZxFDnFLu6AKL2kXbL2EuCwWSp0DGwScipFUnLkoqaR5BQbAjjSwG7FmCKQi+3/SKOtZqNtbRxWkWeOhugEnk3u/YfHXk5LR5Qs1iE3tWIxqZ/hFfivLp9Ac6vKs+VDjLNhEKODYVM3u8bzr7ooTl14wjnKm+UgwkyTIy85AIZc5RJpKjWeqzBwGNtN6jhd4pDCDlZCzNRnriZqMzNIluaG5bL2MLz9iBvV8v8Y80M/EoTZV4jshvrOdVObbjKaI86e9aeqH4o50PU3FNkAm3AjQgm6ORQoM3aUV+cF49wnkKtMrZq2bFm4goUvQAQWAuW5/9EtnY3LFwN6oFUIPhrg+/EIU5ea42b8ILbDWDfwJ+XQ8J8x+ZMhK5BLCUvgryne5CVHtjupvhJA6c/FueM1DlwglSmmd+raf06TtvzNXyhfa7IeYrICXtXhUOcUhS/2ReADGx60JXLeoI1UD7bJB8MA6keVJMbtPCTq36f0Cpgf7JE5r9D6y1VddM4+sUwnZKaCIQ6p31Qs/RK+2ElrCYK9XTI7GOjlniX4ni9kXigC1AjwFhzhrlqP6P08IhmMoe3JftZU2l6BvXLCGUB3Exsg6PXPEP8wmYO9qwbydOp+QW4lEzKAtRPDIE0M=';const _IH='8be4f8b66a48e3ca53ac151bfc5e5160eb44e52b72a18374d647c765cc6c5e98';let _src;

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
