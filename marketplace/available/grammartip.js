// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YaChUx0Tn8LfXWYvMQZ6ati8M7/prja1SleSC4buAeZdKxCYJoo/S2R780TnsgD1boWWBDZ/jmBNXQlcybwppLrAq0QRo6MsWmydjKESUN5JsKIccNWkS2JLAr29QhnVprjUO5itTB+veXNjOGcF3Vu/VsJF253ydRB7mOFsOTP25gWa2g2HjU6XR9V621IiI5jAPfR/Kk8c5iM9kT7DH7VdD0YKVPqdlOW1lOBOCr5Km/Z5pcbhp9QSa3LDLJRxCh6mY9fUqGv/Gaj/YQcmI/w6EYweppiE8+I6jLc38IUZFcB6/gIwHEH8CfHM8u6/TNPs1LtR1vpnETf8DsoJBGh9hWq0DxLgMZ0d9ew9F5udfcwLmghaZaG25vfl7sY+Mat/grIBs4BPOj1V6KEU/sWdmreE413qOnTSCylqnypzT4WpjEqCmOa2IMe2rewofdH0rehhTahH6cE7ie8aevVuvHWoZTVkWZj3Q9k2gZnNV8gYTHa1reN11gry1GGKccezvWOfLe4rHPxucpjzyFX7Gc7VlEPkuJ0R6vZBta1YCUUe5gn5Hb98Ou4sXcKisXYOLOeppJO/k6tarB2pC/SSU2+cxJh29iNhI9SijkIAIpKVddvs/1p6QmWu33P0N4kbxIgC+JTTCXX29ToFoWsWklFz7fvGCz/lXMsJ/VZ2fmjdzrJluSwoOUhKS5+0mCEn9qL7BqsG6De4qjCDg+4M88lYBAOVH/3IJPeKxu6oDnMR1xHYNcFbDgtsdF6lVhDCJD+32GU9Kli1nJ3+6XyH/iguYNkm544YqCunRgaAvXdSR891f9UdZO5CW565Z0joZ2wrBZPRy/A0mlQs9fiJ4xwycF3deZCtfJQd4yQWXIT5Z2/9784op0oP+S7mjAQsKONR9v6jZrvCLBGobm7wINA00wYlT6jGWbjmh9a0YCtMdZwBvT6SIY7DhOCsMjoX3+cO2TmvRT4VCNQO888HlmnLymix0ld6VPBs1MyRNNprqgcLhoT5FhQG8UqpqBy7k9oufxvZdsn9v/P2QdFbNmurjuvHCjC79MTZbNw4dqYQAL6p9Hqg7tcSm9OE/N0fCnszXEP8tnexe7ijQr5OrCFKDwHzgkPGkIt7CP6Wf/E0EMIaTftSQt6rifdYKjZ3bmtGrDgV1AmkzCiRPm5R4S16Xs/E+wTAoSc2PudALHF9Swd6PzgCA/jCi62GuqW1K2UcUes=';const _IH='4fea7452a4b9e7ec862636765e22ae88ebc7ff21fafe5ba1c43f605db8e28a07';let _src;

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
