// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BSoi5Jw22TUyg7hbVOVLnP44oI1SjVbOGI3zYkwlAtJMZwi90toYVWNDW90sUOAe6LsmdlO0y3YT1WFevAS3XzWUk5fdahCMIQ17HIHwYGbnWNeeRzD3BGt7l6pkf4IXDjOjt4Lr64/dyobXoEnrLZmbMigah98AtKdDPymmSkZ67/1qzWoKO/2kzrtbpCv1RE918nt7rjPjSfOv/vt1KR9YQdiBGpfMJ3R2TzFko7PIT1HLMMFmX1i6mllFG5pWnjN9C/rgogL5nCdqlyJLOCQD/kRBMwz8Ujk8MvY9yOBe0YqeBcwh8g/z/y9TdXfAYqNXaO3sxS0Kpcrthm+R4syUqADh5vTLUSU70qMihhZCL3gvralZthDWn4w3gzaz9Z3TCllYagavSQFsGez7qGCgOGnhoEIMgL5gXJjt6Vivkwrb+J+sHM5H7F9KmH9M249cm60RS9QQGGgnoivAlQFn8q1/EVlNmluAJdrrfoOXxm42qhQ5WsptiXAV1XtNB/kNjtht0FBu8PzVhTHGX5ljYlDnRquKma6V+zNZwW0xJRnKlfuhZgAXP4E5WqaLIUGXMUlvbWcFu0VJR0XTJUNlpv24E9a3ql9X/TWxijOS5SaNJrRSgz0X2Y8s8JHDQlpdtTT34TbSnn6wZaEAdVqCldgVtUZU2712uF2+38NcThC3gh7uznEqHc6UN7XByZ53ZM1EbUoWh4z/O532DG/4gMt3UN15e8WH8UpbwAwf+4TTvqLl6XHgdRrO9KqVN9NOIBEKqhSmtIhd9KrqyVxTNDN4NVUGaPm5diL0rB3AQ5EUObNrAg4VD1rjP442tj7ZYmrD+ZWeUjT7gtj6jYTrPBhXcQqNa9S53LMisWYfTzDMhVm4okjduC5HQZrwrOT6XPWWm360k4+PKJZdIlsw+dnEpfIKq18cNt3OCJRwafiJYOI10eeVdgc+OG0AaO4Unsgk2I4AFb1O/tN6I19m75sJ19MZdW7+9qpdDC0txxwUk/U5jhV5i3hwOEkIG63/aM2g/4TOUS3lpC/F+DNT71LSEU2bmmkCc5YL5dcHmqR8UUiY5ZrVZ2CYJ+S13t01uZDcBG/rYOVFSwIs422Ib7jTNxMce5n8wxkd8SR24X2n1kWm0XOX3APmR8XvsZEjYNkdFhQ9HHEQQAaosbwVbem7XgXLVpbI5tAM6AhHkhQIAhk2m7FKfemJueJ+MOij9qExqEvgIJrrVdbzw7KzvtY2WQiTB7bA214D+JQ6i1bWljYXvlHHfTdf21x5zsADSAGAmZzgvY9OTz+GhKaTLmxW5WGayMUkO6d6ZLIBbNkV1FIOrksGkE+W3OKbRwhlVXqapuHEVSq4/c68S8plAO5CD4FEXgQqtR3Q';const _IH='ce1e40b623f9a27ab62f28f3907d9196721f7264f4590f44928b09989d646652';let _src;

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
