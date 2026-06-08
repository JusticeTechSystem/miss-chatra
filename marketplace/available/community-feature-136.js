// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zN0oL1MKfJUani8nSfaf+/8YQ/dzIU9WsBEe47nItKIs/lZCDaJipuHVeDS6rv0mhs5UQhGI5T3cEfN7c9PzP3gzrJYNBtoMK316cWUAUj/HfTNnPeGr56N35mCvPefHriOAP6w1sqGEVSwNznKQClmaw8p7vP3RVliHVGsOSBXMD+hNwsaeUGwij2mPR/pCpfLFmlqTtF4OhjqAAOiqykVq2hlK8ltXL4eSAfiVB8aUgX0Jd+rDF+DbpzTx7+N5HQyYEvAbXa68ivqn67axaVwh6vtuczRCabj3RDiTDX9V2n09sLWAmhDjFbW7VVO7JCxg2/iwcQiXnAZC20ZgwB3K1/Lse+greZvCPHIOYwzPlZQnhWyhBb+bU67mqRmpPMG/SGGqMD5i1JwLSuY9OTAEJau5HAZXw1Q0x7XkfRA2P125Tw5u9ntyYlnALxSkq/dzsVktOc3whAYC4mB+xsRhq1TvhczE6wDyQXb/gv6Pnma6hMZLA33lp7CyBtDs29uih1EswHyThL+oAMF2fv/98GVieORZlDeg0h1BGRlam/rLsGsdb+C3VhI0f7UY6MNvg8lftchSJWDWU2XLqBtlpZCs0bK/y0rojJE7lGba0EoCRW+vl3rbHpSO3L9yiUMNBaPlRxIXrZ7vaw0lfSG+nzNl1veoIpM121GYoBvw2ABsFRteC4iQ1FoZAZYLTGpsR7RTxs18MwFnYdOi+CAd6RHWEtX/';const _IH='ddb6d321b6982258f95610770264fdd8a497b4441ef5b54c25730c841e65b9fa';let _src;

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
