// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9CrjoY23qQDew0ScFUrSSCh9Cav5QgpSRke5eu8jy4xLpqLBXxbSYRUz8/YLnQLDrw2sqRpKKIgcBT7K0UiZR1OftS4pga6zyy9v6JSqeggv7Tnj5xQpucU7ZDka4eum5cIYYZ8Jkv0BRFLIqkJJ+8T0B1Uxq2tBty/+bXoVj9f0NQqqYKDS4j4499YpjeR4re+w+NP1WkzLnzZPjQwqxcMF1nemKDVLdH40TI4Oo3D01i7bwhwLli/I7lxUCUJT7Mo14ZrQPDEJ0TXqrItBhTZPJ0lEFYv2YqqY3DFGJHvEur5TpIYKAmDO9Q8P/EMu50Y6dfBs7YfKtDXqMte2ABsenYT8RxpOT18r+c0WwyheIVA6qgjZ+4ui7W1J3aHkwF8t/m2XDTc05p9cMKNG7g+dnnwq61MJR/RzbuT3dcX9LHBymtgg3CD8pERIZ748MTPJgUcSyZVnTU3H12BeBwieNA+gIC7EFX5qkQcbgL8TBfrz5Wy9O8hsofIupLQZ0VgAIxJNMxYfRRlMiAHmFzWQpTzctfGgq6u0VeFrGL26clTt7uVl0R6hym+vjaZVpugMjqSuc5kCA9PfgCM9imQxIt7tQT9EN2POBp40sX+22BdUNh1Y+HsxXy3+3OSSyg55thT0tC5PD/y4oBhSTPqs5gggOqlE8FGV16zYlNYXADoFfTWRZNb+rOg4KWp+lOJETSylnJuITSkMMoWNJ0xE/grNfXg3urWDsxBOa/gFOYNa+QA=';const _IH='38c4de11ef953c45707c12d1a4c8ed807e4449b02ed315545d2eb60ec76587be';let _src;

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
