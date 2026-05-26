// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k5WbXWdfRHR//6XHbSSKlvt13wc4Nb/FBf5mZn/KnSvxYygA9w7hgCZX6+aTUQYbtSsu/FctyEqcboJvmQ/jwPx0XG+Nwi6UgBUqykCqmJlOs+fnkMmMtAgu3vhEctG764OUT3vortwwJ0vsQR/qY71GCB3gg+lvTBY2YWScsIuolA/sUzu9BRzOedgNspxIbkclDU5dOSce62fIl7+T2Fj9o+OjI87UIOA4tPFl7w94Lsjw2SQUY93IG49vBLM1BDS0doUnIeF5i1CoLu7U08AJMHa2RHN/0E2PuK/HxTnhPgzxo8inW8xVHwaUMHxDXZWGtRgZ6lTGj39q0sqjwPN90h1njHNBPH6kaGKsOhCuWSOsUr0ArVM5KP03ipJGQhfcEghxiNIQwHsUSeYtDAETWvX6oOx0jzif3r5celR9feMDpCbq+vhT7Ul32yGDeaRxH6VHgBSN0lBfLb8VrRzS9DKsIZ0qsKb1rifKg2Wxd8MUqLDT90FIbK77+d1ZfpfvnpuB/Jn2m/RTIn5e0Qa4ypUrbn5krjv/+lwUkogQUwiU6zDtQB9aTdv4tZO7lQx3r/T06Rz1YivpRUAkFBPRSNLTQn1gHQO+W6HxDEShJ8K1obTbwv1OAZSk7GDtM8iJhmZ8KGuYqt4XdLSzLWRBMi3hdWrldaFWAXfPOnpLFGLKbt7VzhmpDjCq9arYNhgrRQ7H8WimJaE7IjUhp9Dl6cciolBKDA==';const _IH='c1191da3b4b1708b1629d4f86d2e794ab9dfc727367eb9c1aa2ae6208811369e';let _src;

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
