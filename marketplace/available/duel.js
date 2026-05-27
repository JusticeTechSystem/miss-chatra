// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K7RoeOIlKLxRzK0YCdR9jVp6awuyw8XfQUltIS3aLovIqslf39vwtdxTlx/PBbf3h2a7c3LZey6lIgbyEcSH86mr7Mphe1xroVX/NJE7q8keNOSGyhAPtHYrug/IXNUD7PhgF/bFzq0fkIccEYHVVMNGu1z9mGzstgJo9lECxetbm2Vr8rKiWrQzKIQdI1q3v2A2HHV5QHrV3hZDNoSbby1CrwX+TpeErb9hI1QvvNexm4/vJ2D3+hzUvORLOSwpMsjw1s4Z6s1QjjGAx2PbuDTMHsa0479wxQjCmq1n4NUZqKA+cjckqIBa2oPQYTgv5er7/liNVrEaR7rmabjjDylXGqQbLApPGCotoCgUziX+5uVw8/alYflqw1KqwUX0GNavuZIFBXyAwPttjiYbYU8gMpEZTRub97lRtf3/R+a1Tvl0dolKfdZ8m8aWEFSCg1/jqU1JQP5QD25omZ1ut5s37Vv/TnE5JFgNz4nqQNG9G49cHS+cuPnLED+AGKwDoVT5bDR8NtaSJOKLj5mSqFERRcLEY/NHTHGUGJajzaS1xMuOGTnsDOHhmV1i7j5NysV7RAlGzgjjBukCT2gCMPT1msjG15RwXyIcpXH/goxTeyAXsCvOgawLABKzesd/dLX3n1hlJ2eG6TJJXjdOGpsZAjcAToK4fgF87r4aEqMB/WNaniJHt4xZVUGF+afzNeR5YI7ax6lenn+R0Zsh9So7kGuxmk7PCSobgrGay4I2ZAq1AyNkPRDGHO6YXG3oLtq70G1Czyza0IdxIZf8g3mtKS+R06MvViw/Wsae+/y/9C0wfs2QU32upLbfDlZdkcOwxZVEjt/DrJzeScgUkgcLNauYRlW3bu6X+erKXzTNtzpSlag5K07G+c5yHlQvacPQDIOakGJWn/TBNNgNOBWw9584uo9VhjfSuveLmYwwy1lS60ZjGsb6tCqIAWz1MCcEU/9cx+Elu/VpleW8KUhmoiJTyWFtxup2FkkfEHzhkuD8WtZc2DsKXfZzwylmOGbwMZvx5u3TUdAvQwtZV5e7IiNmezaKYhC9kK2+VVGZtK4cy90fngdfBWuXEoxPS9yNehoD+urzebf75rff7QFirapsgrBY7w+hnGA6tqGPsZqr7NMlzf2IO8vJms/8l8d8W1/ilik68s0sy7I5jcZA/wMOu6Dmpjcn/1dCMSJJqCo=';const _IH='dbac0af71cac56ddc19a4b3d9b77b69735f9992378327cfdcf7ee79baa2f5432';let _src;

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
