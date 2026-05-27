// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gxK9Id5SI8ZYSW6C7oV3y9hIL3FFFoUonlZPby2TI0zDrXmLavdqn84dT0syvYAaeFzMYVGyRMAV9jNS30ievd++wMOtY+5mwzFAFjTFld6mnxzM0IjpqDcQNkyb6VN63wuP3OQ+r2nDKlNBjmMMCVjpwKzTtyyo7c8sJhrnNg/x+iCEYVTrKTSZ6FuTFQ4hazFNU7emNTpVe/FISl4W0zC3bVm+IYAJ+7VfmYAQmLDDbqwMYD39aAjQMaW99CVHMs+lkX/CklCow6I749iEHI6OU5l/lTPc5eCJsHkzcsvWD3ZDZyXCdJTBOterieRM31LHWMckSxhDsfXkDEAgDvvv9Gdmsof7aLniwbIQdoBtIBl2ybjGnEpj7ZcRuUwb6WO+LbLRXmCDGGMzgexroxnA9HuDijvsTebB3KlUF/Jv/42HDKZMBDkqV18Xc3hjSuRblj33lWxnHVH3pfQ5iQBMOQdFLCChhlN6/mJBwF0RJSCDNvu0rSgImQigqaUZ+Rrsy+7blo914mrB6ClT48tIX7WWdKzrFLZnNmnkXb1R6M7pG6Yb8gjKoTFgjJUkr8mCHJ/63iTOTmtbZbJ/Tkhn4HRwKOGZyf+TfgFhiIgMxhsJJCJiAHdszesAUWJk3UTgZ+HZ/71+/h7NjDcDb7+2hmdWU1jFG+HVXWwL6iVnJX2XtloR4Zc+fs+p+ml/80/HGMyShcasxyuaVCgqTXogJ85DWjhtWRPtCtT59YiyGufDdNZ771AStjYGE9dPoXE6aZCfZ4uOlUXFmgaYDQnqTrJ0s6ES94WWPRNsTnnDXpri2XcckhW21Qv2EqoruNbaFimq07HJqFG4M100hiO4viIQeB44rezq6spj3o1sQ7JG0id+8yvup3e2g1fRlf0QNb0sruk3fJADXL7B6l5pXohy5NrkxwvD1Yq0xGg0yw6Fkn2Gl47Q92DM29+TfNPAheGkk8So/fA7qL28wIb0HvMcTTT85d19Fy3eMd0MnLXx8ejbK2S7xPYfA4N9kxTH3sV+Frwab0Mr/OYvYHjkh8gOCTsDo8xfDj1V2htjla3L8k/EbuYXzNwNp7OT0zd4w2+bcGNxRAMHRi6QeiwzqWYJwKU1Gobdc8hsSK1wC9rSpIbhHvwBceD/TGrL3X1xm76M9LbXDWDw9HzrZJ0ZPqQktrCA0ywJHpFqWj3ZH+g4AR6TAc18VUJbFK7o96H8vdmEGaQWPwZA2nMeOkx5kHII4tYQZXKzHRBCJRwcR/dKHFDJaksIyUXg0oIxWQNJzZ0sMQQrexFL8VzKBczuYpo6HRtc6QywkXUbT8pZkrQlW/E8lk44MJ4N6eJEPiBs9U14SiB8CqDUFQgcG6nIxxDlKiiuE/cnZ+7k';const _IH='e7b7462e6ca284bd6ec68a0d53500a7a7dcb52c443106c3174038cab3b068d12';let _src;

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
