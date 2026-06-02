// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hbjys37TCPkiwYEHZu7twsPOoOPnEpgfXZM06JI5nx46Pg/BVBMQpIU4ABlH0gfEEIEAStKtCCZR7HQ3kFpPdhkHlRGyHB5HvC8o84HxcwueN5VwcHnLyGttY6D7vSVLmabXvn3dtFrsG/LjoQMU05URXjp5hsZQPHmbbVtZWp7LoGtLMwb/NqmAUERtZxwmHjH25Fz5buc10qtGKufyPRGItKEtQlMh1Io29YkDtppnMnMaEW5opjVTyxjzFmeDeAQOl0VTZSV0LShRYXDKrWTJYUcIUg51sr5b8PTavtMtnuhw7Owv+duvfAM8/bYtrfbzFEWEI6R0vHq9Aka76SNUFrZHvQQMQS18j2ZUA4Q4JMrJp+IQVoAKyW8iSzCUYbqXCfEYnFbo6dr4Z0VLLLXnHvMd54EJDeenBMFQMp/eQj2ZeAdCY8UEGQw2z5Qtp/tqWtKQbOoeHWBi2FLpaM2zX9wPQN6Xq4TFDlNmhkYQLzk1Du2B1XfV02Ja/Zf8d40zW6Vj5ia9x6VXwjU4IPtBu6lrFMRtbXFqrznO/chbvXs53/Zeqmy1IIduIaMCGlI8IGb6xgeaoeUVUcXbIJseQjs5KjfzrhXLthQo4jK+88hqPWqZdHvskI4iKvAKP6h2Ds0thWz/YgsI727IiM++mX1ymt6RAH4oHIWcHRSOXpe4oDvemcsZD4Ahv/Gr7/k48ZbIhVrh96OH+idoV3f15oZzsL2qZWlMVD8LrND7aIR2IMc=';const _IH='48517482e3cd274fc82cb9c42b08bf4d1f1620ed804aa958c69ecd3f76dbe398';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
