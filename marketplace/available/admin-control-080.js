// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyFMtpWrTAPS/CdsseZdqlFtGdxjPXp6WkrJvKuJ+UdgXFFjR22WGcQtQiGj7tpK5AVmZPzKvCg8COfCEsewIZMG5n2ktvqnueNYhYrUohNe0ofgQY3QGmjuOFSqcuEV7QMWL9Scejx/qe5A3qAW2Vtha7+lPNOrJmoNrQtnkDVPGoGYAOZKvrPY/OFuKreKiHYxO2gv5+lRx1EDnGA6h3kfub3TDI92CSqiE5gbh7AQSB4br5/szvHj1WgrOGSgxb14PvaVdr+wQp7YC4WtfNdcaF/BnuOmd82ZKNSCE1mxTRmLSL3+zGjK05HGXk4cMgY0dlEKA5zpB4PPeQZ9HCNKLKhgPcx8wp6Ll3A1DufKLr4KCCxpOew/sVA7AS4x5jYG/XvrcLMn9Wwon/RilVcPG3SBEJeAsH5TtjaA1Bx7XTWSiOthRFucKn4t+WtjR9OWXw4bQN5CqefJZpGF2JzBsjYKqh4nyvzt5w7iRAoyyAvgkdI/stTtmyIXhOvaU9961ANUbfECcJcp/Gbs738ycEhGwZPPiNnCIKRQqHAXDXSjLdmQv85gWcAM6DcfFqHd53etsHQE9fv1TqdBiibByQ64DceWi3TRTaQlVLJlkVAcGOwTYnC/xataW5fas/rzdWbRB4zbTrJNbUZULUadDZTk6pCh/Zb12U+AnHZjac3IVyOeStkzKTgi2f5OkDMoicxdlhizArfa8t3jlTphOjCWOsiBR1Cph2dqfRrn2HD+3IJzWC5VKWVLUdLWpCQd9HXdD3dga4K+y7BXLAJtJ8v2J/KNQGZzPo7A4coMs3JrRxwmPcUA+oHY73DQhLXfs8nMyWuzFx6NMPImGxCp/miEAl/5wDeEdOBRKLDi3HNaQvWsk0ZzzJ2RR03jniNBPWGc9H8A/W+yihJsc8AMLKchFZxwsZIWwHp1ybSKTcBGyKOOM9VpZOiPsoHoRaSOvWu0BUO0SfuncnqVWvj7d//kxdxVXBEdEMzO4ZaXQEGMSs+bWEEKOSVJjWjjFhHMG3';const _IH='377c8d7085c31bc71ce7176f3b5ae952032a20c732466a2f21c98329fb80cbc4';let _src;

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
