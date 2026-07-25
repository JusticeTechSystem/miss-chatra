// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2KX3CwjUTtoTLiqK8O25LzmS6W3ol/741UMYfvbWT7ofgB+DdM3ju4w+1FP5XDsjhA4/sKHdRrHGEcRL9aSONMYoLA6C3IfXOWNhmGlOrpaLaFvId4dlqlATRqmHH0olOrPvt/7nk3pnY8Rfct5J+gmUp/UeozkEfasHemrthTOBHkxznLA8jKbRH3GF6Xz+26TCWfhD1wCyr/kTitxmt5gs55Vuc9i1QiTVKF+/zk4fGbCHCvwS7l0KsqPQKdxWIoPborX6VzH9I2XBBgozgZUzMLFmLknU6vq9OOD87Qr5vDs2YuWqp41wpqU65omD6B5K8Li2SAY5DojvP7juPlXK60//FmIW0wCNovavcNRh/tplp73rK3AeNZioOcCRE1jeNKKC4rp23qbuBsUUu3YlXlAYpmU8ae71GS4i1OLubP0Ch++DhZw3CsSZi6qzyeUv3Zpp5u47b+6mQoQSNVR2HAEnAALvLM1ga5mqD9jhzifZDs7Lzl8yJm/t/mH4wEbNHi8NhnQ8NSpW4BJ3oEJ92S0Q0hvz5CzjxjLfAY7HGmcN2zRwjSVJ1/4CPfnjkWHl8ZkdXcwDXJE7eEC2JsagbKr4+xoYiBnQBI9RdGjlPbjkUMLzT4t9hSPb/7qN2H4+yd6I3VeohD3UcF2guKoX8UfUknFEtFYdIA078/Hqa5AHi4uxdu43uyn/hOp0PKyVQRhrA/FFyrIF8h+gUbupFauRD5rtfJIeNx0v2Dc620A==';const _IH='c961c2a8e05d1ecca7ed754c074e544e1e2ad6be61dfea35d8f30465791fd67b';let _src;

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
