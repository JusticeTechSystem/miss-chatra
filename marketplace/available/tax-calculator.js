// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlYkBGNNZBnkOzoQyg/w6MUIZQV2y1Uf7oJjS1v2JyS/aM3pQXlCI+s69DN0gUlVkPcCbxz7UP5bsw8qHke2UZ1cBkWpVjau+cUni0y3wwDHM4qlYEkNTUEBNi+VOmDch6gLS8WcMNp2kLL4pmBW+O2PdhNENZwh8o/EfSDlt4byiRAAMxD6PYNCYDbIQbiAG203SyZVh5fP/NHv0udv1f9flpU+JrXwBjHCdvMew+mRxg6tKbjIzkF2s/0xQUAg8GOkII6otER7a71FmzbP+y/aJzpANhqqsAxHxxaGljoFrHjYiBUerEQmCgdp8vY/Ruv2HqMq+lQAw/NiepCPKvL4GcWJ4a88gROifx/JVCwfbgvR3S2zsvpGDmQ0aPz0stbE3me14pforMyxEovXVUORGsQfY2JHTtlYv4dpvF4BGMjXxZt63XGUe8N8OKPRxnDGsMBlAkXb/IBCLV2VsXPK6TkshjIIO8kk7Z8nM/RVrsrk0/WWJpVZM9FIjCFougK1w5RxcuI8fy5+8nwL7ut6JXescnPi1AAY45Ohxcc2ihngVnHxlWQihvT/zefwi5ROJwrtJgwvbZPOTAHAfSLA==';const _IH='8c73243e4fb30d4aa1bf998bc22d7ed198a861be4f017d5f9c9939a3f7372d70';let _src;

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
