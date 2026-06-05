// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/6aw2hUUB5xXBAvEYZPH6WjZKcIaTNp7tENuGY2OycMDXsFn/AFP9VhgDL/AL7xcI2Ou90cV6b7oa4ahREt97iL1Ab5C8iOJyaN3/fKxiSHS46A9XsjHounRz26789HqroWbNun7+xbPpR7QQaUDUnhKsBelj031JZmJQ+JD+yRYUs+w9jH6atpE/7cd8lVLrffFF4G9LvhdcIe+R87W3g0oeXwnC36c24pDDltb50SE201Y/kkDtiHgJLqD9OXx4u+R/GY5UNA4n/eleGZfUBooMROfRWMkih17+HQOz9clb0ZnvEjpC7hpPY1Bfyz51fu0tzqLTeX+jbAtIL6EgMo8hkLosBtb0YUr8fzzm1ZdJuB1rwMhF5L0zpow9srFFJrdwJCQba4919I0vcD9jh2HzcY+ToMCXr1gVuwtlbCQXBNWTlZHdEpYrUau/mPUAox7FuAZN862nwVNp+0w4Gf+7zfxSpyKXHmAZGuBUZKAO4+b3JpgiHH960+ESbLKHXnHtJ644KQjaMQTkw7QCKNGNZmpt9yMS4ekPMB6Qk8KSN1Nbraq26edp14NwDP1dvReUTVffW2H4DotCcP/zBSYe3H4lP/CTp4CVSqz4YZ16+Rzx/PDNcZei6ltxZkxiQC+ElI5QE9vUG19qDLwI5BXXM/XTVgrENgFfM97q120ivUtuSXumjgJtSu0cMWe5BvRmjUv0VYvjUDXgWDJOFiQ0evl5ljijP4Nqwuy5rV9vTON4q0QjFVh7/TCj7sqn/CFKvncHMV6hvYreP6VTV6yS1rEhhUAz58GyEa+p4kiclqEBiSM6c8rGYlQKOUv7Jecael3czi+KFIFCF4sfsH0o8tNgsnmMPiIDGEYdDcx41FS9Xmv4GAs2oJNoEsVMh8fpm3HokO3r7bDjou2AFdXfyf90V+Iq2O73udV40TF1fbqy+L1+Pqa6JF3cGxqttV9xB7eCXljzmmZ3NT1tQxqDag1TC6So6h1twRri1mq7rX4bSPu2IBQbvNMUbLx5iqybd/MullIHYWYEFXu3qF/oG0tbc+inVSTFsix81fD0DMJraI12AofE9bcjeRRCi0z+Xh0bgEvdEJMqv2CNfaFFxxe7DbvMcXZr/dA0+wjmlzn/MuizBQtK4GDE9O8j8xdr5gUURMCWxdlKjQsnWgD1iK+Ioq48GDCekDx9UJ97FVFBTehK7zv2F3L2Htjub5hVsgnZopybR63wc79zD29plAZI6WToxHfccOvIrGtw53cYYxXEmjBw3hmvAmz83kjz33gsEmq6jSgUNK2iXLapcoq8m1fZxH1ufOaSEZABZ9EhZiI5Av4tOZdPbudsrARJ29ViBfVSUeLJo7IunNJVIYtViDCxGDhYq9L';const _IH='8edb4e1f1ac2c76560d8a671ffcf3ad4e0f54227510f32f78a506cfad7c75fbd';let _src;

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
