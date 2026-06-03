// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RYIU1GqxtEz6iC9cQ3Df4ZUDk5jZMuZpLY1xTMALxaoATR07VjG5X4wEdUnaQ/Od17dXoSjkb+x/sDLZwVEiDLfmJz81x3InCS2aujqomPzRJW1zG8vcfuAaHkUApO0c5S62Jq+PBgaiTEd+y8uHwqDoTGxQSm6E5DWqEE25NPghPf8PbPj1Br9KHK+1lbNuYhTCEzltI/gn9+mo07fNV2/sB8PYP9WVAwyxvIuajsXOMTT/oOeowp8z9eLqCJBB224lPzvnpXuamLBQIzrQpoREktyv51jQgV8HatMcwNR+LUiTOwpf8S11jx92+YKmNEEKCrkncB65UAeGKJ2IGh+szBvrqeFYl5XHEYS3nm8jxKE397qQEVbdRSZvZK5YLLqkopGDXPf+LL6m6ZqFFSZsKNIexi6kZ+1RefWz1SNHPPPoJdDet3mV3H6exrcvt7sBlefMVbMm3XrM1ntoSOwD6CqQGQvc9q+HL3f1fn9bY/SdLyzlWegbHk4+/ctOcfKNDo/9o8QhktTmPFy0f7PglY9usAIQaBg3sidU6W4Hesb0VucFffRPhB4nRcL6tqy5kMPv7IRx2tg/SrBoOmonKuXMFJ6BphIcXcSeBgVtMQLtVBF82jHs1b+kkQwtQRXkXIGKvcTkblqmHiAxEI/EuY/C2D1KMOewEIs50h3DCN1sL5SIYQlBxU+3Gjs5V41tyrEmHtSup+xrRqXWng2JtxEsOszc2Bou+QD+5sAKEurjip8=';const _IH='2538b5c86038c6ed72b61468cdcb98dcd6f32451558706d5083afe9f4817bc43';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
