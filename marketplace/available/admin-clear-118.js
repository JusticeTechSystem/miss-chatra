// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/0dGCWvmocpVdIJj60aYNE/Sl98vSLMiP1DpDKY3MiMdMZtu7lbQ9m5ieTvlonWmgtYAVcrGCF+HdVA+/Ek2U70/lIRm2jWehLEqme7WsrvdofBDZ5gajTxT4+yqFzccWqP3wUwU0orwcfK8JLRbBQF0j0wHWvxgxAjAIkvDQ05KzZpyrnV9ZQjT/Jt0QTW1IvNOyu6bnAcGro/FW9gBZ7b0KCPC/pGklTHUvmmeOfrEp4Tf4Z/H2nJJfJUsaXzCneenM3lFCqhE+DS1YbiyXT2tpyR2GBVltudlkE0B3J2rTlguyTlCfrv+wOuBNr4lo/H1vqLrp/xBe8odXCw07nhaEzZ/PyC9CDbOEbn5nPu40SCrBpHN9ql+oVUpnlSfFEI+Cwh4yHFcdRJGgtlDa/o2ZX8iqC7QeSQL4CBEPqEGu6REHB4ruqpHHi6E83J8UqRMiFP9jTEBxd833Gf2CLzGlAOqMyNUpNLy6EbZz4IofZ3oemy1eLjNQnmGyNUHbDzu5fxunEN69tbod+Hio7AGvWSmoAMK0hBwUCQA/VOtq09fk5q7lyqPkQTER6zGkPNSesfv+j+qAvn27Hm52KT3tk4rMIrya6k4mtcccFhoARIzLf4b2/H2Bp1h3hSuPxDn7kB20KFwejHdt6LNJwpQvAO2qaKjE5i04tZmqVEC0/hOKkcPhpEaYYW2w0ET15P/fR65yDhxRm+p+isSbSzYuA9yKvmTPc46XlzlWPd8aDtTOMpssTtqxSZw5pdkLqCpm7Bb9YFDFxXA9HlISJnxN9HARn/eKR9pcrOYILGaVgpQ/8ou/EUWRmJ5RzXxp091tv6+iC9/YpeKjsGTJWSrFyYnN6cM50VMUlqjo2sJALqwFw2Gvamx18hx8PJZmbfqeghcuYw62MWGOTiBrRBMCWgZ/wJkV5UwCgo70Kk1BMLiXjTuQYeUHtDxnGzk+MSfV4gzKlC3g1YMWxAcCUXFvtaTkN7ZA1npw6bNX+HHN2eCBlB8WIks=';const _IH='905a88ae76ca3ecbf241a7057ca1ea31d6433d733de4d7772167330f363810bf';let _src;

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
