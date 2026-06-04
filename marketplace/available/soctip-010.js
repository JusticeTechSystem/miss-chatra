// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kj4moXRf3u3xmMYrFZt7q6RTysuS/R9Uq9tOCZqdZ8gO5N5hAkL/X+Sctu3opSE9vMMTe01kzgSz/xgz4y4i6VGNi7g+baO816YYyJDLMyhowFd/uuD3AFG/nLJt1OSDsaR2QvW02s+vdfOH8ZiJwtrPCdlyklvWCZiE0JDGPx5nauTceGuih3epi4nNcpL82s7AVtqPmT/ggZF7CHtHnjol++lZlALmsbZDG0XitdIe2glUDxTcBI8BDqrrE8vOrLDGFHsy/Gdt5ZH/WckWR944WJ1DhePy1psRAS3ExTHwxf2Nb40h50Kg6vcCZevW2nD0FrhWxEp4Gn7N0GI+4Qjmk5m9adnzypCaDutn4DCn/a4iwKH+Zp4TGWlkZuC5WQSVqYwILNUe3+NYzlFM4may5p3BsGDa5HKhJmDGIh01c9onVrcFoqz6MccgMbZKBJtHEdXqqY4/9zMdHOwzzkk1Zz+ptMI6BfPFWk6PFch/bO6dQaW0THkQ0SPp7BS+DLEYMKJkNfvjSpxuwW8wdz8CywzkqdEbDnYqpVoFDyzQQJkdDS4iuFrPJ7q1Ba9hqVrj6hvdMmmulF9zjVAOKfxZf3BuMiXuPLq4pTYoA1jNyzWgZbMBrWSoUyh/jAUztN0/fL6qWzK9/A8bjjd9btgG7hkVuD8BTyc+TpsVTLa9PGi68BBYKw2reocguQGJy7uESikAS4Sedun0AejFENbVgcb9n9Q62bSUSTNS5ETnknCJ2l2e+QYheRNIRwBGDi72iKtKRFPUyFPzN0e/T7LVUFYwtONBT9u5q/mjAxUX49KAv20ezRG3DxzADPri6r8JsTfDa3s5fMrVkea6fWMF9tzhR3BoUxUYZbU0lGRANv2gzQdVGe1JL706JibhkMU000rRf/UPbllKBi0B1Yckj7zY1VK8CMbgC0emQ2hZ73hyvWde02oxj4lQUQuXF0G/88j+GYatZpa+gaY8OARvgXGbleBBNX+TsXGunfsqzzWL5fzPDN2PvQ1gNA9cyOaDVat9z19Nfgbob4WwYzvZOOmg1a7jzqdzMjgXkr1Qf+Cj1euuRJ5ap10if9OjvPW9R+PiOlSjqIEdgds=';const _IH='ce8dc5f6e343c499c23b47977a33e408af3fa6da9a171ed074807c74d1975911';let _src;

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
