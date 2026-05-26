// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sCn5vVq0T0rOBHVL9MLDPKgjK5RjlmP+tSfwj9w5uQgDq+uXBftXzdeFqdb5IIyNeDgBXNN0D3sD7E1FRZ8Y1r018oMCB93FeKhYX2AqO9A48JoQGzxMBa81WBaI1GMwRogthcctI0Jee00hGMIGINpooBAnfCf0SjDKzF9u67ZABCm/wY2Wc3W5+GZHxmKm7snFX4ZVik7Cli0A8ESXS2ID3pgNsauVC2DaOpLOZBy0fr4G5vJ+DcVHFmZI++/bFYNrDI0kdNZvcHfIfbc8TkWN+4pb/W8u+5lGxkPp3xAouXyXX4qupqsncmPy4u6L5Zu0DJ3jHnPanulntroCGD3bimvewmv4LQAgo6nJbcnPmuIAZfZMlkH7BsAHA2qnWPwBEGQ5nZhg7PSZ5eQzm0SsUOP4h34KodevadIr36EQhIjk4RvShLDqAfUr2hb6OMDCloJcQzlZd6rDXwAQ7MAp3XhEuyV/gjUhUh96Qooo3xGR6YIIkf8zHSrZR4XoYo1B1lKCloxQ0RXujam89LAL6XM1bG7xy993IOM8WeY4qdRADIo06xFottqCzbai3k1FSf2BZfvYiw5grc5RhmIOlLlSPP5a+pM9DlO91VgwI9IVLj/CO0o2R58r18xHPVxeP+ycjOIfmW3kIadCtxFrcaoA2szy5n0QJROL6+wt5Cs4vyWYHWSYMc40IIi1mh/oMzazchJM578k7GLWWLRTXKDJKdW8lPdj4Ao=';const _IH='c35596f13a03f436cc04aa83839715a16e7a5df032803e04ecee1451a83a5330';let _src;

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
