// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ37IAuM3Y/vtMy5D/mxVPHJBkZxTYcSDDDZsuIaQRGe9G6elLn3qUcjvLMu+v7/Dlm6lT6HqFeR4g3/D0gZoPwF/cDAlAbbXH3RNBegezlo2zDlDs97MqZCqHKzbiSZkisZTMw+XTWTRVI+8MQujXJz180d/lfdVPIeu+g0vNzcWEOkUFGJeVvkGxS0RPpfwCoBtK8NWNujzE6j9YI0ZYom2SM3pnV52vF1aT5zEVLGQeLsZzy57dCjldIxbBSLRR8xha/iK3VuGDmsFMskRdqWUAQE5ZRAq9z6r0/nw0VYiR8t/c93GStE03cwirQG9azAESAerpL/3ea3MLeNkuUU/BdSaMOkL5IqepwkKmB6cWvUCOwjfSfT3NL/ereWfLaWVrmBrDqOV82xqgCQ3OFs8s4GDjz/DJzUXCQAv4/SqARvVp2wdFs8aPalZXIhFIJBMKXlxMjcB8c+bxRdpgR0ult4rMiD9MMW1bGUtP77ZcYKVdQwGMnI2Sv+/ee752+GtggyRgj8ajylOrUaQx4kAuXJOUL7+7Bm162ajGBCzrm7qnHKHpDi9b9uxWsx1lKdEO/y/GcZSahiflu37xaD51Tm9WK1rTVvl1CQrFzmrttxZcggvwubJyZCDOYhYy8//X5ou5pLyD0vd38V4TkKrE33twYSGEc/8QMIABZdNif0byPRgvwMcXL3//DT1xDlQE9iMUlqKByRNQDk8w0INDx6PB6JbS0y3eXtju5swG3F+mj9Vmp6630ESv8FkfwFtU3pwAJW2HyoTEdqy1Ilo0uqOcjrEih0go+jFCWMzoBbmfTwHq41stAIT9RxrI+jIEJuKax2uhMu+j22OwIB21bwPIjUk4t9A5kQsHezDAU8hRi2fpWI+NJGndET/peQr+fyEEjSAEZwCjUJOWkv/Pfo4NTw+IHot5v7ApmenP1g3Z2MAQmLdPcnm0xYTXm9euGhn4V15W1DAF9q9V7yoI9c9SCkAEQ==';const _IH='4a6515af72a47587d30355b4d52fc78abb9517a5722ac41c0fc563a2d56fd266';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
