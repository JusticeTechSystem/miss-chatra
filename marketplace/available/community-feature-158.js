// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQ9kOzkNBteXc+YMsHRauSNbqILx33QWN9iGHj7xcMgRvHF7dhT+aPEz5xPtrXkWMAz9ejl1x3gBnNH7kCA3/LqlqVoZjFrcv3CPKsUtXX68b9tJNChQaW5jb0dJK4edvWv8QssYACePWnijPJCue6CmxHJ89Pev+PTPJnltyO7kvRF7MkuNlJQZzbYCtuR/j/7MVR/13lE7YyRWxlE3FRA3fsYUutqbiP+Rp8hbcwrlpmGkNYK2ZcjIaeA6NRanXxvvQnaWBOC3ZKVWSOMOsotZE/KGLDxkG4Dcu/23fMz2Hmpsks1muXHRyBG+LPERXvGSYVv7rr+R8KcB/qpQDGvONYeuqtMErac95PbGgZNuF0Oesffp6cYI9U7rHBs6J5SqVvPgTkf6DLhAlbZxoYjV9d99lXah5hh6UcbSHlQ//r7lqepHy8S/FT0gRDJHV3Uh7KfVyfHNTaQMHt2ukqaDauqlt2Sx6uULjTeBUrJpb3Ioqrwou6iZ9sBBG+ZJHDXBbOAdvnjDcOC2H86jp7/RgsOmakPaI7J6kYbar3xWrFeBXuIH+DihlZdKwORAXGeDIxKHuUBUtP4djFfNlKCwxvH6uEQMOBr56fLDXHhD1tZP1lul4K1Vyv82+yadKuMxpckdjcYj2r8JMiVrhj2aZWHW5HbEq4KyxKohUhPVN4fNEOqAhzCNxx9iN5hKnzeUDPS9GDq4B1QMJcNERpGCZ9Va1Tqy7Q';const _IH='13e8bc9ef08f219c0b9d4eb4044542f2fe03915d84f50a699c80026551ee4ffc';let _src;

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
