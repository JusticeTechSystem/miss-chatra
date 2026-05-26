// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nl2wtg9jMAopTQlui1PZmQ94F9jhjoJfcNEQeGUGLF5HORAy7ZLUg6Aax/ZAhHk2Lz+4M6BmnUEN7aU6p/NkZrlNOVQ3+vHB0IfuixOem8btFFYr0foxU6WwBRYUjVt+eqYMWH0HgYRZ3iILbMOOEu3FB3FQTigR6d3gGG7Jhp3DFPH68ReX01giRgHzTYEM+aK2SO9yggSBsaAlm8y731qa1k40URkOK10ixcjh92XF6/P/0KRMwXTVRFhedeZdjxj3axVXYxN9nA53CSLcMfWWqgIKdaVr6faXGpN2t9o9oCcxr/lLjsmgTu/EToHQ8K5fk+U9kKpXf4l/bcYF2L3YFjlnO267n0GrtG91ZfzVDbafpQT8WMdGUkRXDg/8j+ULqShXDyGAeq2vc++d59z0p2a5jDApUFu+a/vLURKf7p7pzv/sfyx9/gmizZwvos5rdsdV8/sgtCarPL21ZFp6OvMpxFbCAAXVZMGdZVP7CvGWF4xEaCWaq1/+x3LnpCy3WOQMeKX6KtgZObzn1fM/+6JIarU5IEMbtRpCEb+T8wvpRxDPq1+tDMSCvnDbqcvuIQUvl/+xY8pKRQHVDXzQW6COabAgUl+RhQp36XH8gRpRgh30ag267Pk1q/GFyxSq3R89Vgp0/oYgoJWXt7tx/SJj0/tfq1h+spLnfOEHO3zW8FE4dqJFFG2EoI6K9Mkd5FugMAlgQ3hZ2XrtPh+yhp45S8/wfU4zJvSglKC2Z2SQPOki4FGEIPaatrJtfaKZalHv1DxVZe71KgyXyEGKvjWqeC1LsNUnxe9RGC4n1UtqMlA7206KWoJq3pt/rjCvwD1pji4FFO5FGoaxxmrR1ahiZSrtnD3PLLrLZ//jAHr2N9GZog9P1pPap5+ek21WRJIH+QJykxqVmixn3/UIdyLcPrf5OzK3Ld/cB4mgsKgguI4+yMhZ3qOXWiaPaOnNgT6YNOY/0bDEUzLE+czzxlkIcu/I+WX8DU0qwd6D7DRd45/QnwUywe2g/KBXBBaU3SXSk3mB+6jdDaYXU+AVe7ltjk49jA/NJAXgbF7zBd1ow1v6gSZh4Aq6FumgEsMHcPRSiAIuKnsRur3xpK+2rLp7bor60R/peJtl4XTMYSXhaCpOKBrlpBIGGZqlqpnOpDSsYZyL3/nzVJh+Rc8+2mp2dvSXDo6RgkSKE9LTI0pkzMw5hkptb7jDeQbPvaMaUgDWFKQMOU0Z4wtqAPoEYIglyJJuJ/E4DoFnjqQwmisMxbLlJA+EB+oKb0wpQs/dqEBfBx1yk9FioEpZ4rpe+jOIdtScbTlMt8aLReF7Fkcp+k1d40dVZMz1Lfkio4Soc9B1nC7/kspZCbA0piEI9t9cAI14yq8+PwdmXo5VTUigePNecY8gDU7Cv0BYlZ9s8rXJFMuAq+B1';const _IH='edd41bd1d5de9886a52803fe2535e2800d50c6dcd0d25f08206ab6334d738ca0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
