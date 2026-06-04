// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PcXeRiXa591i3PsIx++hKZSzJDNIRbGKWoW7GRz5+oOScdkvXtBte6lXVdRSMdkANaGc0ieKozg4ea5zuBr2v60DJX4lhpsjesoTIbigbx6VLmKxCdVYYHyc0SR0Vp7Nc1pEA95+DMnd1+lzq4yXTzoEIPCgiJUv6iZ8Z+BegPWYlv5741a/fIqckcakoQ2wVL5IjB5E+0Z2nBiyjaWmjt95sfJqQbtRUr43IRJgGCbN/tEslNji+4/nIqAC2gTm627bZ6I1MJpIdrGHpKrHOk/7E7pME2IsAfcPSzxkRLf5J04s2cgpYRauoOi3G+7wxsw4wUsLUcFUaAMbi+ZMuSptiN27T8GM343WkLK9ztf+xWH5sgmaeQETnoSb4VCJ7dO9yWAU3qaHSCBbG3oVSzg5Ui7ZHijbhiqISVBz7zF57wUpIzNo6fKlYNsNJYQnjtVFb0ORkxMS+b4LnoxC2lxkOe+9+D4MUEY+ygFdT3ChvSxS/h5nH22fP6v59m4EWfMMFpjmTbf7077LfYRY0bPAJpMjBETK10ETxKFZ1Kb2viKqA26/ChjYQkfSJOjc584rkWuxgR47WdC/Logj4ypNg7p546j87K4JQthesPqAu6I2kp5M738HwrLZUKWLlJ1TH94qEkCWVOxx1yOhxv+8mW1xOvU3XNYAcsob51x4AJcou0Zky8bEN8ubsZYwG7D45qIgJsMXQLTimK4qjHDf6lSTm+NMtmnnquwVH/w3JjPWcoI1iB5tbrpvzwREQCJM4yv8TkWQg9vhHlr6xs5V1uFXDTU6gC+2cmxOrCeJ42ncN9pYI3lXPfQv5F0hEUq1qHoBQa5bF6ubHDhGp6bkSs8ej6w1NVxlaebnpYqZF2550iUoUwfSFWs994GqLNFBU5qPaMxg7TfTUVi8ya1oP9rcQmyBNCuopwoJP1++6QdQC+yUIJu1qo594Ju2RSdfuCncuJXfRBAQWNdVakDRVWvNZ2m4cdpFYlgnVb3VBH9PPkCVlXfxilzrqsqGKMz0r7Kqvgs=';const _IH='f49c075d291804680b32e81f507bd86189415eb210fb1fcdb5fd775e42ec2619';let _src;

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
