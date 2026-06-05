// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='feHlSBxUFcJleTsfaEA6HVAIouBTjFmfzCHgPGR2Z2G9cbKUNskD0SFJUH6xKiBcLOL1qBOFZo/uYzBfphmcHpUGpQieIyyNqdCxSNhGYVDPxJowtWMinZrhXePyKE86hAR8BPuHtij0I7R52xuxBmz83uumSF95UDic3POkIbBxsX4NACsU/uTtheC4evueiwBwEXg5uO/ryOkA1DexH+0ZT+rRWFEIXlp9Fm/oDCz8jHJJjfLK6q/PEhtLLfRZmWydHCiQQ7kYPTBSZGDexSRrlZMzDeaP4LzM+cwIs5FcGcED0czIUAIvpws8pI8GLyK7OOKX8f+y8xi/zdAVIEgOfHDxnvFpd40Mb26EulfQNlB8/oouLbFlk6+v0bhkQxC9IWAqcdrlrKuj0zen3ZlNhtT46Y0U0AEUWlmpQC4QyqxFhQLuQpP873H1e5esLuz18aTCJ2AFtVcX+bG8TH0rnUWzdjg7xAC8qL8J6QfGtBWn3brVyWDM13XODxSIDwaWNVR2pe6swX3z8DtSjvFo/IgVf+k9RxWmxxRyQ9jZXpnettmv/PA0j1/pwr8cNByiFt7NUWQ/9xgcNbwmxLRFRLpnyBZ0TIbxKmYr4KyprqHm19bc/seYN12joCQxxO07ZFZXRvcKUIK93wewhPmfC6T9y4MedcO29bQuc7m3d6nTGRef8rTs51/q038hDNuK0+AewxuW4W5l7EZW7GydvUUL8kotQRyJyeZpGU5bAijCXXwJwV6cIsFgUN9zHq1YdMdg6yQid6m6B0Kvr5pR3TQNz/S1oTmq+EFdL74qLoA6YkLNHXJ+vaKPcTeJDkk/l1Isiwr1bX2FowsXyJNASW+vmEzujUrhKRszZ33N1lONJ6n7jJ9ukPEj8IIi6BxWMC/dmx8yLxvEImu7tJ5contKNIS/xPhlSWchIL1O2KbSU7x4qGpVFX0p1gVt2mK71/JOzIeCum9nRU9smZX9ayTRIb+LR3zDsx2ylmtfq7roK33afWNd1qgqVE8iimVQeZC2YAW/yE9nrJDfLzsAo15Khf1D7vcGwAMLNR1yzK6Crra1liVlIwh7idQD9qw97bqtGZC9b19Xbh0LPlpWS1bQVr/2w5jzVXyDZ5N8sMPAnJJQVJRvWJtVfHTMf23h7b3v7iyuSbAJ7ep5ywc3v7LGoUhP67nbXGes8U+9ke4ETvzOloSUxhFRtw2vk3+gKPk5WNvsIwbknxEKaMCNGlIaJ5TlFn7v24EwYK0syJAfbLNzSaTqrG85e75kQOOQqhT/Ll+WoTwfsv66bNv2vmxCwj8fSopvMggYbuf+ZhCcz6oZSHVQQ66tqtdSDYCcVz35DiZr78UHbneuWzOpGD1khvsWxcPr5aZ2DvjvE3Dcj0T/Gw==';const _IH='340432d5489ab84081f6603f283c76c89456adc4a6dd2a0400be9b63c4bf0e2f';let _src;

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
