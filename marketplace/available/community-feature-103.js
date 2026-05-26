// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZmtEW45xj4re6t90/+1BMC9GYOerw9mJ+g8p2umk1+NqevRr5GOyY4uhrL5nn3cdjPo1BEBRwYZdsHpj9g2hFoLs0XtFkV2HDe8XE2OzwWj4MXX2tatzrHtr1nFXYyE+j6pMGlRvT8+0HICafBI6+ducJ+etjto5zhdRvKGY4o69DEItNxEdtJnz426/Lwuh6Ptcha5BKX/GdXashPsn+hxaBmwrJxCuCFCcyLQEfBgWX65ZkoESAekQYgWBFs0LFUZPcDvk8yZhqxI6A7LlcLk3YPjRBshcoAf5JlEvQpOdEWuLjo2zTP/lD+1LQlloABkpfU6/i31pKnjZLv/N6LtLwBw298SXinWe5lh6hKX5pPci/C+ifksbO7hzz/LNkumu8mD94g3J0VZE1HRpLGljG3+MmQTy8P2VNKC7ks78WfN3AUd8Ho8WdRkfBjPbd5t7jFOfieHgEPxwZX3MTDIYgznBVZ7AsXq0k6lxVEpeQxi012dFZcsm/9nVUGUMYDGQDW0Y7APozqHg/Nr+SPK/snlMU8GyaWMxeWfQ4pEBoStUWfMfi8N2ifTmCtWjfjatL8k9pyZooDe9EYKrNtls6+XBBXsdAYkp/FJlCvsU2clxgMGuJC+JWouXkIM4nEom9CGNyACxB7zXhwaY3V3OFN10QKVH5Gj3ZPSac3gQ8QYrljT8YfXFLuHu/kKCj847SQQPSFVXutzts/y1U70AzS5Lo3wz7a4kl04=';const _IH='0f06ef04466f24c79fec6377f9cf625db226367221b0eb0929ce4f24da120785';let _src;

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
