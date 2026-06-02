// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sfeJP0Bflo9nxGYiw0ZQUPPaQJgN6TtnGwHOY1u63xELPoBiwVWma5WJfS09AXLUTRczLi7h9AzdPTJbqFlMqBIoLZTUqKHOGxtzL5kP5HE4V4P/XjsXVML9UhOHOTN9oNQXEtR2zzZluZQ5eHL8O36wIvnBjO30bB8yLyQNHTAouRrWqj+AIzjPTMOeBgRNlGiJyd/TVHgDA8H+mj1sBqtBLpfsXitp69J7HZksED9FeWRhjH1LPvvkw9VbiUhtSIpfBBim96xzNOqraB4AA1vmyeZWVwXKeJz4tawoqTFjolz8IiJ3T/bo860Fhl6Hbyopl/J4qS25wAysa3b4Fho3vtyKu6FBs89pgOT5r1oGQafDR55mXVcF3Y0Dxvuf2CkiLo+OpkP3xdVzDpMrpol/1Su0eSNaUGNyy2JgVblJ6hFhfPTTY2xakuTGuUyCsEmWNNaYW6R2hLxTXX/i3y/TtxawGIb+eDBd7eJLfd/qFBbVG2jn2xWqMIn2tIMkDSUgUKEhIR3oU4buKw9xJAkLaB8HDRjjNYll4Zn5tuLwgiKQKt/8akTVHJxCf5eY6tke3FiDI8htJ3QIzbbD5dEacWGsDaQN042Xpgj545NGrLycyOncM9ogHPr27mqpyCO37bYEYlQaZ7QHkNMnzcMdB5/qlhka5fXGp+FNLTGg1JgQVAyk8V7c7QG0szDSH28aYudV8g6x81IctJUUrMUsk0O1MXyv39edivXx8O6J3Mhf3tc=';const _IH='39f8a10aed2d4cbfef5985aff150776bffcd74f01c3faef5c550b677cda2cbfa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
