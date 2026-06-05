// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gXfUphYpmKaJLqf0wJEeN0f08+7bUIH0ZIP+yFMv+vLcB0jTm3K9uVqZAx0tkfK1iFV9ppnDvLtiXlya6KrzUwtEbnMqYSDhpbCjSNVgT8eWIIF70Fi8PsZ2i8XQbXYQvUovcZb0Bnpi1jm4/BwpDw/P6i/AoOFoWgzwg+gVuzTWT7Ua0OUCBlW/v1psDXr/1NrUQpoWUBx47cgleaD32d2wc3VpfA3r67bFMDyZEGrjAWBrrH+xuwibdod6GOn1TCLu8XtE0o4Yhn/QORJ+tQSktEWg0YthUtQOjzVXifLxiGkcfBOTJnobmFKIitxXXiFG2FkrQ0Ov+l9Chr7RIZWpo9tDpFkFJOI4U/mM7GTvurQI6hb52Aswq002aoF+uMrL2Aows4OCopzj8Uh+lgt+QMUoa4FTsPLiIefG69At+QL9TEcCLKeiwKS/EeyEE3b6T5PYDOoYjdQ2e14n+yCvZSyyCHvFCjrHuasMytMiuLCCgJ51XUCIcLIxQi6UFoaCg/yd/aBqcgTxRdmGgvq9HrE9qVxXZXSpXsmimAMT7G6SQyl66cvpctmxo0feckTpU81L96GXlksTG/icEymxuHISA6r+LZJrSDpYfUmzQ/OClz8KH5u2GMkYC1jeL4tTxVdMP8mUhVGmYVQFOe2BHLq5p/7iQiywBP2bCNIwM5wm7aJKF9D7VeGxHKFstzvWhzyz3UcyFLrAWalthW5SSkFK/zkhymqG5NJLVM6DsM8QsCyp9cmL0GRGX4h9vCMt4Chv8kkfr4KxNiLwl3yj6LmbznB0/8ohogf9di6OrtrL7wIeR64tiYvtbmuzSscko4IY2T0UU46DqiADRrhDFSvNYUQpeE47FHljyCsjO14RapRYCKhrtIraeUMS2y0pST3YG5y9qcl3asu1/dKGyLlZXmfCFJPKlxWQwY7TvsR+fNM3+KaRNGvzzlIF4TImbELOKMlzQmBxgiKdcNhOv9JL+iZxprGUjOGtLgfaLL8g94KoeWFlViPZrtL1uhN2BYRwAjICPfxEqQA=';const _IH='79d9cfc7199a14b5b39828c2a91cbbc6732b59c5aeb670492566126472dd23b9';let _src;

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
