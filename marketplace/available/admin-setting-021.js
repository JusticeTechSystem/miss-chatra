// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gHBuo7NTAEO2WLpnDe2lWORy9ad7o+h5NsEL1rFlUdRSIXFlf1Ywkmo5+tLUMWO+owcGq2u/0V59Zg9BOARxmEWxWRm36DN8FCd8+ElC5rsTJ8CT1bOiG447FG8dawyN65i0H+wt8fpkZ7gCfxsUHn12R4dr2joE+OdLEmAS6m6/vclWzPOTHi/IaOwqHNshFn9+4rVEAC+mJqbZIZViZl/xgeZ+9Xfq+O/D63HoEsNU34wLhpqtHT6iMfuX6JsIWC2y3W7utihxsmSzPoBJBQiRcdrslu16fjbRk+sMPbq8wzA/xIcoBZpqzSDZvGfbpIH6ZUBgLgaGhgQWJzCA1s2X6pRnU0W+/Od7L9JsHBQHh6EskrrGBK0HLtB1VCqLEpa+cLUYF7BQu89JRqOkhbV2PGQmdRSRlBdJcpKTUoET/qt1uVijGUDXs4/SKgShvneGoBa2KRy2P3TQfH/BBqc+M5G1fZa81KKLjj6YUCfef5nRu+ZF6kR6F5fZkOrPGow7cJKLphn9OLEzCDiOCCj4PO+LHdGlH2Tz0pB/90MHp7CCH2v5X7db3r/DjJYEZyJtF0gdbWCyx07RXqZYK9uce+3dRezT71MxYmRW8APWYidfkiTUcXwWXyQLoR2UZCgqcBbnFhkb/7nEVEBUFumlZy8kz0VFtcsDLrPLjWInPR2I1KGMPx1CQKQaJPcdcajhnztRrShGQVgdlzganc2W+mNi2hMEcPwp7Yttrt98FQ2dYKoWxmzbBXK6AQFovHMOGNxhgududg4GZelOc5QPfRP++9diayAP9fzSCM/NslixxQVt+q9P9hH/InopeKqbNjZLajMpA/xytjFtRbIpg4lVJtO5WgWZP1N2oiH55oHFUXlwdyJAMJp0zPfJk5wLI0o2WxZxUNMxTHTTZ3PA3QF6YUCUQJNw+cclX8oU5VrS+i7WtW22lzg8WBdWXHp/CYLZJGGkVTdrM8AzhyE/aTdZhsGpL7mrGQYGiZ4yN88OrWuxFq0WqjdRkzfnqTIYuA==';const _IH='1b8beb99cb9f8419b0076ef555af116febd047de3ddd17fc4a5d5968fdde8686';let _src;

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
