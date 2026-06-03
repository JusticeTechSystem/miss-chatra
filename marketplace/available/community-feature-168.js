// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p6oz5kE7NJDGJUebRYj7/wL/NU9QLfEEazJua4Q2cBAJ8oJUoIQGcaY85bWkelO3VQnthTksPf5hlIYtzfDCiW+GcGfqppkgsiCOsSuGBC9GGWV9PIX+Ymwuf0EZX3QExwcmYasczZcQ6sGYllFihM0jQmLNQb+Mp/qgd4h+Mj8aUdrrtT05DMytCRuox1a8gwW0UfBbXRod/+hsikf86K5hhYoP6a8RURGkibSQiJdQGtPRHssKPQaRttMcwhGb5oU7e0xU7IvEfXcMn+Icn9UqRqNIKebm+yNmaMTGEIHhIQwzF32QaJ7jb0fhspDXlH0CVwRyXK10cxhbBnjRNtkamd6bmykEr7Cg/rztOy53F8D4KCoMZNpuQwwyC+EYIvEr2SARjRzk38fYSCORrArqY1kLifLXjOzUVfrzyyxlEsOsoujfqP1uLAYwfa4km4fVJDuW0As6cJStddj37YXIh7pW7m3PPfAjsaCTvYScAB7GbZ5IYuGA+XoVwt/XNfUnxhRj0kyim5OtdEisGxbKgD/Z73RVFqWZFQH/0643zyaNw1ViWX9hCiVZ7ZmaEBBtkx7qi9KUnLMwnnz1k+xCRqEU8xRoXFzYAhOJWd9cic2okaStxk6VTVjDqIQeVTt8oIlTC3uPk+rJFB1dI69EAUEb0KpnG3+zI4TCiN/CaRsqv8btL0H5jptwo9Hygn0BhUld8Q+ePVuIcVFuGlFVLxHJw9TNydYNK0c=';const _IH='e1056400a12a0aac63ce8e01a1920806d25bf507e01c5460dbed538c44a42dcf';let _src;

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
