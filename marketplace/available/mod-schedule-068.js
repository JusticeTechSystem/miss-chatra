// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1YHIOlZYSmbPCrgnQpxUDhnn9rCt8ujwkdJuG7P41QbmmJ7mtmsaqBf0VlW02oQb3MaY8Zq+AaEo587typAUVvll8n9n+ULPUiZTObhr3u4Q0Ki/SwQGM1C0a1SJu0jnqw5lVkkHWmy/rj1dHJtnTIDY2nhtT+0yZarFcUrzHH3dTDM38MwZJHaLbi3dSG+ShhDuPoXItE91GMRPB+g5FYagstITxqfJgMxFYT0p5mHyjQojB5uDMXc4GLTHJlfwfrs77VLW2DLExcEglWx7H/1d3PXGO/fvnP8f7s4hGoZQsWjih/em/52NHeE5TA42gL9LYsho+84lmo85bINeroy0UYIjMNJ9N8KnZStTD0I48OT37+FKuZRZDWXJuVx0WkZxuYgWuRCa06WBaofrKu3asWKoT4v3uUoQFrQJzbBFJwN0Y751UqyNHA7Tre+6g6LB6N2p1paaCU1DMo9Zesmd5DdVY9NUkcvIYsx/fwbV6QNKxxT21TwcFXNlMUpuj+dhVzmv/8gPa+MTwFalTqhowRlchoZ+GWVr+Cuq1LGr69bhbgbgmA3UeAznQ9mA//+S3M15dI9MaVcs7DN/L0cQbcIpCmSzqdtDN32YoeR2vkhqCxUM0rPW3Yusej2Xma7SaW5d1yQXN3M9OcX0rhWCrjN/K1fssnG20dfypIDaLIBcU6uGN3rDNkGZKLTxAWEFmCc8t62WpUMYhRTRYh5WAjwvOeMJMLboFAobWUHjrcqhsjdVXmmN0/vSCck3+E3bS07tv+bLuRjRvh7zSvlQZsgP1dg37zBKzgwulzjpMV5G6TJ4ZCFL1hhoRAvhfimhcMrzKe3s9GXGIq6a9hBP27fAwtZGOUAk4TgxoffjX1mb+LsYymowDdqtYbWempbqO37tsIryaeywy2xM9/7ru8A/K1W5UI5CMer7d/Y+reE6TlI1P81ciqQ+mVQ5sX/NXF1YEy9PeXyQ5f/jTP/y3cqFWxcWCYJSBkzkwLjKIE4w11dIzKHMN50yD8LzXHzTBtQrx0PnaQMkk8lZcZgODpDXVT5HoSNHzfjZmBwK2idgzdp/JEOapJTlgPGb880Z7YXXoYluLA/n82EZl2gFYk3fPoCK18ChnrNcAQsP6tG+kavpDfdtbuRJXN68f06nVVTMlLuvHXvSHmK3TmSLi47woJVa4G6h3J3VJBH62m5GOry/e512j2ZeOkd3RBMcaU1fNcMEHMbkWvebU3YdKlkx1TYXTgPXmkW56GIe2aH7ebOk3za7bCbqSDiHscmz9ccCLI+Nq6POstSgUXquKbzaXKtrKYqLy1hZxWZvdmCzTWlfELlytQY2UA6xYcL/K1KYs16lta8XI+HuAJEPpStxManLUA8yzwf/pNB4+sbFV050Y4/nhYnFA0wUjeLdeiarlw=';const _IH='53a738d5e8965f9fb47f7f95b4d8938a4cb2a52b930023cc20528e5819d7a474';let _src;

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
