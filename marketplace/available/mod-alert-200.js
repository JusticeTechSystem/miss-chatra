// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTSlgW6a3GZn4c6ROgraI27eWsePZ4JGzOce/EQBgbFl+OIYRuCyD71Ll/BTo9o8htcYJV5rcdozukWan/flEh4BbdONf4yf4iEpEv8nNX/CeyB8JsVbn3G0gapNNaLN5aUfTJVUxea0JJnhL9NqX/WdL/UBFlBbpzdOAWJdFbQonIHeKJ4f4WPkVBtOQn2lo8WAlzUefTyoXV5PlJO94FkFsZxjZoSFWN1Si2WIIIXZZQslg2+INrNqvShgW0c+PctjKMSY42ryxaWYZJOjhdy6G68stGqceLf+efmJelYh3rZzNLU/EAEz7q/nGm175EzVPtdHXe4plVZTgkiytFa5BStvDbn6fjOWo+KwTyi+UxDzZnd414jeQP1nRlCiNwHQ2YuAQSHHiVa/n5k53aszt1w7n2p0tnOn92uc663D3YXjfCxt3giiKzfCtRuk8KvYtu5UkZJsoji8EgpdJKoUupAAsdPGvkMtagmhymSlqeWPF+/Gg8Gwa2m/x2wybPXXX6RJFO64UDVMWtpENkX8QcFxoyOaxn738rRgepnA9SDgIw492qwi4bALj0FPWe5Pjr7Gy6o6kNC2FyggCZkaU17m0OUBBkqBlA2oT3+nYh35QwIZNzwsExMaSPzXWbG46/gzQR67IVMcT92rzplQUq2LQW0mCCeMaaAsefMQSNIdEyEkTgGaPDiYJxViwLTYMhzA7XUa+hBiloXOn3iPdZZLj3MNQMxlQh4nJHjLlpV1WgXAxl4KO62RdUwpYRKVDc1WXEuWhcgIqbXXati2gjBJVyUfQSa8PoDHjNkXiI0lpkTbwe0Ve+mVwAVBH0U7qggAsZjz/mAHBasM9bQ8+yHWOdSQIURjaNkeTRSYtTt3pxKPh2lfEUjFND1NCB6KqHGkThbiP8aCBg9WWPXWndMBltLa5+TT/rbVzGRn6jOiO8TtSlg5JCaz2ImHjvQd2KWFFmJ2Ez86crC+0WiIZPgmbiW0ScjVcNYKT2v+oaqa4fvy6g37gvuGFOUFfTLI7DjRFBZbt6EEUE9lwEQut5SFO307BhEW9IFdQ9v80qrBCWp+xpSsxAnC+hI4Z+95Gh1Few4sYTkL4Xj/M+waLevjHGyPDkxKGQiQ4eaud99jWmhviMRmA/APsebkdo07z2mVaR0x7N4iL2fbRvxYT+6h3F1m1yvtkgldqlR8gT4pM0iAmR1d2DIRxwdkQ0T5MWFTXIeqFu9ZbIf7jO+dS/LwzZ9r591eJyXIa4TJhxhPgByjQtJXBaGBQOvumR9SIQ/ccQO0MuojSYDiW+CqZiP+n1Q6E66PP+i4vGAfJ8HXQEZoY7XNbCoC/n5fnZAbxBcFRS45PuLp6joVT8Bth764edS66BHkc2+tg=';const _IH='e95cf5e02e6d3c79dd8abcf72da689b8a4e9f51479c350d3a17a471f4ae92089';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
