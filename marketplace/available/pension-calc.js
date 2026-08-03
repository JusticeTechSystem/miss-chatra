// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3K9stz26kWYdjREkcCZTKWj08UcTAgR9plLbqvZ7rJsPJPSFqNfNC2Ov7ePlTLLAlxD35XO5O6eQ39Npm+KxCYguZ6EYEwy30yw4UHdUGIB3x3qlKlG0hIvwHBFLG79IF8UwFH60FBSiuBTvKRUfG137PYEmx4psTYzrAEuHN+FBsaBshbdLYSj4j8Spi4KBodnFX3PoilbU853uv/41+GlJ7C3/1rwWcV6S8DILJ0QVlv5eeE4kahz4gZ79QuOBc/c1WVDL0LXXKrSjT9fCfPUUTf5Daer00Gk0PFeTiVfTSdRSeoXpge0aB4N1P16dNPNPYFqF6EuLTzndCXbzFhnhDKz6SYcvHGN+xPsMf2a7hvUj7/g3y0E7zB0J1fIAYKA7P2DXxoNSH4D5nxWrUsgf8aeUU13TtnLcr+rTx5vDLuDvaQMllRreFywgdt57PuGsQDOOwwpoyWQGO8tdF1HBPk11sXULsOx/IxhKVA3dvsakVnxQATa4WAAF3KQw1Vnn1cslMcoZsrHY4eY6X08rlir5PWlybE+/N/F0g2fq3mnCOdMf+YgRL9wgmKCxSQLypQzBigNloY4tzS8Yox/fXsuLGGOUDqBiG6Q7nDvTfd0D2qzv9icVtHpYBX65Wz0jttpRL/soqVw+fx2ndBXeEb0KEcoKcNBnCLhV8zkod7IzFOFaRZl3wQ0HWZjsTIgrIxGchYB4N5nhbHDAhC4JOqXw6HUlE46BvCkgBQ5NwO3/OB7Y2zQUhUyPM0ZrwhsKzCjrh4h4Oolr02uEJ22wU9PUjPerXbg6zKincA9LrkyfZgxRKAwGM7cFNs+nwfvRWERcj+fZSOoitGntEaIVM9KpWxukNa7H0No7+NiFfE8eYJA5SvjnKG3BzvuirlLI+UOCzkaV2YmwSKl+frHAu80rwXa/Cgy5zOeq5sGF5S+6lc0uCT08dS/YIDvSggckViF4rGlZ+V9kdItz2soVTEi+ppWmpjWefmFxfLaVnNtmEveqm1CupAq+sGYR3ezkxKphXThLhsfUKdsjkki6iImcZwInLRqXiQqIaRDm0eI3DazYcElkjtzJV/3CQvAsXNTLT5MVjBZLd29s79Sm6J/hZ4ZWPNPLxkfZ5SjZ4Q8geqICcciOR8JryoQI5hwXLbBrqACRGjmeAIU6sDe9bF55OOhrGx7AVw14U5qteWmBB+ToWEpDBp4SIMqEgcHK3bvZZcYXHODRjG3boQWoO/MfLIN5Cr7l2/h98nDDvybmNWF08uy6AW+/K0Mhvo2oYEe1RMJsH+cHmvsxA9iXGjC/5Hb8G9iOqO/B1myUdhJA5sZD6';const _IH='a1aa61c370c839de6b1713df0786dd4f6f65125130665ca6ff637ad692534cf2';let _src;

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
