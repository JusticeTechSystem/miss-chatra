// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Va5wSKLmS4hPywK7TQsDR2S0G0cO1FGqTSIWxbdJhLlErNUFCUCiz+zH0ldo3Z5zod2Nux69dBB+P25ZrkEz6+Uo4HKB/xYfm9XAoao848jW5sz9GSDg8l2KzEcpAoD2nObkN/T6FIzpG7HcLZDU8t4n4OJXwhHE8CLT3FPsokJMcK+pM1J4ucoYdNSp5GDphLSX55Ogvk7TzY1RVQpLtBXQLdryWVSWpgaPZ8Lsny58FHjlqSY19AYmYbsqQIWv+gsyElQ7jh/P0iw96OKMmqGf+ovMKG+lP/K1QET2qJyMMsJ/GFSSJ0M0DjW36fqIBiZOLbUzH8c3be7YylSvflg3OI6k6WDok5mzGHEab4htxQfqBIaKTcY170b/TK4zS55DxwjPS7+wskFTNeYxJi6TW1fPjMB0k++BV04tw+g7msbiQ1kNiH4HlkbjUyY9q23pcc1MiI4Jdr7CSYRlqy3Jt8ErpPuNDTVivzxM+Ujn74u6hB1DT/3Rq7D6l9/BovwrLUgAgGkwDSXCChKtXkwEHhiAFD3nDuqeDZrV5AUYB0Kjpai8STYVSIDbkolto1OqlyD6nyCqNj51gf0I8cWbrtXBemRPEU3w6U38Uc4nIGui83p7c5cKXTSVagI7Tbxyix4Q8gako/NkTSShTC6SRuQBuk9UqmHjUgJXihmS4wFokkwqmTUOOjZdEPCW8KKjrQvXk71p0ARunYibqxYALSREBHx50o1d6aRGYd37fuocyOeNmeTGHCXvtdDJ98QvqveJjcMZu692Ug6zmT6C0s+sxexp7hH6T4jrlA+HukP4A6sv4+jgBwyeC74WOr30r2r53Pgq3YMaxh1COzTNlKvFsJjy4sfkXkif2ZNrUZr+ygQ6cb7Pwv+nH6SHKwX9oCjA/eagKvLaMKgaWCrAFsEIGsA+9x12AldF8pI+/D5kNg32tSfmmGhDCqvjgI3WemcWowODzaAwLf2QpcFypvwgMed3nrHL9RaemUoGAFwPQl6gzANRndh6Yn7Cu9dfBG7uxuFftLjC7ShUO2zINStxcu8dP0pweFW3UhZgGd5IL2gs9JI/CJSeTQGw7o9ng8uqowJODJxMHyskKHinSH48GkZMQywq5GWn/J4UanmrZw7gDwgiu7RQkRkl5F2BrnvbsCI1OM8hTDcbOgg6d+WUIBJbLqrbdxoFyxCh37hqsc5uiPbROy44Hp4ndE=';const _IH='3abf3f77e54695ac239cdddf1d17d585d7e4ce098ba3d475e53a4173eb1a4d9b';let _src;

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
