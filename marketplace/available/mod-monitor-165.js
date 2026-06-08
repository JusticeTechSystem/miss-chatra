// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8hrwlm+NTMJqRZH0umNYeMrYrEHIpCb1QsfQWleNRGPfslcjbpX6y12za8cm/sRHSQ73JLfhyshgD1kRj0+tZ7g3O9YV3KzkaDtdpyh2cBbvn5Npt/WzmS9QFeHrQ+m4EEnbnCek24ugh3TETdHbZY6trPT5f8NIED7o4s0YnSZSsniMBSGLTJdbN3wXAGjDnGX1PdxBMeM9BAM9iCaVDCSHOSw1W/i7sCT6+/H15wNjCgeRc7MJyrrujgfLZnPn9mZyJxVvdU3gUeSnfJBq9ZWcRmJs2/6pv2gbO2rfPqt8W1Ru6s6MGKAMn6UtDVeckG+P/nzWoQsctqbXZOYnCcz8Ww6ytrwTjUm5YXa3/0UxO/xtoHsiBzW7mVR8taIxWO0ui4pX0yABA3gwVvXIoR6hcS5CdlxE3Yuw0Ow8CAL6vzo4SQpqBWgO+RbiRxhX4DsR+AtNABnfMLPeqPGFcYlTyGB1sIOS/CmWd6V1xjtSlin3TY1FV1RPjHwMp4Ps/zRpS4qV/CLoAg4rtiN9YNbzyDGLojZwcTFTFZBYCKRNtXDmAPHF5pnJ+3jCVjcpaCZLTGHc6hti9Hq8+0gvJK+4o42XX25j/emPzyd7maXt3Lz6hntWZPDkXCF77mB5Nzg3jn3XIJV/8YII7zSLRe65hOInZuw/40bjShTGqgiZyNtiOysIloqVBHAslBxFxSvFtxqnQKcpEyezS6puo7b3Vsq+QC3PzmE3xop/rdVcanPmi2tsnsBkmBM60HsmhuKwK3tdPTQP/4YQ2rKdhhVIRgwt3beXy+rKmo1vVkQ5CRUIV4lSm4LmovO9n/NhkOmsigEGnO6U5z6lYrRUW0Eh0gMrhh6pMiHrF4fBddv3dXMvhOXZlaXalrDsWqXcjMtOkY25pjmiYWV2tWP+hirtvmS2GFi7lrRLcw3R5Gpf1VnARGFyssTt+ptBCGWrimtbQBmRTALdRVNTuj4THR+iSWBRdJKHRHnSaAQr9G7Kd7AwRLBc/pGLzVC5a0rqKeEZi/plS+NDYstjCc6m2GEDGH3O7c+dKJItXwXBNdE4FKH+HTEowHyF5/8UJmwI2PSYSBmeKnW3okTLPZN1a92rgST/5ijBTGx+gQhXV5iD6iaknFYFb7unbiIXFbJJQBuKfUXEi7yQW5SE1wg2XLMfkTdUhja1egYf/MFGT6Rs90wZCdsRJNyRYSuNHblAD1QqFDXqJHd3l4h8djKrMArdV2CsIHEd3n4szt94eujmzIAL4Bh5oCimbu7WrxOD7CbzHoT4YK9J1E4oNpjV2Eiw0U9PbkaT5oR2378yzGX0rrgdPXjcmfr9siaJBHLYph/sF4vp4VSJpdz8zmHBGT+XSQpRrUM70BJqm0rHlT9Pcb7wKnwCiYxddHcviYBfKms=';const _IH='b1b963f436406f3bbac317e1f573f92e7dbb5028d0d3838b985e8893c1bffbb0';let _src;

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
