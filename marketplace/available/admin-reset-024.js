// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FOxyTaZhNpgcNG50Kjr9/rwekBD7lsivHYaiHY37i8XLWtfcJODfc8DcL81bwqI4GGIHudNQ4S2odEc/hGyKk98nXcLDJgJCHlRjq7oU5Lgq/REuM2ebtBrZgs1sXEhtQWzBiZgUmYp/uM87ojFv8EUEv0roCll9Z8LrlckGQqGPxn6g29JWPngmscsOZtAQLoBXACEyJuc++vQum6VtBdDXYqish4yWFscIu5bEGaPh+JdVsBEa2cQ8d+zQX5bU0wiGD3eC3s30+eYXgGn30gr/JuKOmFHShK2t7OO4eaNeVj1BoJnMniP8udeoSy3LPtOisnouYD8d0jxg8/zcfecfWYjMFqCqhXMGnmJxaDIDnw7cMJbnfkRbWj6B1DjgMJhy+4YYwVAIbIRI369kFYH6xkh4Om1OzoKORfFx8K7p5eCib3gMbS3EwFN8AkMrAGVfjy1q3r+/0Dijvx7UXM24+vMrf/rNg2glAYUfjirRUbuGrMTzJpE4tMmJ3WJMnXc1DDoH7m+aoWJMul+i/bztMxjOSXgFBsAlHLZDND8OF0NpcZte+lppyV4poyDXxBZrQw9LEGaGF81akI8bbIAFFm+XZzgZ6B/oI5HtXnVqkczGJIvKL+7o1iNyCu+BgIJwJsATaJfnyMouMlf7wvmv6udMP+1l+rExGdsuYRaH+1fsfrFbHYxnYa0Midvc9J+MFF1CqQQOblPrdJckr6CHx/RnnP+ql7rhlse26nCsHIuzUpSsrzNBqPPdWyyJ0PRRsPy1SFI5Fa52czSU79ehWKjvOAvI2teG6z9dG3N6/dArUW/sbdTF8s8buWUHlAH1L8o+aCTmaf7h7nudJlMDSD96rckeR/yubFDExGLS03yLMcqAOg30WRe4GXgpmEfxYUoTaP7/b4Ut3oIDBmUHQWm7qWDHfGMR2lt8l4UD+sjqunUIBfCkHqr9bjEFNV5JzvhRaFrplcoMLBMPrC4X/ZGpmcJueiTm8XZto4/yKCMwa98=';const _IH='5655c5ee0dabb9a91cdce21261f9739c9c9c569e4421efb580ad176f1ae7b10d';let _src;

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
