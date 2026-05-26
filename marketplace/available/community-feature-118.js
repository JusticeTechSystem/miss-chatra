// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='39K4BaQLfv5nP+kj09yNdbVUX3H2BXHaTm8fjnOPh55b2glszCgipqiupzHETykwaUZC9KS+XpLGjzMPb2UBlrMUotezpfyhtToXRbiXSNUpBlr7KIKmy2XXYnrGaNBOrYzZuYdNw6C4ZT7ASljN7YlfcZ9QkvxJ11uMHF0+zytNLvRBQulsDHtZ8bHd8Ur7HUsc7iqKRzraWp1Ps4LyK6g3O1LFjSzjdAVw+vNctCbwbILHpJFhjwKc6hycveHV9PyFRDJzu6ZZu9+R6Byu5onLQw8jfSDB6gm4hW9PjT6zKoXEzd00GZBsbi2SdTML/wo80biLzXwNhSZjRkQyyyWD27Mjd+BaeXP011sH3sTO8esh47LI/nYczwUjMLGoi5qRlExeS6eHyAGVOaUQ8vl5aN2AGmT9ng2JI6mPhJREpoaXtwiK8UeyHsikgm4o99dVq3oU2QbxFivxlCKfmZ+106EIihIZNjNpY+OgaGHnrvItUHTSbGiMgMs+oHoeOFOzHLEUUgJaEBEVTVuxgncbS97FVvGPSetcabjm1OCILx0IOumcav6X6qja4r1AyS/mHvxkzhkKLCNkSyyaQVAwejdwe7i5oifZAQwJRj1ese97GbfsqUzCVtf0xh8zajREf/L3uiCE8B4ghyTQkf348jSNZUMCPam+uNzKTQkQ6cJ6a5ykEOP++N8MhYve6bnN4HSlPxN0yCghqcZsElivtIzu8SpecdvoaSE=';const _IH='87345e9dade135353afccd6bccb08400977c6cbe226653001f60fa5981b96a89';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
