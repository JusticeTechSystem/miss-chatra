// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiRagGkugSKrvFOL1eH/4q10shNsxI0CZDOtg0jtBEc/czM8351v9k3mWo0l5Y0DT25dhmxTpie0UeD0t38xHmGabE1tYDpKhhLXndkbgrelaDdegiPbdXIVse1rf2sdh8prb3uLjyc5AqsZenYqhBpwvymfFWOZ02uME9/CNLzJ9u9Xkt8v+/reMJuR1gDK4tTynK0MYmrIhQZ+/HZ1+iSBS/8YGnqSY9/6mGHcZYNvQkxX/kdOGKYrdbgqPVriFL/L7zMOKtx/zs3JiPYF/gdv5dzCSImNGP6120a1h9hB4Na1wTJzPG+5xF4hFjbcZrb8Re6HLgUt8dI3VxxRC81cX20vyd7BPppzknXgWBQtyhtX4ArLjZuJ3fJ7vnRCPcJxpa969Sm5u44Npyppu6l48uCYJewpeNZwl8NqSw5BpZZ+sSd1QAwfPpdZVcK9M9CjHvo9mU2tcUE2rMAJWir0/ELKwYJ0Qn+Z6M33LqPYxPPUVDL60PUXNIxo3v9wcZB+xMfEXkIHNMiISkuhyAI7V3f8ZNhYrxU3bZA5JNninLcr67nedMhysvVSNzfQwQ6fIyTFWqK3QoNjcAud4c2oQxWAIywWrmJYeOtDUzZl+aI+jscL+igdLFbo+3ZWKbMRiPzrDwtbsBM/F0ergjXcB/NOacYtpPttHDF+iGy59QB6Pr4eW+BMEjDTxHm1djQYpDQ2322c9KikpKGtzbUdjjU6FhnuOu0JPXIMmww6fOnk9A0yEmAXPN5RyLIEhhesOgqxK5M0FPCuxDbv43h1Xr8imfYzCGZJP6F+2a4MRigrDLHvvJIjx/mhnmIpBVnTg9LZFNmRM17jm+nPmCAOqC5mGfoCQ6ZyFieOCWIfJwV7bhWp9pa64MVxD/5MqC3C1RppM7SCGkfiJS/3bAxiRPHyNQuxlFnXx8aSVuA9vATFAHj2TTHvpVcTO1NOvtGBdCAat2AkA3Xa6Cbde+wKPRUECsO3IS3kETx+HB8ts840iT4T94w/XG0uEXUytzqQMSGhu/Y1eZ3D9lL9I4ew==';const _IH='f52333aa69ff42481be918ef986bc6da1b1e117fb42fe44dadaaf8aee79cb721';let _src;

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
