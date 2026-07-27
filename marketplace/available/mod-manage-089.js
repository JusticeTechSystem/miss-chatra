// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTb2REHdoZ+aMwlaaguanuJvwrSOX4c6SrLksRuz63CGn/hjQ6/ruouQJn2PrDshXRSZnnnpYeCMvKUFFJK0+uwa/+QaCW9CRo/O8B3eKnvDBMVOR22S6O/4fBtFO5qqm7zFlFNZ20jVu8pO3CP8ffJXHIVtT1FU+iJ/HR/lJQ7+6FQDc/SD8dL44obk0TFdQ9u3WPJoIxLU8DefybCNB0f2uqqXlM6/ZJYiUp92RDoqWyMHxVqDT9x/cEWEt8qWPH4APQzNF5lmWYwW0Oem997huLuaMgkpVlhq/0kMdCa2482yCdNDMOLewjRrpkNpa0Ygv1oAZMNJf5mHr3GSqRuEdLUHQnccWijZFwTX7KpFTOT3KNOFom8az4CSPYz2LElYJFNS1Eta3gGfa3/IRRizSgnt5q4buJ4g2MXx5Y2o2ob0oFtZ0io59x2JIQ6gR0PyebxlRENDBik0SURYwxwva0HIK1ymtALW8SnDKxIcpLMKgWB9CZ7Nk4jFeSGMePZnVrkpTKbkucy6F3z+Np5GisLVDPc0h9bbpngsvSZYeJLIJfthhA21Gsd4Kxf9RgTRcKVW6PsQ+qqCmtBMGDpvfPvN23wgCQ0nN55tPCyNaGyT3iqAAJS/ye7dAu4e0sywsbLrwafS2208WNP9FvCHQO9Vhjnv98qqS067ciH1J8tVlvroCHYjZ8OA8m54r2tuZ/0JODxWheR+LJegplrTshipHjK+7FMYlR0nyPrl35AapDFaM3MGbCUIrCSw84sujxW0nf7whQ8Z1sfHo1dNq7XKOdAZtgiqd7YZL+DrrqJ4I06S18UU+TG7dKe57NNNYl5i42/UHBqwoMuhj54P4TTqzRCGGRUIbwqB/w6+peqxQyEwDyapdV5nakUPg4PtrZbaqIpaEaWXbYlC0Kzahhait8eIOHRW5KesqN+iXjXA7KAdSKuakneNVOJYXVMBsmS1O8EntXqggRJrcDF576JS/SFU5jm44OppwFjUAdFbFcrWzf8YYhP0uySJgL8kybs+WMpmM7Km5LI6rtOcLVM1wM9/sEOsupioEZIBgTDJT8wAvi/zsHVIlX/6Aj9j8P+bseEyUfXcqxf/QqQtl6zVCmO+1+59+GsOy/NTZsS8KYYQSkMS58OOOIQJZxxaJ2HWNIHfPUydVfOUpO99McT73W1Ocuhia+Y3iShPV80BR8xd8BsKMUODQ2zDJvkjpwglhMLIcRYhVJfCrZ+U1dLD9zjEQLR89xXGDNK4e7bOjXcBeIggcpkj/MlSzurt3T2p/gfQlcJhB0dWGtkX+uuL7TKKIfGX5SvbQrbVPsXbjbCkuWa/aD6GNL/I+4UWH6vaQGYC60hiDudrzMiGpsjDQbl8c8k3o8QRJyK2am5A==';const _IH='dfead1492597f9f94479cab77c9e40359350c2785883c60c8afa56e1bf0e299e';let _src;

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
