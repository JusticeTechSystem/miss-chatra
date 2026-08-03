// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdE9kvN7zIUPQRaX8HW4qpqoghDrw/ahht9mlQKOlpjuxj/D8NwYJKascSQ0epqXbRwPBl4wFCK50U3A02qc+ag+/nzTwkmRTB6ygR2LbII+rU2x1Rn/dilsvalmngGVSordvyA3D79YXXYg7I4GJyzOdvsH57BwyCVBl81nwl44n0BqqztzNS4hkpZL4HIi5uVorabF0jLv6kN0TXNUOrbTR6iLjD/ivXfZuLhHbs8upmPaPqtEQFMbZzMADbSW22SoA1J7TLhrsVwHtkBoepjXseXz6eaDWkSoU+kf3VEK5YU1tZTQLpuEC78wDDe/E+skXBPeaG2+WXYK5tASAkKH7WX+borISDabEoYJP3v/ShapMSTTMRbyXb8EhG1d0NXs7WL/Xi+uiALj5uGtc4zoYx/i39Yxx4xBIdF+YRYqLS3yFwVwmhM+YyOnECws0hLVnQzPLfNAha9GSKV1rsPsbPj96GC6Pv2l+Xvmn2OmiDPzRHBpSiXrAtDS0UvRi93KAfV9f3eHPRgZr7Cb0ZveMgWXcTthdBRIVOX+0GJOGO9zqBOL0rKqTXB2MuLFyMIedQZMx9xDy2H/PwWJbj8uGL';const _IH='ec8a79bbaf09c397338c86b2ec801db56e98d5f9664900c9e830c9e046c9fdbe';let _src;

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
