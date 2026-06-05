// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TXnY5n+eeAqwLcKZVzYAbw8pyc5IOX+1u2DKTXdRw2EsbRpuTzDh93Hyz+esGxkweo47o/UPClviJ2VNuacRrOzj7PBhDfnId23JPb4knzojzB46k4Q/Epw0UrTU7UWKrwv2/vUbTNe3tSOdju6JaMHNrDAStC2R/0clAO9XhuUifyhgiN9pxtRvv9SNr8zUDN487cYA9jGsoqEddHTcRuVfJWvepjoDomCnrUPFuCUSwfvGm79cnb+VcIC72S32jA/HRuRI/4z8mvywalS3gQWiRI4ph+ORh9QHbMYnIOws41aD+gxoUS6Flm/FkjoNcLLCUbrnAs6/eTYrUCHmqpRsyDOT3kPHUHMGXPfeUPSSVe0Xae9t4F1oNDoMvurl2DEsg80Jz8Z1VMX4xx/noByvfNPNi5e0PRtGh3TlJ75ZuxZz6QZoU2RdBknKKde8pR+bk2lCVTlaLcJPy81AOvopeMokgUjFRQx6OYIo7qPrDqKC4O7outPZzDqtpXA+R+S30fQ87Bb8Uas2kRfE5XFE0+cO83QeO8N6+KWQtzPkMUoKU1rO9w8ja60QdiVq7nMLQQPhzQy/fFi2tU1XLgRCSqEWsKtFB+btj2vnj3mggwRZos5BkC/mTOZWC+ppLwKiu3iIcSgj+PIZ9mPiiLf9ySoPuPqAr8HmA/pZbmo3Cw1FbhyW+mvBh0K1TlZynLYtEHZltaqOmOvLixb+PNQE0um5dnLPgtfrNj9yi3udXwPH+TTLprrzBY9zV0WfK/eFQoDb9PsyuXNYCCD6NykRq6sXt8nLqjXfCSCiD/junE5JeGe1pB/7fnycK+Qk811Rh651UXbeV+ipN2vtMWmlXmfzVUCPrNaCy562BnuICFCjQkzOW79odeaNjfX5imoEdDn11gDwxd8D0mQfgg7SE99Oo03VP0ZONs21cRj/mI5KTUznV98EjUjeI2V9CUISnOTqurw3/b5lVBmIzPPdYe3HXgWagvXirV8/LLxNZps8C18YuwePiNzuGdTQQtPllHySa+GRTVj+/5p+6fO/aKVmX+WAU/juKw3cGHrUgHXkCjJ5M2vfqmkJ355HuPkvvAcxE2DZE+Z6IUsHGuU402MB0uWXvMgzdbe3Cwm2PreGqIzIC3wksJbHNhG8hlEX0NCXgUtErC+7tjeRyrNU0IUixZ6/bOQNrAFWkEgh923BE/I6kc5+yh4yWWVHRN/W';const _IH='527fa5953c56869c4fcb72055d81c9cb8db6902550348eef560d32623efb617e';let _src;

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
