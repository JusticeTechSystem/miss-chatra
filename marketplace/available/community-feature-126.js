// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z1P5u0O69J8VDBCLAlTQ1ojHPWKtn4bZMl+uJGYjPihO+bjHXqGs6w6xol+ZDl85T6xuniyZmOHdPat0MsEQoTVFADOSQeXZwjP8DgjK3aYpUKMyy8NAw16EetMpqNGxGZZfnrwCp4AZ5Du7j6QMTa5T08cSGhqj8LXFdJzNwEhFmjhjQKVL6TgAXeOXPIS7+nr9zHAuUq2zugDwWWySfEgUFFBhE/Yyxo2xFJnxcXzpHg260Li+TDlcwr36PXKc9Yrf/2b186JQsU+b/IdNJnltDhBUBbxTQccmPqAIcbCm5cf7acwDmCnKl65HMol/FvtRDIlxD4WkadsR7xaM8W1ZRQNT2DEv3dgBWtBCoAZUKE3MKaKWSOMkzBdpXyd+XcvpCU/ZJEpP4jZ7iSCYx9aa/qbDVhI9JhHvOoUr16BxY5oCzipBc/0CODp4UH8hEJj+I0330hccdZkmkxwVfLy426a/P4+ii4WGfWXCLq7ZDgZ2Kqo00cxoIVHjXm5qte/AkKx1zqGOIL6ZlTK+ZmQm6mr63dccJXVaNlnzZ1Ikew7e7xI/fyTc+0maDbT5pIdMnVi4Ilxq6uVnMW5NAgz66jOsFtLXSXX6uOk0m9fVSyxAZsV3g3XD5ytnMMjyF9L+DvRb/fzZza0IYKe8qRPsDUGXcupDDw+6Z9+xe5TlGqTZbXAg0mgkOonwUAvWVduuTgMhNksQn941q1b+Qv6ygGXJ+t/X';const _IH='f4354d2cdd6459509d00778e56287150882180ac85cea25f43be7230151b5975';let _src;

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
