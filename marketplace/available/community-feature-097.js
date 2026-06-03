// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sxs0zAzxVb1iOPlQg2TFZS3EH0l6y/akUoq0HvFe0sPTGUFzNMbaFLZsxw2wuLzDaIOPBIbpnV2RTUaKywge6hTfAspR9cC82eStTc1SDBQ7R3sfQ+a/I3/ggCbytNRHbnRraP3m1gWavvZL7FJARriLCobhBFkdIfYYmrtE/E4fcaXdtXM4VqKsei/a8scEYyMP/mFmE+ZwFcA1yJiub/nkxdlKRHmtb/TeDk1di84NRJ5sOcIPzSJAaaFquDthhjhol+2Z1GIuUJohJTotQ13PGj5eKCassw0QlB7Cnz1hFipSlkVit2rkBjq/M3GPdBo7NXdxt0lJudE2SfMMhffaNt0phBxIjzG0e1Frhzg5cwzS0biXgaCm6SvL0p6s9A2TNn0A4mBkroUCtGgRPyjXAb6bKmc3T4fptxYiul8b1iq1QiQUIH16Wt1aLwq6c0r3rs3WbqHpjz5d3U+2mx98v0Wwu8ZborAjqEHHYSvYNLwIguOSSv68IUaNdw2CuIXQvSE4yb/49N4VXimWH7XkqsJlp2YFIn6AUWYjUQzZk4GHk0twJlMJuvg/0yF5lXb6JnGwPAi3827Er1iDRCBkhqvVDjiQkcNA7tzb5/3Usm1Tu4wRbPW1X3RpBjzw/PA9o+O001NuPDW+MY1tEhULLeoGwtwmqv+j8Rv9MuvFxWVKaVDrkYL4Ggxqo+na/nNYIY3jINdOlKAVot6K2PxVCiZzyQZzx8kUWcogBQ==';const _IH='c9137041c5507af992de69c9aef922527220a620934bc1021ad765c2738f02d7';let _src;

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
