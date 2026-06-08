// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6SW3OHRXIj+Vic9uZltacULF2vJslUWQrf33ptU+whlc7q6yEynCp9liarZCKY+X0RR3I5At5tTwWjDyuiP60y1ZlVI6hxildmi87H1BM7yVMYH4xR/VLk4D2kresnC5wnLceV1sBfvOZa2oR4oyChyiVVMsQYyfOrxI3soXRTxC+73m0Qju81i2fDBJ6NoaCrZZAFPS3/27x0suB4GssaNygNFkdtG4UhDf2g54ySeJJTJ+pRQcnUpXWCVM+eqnJ+Xm9enigPgGw8gq8DPzo1DKiA5HZsjC/udPH+1dRU+VpVIQH8/QDj911xQG9ve7r60tM8TX78jvbIw8LBmJ1BhCGQx+3VrhHNb3qy+Hx3lkqS2u5Y0iS5CQ8uGJDoc0SI96ZPvVawxjUt4yV5GmG+HG1Y3cBYY4TNEMTT5ZuBkBElOpB+BxRzV4bDw3zxC/lH793VMFmpg8N2LiPpDhYER4dXG88yp663VkAvZdtmPJDD1fhI1qIjkdms96Z+90mKdl6EHBEGkhIMwXD3+sWsjX0lx4pAomv7Jw2L5imApCSaW+YpScutUm+sSa+x9z8sE+4ADH14xIq0WGMa2YrRTsAUPtjL+Wd1O77KnXtCdBoKFsKDYXCb/rPAZDSpz1r6gy3+vdfU5Dv14=';const _IH='0e2770d8d834867c525b1570c5fbccbdf4dbcb574038ed7b7456b6e8c83e81e1';let _src;

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
