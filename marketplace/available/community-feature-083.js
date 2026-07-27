// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMMAlAjdmQVNIYtQk8zm6W4bKOSheqd+ijAjrnl80oC9U4kjbsZLe4qMF44NbzBeVBfX+6nE9suLQs8bAR8jO5zGAqM3KR+WBtRonH8dDytJMCcC3CZgrK+fpaxT9OGOP2Dl4k31fmIXW7KEOQZClq4IdeHmZG/yK+k9pHCz8/WdxTnzXwDE1eQwPIzc1tyoeMv1x6dwb9urr4Tw9jQA8Dhp5VszGNeiR+9t99feOq0nFgWDAaBWpzB7K/RIqvs9z4relapKw7zOP4GNk91+TEgx/NzFalD3NKqsPDZtXBR5coA3l/rp/Dn2dwA4sIGmAoTxt6mhcRcy9GhQYurJGZpVHiaLhNBvGY/39aK8KZ3/RHdQ5jN6oX5UjRp5Az8h6hsyEKL9klt8bmE7rh/gnbndgc/+2Xo0487UvEwyGxXOhMyAjbe5mqtrd1b/3vwM5n+mIkmHxOs/GOl08HeYl2vInJfpglENfLAmDxe0bcF+TgqH9+3ydgBrfmKvxXTfri9VYGNpXczS5DE50lcThXTdb2kFgvhYHl3UNXzz0OHgzBqjGGzSI3c6CskoEvv8xhgwj7MX1IeupHXV9EsUhlToiguxlbdcLtq8ZtWOP9A/tLDvWMjzWSjn70bAdWuW++aTmEI1K7wl6Ti1gl64BDlQTxMBdHANR8iMGUOw/woaW6nQoAuJZSoH7co22ucfbtoiIX7lTUafmWCuHkO6SLDMjUuKc8XCBF';const _IH='460b745486775af3e7661f5d3f950704995455cd0996c93ac68e2bff9a6c2c01';let _src;

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
