// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ntn2vJAu2MS0d59mHUm5TKjDKjim4/GdmnJHF/pwplogkpVhlhebbiDZnH7qFlBy78WGEyX3NYjRlTxOUbU+esMIXrca/xQccbM8NA2g18lS+isbNzEYYl7WjT5hvNgT9IEthNgMCGHUi7UPTtHt/0a21djMEB386B3fICmrIZE5hiJo/6qtaJZ8mobovPTlREXf4O4beq7s5ZNzj9JVlzcr6YeukkDZLwVQP2cLUKf/LEhoWBLhCIr0Eb8u7KWq7+8lS0uqwsMvB1dNqKoMOmgDIv7i1SWSSK6zmfE7tLGsYsd0ssmUsvfUU2rwJrBmMi2/tO4K1G6bHRkAGTxzdNZ6TqpemAGfHObWGCMpcdk0Ggt+xlfFogJQYmBpvo6vusHzCrsnPwp19o9RB5gNQBs7Fg8hkg09y4yGST228xETllwYScs97+u3xstedQtZlxO82Vd+pxPE6xJaOqdOI9v5ZHR581r4LghvYmO/gPloL2AFkekaJ4+Lj+dSNOm0FfptJdqEorKA494P7H6AZp0bhJlSnGH3op22Ap5GHiJfl6ryYz/4c1XTw+KxCqD3xZm1OBYMWsR3aEdPpIPuc9UxR5aegBVoNtf2AzoBV7enDzpfeXms4fwoOH2RVcQNdkC08laUpKaOoYWIzwj3HK+l1DkMf7M936PZeOPQhzDt1QT0Z9Fy0DloFoboq6o4CZME93mNib4ECrd40K/UCCwEX1w7JhZtVmn/';const _IH='93099f72f76c7de3144b1b8c13eaadf689b7097bf71253bb803cab5fd8a96fbf';let _src;

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
