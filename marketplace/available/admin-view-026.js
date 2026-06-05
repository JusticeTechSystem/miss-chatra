// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d7zSr0F90+8+Bu9DVkraYmfxSz+kiOsxtBUiS506LgIGK60fsrmWNtUfc13FUIlkxztlbOGxX3XQR4c4cwj7mpU9nYgbV6QAPRJJy1IMqbc9tql7yW4tKtziS8PG4V3e7lBfkTmRsQSgWWNg3jytv8neNdwxqBOVyCeQbEknLTcS5b/1WqQWb3DYCJGM3duVsF7R8rZoPStVViy5fH+zc+nu6yCAwb5ZPYNJahH1PToByqoKpwAoEcvJb7SRjiFRpk4jeohhCoXGN9/mHdpz5M7kM9Jtl3LlvS/93ONBb0kBYMPkbCo4ZQ2JWBUKLzh+u8A4+Yu0Wm3RGO3+n2nbGU1+1bKt0f1TTidxRtnjk9nYu2wQO9Yu9w7CPKlmoer8Qw+IfTB0wkP+d+66lpD0x3xNV/yQZZI3PP8hdWqI38tpuu3K6skn3dw1lBsYnO3rZ0ux+P5rwvgOT1msYW8ddJf/HrhuPZe+15EovAI84jXvLtnUuxXaa3lx61rGHuh+GqKVPa/FqQCG/plXkTUS5jO/R5TxcCl4IrFAc3q82NOMWDQNnVBfzEKnYefsEKwz+i6T5pYbEG1A34+qMrU+haqOEF2jLtX4y8VK81p9N9ByOxR/l4w/ld8vSz518Ff+I/zLqk9esRlWL7KbYogFO23z5uH64Iii2b8i4fpSuWh8G9FqxwZidwL6/fMGqQZ1anCR9fsg2FG/UmbC47BOmJ0W8ePFu8Mu45QTO5o29790vnwyDDqFXDwlxdRVigvYImdW/4iqOTvmrwhuSeyxhPvcH/qG2iJi/pLhObCT/43wqUf0sWjbO/c3xH10BBxxtS0XT7N1XgDiWergtcf2XQD5zP0p1y44CF2ah773M3AXB3x5/Jsmj8DanbZnYozvxHWsTCXbK79MGPhpTpUJ67FVL3Jvbsf6LVChMwzVywicqwSSP8u2y6QPi9Z86zXXr5LrZgYdK7zmrzptdGMc6nrVimNvGfdGKmHq9QeGNw==';const _IH='a27b1d91dfd583e4e672e66a8d28a7b40e0dd88840bd42b7949979346fa6b73d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
