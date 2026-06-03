// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TgBFy2O166a1MB6w5U7Li94qipjKdcTE9fUhvgPl9SQKdsKu5HKy0k2wb+ECqHUXw+DBl2SpEnVPBcm+hHRYa8l4eLJugXWan9E2LVLVBWZR2DgLpeg7DqwsQQdJmDBhjiw3VQc30vEGeyyx99RR1YSCZZ393Qu3XC9nnkwQcF72BBA9flRlpKjVIf6dMCRU+PERevKHqh4shEUDD1gGBFnKyApCl124p+WlwSp0veKLwxeKkvLhtMFtE5kPFn1+Yz8vtzqhU/aDkrDFWs6VXlO11U+PsU5LjnCiNn9ph2gzy2/c/ofm2MjSi9TcPL1Z+m2IyO4tQ168HA6nqTS3yhpDMYYWBRwuzJRtH+oNbVMstlLUyjXiG6haiX124e6hW3CZK2AQi+UfuUC2v9hTVw0xkal0yQszpNCw6YojL1UjMwccQQlZrtIxaZu+lDYZyBmpSvGMA5oZY8AXEm1aeACejqITcDT8UvUKL5hTM4mU2apfxmTCBZDMmgxR5/CZOvzM3HCePMYRjib9E+ezRpsBFAZK9cMY08Cb2fZ8dr08DxXTIDCc7aLiC3ACSj1YPH1MPBPejVOAIMFyWnKrYFQHLjMRjC0+CKx7W7BJDbOBVQ9va7lPVzT2H7eiQ3y8cvgMjq99uvV3WYvz6gYHlOL+kzXczmupR/FtM3aLaqvUsSpI6knohDBoi3IjiTQ=';const _IH='14726b67181723f001c327e01d7e0587a37c51155920f340ab87f712c15c6729';let _src;

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
