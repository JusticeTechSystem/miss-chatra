// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR27Z2CXaU95fK9XuQKGJn5IcgLJvq1pCcooV9Tvjd/gSs2CzUjj4hazGLcYm0c6yfS/7ghwnRe3hgtH4dzAIkMTBsuVZ3wwKnQo+DTBJESdMjTjuZmWhmtcgoCSTf6I9jATElzd8+kxClrKoKQ7q6Te+slzgxL6gFM0jlvAWff6tUlTR976Ba3BIXwVYtFKJqpH+A+s3L+rorrk4NikzLA3MyamTJDty86poalIuP5+4wPIYVQxeUfDg3WDAxp5M180Z2SPMk4X8NVGnEOZOsikWblCJdOlra7PfXEPa7aQjN0vTfjd/ty7IKKxJfqvx3TgTUXTYWzM8xMmf4VcAMILgfDRibJJ+w0JBHQ7Ipdhw9ofwQ5hWQgw1vebJKBCAjIZ7HcafKpoRfC6fiGDH+cGVTonJRDgeqmGzVpkdgv5fxesS8FYzDPAtptsQRlHWMHesBlbB73MqOxAXykj8S0iLmjY7iX7Az+b7Bqx5TY4b4ed1eTFrrddhPVuiQuWAWV6g/fJOZarDqn+xu7UiQfXrcCH/YKufi3Nqb2tLJ3mzWeQGfTQrLpBoVHDQdTVYEjjQl89b8OqmWZYqfmCH839RjwSXR3GMeCLnv5NC24RApfb7dKV6StmzXQrnDFxHPUGEsOb/lmuQksFR9teFBldtSV+N5Ak6p7oV9nEQ673zjqtz8kRngGgGbpK0L5Ar0MCnoiAQWpNzh2eSjzADZ1Zp++Qc0A835ou0pxZzxbGWJqyzcY56Z88GYurIyqblNFOwXakTqkSi04OyIJDo9WpIU0YhkNXOO6tq148WRMnD4nDQra4yJCkWIQ6dMkmdAV3MuNLB9RhXxeCJTuvXcsmU5kOn4fzB34/G2RWhYAdrloGkrcUq1+XO7XqjGjKHr3xLuKhyOEgv5a6rwTv8cGs1NJaDTz3YAqfLv8DcJ3ApYPoDAZmQPPL1m+yEzQuSfU7STHHcqj4OqGjDidoSD6Sc41pYwyzeB+5kuz3UFJWGoob45FdX28igYQgMzSHJRXveYujktBo0IrVuWQwJTQAzoWbreJIa5ak94g67gRFhTOdrb3nXvE3iD7cPLlH5E96uWAUHTPkkGZmXtCDn49p+ChwceycvG5kLYIcsb5qozdpAlgDKUTmi//dDsU6tvGHOZhUTko/l39Y+fiBnDPYMVxJDIl3YA6Ye7Hfo/ajmevd403it3XWBHFkWi3N3offA5+gk43/YRHk3SHG1cu+LUiyS6PcO+ZJqNKutCE62vIEwUArP/HYlYohsWRJHKcO6U+6jxFMoRHdwP8Up89zq+HUj5eGfcxUVucRTY4A98vOYDfc89xwOGiLgvVyBqEYQkpRAPWqjp72J2miyl3QTwCE/FPNp+XfatTy4zDYV02So2l2RhON41xtPsFocuHfxhnw/2ASbbe69oKVYufKyop1bK5CWnNzdvSQOYJG3ibZwUTBdPcq09jo4f8QF+LCkm2OmPZhDdyf0EQIXtolE3c4j1RvgVnCmva2eQD';const _IH='a2fadcff102d965a6bde4a84a09ef4eaeb692bf549177266c9bb9c39f27816b1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
