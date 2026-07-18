// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvMauOJKJRvdBGjHONOWq2Zr+D+b35WTl6U4iY1m72ax8W0vnD85/utOoUDM0vryzNlCTA9/TbyLoNzDT2LCZvyCgu0xf7eSE0Pq2+hDMJKb2htknPQv/CSbi1RITdRA6LD5n6R4lHo715Opvwhg/KOzIDLfcX47o0tM9WhoCGahqmDdu2r3oP+UfqBX3Td95++uWsjnT73RhcwMm7m/F1eU34pm/OyszNTizxuV6Q7CW+GDVSmyy245wzgLtQOV05/e8zYfWq5iBvPyP1lqOGpcfq5bPDzIPiCikpoK6V+1maWiztoTT1YKdxiXyGxGida9cRMgFZ/QOG56SGFNXJ99Fs35HJqd1VafNe1w+dyFZ4/L3T/64jhNleJzAVZpT13KWShpEvuJCQuIMbkoBPzmXDE+bi/A4Pb2R0bP+Rb8IvjUmBNeRGEcbozx7Kk3cFTFXBDtldAMx4Ya+ptW6SZLg/n4RNeJGk2YCgbsuRjsBKBiaw3wKve/HsAFXjDaGpTx9D6y2R5kM3YFBnleCi1IaqUo7e0sPC7fODlT46doPfEHJPUXAsEp4yP73EVLsG1l93tP8J/3APQQ==';const _IH='85e43318a57887adc3f18c119778e3ea1b7c6f3c6962f5c3525301edf009cddf';let _src;

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
