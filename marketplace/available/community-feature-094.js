// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rK4HZwqEZpnd+svRDRHnTYYZey490HgvdXlO7PbtcqfhSavuj9tyMbUUtP3twH00L3FkX6hAvKK4Q2ApEH+lWzW8NGWAw6ynC9DlnHgbZ9ulNxtrmrD2RLqln8WUY9iuPrzy2/45Hb09E7bP+pZhB4UEVErfdDuu4goKlDLKI6FDJ3jUf7/bCNz9ntj2eh2CaUVdQYwdWnC7aCAiyOmqHFY3RMjY4t9Ifv11Ub/2g4seqKZjhTRNP+Zq3xV4f4ro59nH+zfYYbURHe8M7AClBPUhkhbrc3BPFnsbEn0kX/guwLIFz0mcqbJT5dXxoYuOZt1LQlqzq/Uwck/xLKBDqdSmSi2xzt4gc0UCcAr+fcPwZfI9Gf4pyIM4AYAdmCjOhKcJzxRGas2Z+aMoKdCzpb7ZuJatkj5fnFBQcHtC6ReVmudrXVufmZ6nF9Hibt7gS8pbTd6oA6/XxnVIAGMDdMgYSQg5ajw+LX1Ya/Q5LhFBiqtGzEJRNDrS9uA8KeaacG60s3bUnPoO9uMjJA6bRDJ7X53ylKRy9xNpa+lYzu0cIDEo0MOcJvcvOJOOrKxgAlCK8iOKB++EvrImL2flNFl1hXbk0X4Js8tqo9R5BjvDlY4A/Pefsy46AbrMYp+n8Svce4glfffiWQiUt2RMDW8FM8XPVCgWaqR2o7ybaTD5a7sUTZ0zgBC6tFP3gqgUQlqjis0oOdyogR0SDHqTXENyuaXVeF2kSTZc3CLMkGm3hw==';const _IH='9c6ac194a9fa9d357ab701a58d4ebe5b0779afa6718e159f09166e43713a782f';let _src;

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
