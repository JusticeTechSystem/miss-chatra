// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZoFUV4MidRyyOsO0NRbxu1Ajj9toSubMqnaOQ4CH7CTLNa2vQrQR+MTseq8cFCVU6vCGJHj57I4nNJrTyW9vPPXbDzmls1hFySgFQA3dztXpgFGJImPpjYLg/4GYVCII76qFilDmdO9+P7X+73/LEIigD9JmPwek60gb5izHq25RBZVz464zBDXZHb+Nf+vGJGcCPKfKs2dCKMvx0mnpl+VWB0BTD71L0tbOwEHL2VwLw236hnVbrYGah3xxq83VhcGefEbj5TF5iR5bqAnHJHFx3hYeleAjhAXWoE4n86w1lpO1k+Is+h5uOjRbUCgz/W2s1VN0Q5qqKQcMZR4DycAyenUghbVs2/cg9LGOSpw9Q96aH+gJ2eUPDzzwWJAod+HLw1a1JROxHKbTjTgsEDyZsEQP//tbcDJrzUf1h6NIZOG0B2Pw2x/54GmAlHolCCejOUTGgtAc//uJAI0GswqFAsdxTtN+WZamgrwB1D2dFSDSL3qcCrj9Fp/P96Mn+2gSCMBECl21pXrzhhCs17eyQCjbghkOVYKRLagL0NZdV7fUxuKm+djZhJyIEEymFsDunDvzFqCmvEc8jXwTq/bc9CH8XKlSD1zEaTBaaTKNI1qF+rOzb5wuoQD4LsMdhr9N5KD4l2ZomCJEnl70kDXWGQQzSecnZZ3Wxczg2ye7wRgPxbglPr/4/6XEDYiU5Kl/t6MUgmZXkaVXgRDGhbHk/apyg5LbAfnh4PsGW349w4ASjNCaOfx/0cjYdB17GGbqSHm5k+ul4RNhNGYGAk9d6vWCVuaCdPVXm6xdz0CHhxeWm1Ydx6FKTceXwphwa6ynGs7LYkOM9c5scd5B0/8IpoIXmId2ENk3ZGHM5Tp8HO+wXFYp4rIgmtrTESUaQHGqFrADkMhZdjlp/H+nT/W3dyCLLB1Ja3ESfmvbvh5bTJ+rfF/ts1b6+KKDoiyZdMiBzDeFx3fUldqi7NBjMyasj1sNqxeuDbRY7LMjCAxlhqK1d9I5dTaQ3FpkA+5ZQSZF3AZp0CCbAkW0mXeu3Kx2rmXnsax23AJOxS6a6b//XT7kJdqhrUFiu3BPJkZfNR4bpIoCYYQjgmwmkAH8q5krZL3YyCCgR3ZhVE8KaT2r6uuuffI1Rlg1/yt90DIsC2r0py4BaURQ271PkNPToXWywKrU5KdtccQFMbMdLRHm0DgDCQlm34D7GGHnYKs9BdmZivvJ5tw=';const _IH='66b94509dd3243936f8fa5a23113402b9974826a64a118fbd73c1f169b034cb4';let _src;

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
