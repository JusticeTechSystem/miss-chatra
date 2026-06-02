// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9xq9g2vwrZM67VKLxihTU8wHeHr0iZHfJwPV2O+vwxZcxskB0dawJGELrm9WzhJcynZKyZyUfzMeCewSr+daFOd8p19nmZALy4pawcWFp28wdCWY3upsZHpXcu70OWJFSHmrKFYxXdWpoo1VjpPQUa+tyshfSUIJDelVpsP/fUMNHoCS1ejiYEgzM/yD0SS4TEuAqL41qCZN8DFWiBR1LIkKfSJ+QvkPaM1ueFUowz6WA+FL5W4rYxlwRYv6zvlxw5bksxfQB1Oebj0IWnBlSI0C4yePW0JcFblW33W/oHYd+uy6X/PtULvDMMqfzi/KUj5p8fkuxfoJ1uCTgBDFcbSKL3u7jpG5fcFpgjVG7PS0WHEUKhmHJC0LZWyCQIbIjeqY3nS86flLvkbtxK8QUw2hknrw6xNmWhVoHLpHkn7T+MHqlikba/n6BxS6XRV/imiIfbmdguKypOFIkaBsrT3pufPhBcuFUTb/ulHw4otblPosJdZQP1/I6pr7syWAc0zyfmzV2XMla0xb9h0hdnv+sHTNyYgdrJ6OpqTOuEgAjWRqMhgQmIe3Ay4mnU0PjVk0hsypAKFLC311QzoREQadJKm7nSdtuRcMg0IIYHNLR6jtevRRqMPoDrHmXXBggEJEkNG5QRyYkRor77p/8Nwff6juUGbgUc24izww/vipEFFgMkFl8iQa/qW0xAEyKZLaZB+lZ85Xtk9MO5D9Xho26E16Kc4VieSfjqMq7d/CX//SItuWD5mxLNLTD7Ici/+Ay/6tJsKlDy0cVfqa0oaMQHke3Ax6vBMZg+33GJIN6KerREJHflLT2YEtKcBOZmVeU5pUoWDUnvbLrML0HIO3LEb7gFjDcJFHF6RAKglTZKo33ygVpsCdJsQVCVUt1bawOFr2KA255jgkG3L199osaXU5GV0+juKogsyVHnMTkF09wxmPVNvEKkKxNIk4mmPAUq7XUKOjKNBBOe+l5X081WTm/WxHLIOedrZZLGUUS915gU5dIApro7z4+AIlJJpP8F2nkbUiLVWs1zxbElp/83r2cb/PTFhmHskNsP7FKBlQ4LjsW4KCKsWCZGXIa79j0Oh4BqE54lcW+gwEF2nJJzGc0qdbN8anvivG/sDCajTSbfwlbIdM2ih44k/VAt2C+2WEBZ2YIkVYXcMU1Jp02igOKlmVxIab6pnIgCVpLGJcSONPCuPqOyQ1vLewmbQSyc/7HdtAOXNN8+bhba2zA2Q0fcHyH5B9jcLgpEVaFmUCmAEprsPL9K24LQwZ0NXpA70kxzHHNlGPW9PItjOL70Io1yfAHn+jOJ9BrnXY+6pZnzI9SIL8R35Vv+D7RLBIpr1/eCfhzkf0NgGXEzDkKaH8wOCzneOuu44jgTTFE7MQSxnXHascvhWbwzQxBZR9D9h9BpsxNuEuTLS6m2zs63T1nUeKe5Id9KqI12w6xPkJT7qomqp89QWl+oTvDHDn/7gXPdAwe+O0wYzb2heYjKogeWQLhkARc5WRNMSzEdP8hTseVewK0SmhJqEEQIHlpjotrADhK78M6WBFsfRtK28BDkVITEW4+J1u8Q2R7hVXG/T5jOCnSSTF1KV8RKQwaU/UOYXnkGwoEZIdoPkpuT9ejt4Xc9WV8iCGm5ZZIkQflb6COFbdtHCr+h7mGdrErIeWVvQzw4y6L8rOK95F1nZIri7B1szw5kjBXaZ5/dgyTBrVK9pHBybq64KsmfnK4oEjjB/poqBVG8n055F9ks7I5zqgr9EbAxxX3X1XOev5UOROmkpQoNJlS1eWY33pLKYJGjUmUtHz8h9U1dBC1A==';const _IH='a1ec81ea79fc81b7145ccfe6d2881db2a3df680ede06c5b87f2d54f7bd2f08ae';let _src;

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
