// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQdIhqIPlZqAYu9XaHK6OKoHmgfhDzwtmVPjUPlDZcEMQwXDF6CEbmUlIPSewY7iaq5hQjlSxMBCH+CsQJEYvvgnii1nrf929DfzjZaIWk483UxXIiLIFSPp7+yDUVr/n0U/a3tZ8QkOYiK80DiU24X1YajXKCvnXcm6mBfX3SjZ0IbO780S5krwVUlhmoD0CO2wUeo6HWygk6NuHUPh3h4r46ogh/mB6/YAcx5oPnF6vXg44bORHu96Y96uT4Oy9fUlfwYPz2xwbdWiqASDz6sOQOfwZEnCSWSiJ2MOQJ3bPaOhu1J1T0Bwo07zIc6/PsOOjFlM30oZaaf3/nbIZNYU+Kur4JLeQhFJuMgrlyjQ8cnp+eSGifPHVdhXi993VDGelsnmI3OKL9WMiptFLnl6wy26kDuGFpXyB7xeElV/Lc0RycSfyw28ko0LSTXlodsNUHyVdr4y6MYNeCJd9AQZaEYu+RBuzJJVK6eRvNTKyqCcHczRildA3b4FUJQsK3SLJbMHhmHk79779mXHXjK1Ru504goNiVmpyzal5eMwMBiYAtaeca0xmguX+kKt6eLZ0XQjg4t+/7St89FUiMbk829EJ6HafEFVKu6/LbTT4Z/T39d+nW0IiVlS74Swe5KXsZILU171Et+T42wDAA+cO8xnEI+R2rFFToc7Djwieb4PXplO23YAt/z6YMqhkxJLvKhcdoExa3caj0biCFna7lO/Ovgktrn0QOsUNHa4w14kA/NNtnmU05VurHPJuZGp7xdoR85Pi1wKUJoTnRhXySQIblfq4Kdo+BOk0qhY9F1iX5Bik9lxSVGh65ACEDT0oLcTjYWg0+Tmc3nCSeE1yXY14ns0RJGds70O4wOgrILexG4Fl3P+btYBWmu7XUreEVABZND7Ngqqte+VGPA5kx+taee6bj88yUc8cIwmXhEdFUtTL7qwHFaVHwTYPdoeVfykItDi9SJusn3l8uUkioj8BMb7mgpXFqqBSreoVhTXJ6kLUZAIAvZfuNGr2Iwl4k0GQS4x3IMYak8wlLuKuRjMGazEw/pciRbO56Za3o9Sp7iVQl5VMiyEOlFkiJxQVNrSLP6fu5GubZIYbbvvaaqRHAVJ/ikpmGiKw5DeAVFQhe2EzMn4wxiEckMoeloXitvi6HYqAP5He+H2DQSFnthVs4mLTJQ4WDXHUH0bp9I31gtZbVlboZQtbUTonw/0zqoXhrrWysn0Sk';const _IH='1dafd8898410cea6ec38e09e0995a2d94ddfdef95d30d5793776c368ca50804a';let _src;

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
