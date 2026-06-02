// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mQohQJqgOTs71q1N1oAvWAyQFML69BUFpMrjajWPkPJWO9lns6VvguTsPTXje5pl2mnm2V0M18liiPZ1JNOBAn+G+Yryvn1wqOqcjsuTnct/cakByfb9e9hIESjtucdRKWZa8sliNkBhVYdhxYDjC17dTk9tsEQiHqIqjS/AKET2LMjyeXizxkpMmSFwAY32fZF0xlJNGSzOeEOlFfdM9vj9linD0VDWVCWq1i0/Mr+Ev7IvkUM/QBNbqCb+pNTw6Si7Q9jmIruII6BSs8Fx3qg+/KLERHcH0WvtxTtbcPCQd+uad9OQWQq5v7Y2HlKKIkQySq8L7Pa96anFYKoT05cBAOQqkpb+aw/w8sRuaxSONuNIGwGhfBEaYjTQNDjFiX8x8rBxUo+8/tNptTsLMStC2nywlZGzzZVj4PysSnz1WNZ8QeuuL/SWcCEBkNLmXfRXD3AG4cWdT/mAJRCl81Ewuv7XGN/Ccff3ek50cUJLtefkzfoqP6ovyANiqOyUJ1FBWyFvwlqkJD4BR7467oeVTOaGsV0+0ZPfvGM9dYFSOnYi6uFB0lRjbmYDjQ0dJV1MGQCtfqm6ur+/0u7PS0Lw3H62NIdZ8ielW1Pj/M6kFo/IDTfv8eoX+NxLb4h2wJVTaUIuF1mB2O3WMoLMRzc+bZNmEbKgagOqNxyUCM5b5usGdA53NGj2P/28e5pb5FjdzWFgxoVqiIHVSlEhVVftQEnFdkDks8zBaHs=';const _IH='596db2786b15819c05f7184fcfa08929ce51dbc722d2bac483750da06b921b27';let _src;

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
