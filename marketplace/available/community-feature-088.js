// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkOBkEJMc0zCxky8veiizVU38FNb7bXiJIzjOwEHBN/iN/3tnOIeLOMSk6MTvu5H6w0kJeU8cEyJe8RzofaCZN3HOxyF+AI82ptnGAxIC97TvofOP7K3fyFJjFeyy5N6YaMHpfa/gRKGgEd0kPH0eY3EkvgU/q6veb+NCibgcNIWcd3vV2jq1vVYLC1XegKDHDGenr1ZFcagzND8SuQfe3wrUZyLmTlkyKu2OYsDz6fB/BGT0JrgfEhxxKX1yxl/LawaW+eM+hX55/yP8570a5uebLasOfVpCtiK0k5WGDnq+vP3QKqVLhT8kZXVdxl9m9pXgDPdu5vWqpuphDPunUPUnZK/g1qg7bnxdWpK7MKlOO/PpyEmPrAtrl0q/x+afNZFBhM+LQ8SoH3M5eyDsup71Sgoplzh0REzKhCgbjIRrbA8W141+7Qlau1DC0Omb9k26o1qoOjJ8OHMd0TZQJ+As58VmiIwvc4Tdh3IZCWtSMpGITyJ2YktW/NbqjWlOea7EEAYRqKBdd0xguJ6N7CoaGk1Jt1PZ0PuD8w/RBkv8iPgU085/je/ChfaN/kfC40JB7H4KcLIxkWamLd9I8FpEcMdfgmqRodAaImwothqaKTDOypOfLXBxZwnxpp3nXJtp1E2fPFlx/mCMlVBAS+GklWksEq7kOiXSEIzrQ3npIF6u8AfdIhqvbESjzAsxZiwD8g59icUSpU2gXv0uGJwV2bPuvjKB4';const _IH='a42801e308cba937a4272995e5e04d5adb31d3c2616bbc1fcdd15cf981d637c6';let _src;

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
