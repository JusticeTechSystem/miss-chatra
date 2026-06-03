// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pReecmUpJYVYsQ+rATFBPlhMvDK/QUCtuo/lttYfkSA3BMDY2LmlfCen3dZ1fr6lXCZGXXJ0JtLMKvlBcE2k3LLQK7m1PBCDq692JarRKHqfkAmEUJwqGFrRyCa+Uv/gF1ppiBltp+88KNjKpp5o9E91dy4n4dmvo2CGs2/5sVR201phB310zJ8gm07MpG5xl3FierwXxIbXUK2H9LOG11O97uxR7R5goLKTN8qImzBoHYUpYm5CzOfOC5kvCaRJlQHd9Oh1NUUcoTH/B3HF9kqqyB6CoOm7uThKMij9EnGQz35hUqAkAxBeWP21e0GgoLQmodf8BjXx5d7SvwGXubggOYvqD/LFWd2fjr9zmNucNtX+sxUGjuujyd1Bk+uFaYaeDFSeBAHudBa2iuYgv9Wn3JTJljBfMxLkhQMDSTM+LapeoKPKJ/sJgT0siwpRw2xfu3AMw+7h7loYpUfP0fAgpEC+I5USayp9fEcXRE6WXVU+8TVO9DDKCrNZWb0jMRYxeB/AUQtmZwxNjF4veFQIpu5PDzpDKSLG7uth0EcnKt0+Ey1/72E/hqEDzW4pmYfEMKcQv/Re6WgtwH+yaT3xqAOlnsYr8O5XQIIFI57jA7nZ82n8rodTINgKz6WS9K9a2wcfQrp5E1cgc5xVAfh9jKTAhtMetCZT7z3Ezw5oQVX4/Ta3VAMDnRVanvT6OqLc3q/5iVT7msnQA4OVxWVlCZM83wxmSYCShSadZ6SKLOglQ8XpEWBLXrTvN/1IgzrCfmt714pqrDUjanxZznPoCa/27JmNt7osbyErxwW67WxwJ8IcUeLw2ew/8p1IcmqRRWUKzzA7m+jY0XuTS9DFhMl8tkDDe7YnAHM7hWA+e+UZM5yzzvG5eJ6RE8tGx+K4IA8LHGcRnZu5loNzqMUUs7nTDzYllcjjVaNG6wqFq41VmHy0wdeuu7xLl/GGJSMgyRPRls8ErSSzsq39fZe3kGRlg+nlhpgAuBpao+alFxDhMzQabhKxp2c5o8FiuSftZ6mvBtT1rsNND0edXBfft5hGQpZk9kHZKqPVjLhSZ/R0X3RMJW/XSwH/GjieVBf87Thfsn891hE+KcT8pNFOxVE6zo15WhpZVlFDCvCP5ftA1GWdjLRkdoaYCSOYNT3/APT8D3Stqd/QwPWpzXNKDCKov7kV5CTC45lcW8PkDhNpb2223aSjK0cI3wmnFojZrumBd7bcqaXATQ12YmZpFYnvj5Lj5nr4uydRZVzvrZqshbRXf81RKHihvO0zt6XfTeLqDm7QqTBtCAD2D+YuOQnuqfUSYDWclNC4F/A9MsK4bbOyfd6/bpvizjXJU1VUe/HgDm24Kw==';const _IH='be219db1046624d71cfedafee3c1a2a5dcd060ec425673b3ec97d6406ddeca0a';let _src;

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
