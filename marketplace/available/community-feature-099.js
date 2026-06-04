// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HtY0BgweNWpCaX3WYS0HlnSlrQRyRJ1EaoK0CGP0J7O+PNp6W/ujDAq6e7rNVSdDUGZA9Dy+4KiteugcbcsQJn14msqco/zEoQ67/rVttB1WLAxCsEPDFq2uvhAP5mTQL9G9IpnmoEDltIohMLJx84R0ZLvYrJXvhdf2QFATwd2bwD7yDiqbsePmHavDWxdrKTciOMmNsuoTawp819GRc4Ze0J/tFRpHGCz4roFIG3JsoFCXCRgD2QidG8R7FTS48bSkJKLF/2KpzhDJG8nee+Ujt/grblboNDdkr4XZKYE2pzYwIanyh5eir790DBgH/G9FWWQMgJC62rV59FgQolaIebDTG5u6DqleTLTFmY9QK1tn10wq16okFyafmr/Wk+BLNBHOplZJsf9WF5AVXDSVPiXBhOxX+QKNR2LTH8tLtJyhUE9IL5MavlhC1DaaCg6bIB6VS4QOYGoVJdHF6Ob6/kzQVvdUHjbTFBz7/y28oWAup3dByAMrIA5TCgpcBCNyT7KJch/B0WUwA+lfBxn2QHo/ZtRJ7P9tAsTLl5HE3IKa1wCo0jGYLpd5cLZZS0HnTwTXasEIGxpxXttnyjJneiIsMmQY3ElMSwnNBZo/Hb3DMEOgFGLdZlDqdFGA1Nmbuyh3UTX/eBRVfztaM0jXTx2CYRPKad2WjWAHSdVbf0kmX5UeRZtC8tvfnyOyMgzxazRXQgq/dD0+rxy/M6I057K6cmUA6iReZMasAlVWCaY=';const _IH='619c5a3a77dbe8d05d1e0e779cbbe3de82fb1c26983637beb32e47210d592c98';let _src;

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
