// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TtlrFrNxC4iXCj0CWFaI8DDy9IN5uj1pjUDrUSuqiLvi140R0RW+N+3zMp16L15WdDr+li3fe3hpdMBOiKSExyIs5+MPW7Jvyaxhx5ZVDT5j3TBBwyI/ulvz93G2EtsVei711J5jxo+voDptyk1lv1/CMIpETTmEoaVjPZqv5RA0ND1XdSslasIp+WjC6cwOEDxocNhpC7f9nYlclMq5S87ze7z7XsCTgXKlR3V3nmi2gi80+dGeh/u6c8z/dQuS8JhHt7+1OIvFKPOZSoktB4v9TCA++UdhC5OsnOaz4UcAE5h9GICFyvNfA2OVVXqzY7mMTs9fTB+JSlE5r7Tg5+r4uRc7oaVqwz8uRgqcAeuaTiKsas0kl69m/OY5m1Dsu5sCHUD/o9HFgSH8RVbNUaLAVxY9owf4A4F8cae28TRznYNyC7/aeYbs7HqfQYk/E+nxkPYnZTL7S0nF+GUMFoWcuSRVr9+cXfq55viAlkv7xliwJiei6F513AzOnQWkx1exXt0Sax4pR0zORmF8cWCYiP64xT1qk1ePMnaNy4L2YAIZz7Bg/RVMsJTG603zffWrbe0LcxPUz507cU1g6i847XxMvsGPb7axry30t0aYYs+9oRtcM6JCSGyBJbGDCNgJ9yQ4APZ2wLYpZJcyi23fRA5bAk7kpWapy40eOY2exUFi6/G8R5+oKfZ4weaiOHqvScjgP+two+5NWZ0cbUC2bRQayaqTzKD0LscDftEXY9a54A8=';const _IH='fecea196fd0680ecafc0007acd25d4cf20b16453636d55919755dcfa04d4ef4d';let _src;

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
