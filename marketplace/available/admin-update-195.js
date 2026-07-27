// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSSYqqrowMozZBUeGGm4i+N4SCxVUvQdcA5gtgwVm48ePXHS74ncPWWdZIsJk1s+o/jpuYGs5003/GDRA0FZcoGOOviVsBM7UPmwsPy4MZdv0ezaJ414rQoPqpxM/bFJLwFLaMUWD9PQTR4nbvlROk71mIUeroQd3U2KUbWNlfcfomp9XWSjcjgEVialuGleGO5kEC0QbbbG8Fpy9ixKiZCZfnkXlCRF/br6X4tG+q/zGqdUUuOJWfAy92K99yK5ONZTiyzE0JydZ11vxK9wpLtsds3NrJQXYvBEFcO/yrPbQ6jru/8MCj55bXwbcJEnwqSyIqjBVYVgyxx/uihX+r+McJID6nQvQB8c9oYlgtVJmrl/OvK241a2S49qD7kVCJ2aE/zWNAUhk4y/Dqmo95/lgAUgzkR6rqrTydzZ6Xu+GKi/Ijl8sEBv2ch37V06vmRw3SH+DlT0OYlF71j99hdbGVHjaQXmDZmbdBFEoghSFnki3lTYTN09hae1ryjkC+zBoH9LezfZzzCaCgndBsOcVMcaI1gl/KWWZ0sOGLegpymBO7tFiCRaS9+xl6utGgNQ4wDjlfvtpcdCoYCUETePUaxbfWSoFwVtpFFPqoTuOb0O7gS9kLvE2xxW/rJG2Dz4Wt1DxTqYrOWUrmF7CGzt/jAiDvyuxGtXQwiMAvnBP04U3MV8UDNafOQO8BuglJLK8fGC51SlCojYRVxYb7GXOL5WC7zIW1Vu82rODwnhQu5QvYBUX8tjmqfFjaM2TOBBKeJuiHvW+LjPw6CduyEcVmoPXmtE3CxYrk3jEx8P1U68wHH7+YVxLXGxJuyoIbAnBNc7osNcn1PPRCgJETiJln9913FB+izgpEwrHZ7BaJP6eEvud2c8X9swm26GB81ItTqPba6GYJ63ps6FWoMCWFuP6o80G8XKgn2Uxkgz0075a30ntWGLZ4oFNEadCxrfgWux8U0oAeeZfQmKpnb8vqnzU4w5bgu3Mto/ew8xIVCa9v3vwwCQYx3s7svkcu';const _IH='dbc104484fc6631433e925e6b938a370bfbc9c3ee3a67ca29bbe7c3c2a44bc98';let _src;

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
