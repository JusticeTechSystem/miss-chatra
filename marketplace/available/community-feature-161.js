// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d+WRMVDdslRlnoTrgBdbxYxhrjBQmKttcmtE0+T1s47wvJjReZSNHVz95cqRxtlA7HBcrgCXbwLTVilETLJcqvOZsDCB0SZNsU5cD8jrc4reHqtLNNvEjRD7RRA1ahxuWf+XrtofKf/UON2kspa1Yqbj9EJwztvAN3vdVr9cnU5Hqfctsz22R5V/wMIF1GzF2Z+XhP9cBAhO5dRp3WZc0nRymz5A4nMRhoXZgiRi9escDES7hrhlB8xCSjupf/WujcM6yEv6E8Kpu1DTnY23fW3U24UVsNqXaFMPEwHRaOOHmAUGzyhgVMGldBoRig4pSEy0VSIyF9Zd3B3Xi5js/Ki92GaCDxOBZ79DXtH1bwdDuoP5oZm9O9+ejL2DOrxXXBg29+YcVqNejAeyJ2tlpbNA5JZEg4+0sBN1bYTSBtmkzf8rFt0/A+SKuHC0/GWZvlRh2anT5FWqXfL5BoiFo28XjnZj98GIf9RfrDmAXMduNBZn9kXz1gLb3Scovgoz+lzLWYJ8NEEzw8ipLPO1LMPPud/hX7HNhria6oyJHC47HYm8vkxkBTIceB5OLBYgb0v2yT91xOdYBHlOI9CchMmgXGKGiBkPPotauHoB0xczuWyUVTeAC51ilGfy+84Wd8m576jQ1Vh9Q+2rSJ00WYVqPP5Egd9eHRSXrR9ncibWvPBL6YHoGVkmgLhBJdo+X5nG68Vo6uMrDh5FuGqOQm1pfA6ImvX0';const _IH='fcd37a8d7c74d3200c5ec5d76718e98d2055f979d28b6fe0ee28cff090f5c1d8';let _src;

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
