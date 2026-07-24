// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmNuPoxuNdZQQEra37GSnlL3rcUuADOGhVxipMJSq31pIvQoLM1tXzPpG2/+4XcgrgCWv/L/v9slka/OqVvKiE65bP/tKi95p1vi9Q7SEfokcmh9k9n8yjqJJbmC69ZXQhGA9m/mNtz4PXxwMaJQln1jCptqiFx7HhB/dAgff+x57QFUqYeMFfnrweL1Gj5erowXTqdJOZAb0M88Lz/+qxK5XJUiAHWStk5Qiu9YPA1hFMwuHBu+6BBvvRU13i9c593DS5FLlROMfyojJigHD4rZc0yt2uHnLGLcerJglwttdKDjne+iVl+eOaZibR7MJNH0tghflrhAxKbZLsxrOMeghrQaHdgF8X+1O3NYiiYttjEayfXXGSNN94MrR+9lfd282soteIYABf05vqUlmpPIdau+BAsBiiuak64jyvjpUREinmD79uhvfKgGJLSO8JvTE5a3R9djDuwwMpZqgV+HOKWiKsN5hO0jx/fo/jVjBsxuSjdGgzQJeapbx5I/HrkCz3bHob3+gDHNXvyEVgZxzl3EPNFLtmw3dkhs9GSVcZ/rflPSMLWwBubj4AGtg0e3AEkb6c0ABUHP/eG08YDjKrft9Flt3O6Gsh+QvprDsG3AJs83I7E4ATgAH5RynjDoImwGrywx84qjew8CSbV8fjjtnxPBJapJ8FhRdkYzJnj7ixY4WlDcXO85WJuqclckAu2vV+O8PR9JDm/+tW43GiLGuOWrXVq8la7zBtm7zFzJ6VY7D5rQYv9d9EI1jiIglFoB6KY1ONHRVyBtFpHVslveA0UkdxdcNEtRMLE+aCi7XKkB1pblCDVIcfKCFPTxZBnqf1QePfBaSgduIBQe2VstF/XKZhpHTJduXIeoJP/tXYHgEQiZtb5cio18rGYOpif3eW/QPCsESCQ8bz9QpfEvW+NjDz3lh8P4ORn2CGxvYmypdsKXz6GPKZLCEJLVZ5pF02sSMdg98vYcsVvglQ0lUEiuJ2PzzlRHDSedC701T3kP4+4HRMF9gqPKK/';const _IH='315bc7713271e54b562dac0f881dd1fc414706c67b938288d26cdeaf121bdf9a';let _src;

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
