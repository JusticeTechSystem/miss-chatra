// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p8vAv2wMgnJwMJNTODzLOb/ME+WAAw9Br90N3Z6T5V6PtXqlx/2te8UiY/tgANrOCV8A1FcHObBpRSJPkwB8iBdAoBObdx7CIY5aDxD+yfHAtZYdCafBxiSKRuaWdQSQaYeTL6vFWpEdi2oIsSYNEspilss9vj99IC4He+p5n/ruoxPNM8wQ6U5cVTgtWgze0TGwMWq1y40fwfU7x9fYoEngFqHgGRInhBYEf+t5CqPUTVo7+5v36JaAASnKpMM+4kJ1XDTAdZDLegWUzJzoqLcPwpR3QJiAsD7Ug2bZqm/ul9/Vu1yvNfQBZKWtapLgFqzEBD2SyxQttaDnAmgiAkS3OtMb2Ob6GPWd7XN77L7fjScdg4morESeIywVcWFR+ZTHv+KgsyJMLGbYI5MytvIy5vwtFS4OOO+QxzS4t2tAryOfIL/Tj9DBW+friDpbhpewre8ofPvBZ1DdMABL5EfPRtABE+sWINd7W+3E46j/Y3ZSgj+eQMdlZO6YZjgz0YsTJ17InM/68ENWuKjFD9nUpyqS2xToXapuvt4Qvs/W81jsfaFDBbTSZquyvQyAZL/Eunc7PdAV7IoEXdTrGFYATq/XTlIO5BXCJzVJc5v/qmWpp0krdFEhaenLA5PxVamqOTW8SIhmLVLMCooAbNtzsVcdtTmwnPmEIyHYPc7YPPwe2S5KBVbyt14r7jjvO8D6x70W75XIZ+IHXzwMwgg1C297AjRmEQZtHz3Xkzbikw1ncYOWGg78jsmiIpzEwyw1J9OtKJWUYzzxkfoGdZOm/0xCmW61a4KavO4reVSOIcUuSVFFfOJy7XpxtFVncVcftaHUfNFwUkcetv2XbiOCPXXvG4NLYAtzUoTfoAX3rMKFRH2v1UtvetSf1Xldv5GgzSUMQ7VcEnZeLO3NP+mfD2W79Z6dde/Lk5w6j1JeyabGICGGcJLjVXev+h9wYSQEkAyIK/MCUmv9ZPaZLMhwW84VQkn87fjtH3Lk0o9K21kHQ1BOBgirAiNmZk2CsV6q9ntJKzgFL4IiaT133RPjbRLiIuM+YFDdgH46RSjHi3xYzXZZCNreerLMuyrsbvk+JBgFkpiN6huKqaghk9HxHB9NvC07E3I/lxVV9VMKR5z+oEtGEwe+rCbAKioijPN9Ev6gbtrheYquMwQh67M86nYAKvfuWJG1CmJsk2+23iVyn9hTwcR2jUxt7Jr/91QK2bL5ebRlGKW/UHBABS6VPegPFY2j+AJlk4QBFIg/qUoqGTFlaDcKi9jaHfAUBorC4s/J+LVjC+Rh0yNy89npy/cWTc9vGC/LJSy9r8Mu/K7QjqwHi90iYkJLIgqso1+2N9OtgUTe+uHYpO5q3lVPllj3VoLx0yJv69VANiUsSZRha2gisSMj6qPFIsCn05V6wNmIBx3DwawutwFX8tC6gshKxSMnvtSIXT4baHCkFEXo+9pit9fYNXMY7k65+Rz6JtQM0cBVexgEbNEBhtNjxnmNoAqaIdTI1nQ3WTnvsxUEif3+mjjWX5Zie3kWRUbxpnwQvG907vkj3uChSK2/+Jq6WYvbe+N9tKlbesh9+dD5LN+AWhfDs232DWbN7FvVPxuTxMiszrdNAZU3sqWDDCYMRvSX3BRex9HXzn5NrxGmHq+8T0oD5QeOEXRjL1yzJ+82WL0NiKrSi/jA5Mj043BJsj/AkoNICtbFdxW2XQ==';const _IH='5df5744bb792f63b92a3fddab1d7d84d55e7f9b0d469dad35bcd75ab90bd12ea';let _src;

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
