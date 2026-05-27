// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zDa3SGaMEXm5XZu6E19qiXiI71PrrhBLBjWKfRGwAlSei1zx6vFNXzWgcKgL0EdBxLMwlRxKoyRlnOZDAydI+EG6OKMP2o1i4HgVoZXbzSxGjUI0kwZK8RSdu7KIftAnYwdgq0qdWlBwEozHG/zP9U/zwcfGzgapLOKUF0zLJ7+9hyU3an0KxbPQEfxi/ucQYRVKy/jf3XUQgLaM125z4SL4yD4kOfRmeT5wvsKTmew/bOj0nX/EzG/IkIsUm0LfEGXj1xU+vKpggLl35IN4YWEo0CAhZM33MIScrhgd6Kff9YFfWOZRTailWoSZ8t3lDkIq/kjERY79MxmwvWFrb+WUxb3Z0b4PDeu46f8P+oNePdZdsFyi/iEds0W+o/DycE8193DfJNLqwSqHMnnWqHSffNm0OzBwXk9jHKTcYsG3OKN3fbE3aV0VwhjYyRYozPxA9W+AAaJuXapIAQpQFqB7L/QGj23qHK1AGlveQUMEyvQJMHar7daU6ekJWzbcgQp6KJWu4WUMMgXLzRyKIWVk/XMY1XTrEVAzH5U0Y9U4mpoBu+fPxdyzTevwy4B0EzCIJrIDxM7pA+/GwCvPK537mjDn/w2f3BjF9BY6+FVcIi11nRf2aFEXTwvL2CT87cDdAmSrbOo4RGmlbGgWwht3Nrlz/zOf8zIX8ncrgGSC/zxS/FwyYn3/jKmoaYNxZWeRlhXWFV0nhIzg651jpeyQBv6OgdbH+jokXkNrfmypxjY=';const _IH='f6aac7101e9a5d3009f15cf194da28fb0958cdeb8c0279d403fe06bdfa06e30a';let _src;

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
