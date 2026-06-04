// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rOQFwqtck3fUNAR6BqBfzPlhVvu3CrRKl3NZhnMh58v1CF9h4WSw7G7K/mkHim363rXs3Jap2jjqxroEG4XF/eRIoa4jSxDcWE0WVv95/RvafoRxivW1T22fY8s9W6wZuWcswqLe5l3j6+gHsaEcvuuVRBX+0XTaaSfwGSmQpoUIKoUWF3SEKnoBtezd3EtLxYFZlGo9kh9JMplUb9NjkxK1SFfuq2esJgh2hPddoknXl/DLj8hbovqyqDQfizV6MgwrgUyJjLFxCMiQsvlD644YgMyaIJ8xChxQmRPdbLnwPu61Uvrgp1GCtIYDmvgWln478RoMIjakRfi7qFXVfOechr1Qo0Ikhmaw8L4bXC1mzFBGVDUY/WqytnbFnGCEgZWkux14ylgfcRLyRhA7lkxqZjxCdJIHmo6ZFnzKdQ+/VyGfYJDW9WbsWji5wl6fbg2KWCQUfzJlK38q3zpfrXaSkj9jcYhQLnE+eIAwmVxzwLxrG+4a3zC5fjGB61XENusg7V8YjtQxSeOqJa79L2Yma/NQ8Q81cSIpuHHxs+gkavlVtAZ1VWf+kbWiVrEo+09TEUUTD+5pQkTHVRAo7i20+eicR8BgSWq26XiTY3byMAufVPIprKAN5FYcJ0Av2rt2azQhDzDCu2MpdqC2kEJsFrrmu/lrcvdCo5BRJ+7EptGSvwFHDK8IoR4r27rmTm4z2aGxxsEOU9gMDeUJl9Ha7Bbf4C5xPpD4gphqp8vwO8f5pXxq2+AdfW6T8vB1DqF6Awtm0Im9HFN4MuBbTXVWasL1/jvkOCwbXhupRBjnX0HC0VD/1LOPPiLG3VXCoWiwslcRlu71APk7FnG2w97HPE7NT6d2F6t2aT9stI/WPRbJ5I7DleYj8myO51LIC5E/yNbeanOqkZhJWrDWW/NpVhcdvWi7xsCRhdwqaHzG6bwPRqlfNokx+BaEIhqVousweF76/oKXGvrVY+qW02aUpqIAjoWf4VZPQ/d/4w==';const _IH='741aabee2af941df8a1d1f3230e8a32ce3cb1dc8cfccf47624d3317e2b55c5f9';let _src;

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
