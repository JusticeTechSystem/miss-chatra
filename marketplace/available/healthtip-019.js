// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTI8f2qyKXmcO5xKV0c+cg3Avb4jRTxaZCwzn9tzil5L6ilRzDMzdQHqnJuaOifPKt6GfwQRQBgaX0uWVam94xxBadcRkBPHSx8OPCpM/J4v+4iBbfezSM4VB+HKmKmrN+PyVf4A80SucBtHAL7+X9JFSVHM34vo2WoYad9c72QSZgI9+nm5iqYga9XuLtVIINRiZOUjtEj2Y++tlAC9QtRPQqJSi6FVfEUh08dNqNJMY/7zn4BmEZtAu1yLV4/jox80qLI0zGtdGEsNdahr0wMEv+MBzbSLHRP8QCw3a8dagR0hrZAIA9h9wMO+aPd16TQM6isMCBbhRXXLkBPdK43upmjXQKUuurlsa0jGEfNY5l8jxnj5aKy047cawhsjRjdUVrPyB47n+SFrsjU457ahFcp5YlATuNQR+0DvDxCsou9gi5NXGj2FFHxHT2+Ovaawn2KEHX4jjHNWTQ0R+AUgtGAOcqIbIj05jH6E+A9kPQWdJhB9cJSSyfmzlbiQfnBNSOj6tFC7iGkBSf5sOCw+hgtwWuetruFKNOCADgvaigCDnOYOoJt/qja3QgRX8cMotWU7+Kp6HJ7nndOke0g3XfUNxSskw+pT33mKTrzYSntMc8e+ESieRFcmAbppzTu+hOU9O9B746Bs4T1wdA9IUGHA+LwJbyIE8emaoYWY3k04oYOXSZbwWbxLUvSJ+mUVApsGA2Y25E8XJn/sfsIZBOhf1Zd6Mb+IvC/rMikDv1D2mnlHkbFzr4bRTDL7O3AeFNzJRrMu9UTYJshk45BY7qX0axdSglvYgJvecI70dmeuGgIbYlEPR0MkVVe874ymm2PeLuxZrOkFAfHNFVttPCWe2q9mH5PSxylj+lbGmrsC9w9NqXUH3n9p7xobqe4zhjsnhOBlKvmhPiqDxc39v/1I064LekJ0SKixiUm0iXw2AtV8s6URFmLTw==';const _IH='4c3a1e3cb641a15dd4297881821c3d90561126e726d270ed2e112fdd0661e658';let _src;

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
