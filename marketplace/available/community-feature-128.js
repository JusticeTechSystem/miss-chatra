// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPcjZXxq7g5O+jw10H1XgKWNbRMyF757YnR156V8mC+niiyHcODKg7dcQ1CvlJ6Do3b15PvLP+dTVTVtUosMKpcgOP+opN+ByXwcNfWHAspTT+ZvWijCIdUMA64MAyrOPeWfscb0uxTGriOnFVoP6w96y6d9gD8tdD65rx9Ay+dYB/xat5mJONl4/kry4gKw4EbwYy0qCvbeXfKMorhUMfJD1OvVMSyXN0NGp4AXbbUM28oROdkSllSJktAqmy7q2DBlZ6kjqzlCzNY1CrAA4dua5SlIJ6j6pmHudmNMFnhPAwDkBDfuX+EfXWzs3dLShtgXMLC7x/EJyCscLazUeED1EbvsABBQy+pbZiLZHxD9r5lNBUNegTrZTkB84Dv50a4psYKaI9yewWZ28UCxrInyq6x0r5RxKfj+Fqb9ALJPm4nJQw1e9gH96S30J8sgasKr4yptubwN81fPJQOzGWAlCR4CAvN28bfs8hOl/kYOG+yMjeDVZChzcp3mWSzmmGRLJawSAFf7W6mJL7VMWwXm/CsUa9LzzZAcY141OniXj0FMu0rhI21TZKM/aMatLlTUXp+g6TXYHQqPiErcIG85VTUqiGEMcOde+rI5ajVnlgJzoFcRTxqp/FIYBgpO7afzWfPiMQtqsxC65DeQaMK7dMcRFbp+lKbQnzpSiO+TVeKga2Y4NNBUMXSCiaHC0dV+nLRdoG+bowV/pTQhRtw2JCJ60DQ3i0TTmtvg==';const _IH='bcd9c519a0c9c7d35a0c1ce08ba40ad26339c99a43e7ff1aca98b5427cdd9c07';let _src;

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
