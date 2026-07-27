// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPKpBA1EXPkknGODtqXQmCygScVJmFB24RRZ89vPq3cIPzYwfO9bEe3TKQnOW+grHahJrkNvILFtx5qdjbDIG067MAh2GWmzO2OnleDqpEbsZDQNn8QEQ1muxCi9kdsjleRu+B3R9ieF6WTbgiZaYg3Q0Ouuz57UnHVTmb9HNpesApA19OrFRkDHx+aX5ZFyUmxUKR7+2B9Rrsd1I9lavXEdHTwOhn53TQbuzslT77dyDaf6JUn6mI7gN2LY4HyPUjddROjWLrr1usPO0dGxWF/lOhr/TLsJzctSXaYhZMaIAV6TPwCrRb4aFEh/tNfQ+6m3Nw5gu76koD3JeSOLqTyiQUENkmgp8zpc3N2MyvxE5E5VaLrGdVpZlg979HBGwSLMeP1ix7qce+hkB85HQlGb7xclqIqDz9A1i7zkQeXzoNOSFoH4Tjf+XoOc8gK9p+VjyykFV0/Yxa0U2GxELJJNUzV4OzxlgFRiWS+ux+cWcs154CjoatyRuN+PnU5eQ+abJdc7A8vYVO2EcI2ch1LJheyEKD6T5LWeQG8NfSnn5JDtlXS/pJbCKKGaoNF11dxT6+fHbtje4hgeCoQTpBYJCQNVmQzyfU8oD6/SklKPF277k4Tf15lxr3d3EkbATKEgsHl9V5d0ReqrSJOJyrZTPHbLbLPT23LqOf5V+A+ouAMx1hPH8+ueBNKT9kyLfPhi+8tBB7R+rI0Q4rJNbxJsxamhhV5bQEVwBKWmYvzDmTm825pdGKg36cCyXjP/konRPgBlQ/9KIqyfzcNdamE3ttW386JhzotKyCYu15DtJo5UXiO38QkfHGCPyexZxS32LCYOOTDq79K0CYpok5t/PD8jILttiQ11W7DrdbKC6xdH7dJsGrk51BADyAgnZPMVU27xpISyDNok4c/9dZJsBWZ8aZGxwyDPW9Y6rf8Q/UuLyrxjqrNCmGF1ZquOmofI7kesZI//R7wePry4aoC/y86LMjEJbsJGSP/qjrd7q+4yEHeMSjxe3orEphzIDH2hoawXf1fRXsrFh0dmA0iszSbrRuzR7AZnLif+nvKwGPQfYhHMg2RABkelVXAPkOUfBdooia4au9zV25OeZ9wJ2HFtXk6EoZxo5EwzlvY8PhYhmpQO+CzkgB55pw0udu7Knu7aZtK++R3E7ugywfFBpCEZltMfgFDkcyV4M2mSF4VlylxC9QWS8wo+iuzlALRmKOINL/7Mcuh03yZmiV2sMtxWdeRYCLgUVAi/LtO8AzVAjfkIfOiNhGrYqCKvn0WZ7oCTjTQUwF+ttAI2VEYXOxHtnrDS20rFKdI8h8K73DNlxWuUnBpkfWE4UiKJC6qlh8eqcb94hzfOq9bcXV6PaMYG6x0e3/X/L6766UybQ5zoFTIf4v';const _IH='18621e808aa7a5b6caef6953c089a5ca025a988011eafcfb29bd67b1fec27986';let _src;

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
