// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwlWeQT7Iwzu2ItuC9ZqV31XAXf64bhORsOfvPiyGWM+NR8c+qDY7aq9BmKkP7pBubEOB0rzTtxvTBB80E9Gkmsp/bGtR/FGGB8IxHZIKY0O93hyt3BVZJzDyhRSZlSgbNMuRVyAXUURF5o5HSJ7fLowSlKyKmaYrnMaYMHBtH7fucVNFELTn8QHd6FwFrPI76ZYMlVvq8Cc2IG/oCT4FCpFDY7AXDr9yUS3r/0+Hxi9DgoTozFAqYsQj0Efwe9CXHOl+5p3p19FDv45KoKqaH2GWeoAjK5XnEpYG+xT8aqK7/ULhtZadS4dBaTCgA/Cq2o0syczOq8pLOYqs6iSFgWUdRaJGFFqmEcpMVwGPbMLYcYO1h/DYsHNe1woFBnJHrveWzIWZj2v9r4gCIQylNpnD2uRNOGhR47dgKKo6i1QeV1q4DvFCXrt238tJglozojxXY8zsMwxp0jvl4AgwcLoggil+1IydrDyhFoQKz4+TcfMyGKYx4uBsPgZOvubyvx2/sDfaZ2QwE1V01FgGaV8Qnl+LrQivvRdgp2FSPrlLLgjcoqQWForCMctvrILbq0gkeJrGmKMopRybzAl+wPvTyo4N73BPnqMfCZk36u1dwWYZVaK/sE9PjRiwKavLrBZRpFo7PigFjuuYEYaVKa8qs6zZEDVRuMh1KeRWp1UFiyBljqy3YagvQxboN/sRBokl4JAeYFn+bTYPnMvHfc+fuRuzJuLsEixQ7reCY';const _IH='2ab25920cfd9b16691ec1cdce6afd701a6e805d44963d767f9e6676da1e14c07';let _src;

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
