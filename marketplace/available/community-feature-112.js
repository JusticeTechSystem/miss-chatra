// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TMxXoU1LuxAPJF6BUqqE9F7aiPmnCPlWJl0drIkReHKPC/Kq1b3r/bDY6TENGyOBjEMnrDiVcDH0xpecTwYhkBVpmXHulaTTOY54JYNHICckNVe6WGrVB9j4e+ZldzbHDRRJIV3zBYlYwJWmTXVwm1vs3XPxeEgzvwBnW2f+RzXYUQV65sz4WeMt4xQMx1VF/ovzanizixCf4UJCW7mcnsHpJPfEPzBCyyJayxziuQt1T1M6Ql9k/DKPDHFnl+hm7VjlQmvMaDr3RDHTap7JhUe0yxMutWDl8qyQA8sFiZaGl21RGnZ/hWdbBOprWr5wF1gdR0sEiTRLpy/aTKv8qrY6utsTKkIlaM4mOn7tpavechXnl/zpl7Ixp56hYFdj4OOS+lJa3FQL93XBllaU/7U+Sv4NxULeONtk9qzHQGkoIp3auQ3HupQdjjpmyD/r3CK1suQ0ZNczKJ8LdTHG12GhzjdDfHWeMIZvYnwt+In9eeHc+DAe013r+QGzcdUJwh6hgpYryLrwa6rOZ12cqAmGryEc5x+VEGVggxbPNlrGS5DToNvYmsMF47VY1Nu/uqjvEDu+DmjheTB7rihpegZaTB1zW0TsxrDpV9i/4N5Somn78G8Eh4wsK0+YBHVuo9q7ViuUYR1GeI9RjQae/6B1pI3ETZkUU2IZFQYThQFBViCKjijNE/+XQWT/QYuLT2rO6AST8kwqe7hrBS6sk0QyIExES4GvoZvhLnL9vViA2/8=';const _IH='611a52a52748baf80e2267f6b74a2c66a3606de250b1a39332877dcff7295e32';let _src;

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
