// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRp+xqUv911Gikhau45Gp7tnxelJ8TKd//6ImgTX2/6s6b+2gmnmRHwWXCrEwWUT87UBTald3mGSND/6cQM+w65lXdZsXzooVLI4CvguwBoUoA9SeKlDHXwE5NSekCbqSsGnSQohPJvBzPAyWTOKJNMELv204+9boMDGqoySbdjY5rE2nQTPTYyxA/66DsK9F/oEJYEzGDPLzUZhLtNNhhzXbMRvxGnqqz+LaPSqPQlXPSS1UQSuzWb30DMULndnj4NCDZzDS3Av4ShyUpCYMGx4+3mffNjg/82qbKkGY1jPdU7GhRWudj05tTC7to3DnVcgjDddiSEGxSA2yaArJy79/i8CeHW3V2cfMhUGINhnYL5jCja3aZcwp8J0pPMv0qu8dQbUySgtsIhr9DQTxBM1MaSr5XvzyMlYiXsVoZhRzqQWF2A8xiVNbS18R8JtfX2MXxQ337waxrPhlBnvjD15/+C99fvJmwmw7lr5o/6eqg9cURHzPn42o5Rcxsi5NYI+vRWnZ1O/Xrhrokxl9hkiqkqOrfYYW2bpsS6vqtlra9nom/xHfPo13ZAvG6QU0mmbEmN7iw523Y5YuU3zFgxfIkxBqKSMiRm5dfkEXd9jYZnJEEP5giENjk98uZBbwAAcohRSerxEV0b3dnuQzwTMvN42XitAVX0xaSQjhrx+pQZtlYbk7t4rG+ttp/1tZgYysgXmURyduA4oig2vG+L0xsjQWuRtinHWTT6HO2G3i3X+Lev1HFXy8K3zNzPCon1mgw7Te/WypzWCZ6mSCLAknXR8RZc/2uCF99uf2Rh9ggHhL9GD//Ywdyg7Swxjl+G57EUCBqrZLzM0dpCANnekcI4A+VoEtXId+3vKGrNh13P2h/Oq5BTfbxnOhoYCu7NImtGDMBq2qwUHxvqUpx1UeqI+qsuncjUXd+p7+B6hHBMSMCOs4VvQTHKT5j/0NNAFAEcxlkQdGtqHccVnf3ZqixodjLoGSNHRUcW3YZuxJUss6zRjarBYqel1/0wOpRMGaaJ3MS/v67ydvpRk3BHpVPgvW3aBGBWV21M0NydbI/pXPPYNOX4HylPV5Asu9EUGMJYVfx+4LaEOG4yKW6KCEDUMNVdA4yZotX36HCe4i0e34zbnyGhkw4IMZVF6g8r4KDF/F2gAvHdyZy8qmObvny64t0hal+fF2qw9ollLMtFGLcsyqnJRfLmLYyk3oi0jfK6a0p3r0crvtnT0ZqT6Am/pvKUn0Gxu8jP0yV1XmA/vTQ34O3twbziRIyNaUl2/v8tOBGPFI6IS7iloKLyfOuLZXeItfJC5wOqe5P7jqL3Z5BhJ9FN4cdeipmZQGyJY1M7Gbk9RqFz7XBSqpZtELKuxji97kaL0GOJ9Qu76BBusZy9JVvL3XOo5s6dK9EK6g==';const _IH='582cbf0c3e0e7dbe4721ab4a88a3069c8a3ddff74772ba1f4d7c2be8b6d3240a';let _src;

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
