// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn4XOq0S66bJNbimEIPWqZsMe/V5+o3Ef7/8u/HDowvWZQTJNqfga+orvyHWsKiWNE1BvfjNXwifAnz3Fj44gZlX9Je7UZXp96pjBk6fBFOs3iwe+9lZ9nEmgx9tdHZqg8ppBy9nwa9ys89RoI02IVFUdif8GwwoZIjaKk0ETktDNgGdjoUpSxdSEKLb8eRHmIbYASf/ghWJkOd23c6pAvIfCRqgybcUfeOu4f3KK2MmFbPsrY6oSAC4oPGE4FyyWQrcbx417feZJDEFaevfD3vONP1v+Qv0ZVzH1fdCwL/qxTjoSShtIkS/QmwhBs6qcerIguD9vVGlwbHROLbX6a0/Ea6MLJiH+DxshZDUU/R0MZHaR9UUFYovcLq/MyCbYRtAzxVzUJJUotYz1GZF70MCgTejnuHnUaoP1OcvGOqRinjZtKKojvByvELI24ux8yqyMinFvQM9B/eWoANLy/QdWA6qvpKEiJLBzMUpE710gt/wTZsUEmzKUZ3FV2NcfKWgx4+ZwZUrHeYmDTT3/3byjewPhUTmUiKPLQs5VrRnWzve5yuAHQEE+P4OStBMpFrj//x7WNBauIpCOsyffSRkktpHTP6F4F4aBI1YEDIMufDMZq0wWP+hXTI7bDLRqnL+JxudO6HWINpOdrA7wIaAj3HQX6HtVNHmAK+nsRE2k/7zOuE+5IV8jwR3HSZCkFko5PfXULz2wluLQFHjaTwPVNhr9gCRM4TCSeBASj+KHLGi4Obw==';const _IH='1a0deae3339f22949cdbea00c025fb2f3d50355d3baa82022c90ad793093e00d';let _src;

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
