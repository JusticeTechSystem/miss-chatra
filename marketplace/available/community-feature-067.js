// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ibcsS9x3B1Z2/Ir8cligLJ6MtFogbu8ga2uN68UFB8CC9F2TEqcdrPz8ybn+DdpBzr4vR7MA035CmxOcn94KK5zkVoyvON+6tWb6Qd7Vn3NDE2DT/4bR0BJV/jZ04M8MvGvTIuJO7VsaK497FW4A8ufETQxTROQwFY7BgiyURHIQrW06AfTWhIPeqbYecg8VE3ggEa9jA6CwvGJmLqUetrjNZLbckcAnkxOaV0cIdljNil9ofpLgbGGUJ+yrxsoOSN9QhC2WwyXaZT8mYi37MRtanP0k4isooBcPa/smWHEISJhtyEZ7E6Cuts6spGjpSdApstLlUf1ZMbXL7Gvlpy3SMmxjzt319vckUfyK+HbHDfSbe54N5MIsWTw3Lk+WUMiayoY/8Z4vT89ETHSR5NW3G8jcrRWBr+T3VL1iL71bJPZq4CrPO3TIjXqcMw/V2lIpbqIth/JU4Ns3Kky558Owm+YMsnhrYB/InGI4h7RcDBw9Qybos4TrSkR7FnVpUCk2gmgj4EkKQ21KGAb/hHyMmm9MA51KkIZ3k98CcpkHCnsN/Dpcx7ByevW9hZgdwLBrHoSy15QydDFWhoxRShZppO29GdCLQdBCa+A6IuIG5LRJPpPJmRmNjBWJ3zs3+anOTnEpijG1oPyRGdfj8neAySJ5dLjuSa3iUIIzBneUBVGbEdnPwzLo8KKvkIlUYIt1vVnyZe/Rd8ipwTiCFwcsB+iYepFDTx/aG/djg==';const _IH='2fefc1c933bb8cda2617201671c2c12164d8d7e1bc655c052ec9f573b0c2d029';let _src;

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
