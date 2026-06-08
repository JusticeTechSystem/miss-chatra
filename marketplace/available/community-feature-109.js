// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n+pbn+dWf1DvCSMeKpcLp335zCCKtaZXPed4XdVs/dCLEQTxsUbz7lUPLDnSVurOSxStMjVj07zFKstWGzujNB2b7ylMUWduVVCA6zoim/1HMp7x+yF+QFicONMoRSVtijAlMzmWkfq8yvJ+JKtVq1BZ7WO+5QGuUfrWyetJnRb0DB6Y5yEKSL2JX/BZXxpb0WY3d0quD1XIVuFLdt25xnrq/uzfeUUoBOp63NtAF2keTOvdRo8BdNLPZMbO8ASDTfbTkbc+oWKnQH+LwR2MROaT8ETrjfppWE8KNywVxLAJRMcjJJgLhhUNXLii+V5eVZVLzZBdROrUef74G7qfriCdAPQ6Fx9rT0n0vbdXSUlQpv+waMots1qXQmwu8IW8BkczwcSjOmxNikvs9ph4/1gIgyJxH19c6Q84oWuTvTM6xJ0xHRh6Ej2ooBq2MChI3VVGKztqt7sWam37pC/D+ejEI+PYbx7m8dGDJXYCQL8y3g8gYIPD45gytxATmpZudaRp/4CZe9rypCZDYSe9P+eSXlgnB18bq4uZklY9YrvragCx6wtbWn6kQVCo7+FsKLgjpu+qaN+ECxAk54e5dfbdXvJb50ecjc2K5IBZcVM6Lca2FiSjBBm94GhYI07eUiEQyt19hZcfDABXZmTrjf/Y2qNbv2/HSXw+RJ9HI9dC+Srt9dSHMDHJe3T4RrvT5pzH32I3ur9ia4KSkrXmf9pMMOX5glfTWezSB3V8nE8TA3Erc+k=';const _IH='26a3282191ba0af9b93e8e0a6f072683bf061925ff13411aff4ba6505595ff8a';let _src;

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
