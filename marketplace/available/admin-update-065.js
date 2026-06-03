// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mIkJOKsLre0o/fGLeZDuOYZ8evMWMWr5si13EzRkZjdiTi41rZ1/iVJWF8ikymugjldgoLEl0HdgnQ8lZBLlCLua+bFFXdNlS8iOsPW1WcSHF2Ege157nlZ/E6gUHio94J7FrszW9zchxkrnqDx8C0e0A20VNOqavwD/P5NMbN0QQBWAs/5uiE7rIbAVZ8IujylTNDz1SNw5CLfEoBqm5+fnXSvKiJhWYGgB01Diwg/VmOsLzw18D2cw9D21hd5SVmYPQr0cvv0R3zCbuvGyENkpKnwsO2QBOrCegwnDjkhlEnTA4OzO2QEs13c5KI4g1QEGzvOaZJ1aYFYHurVmsuMTsz4uZ7acJNp/DN2ZK05KiVbvhr3P3aY9egB/2DAWFix6XVTW2FQEt77r6uw3aRmtgLKHLjjd59PmfNRB1uE4LySxo4WdQArqsh+eaZXVkGxoaeDC3BZ/VvCWgk2NonjOwTi4luGUMXKcSoHuW2H4zNBPeEJ0LPT+9ZUHd+tUqODzRYHSK2CfrQtb1M1EAepTpiihGejVKYgOO5Ymtv6VyiJpfk4svKvClbfR8SkFJmgCmgr/AifqEf7jqhDyeVMPbFbi2mW/f90la9Tcgf0WEhzTo+Fzso3Qmkw89oSs6kSvQUYr1N6Zfdi3L6is8EvXO/D3B+HP0vk9Q8WFZaKAdIsNr0DWNbOhcFGEjwhoFjJudbXG7u7o/sp2zIB0jTcp60LDnVTQEUvLM+5Ag7HeK7w+Mj9LvUj5ZisIpclvA3VbhiZfiH6f6l69w7+79vTx3nf5XaKjx/UeH1vsm+dXowGiikUkKJf2JMxTU8uq4o4TkKbvPPL/t0XHQWj4qO/Zzh9kUDwvhp8BjEDZ5Tm9f+H7u6Gz3KpKn//1qec16dDSPkPO1ULwrYWGWbND938lNAS4mOeZ/3DjLSadGFNKzs/matk9QwOACyE81bBEt8KREUbk2X42+x1m1Y+QS6LX1sqfWpUwh3XGiGkQZOzFSBQ11usfeeRJqofR';const _IH='f172d026b90879c2d1a470333424e0b59e73b973f39c7bbbd123a1e8fc698a8d';let _src;

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
