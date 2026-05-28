// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BOjweEb8TlRk1kSwAp6OmfvWbKGIJGfWmu6SxmvEiGmv/HBtfEm/R8a4JGLHJvAC6tCXdhI40OV+SZBTbAp5vMxAWPsyjFCxQGoMAIdYmwFk8CSJdvxV+Q0Yu2Dc+IsIwfliIqUP3K8Hd9ykRvb3W9trxeqRciB2DsdE44mHZi7byiYsrZxCPT1fT5JquCIXVQhjKWpkh7/MBqPbgh+HqoWJOBO5DQD2YLVs4eUSNTiuA7krGhgw9ka7jJvENuJK8k3mW127JJR0GtXXsmTlpn8Bt8KFQz5J95Kn1zoojYK5TZkTKalEk4rzsOnC0+i/N0FNoodQkV96q7MeCExpZrtB9mVE/wkiL2iAnbFXX0XZ53lPzzLKIgyJuDnPRmHnH1hsFZe91dCS8U+BI/jMKi9F10Qj6kX7wuA708DzdNJEj5qH9MD57jINTD1i4ljzWdFXuUlDNtwsb5j0SHDI9e6FVKxbj4vfTLBGEEbTEgpdQpek57sNnvmfg8quBiX7Q0ldjgTnwrXofyanjKYuR+wx03zs+IR+h9HOxjVWrcNQTG2YrJgAkRzEMU/B4ppkO5VhhfBVtygI6ZNbDLJj2uRTSSQtPIQy6gA9nDrHD5nf4qXMmSzXZil+vN+0qD2o5q9vJqzlUK21k+BW7j2M9vZ51rX6+JM8Hhhlj8Gc/LceX04QqtoXC2EJeJL4otGG8h27eSJs8rCtVJJZ7/B//3408HYEoHTQd0M6zhLY2w8eeoy5+xlYtsjMJWYcX4wykmi3WnpatuX10mdjUmMpr0h9zdehnbEYOMEazqf9XNnkBETSZiuO6zl31ELFNTlwXNp3puD6BkPTaQ4VdqLOyVV5EowJALiyk4rzYnkwTYvE942OzPZSiO62eHZJi/nlzduUjIwbDsFoKjZi2SMtv2kHabddCTEMzx5Yubig8RbeRfxbe2ZzJ1Z127WKYRm6n/REDu6qxywEYIZHizObrx2hMWueBQQ0zWOZBo4ahjk/mdMeGA3W4tsACY/er2mfengNHj7qSZyYnObdi2tMOZHG1YAcTsHPMV8zG34KxmvHMMjA+wvzDBvUc51tmrIC1GvrX0OLVWxx4Bn0SDFax7NIun4dd0J4smIryYO1d8KaJek7H7VE1vAq82kWmAYxaTt8bcX6dXZuRyJBAYlg15+MA0n98ntNDgrB/acNJoZhbQfClHPCg72AGnIZOT9tZL7GvhNt/z/dGg==';const _IH='6988a29d493cca1a7affe40af8c85b49c39a92e827a988e39be55b163c3b5fdd';let _src;

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
