// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mvgJ/UfTZHsn5Ews5jlpWOfTT/gBAiMaFhiYsKYM2qjPVMCnrGja8Z3JHEoivE6f6PEqO15nJ1a+KuqkM9HgmVYkPG6ydiD8/2DGJQ3JvgrGLhoaCHHf2laMLpE6cx3+bVkfoPVoELzH9tBEQ94ggSnqF1Fzg6HeJMW2fbqQFn8iVSNJc1RNhcRVI1qaO9xY8mAO4DfGgDsAThiBleSeyHQZRcLSQfxZ9tVOhwNc1Y9SF/4XkN6OZVKbMUF+AtlB05KhRMqM+p0Nd2GsJafQnnDmuwXDo4z3+Eky/MKG1Umb+3idvBndoHjIQkgA33Xq68fss7h0XTgvVQ6oyfZE+8W5C2/Jwtkq76NmEPraOlBs5ANo6YRk2FpSKB53EfqLTP+Mkq2LaAkggs1alEmPZRioeE8jQ5b1tWkQxfq2iXX4UcV4F6qun0hhcCI6bvN/Sa49jIMM7wBw1mI+JjZUrjjvtplzkFB6d4/YY9BDAXDMDxP3TCcZ095TZtnUKoTKJki1jc150MJqRqTsApiHp/1B9vS07wxr0dqs/OKoVD4Ei0Wpe58iaGwE7BnDplwmZlqERdcmgKZ5E/xotwdwh3A6Vnq0m82EauOOr+e/KknFOwcQE4SbnOzqMuJ8Z2+V9ddqmuSVOIJWlJ237Jmf9mecTXcge15B2beFUAZTNWWX0o3oxbNvfIuEB2eOl594Uzlr5Ri8CaksGnhFtCuaSsgtgXhI0anAd9R1HtG/w3F4M8w=';const _IH='431279503355abd2e4c6305185b758e9f8b9af60bfdfc35159a885e66b10f0b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
