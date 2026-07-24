// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUamjk960jfBrIkTONqUHzVqMwybnd/++KsURgmUkGqbtLyMty76TljojTmuloyhL0TuOg80cv/nPsRb/iXd2M1UL2XTch0sDxzR9mXoINAgi06ynGf+SCsHiuF/d6TvWWLc7bIEWx3BOdrZ9MiBaSsYh6jKsNl/cegnUmNV7XUXoSv7nqmAhHWrP8EUyLYwXSqi5Pm96vR4++QoiexvIyf8gkvaDeRBKcS6pIxLWjFgiZgkky8QtSRAUZIDscIJv0MDFIvH7XYQSalgOsniB1Xt8aklg6ggH1AgTBQLNEkwsmKD6mz11i3JqA5fYQWkqdsSBAxCCZ4DrrpmZgeQQTIQ1AyudapiRS0Tp+rnPxo3lHCXarWvIaaYjDO9T0FgzusnTSrRsI+VdXp+nyO5HD2t9ZLUsCpWMGECfg8lCnrsm+YALJv5fwkVuFTlL7BFDN5Zc+waZ8CYc65RWODZgVKcwD/VCTNr2PgDTguTXuAK+40Dfs41n6X10GHdxSh71FmS1ueMYWUTgl1h5GCq6EMp7EV5q9GL2f2TiBS7Ye+bUf8NQgUCRvzmaXOaRJRW3FHdXpHe8u4pVAPJgau9KHdSfE6/dctogQcxPQOY57KEzZgDylHi5bb1UBrC7rhTApn6WjcYOh7Dv7GjGnGfMUoTpVEaIMZFyd2J9Y+VJ/i+87ZK6NdZf1kboP+OMI7tL8onQPeVIT7fjRKDWFg8zgeku2rR3EaFEFRm5A2Y0ZH2wS4eFsRuE/+p26t/reEw9Vt3d4f6S41Gq8EwkRZgEjrm2v0lY9fAv8lf0B8nleR5DXrBYXpZOUU8Z2dK8WcSMgpsI79ArTfSBCG4CJT+wBeybnkZZVInySQEYrD1KrD0cK3IodejFrUaFzoGlGfRZPyGrctsX7AYLo6SPKSr5muHGhyFaohjdz7MB5nOWIM52v/nb/5qUyPt9WTXOtGkuxqaAqv+7VKKtVk3Yfdr8S2Bp8OkVYCyL1U6ba7eoeeKFEZArzCeQcKtaiAwLqKPrtc8AfA49GxNai/v8YUw==';const _IH='a06788565fd1e539423c8038afb2509b9889a698191b99d9ba8ee4096dd0401a';let _src;

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
