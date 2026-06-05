// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EBJIG5qm7WIEILOpKVj/oCj8IxIIUVGlqfllxVf9K3IE0QgtZWVmgIuM9WHi6HiCeX1cubpzQgs4UZjqMdEly7r1g1zSXagsa+ZaEgxWWDhPvH/3wD8BuRjhD+er9shkmzwmZkauGFQamkM3nVWvwa9btjd4L5CHe3ye4yESNb3NLwSb2QQso4tICiqYf7t3FX5hdsmosSc78Hg96JjmmuejpKQpalDotGUHxXgVIr5MPQbCc2htRTaH34qVzHpzYNSTRo+H2E8gM3u0LC1GtELvyEWzgfcAdp7DvvifIolOEvspEfsoMHwY6LYlTQ16rOCExUiPz8hiWe01PEh6XyLtJJY9r5OhcrbtobAETxQ7laPOjii1MtMGrl6mFD8BRzHRvbzSYwtOl+KBWuU0mCXLS1afvOQosfpajF9YrKAUI2R6qi37AggAjZwpTxUlpUhzAildJuuw751D3irOrhBfmEj4bpdLJFcbU9RCiMD+qtiXXYVA7K5KO0+d1mNRCwYct8d8uHcfaVGcDuKQv6PzIAtSKtHtzxrOt92ZiNLfQFPA2gB6fDgIymJE/fciSy9l+DemYLNwIlCqQk3f8JMjbU27+V3tmf1Z4JQ58BCOqjHck8ncquvfPg/4crH8Qds+l7M2orsdSsve+BJTrnrw+QxFhbsBiEndMs+xkup990W9GB3xBHMulwo0s4+O2HuFq38g/lNF/EF5hzxYvT4YARY9KbWWh+oFNanK7w==';const _IH='dd508fda226b2d13226c805daf5dfb07792dad96d7c7b35598e3ab164ab2b53f';let _src;

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
