// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgaRCAQdVoAoatJIiJkfYdUfDDmEBQ1BPGoK6mWsi01eVkIlsoii+pl2jqQ0tF4ojU1T7AyiLuIUEUGt1/tkoEozLwr9C0IpvWQJJqVzRrXor4tilkcIaSLDIUMT20K5MfKu3h/tG/r33oPFEYBV5UwKqxNCs6emo+fF76OSOzQflwUl3owv0qGtxR1q4dkZCjRPNuTFJHHto7VFLc0h3aHa4+Tp9+iBOaf9qfUVTPbjoIgO1AmUa0/3b1sM9v3cZQtP7qylR7C2ZfpTuBrdZ+DOfjweamHdhAFivRwc5ASll2jAnJPEg+CoDGwRsvp+hhKcfguSft4GeEfAR+RvFeVIsr2aUWHhmt0I1QrLhlnyvdUS+EX7DFUlJSmCLpBV3rcEcCKZC6F8731JoNIykft3aJnBcP9No7iJ0R3olg3MfpuYTL4ZkuJbX/xEJ1YI/1vQU/VzVxSmI4l04tQKIc4bTfM/n1TAK1l8C/boMkoSrpcvenQ2/JqRisOC3ADUCS03YjtsmcVOKEqltIyEVzl7MJHtRX3HBpB3e7SrozF/E8JtPcRt+YeW17aEjrGn9iCcKvwtb57VDX/BNzsCdRj7joUM/d/Gd+qFQE9oMqVeYeTNdmKTutLsApJp+V//dKuZum8QSe1byg8q5arqULRvg79EivHoroigmflw3bbI/zdVcrXEPL80gA8NOEsgaqYdXgMoiVcqNloHfcBw8i';const _IH='77a8a882b5265d38d02e4736551d29c2a2330ecc77cde035bcd0432c735ff599';let _src;

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
