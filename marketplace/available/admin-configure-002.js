// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TYIkQ/Yi86iqkayF6yHoBu8M2cBt0gXCEGSu8cK8CVCQWFIici5xhHNCfqcOkVK5vGp8kGx8q8XHdJ1mHTNhn5LKLp2I7BxuQxKOaYxodAe88+lXjNDmcc8eFnnarxQg52jnhRp4p6WtFdx/bIfWSC3qqH6FX49BBQoSq+ZI72Avapt30dhFmeGGCa7lH1dU7QDk7vABVl1d4WCFV6tUL8k2L9sWSe9R7ize/CNz7mD27CW7x9kHo8WOy510VSFnzZdtkAkblANGa38Ibagg54KDb7JFfU54lS5zFUxnOqCbLzCFWf28SnBCxIca1l3EhiRCRVtF64trihZ0kG5EObeMbkeqA92U1QgwORV33m7kEH/GkvJf3s4H8zUQfcyn+Xraf0k38mKEohheLoD4VRzTBj5ausQBDnSp6IjpmKKyXasJIuqraMq+ggZ9c26Z0MCL4blcEgPYvceIP12jIHN3AUd0I8yFtuDg2LCuuqHpuh4JnnZ+SmV7RVoGrqbvpoW9H4AD/0hiAR6zl4LXBXmD+4dYHwCLvuJ7TL7UYqY6ng4IMg+l0VF5ST+0HVOlPz8ZMHTbGEVrBJ3AjRFW5vdVlKLCrDVq4GlKGSOJDgxlgzXFWaSHZTFTYWoRSL+UTDvwdYcG21Sw9E8t95kkJfqzFtChT7PnD7syilu2zrf0CSr3QFMAuTgDgwK9RS/TZ2VQNyNGZOnY57vOej+XMTXl+OTTwGbg4SfI/yfpntdk+feKsz9JSCWDlbiRlh6XZLc3PNzbbSxkriVBQM/KXTpUFaSe77+QG9APNF3v6J4bEgPdeQLuJckqpKE9bUTGsK5UqupKT7OApZod4h0YyzSw0QmFfRQlz7XbYc23ov14lxZVApu8NgoJV3iMR6yHBu/olB8HSQvkpzJNAJDOMdxMdExt6VvG4XINoPs0YJuv8jDukvJsXAM6bbahHcOrjSPlrAVxGvoXGHGrmYiljvrMC/rAqy79XNLVJheZ3W9+GpMM4RXq6cuP7uRyXfT618voWhaPtLNuERXAIYY=';const _IH='070e5320e4e0128a43c0905390983ba2791362b263f4a64b6ccf256db57ddc2a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
