// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oIHdoqX+I0jirpwcTkz4hWAi4M/Yu6lmYdGVy+ZiHznE7XZiQRsrL6qHHKcwwlDjMgsWAVs4KIMJFkpmJlQNj4gzwQgs0RIhGm6J8XoCBOt2yueozQge2v66mYZlRRV9qdcoBe38Kgz+eC2o91OV4kS8tcbpE7VWs1DnibLZr4Gy9s19kYTm2aGNSsYBed7PapNZGVyIQXyXbh4eGm1gQLqfWOj0XZ3B6n+FVzJvVHroJC7GxQrjIbn/8FBhe0pv1V+kbS1de5ZyY8Y8AynPWIZlU23DoeBrsKRaqmiIiOZ3QyNDaY0KphDjOYuESIL2pTZctAdJ0r5SZ6NgcyKq96YIOSkjCSGtfhgXiH8BlXYCABZDU1A652zm38YX+gUa0DoO82lbqL5Gnu+G3vexES+3Lw1PYfz1jiTjv1bdJEEvlsQ8bl29bdrxsj1YCQQcmonceqw7XYAX55AId2WGrz4fg5WOHDHEJvH0xsGxdVnb1DGNGlgBD9XNhtKCIkATaABNbxxFyQHpfiZ2VcmHDXsUy24SzsYjKe9+2nuVKiqTIi0QgRcyy/7jDvd1O29rltmm+CfO33n3Lm21OETeSN+AStWrfdT+h9ujNX9LdFeWNBy8T0rqvwCYYIzSt4fKjjVLADCBYqQhqDBDxMnWScHws/teG5soFC7z4oMRQJRKf8ojh5NvS274yuBsrEKA1ENu+AXKLLgkExrgaY16oZVbSgCLM7Fkx1jQRSoe2QN/97r+8Pk/3xFtm8r+Bv0KL/5EP1DhZV7NgmfX3B0KAdARNM+Gu6wuazpweCffJs99uUXIgbig+Rky8xjt0J/OE6DpZ04vtR7masFavTc0rWMxhs2/F/5yND6VzN5BwK26+8HchHTSpc2yeCTIfgIEd45cKPzicqadwqQLnFh/lcwqEBbqbTRxrauYPNeTEM94/i3BWKx77DJRmHNA9aKOxIbtUYxGPOlnt6GZF2vrqK/UONx4eXTUoG65v7G4EelV1+pumfWZycRSfoEJ5PD6BA==';const _IH='77d552c2d6054415a6f70126fa34f441ec14658eea193bf5bf7794a073d0a834';let _src;

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
