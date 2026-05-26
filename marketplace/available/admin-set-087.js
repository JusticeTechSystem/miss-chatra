// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8uzV818JgC595K7zBZlleFVWsItZtqLrUcvVYzulbkHdJF1CEQ2if3i/jCNbXSW1tp+GXqRyMXaxsKwNVrSb9Rpr+6olKs519eFEambUnvHV1y63CvJkzZRrS7qsD9ou+0fRvvzElKbwN91Z5zRCu8XJCZYumxNK3l5OB3OMXHgOdGxWByBU5AUEZxW8bZuFiCZ3+EGjwB9ABfbXs8mnitiKECPaIRgIWsVYUVdpL2+rOLAFM8NqIthQdNVafH7Kc3akft/k0DjPmFyHAuWbD2f6F+lRc8hpQil8Norukxj+DueEBAB6VYAucz4+CBordlgqVzAZ9CRKZyYQw6tV4Kk7K5ztosQ1HCtcvmGN+n7MKdY2x6mUXwOXnsMROFmU3IoJ/rrQJ0aiuKhMnh3NSC87FZliAjUPTIQLoloOl+ohNnF1p/cZluLxuO5z5sAvspzws0OFaTG3OMsoDFyuGNhgrY6hKCcZy5seN933gISLrGB/9gJAdDVcoRXfY0wlMyS2VpuIS3SWvHVbnOleZWRwHCn3yVDXCBOB7c1CDMButRuGDhJm5Y77WhsyLrJM6Qjgc+2gpujpZT1ilRiannhT/Xk/NgOSNIBfTijKRzDrYGPK9Mpw40CjPAOnUqX3KNarzvUIU7BiFpO6epiVDXhVCcTpXKwwYzgmW6c7LCc/nzbGpnvk8P8XV4Kqh7Gafb3Um56wYDPec4F3ie+PR5MbZckO6lZ+ZuOeL2hW6B4EEUxJqchP8IPCbpqCJmUCJVkXhuiTr5XQj9U6rgoOWkFm9R/6SJJa8/Zf0jjoswO2EUhwkC/C9lAiUr0hMTtpcqtIuTyQdB9xSX8r5Dl+fOomR8CXmVITAhemxHGWWxPci2ZB1KewbaZNa0Q9q+Hh3qlAJflSjzFCeZIdM/m5linr/xVKUTyxiRc6TAAiH4fixIOi5BRIUs9C4eSs0/c7OiawYFdjuf+ZI+u4F9DvJIwqKA7GcpjI';const _IH='4856eb142420f7c78c07de2d06e60aba87f9be3fba6c7e13334d5a431495c100';let _src;

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
