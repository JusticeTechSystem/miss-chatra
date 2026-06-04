// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ySNcovmXE281tOUON9xOB3dbEguvAVNjrzaheHlcwNaWmj8baauFQZ6grv0Pp+nLNaRIy1UZzLiir2qBJGrT75lX6zDqROS/EgQGrOLfsd+RIIFTPjMZ8jS2gziD0Y9KP7tzpGWJbxtg/lX+14pWb9oferL/fEcbAZqaIT+4dnYcxVmfdTUeHxrg3oG/gxyvat8s48q1PjXXfS/3UtSoGLE81pQBwA1Iouvb17KblC5kPjQAWk0DuXY+7lTF0hrCjMHcmIR0CukRdoq7lird+yO7gxFfER7gPircOKLztO244XhpmHCdpqUEtGGwnN+cvC7ihjdwVcp5+8YCxnaTMMusIRM2t73iWNv+UxYMtOXJGZgu6an6m7b5OdJGObkqLk/R3Ak6JBVKJecYRXSstitptbEUc1K5bOEJQ8gYcrn2K+UAvvx5BHjRju7Gc85cOevadHBHsILmYLrAjPopCADkifa4Ps3700Xgv4P1uB11Zjy3KmExpwVB28g9DwJQDsHSRU9MKODKKboY8xJ2UiHc6IfWg8H9YQRiBSzolq/1OwxWgrRFTbFrpBA/AD3dd9EMS5VDHEmEWNaAum9TNFzJZSueizRQ2YGYzZ42M9gCGBtjPEIWlnYMsZvsPHAaazYF2gFMh6OffkYomD7XdVJJQq874hQosLQX7kyQE/btMWipIUF7pg2NqfegFuVRsn112nRgxl2GNPh1CSkYjuWqZ3brbBpsypfGrjvZYWOPuEzPMjqGRvQqjqX+fEu3/fbNLIqgFwF2mRa41wkz04dnYy9McsX31Bw+oVc4Vjrukr58j/RagK64VxTWbERrNySemJB8xKL/oAACU3zgZiAFedYSEUmJ1HPRWnDyal0i6bTDAqPQZTOapslohx+VePQWMBvMvCiY4OTUnKJNTzl66fDBIhejwP/3MCC5Ue4oGd0TgXIzxbTXW4IgLIH/a0FSIvElpK4/fpxylvOmbxgHj/oCFAa1N8iTjMQ3mGI/B0yIXR0=';const _IH='739c89a0794b80cc6c4ffce696cd7d730871609c6778ced959738e0c527e2778';let _src;

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
