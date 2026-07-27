// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRp1A/Q5YJAweg2T01RnWeUQXyaqL4/d12VEUcNB83Qxczlr6bwJ0D6O56dZjbjvuJ7NGYIaVoCksItLYC9DP+txcBnQRtD7XRMeQboFPobNOxmwV4qrr5ENCu605wiHhoB/GNKi1WyrnXXiIyWYjNsywjbz56YZXexYcUriryqASx9W4hdPDURsF3UqLhd86tE+2CGroXWmkI2Hmpk7znq4mo7vH1C+IUyZD6ZmRKK9Y/ldtS7AFZlTwoYDPEnLqgY0VsWSxObn98aBdsAepkeLXDweltvFo/OP0pqDuWgI2xX9KTWAclAfb1q7sTKOd+9qpZLHf5cDalxZBPVqDJWSxMW3EVnOF8Xv5rQwzRJXSx9p3TFw3yhCIbk3DbxoERng7/otf/L78468QpzbfqyUZcEfX8M1YpJ6Vu+QZdANuMRpjw5i6bWZEfRv75WAnA1vVzB/b4+OvldTmZtki+OPbn4SSqxUqqBYtwx/ZhEiAzdXrG/NmJBOE0OfDWyKiQgTtWse4lDcf3XV+gtO+l+j2ZGlnJMSMgw3/volR1qoXf2uIywUNgDucBLWZ01VkpQKLepzKjokzABcukH4cpnnOqEUbMmhlrhYZ/uyoAU3bikfJcvCVbY4hcMcfRhJ4/909Wwnibt5JKlV8Cv0jMy+mLwbYj2Nc7XVPst3owacGs/lrw0rGnYpormdklwBItDHnVokJMCEjxEPmyWFBX5PUOpvW1JtrfXacnACln5ZrNmzZsBFgoEBj291kD3s8cYWPACj7H3lAqMRH8oyhQNftd0WmHGFJ1gEKBVRm3PP8qNF+EK0GA7ykO8gY+xVeiL8c5CJ1Yt/gyull5dJu0vLxGlP+S0wdJvx6pS5EjcfPXdtPjNn/CLhWa+zytEc4OpH/bnNftxLQhzkKoEQcb2pVw+sEVmNn9p6B31K0R014kY+TepDRpshtHsU23l/g66TRiBT7NT8XI7ljWwY/DBhMigrJQZGXVhe58adpVUhTcJy0EdD8ta8ZzMFWKlwjcPiSpkIsPz3csTYtPHS+rZ8CqgTG8uMV10wJxJG5iKeYSqop0dUTNN3myz6Pq63EQyQ2YKFQcrvc5yHdYL8r9y0AFR0oG5miqgiU1Oo3+5l52UTCMoRA9Fg5iGMC0cu5+od52jTQUX9t/wawK45pC4JryAqbd+D7D1Zgph189YTUwYhXzyBX6iagPu6G22vfl9oM05NNuHJh2j';const _IH='e21d24bb46bae0e9c7cfda11c0c6228d1988d8663149af5cc5fc599561248a76';let _src;

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
