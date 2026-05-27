// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oaFbVXP1U7pQlSPFJSg1ixeiFdcWHJFH3JIwcLDVSkoBk3Hk5O99DuOANd3Qes1WaJDGki+Ntk4hSE7XigowFblm7EhkOnyVu853dwm2Og/iegt6Ej3y8W1EwL+UmQDFzjQ2Lh5LJ9wfH4KiLvAwiPJsfWMJvxExnzR0f8vBy9lmwlgO0smZ1a0XGBd0ahxXa5TI2eknIH4THm1xmnVVwWvNHWJxFlOLbuCuFGyqm6yjqPLV6xLwSeG9KoxH2nCum6TkHoCWORU3leIimSBn15V7Yse/Y5L8DTE7Elx128+EXHhaR3wB3cacIO+mQ7jRQoT3q4ALb/rfMnVqb4syd3OVfDKX8qxwD5PwDGV1VkGhIwreYUFaKCdmzmOG+rsYmzzn+eWHwGU+48vZ4ckxUcH17ai4f1bXOxVgieRI/OmUb+Mwx+5Pj6lja3N9ecZOSZc8Zpfb4fY5Vbj1auGLYgNo1nd7RHN7PXvOiq116dXT6f5efgEnNr4lZ3T/a2lOPTjya0feohlMgt7vzu+V6+4P8kGn7LVthSYr0HmRgI4Cwo7A/CslQYokz5lUEH0/bobn4E5uiXXO4IB+9oHC9IiHEcT58sZ+TPmMJTwdTzntKyukJ9TFfx9JNQBoyy7YhZmngDANWoyLwGqzREGE+GhPwl4+M/nPL+13mPmFF7kNvl58oE8GNU+u/wjyEdQA6cYg6e99Fe5qTUBoIGVIhMytbGpcQZYmXlLxPRDpbhiyYXQ5V8EpflvvUmIolSfJIXbJBHBEG4ZrWPgpDavAdTo36s7pM5m2ZyikycYF3CowoPbolbpNFpXg2iJAqcocXX/VOFkPYfIVD1MeTMJHXVbLabcd2poUSoICntul9buua62nJnc4nzEwG38IJdPqFwF8uikSD5nsnUr+tp9lL0jqFWSjLkKY7Ofr1TTE9iwYAWls5qjWhj5NFhkCIbg+vEg0iGzgvkDlPjkRq7aVLrVTWxL45SunhiHCcMRduqAp8udh55Fbbo6AF3PX';const _IH='1cbf39aae2ca6dfd5787952ae22433fb83c17315e82b75f1cc27ed02ef41be66';let _src;

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
