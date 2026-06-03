// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUgWO0xO8E3BHkkK8VJmFkVyeK38c9XKgwjKRP61d0Q+NT3muiXADaWuf+uhX4EspI0oTieUCcYcn4kfd9eHHypsDljqfaqnLMmNRwYoFPiH2248VvAtIdE1vX87GrJWTbDtxHuReADvTAGkOeWBx+ADYvBgGaaI0sZnFTh8iFZE5Bwnj/lBHziHlrbgTZSQYu4y0F0eoJSja4lI3BeNQnznaENG/zxM+xUDGY4+RfPZ5JXtDIOYnkxje/ipyDIzpoNoe5K7N6g6g/89Y9BYHW2hCa6e7e33xlCEY6K1wbzLWIhXvJlHRc3wcnQhPEsCYsxb3v64/FZk20UvG2+UTql9NwqOILv9evL2u6fjzaQLScrU08F1nPrqD0DLS3S/ro8xLJ9yyaEsdNGiSES7WUfPgQFmhKO8xtWTTbTGH9Y/zZXxyJkajoszIFyrzKtjFRlYr5zWripxrc74EFFAbOoqP72GOzopHWwttbT4e0xWnSXxQPm+InqDYlTsMa0/6OYdvxaM6/fmXCi3lZQ6yVCe/2eDVFgoPHf2lKBe/dfkTOcL9SzxMeoGF9VEP8npvQ6G6PIUXaWWBRmMu3hhz0l+U5LuEntqK5Teo9/o05fs+DkM0CG5Qae1WKNCLnybdZ3KAurY6M+owNlISj7UOEqlihl4R7YvRlKnHsdHrYG3yl/oXt7DeS+OBSOPlgQ9EaEPKxBLAPknYitUxQY4pIQHDQe+A3XxVVGLsQOOPgFFP+NR0totYUfXFlb1brDVTuFdWN017ML/sBAuJq6YRAqS+y2QPuLClZ0wUoeQssVly4Kag7WrB+TKg4GsSErfwGS6L5RSyzgcoYJcFwgsTn4rQlX9G/hzqvGUBjbN8e3u2qvXtVULy5ndPT2CvGV9mJ2yypPUE+OY8lS+HBKvvE77PA7s2qBGxDwv4tjtWlVilt+RbU1ibCjFdLwQ9fuEJQWWEhCm7MxiK1n7SS6VsnCk4dCK+Q7UKKF2SAl51CgrsJ9nrNeicQWCaZF6Aucmrt3TN4/q1Uovt7vb43rF8VC2NJZ2HepvFYoEQ8+vKW951mcYINbzigcq3E+6sZPvbCaje/m/BEtfPEdQ2ohNnmk3hFmo53u/7uFg7TtFGw8YXcG473dTH8zop24WXWIytZLrSFPdDI/8HCzUJKnBDUjlVZUMPBh2Z/Y87pJAtG+C2Ck=';const _IH='6c7c6755c8d6ef8ff1c088b377f25517d16d1870707bbd10b71ee0d74859e68b';let _src;

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
