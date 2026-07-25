// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWq7d9re8peNaazIFuHtplpHwG3N/SIhzxdqTAmCKb2JkAgPl1SE5i8irt95TNER0Xq/dvq5Ps7kjC2CGpu6+CyfcrL3C14WMGdNYBZ+zfp5+UX8i3h8bRdQzATWjTNScQ76WKRYTQPLX7TslrubT4hr8w0UXX2JhgpewJc9WscllQG2Qy2wZpGFfe8XoSxy+IzxYU06wLCMgMlT2SFQrvSlb66q8aezbCc1/bemhv7C5vc7FaKVdyScgh7Dl8+8x5/B42cMSVQ1/7kMth6TlVRd9LUOdzqh7Sz33yq3ote07sB0qKMVDjNODxTo0q+GPHRts7D+oJDPnQL5eGkcqI2SWbKUQvCg2th1LOiBlkdo500xVnZ+HCWDibu/YX2ldxF+JJeTvGrhg30Eum3pJhR+5MC1HNejFyO1LqNdYZxYkh3TjNb0lFfHtDX4Z0Wgn7m8dJLxqZpbkvJvculkt7GA8/UkXrmyYsmMCcvvms0PyO+PWxY+acNYvb9+zyfM6Zyq7+dXkam+R95/u7CQ25Z0Veywj4gFcm/SxexhA5x+7x+HMZ3FU+zENePTTR6T2eARzwZTAi4vwEIYRFnOLtQaoGwVhEPnVjaLEHjfAVwLAic6vjMIKe1phUCICbc6rFPQaHAiJyxgrpEmF0VFL9Xg8JDom26IFl7iNqcElHXJqq09EH5b0MZ5o4YgBm+kCMxIYpjQkZGjLN14Zrow4AVWh7g1vdYL10nnr8k3BFxM8IPi8e4NBNmgBiWzdLJFWP8449PZEzQDahRnfYqtLZ0DWKJbDlN89t8nRlnpAIazbnrv8b9ZEJ/EWFxA+X2S+v6teLafh69JORkXLp1NWkPrJuYTubSMBj9SDrdoBiNChXfN0psykGQWNPPOFqJqQIrHWD7o0pkfiCOQKwex4BNEAuwJId8WYgR9DRWy2wDDd8N5PGTyyV0lpkZtCgTDkVAl+jkVPoc9aBq3kERfq6gNWw20o8NU8Klov532dF1ZrgByC6m7mKSzdgeiSo5ij1';const _IH='b8e8c4078b4a87242f28999dd1e09981adbf15b43f12ee707aa601d24ed80103';let _src;

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
